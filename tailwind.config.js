/** Tailwind config cho IndustrialPro DS (cùng token với assets/css/site.css). */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}','./pages/**/*.{js,ts,jsx,tsx,mdx}','./components/**/*.{js,ts,jsx,tsx,mdx}','./src/**/*.{js,ts,jsx,tsx,html}','./*.html'],
  theme: {
    screens: { sm: '640px', md: '768px', lg: '1024px', xl: '1280px' },
    container: { center: true, padding: { DEFAULT: '1rem', md: '1.5rem', lg: '2rem' }, screens: { xl: '1280px' } },
    extend: {
      colors: {
        primary: { 50:'#EFF6FC',100:'#D9E8F6',200:'#B3D1EC',300:'#7FB0DD',400:'#4A8CCB',500:'#1E6FB8',600:'#0B5394',700:'#0A4378',800:'#08335C',900:'#052342',DEFAULT:'#0B5394' },
        accent:  { 50:'#FFF4EB',100:'#FFE2CC',200:'#FFC499',400:'#FF8533',500:'#FF6B00',600:'#E65F00',700:'#CC5500',DEFAULT:'#FF6B00' },
        alert:   { 50:'#FDECEC',600:'#D32F2F',700:'#B71C1C',DEFAULT:'#D32F2F' },
        success: { 50:'#ECFDF3',600:'#15803D',DEFAULT:'#15803D' },
        warning: { 500:'#F5B800',DEFAULT:'#F5B800' },
        neutral: { 0:'#FFFFFF',50:'#F8FAFC',100:'#F1F5F9',200:'#E2E8F0',300:'#CBD5E1',400:'#94A3B8',500:'#64748B',600:'#475569',700:'#334155',800:'#1E293B',900:'#0F172A' },
      },
      fontFamily: {
        sans: ['Inter','system-ui','-apple-system','"Segoe UI"','Roboto','Arial','sans-serif'],
        mono: ['"JetBrains Mono"','ui-monospace','SFMono-Regular','Menlo','Consolas','monospace'],
      },
      fontSize: {
        h1:['2.25rem',{lineHeight:'2.75rem',letterSpacing:'-0.02em',fontWeight:'700'}],
        'h1-sm':['1.75rem',{lineHeight:'2.25rem',letterSpacing:'-0.02em',fontWeight:'700'}],
        h2:['1.75rem',{lineHeight:'2.25rem',letterSpacing:'-0.01em',fontWeight:'700'}],
        'h2-sm':['1.375rem',{lineHeight:'1.875rem',letterSpacing:'-0.01em',fontWeight:'700'}],
        h3:['1.25rem',{lineHeight:'1.75rem',fontWeight:'600'}],
        'h3-sm':['1.125rem',{lineHeight:'1.625rem',fontWeight:'600'}],
        'body-lg':['1rem',{lineHeight:'1.625rem',fontWeight:'400'}],
        body:['0.875rem',{lineHeight:'1.375rem',fontWeight:'400'}],
        caption:['0.75rem',{lineHeight:'1rem',letterSpacing:'0.01em',fontWeight:'500'}],
        label:['0.8125rem',{lineHeight:'1.125rem',letterSpacing:'0.02em',fontWeight:'600'}],
        spec:['0.875rem',{lineHeight:'1.25rem',fontWeight:'500'}],
        sku:['0.8125rem',{lineHeight:'1rem',letterSpacing:'0.03em',fontWeight:'500'}],
        price:['1.5rem',{lineHeight:'2rem',fontWeight:'700'}],
      },
      borderRadius: { sm:'4px', DEFAULT:'6px', md:'6px', lg:'8px' },
      boxShadow: {
        btn:'0 1px 2px rgba(15,23,42,0.08)','btn-hover':'0 2px 6px rgba(15,23,42,0.16)',
        card:'0 1px 2px rgba(15,23,42,0.04)','card-hover':'0 4px 12px rgba(15,23,42,0.08)',
      },
      maxWidth: { container: '1280px' },
    },
  },
};
