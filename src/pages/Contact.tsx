import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="pt-40 pb-24 bg-[#F8F7F3]">
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1A1A1A]/30 mb-8 block">Inquiries</span>
            <h1 className="text-6xl md:text-8xl font-serif text-[#1A1A1A] tracking-tighter leading-[0.8] mb-12">
              Let's build<br />
              <span className="italic opacity-80 decoration-1">together.</span>
            </h1>
            
            <div className="space-y-16 mt-24">
               <div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/40 mb-4 block">General & Partnerships</span>
                  <p className="text-xl font-medium border-b border-black/10 inline-block pb-1">partners@cosmos.africa</p>
               </div>
               <div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/40 mb-4 block">Talent Scouting</span>
                  <p className="text-xl font-medium border-b border-black/10 inline-block pb-1">talents@cosmos.africa</p>
               </div>
               <div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/40 mb-4 block">Office</span>
                  <p className="text-xl font-medium">Brazzaville, Rep. of Congo<br />82 Avenue de la Paix</p>
               </div>
            </div>
          </div>

          <div className="bg-white p-12 shadow-sm border border-black/5">
             <h3 className="text-2xl font-serif mb-8 italic">Send us a message</h3>
             <form className="space-y-8">
                <div className="space-y-2">
                   <label className="text-[10px] uppercase font-bold tracking-widest text-[#1A1A1A]/40">Your Name</label>
                   <input type="text" className="w-full bg-transparent border-b border-black/10 py-4 focus:border-black outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] uppercase font-bold tracking-widest text-[#1A1A1A]/40">Email Address</label>
                   <input type="email" className="w-full bg-transparent border-b border-black/10 py-4 focus:border-black outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] uppercase font-bold tracking-widest text-[#1A1A1A]/40">Interested in</label>
                   <select className="w-full bg-transparent border-b border-black/10 py-4 focus:border-black outline-none transition-colors">
                      <option>Event Partnership</option>
                      <option>Talent Management</option>
                      <option>Studio Production</option>
                      <option>Other</option>
                   </select>
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] uppercase font-bold tracking-widest text-[#1A1A1A]/40">Message</label>
                   <textarea rows={4} className="w-full bg-transparent border-b border-black/10 py-4 focus:border-black outline-none transition-colors resize-none"></textarea>
                </div>
                <button type="submit" className="w-full py-5 bg-[#1A1A1A] text-white text-[10px] uppercase font-bold tracking-widest hover:italic transition-all">
                   Send Inquiry
                </button>
             </form>
          </div>
        </div>
      </section>
    </div>
  );
}
