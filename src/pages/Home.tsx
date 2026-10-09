import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Camera, Upload } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  // State for user-customized photos
  const [eventsImg, setEventsImg] = useState<string>(() => {
    return localStorage.getItem('cosmos_events_img') || '/images/cosmos-events.png';
  });
  const [talentsImg, setTalentsImg] = useState<string>(() => {
    return localStorage.getItem('cosmos_talents_img') || '/images/cosmos-talents.png';
  });

  const eventsInputRef = useRef<HTMLInputElement>(null);
  const talentsInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = (file: File, type: 'events' | 'talents') => {
    const reader = new FileReader();
    reader.onload = async (e) => {
      const dataUrl = e.target?.result as string;
      if (type === 'events') {
        setEventsImg(dataUrl);
        localStorage.setItem('cosmos_events_img', dataUrl);
        try {
          await fetch('/api/save-image', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ filename: 'cosmos-events.png', dataUrl })
          });
        } catch (err) {
          console.error(err);
        }
      } else {
        setTalentsImg(dataUrl);
        localStorage.setItem('cosmos_talents_img', dataUrl);
        try {
          await fetch('/api/save-image', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ filename: 'cosmos-talents.png', dataUrl })
          });
        } catch (err) {
          console.error(err);
        }
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="bg-[#F8F7F3]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop" 
            alt="Event Atmosphere" 
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-12"
        >
          <motion.div variants={itemVariants} className="flex items-center space-x-3 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">Cosmos Group</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">Est. Brazzaville</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-[12vw] md:text-[9vw] font-serif leading-[0.85] text-white tracking-tighter mb-12">
            A Universe<br />
            <span className="italic opacity-80">of experiences.</span>
          </motion.h1>

          <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-end md:justify-between space-y-12 md:space-y-0">
            <p className="text-sm md:text-lg text-white/60 max-w-sm font-light leading-relaxed">
              An integrated platform connecting events, talent and content — designed for the youth shaping Africa's cultural future.
            </p>
            <div className="flex space-x-8">
              <Link to="/events" className="group flex items-center space-x-3 text-[10px] uppercase font-bold tracking-widest text-white">
                <span>Explore Events</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/talents" className="group flex items-center space-x-3 text-[10px] uppercase font-bold tracking-widest text-white">
                <span>Meet Talents</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-12 right-12 z-10 hidden lg:block">
           <motion.div 
             animate={{ rotate: 360 }}
             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
             className="w-24 h-24 border border-white/20 rounded-full flex items-center justify-center p-4 text-center"
           >
              <span className="text-[8px] uppercase tracking-widest text-white/40 leading-tight">Scroll to discover cosmos</span>
           </motion.div>
        </div>
      </section>

      {/* Marquee Section */}
      <div className="py-8 bg-white border-y border-black/5 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[1,2,3,4].map((i) => (
            <div key={i} className="flex items-center space-x-16 px-8">
              {['Events', 'Talent Management', 'Studio', 'Content'].map((text) => (
                <div key={text} className="flex items-center space-x-6">
                  <span className="text-2xl md:text-3xl font-serif text-[#1A1A1A] tracking-tighter">{text}</span>
                  <Star fill="#CFB53B" stroke="none" size={20} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <section className="py-24 md:py-48 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-6"
          >
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1A1A1A]/30">
              01 — About
            </div>

            {/* Youth Culture Editorial Image */}
            <div className="relative group overflow-hidden rounded-sm bg-stone-200 mt-2">
              <div className="aspect-[4/5] sm:aspect-[3/4] relative overflow-hidden">
                <img 
                  src="/images/brazzaville-youth.jpg" 
                  alt="Performance acrobatique de la jeunesse à Brazzaville - Photo par Valdhy Mbemba" 
                  className="w-full h-full object-cover object-center grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                
                {/* Floating badge */}
                <div className="absolute top-4 left-4 bg-[#CFB53B] text-black px-3 py-1.5 text-[9px] uppercase tracking-widest font-bold shadow-sm">
                  Jeunesse · +60% Under 25
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-white/70 mb-2">
                    Brazzaville, Congo
                  </p>
                  <p className="font-serif italic text-lg leading-snug text-white">
                    « L'énergie brute et le talent de la jeunesse urbaine congolaise. »
                  </p>
                  <p className="text-[9px] text-white/50 mt-2 tracking-wider">
                    Photo : Valdhy Mbemba
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between text-[11px] text-[#1A1A1A]/40 font-mono tracking-wider pt-1">
              <span>GENERATION CREATIVE</span>
              <span>EST. 2024</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-0 md:pt-4"
          >
            <h2 className="text-4xl md:text-6xl font-serif text-[#1A1A1A] tracking-tighter mb-12 leading-tight">
              We build the <span className="italic">infrastructure</span> for culture — where talent, audience and partners meet.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-[#1A1A1A]/60 leading-relaxed font-light mb-12">
              <p>
                More than 60% of the Congolese population is under 25. Dynamic, creative, deeply engaged in sport, music and urban culture — yet largely under-served by structured intermediaries.
              </p>
              <p>
                Cosmos exists to close that gap: a single platform giving young talent a stage, brands a credible audience, and a region a cultural engine that can scale far beyond its borders.
              </p>
            </div>

            <div className="pt-8 border-t border-black/10 flex flex-wrap items-center gap-8">
              <div>
                <span className="block text-3xl font-serif font-bold text-[#1A1A1A]">60%+</span>
                <span className="text-[10px] uppercase tracking-widest text-[#1A1A1A]/40 font-bold">Population under 25</span>
              </div>
              <div className="h-8 w-px bg-black/10" />
              <div>
                <span className="block text-3xl font-serif font-bold text-[#1A1A1A]">3 Pillars</span>
                <span className="text-[10px] uppercase tracking-widest text-[#1A1A1A]/40 font-bold">Events · Talents · Studio</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divisions Section */}
      <section className="pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
           <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1A1A1A]/30">02 — Divisions</div>
           <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1A1A1A]/30">Three Pillars · One Ecosystem</div>
        </div>
        
        {/* Quick Action Bar to load the exact photos if not set */}
        <div className="mb-6 p-4 bg-white border border-black/5 rounded-sm flex flex-wrap items-center justify-between text-xs text-[#1A1A1A]/80 gap-3 shadow-xs">
          <div className="flex items-center space-x-2.5">
            <Upload size={14} className="text-[#CFB53B]" />
            <span className="font-serif text-sm">Photos personnalisées pour <strong>Cosmos Events</strong> et <strong>Cosmos Talents</strong></span>
          </div>
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => eventsInputRef.current?.click()}
              className="px-3.5 py-1.5 bg-[#1A1A1A] hover:bg-[#CFB53B] text-white hover:text-black rounded-xs text-[10px] uppercase tracking-widest font-bold transition-all flex items-center space-x-1.5 cursor-pointer"
            >
              <Camera size={12} />
              <span>Charger photo Events (Foule)</span>
            </button>
            <button 
              onClick={() => talentsInputRef.current?.click()}
              className="px-3.5 py-1.5 bg-[#1A1A1A] hover:bg-[#CFB53B] text-white hover:text-black rounded-xs text-[10px] uppercase tracking-widest font-bold transition-all flex items-center space-x-1.5 cursor-pointer"
            >
              <Camera size={12} />
              <span>Charger photo Talents (Garçon)</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Cosmos Events */}
          <div 
            className="group relative aspect-[4/5] bg-black overflow-hidden rounded-sm"
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              if (e.dataTransfer.files?.[0]) {
                handleUpload(e.dataTransfer.files[0], 'events');
              }
            }}
          >
            {/* Background Image with onError fallback */}
            <img 
              src={eventsImg}
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=1974&auto=format&fit=crop";
              }}
              alt="Cosmos Events - Événement et Rassemblement Jeunesse"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/45 group-hover:bg-black/30 transition-all duration-700" />
            
            {/* Hidden Input */}
            <input 
              type="file" 
              ref={eventsInputRef} 
              className="hidden" 
              accept="image/*"
              onChange={(e) => {
                if (e.target.files?.[0]) {
                  handleUpload(e.target.files[0], 'events');
                }
              }}
            />

            {/* Quick Upload action button */}
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                eventsInputRef.current?.click();
              }}
              className="absolute top-6 right-6 z-20 bg-black/70 hover:bg-[#CFB53B] text-white hover:text-black px-3 py-1.5 rounded-full text-[9px] uppercase tracking-widest font-bold backdrop-blur-md border border-white/20 transition-all flex items-center space-x-1.5 cursor-pointer opacity-70 hover:opacity-100"
              title="Sélectionner Still 2026-10-09 165732_1.1.1.png pour Cosmos Events"
            >
              <Camera size={12} />
              <span>Changer photo</span>
            </button>

            <Link to="/events" className="absolute inset-0 p-12 flex flex-col justify-between text-white z-10">
              <div className="flex justify-between items-center">
                <span className="text-[8px] uppercase tracking-widest font-bold opacity-60">Events</span>
                <span className="text-[9px] uppercase tracking-widest font-bold bg-[#CFB53B]/20 text-[#CFB53B] px-2.5 py-1 rounded">La Place du Peuple</span>
              </div>
              <div>
                 <span className="text-[10px] uppercase tracking-widest font-bold opacity-60 mb-4 block">A Universe of Experiences</span>
                 <h3 className="text-4xl font-serif mb-4 group-hover:-translate-y-2 transition-transform duration-500">Cosmos Events</h3>
                 <p className="text-xs font-light opacity-60 max-w-xs mb-8">High-impact sport, music and cultural events. Home of ONE26 & Basket Na Bisso.</p>
                 <span className="text-[10px] uppercase font-bold tracking-widest flex items-center group-hover:translate-x-2 transition-all">Enter <ArrowRight size={14} className="ml-2" /></span>
              </div>
            </Link>
          </div>

          {/* Cosmos Talents */}
          <div 
            className="group relative aspect-[4/5] bg-[#1A1A1A] overflow-hidden rounded-sm"
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              if (e.dataTransfer.files?.[0]) {
                handleUpload(e.dataTransfer.files[0], 'talents');
              }
            }}
          >
            {/* Background Image with onError fallback */}
            <img 
              src={talentsImg}
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2070&auto=format&fit=crop";
              }}
              alt="Cosmos Talents - Le Garçon Freestyleur"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-red-950/45 group-hover:bg-red-950/25 transition-all duration-700" />
            
            {/* Hidden Input */}
            <input 
              type="file" 
              ref={talentsInputRef} 
              className="hidden" 
              accept="image/*"
              onChange={(e) => {
                if (e.target.files?.[0]) {
                  handleUpload(e.target.files[0], 'talents');
                }
              }}
            />

            {/* Quick Upload action button */}
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                talentsInputRef.current?.click();
              }}
              className="absolute top-6 right-6 z-20 bg-black/70 hover:bg-[#CFB53B] text-white hover:text-black px-3 py-1.5 rounded-full text-[9px] uppercase tracking-widest font-bold backdrop-blur-md border border-white/20 transition-all flex items-center space-x-1.5 cursor-pointer opacity-70 hover:opacity-100"
              title="Sélectionner Still 2026-10-09 171744_1.1.2.png (le garçon) pour Cosmos Talents"
            >
              <Camera size={12} />
              <span>Changer photo</span>
            </button>

            <Link to="/talents" className="absolute inset-0 p-12 flex flex-col justify-between text-white z-10">
              <div className="flex justify-between items-center">
                <span className="text-[8px] uppercase tracking-widest font-bold opacity-60">Talents</span>
                <span className="text-[9px] uppercase tracking-widest font-bold bg-[#CFB53B]/20 text-[#CFB53B] px-2.5 py-1 rounded">Jeunesse & Freestyle</span>
              </div>
              <div>
                 <span className="text-[10px] uppercase tracking-widest font-bold opacity-60 mb-4 block">A Universe of Talents</span>
                 <h3 className="text-4xl font-serif mb-4 group-hover:-translate-y-2 transition-transform duration-500">Cosmos Talents</h3>
                 <p className="text-xs font-light opacity-60 max-w-xs mb-8">Identifying, structuring and amplifying the next generation of African artists, athletes and creators.</p>
                 <span className="text-[10px] uppercase font-bold tracking-widest flex items-center group-hover:translate-x-2 transition-all">Enter <ArrowRight size={14} className="ml-2" /></span>
              </div>
            </Link>
          </div>

          {/* Studio 360 - Full Width */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
             <div className="aspect-video bg-[url('https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center rounded-sm" />
             <div className="flex flex-col justify-center p-12 bg-white rounded-sm">
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/40 mb-8">Studio · 360°</span>
                <p className="text-sm text-[#1A1A1A]/70 leading-relaxed font-light mb-12">
                  Capturing events. Producing video, photo, digital. Building storytelling that travels — and amplifies the entire ecosystem on every platform that matters.
                </p>
                <div className="space-y-4">
                   <a href="https://talaref.co" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 pb-4 border-b border-black/5 last:border-0 group/studio">
                     <ArrowRight size={14} className="text-[#1A1A1A]/40 group-hover/studio:translate-x-1 transition-transform" />
                     <span className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]">Visit Talaref Studio</span>
                   </a>
                   {['Live capture & broadcast', 'Branded content & films', 'Distribution & social strategy'].map(item => (
                     <div key={item} className="flex items-center space-x-4 pb-4 border-b border-black/5 last:border-0 opacity-50">
                       <ArrowRight size={14} className="text-[#1A1A1A]/40" />
                       <span className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]">{item}</span>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="bg-white py-24 md:py-48">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
           <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 space-y-8 md:space-y-0">
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1A1A1A]/30">03 — Featured Work</div>
              <h2 className="text-4xl md:text-7xl font-serif text-[#1A1A1A] tracking-tighter">
                Proof of concept. <span className="italic opacity-80 underline underline-offset-8">Built in public.</span>
              </h2>
           </div>

           {/* ONE26 Featured Card */}
           <div className="mb-12">
             <Link to="/events/one26" className="group block relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-black rounded-xs">
                <motion.img 
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  src="https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090&auto=format&fit=crop" 
                  alt="ONE26 - Le tournoi de basketball du peuple" 
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-8 md:p-14">
                   <div className="flex flex-wrap items-center gap-3 mb-4">
                     <span className="text-[9px] uppercase tracking-widest font-bold bg-[#CFB53B] text-black px-3 py-1">Édition Phare</span>
                     <span className="text-[9px] uppercase tracking-widest font-bold text-white/70">Esplanade Massamba-Débat · 3 Jours</span>
                   </div>
                   <h3 className="text-3xl md:text-6xl font-serif text-white tracking-tighter mb-3">ONE26 — Le tournoi de basketball du peuple</h3>
                   <p className="text-xs md:text-sm text-white/80 font-light max-w-2xl line-clamp-2 mb-4 leading-relaxed">
                     Notre tournoi de basketball était un rassemblement liant amour pour le basket et la jeunesse brazzavilloise, avec des animations musicales, des stands de nourritures et la venue d’artistes locaux.
                   </p>
                   <div className="flex items-center space-x-2 text-[10px] uppercase font-bold tracking-widest text-[#CFB53B] group-hover:translate-x-2 transition-transform">
                     <span>Découvrir la rétrospective</span>
                     <ArrowRight size={14} />
                   </div>
                </div>
             </Link>
           </div>

           {/* Basket Na Bisso Dedicated Showcase */}
           <div className="mb-24 p-8 md:p-12 bg-[#1A1A1A] text-white rounded-xs border border-black/10 flex flex-col md:flex-row items-center justify-between gap-8">
             <div className="max-w-xl">
               <span className="text-[9px] uppercase tracking-widest font-bold text-[#CFB53B] block mb-2">Section Dédiée · Événement Autonome</span>
               <h4 className="text-2xl md:text-4xl font-serif tracking-tight mb-3">Basket Na Bisso</h4>
               <p className="text-xs md:text-sm text-white/70 font-light leading-relaxed">
                 Un événement indépendant dédié à la ferveur du basketball de rue et à la culture congolaise, réunissant les quartiers et les talents de demain.
               </p>
             </div>
             <Link 
               to="/events/basket-na-bisso"
               className="shrink-0 px-6 py-3.5 bg-[#CFB53B] text-black hover:bg-white transition-colors text-[10px] uppercase font-bold tracking-widest flex items-center space-x-2"
             >
               <span>Explorer Basket Na Bisso</span>
               <ArrowRight size={14} />
             </Link>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-black/10 pt-16">
              {[
                { label: "60%", desc: "of Congo's population is under 25" },
                { label: "10K+", desc: "live attendance per event" },
                { label: "Ex-NBA", desc: "international participation secured" }
              ].map(stat => (
                <div key={stat.label} className="flex flex-col">
                   <span className="text-6xl font-serif text-[#CFB53B] mb-4 tracking-tighter">{stat.label}</span>
                   <p className="text-xs uppercase tracking-widest font-medium text-[#1A1A1A]/40">{stat.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Synergy Section */}
      <section className="bg-[#EEECE6] py-24 md:py-48 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
              <div>
                 <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1A1A1A]/30 mb-8">04 — Synergy</div>
                 <h2 className="text-5xl md:text-7xl font-serif text-[#1A1A1A] tracking-tighter leading-[0.9]">
                   A continuous<br />
                   <span className="italic opacity-80">value cycle.</span>
                 </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 border-l border-black/5 ml-auto">
                 {[
                   { title: "Events", desc: "Generate audience and visibility at scale." },
                   { title: "Talents", desc: "Embody the movement and become its ambassadors." },
                   { title: "Content", desc: "Captures, amplifies and distributes the energy." },
                   { title: "Partners", desc: "Strengthen the events — closing the loop." }
                 ].map(item => (
                   <div key={item.title} className="p-8 bg-[#F8F7F3]/50 backdrop-blur-sm">
                      <span className="text-[8px] uppercase tracking-widest font-bold text-[#1A1A1A]/40 mb-4 block">{item.title}</span>
                      <p className="text-xs text-[#1A1A1A] font-light leading-relaxed">{item.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* Build with Cosmos */}
      <section className="py-24 md:py-48 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between space-y-16 md:space-y-0">
           <div className="max-w-md">
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1A1A1A]/30 mb-8">05 — Contact</div>
              <h2 className="text-6xl md:text-8xl font-serif text-[#1A1A1A] tracking-tighter leading-[0.8] mb-12">
                Build with<br />
                <span className="italic opacity-80">Cosmos.</span>
              </h2>
              <p className="text-sm text-[#1A1A1A]/60 leading-relaxed font-light">
                Brands, institutions and partners — let's design the next chapter together.
              </p>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 md:gap-x-24 md:gap-y-16 pt-12">
              {[
                { label: "Partnerships", email: "partners@cosmos.africa" },
                { label: "Talents", email: "talents@cosmos.africa" },
                { label: "Press", email: "press@cosmos.africa" },
                { label: "Office", email: "Brazzaville · Republic of Congo" }
              ].map(contact => (
                <div key={contact.label}>
                   <span className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/40 mb-4 block">{contact.label}</span>
                   {contact.email.includes('@') ? (
                     <p className="text-sm font-medium border-b border-black/10 inline-block pb-1 cursor-pointer hover:italic transition-all">{contact.email}</p>
                   ) : (
                     <p className="text-sm font-medium">{contact.email}</p>
                   )}
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}
