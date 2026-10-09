import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

export type Language = 'en' | 'fr';

const translations: Record<string, string> = {
  'About': 'À propos',
  'Events': 'Événements',
  'Talents': 'Talents',
  'Contact': 'Contact',
  'Partner with us': 'Devenir partenaire',
  'A Universe of possibility.': 'Un univers de possibilités.',
  'Cosmos is an integrated entertainment platform — connecting events, talent and content across Africa and beyond.':
    'Cosmos est une plateforme de divertissement intégrée qui relie événements, talents et contenus en Afrique et au-delà.',
  'Divisions': 'Nos divisions',
  'Company': 'Entreprise',
  'Featured Work': 'Projets phares',
  'Press': 'Presse',
  'All rights reserved.': 'Tous droits réservés.',
  'A Universe': 'Un univers',
  'of experiences.': "d'expériences.",
  'of possibility.': 'de possibilités.',
  'Cosmos Group': 'Groupe Cosmos',
  'An integrated platform connecting events, talent and content — designed for the youth shaping Africa\'s cultural future.':
    "Une plateforme intégrée qui relie événements, talents et contenus, portée par la jeunesse qui façonne l'avenir culturel de l'Afrique.",
  'Explore Events': 'Découvrir les événements',
  'Meet Talents': 'Rencontrer les talents',
  'Scroll to discover cosmos': 'Défilez pour découvrir Cosmos',
  'GENERATION CREATIVE': 'GÉNÉRATION CRÉATIVE',
  'We build the ': 'Nous construisons les ',
  'infrastructure': 'infrastructures',
  ' for culture — where talent, audience and partners meet.':
    ' de la culture — là où talents, public et partenaires se rencontrent.',
  "More than 60% of the Congolese population is under 25. Dynamic, creative, deeply engaged in sport, music and urban culture — yet largely under-served by structured intermediaries.":
    'Plus de 60 % de la population congolaise a moins de 25 ans. Dynamique, créative et passionnée de sport, de musique et de culture urbaine, elle manque encore de structures pour l’accompagner.',
  'Cosmos exists to close that gap: a single platform giving young talent a stage, brands a credible audience, and a region a cultural engine that can scale far beyond its borders.':
    'Cosmos comble ce manque : une plateforme qui offre une scène aux jeunes talents, un public engagé aux marques et un moteur culturel à toute la région.',
  'Population under 25': 'Population de moins de 25 ans',
  '3 Pillars': '3 piliers',
  'Change the Cosmos Events photo': 'Changer la photo de Cosmos Events',
  'Change the Cosmos Talents photo': 'Changer la photo de Cosmos Talents',
  'Cosmos Events - Événement et Rassemblement Jeunesse': 'Cosmos Events - Événement et rassemblement de la jeunesse',
  'Cosmos Talents - Le Garçon Freestyleur': 'Cosmos Talents - Jeune freestyler',
  'Plus de 60 % de la population congolaise a moins de 25 ans. Dynamique, créative et passionnée de sport, de musique et de culture urbaine, elle manque encore de structures pour l’accompagner.':
    'More than 60% of the Congolese population is under 25. Dynamic, creative, deeply engaged in sport, music and urban culture — yet largely under-served by structured intermediaries.',
  'Cosmos comble ce manque : une plateforme qui offre une scène aux jeunes talents, un public engagé aux marques et un moteur culturel à toute la région.':
    'Cosmos exists to close that gap: a single platform giving young talent a stage, brands a credible audience, and a region a cultural engine that can scale far beyond its borders.',
  'Population de moins de 25 ans': 'Population under 25',
  '3 piliers': '3 Pillars',
  'Changer la photo': 'Change photo',
  'Cosmos Events - Événement et rassemblement de la jeunesse': 'Cosmos Events - Youth event and gathering',
  'Cosmos Talents - Jeune freestyler': 'Cosmos Talents - Young freestyle footballer',
  'GENERATION CRÉATIVE': 'GÉNÉRATION CRÉATIVE',
  'Est. Brazzaville': 'Brazzaville',
  'Découvrir les événements': 'Explorer les événements',
  'Jeunesse · +60 % ont moins de 25 ans': 'Jeunesse · +60 % ont moins de 25 ans',
  'Vous souhaitez participer ou soutenir la prochaine édition ?':
    'Envie de participer ou de soutenir la prochaine édition ?',
  'No more than representation': 'Bien plus que de la représentation',
  'Nos valeurs': 'Our Values',
  'Authenticité': 'Authenticity',
  'Exigence': 'Precision',
  'Héritage': 'Legacy',
  'Nous contacter': 'Inquiries',
  'Construisons': 'Let’s build',
  'ensemble.': 'together.',
  'Général & partenariats': 'General & Partnerships',
  'Détection de talents': 'Talent Scouting',
  'Écrivez-nous': 'Send us a message',
  'Votre nom': 'Your Name',
  'Adresse e-mail': 'Email Address',
  'Votre demande concerne': 'Interested in',
  'Partenariat événementiel': 'Event Partnership',
  'Production studio': 'Studio Production',
  'Autre': 'Other',
  'Envoyer le message': 'Send Inquiry',
  'À propos': 'About',
  'Construire avec': 'Build with',
  'La preuve par les actes.': 'Proof of concept.',
  'Construite avec le public.': 'Built in public.',
  '01 — À propos': '01 — About',
  '02 — Nos divisions': '02 — Divisions',
  '03 — Nos projets': '03 — Featured Work',
  '04 — Notre synergie': '04 — Synergy',
  'Relier': 'Connecting',
  'les cultures.': 'Culture.',
  'Basé à Brazzaville, notre groupe de divertissement façonne l’avenir de la culture urbaine africaine.':
    'We are a Brazzaville-based entertainment group building the future of African urban culture.',
  'Cosmos Group est né d’un constat simple : la jeunesse est la plus grande richesse de l’Afrique, mais les structures qui pourraient soutenir ses ambitions artistiques et sportives restent insuffisantes.':
    'Cosmos Group was founded on a simple insight: Africa’s youth are its greatest asset, yet the infrastructure to support their creative and athletic ambitions remains underdeveloped.',
  'Nous comblons ce manque grâce à trois piliers complémentaires : des événements de premier plan, la gestion professionnelle de talents et la production de contenus haut de gamme.':
    'We bridge this gap through three integrated pillars: world-class events, professional talent management, and high-end content production.',
  'Brazzaville · Jeunesse & culture': 'Brazzaville · Youth & Culture',
  'Créativité, audace & avenir': 'Creativity, Boldness & Future',
  '« Offrir à la jeunesse africaine la scène et l’écosystème qu’elle mérite. »':
    '“Giving African youth the stage and ecosystem they deserve.”',
  'L’intégrité avant l’influence.': 'Integrity over influence.',
  'Culture & mode': 'Culture & Fashion',
  'Musique & festival': 'Music & Festival',
  'Nos événements': 'Our Events',
  'événements.': 'events.',
  'Cosmos Events · Calendrier & rétrospectives': 'Cosmos Events · Calendar & Retrospectives',
  'Au Congo, nous créons des événements populaires qui donnent à la jeunesse et aux familles une scène, une voix et un espace de fête.':
    'Across Congo, we create high-impact community events that give young people and families a stage, a voice and a place to celebrate.',
  '01 — Événement phare': '01 — Featured Event',
  '3 jours intenses': '3 Action-Packed Days',
  'Tous publics': 'All Ages',
  'le tournoi de basketball populaire': 'the people’s basketball tournament',
  '« Pendant trois jours, nous avons eu la visite des officiels congolais, que nous remercions pour leur aide dans la réalisation de l’événement. Nous remercions tout particulièrement notre parrain, Rodrigue Nguesso : sans lui, rien n’aurait été possible. »':
    '“For three days, we welcomed Congolese officials and thank them for their help in making this event happen. Special thanks to our patron, Rodrigue Nguesso — without him, none of this could have been possible.”',
  'Merci aux officiels et à notre parrain, Rodrigue Nguesso, pour leur soutien qui a rendu cet événement possible.':
    'Thanks to the officials and our patron, Rodrigue Nguesso, for the support that made this event possible.',
  'Nous reviendrons très bientôt avec de nouveaux événements.': 'We’ll be back very soon with more events.',
  '3 jours de fête': '3 Days of Celebration',
  'Basket, cuisine & musique': 'Basketball, Food & Music',
  'Voir toute la rétrospective': 'View the Full Retrospective',
  'Statut : édition achevée avec succès': 'Status: Successfully Completed',
  '02 — Événement dédié': '02 — Dedicated Event',
  'Événement indépendant': 'Independent Event',
  'Championnat africain de streetball · Basket Na Bisso': 'African Streetball Championship · Basket Na Bisso',
  'Streetball & matchs': 'Streetball & Games',
  'Compétitions libres et tournois entre quartiers': 'Open competitions and inter-neighbourhood tournaments',
  'Communauté & passion': 'Community & Passion',
  'La passion du jeu rassemble toutes les générations': 'Bringing generations together through the love of the game',
  'Culture urbaine': 'Urban Culture',
  'Brazzaville, Congo · prochaine édition en préparation': 'Brazzaville, Congo · Next Edition in Preparation',
  'Identité & mouvement': 'Identity & Movement',
  '03 — Prochainement au programme': '03 — Coming Up',
  'Esplanade du stade Massamba-Débat': 'Massamba-Débat Stadium Esplanade',
  '3 jours d’événement': '3 Days of Events',
  'Jeunesse et aînés de Brazzaville': 'Brazzaville Youth & Elders',
  'Parrain d’honneur': 'Patron',
  'L’histoire de l’événement': 'The Event Story',
  'ONE26 — le tournoi de basketball populaire': 'ONE26 — The People’s Basketball Tournament',
  'Notre tournoi de basketball a réuni passionnés de basket et jeunesse brazzavilloise. Nous voulions offrir à toutes les générations un moment de rencontre à l’esplanade Massamba-Débat, avec des matchs, des animations musicales, des stands de nourriture et des artistes locaux.':
    'Our basketball tournament brought together basketball fans and Brazzaville’s youth. We set out to create an event for all generations at the Massamba-Débat Esplanade, with games, live music, food stands and local artists.',
  '« Pendant trois jours, nous avons eu la visite des officiels congolais, que nous remercions pour leur aide dans la réalisation de l’événement. Nous remercions tout particulièrement notre parrain Rodrigue Nguesso : sans lui, rien n’aurait été possible. »':
    '“For three days, we welcomed Congolese officials and thank them for their help in making this event happen. Special thanks to our patron, Rodrigue Nguesso — without him, none of this could have been possible.”',
  'Remerciements officiels & hommage': 'Official Thanks & Tribute',
  'Le tournoi': 'The Tournament',
  'Le basket populaire': 'Basketball for Everyone',
  'Des matchs intenses ont fait vibrer le public, porté par les encouragements passionnés des supporters.':
    'Intense games had the crowd on its feet, fuelled by passionate supporters.',
  'Musique & scène': 'Music & Stage',
  'Artistes locaux': 'Local Artists',
  'Des animations musicales et des artistes locaux célèbrent la culture urbaine.':
    'Live music and local artists celebrating urban culture.',
  'Stands de restauration': 'Food Stands',
  'Des espaces conviviaux où familles, jeunes et aînés peuvent partager un repas.':
    'Welcoming spaces where families, young people and elders can share a meal.',
  'Le cœur battant de Brazzaville rassemble toutes les générations dans un même élan de joie.':
    'The beating heart of Brazzaville, bringing every generation together in celebration.',
  'Jeunesse & quartiers': 'Youth & Neighbourhoods',
  'Prochaine édition en préparation': 'Next Edition in Preparation',
  'Concept & Vision': 'Concept & Vision',
  ' (« Notre Basketball » en lingala) est un événement autonome pensé pour donner aux terrains et aux playgrounds de Brazzaville la dimension qu’ils méritent.':
    ' (“Our Basketball” in Lingala) is an independent event that gives Brazzaville’s courts and playgrounds the stage they deserve.',
  'Événement phare': 'Featured Event',
  'Découvrez la rétrospective des 3 jours d’événement à l’esplanade Massamba-Débat.':
    'Discover the three-day event at the Massamba-Débat Esplanade.',
  'Follow @bnb_242': 'Suivre @bnb_242',
  'Basket Na Bisso on TikTok': 'Basket Na Bisso sur TikTok',
  'Basketball, Food & Music': 'Basket, cuisine & musique',
  'Street Food': 'Restauration',
  'Photo: Valdhy Mbemba': 'Photo : Valdhy Mbemba',
  'Talent · Partner · Opportunity': 'Talent · Partenaire · Opportunité',
  'Parrain Officiel': 'Official Patron',
  'Le Tournoi du Peuple.': 'The People’s Tournament.',
  'Format & Durée': 'Format & Duration',
  'Public': 'Audience',
  '« Pendant 3 jours nous avons eu la visite des officiels congolais que l’on remercie pour nous avoir aidé dans la réalisation de l’événement et on remercie tout particulièrement le parrain ':
    '“Over three days, we welcomed Congolese officials whose support helped make the event possible. Special thanks to our patron, ',
  ' qui sans lui rien n’aurait pu être possible. »': ' — without him, none of this would have been possible.”',
  "Animations musicales continues et prestation d'artistes locaux célébrant la culture urbaine.":
    'Live music and local artists celebrating urban culture.',
  'Reconnaissance & Parrainage': 'Acknowledgement & Patronage',
  'Un hommage appuyé au parrain officiel qui a cru en cette vision et rendu possible cette grande célébration pour la jeunesse brazzavilloise.':
    'A heartfelt tribute to the official patron who believed in this vision and made this celebration for Brazzaville’s youth possible.',
  'Partenaire & Soutien Fondateur': 'Founding Partner & Supporter',
  'Autre Événement Cosmos': 'Another Cosmos Event',
  "Découvrez également l'événement dédié à la street culture et aux talents émergents du basketball congolais.":
    'Discover our event dedicated to street culture and emerging Congolese basketball talent.',
  'Avec le soutien des Officiels Congolais & Partenaires': 'With the Support of Congolese Officials & Partners',
  'Ministère de la Jeunesse & des Sports': 'Ministry of Youth & Sports',
  'Ville de Brazzaville': 'City of Brazzaville',
  'Partenaires Locaux': 'Local Partners',
  'Cosmos Ecosystem': 'Cosmos Ecosystem',
  'Young Congolese talent performing football freestyle': 'Jeune talent congolais réalisant un freestyle avec un ballon',
  'of Talents.': 'de talents.',
  'Scroll to discover': 'Défiler pour découvrir',
  'Talent Management': 'Gestion de talents',
  'Studio': 'Studio',
  'Content': 'Contenus',
  '01 — About': '01 — À propos',
  'Jeunesse · +60% Under 25': 'Jeunesse · +60 % ont moins de 25 ans',
  'Brazzaville, Congo': 'Brazzaville, Congo',
  '« L’énergie brute et le talent de la jeunesse urbaine congolaise. »':
    '« L’énergie brute et le talent de la jeunesse urbaine congolaise. »',
  '« L\'énergie brute et le talent de la jeunesse urbaine congolaise. »':
    '« L’énergie brute et le talent de la jeunesse urbaine congolaise. »',
  'Photo : Valdhy Mbemba': 'Photo : Valdhy Mbemba',
  '02 — Divisions': '02 — Nos divisions',
  'Three Pillars · One Ecosystem': 'Trois piliers · Un écosystème',
  'Events · Talents · Studio': 'Événements · Talents · Studio',
  'La Place du Peuple': 'La Place du Peuple',
  'A Universe of Experiences': "Un univers d'expériences",
  'High-impact sport, music and cultural events. Home of ONE26 & Basket Na Bisso.':
    'Des événements sportifs, musicaux et culturels à fort impact. À l’origine de ONE26 et Basket Na Bisso.',
  'Enter': 'Découvrir',
  'Jeunesse & Freestyle': 'Jeunesse & freestyle',
  'A Universe of Talents': 'Un univers de talents',
  'Identifying, structuring and amplifying the next generation of African artists, athletes and creators.':
    'Nous repérons, accompagnons et révélons la nouvelle génération d’artistes, de sportifs et de créateurs africains.',
  'Changer photo': 'Changer la photo',
  'Studio · 360°': 'Studio · 360°',
  'Capturing events. Producing video, photo, digital. Building storytelling that travels — and amplifies the entire ecosystem on every platform that matters.':
    'Nous filmons les événements, produisons des contenus photo et vidéo et créons des récits qui voyagent et font rayonner tout notre écosystème.',
  'Visit Talaref Studio': 'Découvrir Talaref Studio',
  'Live capture & broadcast': 'Captation et diffusion en direct',
  'Branded content & films': 'Contenus de marque et films',
  'Distribution & social strategy': 'Diffusion et stratégie sociale',
  '03 — Featured Work': '03 — Nos projets',
  'Proof of concept.': 'La preuve par les actes.',
  'Built in public.': 'Construite avec le public.',
  'Édition Phare': 'Événement phare',
  'Esplanade Massamba-Débat · 3 Jours': 'Esplanade Massamba-Débat · 3 jours',
  'ONE26 — Le tournoi de basketball du peuple': 'ONE26 — Le tournoi de basketball du peuple',
  'Notre tournoi de basketball était un rassemblement liant amour pour le basket et la jeunesse brazzavilloise, avec des animations musicales, des stands de nourritures et la venue d’artistes locaux.':
    'Notre tournoi de basketball a rassemblé la jeunesse brazzavilloise autour de sa passion pour le basket, avec des animations musicales, des stands de nourriture et des artistes locaux.',
  'Découvrir la rétrospective': 'Découvrir la rétrospective',
  'Section Dédiée · Événement Autonome': 'Événement dédié · indépendant',
  'Notre Basketball. Notre Culture.': 'Notre basketball. Notre culture.',
  'Un événement indépendant dédié à la ferveur du basketball de rue et à la culture congolaise, réunissant les quartiers et les talents de demain.':
    'Un événement indépendant dédié au basketball de rue et à la culture congolaise, qui rassemble les quartiers et révèle les talents de demain.',
  'Explorer Basket Na Bisso': 'Découvrir Basket Na Bisso',
  'of Congo\'s population is under 25': 'de la population du Congo a moins de 25 ans',
  'live attendance per event': 'spectateurs en direct par événement',
  'international participation secured': 'participation internationale confirmée',
  '04 — Synergy': '04 — Notre synergie',
  'A continuous': 'Un cercle',
  'value cycle.': 'vertueux.',
  'Generate audience and visibility at scale.': 'Rassemblent le public et créent une forte visibilité.',
  'Embody the movement and become its ambassadors.': 'Portent le mouvement et en deviennent les ambassadeurs.',
  'Captures, amplifies and distributes the energy.': 'Capture, amplifie et diffuse toute cette énergie.',
  'Strengthen the events — closing the loop.': 'Renforcent les événements et bouclent le cycle.',
  '05 — Contact': '05 — Contact',
  'Build with': 'Construire avec',
  'Brands, institutions and partners — let\'s design the next chapter together.':
    'Marques, institutions et partenaires : construisons ensemble le prochain chapitre.',
  'Partnerships': 'Partenariats',
  'Office': 'Bureau',
  'Brazzaville · Republic of Congo': 'Brazzaville · République du Congo',
  'About Cosmos': 'À propos de Cosmos',
  'Connecting': 'Relier',
  'Culture.': 'les cultures.',
  'We are a Brazzaville-based entertainment group building the future of African urban culture.':
    'Basé à Brazzaville, notre groupe de divertissement façonne l’avenir de la culture urbaine africaine.',
  'Cosmos Group was founded on a simple insight: Africa\'s youth are its greatest asset, yet the infrastructure to support their creative and athletic ambitions remains underdeveloped.':
    'Cosmos Group est né d’un constat simple : la jeunesse est la plus grande richesse de l’Afrique, mais les structures qui pourraient soutenir ses ambitions artistiques et sportives restent insuffisantes.',
  'We bridge this gap through three integrated pillars: world-class events, professional talent management, and high-end content production.':
    'Nous comblons ce manque grâce à trois piliers complémentaires : des événements de premier plan, la gestion professionnelle de talents et la production de contenus haut de gamme.',
  'Brazzaville · Jeunesse & Culture': 'Brazzaville · Jeunesse & culture',
  'Créativité, Audace & Avenir': 'Créativité, audace & avenir',
  '« Offrir à la jeunesse africaine la scène et l\'écosystème qu\'elle mérite. »':
    '« Offrir à la jeunesse africaine la scène et l’écosystème qu’elle mérite. »',
  'Our Values': 'Nos valeurs',
  'Integrity over influence.': 'L’intégrité avant l’influence.',
  'Authenticity': 'Authenticité',
  'We remain rooted in Brazzaville\'s streets while looking at the global stage.':
    'Nous restons ancrés dans les rues de Brazzaville tout en visant la scène internationale.',
  'Precision': 'Exigence',
  'Every event is a masterclass in production and audience safety.':
    'Chaque événement témoigne de notre exigence en production et en sécurité du public.',
  'Legacy': 'Héritage',
  'We don\'t build for the moment; we build for the decade.':
    'Nous ne construisons pas pour l’instant présent, mais pour les générations à venir.',
  'Inquiries': 'Nous contacter',
  "Let's build": 'Construisons',
  'together.': 'ensemble.',
  'General & Partnerships': 'Général & partenariats',
  'Talent Scouting': 'Détection de talents',
  'Send us a message': 'Écrivez-nous',
  'Your Name': 'Votre nom',
  'Email Address': 'Adresse e-mail',
  'Interested in': 'Votre demande concerne',
  'Event Partnership': 'Partenariat événementiel',
  'Studio Production': 'Production studio',
  'Other': 'Autre',
  'Message': 'Message',
  'Send Inquiry': 'Envoyer le message',
  'Cosmos Events · Calendrier & Rétrospectives': 'Cosmos Events · Calendrier & rétrospectives',
  'Nos': 'Nos',
  'Événements.': 'événements.',
  'Des scènes populaires à fort impact au Congo, créées pour donner une voix, une arène et un espace de fête à la jeunesse et aux familles.':
    'Au Congo, nous créons des événements populaires qui donnent à la jeunesse et aux familles une scène, une voix et un espace de fête.',
  '01 — Édition Phare': '01 — Événement phare',
  "3 Jours d'effervescence": '3 jours de fête',
  '3 Jours Intenses': '3 jours intenses',
  'Tout Public': 'Tous publics',
  'le tournoi de basketball du peuple': 'le tournoi de basketball populaire',
  'Notre tournoi de basketball était un rassemblement liant amour pour le basket et la jeunesse brazzavilloise. Notre but était de proposer un événement sportif, où les jeunes et les plus vieux pouvaient venir passer du temps à l’esplanade Massamba-Débat, avec des animations musicales, des stands de nourritures, la venue d’artistes locaux et le tournoi de basket.':
    'Notre tournoi de basketball a rassemblé les passionnés de basket et la jeunesse brazzavilloise. Nous voulions offrir un événement où toutes les générations pourraient se retrouver à l’esplanade Massamba-Débat autour de matchs, d’animations musicales, de stands de nourriture et d’artistes locaux.',
  '« Pendant 3 jours nous avons eu la visite des officiels congolais que l’on remercie pour nous avoir aidé dans la réalisation de l’événement et on remercie tout particulièrement le parrain Rodrigue Nguesso qui sans lui rien n’aurait pu être possible. »':
    '« Pendant trois jours, nous avons eu la visite des officiels congolais, que nous remercions pour leur aide dans la réalisation de l’événement. Nous remercions tout particulièrement notre parrain, Rodrigue Nguesso : sans lui, rien n’aurait été possible. »',
  'Nous reviendrons très prochainement avec d’autres événements.': 'Nous reviendrons très bientôt avec de nouveaux événements.',
  'Lieu': 'Lieu',
  'Durée': 'Durée',
  '3 Jours de fête': '3 jours de fête',
  'Parrain': 'Parrain',
  'Ambiance': 'Ambiance',
  'Basket, Food & Son': 'Basket, cuisine & musique',
  'Voir la rétrospective complète': 'Voir toute la rétrospective',
  'Statut : Édition clôturée avec succès': 'Statut : édition achevée avec succès',
  '02 — Section Dédiée': '02 — Événement dédié',
  'Événement Indépendant': 'Événement indépendant',
  'African Streetball Championship · Basket Na Bisso': 'Championnat africain de streetball · Basket Na Bisso',
  'Streetball & Matchs': 'Streetball & matchs',
  'Compétition libre et tournois inter-quartiers': 'Compétitions libres et tournois entre quartiers',
  'Communauté & Ferveur': 'Communauté & passion',
  'Rassemblement intergénérationnel et passion du jeu': 'La passion du jeu rassemble toutes les générations',
  'Culture Urbaine': 'Culture urbaine',
  'Musique, mode street et expression congolaise': 'Musique, mode street et expression congolaise',
  'Brazzaville, Congo · Prochaine édition en préparation': 'Brazzaville, Congo · prochaine édition en préparation',
  'Identity & Movement': 'Identité & mouvement',
  '« Faire briller le basketball congolais sur le terrain et dans les cœurs. »':
    '« Faire rayonner le basketball congolais sur le terrain et dans les cœurs. »',
  '03 — Prochainement au Programme': '03 — Prochainement au programme',
  'Saison 2026': 'Saison 2026',
  'Octobre 2026': 'Octobre 2026',
  'Décembre 2026': 'Décembre 2026',
  'Pointe-Noire, Congo': 'Pointe-Noire, Congo',
  'Culture & Mode': 'Culture & mode',
  'Conférences, showcases et ateliers réunissant les acteurs de la créativité et de l\'industrie culturelle en Afrique centrale.':
    'Conférences, spectacles et ateliers réunissent les acteurs de la création et des industries culturelles en Afrique centrale.',
  'Musique & Festival': 'Musique & festival',
  'Célébration live de la musique contemporaine africaine avec des têtes d\'affiche locales et internationales.':
    'Une célébration en direct des musiques africaines contemporaines, avec des artistes de renom locaux et internationaux.',
  'Voir les Détails': 'Voir les détails',
  'Tournoi du Peuple': 'Tournoi populaire',
  "Esplanade Stade Massamba-Débat": 'Esplanade du stade Massamba-Débat',
  "3 Jours d'événement": '3 jours d’événement',
  'Jeunesse & Aînés brazzavillois': 'Jeunesse et aînés de Brazzaville',
  "Parrainage d'Honneur": 'Parrain d’honneur',
  "Récit de l'Événement": 'L’histoire de l’événement',
  'ONE26 — le tournoi de basketball du peuple': 'ONE26 — le tournoi de basketball populaire',
  'Notre tournoi de basketball était un rassemblement liant amour pour le basket et la jeunesse brazzavilloise. Notre but était de proposer un événement sportif, où les jeunes et les plus vieux pouvaient venir passer du temps à l’esplanade Massamba débat, avec des animations musicales, des stands de nourritures, la venue d’artistes locaux le tournoi de basket.':
    'Notre tournoi de basketball a réuni passionnés de basket et jeunesse brazzavilloise. Nous voulions offrir à toutes les générations un moment de rencontre à l’esplanade Massamba-Débat, avec des matchs, des animations musicales, des stands de nourriture et des artistes locaux.',
  'Remerciements officiels & Hommage': 'Remerciements officiels & hommage',
  'Le Tournoi': 'Le tournoi',
  'Basket du Peuple': 'Le basket populaire',
  'Des matchs intenses qui ont fait vibrer le public sous les encouragements passionnés des supporters.':
    'Des matchs intenses ont fait vibrer le public, porté par les encouragements passionnés des supporters.',
  'Musique & Scène': 'Musique & scène',
  'Artistes Locaux': 'Artistes locaux',
  'Stands de Nourriture': 'Stands de restauration',
  'Espaces de restauration conviviaux permettant aux familles, aux jeunes et aux anciens de partager un repas.':
    'Des espaces conviviaux où familles, jeunes et aînés peuvent partager un repas.',
  'Intergénérationnel': 'Intergénérationnel',
  'Le cœur battant de Brazzaville rassemblant toutes les générations dans un même élan de joie.':
    'Le cœur battant de Brazzaville rassemble toutes les générations dans un même élan de joie.',
  'Tournoi du peuple': 'Tournoi populaire',
  'Envie de participer ou de soutenir la prochaine édition ?':
    'Envie de participer ou de soutenir la prochaine édition ?',
  'Cosmos collabore avec des partenaires, des marques et des institutions pour faire grandir la scène sportive congolaise.':
    'Cosmos travaille avec des partenaires, des marques et des institutions pour faire grandir la scène sportive congolaise.',
  "Contactez l'équipe Cosmos": "Contacter l’équipe Cosmos",
  'Tous les Événements': 'Tous les événements',
  'African Streetball Championship': 'Championnat africain de streetball',
  'Ville': 'Ville',
  'Discipline': 'Discipline',
  'Communauté': 'Communauté',
  'Statut': 'Statut',
  'Jeunesse & Quartiers': 'Jeunesse & quartiers',
  'Prochaine Édition en Préparation': 'Prochaine édition en préparation',
  'Célébrer le basketball congolais dans toute son authenticité.':
    'Célébrer le basketball congolais dans toute son authenticité.',
  'Basket Na Bisso': 'Basket Na Bisso',
  ' (« Notre Basketball » en lingala) est un événement autonome pensé pour donner aux terrains et aux playgrounds de Brazzaville la dimension qu\'ils méritent.':
    ' (« Notre basketball » en lingala) est un événement indépendant qui donne aux terrains et aux playgrounds de Brazzaville la place qu’ils méritent.',
  'Au-delà de la compétition sportive, Basket Na Bisso est un manifeste pour la jeunesse : un espace où l’énergie brute des quartiers, la créativité musicale, le streetwear et la passion du ballon orange convergent.':
    'Au-delà du sport, Basket Na Bisso est un manifeste pour la jeunesse : l’énergie des quartiers, la créativité musicale, le streetwear et la passion du ballon orange s’y rencontrent.',
  '« Créer un rendez-vous populaire pérenne où chaque jeune basketteur congolais peut exprimer son talent et où les fans vibrent ensemble. »':
    '« Créer un rendez-vous populaire durable où chaque jeune basketteur congolais peut exprimer son talent et où les fans vibrent ensemble. »',
  'Cosmos Events · Vision Basket Na Bisso': 'Cosmos Events · La vision Basket Na Bisso',
  'Streetball & Matchs 5v5': 'Streetball & matchs 5 contre 5',
  'Tournois ouverts et confrontations inter-quartiers pour révéler les pépites locales.':
    'Des tournois ouverts et des confrontations entre quartiers pour révéler les talents locaux.',
  'Culture & Expression': 'Culture & expression',
  'Fusion entre hip-hop congolais, street dance, mode locale et ferveur des supporters.':
    'La rencontre du hip-hop congolais, de la danse de rue, de la mode locale et de la ferveur des supporters.',
  'Événement Phare': 'Événement phare',
  'ONE26 — Le tournoi du peuple': 'ONE26 — Le tournoi populaire',
  'Découvrez la rétrospective des 3 jours d\'événement à l\'esplanade Massamba-Débat.':
    'Découvrez les trois jours de l’événement à l’esplanade Massamba-Débat.',
  'Voir ONE26': 'Découvrir ONE26',
  'Street Basketball Passion': 'La passion du basketball de rue',
  'Talent discovery': 'Détection des talents',
  'We find emerging sporting, artistic and digital talent through our scouts, events and local networks.':
    'Nous repérons les talents émergents du sport, des arts et du numérique grâce à nos scouts, nos événements et nos réseaux locaux.',
  'Career development': 'Développement de carrière',
  'Personalised plans combine coaching, performance, image building and media training.':
    'Un accompagnement personnalisé associe coaching, performance, image et formation aux médias.',
  'Content & visibility': 'Contenus & visibilité',
  'We shape each talent’s story with a considered digital presence, content and visibility strategy.':
    'Nous faisons rayonner chaque talent grâce à une présence numérique soignée, des contenus et une stratégie de visibilité.',
  'Contract management': 'Gestion des contrats',
  'We represent our talents in negotiations and help protect their interests at every stage.':
    'Nous représentons nos talents dans les négociations et protégeons leurs intérêts à chaque étape.',
  'Brand partnerships': 'Partenariats de marque',
  'We build meaningful endorsement and sponsorship opportunities that fit each talent’s identity.':
    'Nous créons des partenariats et des parrainages en accord avec l’identité de chaque talent.',
  'International exposure': 'Rayonnement international',
  'We connect our roster with regional scouts, international brands and opportunities across borders.':
    'Nous mettons nos talents en relation avec des scouts régionaux, des marques internationales et des occasions au-delà des frontières.',
  'Discover': 'Repérer',
  'We spot potential in communities, at events and across sport, music and digital culture.':
    'Nous repérons les talents dans les communautés, lors d’événements et dans le sport, la musique et la culture numérique.',
  'Develop': 'Développer',
  'We build a personal roadmap for performance, positioning and visibility.':
    'Nous construisons un parcours personnalisé autour de la performance, du positionnement et de la visibilité.',
  'Connect': 'Connecter',
  'We open doors to the right partners, platforms and opportunities.':
    'Nous ouvrons les portes vers les partenaires, les plateformes et les opportunités qui leur correspondent.',
  'Sustain': 'Accompagner',
  'We stay alongside each talent as their career and value grow over time.':
    'Nous accompagnons chaque talent dans la durée, à mesure que sa carrière et sa valeur progressent.',
  'Brands & organisations': 'Marques & organisations',
  'Sports clubs & federations': 'Clubs & fédérations sportives',
  'Record labels & studios': 'Labels & studios musicaux',
  'International scouts': 'Scouts internationaux',
  'À propos de Cosmos': 'About Cosmos',
  'Dans la peau des talents ?': 'Meet the talents',
  'Born in Congo · Built for what’s next': 'Né au Congo · Tourné vers l’avenir',
  'More than representation': 'Bien plus que de la représentation',
  'Rooted here. Connected everywhere.': 'Ancrés ici. Connectés au monde.',
  'Brazzaville · Central Africa': 'Brazzaville · Afrique centrale',
  'Structuring raw talent into credible, sustainable careers — from discovery in Congo to opportunities around the world.':
    'Nous structurons les talents bruts pour bâtir des carrières crédibles et durables, de leur découverte au Congo aux opportunités dans le monde entier.',
  'Discover our approach': 'Découvrir notre approche',
  'Work with us': 'Travailler avec nous',
  'Scroll to discover Cosmos Talents': 'Défiler pour découvrir Cosmos Talents',
  'Talent is everywhere.': 'Les talents sont partout.',
  ' Opportunity should be too.': ' Les opportunités aussi.',
  'We are the bridge between raw Congolese talent and the visibility, support and opportunities needed to build a lasting career.':
    'Nous sommes le lien entre les talents congolais et la visibilité, le soutien et les opportunités nécessaires à une carrière durable.',
  'Across sport, the arts and digital culture, talent is abundant. Structured pathways are not. Cosmos Talents exists to close that gap — starting locally, growing regionally, and reaching further together.':
    'Dans le sport, les arts et la culture numérique, les talents ne manquent pas. Les parcours structurés, eux, sont rares. Cosmos Talents comble cet écart : d’abord localement, puis dans la région et au-delà.',
  'Sports': 'Sport',
  'Arts': 'Arts',
  'Digital': 'Numérique',
  'We build the whole career.': 'Nous construisons des carrières complètes.',
  'Personal support at every stage — from the first introduction to the next big opportunity.':
    'Un accompagnement à chaque étape, de la première rencontre à la prochaine grande opportunité.',
  'A pathway, not a shortcut': 'Un parcours, pas un raccourci',
  'From first spark to lasting impact.': 'De la première étincelle à un impact durable.',
  'We believe in the talent before the deal. Together, we turn potential into a clear and supported path forward.':
    'Nous croyons au talent avant le contrat. Ensemble, nous transformons le potentiel en un parcours clair et accompagné.',
  'Local knowledge.': 'Ancrés dans le local.',
  ' A wider world.': ' Ouverts sur le monde.',
  'We know the culture and the community our talents come from. Through the wider Cosmos ecosystem, we bring their stories to audiences, brands and partners who can take them further.':
    'Nous connaissons la culture et les communautés de nos talents. Avec l’écosystème Cosmos, nous faisons découvrir leurs parcours à des publics, des marques et des partenaires qui les aideront à aller plus loin.',
  'The next chapter starts here.': 'Le prochain chapitre commence ici.',
  'Start a conversation': 'Entrons en contact',
  'Brazzaville, Republic of Congo': 'Brazzaville, République du Congo',
  'COSMOS': 'COSMOS',
  'Cosmos Talents — A Universe of Talents': 'Cosmos Talents — Un univers de talents',
  'Brazzaville, Rep. of Congo': 'Brazzaville, République du Congo',
};

const englishTranslations: Record<string, string> = {
  'Nos événements.': 'Our events.',
  'Nos Événements.': 'Our Events.',
  'Un univers': 'A universe',
  "d'expériences.": 'of experiences.',
  '01 — À propos': '01 — About',
  '02 — Nos divisions': '02 — Divisions',
  '03 — Nos projets': '03 — Featured Work',
  '04 — Notre synergie': '04 — Synergy',
  '05 — Contact': '05 — Contact',
  'Découvrir les événements': 'Explore Events',
  'Rencontrer les talents': 'Meet Talents',
  'Défilez pour découvrir Cosmos': 'Scroll to discover Cosmos',
  'Gestion de talents': 'Talent Management',
  'Contenus': 'Content',
  'Nos divisions': 'Divisions',
  'Entreprise': 'Company',
  'Projets phares': 'Featured Work',
  'Presse': 'Press',
  'Devenir partenaire': 'Partner with us',
  'Un univers de possibilités.': 'A Universe of possibility.',
  'Cosmos est une plateforme de divertissement intégrée qui relie événements, talents et contenus en Afrique et au-delà.':
    'Cosmos is an integrated entertainment platform — connecting events, talent and content across Africa and beyond.',
  'La preuve par les actes.': 'Proof of concept.',
  'Construite avec le public.': 'Built in public.',
  'Événement dédié · indépendant': 'Dedicated Event · Independent',
  'Trois piliers · Un écosystème': 'Three Pillars · One Ecosystem',
  'Nos événements': 'Our Events',
  'Cosmos Events · Calendrier & rétrospectives': 'Cosmos Events · Calendar & Retrospectives',
  'Au Congo, nous créons des événements populaires qui donnent à la jeunesse et aux familles une scène, une voix et un espace de fête.':
    'Across Congo, we create high-impact community events that give young people and families a stage, a voice and a place to celebrate.',
  '01 — Événement phare': '01 — Featured Event',
  '3 jours de fête': '3 Days of Celebration',
  '3 jours intenses': '3 Action-Packed Days',
  'Tous publics': 'All Ages',
  'le tournoi de basketball populaire': 'the people’s basketball tournament',
  'Notre tournoi de basketball a rassemblé la jeunesse brazzavilloise autour de sa passion pour le basket, avec des animations musicales, des stands de nourriture et des artistes locaux.':
    'Our basketball tournament brought Brazzaville’s youth together through their shared love of the game, alongside musical performances, food stands and local artists.',
  '« Pendant trois jours, nous avons eu la visite des officiels congolais, que nous remercions pour leur aide dans la réalisation de l’événement. Nous remercions tout particulièrement notre parrain, Rodrigue Nguesso : sans lui, rien n’aurait été possible. »':
    '“For three days, we were honoured by visits from Congolese officials, whose support helped make this event possible. Special thanks to our patron, Rodrigue Nguesso — without him, none of this could have happened.”',
  'Nous reviendrons très bientôt avec de nouveaux événements.': 'We’ll be back very soon with more events.',
  '3 jours d’événement': '3 Days of Events',
  'Jeunesse et aînés de Brazzaville': 'Brazzaville’s Youth & Elders',
  'Parrain d’honneur': 'Patron',
  'Basket, cuisine & musique': 'Basketball, Food & Music',
  'Voir toute la rétrospective': 'View the Full Retrospective',
  'Statut : édition achevée avec succès': 'Status: Successfully Completed',
  '02 — Événement dédié': '02 — Dedicated Event',
  'Championnat africain de streetball · Basket Na Bisso': 'African Streetball Championship · Basket Na Bisso',
  'Streetball & matchs': 'Streetball & Games',
  'Compétitions libres et tournois entre quartiers': 'Open competitions and inter-neighbourhood tournaments',
  'Communauté & passion': 'Community & Passion',
  'La passion du jeu rassemble toutes les générations': 'Bringing generations together through the love of the game',
  'Culture urbaine': 'Urban Culture',
  'Musique, mode street et expression congolaise': 'Music, streetwear and Congolese expression',
  'Brazzaville, Congo · prochaine édition en préparation': 'Brazzaville, Congo · Next Edition in Preparation',
  'Identité & mouvement': 'Identity & Movement',
  '« Faire rayonner le basketball congolais sur le terrain et dans les cœurs. »':
    '“Let Congolese basketball shine on the court and in our hearts.”',
  '03 — Prochainement au programme': '03 — Coming Up',
  'Saison 2026': '2026 Season',
  'Octobre 2026': 'October 2026',
  'Décembre 2026': 'December 2026',
  'Culture & mode': 'Culture & Fashion',
  'Conférences, spectacles et ateliers réunissent les acteurs de la création et des industries culturelles en Afrique centrale.':
    'Conferences, showcases and workshops bring together creatives and cultural industry leaders from across Central Africa.',
  'Musique & festival': 'Music & Festival',
  'Une célébration en direct des musiques africaines contemporaines, avec des artistes de renom locaux et internationaux.':
    'A live celebration of contemporary African music, featuring leading local and international artists.',
  'Voir les détails': 'View Details',
  'Tournoi populaire': 'People’s Tournament',
  'Esplanade du stade Massamba-Débat': 'Massamba-Débat Stadium Esplanade',
  'L’histoire de l’événement': 'The Event Story',
  'Notre tournoi de basketball a réuni passionnés de basket et jeunesse brazzavilloise. Nous voulions offrir à toutes les générations un moment de rencontre à l’esplanade Massamba-Débat, avec des matchs, des animations musicales, des stands de nourriture et des artistes locaux.':
    'Our basketball tournament brought together Brazzaville’s youth and basketball fans. We set out to create an event for all generations at the Massamba-Débat Esplanade, featuring games, music, food stands and local artists.',
  '« Pendant trois jours, nous avons eu la visite des officiels congolais, que nous remercions pour leur aide dans la réalisation de l’événement. Nous remercions tout particulièrement notre parrain Rodrigue Nguesso : sans lui, rien n’aurait été possible. »':
    '“For three days, we welcomed Congolese officials and thank them for helping make the event happen. Special thanks to our patron, Rodrigue Nguesso — without him, none of this could have been possible.”',
  'Remerciements officiels & hommage': 'Official Thanks & Tribute',
  'Le tournoi': 'The Tournament',
  'Le basket populaire': 'Basketball for Everyone',
  'Des matchs intenses ont fait vibrer le public, porté par les encouragements passionnés des supporters.':
    'Intense games had the crowd on its feet, fuelled by passionate supporters.',
  'Musique & scène': 'Music & Stage',
  'Artistes locaux': 'Local Artists',
  'Des animations musicales et des artistes locaux célèbrent la culture urbaine.':
    'Live music and local artists celebrating urban culture.',
  'Stands de restauration': 'Food Stands',
  'Des espaces conviviaux où familles, jeunes et aînés peuvent partager un repas.':
    'Welcoming spaces where families, young people and elders can share a meal.',
  'Intergénérationnel': 'Across Generations',
  'Le cœur battant de Brazzaville rassemble toutes les générations dans un même élan de joie.':
    'The beating heart of Brazzaville, bringing every generation together in celebration.',
  'Envie de participer ou de soutenir la prochaine édition ?': 'Want to take part or support the next edition?',
  'Cosmos travaille avec des partenaires, des marques et des institutions pour faire grandir la scène sportive congolaise.':
    'Cosmos works with partners, brands and institutions to grow the Congolese sporting scene.',
  'Contacter l’équipe Cosmos': 'Contact the Cosmos Team',
  'Tous les événements': 'All Events',
  'Ville': 'City',
  'Discipline': 'Sport',
  'Communauté': 'Community',
  'Statut': 'Status',
  'Jeunesse & quartiers': 'Youth & Neighbourhoods',
  'Prochaine édition en préparation': 'Next Edition in Preparation',
  'Célébrer le basketball congolais dans toute son authenticité.':
    'Celebrating Congolese basketball in all its authenticity.',
  ' (« Notre basketball » en lingala) est un événement indépendant qui donne aux terrains et aux playgrounds de Brazzaville la place qu’ils méritent.':
    ' (“Our Basketball” in Lingala) is an independent event that gives Brazzaville’s courts and playgrounds the stage they deserve.',
  'Au-delà du sport, Basket Na Bisso est un manifeste pour la jeunesse : l’énergie des quartiers, la créativité musicale, le streetwear et la passion du ballon orange s’y rencontrent.':
    'More than a competition, Basket Na Bisso is a celebration of youth: neighbourhood energy, musical creativity, streetwear and a shared love of the game.',
  '« Créer un rendez-vous populaire durable où chaque jeune basketteur congolais peut exprimer son talent et où les fans vibrent ensemble. »':
    '“Create a lasting community event where every young Congolese basketball player can show their talent and fans can share the excitement.”',
  'Cosmos Events · La vision Basket Na Bisso': 'Cosmos Events · The Basket Na Bisso Vision',
  'Streetball & matchs 5 contre 5': 'Streetball & 5-on-5 Games',
  'Des tournois ouverts et des confrontations entre quartiers pour révéler les talents locaux.':
    'Open tournaments and inter-neighbourhood matchups to uncover local talent.',
  'Culture & expression': 'Culture & Expression',
  'La rencontre du hip-hop congolais, de la danse de rue, de la mode locale et de la ferveur des supporters.':
    'A fusion of Congolese hip-hop, street dance, local fashion and passionate fans.',
  'Événement phare': 'Featured Event',
  'ONE26 — Le tournoi populaire': 'ONE26 — The People’s Tournament',
  'Découvrez les trois jours de l’événement à l’esplanade Massamba-Débat.':
    'Discover the three-day event at the Massamba-Débat Esplanade.',
  'Découvrir ONE26': 'Discover ONE26',
  'La passion du basketball de rue': 'Street Basketball Passion',
  'Détection des talents': 'Talent Discovery',
  'Nous repérons les talents émergents du sport, des arts et du numérique grâce à nos scouts, nos événements et nos réseaux locaux.':
    'We discover emerging talent in sport, the arts and digital culture through scouts, events and local networks.',
  'Développement de carrière': 'Career Development',
  'Un accompagnement personnalisé associe coaching, performance, image et formation aux médias.':
    'Personalised plans combine coaching, performance, image-building and media training.',
  'Contenus & visibilité': 'Content & Visibility',
  'Nous faisons rayonner chaque talent grâce à une présence numérique soignée, des contenus et une stratégie de visibilité.':
    'We shape each talent’s story with a thoughtful digital presence, content and visibility strategy.',
  'Gestion des contrats': 'Contract Management',
  'Nous représentons nos talents dans les négociations et protégeons leurs intérêts à chaque étape.':
    'We represent our talents in negotiations and protect their interests at every stage.',
  'Partenariats de marque': 'Brand Partnerships',
  'Nous créons des partenariats et des parrainages en accord avec l’identité de chaque talent.':
    'We create meaningful endorsement and sponsorship opportunities that fit each talent’s identity.',
  'Rayonnement international': 'International Exposure',
  'Nous mettons nos talents en relation avec des scouts régionaux, des marques internationales et des occasions au-delà des frontières.':
    'We connect our roster with regional scouts, international brands and opportunities across borders.',
  'Repérer': 'Discover',
  'Nous repérons les talents dans les communautés, lors d’événements et dans le sport, la musique et la culture numérique.':
    'We spot potential in communities, at events and across sport, music and digital culture.',
  'Développer': 'Develop',
  'Nous construisons un parcours personnalisé autour de la performance, du positionnement et de la visibilité.':
    'We build a personal roadmap for performance, positioning and visibility.',
  'Connecter': 'Connect',
  'Nous ouvrons les portes vers les partenaires, les plateformes et les opportunités qui leur correspondent.':
    'We open doors to the right partners, platforms and opportunities.',
  'Accompagner': 'Sustain',
  'Nous accompagnons chaque talent dans la durée, à mesure que sa carrière et sa valeur progressent.':
    'We stay alongside each talent as their career and value grow over time.',
  'Marques & organisations': 'Brands & Organisations',
  'Clubs & fédérations sportives': 'Sports Clubs & Federations',
  'Labels & studios musicaux': 'Record Labels & Studios',
  'Scouts internationaux': 'International Scouts',
  'Les talents sont partout.': 'Talent is everywhere.',
  ' Les opportunités aussi.': ' Opportunity should be too.',
  'Nous sommes le lien entre les talents congolais et la visibilité, le soutien et les opportunités nécessaires à une carrière durable.':
    'We are the bridge between Congolese talent and the visibility, support and opportunities needed to build a lasting career.',
  'Dans le sport, les arts et la culture numérique, les talents ne manquent pas. Les parcours structurés, eux, sont rares. Cosmos Talents comble cet écart : d’abord localement, puis dans la région et au-delà.':
    'Across sport, the arts and digital culture, talent is abundant. Structured pathways are not. Cosmos Talents exists to close that gap — starting locally, growing regionally and reaching further together.',
  'Sport': 'Sports',
  'Numérique': 'Digital',
  'Bien plus que de la représentation': 'More than Representation',
  'Nous construisons des carrières complètes.': 'We Build the Whole Career',
  'Un accompagnement à chaque étape, de la première rencontre à la prochaine grande opportunité.':
    'Personal support at every stage — from the first introduction to the next big opportunity.',
  'Un parcours, pas un raccourci': 'A Pathway, Not a Shortcut',
  'De la première étincelle à un impact durable.': 'From First Spark to Lasting Impact',
  'Nous croyons au talent avant le contrat. Ensemble, nous transformons le potentiel en un parcours clair et accompagné.':
    'We believe in the talent before the deal. Together, we turn potential into a clear and supported path forward.',
  'Ancrés ici. Connectés au monde.': 'Rooted Here. Connected Everywhere.',
  'Ancrés dans le local.': 'Local Knowledge.',
  ' Ouverts sur le monde.': ' A Wider World.',
  'Nous connaissons la culture et les communautés de nos talents. Avec l’écosystème Cosmos, nous faisons découvrir leurs parcours à des publics, des marques et des partenaires qui les aideront à aller plus loin.':
    'We know the culture and the community our talents come from. Through the wider Cosmos ecosystem, we bring their stories to audiences, brands and partners who can take them further.',
  'Le prochain chapitre commence ici.': 'The Next Chapter Starts Here',
  'Entrons en contact': 'Start a Conversation',
  'Brazzaville, République du Congo': 'Brazzaville, Republic of Congo',
  'Nos': 'Our',
  'Événements.': 'Events.',
  'Créativité, Audace & Avenir': 'Creativity, Boldness & the Future',
  'Brazzaville · Jeunesse & Culture': 'Brazzaville · Youth & Culture',
  '« Offrir à la jeunesse africaine la scène et l’écosystème qu’elle mérite. »':
    '“Give African youth the stage and ecosystem they deserve.”',
  'Tous les Événements': 'All Events',
  'Contactez l’équipe Cosmos': 'Contact the Cosmos Team',
  "Contactez l'équipe Cosmos": 'Contact the Cosmos Team',
  ' (« Notre Basketball » en lingala) est un événement autonome pensé pour donner aux terrains et aux playgrounds de Brazzaville la dimension qu’ils méritent.':
    ' (“Our Basketball” in Lingala) is an independent event that gives Brazzaville’s courts and playgrounds the standing they deserve.',
  'Au-delà de la compétition sportive, Basket Na Bisso est un manifeste pour la jeunesse : un espace où l’énergie brute des quartiers, la créativité musicale, le streetwear et la passion du ballon orange convergent.':
    'Beyond competition, Basket Na Bisso is a celebration of youth: a space where neighbourhood energy, musical creativity, streetwear and a love of basketball come together.',
  '« Créer un rendez-vous populaire pérenne où chaque jeune basketteur congolais peut exprimer son talent et où les fans vibrent ensemble. »':
    '“Create a lasting community event where every young Congolese basketball player can showcase their talent and fans can share the excitement.”',
  'Streetball & Matchs 5v5': 'Streetball & 5-on-5 Games',
  'Tournois ouverts et confrontations inter-quartiers pour révéler les pépites locales.':
    'Open tournaments and inter-neighbourhood matchups to uncover local talent.',
  'Culture & Expression': 'Culture & Expression',
  'Fusion entre hip-hop congolais, street dance, mode locale et ferveur des supporters.':
    'A fusion of Congolese hip-hop, street dance, local fashion and passionate fans.',
  'Street Basketball Passion': 'Street Basketball Passion',
  'Événement Phare': 'Featured Event',
  'ONE26 — Le tournoi du peuple': 'ONE26 — The People’s Tournament',
  "Découvrez la rétrospective des 3 jours d'événement à l'esplanade Massamba-Débat.":
    'Discover the three-day event at the Massamba-Débat Esplanade.',
  'Voir ONE26': 'View ONE26',
  'Cosmos collabore avec des partenaires, des marques et des institutions pour faire grandir la scène sportive congolaise.':
    'Cosmos works with partners, brands and institutions to grow the Congolese sporting scene.',
  'Tournoi du Peuple': 'People’s Tournament',
  'ONE26 — le tournoi de basketball du peuple': 'ONE26 — The People’s Basketball Tournament',
  'Notre tournoi de basketball était un rassemblement liant amour pour le basket et la jeunesse brazzavilloise. Notre but était de proposer un événement sportif, où les jeunes et les plus vieux pouvaient venir passer du temps à l’esplanade Massamba débat, avec des animations musicales, des stands de nourritures, la venue d’artistes locaux le tournoi de basket.':
    'Our basketball tournament brought Brazzaville’s youth together through their love of the game. We set out to create a sporting event where young and old could gather at the Massamba-Débat Esplanade for music, food, local artists and basketball.',
  '« Pendant 3 jours nous avons eu la visite des officiels congolais que l’on remercie pour nous avoir aidé dans la réalisation de l’événement et on remercie tout particulièrement le parrain ':
    '“Over three days, we welcomed Congolese officials whose support helped make the event possible. Special thanks to our patron, ',
  ' qui sans lui rien n’aurait pu être possible. »': ' — without whom none of this would have been possible.”',
  'Remerciements officiels & Hommage': 'Official Thanks & Tribute',
  'Nous reviendrons très prochainement avec d’autres événements.': 'We’ll be back very soon with more events.',
  'Le Tournoi': 'The Tournament',
  'Basket du Peuple': 'Basketball for Everyone',
  'Des matchs intenses qui ont fait vibrer le public sous les encouragements passionnés des supporters.':
    'Intense games had the crowd on its feet, fuelled by passionate supporters.',
  'Musique & Scène': 'Music & Stage',
  'Artistes Locaux': 'Local Artists',
  "Animations musicales continues et prestation d'artistes locaux célébrant la culture urbaine.":
    'Live music and local artists celebrating urban culture.',
  'Stands de Nourriture': 'Food Stands',
  'Espaces de restauration conviviaux permettant aux familles, aux jeunes et aux anciens de partager un repas.':
    'Welcoming spaces where families, young people and elders can share a meal.',
  'Esplanade Massamba-Débat': 'Massamba-Débat Esplanade',
  'Le cœur battant de Brazzaville rassemblant toutes les générations dans un même élan de joie.':
    'The beating heart of Brazzaville, bringing every generation together in celebration.',
  'Un hommage appuyé au parrain officiel qui a cru en cette vision et rendu possible cette grande célébration pour la jeunesse brazzavilloise.':
    'A heartfelt tribute to the official patron who believed in this vision and made this celebration for Brazzaville’s youth possible.',
  'Partenaire & Soutien Fondateur': 'Founding Partner & Supporter',
  'Autre Événement Cosmos': 'Another Cosmos Event',
  "Découvrez également l'événement dédié à la street culture et aux talents émergents du basketball congolais.":
    'Discover our event dedicated to street culture and emerging Congolese basketball talent.',
  'Avec le soutien des Officiels Congolais & Partenaires': 'With the Support of Congolese Officials & Partners',
  'Culture & Mode': 'Culture & Fashion',
  "Conférences, showcases et ateliers réunissant les acteurs de la créativité et de l'industrie culturelle en Afrique centrale.":
    'Conferences, showcases and workshops bringing together creatives and cultural industry leaders from across Central Africa.',
  'Musique & Festival': 'Music & Festival',
  "Célébration live de la musique contemporaine africaine avec des têtes d'affiche locales et internationales.":
    'A live celebration of contemporary African music featuring leading local and international artists.',
  'Des scènes populaires à fort impact au Congo, créées pour donner une voix, une arène et un espace de fête à la jeunesse et aux familles.':
    'Across Congo, we create high-impact community events that give young people and families a stage, a voice and a place to celebrate.',
  '01 — Édition Phare': '01 — Featured Edition',
  'Esplanade Stade Massamba-Débat': 'Massamba-Débat Stadium Esplanade',
  '3 Jours Intenses': '3 Action-Packed Days',
  'Notre tournoi de basketball était un rassemblement liant amour pour le basket et la jeunesse brazzavilloise. Notre but était de proposer un événement sportif, où les jeunes et les plus vieux pouvaient venir passer du temps à l’esplanade Massamba-Débat, avec des animations musicales, des stands de nourritures, la venue d’artistes locaux et le tournoi de basket.':
    'Our basketball tournament brought Brazzaville’s youth together through their love of the game. We set out to create a sporting event where young and old could gather at the Massamba-Débat Esplanade for music, food, local artists and basketball.',
  'Lieu': 'Location',
  'Durée': 'Duration',
  'Parrain': 'Patron',
  'Ambiance': 'Atmosphere',
  '3 Jours de fête': '3 Days of Celebration',
  'Basket, Food & Son': 'Basketball, Food & Music',
  'Voir la rétrospective complète': 'View the Full Retrospective',
  'Statut : Édition clôturée avec succès': 'Status: Successfully Completed',
  '02 — Section Dédiée': '02 — Dedicated Section',
  'Événement Indépendant': 'Independent Event',
  'African Streetball Championship · Basket Na Bisso': 'African Streetball Championship · Basket Na Bisso',
  'Notre Basketball. Notre Culture.': 'Our Basketball. Our Culture.',
  ' est un événement à part entière dédié à la culture du basketball congolais. Conçu pour faire vibrer les passionnés, révéler les talents émergents des quartiers et réunir la communauté dans une atmosphère festive et inclusive.':
    ' is a dedicated celebration of Congolese basketball culture, bringing fans together, showcasing emerging neighbourhood talent and uniting the community in an inclusive, festive atmosphere.',
  'Streetball & Matchs': 'Streetball & Games',
  'Compétition libre et tournois inter-quartiers': 'Open competitions and inter-neighbourhood tournaments',
  'Communauté & Ferveur': 'Community & Passion',
  'Rassemblement intergénérationnel et passion du jeu': 'Bringing generations together through the love of the game',
  'Culture Urbaine': 'Urban Culture',
  'Brazzaville, Congo · Prochaine édition en préparation': 'Brazzaville, Congo · Next Edition in Preparation',
  '« Faire briller le basketball congolais sur le terrain et dans les cœurs. »':
    '“Let Congolese basketball shine on the court and in our hearts.”',
  '03 — Prochainement au Programme': '03 — Coming Up',
  'Voir les Détails': 'View Details',
  "3 Jours d'événement": '3 Days of Events',
  'Jeunesse & Aînés brazzavillois': 'Brazzaville’s Youth & Elders',
  "Parrainage d'Honneur": 'Honorary Patronage',
  'Le Tournoi du Peuple.': 'The People’s Tournament.',
  'Parrain Officiel': 'Official Patron',
  'Format & Durée': 'Format & Duration',
  'Public': 'Audience',
  "Récit de l'Événement": 'The Event Story',
  'Reconnaissance & Parrainage': 'Acknowledgement & Patronage',
  'Explorer Basket Na Bisso': 'Discover Basket Na Bisso',
  'Cosmos Events · Vision Basket Na Bisso': 'Cosmos Events · The Basket Na Bisso Vision',
  '3 Jours d’effervescence': '3 Action-Packed Days',
  'Tout Public': 'All Ages',
  'Édition Phare': 'Featured Event',
  'Esplanade Massamba-Débat · 3 Jours': 'Massamba-Débat Esplanade · 3 Days',
  'ONE26 — Le tournoi de basketball du peuple': 'ONE26 — The People’s Basketball Tournament',
  'le tournoi de basketball du peuple': 'the people’s basketball tournament',
  'Notre tournoi de basketball était un rassemblement liant amour pour le basket et la jeunesse brazzavilloise, avec des animations musicales, des stands de nourritures et la venue d’artistes locaux.':
    'Our basketball tournament brought Brazzaville’s youth together through their love of the game, with live music, food stands and local artists.',
  'Découvrir la rétrospective': 'Discover the Retrospective',
  'Section Dédiée · Événement Autonome': 'Dedicated Event · Independent',
  'Un événement indépendant dédié à la ferveur du basketball de rue et à la culture congolaise, réunissant les quartiers et les talents de demain.':
    'An independent event celebrating street basketball and Congolese culture, bringing neighbourhoods together and showcasing the next generation of talent.',
  'Jeunesse & Freestyle': 'Youth & Freestyle',
  'Cosmos Events · Calendrier & Rétrospectives': 'Cosmos Events · Calendar & Retrospectives',
  "3 Jours d'effervescence": '3 Action-Packed Days',
  '« L’énergie brute et le talent de la jeunesse urbaine congolaise. »':
    '“The raw energy and talent of Congo’s urban youth.”',
  'Ministère de la Jeunesse & des Sports': 'Ministry of Youth & Sports',
  'Ville de Brazzaville': 'City of Brazzaville',
  'Massamba-Débat': 'Massamba-Débat',
  'Partenaires Locaux': 'Local Partners',
  'Cosmos Ecosystem': 'Cosmos Ecosystem',
  'Jeunesse & Quartiers': 'Youth & Neighbourhoods',
  'Prochaine Édition en Préparation': 'Next Edition in Preparation',
};

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (text: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const savedLanguage = window.localStorage.getItem('cosmos_language');
    return savedLanguage === 'fr' || savedLanguage === 'en' ? savedLanguage : 'en';
  });

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem('cosmos_language', language);
  }, [language]);

  const value = useMemo<LanguageContextValue>(() => ({
    language,
    setLanguage: setLanguageState,
    t: (text) => {
      if (language === 'fr') {
        return Object.prototype.hasOwnProperty.call(englishTranslations, text)
          ? text
          : translations[text] ?? text;
      }
      return englishTranslations[text] ?? text;
    },
  }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
