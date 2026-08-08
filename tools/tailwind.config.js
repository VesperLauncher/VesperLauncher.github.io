module.exports = {
  content: ['./.scan.html'],
  theme: {
    extend: {
      colors: {
        obsidian: '#0e1311',
        moss: { 950:'#0b0f0d', 900:'#0e1311', 800:'#131a17', 700:'#18201c', 600:'#1e2823', 500:'#26332c' },
        emerald: { 400:'#4ade80', 500:'#22c55e', 600:'#10b981' },
      },
      fontFamily: { sans: ['Inter','ui-sans-serif','system-ui','-apple-system','Segoe UI','Roboto','sans-serif'] },
      letterSpacing: { tightest: '-.055em' },
      boxShadow: {
        glow: '0 0 0 1px rgba(34,197,94,.28), 0 10px 40px -8px rgba(34,197,94,.45)',
        'glow-lg': '0 0 0 1px rgba(34,197,94,.32), 0 24px 70px -12px rgba(34,197,94,.5)',
        card: '0 1px 2px rgba(0,0,0,.6), 0 18px 48px -12px rgba(0,0,0,.6)',
      },
      keyframes: {
        float:     { '0%,100%':{ transform:'translateY(0)' }, '50%':{ transform:'translateY(-14px)' } },
        drift:     { '0%':{ transform:'translate3d(0,0,0) scale(1)' }, '100%':{ transform:'translate3d(-3%,-2%,0) scale(1.12)' } },
        marquee:   { '0%':{ transform:'translateX(0)' }, '100%':{ transform:'translateX(-50%)' } },
        shimmer:   { '0%':{ backgroundPosition:'0% 50%' }, '100%':{ backgroundPosition:'200% 50%' } },
        pulseRing: { '0%':{ boxShadow:'0 0 0 0 rgba(34,197,94,.55)' }, '70%':{ boxShadow:'0 0 0 12px rgba(34,197,94,0)' }, '100%':{ boxShadow:'0 0 0 0 rgba(34,197,94,0)' } },
        scan:      { '0%':{ transform:'translateY(-100%)' }, '100%':{ transform:'translateY(420%)' } },
      },
      animation: {
        float:'float 7s ease-in-out infinite',
        drift:'drift 32s ease-in-out infinite alternate',
        marquee:'marquee 40s linear infinite',
        shimmer:'shimmer 6s linear infinite',
        pulseRing:'pulseRing 2.6s cubic-bezier(.4,0,.2,1) infinite',
        scan:'scan 4.5s ease-in-out infinite',
      },
    },
  },
};
