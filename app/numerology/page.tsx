'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { Suspense, useState } from 'react';
import { ArrowLeft, Info } from 'lucide-react';
import { UnlockPremium } from '@/components/UnlockPremium';
import { getDetailedInterpretation } from '@/lib/numerology-data';
import { 
  getPersonalityInterpretation, 
  getPinnacleMeaning, 
  getChallengeMeaning, 
  getDevelopmentMeaning, 
  getPersonalYearMeaning, 
  getPersonalMonthMeaning, 
  getGeneralAdvice 
} from '@/lib/interpretations';
import { 
  calculateLifePath, 
  calculateDestiny, 
  calculateSoulUrge, 
  calculatePersonality, 
  calculateAttitude,
  calculateMaturity,
  calculateBalance,
  calculatePersonalYear,
  calculatePersonalMonth,
  calculateHiddenPassion,
  calculateRationalThought,
  calculateApproach,
  calculatePinnacles
} from '@/lib/numerology';

function IndicatorBox({ label, value, description, highlight = false, onClick }: { label: string, value: number, description?: string, highlight?: boolean, onClick?: () => void }) {
  return (
    <div 
      onClick={onClick}
      className={`flex flex-col items-center justify-center p-2 md:p-3 rounded-xl border transition-all cursor-pointer hover:scale-105 ${highlight ? 'bg-violet-600 text-white border-violet-700 shadow-md hover:bg-violet-500' : 'bg-white text-slate-800 border-slate-200 shadow-sm hover:border-violet-300 hover:shadow-md'}`}
    >
      <span className={`text-xs md:text-sm text-center mb-1 font-medium ${highlight ? 'text-violet-200' : 'text-slate-500'}`}>{label}</span>
      <span className={`text-2xl md:text-3xl font-black ${highlight ? 'text-white' : 'text-violet-600'}`}>{value}</span>
      {description && <span className={`text-[10px] md:text-xs text-center mt-1 leading-tight ${highlight ? 'text-violet-200' : 'text-slate-500'}`}>{description}</span>}
    </div>
  );
}

function ReadingCard({ title, value, description, index, isActive }: { title: string, value: number, description: string, index: number, isActive: boolean }) {
  return (
    <div className={`bg-white rounded-2xl p-5 border transition-all flex flex-col h-full ${isActive ? 'border-violet-400 shadow-lg ring-2 ring-violet-900/50 scale-[1.02]' : 'border-fuchsia-200 shadow-sm hover:shadow-md'}`}>
      <div className="flex items-center gap-4 mb-3">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-xl shrink-0 border transition-colors ${isActive ? 'bg-violet-100 text-violet-700 border-violet-200' : 'bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200'}`}>
          {value}
        </div>
        <h3 className={`text-lg font-bold m-0 leading-tight ${isActive ? 'text-violet-900' : 'text-fuchsia-900'}`}>{index}. {title}</h3>
      </div>
      <p className={`text-sm leading-relaxed m-0 flex-grow ${isActive ? 'text-slate-700' : 'text-fuchsia-800'}`}>
        {description}
      </p>
    </div>
  );
}

function GeneralAdvice({ number }: { number: number }) {
  const advice = getGeneralAdvice(number);
  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
        <h4 className="text-emerald-800 font-bold flex items-center gap-2 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
          Nên làm
        </h4>
        <p className="text-emerald-700 text-sm">{advice.do}</p>
      </div>
      <div className="bg-rose-50 p-4 rounded-xl border border-rose-100">
        <h4 className="text-rose-800 font-bold flex items-center gap-2 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8"/><path d="M3 16.2V21m0 0h4.8M3 21l6-6"/><path d="M21 7.8V3m0 0h-4.8M21 3l-6 6"/><path d="M3 7.8V3m0 0h4.8M3 3l6 6"/></svg>
          Kiêng kị
        </h4>
        <p className="text-rose-700 text-sm">{advice.dont}</p>
      </div>
    </div>
  );
}

function NumerologyContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const name = searchParams.get('name') || '';
  const dob = searchParams.get('dob') || '';
  
  const [activeCard, setActiveCard] = useState<number | null>(1);
  const [showNumberMeanings, setShowNumberMeanings] = useState(false);

  const numberMeanings = [
    { num: 1, text: "Khởi đầu mới, độc lập, gieo hạt giống, hành động." },
    { num: 2, text: "Hợp tác, kiên nhẫn, phát triển chậm, kết nối." },
    { num: 3, text: "Sáng tạo, giao tiếp, vui vẻ, thể hiện bản thân." },
    { num: 4, text: "Nền tảng, làm việc chăm chỉ, tổ chức, thực tế." },
    { num: 5, text: "Thay đổi, tự do, phiêu lưu, linh hoạt." },
    { num: 6, text: "Trách nhiệm, gia đình, tình yêu, chăm sóc." },
    { num: 7, text: "Nội tâm, học hỏi, tâm linh, phân tích." },
    { num: 8, text: "Tài chính, quyền lực, thành tựu, kinh doanh." },
    { num: 9, text: "Kết thúc, buông bỏ, hoàn thiện, nhân đạo." }
  ];

  if (!name || !dob) {
    if (typeof window !== 'undefined') {
      router.push('/');
    }
    return null;
  }

  const lifePath = calculateLifePath(dob);
  const destiny = calculateDestiny(name);
  const soulUrge = calculateSoulUrge(name);
  const personality = calculatePersonality(name);
  const attitude = calculateAttitude(dob);
  const maturity = calculateMaturity(lifePath, destiny);
  const balance = calculateBalance(name);
  const personalYear = calculatePersonalYear(dob);
  const personalMonth = calculatePersonalMonth(personalYear);
  const hiddenPassion = calculateHiddenPassion(name);
  const rationalThought = calculateRationalThought(name, dob);
  const approach = calculateApproach(name);
  
  const pinnacles = calculatePinnacles(dob);

  const previewContent = (
    <div className="bg-fuchsia-50 rounded-3xl shadow-xl p-6 md:p-8 border border-fuchsia-200">
      <h2 className="text-2xl font-bold text-fuchsia-900 mb-4 border-b border-fuchsia-200 pb-4">Tổng quan Thần Số Học</h2>
      <div className="prose prose-violet max-w-none">
        <p className="text-fuchsia-800 font-medium text-lg">
          Xin chào <strong>{name}</strong>, dựa vào các chỉ số cơ bản của bạn, đây là một cái nhìn tổng quan ngắn gọn:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-white/60 p-4 rounded-xl border border-fuchsia-200">
            <h3 className="text-lg font-bold text-fuchsia-900 mt-0 mb-1">Số Chủ Đạo {lifePath}</h3>
            <p className="text-fuchsia-800 text-sm mb-0">Đại diện cho con đường bạn sẽ đi, những bài học và cơ hội chính trong cuộc đời.</p>
          </div>
          <div className="bg-white/60 p-4 rounded-xl border border-fuchsia-200">
            <h3 className="text-lg font-bold text-fuchsia-900 mt-0 mb-1">Sứ Mệnh {destiny}</h3>
            <p className="text-fuchsia-800 text-sm mb-0">Mục đích bạn đến với cuộc đời này và những gì bạn cần hoàn thành.</p>
          </div>
          <div className="bg-white/60 p-4 rounded-xl border border-fuchsia-200">
            <h3 className="text-lg font-bold text-fuchsia-900 mt-0 mb-1">Nội Tâm {soulUrge}</h3>
            <p className="text-fuchsia-800 text-sm mb-0">Khát khao sâu kín nhất bên trong linh hồn mang lại cho bạn hạnh phúc thực sự.</p>
          </div>
          <div className="bg-white/60 p-4 rounded-xl border border-fuchsia-200">
            <h3 className="text-lg font-bold text-fuchsia-900 mt-0 mb-1">Tương Tác {personality}</h3>
            <p className="text-fuchsia-800 text-sm mb-0">Cách người khác nhìn nhận bạn trong lần đầu gặp gỡ, ấn tượng bên ngoài của bạn.</p>
          </div>
          <div className="bg-white/60 p-4 rounded-xl border border-fuchsia-200">
            <h3 className="text-lg font-bold text-fuchsia-900 mt-0 mb-1">Thái Độ {attitude}</h3>
            <p className="text-fuchsia-800 text-sm mb-0">Cách bạn phản ứng với thế giới xung quanh, đặc biệt là trong những tình huống mới.</p>
          </div>
          <div className="bg-white/60 p-4 rounded-xl border border-fuchsia-200">
            <h3 className="text-lg font-bold text-fuchsia-900 mt-0 mb-1">Trưởng Thành {maturity}</h3>
            <p className="text-fuchsia-800 text-sm mb-0">Năng lượng sẽ ảnh hưởng mạnh mẽ đến bạn từ độ tuổi 35-40 trở đi.</p>
          </div>
        </div>
        <p className="text-fuchsia-800 mt-6 italic text-sm text-center">
          Mở khóa phiên bản đầy đủ để xem luận giải chi tiết về tất cả 12 chỉ số, biểu đồ đỉnh cao cuộc đời và các lời khuyên chuyên sâu dành riêng cho bạn.
        </p>
      </div>
    </div>
  );

  const unlockedPreviewContent = (
    <div className="bg-fuchsia-50 rounded-3xl shadow-xl p-6 md:p-8 border border-fuchsia-200">
      <h2 className="text-2xl font-bold text-fuchsia-900 mb-4 border-b border-fuchsia-200 pb-4">Tổng quan Thần Số Học</h2>
      <div className="prose prose-violet max-w-none">
        <p className="text-fuchsia-800 font-medium text-lg">
          Xin chào <strong>{name}</strong>, dựa vào các chỉ số cơ bản của bạn, đây là một cái nhìn tổng quan ngắn gọn:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-white/60 p-4 rounded-xl border border-fuchsia-200">
            <h3 className="text-lg font-bold text-fuchsia-900 mt-0 mb-1">Số Chủ Đạo {lifePath}</h3>
            <p className="text-fuchsia-800 text-sm mb-0">Đại diện cho con đường bạn sẽ đi, những bài học và cơ hội chính trong cuộc đời.</p>
          </div>
          <div className="bg-white/60 p-4 rounded-xl border border-fuchsia-200">
            <h3 className="text-lg font-bold text-fuchsia-900 mt-0 mb-1">Sứ Mệnh {destiny}</h3>
            <p className="text-fuchsia-800 text-sm mb-0">Mục đích bạn đến với cuộc đời này và những gì bạn cần hoàn thành.</p>
          </div>
          <div className="bg-white/60 p-4 rounded-xl border border-fuchsia-200">
            <h3 className="text-lg font-bold text-fuchsia-900 mt-0 mb-1">Nội Tâm {soulUrge}</h3>
            <p className="text-fuchsia-800 text-sm mb-0">Khát khao sâu kín nhất bên trong linh hồn mang lại cho bạn hạnh phúc thực sự.</p>
          </div>
          <div className="bg-white/60 p-4 rounded-xl border border-fuchsia-200">
            <h3 className="text-lg font-bold text-fuchsia-900 mt-0 mb-1">Tương Tác {personality}</h3>
            <p className="text-fuchsia-800 text-sm mb-0">Cách người khác nhìn nhận bạn trong lần đầu gặp gỡ, ấn tượng bên ngoài của bạn.</p>
          </div>
          <div className="bg-white/60 p-4 rounded-xl border border-fuchsia-200">
            <h3 className="text-lg font-bold text-fuchsia-900 mt-0 mb-1">Thái Độ {attitude}</h3>
            <p className="text-fuchsia-800 text-sm mb-0">Cách bạn phản ứng với thế giới xung quanh, đặc biệt là trong những tình huống mới.</p>
          </div>
          <div className="bg-white/60 p-4 rounded-xl border border-fuchsia-200">
            <h3 className="text-lg font-bold text-fuchsia-900 mt-0 mb-1">Trưởng Thành {maturity}</h3>
            <p className="text-fuchsia-800 text-sm mb-0">Năng lượng sẽ ảnh hưởng mạnh mẽ đến bạn từ độ tuổi 35-40 trở đi.</p>
          </div>
        </div>
        <div className="mt-6 p-4 bg-white/80 rounded-xl border border-fuchsia-200 text-fuchsia-900">
          <h3 className="font-bold text-lg mb-2">Nhận xét tổng quan:</h3>
          <p className="text-sm leading-relaxed">
            Sự kết hợp giữa Đường Đời {lifePath} và Sứ Mệnh {destiny} cho thấy bạn là một người mang nhiều hoài bão và tiềm năng lớn. Nội Tâm {soulUrge} thôi thúc bạn tìm kiếm những giá trị sâu sắc, trong khi Thái Độ {attitude} giúp bạn đối mặt với thế giới một cách độc đáo. Hãy tận dụng những điểm mạnh này để vượt qua thử thách và đạt được sự cân bằng trong cuộc sống.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <div className="bg-slate-50 text-slate-900 pt-8 relative overflow-hidden pb-16 px-4 rounded-b-[2rem] shadow-lg">
        <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')" }}></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-violet-200/50 to-slate-50 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <button 
            onClick={() => router.push('/')}
            className="flex items-center gap-2 text-violet-800 hover:text-slate-900 transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            Quay lại
          </button>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Báo Cáo Thần Số Học</h1>
          <p className="text-violet-800 text-lg">
            Khám phá ý nghĩa các con số của <span className="font-semibold text-slate-900 uppercase">{name}</span>, sinh ngày <span className="font-semibold text-slate-900">{new Date(dob).toLocaleDateString('vi-VN')}</span>
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-8">
        <div className="flex flex-col md:flex-row gap-6">
          
          {/* Left Column: Basic Indicators (Grid format) */}
          <div className="w-full md:w-1/3 lg:w-1/4 shrink-0 order-1 md:order-2">
            <div className="bg-white rounded-3xl shadow-xl p-4 border border-slate-200 sticky top-6">
              <div className="text-center mb-4">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Họ và tên</div>
                <div className="font-bold text-violet-900 uppercase text-sm break-words bg-violet-100 py-2 px-3 rounded-lg">
                  {name}
                </div>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-2 gap-2 md:gap-3">
                <div className="col-span-3 sm:col-span-4 md:col-span-2">
                  <IndicatorBox label="Số Chủ Đạo" value={lifePath} description="Bài học cuộc đời" highlight onClick={() => { setActiveCard(1); const el = document.getElementById("interpretation-content"); if(el) { const y = el.getBoundingClientRect().top + window.scrollY - 100; window.scrollTo({top: y, behavior: "smooth"}); } }} />
                </div>
                <IndicatorBox label="Nội Tâm" value={soulUrge} description="Khát khao sâu kín" onClick={() => { setActiveCard(3); const el = document.getElementById("interpretation-content"); if(el) { const y = el.getBoundingClientRect().top + window.scrollY - 100; window.scrollTo({top: y, behavior: "smooth"}); } }} />
                <IndicatorBox label="Nội Cảm" value={hiddenPassion} description="Tài năng ẩn giấu" onClick={() => { setActiveCard(8); const el = document.getElementById("interpretation-content"); if(el) { const y = el.getBoundingClientRect().top + window.scrollY - 100; window.scrollTo({top: y, behavior: "smooth"}); } }} />
                <IndicatorBox label="Thái Độ" value={attitude} description="Phản ứng ban đầu" onClick={() => { setActiveCard(5); const el = document.getElementById("interpretation-content"); if(el) { const y = el.getBoundingClientRect().top + window.scrollY - 100; window.scrollTo({top: y, behavior: "smooth"}); } }} />
                <IndicatorBox label="Tương Tác" value={personality} description="Ấn tượng bên ngoài" onClick={() => { setActiveCard(4); const el = document.getElementById("interpretation-content"); if(el) { const y = el.getBoundingClientRect().top + window.scrollY - 100; window.scrollTo({top: y, behavior: "smooth"}); } }} />
                <IndicatorBox label="Chỉ Số Trí Tuệ" value={rationalThought} description="Cách tư duy" onClick={() => { setActiveCard(9); const el = document.getElementById("interpretation-content"); if(el) { const y = el.getBoundingClientRect().top + window.scrollY - 100; window.scrollTo({top: y, behavior: "smooth"}); } }} />
                <IndicatorBox label="Năng Lực Tiếp Cận" value={approach} description="Bước đi đầu tiên" onClick={() => { setActiveCard(10); const el = document.getElementById("interpretation-content"); if(el) { const y = el.getBoundingClientRect().top + window.scrollY - 100; window.scrollTo({top: y, behavior: "smooth"}); } }} />
                <IndicatorBox label="Cân Bằng" value={balance} description="Vượt qua khủng hoảng" onClick={() => { setActiveCard(7); const el = document.getElementById("interpretation-content"); if(el) { const y = el.getBoundingClientRect().top + window.scrollY - 100; window.scrollTo({top: y, behavior: "smooth"}); } }} />
                <IndicatorBox label="Sứ Mệnh" value={destiny} description="Mục đích sống" onClick={() => { setActiveCard(2); const el = document.getElementById("interpretation-content"); if(el) { const y = el.getBoundingClientRect().top + window.scrollY - 100; window.scrollTo({top: y, behavior: "smooth"}); } }} />
                <IndicatorBox label="Đường Đời" value={lifePath} description="Con đường phát triển" onClick={() => { setActiveCard(1); const el = document.getElementById("interpretation-content"); if(el) { const y = el.getBoundingClientRect().top + window.scrollY - 100; window.scrollTo({top: y, behavior: "smooth"}); } }} />
                <IndicatorBox label="Trưởng Thành" value={maturity} description="Nửa sau cuộc đời" onClick={() => { setActiveCard(6); const el = document.getElementById("interpretation-content"); if(el) { const y = el.getBoundingClientRect().top + window.scrollY - 100; window.scrollTo({top: y, behavior: "smooth"}); } }} />
                <IndicatorBox label="Năm Cá Nhân" value={personalYear} description="Năng lượng năm nay" onClick={() => { setActiveCard(11); const el = document.getElementById("interpretation-content"); if(el) { const y = el.getBoundingClientRect().top + window.scrollY - 100; window.scrollTo({top: y, behavior: "smooth"}); } }} />
                <IndicatorBox label="Tháng Cá Nhân" value={personalMonth} description="Năng lượng tháng này" onClick={() => { setActiveCard(12); const el = document.getElementById("interpretation-content"); if(el) { const y = el.getBoundingClientRect().top + window.scrollY - 100; window.scrollTo({top: y, behavior: "smooth"}); } }} />
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="w-full md:w-2/3 lg:w-3/4 order-2 md:order-1" id="interpretation-content">
            <UnlockPremium name={name} dob={dob} type="numerology" preview={previewContent} unlockedPreview={unlockedPreviewContent}>
              <div className="bg-fuchsia-50 rounded-3xl shadow-xl p-6 md:p-8 border border-fuchsia-200">
                <h2 className="text-2xl font-bold text-fuchsia-900 mb-6 border-b border-fuchsia-200 pb-4">Luận giải chuyên sâu</h2>
                
                <div className="bg-white p-6 md:p-8 rounded-3xl border border-violet-200 shadow-sm mb-8 min-h-[300px] flex flex-col justify-center transition-all">
                  {activeCard === null ? (
                    <div className="text-center text-slate-500 flex flex-col items-center justify-center h-full py-12">
                      <div className="w-16 h-16 bg-violet-100 text-violet-700 rounded-full flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.9 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
                      </div>
                      <p className="text-lg font-medium text-slate-600">Nhấp vào các chỉ số để xem luận giải chi tiết</p>
                      <p className="text-sm mt-2">Mỗi con số đều mang một thông điệp riêng dành cho bạn</p>
                    </div>
                  ) : (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                      {activeCard >= 1 && activeCard <= 10 && (() => {
                        const indicators = [
                          { id: 1, type: 'lifePath', value: lifePath, title: 'Số Chủ Đạo (Đường Đời)', desc: 'Con số quan trọng nhất của bạn' },
                          { id: 2, type: 'destiny', value: destiny, title: 'Sứ Mệnh', desc: 'Mục đích bạn đến với cuộc đời này' },
                          { id: 3, type: 'soulUrge', value: soulUrge, title: 'Nội Tâm (Linh Hồn)', desc: 'Khát khao sâu kín nhất' },
                          { id: 4, type: 'personality', value: personality, title: 'Tương Tác (Nhân Cách)', desc: 'Cách thế giới nhìn nhận bạn' },
                          { id: 5, type: 'attitude', value: attitude, title: 'Thái Độ', desc: 'Phản ứng với thế giới' },
                          { id: 6, type: 'maturity', value: maturity, title: 'Trưởng Thành', desc: 'Tiềm năng nửa sau cuộc đời' },
                          { id: 7, type: 'balance', value: balance, title: 'Cân Bằng', desc: 'Chìa khóa vượt qua khủng hoảng' },
                          { id: 8, type: 'hiddenPassion', value: hiddenPassion, title: 'Nội Cảm (Đam Mê Tiềm Ẩn)', desc: 'Tài năng ẩn giấu' },
                          { id: 9, type: 'rationalThought', value: rationalThought, title: 'Chỉ Số Trí Tuệ', desc: 'Cách bạn tư duy' },
                          { id: 10, type: 'approach', value: approach, title: 'Năng Lực Tiếp Cận', desc: 'Bước đi đầu tiên' },
                        ];
                        const current = indicators.find(i => i.id === activeCard);
                        if (!current) return null;
                        
                        const htmlContent = getDetailedInterpretation(current.type, current.value);
                        
                        return (
                          <div>
                            <div className="flex items-center gap-4 mb-6 border-b border-violet-200 pb-4">
                              <div className="w-16 h-16 rounded-full bg-violet-600 text-white flex items-center justify-center font-black text-3xl shadow-md">
                                {current.value}
                              </div>
                              <div>
                                <h3 className="text-2xl font-bold text-violet-900 m-0">{current.title}</h3>
                                <p className="text-violet-600 font-medium">{current.desc}</p>
                              </div>
                            </div>
                            <div 
                              className="prose prose-violet max-w-none text-slate-700 leading-relaxed"
                              dangerouslySetInnerHTML={{ __html: htmlContent }}
                            />
                            <GeneralAdvice number={current.value} />
                          </div>
                        );
                      })()}

                      {activeCard === 11 && (
                        <div>
                          <div className="flex items-center gap-4 mb-6 border-b border-violet-200 pb-4">
                            <div className="w-16 h-16 rounded-full bg-violet-600 text-white flex items-center justify-center font-black text-3xl shadow-md">
                              {personalYear}
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-violet-900 m-0">Năm Cá Nhân</h3>
                              <p className="text-violet-600 font-medium">Năng lượng của năm nay</p>
                            </div>
                          </div>
                          <div className="prose prose-violet max-w-none text-slate-700 leading-relaxed">
                            <p>Năm Cá Nhân cho biết <strong className="text-violet-700">năng lượng và xu hướng</strong> của năm hiện tại, giúp bạn lập kế hoạch phù hợp với nhịp điệu tự nhiên.</p>
                            <p>{getPersonalYearMeaning(personalYear)}</p>
                          </div>
                        </div>
                      )}
                      {activeCard === 12 && (
                        <div>
                          <div className="flex items-center gap-4 mb-6 border-b border-violet-200 pb-4">
                            <div className="w-16 h-16 rounded-full bg-violet-600 text-white flex items-center justify-center font-black text-3xl shadow-md">
                              {personalMonth}
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-violet-900 m-0">Tháng Cá Nhân</h3>
                              <p className="text-violet-600 font-medium">Năng lượng của tháng này</p>
                            </div>
                          </div>
                          <div className="prose prose-violet max-w-none text-slate-700 leading-relaxed">
                            <p>Tháng Cá Nhân cung cấp cái nhìn chi tiết hơn về <strong className="text-violet-700">năng lượng của tháng hiện tại</strong>, giúp bạn điều chỉnh các hành động ngắn hạn.</p>
                            <p>{getPersonalMonthMeaning(personalMonth)}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="bg-white p-6 md:p-8 rounded-3xl border border-fuchsia-200 shadow-sm">
                  <h3 className="text-xl font-bold text-fuchsia-900 mb-2">Biểu đồ Đỉnh Cao Cuộc Đời (Kim Tự Tháp)</h3>
                  <p className="text-fuchsia-800 mb-8">
                    Dựa vào ngày sinh {dob}, 4 đỉnh cao cuộc đời của bạn rơi vào các năm:
                  </p>
                  
                  <div className="flex justify-between items-end min-h-[320px] relative pt-10 overflow-x-auto pb-4">
                    {pinnacles && (
                      <>
                        <div className="w-1/5 flex flex-col items-center relative z-10 px-1">
                          <div className="text-xs font-bold mb-3 bg-fuchsia-50 px-3 py-1.5 rounded-lg border border-fuchsia-200 shadow-sm text-fuchsia-900">{pinnacles.years[0]}</div>
                          <div className="bg-green-100 text-green-800 border border-green-300 w-full max-w-[80px] py-1.5 text-center text-xs font-bold mb-2 rounded-md">Đỉnh 1<br/><span className="text-lg">{pinnacles.peaks[0]}</span></div>
                          <div className="bg-red-100 text-red-800 border border-red-300 w-full max-w-[80px] py-1.5 text-center text-xs font-bold mb-2 rounded-md">Thử thách<br/><span className="text-lg">{pinnacles.challenges[0]}</span></div>
                          <div className="bg-blue-100 text-blue-800 border border-blue-300 w-full max-w-[80px] py-1.5 text-center text-xs font-bold mb-2 rounded-md">Phát triển<br/><span className="text-lg">{pinnacles.peaks[0] + pinnacles.challenges[0] > 9 ? (pinnacles.peaks[0] + pinnacles.challenges[0]) % 9 || 9 : pinnacles.peaks[0] + pinnacles.challenges[0]}</span></div>
                          <div className="text-[10px] font-bold mt-2 text-slate-600">0 &gt;&gt; {pinnacles.ages[0]}</div>
                          <div className="h-16 w-full bg-fuchsia-100/60 rounded-t-xl mt-2 border-t border-x border-fuchsia-200/50"></div>
                        </div>
                        <div className="w-1/5 flex flex-col items-center relative z-20 px-1">
                          <div className="text-xs font-bold mb-3 bg-fuchsia-50 px-3 py-1.5 rounded-lg border border-fuchsia-200 shadow-sm text-fuchsia-900">{pinnacles.years[1]}</div>
                          <div className="bg-green-100 text-green-800 border border-green-300 w-full max-w-[80px] py-1.5 text-center text-xs font-bold mb-2 rounded-md">Đỉnh 2<br/><span className="text-lg">{pinnacles.peaks[1]}</span></div>
                          <div className="bg-red-100 text-red-800 border border-red-300 w-full max-w-[80px] py-1.5 text-center text-xs font-bold mb-2 rounded-md">Thử thách<br/><span className="text-lg">{pinnacles.challenges[1]}</span></div>
                          <div className="bg-blue-100 text-blue-800 border border-blue-300 w-full max-w-[80px] py-1.5 text-center text-xs font-bold mb-2 rounded-md">Phát triển<br/><span className="text-lg">{pinnacles.peaks[1] + pinnacles.challenges[1] > 9 ? (pinnacles.peaks[1] + pinnacles.challenges[1]) % 9 || 9 : pinnacles.peaks[1] + pinnacles.challenges[1]}</span></div>
                          <div className="text-[10px] font-bold mt-2 text-slate-600">{pinnacles.ages[0] + 1} &gt;&gt; {pinnacles.ages[1]}</div>
                          <div className="h-24 w-full bg-fuchsia-800/50/60 rounded-t-xl mt-2 border-t border-x border-fuchsia-700/50/50"></div>
                        </div>
                        <div className="w-1/5 flex flex-col items-center relative z-30 px-1">
                          <div className="text-xs font-bold mb-3 bg-fuchsia-50 px-3 py-1.5 rounded-lg border border-fuchsia-200 shadow-sm text-fuchsia-900">{pinnacles.years[2]}</div>
                          <div className="bg-green-100 text-green-800 border border-green-300 w-full max-w-[80px] py-1.5 text-center text-xs font-bold mb-2 rounded-md">Đỉnh 3<br/><span className="text-lg">{pinnacles.peaks[2]}</span></div>
                          <div className="bg-red-100 text-red-800 border border-red-300 w-full max-w-[80px] py-1.5 text-center text-xs font-bold mb-2 rounded-md">Thử thách<br/><span className="text-lg">{pinnacles.challenges[2]}</span></div>
                          <div className="bg-blue-100 text-blue-800 border border-blue-300 w-full max-w-[80px] py-1.5 text-center text-xs font-bold mb-2 rounded-md">Phát triển<br/><span className="text-lg">{pinnacles.peaks[2] + pinnacles.challenges[2] > 9 ? (pinnacles.peaks[2] + pinnacles.challenges[2]) % 9 || 9 : pinnacles.peaks[2] + pinnacles.challenges[2]}</span></div>
                          <div className="text-[10px] font-bold mt-2 text-slate-600">{pinnacles.ages[1] + 1} &gt;&gt; {pinnacles.ages[2]}</div>
                          <div className="h-32 w-full bg-fuchsia-700/50/60 rounded-t-xl mt-2 border-t border-x border-fuchsia-600/50/50"></div>
                        </div>
                        <div className="w-1/5 flex flex-col items-center relative z-20 px-1">
                          <div className="text-xs font-bold mb-3 bg-fuchsia-50 px-3 py-1.5 rounded-lg border border-fuchsia-200 shadow-sm text-fuchsia-900">{pinnacles.years[3]}</div>
                          <div className="bg-green-100 text-green-800 border border-green-300 w-full max-w-[80px] py-1.5 text-center text-xs font-bold mb-2 rounded-md">Đỉnh 4<br/><span className="text-lg">{pinnacles.peaks[3]}</span></div>
                          <div className="bg-red-100 text-red-800 border border-red-300 w-full max-w-[80px] py-1.5 text-center text-xs font-bold mb-2 rounded-md">Thử thách<br/><span className="text-lg">{pinnacles.challenges[3]}</span></div>
                          <div className="bg-blue-100 text-blue-800 border border-blue-300 w-full max-w-[80px] py-1.5 text-center text-xs font-bold mb-2 rounded-md">Phát triển<br/><span className="text-lg">{pinnacles.peaks[3] + pinnacles.challenges[3] > 9 ? (pinnacles.peaks[3] + pinnacles.challenges[3]) % 9 || 9 : pinnacles.peaks[3] + pinnacles.challenges[3]}</span></div>
                          <div className="text-[10px] font-bold mt-2 text-slate-600">{pinnacles.ages[2] + 1} &gt;&gt; {pinnacles.ages[3]}</div>
                          <div className="h-24 w-full bg-fuchsia-800/50/60 rounded-t-xl mt-2 border-t border-x border-fuchsia-700/50/50"></div>
                        </div>
                        <div className="w-1/5 flex flex-col items-center relative z-10 px-1">
                          <div className="text-xs font-bold mb-3 bg-fuchsia-50 px-3 py-1.5 rounded-lg border border-fuchsia-200 shadow-sm text-fuchsia-900">{pinnacles.years[3] + 1}+</div>
                          <div className="bg-green-100 text-green-800 border border-green-300 w-full max-w-[80px] py-1.5 text-center text-xs font-bold mb-2 rounded-md">Đỉnh 5<br/><span className="text-lg">{pinnacles.peaks[3]}</span></div>
                          <div className="bg-red-100 text-red-800 border border-red-300 w-full max-w-[80px] py-1.5 text-center text-xs font-bold mb-2 rounded-md">Thử thách<br/><span className="text-lg">{pinnacles.challenges[3]}</span></div>
                          <div className="bg-blue-100 text-blue-800 border border-blue-300 w-full max-w-[80px] py-1.5 text-center text-xs font-bold mb-2 rounded-md">Phát triển<br/><span className="text-lg">{pinnacles.peaks[3] + pinnacles.challenges[3]}</span></div>
                          <div className="text-[10px] font-bold mt-2 text-slate-600">{pinnacles.ages[3] + 1}+</div>
                          <div className="h-16 w-full bg-fuchsia-100/60 rounded-t-xl mt-2 border-t border-x border-fuchsia-200/50"></div>
                        </div>
                      </>
                    )}
                  </div>
                  
                  <div className="mt-8 space-y-6">
                    <div className="bg-fuchsia-50 p-5 rounded-xl border border-fuchsia-200">
                      <h4 className="font-bold text-fuchsia-900 mb-4">Ý nghĩa các Đỉnh Cao</h4>
                      <div className="space-y-6 text-sm text-fuchsia-800">
                        <div className="border-b border-fuchsia-200/50 pb-4">
                          <p className="font-bold text-lg text-green-800 mb-2">Đỉnh 1 (Tuổi 0 - {pinnacles?.ages[0]})</p>
                          <p className="mb-2"><strong className="text-green-700">Đỉnh cao (Số {pinnacles?.peaks[0]}):</strong> {getPinnacleMeaning(pinnacles?.peaks[0] || 0)}</p>
                          <p className="mb-2"><strong className="text-red-700">Thử thách (Số {pinnacles?.challenges[0]}):</strong> {getChallengeMeaning(pinnacles?.challenges[0] || 0)}</p>
                          <p><strong className="text-blue-700">Phát triển (Số {(pinnacles?.peaks[0] || 0) + (pinnacles?.challenges[0] || 0) > 9 ? ((pinnacles?.peaks[0] || 0) + (pinnacles?.challenges[0] || 0)) % 9 || 9 : (pinnacles?.peaks[0] || 0) + (pinnacles?.challenges[0] || 0)}):</strong> {getDevelopmentMeaning((pinnacles?.peaks[0] || 0) + (pinnacles?.challenges[0] || 0) > 9 ? ((pinnacles?.peaks[0] || 0) + (pinnacles?.challenges[0] || 0)) % 9 || 9 : (pinnacles?.peaks[0] || 0) + (pinnacles?.challenges[0] || 0))}</p>
                        </div>
                        <div className="border-b border-fuchsia-200/50 pb-4">
                          <p className="font-bold text-lg text-green-800 mb-2">Đỉnh 2 (Tuổi {pinnacles?.ages[0]! + 1} - {pinnacles?.ages[1]})</p>
                          <p className="mb-2"><strong className="text-green-700">Đỉnh cao (Số {pinnacles?.peaks[1]}):</strong> {getPinnacleMeaning(pinnacles?.peaks[1] || 0)}</p>
                          <p className="mb-2"><strong className="text-red-700">Thử thách (Số {pinnacles?.challenges[1]}):</strong> {getChallengeMeaning(pinnacles?.challenges[1] || 0)}</p>
                          <p><strong className="text-blue-700">Phát triển (Số {(pinnacles?.peaks[1] || 0) + (pinnacles?.challenges[1] || 0) > 9 ? ((pinnacles?.peaks[1] || 0) + (pinnacles?.challenges[1] || 0)) % 9 || 9 : (pinnacles?.peaks[1] || 0) + (pinnacles?.challenges[1] || 0)}):</strong> {getDevelopmentMeaning((pinnacles?.peaks[1] || 0) + (pinnacles?.challenges[1] || 0) > 9 ? ((pinnacles?.peaks[1] || 0) + (pinnacles?.challenges[1] || 0)) % 9 || 9 : (pinnacles?.peaks[1] || 0) + (pinnacles?.challenges[1] || 0))}</p>
                        </div>
                        <div className="border-b border-fuchsia-200/50 pb-4">
                          <p className="font-bold text-lg text-green-800 mb-2">Đỉnh 3 (Tuổi {pinnacles?.ages[1]! + 1} - {pinnacles?.ages[2]})</p>
                          <p className="mb-2"><strong className="text-green-700">Đỉnh cao (Số {pinnacles?.peaks[2]}):</strong> {getPinnacleMeaning(pinnacles?.peaks[2] || 0)}</p>
                          <p className="mb-2"><strong className="text-red-700">Thử thách (Số {pinnacles?.challenges[2]}):</strong> {getChallengeMeaning(pinnacles?.challenges[2] || 0)}</p>
                          <p><strong className="text-blue-700">Phát triển (Số {(pinnacles?.peaks[2] || 0) + (pinnacles?.challenges[2] || 0) > 9 ? ((pinnacles?.peaks[2] || 0) + (pinnacles?.challenges[2] || 0)) % 9 || 9 : (pinnacles?.peaks[2] || 0) + (pinnacles?.challenges[2] || 0)}):</strong> {getDevelopmentMeaning((pinnacles?.peaks[2] || 0) + (pinnacles?.challenges[2] || 0) > 9 ? ((pinnacles?.peaks[2] || 0) + (pinnacles?.challenges[2] || 0)) % 9 || 9 : (pinnacles?.peaks[2] || 0) + (pinnacles?.challenges[2] || 0))}</p>
                        </div>
                        <div className="border-b border-fuchsia-200/50 pb-4">
                          <p className="font-bold text-lg text-green-800 mb-2">Đỉnh 4 (Tuổi {pinnacles?.ages[2]! + 1} - {pinnacles?.ages[3]})</p>
                          <p className="mb-2"><strong className="text-green-700">Đỉnh cao (Số {pinnacles?.peaks[3]}):</strong> {getPinnacleMeaning(pinnacles?.peaks[3] || 0)}</p>
                          <p className="mb-2"><strong className="text-red-700">Thử thách (Số {pinnacles?.challenges[3]}):</strong> {getChallengeMeaning(pinnacles?.challenges[3] || 0)}</p>
                          <p><strong className="text-blue-700">Phát triển (Số {(pinnacles?.peaks[3] || 0) + (pinnacles?.challenges[3] || 0) > 9 ? ((pinnacles?.peaks[3] || 0) + (pinnacles?.challenges[3] || 0)) % 9 || 9 : (pinnacles?.peaks[3] || 0) + (pinnacles?.challenges[3] || 0)}):</strong> {getDevelopmentMeaning((pinnacles?.peaks[3] || 0) + (pinnacles?.challenges[3] || 0) > 9 ? ((pinnacles?.peaks[3] || 0) + (pinnacles?.challenges[3] || 0)) % 9 || 9 : (pinnacles?.peaks[3] || 0) + (pinnacles?.challenges[3] || 0))}</p>
                        </div>
                        <div>
                          <p className="font-bold text-lg text-green-800 mb-2">Đỉnh 5 (Tuổi {pinnacles?.ages[3]! + 1}+)</p>
                          <p className="mb-2"><strong className="text-green-700">Đỉnh cao (Số {pinnacles?.peaks[3]}):</strong> {getPinnacleMeaning(pinnacles?.peaks[3] || 0)}</p>
                          <p className="mb-2"><strong className="text-red-700">Thử thách (Số {pinnacles?.challenges[3]}):</strong> {getChallengeMeaning(pinnacles?.challenges[3] || 0)}</p>
                          <p><strong className="text-blue-700">Phát triển (Số {(pinnacles?.peaks[3] || 0) + (pinnacles?.challenges[3] || 0)}):</strong> {getDevelopmentMeaning((pinnacles?.peaks[3] || 0) + (pinnacles?.challenges[3] || 0))}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Personal Year and Month Tables */}
                  <div className="mt-12 space-y-8">
                    {/* Personal Year Table */}
                    <div className="border border-slate-300 rounded-lg overflow-hidden bg-white shadow-sm">
                      <div className="bg-slate-100 text-center font-bold py-3 border-b border-slate-300 text-slate-800 flex items-center justify-center gap-2">
                        NĂM CÁ NHÂN
                        <button 
                          onClick={() => setShowNumberMeanings(!showNumberMeanings)} 
                          className="flex items-center gap-1.5 text-xs font-medium bg-violet-100 text-violet-800 hover:bg-violet-200 hover:text-slate-900 px-2.5 py-1 rounded-full transition-all border border-violet-300 ml-2"
                          title="Ý nghĩa các con số"
                        >
                          <Info size={14} />
                          <span>Ý nghĩa (1-9)</span>
                        </button>
                      </div>
                      {showNumberMeanings && (
                        <div className="p-4 bg-violet-100 border-b border-slate-200 text-sm text-slate-700 animate-in fade-in slide-in-from-top-2">
                          <h5 className="font-bold text-violet-900 mb-2">Ý nghĩa các con số (1-9)</h5>
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                            {numberMeanings.map(m => (
                              <div key={m.num} className="flex gap-2">
                                <span className="font-bold text-violet-700">{m.num}:</span>
                                <span>{m.text}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      <div className="p-4 bg-slate-50 border-b border-slate-200">
                        <p className="text-sm text-slate-700">
                          Năm cá nhân cho biết năng lượng tổng thể của một năm. Chu kỳ 9 năm lặp lại với các đặc điểm:
                          <br/>
                          <span className="font-semibold text-red-600">Năm 1:</span> Khởi đầu mới, gieo hạt. <span className="font-semibold text-red-600">Năm 9:</span> Kết thúc chu kỳ, thu hoạch và buông bỏ.
                        </p>
                      </div>
                      <div className="p-4">
                        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-2">
                          {Array.from({ length: 9 }).map((_, i) => {
                            const currentYear = new Date().getFullYear();
                            // Find the start of the current 9-year cycle
                            const currentPYear = calculatePersonalYear(dob, currentYear);
                            const cycleStartYear = currentYear - currentPYear + 1;
                            const year = cycleStartYear + i;
                            const pYear = calculatePersonalYear(dob, year);
                            const isCurrent = year === currentYear;
                            const isPeak = pYear === 1 || pYear === 9;
                            
                            return (
                              <div key={year} className={`rounded-lg overflow-hidden flex flex-col ${isCurrent ? 'ring-2 ring-violet-500 shadow-md transform scale-105 z-10' : 'border border-slate-200'}`}>
                                <div className={`text-center py-2 font-bold ${isPeak && !isCurrent ? 'bg-red-500 text-white' : isCurrent ? 'bg-violet-600 text-white' : 'bg-slate-100 text-slate-700'}`}>
                                  {pYear}
                                </div>
                                <div className={`text-center py-2 text-sm ${isCurrent ? 'bg-violet-100 font-bold text-violet-900' : 'bg-white text-slate-600'}`}>
                                  {year}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Personal Month Table */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="border border-slate-300 rounded-lg overflow-hidden bg-white shadow-sm flex flex-col">
                        <div className="bg-slate-100 text-center font-bold py-3 border-b border-slate-300 text-slate-800 uppercase flex items-center justify-center gap-2 flex-wrap">
                          THÁNG CÁ NHÂN TRONG NĂM {new Date().getFullYear()}
                          <button 
                            onClick={() => setShowNumberMeanings(!showNumberMeanings)} 
                            className="flex items-center gap-1.5 text-xs font-medium bg-violet-100 text-violet-800 hover:bg-violet-200 hover:text-slate-900 px-2.5 py-1 rounded-full transition-all border border-violet-300 ml-2"
                            title="Ý nghĩa các con số"
                          >
                            <Info size={14} />
                            <span>Ý nghĩa (1-9)</span>
                          </button>
                        </div>
                        <div className="p-4 bg-slate-50 border-b border-slate-200 flex-grow">
                          <p className="text-sm text-slate-700">
                            Tháng cá nhân giúp bạn lên kế hoạch chi tiết hơn trong năm. Nó cộng hưởng với năng lượng của Năm Cá Nhân để tạo ra những cơ hội và thách thức riêng biệt.
                          </p>
                        </div>
                        <div className="grid grid-cols-6 gap-1 p-2 bg-white">
                          {Array.from({ length: 12 }).map((_, i) => {
                            const month = i + 1;
                            const pMonth = calculatePersonalMonth(personalYear, month);
                            const isPeak = pMonth === 1 || pMonth === 9;
                            const isCurrentMonth = month === new Date().getMonth() + 1;
                            
                            return (
                              <div key={month} className={`border rounded-md flex flex-col overflow-hidden ${isCurrentMonth ? 'ring-2 ring-violet-500 border-transparent' : 'border-slate-200'}`}>
                                <div className={`text-center py-1 font-bold text-sm ${isPeak && !isCurrentMonth ? 'bg-red-500 text-white' : isCurrentMonth ? 'bg-violet-600 text-white' : 'bg-slate-100 text-slate-700'}`}>
                                  {pMonth}
                                </div>
                                <div className={`text-center py-1 text-xs ${isCurrentMonth ? 'bg-violet-100 font-bold text-violet-900' : 'bg-white text-slate-600'}`}>
                                  T{month}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      
                      <div className="border border-slate-300 rounded-lg overflow-hidden bg-white shadow-sm flex flex-col">
                        <div className="bg-slate-100 text-center font-bold py-3 border-b border-slate-300 text-slate-800 uppercase flex items-center justify-center gap-2 flex-wrap">
                          THÁNG CÁ NHÂN TRONG NĂM {new Date().getFullYear() + 1}
                          <button 
                            onClick={() => setShowNumberMeanings(!showNumberMeanings)} 
                            className="flex items-center gap-1.5 text-xs font-medium bg-violet-100 text-violet-800 hover:bg-violet-200 hover:text-slate-900 px-2.5 py-1 rounded-full transition-all border border-violet-300 ml-2"
                            title="Ý nghĩa các con số"
                          >
                            <Info size={14} />
                            <span>Ý nghĩa (1-9)</span>
                          </button>
                        </div>
                        <div className="p-4 bg-slate-50 border-b border-slate-200 flex-grow">
                           <p className="text-sm text-slate-700">
                            Chuẩn bị cho năm tiếp theo bằng cách xem trước năng lượng của các tháng. Điều này giúp bạn có cái nhìn dài hạn và chủ động hơn trong các quyết định quan trọng.
                          </p>
                        </div>
                        <div className="grid grid-cols-6 gap-1 p-2 bg-white">
                          {Array.from({ length: 12 }).map((_, i) => {
                            const month = i + 1;
                            const nextYearPYear = calculatePersonalYear(dob, new Date().getFullYear() + 1);
                            const pMonth = calculatePersonalMonth(nextYearPYear, month);
                            const isPeak = pMonth === 1 || pMonth === 9;
                            
                            return (
                              <div key={month} className="border border-slate-200 rounded-md flex flex-col overflow-hidden">
                                <div className={`text-center py-1 font-bold text-sm ${isPeak ? 'bg-red-500 text-white' : 'bg-slate-100 text-slate-700'}`}>
                                  {pMonth}
                                </div>
                                <div className="text-center py-1 text-xs bg-white text-slate-600">
                                  T{month}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Detailed Explanations for 2026 and 2027 */}
                    <div className="space-y-6">
                      <div className="bg-violet-100 p-6 rounded-xl border border-violet-200 shadow-sm">
                        <h4 className="font-bold text-xl text-violet-900 mb-4">Chi tiết Năm Cá Nhân {new Date().getFullYear()} (Số {calculatePersonalYear(dob, new Date().getFullYear())})</h4>
                        <div className="prose prose-violet max-w-none text-violet-800 text-sm">
                          <p>{getPersonalYearMeaning(calculatePersonalYear(dob, new Date().getFullYear()))}</p>
                        </div>
                        
                        <h5 className="font-bold text-violet-800 mt-6 mb-3">Tháng Cá Nhân Hiện Tại (Tháng {new Date().getMonth() + 1} - Số {calculatePersonalMonth(calculatePersonalYear(dob, new Date().getFullYear()), new Date().getMonth() + 1)})</h5>
                        <div className="bg-white p-4 rounded-lg border border-violet-200 text-sm text-slate-700">
                          <p>{getPersonalMonthMeaning(calculatePersonalMonth(calculatePersonalYear(dob, new Date().getFullYear()), new Date().getMonth() + 1))}</p>
                        </div>
                      </div>

                      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm">
                        <h4 className="font-bold text-xl text-slate-800 mb-4">Chi tiết Năm Cá Nhân {new Date().getFullYear() + 1} (Số {calculatePersonalYear(dob, new Date().getFullYear() + 1)})</h4>
                        <div className="prose prose-slate max-w-none text-slate-700 text-sm">
                          <p>{getPersonalYearMeaning(calculatePersonalYear(dob, new Date().getFullYear() + 1))}</p>
                        </div>
                        
                        <h5 className="font-bold text-slate-700 mt-6 mb-3">Tháng Cá Nhân Đầu Tiên (Tháng 1 - Số {calculatePersonalMonth(calculatePersonalYear(dob, new Date().getFullYear() + 1), 1)})</h5>
                        <div className="bg-white p-4 rounded-lg border border-slate-200 text-sm text-slate-600">
                          <p>{getPersonalMonthMeaning(calculatePersonalMonth(calculatePersonalYear(dob, new Date().getFullYear() + 1), 1))}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </UnlockPremium>
          </div>

        </div>
      </div>
    </main>
  );
}

export default function NumerologyPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <NumerologyContent />
    </Suspense>
  );
}
