'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { Suspense, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { UnlockPremium } from '@/components/UnlockPremium';
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

function IndicatorBox({ label, value, description, highlight = false, onHover }: { label: string, value: number, description?: string, highlight?: boolean, onHover?: () => void }) {
  return (
    <div 
      onMouseEnter={onHover}
      className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all cursor-pointer hover:scale-105 ${highlight ? 'bg-indigo-600 text-white border-indigo-700 shadow-md hover:bg-indigo-500' : 'bg-white text-slate-800 border-slate-200 shadow-sm hover:border-indigo-300 hover:shadow-md'}`}
    >
      <span className={`text-xs text-center mb-1 font-medium ${highlight ? 'text-indigo-100' : 'text-slate-500'}`}>{label}</span>
      <span className={`text-2xl font-black ${highlight ? 'text-white' : 'text-indigo-600'}`}>{value}</span>
      {description && <span className={`text-[10px] text-center mt-1 leading-tight ${highlight ? 'text-indigo-200' : 'text-slate-400'}`}>{description}</span>}
    </div>
  );
}

function ReadingCard({ title, value, description, index, isActive }: { title: string, value: number, description: string, index: number, isActive: boolean }) {
  return (
    <div className={`bg-white rounded-2xl p-5 border transition-all flex flex-col h-full ${isActive ? 'border-indigo-400 shadow-lg ring-2 ring-indigo-100 scale-[1.02]' : 'border-amber-100 shadow-sm hover:shadow-md'}`}>
      <div className="flex items-center gap-4 mb-3">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-xl shrink-0 border transition-colors ${isActive ? 'bg-indigo-100 text-indigo-700 border-indigo-200' : 'bg-amber-100 text-amber-700 border-amber-200'}`}>
          {value}
        </div>
        <h3 className={`text-lg font-bold m-0 leading-tight ${isActive ? 'text-indigo-900' : 'text-amber-900'}`}>{index}. {title}</h3>
      </div>
      <p className={`text-sm leading-relaxed m-0 flex-grow ${isActive ? 'text-slate-700' : 'text-amber-800'}`}>
        {description}
      </p>
    </div>
  );
}

function NumerologyContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const name = searchParams.get('name') || '';
  const dob = searchParams.get('dob') || '';
  
  const [activeCard, setActiveCard] = useState<number | null>(1);

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

  const GeneralAdvice = ({ number }: { number: number }) => {
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
  };

  const previewContent = (
    <div className="bg-amber-50 rounded-3xl shadow-xl p-6 md:p-8 border border-amber-200">
      <h2 className="text-2xl font-bold text-amber-900 mb-4 border-b border-amber-200 pb-4">Tổng quan Thần Số Học</h2>
      <div className="prose prose-amber max-w-none">
        <p className="text-amber-800 font-medium text-lg">
          Xin chào <strong>{name}</strong>, dựa vào các chỉ số cơ bản của bạn, đây là một cái nhìn tổng quan ngắn gọn:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-white/60 p-4 rounded-xl border border-amber-100">
            <h3 className="text-lg font-bold text-amber-900 mt-0 mb-1">Số Chủ Đạo {lifePath}</h3>
            <p className="text-amber-800 text-sm mb-0">Đại diện cho con đường bạn sẽ đi, những bài học và cơ hội chính trong cuộc đời.</p>
          </div>
          <div className="bg-white/60 p-4 rounded-xl border border-amber-100">
            <h3 className="text-lg font-bold text-amber-900 mt-0 mb-1">Sứ Mệnh {destiny}</h3>
            <p className="text-amber-800 text-sm mb-0">Mục đích bạn đến với cuộc đời này và những gì bạn cần hoàn thành.</p>
          </div>
          <div className="bg-white/60 p-4 rounded-xl border border-amber-100">
            <h3 className="text-lg font-bold text-amber-900 mt-0 mb-1">Nội Tâm {soulUrge}</h3>
            <p className="text-amber-800 text-sm mb-0">Khát khao sâu kín nhất bên trong linh hồn mang lại cho bạn hạnh phúc thực sự.</p>
          </div>
          <div className="bg-white/60 p-4 rounded-xl border border-amber-100">
            <h3 className="text-lg font-bold text-amber-900 mt-0 mb-1">Tương Tác {personality}</h3>
            <p className="text-amber-800 text-sm mb-0">Cách người khác nhìn nhận bạn trong lần đầu gặp gỡ, ấn tượng bên ngoài của bạn.</p>
          </div>
          <div className="bg-white/60 p-4 rounded-xl border border-amber-100">
            <h3 className="text-lg font-bold text-amber-900 mt-0 mb-1">Thái Độ {attitude}</h3>
            <p className="text-amber-800 text-sm mb-0">Cách bạn phản ứng với thế giới xung quanh, đặc biệt là trong những tình huống mới.</p>
          </div>
          <div className="bg-white/60 p-4 rounded-xl border border-amber-100">
            <h3 className="text-lg font-bold text-amber-900 mt-0 mb-1">Trưởng Thành {maturity}</h3>
            <p className="text-amber-800 text-sm mb-0">Năng lượng sẽ ảnh hưởng mạnh mẽ đến bạn từ độ tuổi 35-40 trở đi.</p>
          </div>
        </div>
        <p className="text-amber-800 mt-6 italic text-sm text-center">
          Mở khóa phiên bản đầy đủ để xem luận giải chi tiết về tất cả 12 chỉ số, biểu đồ đỉnh cao cuộc đời và các lời khuyên chuyên sâu dành riêng cho bạn.
        </p>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <div className="bg-indigo-600 text-white pt-12 pb-24 px-4 rounded-b-[3rem] shadow-lg">
        <div className="max-w-5xl mx-auto">
          <button 
            onClick={() => router.push('/')}
            className="flex items-center gap-2 text-indigo-100 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            Quay lại
          </button>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Báo Cáo Thần Số Học</h1>
          <p className="text-indigo-200 text-lg">
            Khám phá ý nghĩa các con số của <span className="font-semibold text-white uppercase">{name}</span>
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 -mt-16">
        <div className="flex flex-col md:flex-row gap-6">
          
          {/* Left Column: Basic Indicators (Grid format) */}
          <div className="w-full md:w-1/3 lg:w-1/4 shrink-0">
            <div className="bg-white rounded-3xl shadow-xl p-4 border border-slate-200 sticky top-6">
              <div className="text-center mb-4">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Họ và tên</div>
                <div className="font-bold text-indigo-900 uppercase text-sm break-words bg-indigo-50 py-2 px-3 rounded-lg">
                  {name}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2">
                  <IndicatorBox label="Số Chủ Đạo" value={lifePath} description="Bài học cuộc đời" highlight onHover={() => setActiveCard(1)} />
                </div>
                <IndicatorBox label="Nội Tâm" value={soulUrge} description="Khát khao sâu kín" onHover={() => setActiveCard(3)} />
                <IndicatorBox label="Nội Cảm" value={hiddenPassion} description="Tài năng ẩn giấu" onHover={() => setActiveCard(8)} />
                <IndicatorBox label="Thái Độ" value={attitude} description="Phản ứng ban đầu" onHover={() => setActiveCard(5)} />
                <IndicatorBox label="Tương Tác" value={personality} description="Ấn tượng bên ngoài" onHover={() => setActiveCard(4)} />
                <IndicatorBox label="Chỉ Số Trí Tuệ" value={rationalThought} description="Cách tư duy" onHover={() => setActiveCard(9)} />
                <IndicatorBox label="Năng Lực Tiếp Cận" value={approach} description="Bước đi đầu tiên" onHover={() => setActiveCard(10)} />
                <IndicatorBox label="Cân Bằng" value={balance} description="Vượt qua khủng hoảng" onHover={() => setActiveCard(7)} />
                <IndicatorBox label="Sứ Mệnh" value={destiny} description="Mục đích sống" onHover={() => setActiveCard(2)} />
                <IndicatorBox label="Đường Đời" value={lifePath} description="Con đường phát triển" onHover={() => setActiveCard(1)} />
                <IndicatorBox label="Trưởng Thành" value={maturity} description="Nửa sau cuộc đời" onHover={() => setActiveCard(6)} />
                <IndicatorBox label="Năm Cá Nhân" value={personalYear} description="Năng lượng năm nay" onHover={() => setActiveCard(11)} />
                <IndicatorBox label="Tháng Cá Nhân" value={personalMonth} description="Năng lượng tháng này" onHover={() => setActiveCard(12)} />
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="w-full md:w-2/3 lg:w-3/4">
            <UnlockPremium name={name} dob={dob} type="numerology" preview={previewContent}>
              <div className="bg-amber-50 rounded-3xl shadow-xl p-6 md:p-8 border border-amber-200">
                <h2 className="text-2xl font-bold text-amber-900 mb-6 border-b border-amber-200 pb-4">Luận giải chuyên sâu</h2>
                
                <div className="bg-white p-6 md:p-8 rounded-3xl border border-indigo-100 shadow-sm mb-8 min-h-[300px] flex flex-col justify-center transition-all">
                  {activeCard === null ? (
                    <div className="text-center text-slate-500 flex flex-col items-center justify-center h-full py-12">
                      <div className="w-16 h-16 bg-indigo-50 text-indigo-300 rounded-full flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.9 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
                      </div>
                      <p className="text-lg font-medium text-slate-600">Di chuột vào các chỉ số bên trái để xem luận giải chi tiết</p>
                      <p className="text-sm mt-2">Mỗi con số đều mang một thông điệp riêng dành cho bạn</p>
                    </div>
                  ) : (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                      {activeCard === 1 && (
                        <div>
                          <div className="flex items-center gap-4 mb-6 border-b border-indigo-100 pb-4">
                            <div className="w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center font-black text-3xl shadow-md">
                              {lifePath}
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-indigo-900 m-0">Số Chủ Đạo (Đường Đời)</h3>
                              <p className="text-indigo-600 font-medium">Con số quan trọng nhất của bạn</p>
                            </div>
                          </div>
                          <div className="prose prose-indigo max-w-none text-slate-700 leading-relaxed">
                            <p>Số Chủ Đạo đại diện cho <strong className="text-indigo-700">con đường bạn sẽ đi</strong> trong cuộc đời này, những bài học bạn cần học và những cơ hội bạn sẽ gặp phải.</p>
                            <p>Với con số <strong>{lifePath}</strong>, bạn mang trong mình năng lượng đặc trưng của sự phát triển. Hãy chú ý đến việc <span className="bg-yellow-100 text-yellow-800 px-1 rounded">cân bằng cảm xúc</span> và học cách lắng nghe trực giác của mình nhiều hơn.</p>
                            <ul className="mt-4 space-y-2">
                              <li><strong className="text-green-700">Điểm mạnh:</strong> Khả năng thích nghi, trực giác nhạy bén, dễ đồng cảm.</li>
                              <li><strong className="text-red-700">Thử thách:</strong> Đôi khi thiếu quyết đoán, dễ bị ảnh hưởng bởi môi trường xung quanh.</li>
                              <li><strong className="text-blue-700">Lời khuyên:</strong> Hãy tin tưởng vào bản thân và đặt ra những ranh giới rõ ràng.</li>
                            </ul>
                            <GeneralAdvice number={lifePath} />
                          </div>
                        </div>
                      )}
                      {activeCard === 2 && (
                        <div>
                          <div className="flex items-center gap-4 mb-6 border-b border-indigo-100 pb-4">
                            <div className="w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center font-black text-3xl shadow-md">
                              {destiny}
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-indigo-900 m-0">Sứ Mệnh</h3>
                              <p className="text-indigo-600 font-medium">Mục đích bạn đến với cuộc đời này</p>
                            </div>
                          </div>
                          <div className="prose prose-indigo max-w-none text-slate-700 leading-relaxed">
                            <p>Chỉ số Sứ Mệnh cho biết <strong className="text-indigo-700">mục đích sống</strong> của bạn, điều mà bạn được sinh ra để thực hiện và đóng góp cho thế giới.</p>
                            <p>Mang năng lượng số <strong>{destiny}</strong>, sứ mệnh của bạn gắn liền với việc <span className="bg-indigo-100 text-indigo-800 px-1 rounded">truyền cảm hứng và dẫn dắt</span> người khác. Bạn có khả năng nhìn thấy bức tranh toàn cảnh và đưa ra những giải pháp sáng tạo.</p>
                            <GeneralAdvice number={destiny} />
                          </div>
                        </div>
                      )}
                      {activeCard === 3 && (
                        <div>
                          <div className="flex items-center gap-4 mb-6 border-b border-indigo-100 pb-4">
                            <div className="w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center font-black text-3xl shadow-md">
                              {soulUrge}
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-indigo-900 m-0">Nội Tâm (Linh Hồn)</h3>
                              <p className="text-indigo-600 font-medium">Khát khao sâu kín nhất</p>
                            </div>
                          </div>
                          <div className="prose prose-indigo max-w-none text-slate-700 leading-relaxed">
                            <p>Nội Tâm tiết lộ những <strong className="text-indigo-700">khát khao sâu kín nhất</strong> bên trong bạn, những điều thực sự mang lại cho bạn hạnh phúc và sự thỏa mãn từ tận đáy lòng.</p>
                            <p>Với số <strong>{soulUrge}</strong>, linh hồn bạn khao khát sự <span className="bg-pink-100 text-pink-800 px-1 rounded">bình yên, thấu hiểu và tình yêu thương</span>. Bạn tìm thấy niềm vui trong việc kết nối sâu sắc với những người xung quanh.</p>
                            <GeneralAdvice number={soulUrge} />
                          </div>
                        </div>
                      )}
                      {activeCard === 4 && (
                        <div>
                          <div className="flex items-center gap-4 mb-6 border-b border-indigo-100 pb-4">
                            <div className="w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center font-black text-3xl shadow-md">
                              {personality}
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-indigo-900 m-0">Tương Tác (Nhân Cách)</h3>
                              <p className="text-indigo-600 font-medium">Cách thế giới nhìn nhận bạn</p>
                            </div>
                          </div>
                          <div className="prose prose-indigo max-w-none text-slate-700 leading-relaxed">
                            <p>Chỉ số Tương Tác là <strong className="text-indigo-700">cách người khác nhìn nhận bạn</strong> trong lần đầu gặp gỡ, ấn tượng bên ngoài mà bạn tạo ra.</p>
                            
                            <div className="mt-6 space-y-6">
                              <div>
                                <h4 className="text-lg font-bold text-indigo-800 flex items-center gap-2">
                                  <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm">1</span>
                                  Khí chất bề ngoài (The Aura)
                                </h4>
                                <p className="mt-2 text-slate-600">{getPersonalityInterpretation(personality).aura}</p>
                              </div>
                              
                              <div>
                                <h4 className="text-lg font-bold text-indigo-800 flex items-center gap-2">
                                  <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm">2</span>
                                  Nam châm thu hút (Phong cách tương tác)
                                </h4>
                                <p className="mt-2 text-slate-600">{getPersonalityInterpretation(personality).magnet}</p>
                              </div>

                              <div>
                                <h4 className="text-lg font-bold text-indigo-800 flex items-center gap-2">
                                  <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm">3</span>
                                  Góc khuất và Sự hiểu lầm (The Illusion)
                                </h4>
                                <p className="mt-2 text-slate-600">{getPersonalityInterpretation(personality).illusion}</p>
                              </div>

                              <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
                                <h4 className="text-lg font-bold text-indigo-900 flex items-center gap-2">
                                  <span className="w-6 h-6 rounded-full bg-indigo-200 text-indigo-700 flex items-center justify-center text-sm">4</span>
                                  Lời khuyên Chuyển hóa
                                </h4>
                                <p className="mt-2 text-indigo-800 font-medium">{getPersonalityInterpretation(personality).advice}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {activeCard === 5 && (
                        <div>
                          <div className="flex items-center gap-4 mb-6 border-b border-indigo-100 pb-4">
                            <div className="w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center font-black text-3xl shadow-md">
                              {attitude}
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-indigo-900 m-0">Thái Độ</h3>
                              <p className="text-indigo-600 font-medium">Phản ứng với thế giới</p>
                            </div>
                          </div>
                          <div className="prose prose-indigo max-w-none text-slate-700 leading-relaxed">
                            <p>Chỉ số Thái Độ thể hiện <strong className="text-indigo-700">cách bạn phản ứng</strong> với những tình huống bất ngờ hoặc những thử thách đầu tiên trong cuộc sống.</p>
                            <p>Với số <strong>{attitude}</strong>, bạn thường đối mặt với khó khăn bằng sự <span className="bg-orange-100 text-orange-800 px-1 rounded">lạc quan, kiên cường và thực tế</span>. Bạn không dễ bị đánh gục bởi nghịch cảnh.</p>
                            <GeneralAdvice number={attitude} />
                          </div>
                        </div>
                      )}
                      {activeCard === 6 && (
                        <div>
                          <div className="flex items-center gap-4 mb-6 border-b border-indigo-100 pb-4">
                            <div className="w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center font-black text-3xl shadow-md">
                              {maturity}
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-indigo-900 m-0">Trưởng Thành</h3>
                              <p className="text-indigo-600 font-medium">Tiềm năng nửa sau cuộc đời</p>
                            </div>
                          </div>
                          <div className="prose prose-indigo max-w-none text-slate-700 leading-relaxed">
                            <p>Chỉ số Trưởng Thành cho biết <strong className="text-indigo-700">tiềm năng và định hướng</strong> của bạn trong nửa sau của cuộc đời (thường từ 35-40 tuổi trở đi).</p>
                            <p>Số <strong>{maturity}</strong> hứa hẹn một giai đoạn <span className="bg-purple-100 text-purple-800 px-1 rounded">ổn định, trí tuệ và gặt hái thành quả</span>. Bạn sẽ tìm thấy sự cân bằng giữa vật chất và tinh thần.</p>
                            <GeneralAdvice number={maturity} />
                          </div>
                        </div>
                      )}
                      {activeCard === 7 && (
                        <div>
                          <div className="flex items-center gap-4 mb-6 border-b border-indigo-100 pb-4">
                            <div className="w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center font-black text-3xl shadow-md">
                              {balance}
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-indigo-900 m-0">Cân Bằng</h3>
                              <p className="text-indigo-600 font-medium">Chìa khóa vượt qua khủng hoảng</p>
                            </div>
                          </div>
                          <div className="prose prose-indigo max-w-none text-slate-700 leading-relaxed">
                            <p>Chỉ số Cân Bằng hướng dẫn bạn <strong className="text-indigo-700">cách lấy lại sự ổn định</strong> khi đối mặt với căng thẳng và thử thách tột độ.</p>
                            <p>Số <strong>{balance}</strong> khuyên bạn nên tìm kiếm sự <span className="bg-emerald-100 text-emerald-800 px-1 rounded">hài hòa, chia sẻ cảm xúc</span> và không ngại nhờ đến sự giúp đỡ của người thân khi cần thiết.</p>
                            <GeneralAdvice number={balance} />
                          </div>
                        </div>
                      )}
                      {activeCard === 8 && (
                        <div>
                          <div className="flex items-center gap-4 mb-6 border-b border-indigo-100 pb-4">
                            <div className="w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center font-black text-3xl shadow-md">
                              {hiddenPassion}
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-indigo-900 m-0">Nội Cảm (Đam Mê Tiềm Ẩn)</h3>
                              <p className="text-indigo-600 font-medium">Tài năng ẩn giấu</p>
                            </div>
                          </div>
                          <div className="prose prose-indigo max-w-none text-slate-700 leading-relaxed">
                            <p>Nội Cảm tiết lộ những <strong className="text-indigo-700">tài năng và đam mê tiềm ẩn</strong> mà bạn có thể chưa nhận ra hoặc chưa phát huy hết.</p>
                            <p>Số <strong>{hiddenPassion}</strong> cho thấy bạn có năng khiếu đặc biệt trong lĩnh vực <span className="bg-rose-100 text-rose-800 px-1 rounded">sáng tạo, nghệ thuật hoặc giao tiếp</span>. Hãy dành thời gian để nuôi dưỡng đam mê này.</p>
                            <GeneralAdvice number={hiddenPassion} />
                          </div>
                        </div>
                      )}
                      {activeCard === 9 && (
                        <div>
                          <div className="flex items-center gap-4 mb-6 border-b border-indigo-100 pb-4">
                            <div className="w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center font-black text-3xl shadow-md">
                              {rationalThought}
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-indigo-900 m-0">Chỉ Số Trí Tuệ</h3>
                              <p className="text-indigo-600 font-medium">Cách bạn tư duy</p>
                            </div>
                          </div>
                          <div className="prose prose-indigo max-w-none text-slate-700 leading-relaxed">
                            <p>Chỉ Số Trí Tuệ cho biết <strong className="text-indigo-700">cách bạn suy nghĩ</strong>, phân tích và giải quyết vấn đề trong cuộc sống hàng ngày.</p>
                            <p>Số <strong>{rationalThought}</strong> thể hiện một tư duy <span className="bg-cyan-100 text-cyan-800 px-1 rounded">logic, nhạy bén và đa chiều</span>. Bạn thích tìm hiểu sâu xa cội rễ của vấn đề trước khi đưa ra quyết định.</p>
                            <GeneralAdvice number={rationalThought} />
                          </div>
                        </div>
                      )}
                      {activeCard === 10 && (
                        <div>
                          <div className="flex items-center gap-4 mb-6 border-b border-indigo-100 pb-4">
                            <div className="w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center font-black text-3xl shadow-md">
                              {approach}
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-indigo-900 m-0">Năng Lực Tiếp Cận</h3>
                              <p className="text-indigo-600 font-medium">Bước đi đầu tiên</p>
                            </div>
                          </div>
                          <div className="prose prose-indigo max-w-none text-slate-700 leading-relaxed">
                            <p>Năng Lực Tiếp Cận cho thấy <strong className="text-indigo-700">cách bạn bắt đầu</strong> một dự án mới hoặc tiếp cận một cơ hội mới.</p>
                            <p>Số <strong>{approach}</strong> cho thấy bạn thường bắt đầu với sự <span className="bg-fuchsia-100 text-fuchsia-800 px-1 rounded">nhiệt huyết, quyết tâm cao và sự cẩn trọng</span> cần thiết để đảm bảo thành công.</p>
                            <GeneralAdvice number={approach} />
                          </div>
                        </div>
                      )}
                      {activeCard === 11 && (
                        <div>
                          <div className="flex items-center gap-4 mb-6 border-b border-indigo-100 pb-4">
                            <div className="w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center font-black text-3xl shadow-md">
                              {personalYear}
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-indigo-900 m-0">Năm Cá Nhân</h3>
                              <p className="text-indigo-600 font-medium">Năng lượng của năm nay</p>
                            </div>
                          </div>
                          <div className="prose prose-indigo max-w-none text-slate-700 leading-relaxed">
                            <p>Năm Cá Nhân cho biết <strong className="text-indigo-700">năng lượng và xu hướng</strong> của năm hiện tại, giúp bạn lập kế hoạch phù hợp với nhịp điệu tự nhiên.</p>
                            <p>Năm số <strong>{personalYear}</strong> là thời điểm tuyệt vời để <span className="bg-lime-100 text-lime-800 px-1 rounded">tập trung vào sự phát triển cá nhân, học hỏi và gieo những hạt giống mới</span> cho tương lai.</p>
                          </div>
                        </div>
                      )}
                      {activeCard === 12 && (
                        <div>
                          <div className="flex items-center gap-4 mb-6 border-b border-indigo-100 pb-4">
                            <div className="w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center font-black text-3xl shadow-md">
                              {personalMonth}
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-indigo-900 m-0">Tháng Cá Nhân</h3>
                              <p className="text-indigo-600 font-medium">Năng lượng của tháng này</p>
                            </div>
                          </div>
                          <div className="prose prose-indigo max-w-none text-slate-700 leading-relaxed">
                            <p>Tháng Cá Nhân cung cấp cái nhìn chi tiết hơn về <strong className="text-indigo-700">năng lượng của tháng hiện tại</strong>, giúp bạn điều chỉnh các hành động ngắn hạn.</p>
                            <p>Tháng số <strong>{personalMonth}</strong> mang đến những <span className="bg-sky-100 text-sky-800 px-1 rounded">cơ hội mới, sự thay đổi tích cực và những cuộc gặp gỡ thú vị</span>. Hãy mở lòng đón nhận những điều bất ngờ.</p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="bg-white p-6 md:p-8 rounded-3xl border border-amber-100 shadow-sm">
                  <h3 className="text-xl font-bold text-amber-900 mb-2">Biểu đồ Đỉnh Cao Cuộc Đời (Kim Tự Tháp)</h3>
                  <p className="text-amber-800 mb-8">
                    Dựa vào ngày sinh {dob}, 4 đỉnh cao cuộc đời của bạn rơi vào các năm:
                  </p>
                  
                  <div className="flex justify-between items-end min-h-[320px] relative pt-10 overflow-x-auto pb-4">
                    {pinnacles && (
                      <>
                        <div className="w-1/5 flex flex-col items-center relative z-10 px-1">
                          <div className="text-xs font-bold mb-3 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200 shadow-sm text-amber-900">{pinnacles.years[0]}</div>
                          <div className="bg-green-100 text-green-800 border border-green-300 w-full max-w-[80px] py-1.5 text-center text-xs font-bold mb-2 rounded-md">Đỉnh 1<br/><span className="text-lg">{pinnacles.peaks[0]}</span></div>
                          <div className="bg-red-100 text-red-800 border border-red-300 w-full max-w-[80px] py-1.5 text-center text-xs font-bold mb-2 rounded-md">Thử thách<br/><span className="text-lg">{pinnacles.challenges[0]}</span></div>
                          <div className="bg-blue-100 text-blue-800 border border-blue-300 w-full max-w-[80px] py-1.5 text-center text-xs font-bold mb-2 rounded-md">Phát triển<br/><span className="text-lg">{pinnacles.peaks[0] + pinnacles.challenges[0] > 9 ? (pinnacles.peaks[0] + pinnacles.challenges[0]) % 9 || 9 : pinnacles.peaks[0] + pinnacles.challenges[0]}</span></div>
                          <div className="text-[10px] font-bold mt-2 text-slate-600">0 &gt;&gt; {pinnacles.ages[0]}</div>
                          <div className="h-16 w-full bg-amber-100/60 rounded-t-xl mt-2 border-t border-x border-amber-200/50"></div>
                        </div>
                        <div className="w-1/5 flex flex-col items-center relative z-20 px-1">
                          <div className="text-xs font-bold mb-3 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200 shadow-sm text-amber-900">{pinnacles.years[1]}</div>
                          <div className="bg-green-100 text-green-800 border border-green-300 w-full max-w-[80px] py-1.5 text-center text-xs font-bold mb-2 rounded-md">Đỉnh 2<br/><span className="text-lg">{pinnacles.peaks[1]}</span></div>
                          <div className="bg-red-100 text-red-800 border border-red-300 w-full max-w-[80px] py-1.5 text-center text-xs font-bold mb-2 rounded-md">Thử thách<br/><span className="text-lg">{pinnacles.challenges[1]}</span></div>
                          <div className="bg-blue-100 text-blue-800 border border-blue-300 w-full max-w-[80px] py-1.5 text-center text-xs font-bold mb-2 rounded-md">Phát triển<br/><span className="text-lg">{pinnacles.peaks[1] + pinnacles.challenges[1] > 9 ? (pinnacles.peaks[1] + pinnacles.challenges[1]) % 9 || 9 : pinnacles.peaks[1] + pinnacles.challenges[1]}</span></div>
                          <div className="text-[10px] font-bold mt-2 text-slate-600">{pinnacles.ages[0] + 1} &gt;&gt; {pinnacles.ages[1]}</div>
                          <div className="h-24 w-full bg-amber-200/60 rounded-t-xl mt-2 border-t border-x border-amber-300/50"></div>
                        </div>
                        <div className="w-1/5 flex flex-col items-center relative z-30 px-1">
                          <div className="text-xs font-bold mb-3 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200 shadow-sm text-amber-900">{pinnacles.years[2]}</div>
                          <div className="bg-green-100 text-green-800 border border-green-300 w-full max-w-[80px] py-1.5 text-center text-xs font-bold mb-2 rounded-md">Đỉnh 3<br/><span className="text-lg">{pinnacles.peaks[2]}</span></div>
                          <div className="bg-red-100 text-red-800 border border-red-300 w-full max-w-[80px] py-1.5 text-center text-xs font-bold mb-2 rounded-md">Thử thách<br/><span className="text-lg">{pinnacles.challenges[2]}</span></div>
                          <div className="bg-blue-100 text-blue-800 border border-blue-300 w-full max-w-[80px] py-1.5 text-center text-xs font-bold mb-2 rounded-md">Phát triển<br/><span className="text-lg">{pinnacles.peaks[2] + pinnacles.challenges[2] > 9 ? (pinnacles.peaks[2] + pinnacles.challenges[2]) % 9 || 9 : pinnacles.peaks[2] + pinnacles.challenges[2]}</span></div>
                          <div className="text-[10px] font-bold mt-2 text-slate-600">{pinnacles.ages[1] + 1} &gt;&gt; {pinnacles.ages[2]}</div>
                          <div className="h-32 w-full bg-amber-300/60 rounded-t-xl mt-2 border-t border-x border-amber-400/50"></div>
                        </div>
                        <div className="w-1/5 flex flex-col items-center relative z-20 px-1">
                          <div className="text-xs font-bold mb-3 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200 shadow-sm text-amber-900">{pinnacles.years[3]}</div>
                          <div className="bg-green-100 text-green-800 border border-green-300 w-full max-w-[80px] py-1.5 text-center text-xs font-bold mb-2 rounded-md">Đỉnh 4<br/><span className="text-lg">{pinnacles.peaks[3]}</span></div>
                          <div className="bg-red-100 text-red-800 border border-red-300 w-full max-w-[80px] py-1.5 text-center text-xs font-bold mb-2 rounded-md">Thử thách<br/><span className="text-lg">{pinnacles.challenges[3]}</span></div>
                          <div className="bg-blue-100 text-blue-800 border border-blue-300 w-full max-w-[80px] py-1.5 text-center text-xs font-bold mb-2 rounded-md">Phát triển<br/><span className="text-lg">{pinnacles.peaks[3] + pinnacles.challenges[3] > 9 ? (pinnacles.peaks[3] + pinnacles.challenges[3]) % 9 || 9 : pinnacles.peaks[3] + pinnacles.challenges[3]}</span></div>
                          <div className="text-[10px] font-bold mt-2 text-slate-600">{pinnacles.ages[2] + 1} &gt;&gt; {pinnacles.ages[3]}</div>
                          <div className="h-24 w-full bg-amber-200/60 rounded-t-xl mt-2 border-t border-x border-amber-300/50"></div>
                        </div>
                        <div className="w-1/5 flex flex-col items-center relative z-10 px-1">
                          <div className="text-xs font-bold mb-3 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200 shadow-sm text-amber-900">{pinnacles.years[3] + 1}+</div>
                          <div className="bg-green-100 text-green-800 border border-green-300 w-full max-w-[80px] py-1.5 text-center text-xs font-bold mb-2 rounded-md">Đỉnh 5<br/><span className="text-lg">{pinnacles.peaks[3]}</span></div>
                          <div className="bg-red-100 text-red-800 border border-red-300 w-full max-w-[80px] py-1.5 text-center text-xs font-bold mb-2 rounded-md">Thử thách<br/><span className="text-lg">{pinnacles.challenges[3]}</span></div>
                          <div className="bg-blue-100 text-blue-800 border border-blue-300 w-full max-w-[80px] py-1.5 text-center text-xs font-bold mb-2 rounded-md">Phát triển<br/><span className="text-lg">{pinnacles.peaks[3] + pinnacles.challenges[3]}</span></div>
                          <div className="text-[10px] font-bold mt-2 text-slate-600">{pinnacles.ages[3] + 1}+</div>
                          <div className="h-16 w-full bg-amber-100/60 rounded-t-xl mt-2 border-t border-x border-amber-200/50"></div>
                        </div>
                      </>
                    )}
                  </div>
                  
                  <div className="mt-8 space-y-6">
                    <div className="bg-amber-50 p-5 rounded-xl border border-amber-200">
                      <h4 className="font-bold text-amber-900 mb-4">Ý nghĩa các Đỉnh Cao</h4>
                      <div className="space-y-6 text-sm text-amber-800">
                        <div className="border-b border-amber-200/50 pb-4">
                          <p className="font-bold text-lg text-green-800 mb-2">Đỉnh 1 (Tuổi 0 - {pinnacles?.ages[0]})</p>
                          <p className="mb-2"><strong className="text-green-700">Đỉnh cao (Số {pinnacles?.peaks[0]}):</strong> {getPinnacleMeaning(pinnacles?.peaks[0] || 0)}</p>
                          <p className="mb-2"><strong className="text-red-700">Thử thách (Số {pinnacles?.challenges[0]}):</strong> {getChallengeMeaning(pinnacles?.challenges[0] || 0)}</p>
                          <p><strong className="text-blue-700">Phát triển (Số {(pinnacles?.peaks[0] || 0) + (pinnacles?.challenges[0] || 0) > 9 ? ((pinnacles?.peaks[0] || 0) + (pinnacles?.challenges[0] || 0)) % 9 || 9 : (pinnacles?.peaks[0] || 0) + (pinnacles?.challenges[0] || 0)}):</strong> {getDevelopmentMeaning((pinnacles?.peaks[0] || 0) + (pinnacles?.challenges[0] || 0) > 9 ? ((pinnacles?.peaks[0] || 0) + (pinnacles?.challenges[0] || 0)) % 9 || 9 : (pinnacles?.peaks[0] || 0) + (pinnacles?.challenges[0] || 0))}</p>
                        </div>
                        <div className="border-b border-amber-200/50 pb-4">
                          <p className="font-bold text-lg text-green-800 mb-2">Đỉnh 2 (Tuổi {pinnacles?.ages[0]! + 1} - {pinnacles?.ages[1]})</p>
                          <p className="mb-2"><strong className="text-green-700">Đỉnh cao (Số {pinnacles?.peaks[1]}):</strong> {getPinnacleMeaning(pinnacles?.peaks[1] || 0)}</p>
                          <p className="mb-2"><strong className="text-red-700">Thử thách (Số {pinnacles?.challenges[1]}):</strong> {getChallengeMeaning(pinnacles?.challenges[1] || 0)}</p>
                          <p><strong className="text-blue-700">Phát triển (Số {(pinnacles?.peaks[1] || 0) + (pinnacles?.challenges[1] || 0) > 9 ? ((pinnacles?.peaks[1] || 0) + (pinnacles?.challenges[1] || 0)) % 9 || 9 : (pinnacles?.peaks[1] || 0) + (pinnacles?.challenges[1] || 0)}):</strong> {getDevelopmentMeaning((pinnacles?.peaks[1] || 0) + (pinnacles?.challenges[1] || 0) > 9 ? ((pinnacles?.peaks[1] || 0) + (pinnacles?.challenges[1] || 0)) % 9 || 9 : (pinnacles?.peaks[1] || 0) + (pinnacles?.challenges[1] || 0))}</p>
                        </div>
                        <div className="border-b border-amber-200/50 pb-4">
                          <p className="font-bold text-lg text-green-800 mb-2">Đỉnh 3 (Tuổi {pinnacles?.ages[1]! + 1} - {pinnacles?.ages[2]})</p>
                          <p className="mb-2"><strong className="text-green-700">Đỉnh cao (Số {pinnacles?.peaks[2]}):</strong> {getPinnacleMeaning(pinnacles?.peaks[2] || 0)}</p>
                          <p className="mb-2"><strong className="text-red-700">Thử thách (Số {pinnacles?.challenges[2]}):</strong> {getChallengeMeaning(pinnacles?.challenges[2] || 0)}</p>
                          <p><strong className="text-blue-700">Phát triển (Số {(pinnacles?.peaks[2] || 0) + (pinnacles?.challenges[2] || 0) > 9 ? ((pinnacles?.peaks[2] || 0) + (pinnacles?.challenges[2] || 0)) % 9 || 9 : (pinnacles?.peaks[2] || 0) + (pinnacles?.challenges[2] || 0)}):</strong> {getDevelopmentMeaning((pinnacles?.peaks[2] || 0) + (pinnacles?.challenges[2] || 0) > 9 ? ((pinnacles?.peaks[2] || 0) + (pinnacles?.challenges[2] || 0)) % 9 || 9 : (pinnacles?.peaks[2] || 0) + (pinnacles?.challenges[2] || 0))}</p>
                        </div>
                        <div className="border-b border-amber-200/50 pb-4">
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
                      <div className="bg-slate-100 text-center font-bold py-3 border-b border-slate-300 text-slate-800">
                        NĂM CÁ NHÂN
                      </div>
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
                              <div key={year} className={`rounded-lg overflow-hidden flex flex-col ${isCurrent ? 'ring-2 ring-indigo-500 shadow-md transform scale-105 z-10' : 'border border-slate-200'}`}>
                                <div className={`text-center py-2 font-bold ${isPeak && !isCurrent ? 'bg-red-500 text-white' : isCurrent ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700'}`}>
                                  {pYear}
                                </div>
                                <div className={`text-center py-2 text-sm ${isCurrent ? 'bg-indigo-50 font-bold text-indigo-900' : 'bg-white text-slate-600'}`}>
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
                        <div className="bg-slate-100 text-center font-bold py-3 border-b border-slate-300 text-slate-800 uppercase">
                          THÁNG CÁ NHÂN TRONG NĂM {new Date().getFullYear()}
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
                              <div key={month} className={`border rounded-md flex flex-col overflow-hidden ${isCurrentMonth ? 'ring-2 ring-indigo-500 border-transparent' : 'border-slate-200'}`}>
                                <div className={`text-center py-1 font-bold text-sm ${isPeak && !isCurrentMonth ? 'bg-red-500 text-white' : isCurrentMonth ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700'}`}>
                                  {pMonth}
                                </div>
                                <div className={`text-center py-1 text-xs ${isCurrentMonth ? 'bg-indigo-50 font-bold text-indigo-900' : 'bg-white text-slate-600'}`}>
                                  T{month}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      
                      <div className="border border-slate-300 rounded-lg overflow-hidden bg-white shadow-sm flex flex-col">
                        <div className="bg-slate-100 text-center font-bold py-3 border-b border-slate-300 text-slate-800 uppercase">
                          THÁNG CÁ NHÂN TRONG NĂM {new Date().getFullYear() + 1}
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
                      <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 shadow-sm">
                        <h4 className="font-bold text-xl text-indigo-900 mb-4">Chi tiết Năm Cá Nhân {new Date().getFullYear()} (Số {calculatePersonalYear(dob, new Date().getFullYear())})</h4>
                        <div className="prose prose-indigo max-w-none text-indigo-800 text-sm">
                          <p>{getPersonalYearMeaning(calculatePersonalYear(dob, new Date().getFullYear()))}</p>
                        </div>
                        
                        <h5 className="font-bold text-indigo-800 mt-6 mb-3">Tháng Cá Nhân Hiện Tại (Tháng {new Date().getMonth() + 1} - Số {calculatePersonalMonth(calculatePersonalYear(dob, new Date().getFullYear()), new Date().getMonth() + 1)})</h5>
                        <div className="bg-white p-4 rounded-lg border border-indigo-100 text-sm text-slate-700">
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
