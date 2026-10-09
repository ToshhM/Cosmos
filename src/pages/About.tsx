import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="pt-40 pb-24 bg-[#F8F7F3]">
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1A1A1A]/30 mb-8 block">About Cosmos</span>
          <h1 className="text-6xl md:text-9xl font-serif text-[#1A1A1A] tracking-tighter leading-[0.8] mb-16">
            Connecting<br />
            <span className="italic opacity-80 underline underline-offset-16">Culture.</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mt-24">
          <div className="space-y-12">
            <h2 className="text-3xl font-serif text-[#1A1A1A] leading-tight">
              We are a Brazzaville-based entertainment group building the future of African urban culture.
            </h2>
            <p className="text-lg text-[#1A1A1A]/60 font-light leading-relaxed">
              Cosmos Group was founded on a simple insight: Africa's youth are its greatest asset, yet the infrastructure to support their creative and athletic ambitions remains underdeveloped.
            </p>
            <p className="text-lg text-[#1A1A1A]/60 font-light leading-relaxed">
              We bridge this gap through three integrated pillars: world-class events, professional talent management, and high-end content production.
            </p>
          </div>
          
          <div className="relative aspect-[4/5] bg-gray-200 overflow-hidden group rounded-sm">
             <img 
               src="/images/brazzaville-youth.jpg" 
               className="w-full h-full object-cover object-center grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" 
               alt="Jeunesse et acrobates à Brazzaville - Photo Valdhy Mbemba" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
             <div className="absolute top-4 left-4 bg-[#CFB53B] text-black px-3 py-1.5 text-[9px] uppercase tracking-widest font-bold">
               Brazzaville · Jeunesse & Culture
             </div>
             <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[9px] uppercase tracking-widest font-bold text-[#CFB53B] mb-1 block">Créativité, Audace & Avenir</span>
                <p className="text-base font-serif italic text-white leading-snug">« Offrir à la jeunesse africaine la scène et l'écosystème qu'elle mérite. »</p>
                <p className="text-[9px] text-white/50 mt-2 tracking-wider">Photo : Valdhy Mbemba</p>
             </div>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="mt-48 bg-black py-48 text-white px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 space-y-8 md:space-y-0">
             <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">Our Values</span>
             <h2 className="text-4xl md:text-7xl font-serif tracking-tighter">Integrity over influence.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
            {[
              { title: "Authenticity", desc: "We remain rooted in Brazzaville's streets while looking at the global stage." },
              { title: "Precision", desc: "Every event is a masterclass in production and audience safety." },
              { title: "Legacy", desc: "We don't build for the moment; we build for the decade." }
            ].map((v, i) => (
              <div key={v.title} className="p-8 border border-white/10 hover:bg-white/5 transition-colors">
                <span className="text-xs font-bold opacity-30 mb-8 block">0{i+1}</span>
                <h3 className="text-2xl font-serif mb-6">{v.title}</h3>
                <p className="text-sm text-white/50 font-light leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
