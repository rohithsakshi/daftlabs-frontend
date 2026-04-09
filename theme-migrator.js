const fs = require('fs');
const path = require('path');

const NEW_PRIMARY = '#2563eb'; // blue-600
const NEW_PRIMARY_RGB = '37,99,235';

const NEW_SECONDARY = '#1d4ed8'; // blue-700
const NEW_SECONDARY_RGB = '29,78,216';

function replaceTheme(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceTheme(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Replace Hex
      content = content.replace(/#f97316/gi, NEW_PRIMARY)
                       .replace(/#ea580c/gi, NEW_SECONDARY)
                       .replace(/#fb923c/gi, '#3b82f6'); // blue-500
      
      // Replace RGB inside rgba()
      content = content.replace(/249,\s*115,\s*22/g, NEW_PRIMARY_RGB);
      
      // Replace Tailwind gradient utility classes
      content = content.replace(/text-gradient-orange/g, 'text-gradient-primary');

      // Update globals.css hardcoded gradients
      if (fullPath.endsWith('globals.css')) {
        content = content.replace(/from-orange-500/g, 'from-blue-600')
                         .replace(/to-orange-400/g, 'to-blue-500');
        
        // Also update background to a deep slate blue instead of black
        content = content.replace(/--bg: #000000;/g, '--bg: #0B1120;')
                         .replace(/--bg: #[0-9a-fA-F]+/g, '--bg: #0B1120;');
      }
      if (fullPath.endsWith('page.tsx')) {
        content = content.replace(/bg-\[#080808\]/g, 'bg-[#0B1120]');
      }

      fs.writeFileSync(fullPath, content);
    }
  }
}

replaceTheme('./src');
replaceTheme('./tailwind.config.ts');
console.log('Theme upgraded successfully to Professional Deep Blue!');
