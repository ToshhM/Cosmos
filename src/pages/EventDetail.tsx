import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Calendar, Users, Award, Music, Utensils, Trophy, Heart, ArrowRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

export default function EventDetail() {
  const { id } = useParams<{ id: string }>();

  // Differentiate between ONE26, Basket Na Bisso, and other events
  const isOne26 = !id || id === 'one26';
  const isBasketNaBisso = id === 'basket-na-bisso';
  const isUrbanSummit = id === 'urban-summit';
  const isCosmosLive = id === 'cosmos-live';

  if (isBasketNaBisso) {
    return (
      <div className="bg-[#F8F7F3] min-h-screen text-[#1A1A1A]">
        {/* Hero */}
        <section className="relative h-[80vh] bg-black overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1519766304817-4f37bda74a29?q=80&w=1974&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-65 mix-blend-luminosity" 
            alt="Basket Na Bisso" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          
          <div className="absolute bottom-12 md:bottom-24 left-6 md:left-12 max-w-7xl mx-auto w-full px-6 flex flex-col md:flex-row md:items-end justify-between">
             <div>
                <Link to="/events" className="flex items-center space-x-2 text-white/70 text-[10px] uppercase font-bold tracking-widest mb-10 hover:text-[#CFB53B] transition-colors">
                  <ArrowLeft size={14} />
                  <span>Tous les Événements</span>
                </Link>
                <div className="inline-block px-3 py-1 bg-[#CFB53B] text-black text-[9px] uppercase font-bold tracking-widest mb-4">
                  Événement Dédié · Sport & Culture
                </div>
                <h1 className="text-6xl md:text-9xl font-serif text-white tracking-tighter leading-[0.85]">
                   Basket<br />
                   <span className="italic opacity-90 decoration-1">Na Bisso.</span>
                </h1>
             </div>
          </div>
        </section>

        {/* Info Bar */}
        <div className="bg-white border-y border-black/5 px-6 md:px-12 py-10 shadow-xs">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
             {[
               { icon: <MapPin size={18} className="text-[#CFB53B]" />, label: "Ville", value: "Brazzaville, Congo" },
               { icon: <Trophy size={18} className="text-[#CFB53B]" />, label: "Discipline", value: "Basketball & Street Culture" },
               { icon: <Users size={18} className="text-[#CFB53B]" />, label: "Communauté", value: "Jeunesse & Quartiers" },
               { icon: <Calendar size={18} className="text-[#CFB53B]" />, label: "Statut", value: "Prochaine Édition en Préparation" }
             ].map(item => (
               <div key={item.label} className="flex flex-col space-y-2">
                 <span>{item.icon}</span>
                 <div>
                    <span className="text-[9px] uppercase tracking-widest font-bold text-[#1A1A1A]/40 block mb-0.5">{item.label}</span>
                    <span className="text-sm font-semibold">{item.value}</span>
                 </div>
               </div>
             ))}
          </div>
        </div>

        {/* Content */}
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#CFB53B] mb-4 block">Concept & Vision</span>
              <h2 className="text-3xl md:text-5xl font-serif tracking-tight mb-8">
                Célébrer le basketball congolais dans toute son authenticité.
              </h2>
              
              <div className="space-y-6 text-base text-[#1A1A1A]/75 font-light leading-relaxed mb-10">
                <p>
                  <strong>Basket Na Bisso</strong> (« Notre Basketball » en lingala) est un événement autonome pensé pour donner aux terrains et aux playgrounds de Brazzaville la dimension qu'ils méritent.
                </p>
                <p>
                  Au-delà de la compétition sportive, Basket Na Bisso est un manifeste pour la jeunesse : un espace où l'énergie brute des quartiers, la créativité musicale, le streetwear et la passion du ballon orange convergent.
                </p>
                <div className="p-8 bg-black text-white rounded-xs">
                  <p className="text-base font-serif italic mb-3 text-white/90">
                    « Créer un rendez-vous populaire pérenne où chaque jeune basketteur congolais peut exprimer son talent et où les fans vibrent ensemble. »
                  </p>
                  <span className="text-[10px] uppercase tracking-widest text-[#CFB53B] font-bold">
                    Cosmos Events · Vision Basket Na Bisso
                  </span>
                </div>
              </div>

              {/* Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-black/10">
                <div className="p-6 bg-white border border-black/5">
                  <h4 className="font-serif text-lg font-bold mb-2">Streetball & Matchs 5v5</h4>
                  <p className="text-xs text-[#1A1A1A]/60 leading-relaxed">Tournois ouverts et confrontations inter-quartiers pour révéler les pépites locales.</p>
                </div>
                <div className="p-6 bg-white border border-black/5">
                  <h4 className="font-serif text-lg font-bold mb-2">Culture & Expression</h4>
                  <p className="text-xs text-[#1A1A1A]/60 leading-relaxed">Fusion entre hip-hop congolais, street dance, mode locale et ferveur des supporters.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
               <div className="aspect-[4/5] bg-gray-200 overflow-hidden rounded-xs border border-black/10">
                 <img 
                   src="https://images.unsplash.com/photo-1544919982-b61976f0ba43?q=80&w=1974&auto=format&fit=crop" 
                   className="w-full h-full object-cover" 
                   alt="Street Basketball Passion" 
                 />
               </div>

               {/* Cross link to ONE26 */}
               <div className="p-8 bg-white border border-black/10 rounded-xs">
                 <span className="text-[9px] uppercase tracking-widest font-bold text-[#1A1A1A]/40 block mb-2">Événement Phare</span>
                 <h3 className="font-serif text-2xl font-bold mb-3">ONE26 — Le tournoi du peuple</h3>
                 <p className="text-xs text-[#1A1A1A]/60 mb-6 leading-relaxed">
                   Découvrez la rétrospective des 3 jours d'événement à l'esplanade Massamba-Débat.
                 </p>
                 <Link 
                   to="/events/one26" 
                   className="inline-flex items-center space-x-2 text-[10px] uppercase font-bold tracking-widest text-[#1A1A1A] hover:text-[#CFB53B] transition-colors"
                 >
                   <span>Voir ONE26</span>
                   <ArrowRight size={14} />
                 </Link>
               </div>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-20 bg-white border-t border-black/5 px-6 md:px-12 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-serif mb-4">Envie de participer ou de soutenir la prochaine édition ?</h3>
            <p className="text-sm text-[#1A1A1A]/60 font-light mb-8">
              Cosmos collabore avec des partenaires, des marques et des institutions pour faire grandir la scène sportive congolaise.
            </p>
            <Link 
              to="/contact" 
              className="inline-block px-8 py-4 bg-[#1A1A1A] text-white hover:bg-[#CFB53B] hover:text-black transition-all text-[10px] uppercase font-bold tracking-widest"
            >
              Contactez l'équipe Cosmos
            </Link>
          </div>
        </section>
      </div>
    );
  }

  // DEFAULT / ONE26 (Tournament of the people)
  return (
    <div className="bg-[#F8F7F3] min-h-screen text-[#1A1A1A]">
      {/* Hero */}
      <section className="relative h-[85vh] bg-black overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090&auto=format&fit=crop" 
          className="w-full h-full object-cover opacity-70 mix-blend-luminosity" 
          alt="ONE26 - Le tournoi de basketball du peuple" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        
        <div className="absolute bottom-12 md:bottom-24 left-6 md:left-12 max-w-7xl mx-auto w-full px-6 flex flex-col md:flex-row md:items-end justify-between">
           <div>
              <Link to="/events" className="flex items-center space-x-2 text-white/70 text-[10px] uppercase font-bold tracking-widest mb-10 hover:text-[#CFB53B] transition-colors">
                <ArrowLeft size={14} />
                <span>Tous les Événements</span>
              </Link>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-[#CFB53B] text-black text-[9px] uppercase font-bold tracking-widest">
                  Tournoi du Peuple
                </span>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[9px] uppercase font-bold tracking-widest">
                  Esplanade Massamba-Débat
                </span>
              </div>
              <h1 className="text-6xl md:text-9xl font-serif text-white tracking-tighter leading-[0.85]">
                 ONE26<br />
                 <span className="italic opacity-90 decoration-1">Le Tournoi du Peuple.</span>
              </h1>
           </div>

           <div className="mt-8 md:mt-0 text-white/80 font-mono text-xs">
             <span className="block text-[#CFB53B] uppercase tracking-widest font-bold mb-1">Parrain Officiel</span>
             <span className="text-base font-serif text-white">Rodrigue Nguesso</span>
           </div>
        </div>
      </section>

      {/* Info Bar */}
      <div className="bg-white border-y border-black/5 px-6 md:px-12 py-10 shadow-xs">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
           {[
             { icon: <Calendar size={18} className="text-[#CFB53B]" />, label: "Format & Durée", value: "3 Jours d'événement" },
             { icon: <MapPin size={18} className="text-[#CFB53B]" />, label: "Lieu", value: "Esplanade Stade Massamba-Débat" },
             { icon: <Users size={18} className="text-[#CFB53B]" />, label: "Public", value: "Jeunesse & Aînés brazzavillois" },
             { icon: <Award size={18} className="text-[#CFB53B]" />, label: "Parrainage d'Honneur", value: "Rodrigue Nguesso" }
           ].map(item => (
             <div key={item.label} className="flex flex-col space-y-2">
               <span>{item.icon}</span>
               <div>
                  <span className="text-[9px] uppercase tracking-widest font-bold text-[#1A1A1A]/40 block mb-0.5">{item.label}</span>
                  <span className="text-sm font-semibold">{item.value}</span>
               </div>
             </div>
           ))}
        </div>
      </div>

      {/* Content */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <div className="flex items-center space-x-3 mb-6">
              <span className="w-8 h-px bg-[#CFB53B]"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#CFB53B]">Récit de l'Événement</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-serif text-[#1A1A1A] tracking-tight mb-8">
              ONE26 — le tournoi de basketball du peuple
            </h2>

            {/* Exact user description */}
            <div className="space-y-6 text-base md:text-lg text-[#1A1A1A]/80 font-light leading-relaxed mb-10">
              <p>
                Notre tournoi de basketball était un rassemblement liant amour pour le basket et la jeunesse brazzavilloise. Notre but était de proposer un événement sportif, où les jeunes et les plus vieux pouvaient venir passer du temps à l’esplanade Massamba débat, avec des animations musicales, des stands de nourritures, la venue d’artistes locaux le tournoi de basket.
              </p>
              
              <div className="p-8 bg-[#CFB53B]/10 border-l-4 border-[#CFB53B] my-8 rounded-r-xs">
                 <p className="text-lg italic text-[#1A1A1A] font-serif leading-relaxed mb-4">
                   « Pendant 3 jours nous avons eu la visite des officiels congolais que l’on remercie pour nous avoir aidé dans la réalisation de l’événement et on remercie tout particulièrement le parrain <strong>Rodrigue Nguesso</strong> qui sans lui rien n’aurait pu être possible. »
                 </p>
                 <span className="text-[10px] uppercase tracking-widest font-bold text-[#CFB53B] block">
                   Remerciements officiels & Hommage
                 </span>
              </div>

              <p className="text-lg font-serif italic text-[#1A1A1A] font-normal">
                Nous reviendrons très prochainement avec d’autres événements.
              </p>
            </div>

            {/* 4 Pillars of the Event */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-black/10">
              <div className="p-6 bg-white border border-black/5 rounded-xs">
                <div className="flex items-center space-x-2 text-[#CFB53B] mb-2">
                  <Trophy size={16} />
                  <span className="text-[9px] uppercase font-bold tracking-widest text-[#1A1A1A]">Le Tournoi</span>
                </div>
                <h4 className="font-serif text-base font-bold mb-1">Basket du Peuple</h4>
                <p className="text-xs text-[#1A1A1A]/60 leading-relaxed">
                  Des matchs intenses qui ont fait vibrer le public sous les encouragements passionnés des supporters.
                </p>
              </div>

              <div className="p-6 bg-white border border-black/5 rounded-xs">
                <div className="flex items-center space-x-2 text-[#CFB53B] mb-2">
                  <Music size={16} />
                  <span className="text-[9px] uppercase font-bold tracking-widest text-[#1A1A1A]">Musique & Scène</span>
                </div>
                <h4 className="font-serif text-base font-bold mb-1">Artistes Locaux</h4>
                <p className="text-xs text-[#1A1A1A]/60 leading-relaxed">
                  Animations musicales continues et prestation d'artistes locaux célébrant la culture urbaine.
                </p>
              </div>

              <div className="p-6 bg-white border border-black/5 rounded-xs">
                <div className="flex items-center space-x-2 text-[#CFB53B] mb-2">
                  <Utensils size={16} />
                  <span className="text-[9px] uppercase font-bold tracking-widest text-[#1A1A1A]">Street Food</span>
                </div>
                <h4 className="font-serif text-base font-bold mb-1">Stands de Nourriture</h4>
                <p className="text-xs text-[#1A1A1A]/60 leading-relaxed">
                  Espaces de restauration conviviaux permettant aux familles, aux jeunes et aux anciens de partager un repas.
                </p>
              </div>

              <div className="p-6 bg-white border border-black/5 rounded-xs">
                <div className="flex items-center space-x-2 text-[#CFB53B] mb-2">
                  <Users size={16} />
                  <span className="text-[9px] uppercase font-bold tracking-widest text-[#1A1A1A]">Intergénérationnel</span>
                </div>
                <h4 className="font-serif text-base font-bold mb-1">Esplanade Massamba-Débat</h4>
                <p className="text-xs text-[#1A1A1A]/60 leading-relaxed">
                  Le cœur battant de Brazzaville rassemblant toutes les générations dans un même élan de joie.
                </p>
              </div>
            </div>
          </div>

          {/* Visual Column */}
          <div className="lg:col-span-5 space-y-8">
             <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[3/4] bg-gray-200 overflow-hidden rounded-xs border border-black/10">
                  <img 
                    src="https://images.unsplash.com/photo-1544919982-b61976f0ba43?q=80&w=1974&auto=format&fit=crop" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                    alt="Tournoi One26" 
                  />
                </div>
                <div className="aspect-[3/4] bg-gray-200 overflow-hidden rounded-xs border border-black/10 mt-8">
                  <img 
                    src="https://images.unsplash.com/photo-1518063319789-7217e6706b04?q=80&w=1974&auto=format&fit=crop" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                    alt="Foule et Ambiance Massamba-Débat" 
                  />
                </div>
             </div>

             {/* Highlight Box for Parrain Rodrigue Nguesso */}
             <div className="p-8 bg-white border border-black/10 rounded-xs shadow-xs">
                <div className="flex items-center space-x-2 text-[#CFB53B] mb-3">
                  <Heart size={16} />
                  <span className="text-[9px] uppercase font-bold tracking-widest text-[#1A1A1A]">Reconnaissance & Parrainage</span>
                </div>
                <h3 className="font-serif text-xl font-bold mb-2">Rodrigue Nguesso</h3>
                <p className="text-xs text-[#1A1A1A]/70 leading-relaxed font-light mb-4">
                  Un hommage appuyé au parrain officiel qui a cru en cette vision et rendu possible cette grande célébration pour la jeunesse brazzavilloise.
                </p>
                <div className="text-[10px] text-[#1A1A1A]/40 uppercase font-mono tracking-wider pt-3 border-t border-black/5">
                  Partenaire & Soutien Fondateur
                </div>
             </div>

             {/* Discover Basket Na Bisso Box */}
             <div className="p-8 bg-[#1A1A1A] text-white rounded-xs">
                <span className="text-[9px] uppercase tracking-widest font-bold text-[#CFB53B] block mb-2">Autre Événement Cosmos</span>
                <h3 className="font-serif text-2xl font-bold mb-2">Basket Na Bisso</h3>
                <p className="text-xs text-white/60 mb-6 leading-relaxed">
                  Découvrez également l'événement dédié à la street culture et aux talents émergents du basketball congolais.
                </p>
                <Link 
                  to="/events/basket-na-bisso" 
                  className="inline-flex items-center space-x-2 text-[10px] uppercase font-bold tracking-widest text-[#CFB53B] hover:text-white transition-colors"
                >
                  <span>Explorer Basket Na Bisso</span>
                  <ArrowRight size={14} />
                </Link>
             </div>
          </div>
        </div>
      </section>
      
      {/* Officiels & Partenaires */}
      <section className="pb-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-black/10 pt-16">
         <h3 className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#1A1A1A]/40 mb-10 text-center">
           Avec le soutien des Officiels Congolais & Partenaires
         </h3>
         <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50 grayscale hover:opacity-80 transition-opacity items-center">
            {['Ministère de la Jeunesse & des Sports', 'Ville de Brazzaville', 'Massamba-Débat', 'Partenaires Locaux', 'Cosmos Ecosystem'].map(brand => (
              <span key={brand} className="text-sm md:text-lg font-serif font-bold tracking-tight">{brand}</span>
            ))}
         </div>
      </section>
    </div>
  );
}
