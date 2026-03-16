const fs = require('fs');

function replaceIndigoWithOrange(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/indigo/g, 'orange');
  fs.writeFileSync(filePath, content);
}

replaceIndigoWithOrange('./app/numerology/page.tsx');
replaceIndigoWithOrange('./components/UnlockPremium.tsx');
replaceIndigoWithOrange('./app/page.tsx');

console.log('Done replacing indigo with orange');
