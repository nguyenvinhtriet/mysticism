'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Sparkles, MoonStar, Calculator, Compass, Fingerprint, Brain, Eye, Hand, BookOpen, Hexagon, Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  const router = useRouter();
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

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    localStorage.setItem('userInfo_name', e.target.value);
  };

  const handleDobChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDob(e.target.value);
    localStorage.setItem('userInfo_dob', e.target.value);
  };

  const handleNavigate = (path: string) => {
    if (!name || !dob) {
      alert('Vui lòng nhập đầy đủ Họ Tên và Ngày Sinh!');
      return;
    }
    const params = new URLSearchParams({ name, dob });
    router.push(`${path}?${params.toString()}`);
  };

  const categories = [
    {
      title: "Các phương pháp phổ biến",
      items: [
        { name: "Thần Số Học", path: "/numerology", icon: Calculator, color: "bg-orange-600", hover: "hover:bg-orange-700", shadow: "shadow-orange-200" },
        { name: "Cung Hoàng Đạo", path: "/zodiac", icon: MoonStar, color: "bg-purple-600", hover: "hover:bg-purple-700", shadow: "shadow-purple-200" },
        { name: "Tarot & Oracle", path: "/tarot", icon: BookOpen, color: "bg-rose-600", hover: "hover:bg-rose-700", shadow: "shadow-rose-200" },
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center py-12 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl shadow-xl p-8 max-w-2xl w-full mb-8"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 rotate-3">
            <Sparkles size={32} />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Khám Phá Bản Thân</h1>
          <p className="text-gray-500">Nhập thông tin của bạn để bắt đầu hành trình giải mã số phận.</p>
        </div>

        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Họ và Tên</label>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="VD: Nguyễn Văn A"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Ngày Sinh (Dương Lịch)</label>
            <input
              type="date"
              value={dob}
              onChange={handleDobChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
            />
          </div>
        </div>
      </motion.div>

      {name && dob && (
        <div className="max-w-4xl w-full space-y-8">
          {categories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (idx + 1) }}
            >
              <h2 className="text-xl font-bold text-slate-800 mb-4 px-2">{category.title}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {category.items.map((item, itemIdx) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={itemIdx}
                      onClick={() => handleNavigate(item.path)}
                      className={`w-full ${item.color} ${item.hover} text-white font-semibold py-4 px-4 rounded-2xl transition-all flex flex-col items-center justify-center gap-3 shadow-md ${item.shadow} hover:-translate-y-1`}
                    >
                      <Icon size={28} />
                      <span className="text-center">{item.name}</span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </main>
  );
}
