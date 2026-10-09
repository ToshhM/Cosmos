import { Instagram, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#F8F7F3] pt-24 pb-12 px-6 md:px-12 border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8 border-b border-black/10 pb-24">
          <div className="md:col-span-2">
            <h2 className="text-6xl md:text-8xl font-serif text-[#1A1A1A] tracking-tighter leading-[0.8] mb-8">
              A Universe<br /> 
              <span className="italic opacity-80">of possibility.</span>
            </h2>
            <p className="text-sm text-[#1A1A1A]/60 max-w-sm">
              Cosmos is an integrated entertainment platform — connecting events, talent and content across Africa and beyond.
            </p>
          </div>

          <div>
            <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#1A1A1A]/40 mb-8">Divisions</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/events" className="text-sm text-[#1A1A1A] hover:italic transition-all">Cosmos Events</Link>
              </li>
              <li>
                <Link to="/talents" className="text-sm text-[#1A1A1A] hover:italic transition-all">Cosmos Talents</Link>
              </li>
              <li>
                <a href="https://talaref.co" target="_blank" rel="noopener noreferrer" className="text-sm text-[#1A1A1A] hover:italic transition-all">Talaref Studio</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#1A1A1A]/40 mb-8">Company</h3>
            <ul className="space-y-4 text-sm">
              {['About', 'Featured Work', 'Contact', 'Press'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-[#1A1A1A] hover:italic transition-all">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end md:items-center mt-12 space-y-8 md:space-y-0">
          <div className="flex flex-col space-y-4">
             <p className="text-[10px] uppercase tracking-widest text-[#1A1A1A]/50">© 2026 Cosmos Group. All rights reserved.</p>
             <div className="flex space-x-6">
               <Instagram size={18} className="text-[#1A1A1A] opacity-40 hover:opacity-100 cursor-pointer transition-opacity" />
               <Twitter size={18} className="text-[#1A1A1A] opacity-40 hover:opacity-100 cursor-pointer transition-opacity" />
               <Linkedin size={18} className="text-[#1A1A1A] opacity-40 hover:opacity-100 cursor-pointer transition-opacity" />
             </div>
          </div>

          <div className="text-[14vw] md:text-[10vw] font-bold text-[#1A1A1A]/5 tracking-[-0.05em] select-none pointer-events-none">
            COSMOS
          </div>
        </div>
      </div>
    </footer>
  );
}
