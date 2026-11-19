import './globals.css';

export const metadata = {
  title: 'Indraraj Singh Thakur | LVL 7 CODE ARCHITECT',
  description: 'Building modern web applications like Cravora and StudyFlow, levelling up my frontend & C++ OOP skills, and learning how to ship responsive sites with real-world features.',
  keywords: ['Indraraj Singh Thakur', 'Cravora', 'StudyFlow', 'RGPV', 'Rehli', 'Sagar', 'Full-Stack Developer', 'Next.js', 'C++'],
  authors: [{ name: 'Indraraj Singh Thakur', url: 'https://indraraj-portfolio-j1n8.vercel.app' }],
  openGraph: {
    title: 'Indraraj Singh Thakur — RPG System HUD Portfolio v3.0',
    description: 'I build things that work — and I actually enjoy the parts everyone else skips.',
    url: 'https://indraraj-portfolio-j1n8.vercel.app',
    siteName: 'Indraraj Singh Thakur Portfolio',
    type: 'website'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#070a0f] text-slate-200 antialiased selection:bg-amber-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}