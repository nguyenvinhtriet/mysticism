'use client';

import { useState } from 'react';
import { Lock, Unlock, KeyRound } from 'lucide-react';
import { motion } from 'motion/react';
import { generatePasscode } from '@/lib/crypto';

interface UnlockPremiumProps {
  name: string;
  dob: string;
  type: string;
  preview?: React.ReactNode;
  children: React.ReactNode;
}

export function UnlockPremium({ name, dob, type, preview, children }: UnlockPremiumProps) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState('');

  const handleUnlock = () => {
    const expectedCode = generatePasscode(name, dob, type);
    if (passcode.toUpperCase().trim() === expectedCode) {
      setIsUnlocked(true);
      setError('');
    } else {
      setError('Mã mở khóa không chính xác. Vui lòng liên hệ admin.');
    }
  };

  if (isUnlocked) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-8"
      >
        <div className="flex items-center gap-2 text-emerald-700 mb-6 font-semibold bg-emerald-50 p-4 rounded-xl border border-emerald-200">
          <Unlock size={20} />
          <span>Nội dung Premium đã được mở khóa thành công!</span>
        </div>
        {children}
      </motion.div>
    );
  }

  return (
    <div className="mt-8 space-y-8">
      {preview && (
        <div className="mb-8">
          {preview}
        </div>
      )}
      
      {/* Blurred preview content */}
      <div className="relative">
        <div className="opacity-20 select-none pointer-events-none blur-[4px] h-[400px] overflow-hidden bg-white p-8 rounded-3xl border border-slate-200">
          {children}
        </div>
        {/* Gradient fade out at the bottom of blurred content */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      {/* Unlock Form (Inline, not popup) */}
      <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-indigo-100 max-w-2xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center shrink-0">
            <Lock size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">Mở khóa nội dung chi tiết</h3>
            <p className="text-gray-500 text-sm">
              Nhập mã bảo mật để xem toàn bộ luận giải chuyên sâu và biểu đồ các giai đoạn cuộc đời.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            placeholder="Nhập mã mở khóa (VD: A1B2C3)"
            className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all uppercase font-mono tracking-widest text-lg"
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleUnlock()}
          />
          <button
            onClick={handleUnlock}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors flex items-center justify-center gap-2 shrink-0"
          >
            <KeyRound size={18} />
            Mở khóa
          </button>
        </div>
        {error && <p className="text-red-500 text-sm mt-3 flex items-center gap-1"><span className="font-bold">Lỗi:</span> {error}</p>}
      </div>
    </div>
  );
}
