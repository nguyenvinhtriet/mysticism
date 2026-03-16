'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { Suspense } from 'react';
import { ArrowLeft, Star } from 'lucide-react';
import { UnlockPremium } from '@/components/UnlockPremium';
import { getZodiacSign } from '@/lib/zodiac';

function ZodiacContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const name = searchParams.get('name') || '';
  const dob = searchParams.get('dob') || '';

  if (!name || !dob) {
    if (typeof window !== 'undefined') {
      router.push('/');
    }
    return null;
  }

  const zodiac = getZodiacSign(dob);

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <div className="bg-purple-700 text-white pt-12 pb-24 px-4 rounded-b-[3rem] shadow-lg relative overflow-hidden">
        {/* Decorative stars */}
        <Star className="absolute top-10 right-10 text-purple-400 opacity-50" size={40} />
        <Star className="absolute bottom-10 left-10 text-purple-400 opacity-30" size={60} />
        
        <div className="max-w-3xl mx-auto relative z-10">
          <button 
            onClick={() => router.push('/')}
            className="flex items-center gap-2 text-purple-200 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            Quay lại
          </button>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Giải Mã Cung Hoàng Đạo</h1>
          <p className="text-purple-200 text-lg">
            Bản đồ sao của <span className="font-semibold text-white uppercase">{name}</span>
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 -mt-16 relative z-20">
        {/* Basic Info - Free */}
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 bg-purple-100 rounded-full flex items-center justify-center shrink-0 border-4 border-white shadow-lg">
              <span className="text-4xl">✨</span>
            </div>
            <div>
              <p className="text-purple-600 font-semibold mb-1 uppercase tracking-wider text-sm">Cung Mặt Trời</p>
              <h2 className="text-4xl font-black text-gray-900 mb-2">{zodiac.sign}</h2>
              <div className="inline-block px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium mb-4">
                Nguyên tố: {zodiac.element}
              </div>
              <p className="text-gray-600 leading-relaxed">
                {zodiac.description}
              </p>
            </div>
          </div>
        </div>

        {/* Premium Content */}
        <UnlockPremium name={name} dob={dob} type="zodiac">
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-4">Bản đồ sao chi tiết</h2>
              
              <div className="prose prose-purple max-w-none">
                <h3>Tính cách tiềm ẩn</h3>
                <p>
                  Bên cạnh những đặc điểm dễ thấy, người thuộc cung {zodiac.sign} còn có những nét tính cách ẩn sâu bên trong.
                  (Nội dung chi tiết premium...)
                </p>

                <h3>Tình duyên & Mối quan hệ</h3>
                <p>
                  Trong tình yêu, bạn là người... (Nội dung chi tiết premium...)
                </p>
                <div className="grid grid-cols-2 gap-4 my-6">
                  <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                    <p className="font-semibold text-green-800 mb-1">Độ tương hợp cao</p>
                    <p className="text-green-600 text-sm">Bạch Dương, Sư Tử</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                    <p className="font-semibold text-red-800 mb-1">Cần chú ý</p>
                    <p className="text-red-600 text-sm">Cự Giải, Ma Kết</p>
                  </div>
                </div>

                <h3>Sự nghiệp & Tài chính</h3>
                <p>
                  Con đường sự nghiệp phù hợp nhất với bạn là... (Nội dung chi tiết premium...)
                </p>
              </div>
            </div>
          </div>
        </UnlockPremium>
      </div>
    </main>
  );
}

export default function ZodiacPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <ZodiacContent />
    </Suspense>
  );
}
