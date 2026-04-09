const fs = require('fs');
const path = require('path');

const PRIMARY_APPLE = '#0071e3'; // Apple Blue
const TEXT_MAIN = '#1d1d1f';
const TEXT_MUTED = '#6e6e73';
const BG_ALT = '#ffffff';

function replaceApple(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceApple(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');

      if (fullPath.endsWith('globals.css')) {
        content = `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --primary: #0071e3;
  --bg: #f5f5f7;
  --text-main: #1d1d1f;
  --text-muted: #6e6e73;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--bg);
  color: var(--text-main);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb { background: #d2d2d7; border-radius: 3px; }

.section-label {
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-muted);
  font-weight: 600;
}

.btn-primary {
  @apply flex items-center justify-center gap-2 bg-[#1d1d1f] text-white font-medium rounded-full px-8 py-3.5 transition-transform duration-300;
}
.btn-primary:hover {
  @apply scale-[1.02] bg-black;
}

.btn-secondary {
  @apply flex items-center justify-center gap-2 bg-transparent border border-[#d2d2d7] text-[#1d1d1f] font-medium rounded-full px-8 py-3.5 transition-all duration-300;
}
.btn-secondary:hover {
  @apply border-[#1d1d1f] bg-[rgba(0,0,0,0.02)] scale-[1.02];
}
`;
        fs.writeFileSync(fullPath, content);
        continue;
      }

      // Convert page.tsx
      if (fullPath.endsWith('page.tsx')) {
        content = content.replace(/className="noise-bg relative min-h-screen bg-\[#[a-zA-Z0-9]+\]"/, 'className="relative min-h-screen bg-[#f5f5f7] text-[#1d1d1f]"');
      }

      // Convert Dark colors to Apple
      // Replace whites with grays/blacks
      content = content.replace(/text-white\/[0-9]+/g, 'text-[#6e6e73]')
                       .replace(/text-white/g, 'text-[#1d1d1f]')
                       .replace(/bg-\[#2563eb\]/gi, `bg-[${PRIMARY_APPLE}]`)
                       .replace(/bg-blue-600/g, `bg-[${PRIMARY_APPLE}]`)
                       .replace(/text-\[#2563eb\]/gi, `text-[${PRIMARY_APPLE}]`)
                       .replace(/text-blue-500/g, `text-[${PRIMARY_APPLE}]`)
                       .replace(/text-blue-600/g, `text-[${PRIMARY_APPLE}]`);

      // Components specific patches:
      // Remove glowing borders, glass, animated-border
      content = content.replace(/animated-border glass/g, 'bg-white border border-[#d2d2d7] shadow-sm')
                       .replace(/glass/g, 'bg-white/80 border border-[#d2d2d7] shadow-sm backdrop-blur-xl')
                       .replace(/rgba\(37,99,235,0\.[0-9]+\)/g, 'rgba(0,113,227,0.1)')
                       .replace(/rgba\(255,255,255,0\.[0-9]+\)/g, 'rgba(0,0,0,0.05)')
                       .replace(/border-white\/\[0\.0[0-9]+\]/g, 'border-[#d2d2d7]')
                       .replace(/bg-white\/\[0\.0[0-9]+\]/g, 'bg-[#f5f5f7]');

      if (fullPath.endsWith('Hero.tsx')) {
         content = content.replace(/<div className="absolute inset-0 dot-grid opacity-30" \/>/, '')
                          .replace(/<div className="absolute inset-0 bg-gradient-[^>]*\/>/g, '<div className="absolute inset-0 bg-gradient-to-b from-[#ffffff] to-[#f5f5f7] -z-10" />')
                          .replace(/<motion.div\s+animate=[\s\S]*?className="absolute .*? blur-\[150px\] pointer-events-none"\s*\/>/g, '')
                          .replace(/<motion.div\s+animate=[\s\S]*?className="absolute .*? blur-\[120px\] pointer-events-none"\s*\/>/g, '')
                          .replace(/text-gradient-primary/g, 'text-[#1d1d1f] font-bold');
      }

      if (fullPath.endsWith('Navbar.tsx')) {
         content = content.replace(/bg-black\/40/g, 'bg-white/80 backdrop-blur-xl border-b border-[#e5e5ea] shadow-sm')
                          .replace(/border-white\/10/g, 'border-transparent');
      }

      fs.writeFileSync(fullPath, content);
    }
  }
}

replaceApple('./src');
console.log('Done mapping to Apple style');
