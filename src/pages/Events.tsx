import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Calendar, Award, Music, Utensils, Users } from 'lucide-react';

export default function Events() {
  const otherEvents = [
    {
      id: 'urban-summit',
      title: 'Urban Culture Summit',
      date: 'Octobre 2026',
      location: 'Pointe-Noire, Congo',
      image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop',
      category: 'Culture & Mode',
      desc: 'Conférences, showcases et ateliers réunissant les acteurs de la créativité et de l\'industrie culturelle en Afrique centrale.'
    },
    {
      id: 'cosmos-live',
      title: 'Cosmos Live: Afro-Beats',
      date: 'Décembre 2026',
      location: 'Brazzaville, Congo',
      image: '/images/cosmos-live-afrobeats-placeholder.svg',
      category: 'Musique & Festival',
      desc: 'Célébration live de la musique contemporaine africaine avec des têtes d\'affiche locales et internationales.'
    }
  ];

  return (
    <div className="pt-36 pb-32 bg-[#F8F7F3] text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <header className="mb-20">
          <div className="flex items-center space-x-3 mb-6">
            <span className="w-8 h-px bg-[#CFB53B]"></span>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1A1A1A]/40">Cosmos Events · Calendrier & Rétrospectives</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-serif text-[#1A1A1A] tracking-tighter leading-[0.85]">
             Nos<br />
             <span className="italic opacity-80">Événements.</span>
          </h1>
          <p className="mt-8 text-base md:text-lg text-[#1A1A1A]/60 max-w-2xl font-light leading-relaxed">
            Des scènes populaires à fort impact au Congo, créées pour donner une voix, une arène et un espace de fête à la jeunesse et aux familles.
          </p>
        </header>

        {/* Section 1: ONE26 - LE TOURNOI DE BASKETBALL DU PEUPLE */}
        <section className="mb-32">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-black/10">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#CFB53B]">01 — Édition Phare</span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#1A1A1A]/40">Esplanade Massamba-Débat</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white border border-black/10 overflow-hidden shadow-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Left Column: Visual & Badge */}
              <div className="lg:col-span-5 relative aspect-[4/3] lg:aspect-auto min-h-[360px] bg-black overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090&auto=format&fit=crop" 
                  alt="ONE26 - Le tournoi de basketball du peuple"
                  className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                
                <div className="absolute top-6 left-6 flex flex-col gap-2">
                  <span className="bg-[#CFB53B] text-black text-[9px] uppercase font-bold tracking-widest px-3 py-1 self-start">
                    Tournoi du Peuple
                  </span>
                  <span className="bg-black/80 backdrop-blur-md text-white text-[9px] uppercase font-bold tracking-widest px-3 py-1 self-start">
                    3 Jours d'effervescence
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#CFB53B] mb-1">Brazzaville, Congo</p>
                  <p className="font-serif text-2xl font-medium leading-snug">Esplanade Stade Massamba-Débat</p>
                </div>
              </div>

              {/* Right Column: Detailed Story & Honors */}
              <div className="lg:col-span-7 p-8 md:p-14 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/40 mb-4">
                    <span className="flex items-center gap-1.5"><Calendar size={13} className="text-[#CFB53B]" /> 3 Jours Intenses</span>
                    <span>·</span>
                    <span className="flex items-center gap-1.5"><MapPin size={13} className="text-[#CFB53B]" /> Esplanade Massamba-Débat</span>
                    <span>·</span>
                    <span className="flex items-center gap-1.5"><Users size={13} className="text-[#CFB53B]" /> Tout Public</span>
                  </div>

                  <h2 className="text-3xl md:text-5xl font-serif text-[#1A1A1A] tracking-tight mb-6">
                    ONE26 — <span className="italic">le tournoi de basketball du peuple</span>
                  </h2>

                  {/* Exact description provided by user */}
                  <div className="space-y-4 text-sm md:text-base text-[#1A1A1A]/75 font-light leading-relaxed mb-8">
                    <p>
                      Notre tournoi de basketball était un rassemblement liant amour pour le basket et la jeunesse brazzavilloise. Notre but était de proposer un événement sportif, où les jeunes et les plus vieux pouvaient venir passer du temps à l’esplanade Massamba-Débat, avec des animations musicales, des stands de nourritures, la venue d’artistes locaux et le tournoi de basket.
                    </p>
                    <p className="p-4 bg-[#CFB53B]/10 border-l-2 border-[#CFB53B] text-[#1A1A1A] font-normal italic">
                      « Pendant 3 jours nous avons eu la visite des officiels congolais que l’on remercie pour nous avoir aidé dans la réalisation de l’événement et on remercie tout particulièrement le parrain <strong>Rodrigue Nguesso</strong> qui sans lui rien n’aurait pu être possible. »
                    </p>
                    <p className="font-medium text-[#1A1A1A] text-xs uppercase tracking-wider">
                      Nous reviendrons très prochainement avec d’autres événements.
                    </p>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-black/10 mb-8">
                    <div className="flex flex-col">
                      <span className="text-[9px] uppercase tracking-wider text-[#1A1A1A]/40 font-bold mb-1">Lieu</span>
                      <span className="text-xs font-semibold">Massamba-Débat</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] uppercase tracking-wider text-[#1A1A1A]/40 font-bold mb-1">Durée</span>
                      <span className="text-xs font-semibold">3 Jours de fête</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] uppercase tracking-wider text-[#1A1A1A]/40 font-bold mb-1">Parrain</span>
                      <span className="text-xs font-semibold text-[#CFB53B]">Rodrigue Nguesso</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] uppercase tracking-wider text-[#1A1A1A]/40 font-bold mb-1">Ambiance</span>
                      <span className="text-xs font-semibold">Basket, Food & Son</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-6 pt-4">
                  <Link 
                    to="/events/one26" 
                    className="inline-flex items-center space-x-3 px-6 py-3.5 bg-[#1A1A1A] text-white hover:bg-[#CFB53B] hover:text-black transition-all text-[10px] uppercase font-bold tracking-widest rounded-xs"
                  >
                    <span>Voir la rétrospective complète</span>
                    <ArrowRight size={14} />
                  </Link>
                  <span className="text-[11px] text-[#1A1A1A]/50 font-mono">
                    Statut : Édition clôturée avec succès
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Section 2: DEDICATED SECTION FOR BASKET NA BISSO */}
        <section className="mb-32">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-black/10">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#CFB53B]">02 — Section Dédiée</span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#1A1A1A]/40">Événement Indépendant</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-[#1A1A1A] text-white rounded-xs overflow-hidden p-8 md:p-16"
          >
            {/* Background Texture / Subtle court lines */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
              <svg viewBox="0 0 400 400" className="w-full h-full stroke-white fill-none stroke-1">
                <circle cx="200" cy="200" r="140" />
                <rect x="50" y="50" width="300" height="300" />
                <line x1="200" y1="50" x2="200" y2="350" />
              </svg>
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#CFB53B]/20 text-[#CFB53B] border border-[#CFB53B]/30 text-[9px] uppercase font-bold tracking-widest mb-6">
                  <Award size={12} />
                  <span>African Streetball Championship · Basket Na Bisso</span>
                </div>

                <h2 className="text-4xl md:text-7xl font-serif tracking-tighter mb-6 leading-tight">
                  Basket Na Bisso<br />
                  <span className="italic text-white/80 font-normal">Notre Basketball. Notre Culture.</span>
                </h2>

                <p className="text-base md:text-lg text-white/70 font-light leading-relaxed mb-6 max-w-2xl">
                  <strong>Basket Na Bisso</strong> est un événement à part entière dédié à la culture du basketball congolais. 
                  Conçu pour faire vibrer les passionnés, révéler les talents émergents des quartiers et réunir la communauté dans une atmosphère festive et inclusive.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10 mb-8">
                  <div className="space-y-1">
                    <span className="text-[9px] uppercase tracking-widest text-[#CFB53B] font-bold block">Streetball & Matchs</span>
                    <p className="text-xs text-white/60">Compétition libre et tournois inter-quartiers</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[9px] uppercase tracking-widest text-[#CFB53B] font-bold block">Communauté & Ferveur</span>
                    <p className="text-xs text-white/60">Rassemblement intergénérationnel et passion du jeu</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[9px] uppercase tracking-widest text-[#CFB53B] font-bold block">Culture Urbaine</span>
                    <p className="text-xs text-white/60">Musique, mode street et expression congolaise</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-6">
                  <Link 
                    to="/events/basket-na-bisso" 
                    className="inline-flex items-center space-x-3 px-6 py-3.5 bg-[#CFB53B] text-black hover:bg-white transition-all text-[10px] uppercase font-bold tracking-widest rounded-xs"
                  >
                    <span>Explorer Basket Na Bisso</span>
                    <ArrowRight size={14} />
                  </Link>
                  <span className="text-xs text-white/40 tracking-wider">
                    Brazzaville, Congo · Prochaine édition en préparation
                  </span>
                </div>
              </div>

              {/* Visual for Basket Na Bisso */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/5] overflow-hidden rounded-xs border border-white/10 group">
                  <img 
                    src="/images/basket-na-bisso.jpg"
                    alt="Basket Na Bisso - Culture Basketball"
                    className="w-full h-full object-cover object-[center_62%] group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-[9px] uppercase tracking-widest font-bold text-[#CFB53B] block mb-1">
                      Identity & Movement
                    </span>
                    <p className="font-serif text-xl italic text-white">
                      « Faire briller le basketball congolais sur le terrain et dans les cœurs. »
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Section 3: Autres Événements au Programme */}
        <section>
          <div className="flex items-center justify-between mb-12 pb-4 border-b border-black/10">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#1A1A1A]/40">03 — Prochainement au Programme</span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#1A1A1A]/40">Saison 2026</span>
          </div>

          <div className="space-y-24">
            {otherEvents.map((event, i) => (
              <motion.div 
                key={event.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center group cursor-pointer"
              >
                <Link to={`/events/${event.id}`} className="relative aspect-[16/9] overflow-hidden bg-gray-200 order-2 md:order-1 border border-black/5">
                   <motion.img 
                     whileHover={{ scale: 1.05 }}
                     transition={{ duration: 1 }}
                     src={event.image} 
                     className="w-full h-full object-cover" 
                     alt={event.title} 
                   />
                   <div className="absolute top-6 left-6 px-3 py-1 bg-white text-[9px] uppercase font-bold tracking-widest">{event.category}</div>
                </Link>
                
                <div className="order-1 md:order-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/40 mb-3 block">{event.date} · {event.location}</span>
                  <h3 className="text-3xl md:text-5xl font-serif mb-4 group-hover:italic transition-all">{event.title}</h3>
                  <p className="text-sm text-[#1A1A1A]/60 font-light leading-relaxed mb-6 max-w-md">{event.desc}</p>
                  <Link to={`/events/${event.id}`} className="inline-flex items-center space-x-3 text-[10px] uppercase font-bold tracking-widest pb-2 border-b border-black/10 group-hover:border-black transition-colors">
                     <span>Voir les Détails</span>
                     <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
