'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { Suspense } from 'react';
import { ArrowLeft } from 'lucide-react';

function PlaceholderContent({ title }: { title: string }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const name = searchParams.get('name') || '';

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <div className="bg-indigo-600 text-white pt-12 pb-24 px-4 rounded-b-[3rem] shadow-lg">
        <div className="max-w-3xl mx-auto">
          <button 
            onClick={() => router.push('/')}
            className="flex items-center gap-2 text-indigo-100 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            Quay lại
          </button>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{title}</h1>
          <p className="text-indigo-200 text-lg">
            Đang phát triển tính năng cho <span className="font-semibold text-white uppercase">{name}</span>
          </p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 -mt-16">
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 text-center py-20">
          <div className="text-6xl mb-4">🚧</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Tính năng đang xây dựng</h2>
          <p className="text-gray-500">Chúng tôi đang hoàn thiện thuật toán cho phần này. Vui lòng quay lại sau!</p>
        </div>
      </div>
    </main>
  );
}

export function PlaceholderPage({ title }: { title: string }) {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <PlaceholderContent title={title} />
    </Suspense>
  );
}
