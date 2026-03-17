import * as fs from 'fs';

let content = fs.readFileSync('app/numerology/page.tsx', 'utf8');

const replacements: [RegExp, string][] = [
  [/bg-slate-950/g, 'bg-slate-50'],
  [/bg-slate-900/g, 'bg-white'],
  [/bg-slate-800/g, 'bg-slate-100'],
  [/text-slate-100/g, 'text-slate-800'],
  [/text-slate-200/g, 'text-slate-700'],
  [/text-slate-300/g, 'text-slate-600'],
  [/border-slate-800/g, 'border-slate-200'],
  [/border-slate-700/g, 'border-slate-300'],
  [/bg-fuchsia-950\/30/g, 'bg-fuchsia-50'],
  [/border-fuchsia-800\/50/g, 'border-fuchsia-200'],
  [/border-fuchsia-900\/40/g, 'border-fuchsia-200'],
  [/text-fuchsia-100/g, 'text-fuchsia-900'],
  [/text-fuchsia-200/g, 'text-fuchsia-800'],
  [/text-fuchsia-300/g, 'text-fuchsia-700'],
  [/bg-fuchsia-900\/40/g, 'bg-fuchsia-100'],
  [/bg-violet-950\/50/g, 'bg-violet-100'],
  [/text-violet-100/g, 'text-violet-900'],
  [/text-violet-200/g, 'text-violet-800'],
  [/text-violet-300/g, 'text-violet-700'],
  [/border-violet-900\/50/g, 'border-violet-200'],
  [/bg-violet-900\/40/g, 'bg-violet-100'],
  [/bg-violet-800\/60/g, 'bg-violet-200'],
  [/border-violet-700\/50/g, 'border-violet-300'],
  [/text-white/g, 'text-slate-900'],
  // Fix specific cases where text-white should remain white
  [/bg-violet-600 text-slate-900/g, 'bg-violet-600 text-white'],
  [/bg-red-500 text-slate-900/g, 'bg-red-500 text-white'],
  [/bg-slate-50 text-slate-900/g, 'bg-slate-50 text-slate-900'], // Just in case
];

replacements.forEach(([regex, replacement]) => {
  content = content.replace(regex, replacement);
});

// Layout changes
// 1. Header size
content = content.replace('pt-12 relative overflow-hidden pb-24 px-4 rounded-b-[3rem]', 'pt-8 relative overflow-hidden pb-16 px-4 rounded-b-[2rem]');
content = content.replace('-mt-16', '-mt-8');

// 2. Mobile layout and card sizes
// Change flex-row to flex-col md:flex-row
content = content.replace('<div className="flex flex-row gap-6">', '<div className="flex flex-col md:flex-row gap-6">');
// Left column (now right column on web)
content = content.replace('<div className="w-1/3 lg:w-1/4 shrink-0">', '<div className="w-full md:w-1/3 lg:w-1/4 shrink-0 order-1 md:order-2">');
// Right column (now left column on web)
content = content.replace('<div className="w-2/3 lg:w-3/4">', '<div className="w-full md:w-2/3 lg:w-3/4 order-2 md:order-1" id="interpretation-content">');

// Increase card sizes
content = content.replace(/text-\[10px\] md:text-xs/g, 'text-xs md:text-sm');
content = content.replace(/text-xl md:text-2xl/g, 'text-2xl md:text-3xl');
content = content.replace(/text-\[8px\] md:text-\[10px\]/g, 'text-[10px] md:text-xs');

// Update IndicatorBox onHover to onClick for mobile scrolling
content = content.replace(
  'function IndicatorBox({ label, value, description, highlight = false, onHover }: { label: string, value: number, description?: string, highlight?: boolean, onHover?: () => void }) {',
  'function IndicatorBox({ label, value, description, highlight = false, onClick }: { label: string, value: number, description?: string, highlight?: boolean, onClick?: () => void }) {'
);
content = content.replace(
  'onMouseEnter={onHover}',
  'onClick={onClick}'
);

content = content.replace(/onHover=\{\(\) => setActiveCard\((\d+)\)\}/g, 'onClick={() => { setActiveCard($1); const el = document.getElementById("interpretation-content"); if(el) { const y = el.getBoundingClientRect().top + window.scrollY - 100; window.scrollTo({top: y, behavior: "smooth"}); } }}');

fs.writeFileSync('app/numerology/page.tsx', content);
console.log("Replacements done.");
