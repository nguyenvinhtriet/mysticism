import * as fs from 'fs';

let content = fs.readFileSync('app/numerology/page.tsx', 'utf8');

content = content.replace(/to-slate-950/g, 'to-slate-50');
content = content.replace(/to-slate-900/g, 'to-white');
content = content.replace(/from-slate-900/g, 'from-white');
content = content.replace(/from-slate-950/g, 'from-slate-50');

// Also fix the prose-amber to prose-violet or something, since it's a light theme now
content = content.replace(/prose-amber/g, 'prose-violet');
content = content.replace(/prose-orange/g, 'prose-violet');

fs.writeFileSync('app/numerology/page.tsx', content);
console.log("Gradient fixed.");
