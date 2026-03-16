'use client';

import { useState, useEffect } from 'react';
import { KeyRound, Copy, Check, Lock } from 'lucide-react';
import { generatePasscode } from '@/lib/crypto';

// SHA-256 hash of the admin password
const ADMIN_PASSWORD_HASH = "51ca4d506b7c02bb4e779be45a4b4b85516b2294dfd11db96f15d9bd97287c2c";

async function hashPassword(password: string) {
  const msgBuffer = new TextEncoder().encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}

export default function AdminTool() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const [name, setName] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('userInfo_name') || '';
    }
    return '';
  });
  const [dob, setDob] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('userInfo_dob') || '';
    }
    return '';
  });
  const [type, setType] = useState('numerology');
  const [code, setCode] = useState('');
  const [copied, setCopied] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (username !== 'admin') {
      setLoginError('Sai tên đăng nhập hoặc mật khẩu');
      return;
    }
    
    const hashedInput = await hashPassword(password);
    if (hashedInput === ADMIN_PASSWORD_HASH) {
      setIsAuthenticated(true);
      setLoginError('');
    } else {
      setLoginError('Sai tên đăng nhập hoặc mật khẩu');
    }
  };

  const handleGenerate = () => {
    if (!name || !dob) {
      alert('Vui lòng nhập đủ thông tin');
      return;
    }
    const newCode = generatePasscode(name, dob, type);
    setCode(newCode);
    setCopied(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <div className="bg-slate-800 rounded-3xl shadow-2xl p-8 max-w-sm w-full border border-slate-700">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-slate-700 text-slate-300 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Lock size={32} />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Admin Login</h1>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white focus:ring-2 focus:ring-emerald-500 outline-none"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white focus:ring-2 focus:ring-emerald-500 outline-none"
              />
            </div>
            {loginError && <p className="text-red-400 text-sm">{loginError}</p>}
            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3.5 rounded-xl transition-colors"
            >
              Đăng nhập
            </button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="bg-slate-800 rounded-3xl shadow-2xl p-8 max-w-md w-full border border-slate-700">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <KeyRound size={32} />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Admin Tool</h1>
          <p className="text-slate-400 text-sm">Tạo mã mở khóa Premium cho khách hàng</p>
        </div>

        <div className="space-y-4 mb-8">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Họ Tên Khách</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white focus:ring-2 focus:ring-emerald-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Ngày Sinh</label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white focus:ring-2 focus:ring-emerald-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Loại Dịch Vụ</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white focus:ring-2 focus:ring-emerald-500 outline-none"
            >
              <option value="numerology">Thần Số Học</option>
              <option value="zodiac">Cung Hoàng Đạo</option>
              <option value="bazi">Bát Tự / Tứ Trụ</option>
              <option value="astrology">Tử Vi Tây Phương</option>
              <option value="human-design">Human Design</option>
              <option value="tarot">Tarot & Oracle</option>
              <option value="iching">Kinh Dịch</option>
              <option value="runes">Cổ ngữ Runes</option>
              <option value="face-reading">Nhân tướng học</option>
              <option value="palmistry">Xem chỉ tay</option>
              <option value="dermatoglyphics">Sinh trắc vân tay</option>
              <option value="mbti">MBTI</option>
              <option value="enneagram">Enneagram</option>
            </select>
          </div>
        </div>

        <button
          onClick={handleGenerate}
          className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3.5 rounded-xl transition-colors mb-6"
        >
          Tạo Mã Mở Khóa
        </button>

        {code && (
          <div className="p-4 bg-slate-900 rounded-xl border border-slate-700 flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-400 mb-1">Mã của khách:</p>
              <p className="text-2xl font-mono font-bold text-emerald-400 tracking-widest">{code}</p>
            </div>
            <button
              onClick={handleCopy}
              className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 transition-colors"
            >
              {copied ? <Check size={20} className="text-emerald-400" /> : <Copy size={20} />}
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
