import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react';

const services = [
  {
    number: '01',
    title: 'Talent discovery',
    description:
      'We find emerging sporting, artistic and digital talent through our scouts, events and local networks.',
  },
  {
    number: '02',
    title: 'Career development',
    description:
      'Personalised plans combine coaching, performance, image building and media training.',
  },
  {
    number: '03',
    title: 'Content & visibility',
    description:
      'We shape each talent’s story with a considered digital presence, content and visibility strategy.',
  },
  {
    number: '04',
    title: 'Contract management',
    description:
      'We represent our talents in negotiations and help protect their interests at every stage.',
  },
  {
    number: '05',
    title: 'Brand partnerships',
    description:
      'We build meaningful endorsement and sponsorship opportunities that fit each talent’s identity.',
  },
  {
    number: '06',
    title: 'International exposure',
    description:
      'We connect our roster with regional scouts, international brands and opportunities across borders.',
  },
];

const journey = [
  {
    number: '01',
    title: 'Discover',
    description: 'We spot potential in communities, at events and across sport, music and digital culture.',
  },
  {
    number: '02',
    title: 'Develop',
    description: 'We build a personal roadmap for performance, positioning and visibility.',
  },
  {
    number: '03',
    title: 'Connect',
    description: 'We open doors to the right partners, platforms and opportunities.',
  },
  {
    number: '04',
    title: 'Sustain',
    description: 'We stay alongside each talent as their career and value grow over time.',
  },
];

const partners = [
  'Brands & organisations',
  'Sports clubs & federations',
  'Record labels & studios',
  'International scouts',
];

export default function Talents() {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = description?.content;

    document.title = 'Cosmos Talents — A Universe of Talents';
    description?.setAttribute(
      'content',
      'We discover, develop and connect Congolese sports, artistic and digital talent to sustainable careers and opportunities across the world.',
    );

    return () => {
      document.title = previousTitle;
      if (description && previousDescription) {
        description.content = previousDescription;
      }
    };
  }, []);

  return (
    <div className="bg-[#F8F7F3] text-[#1A1A1A]">
      <section className="relative isolate min-h-[88svh] overflow-hidden bg-[#151512] text-white">
        <div className="absolute inset-y-0 right-0 w-full md:w-[57%]">
          <img
            src="/images/cosmos-talents-freestyle.jpg"
            alt="Jeune talent congolais réalisant un freestyle avec un ballon"
            fetchPriority="high"
            className="h-full w-full object-cover object-[center_20%]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#11110f] via-[#11110f]/90 to-[#11110f]/10 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#11110f]/65 via-transparent to-[#11110f]/20" />

        <div className="relative mx-auto flex min-h-[88svh] max-w-7xl items-end px-6 pb-16 pt-36 md:items-center md:px-12 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <div className="mb-7 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-white/65">
              <span className="h-px w-8 bg-[#CFB53B]" />
              Brazzaville · Central Africa
            </div>
            <h1 className="font-serif text-[18vw] leading-[0.78] tracking-[-0.07em] md:text-[9vw]">
              A Universe
              <br />
              <span className="italic text-[#CFB53B]">of Talents.</span>
            </h1>
            <p className="mt-8 max-w-lg text-sm font-light leading-relaxed text-white/75 md:text-base">
              Structuring raw talent into credible, sustainable careers — from discovery in Congo to
              opportunities around the world.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-7">
              <a
                href="#approach"
                className="group inline-flex items-center gap-3 bg-[#CFB53B] px-6 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#171713] transition-colors hover:bg-white"
              >
                Discover our approach
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="mailto:contact@cosmostalents.cg"
                className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/75 transition-colors hover:text-white"
              >
                Work with us <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>
        </div>

        <a
          href="#vision"
          aria-label="Scroll to discover Cosmos Talents"
          className="absolute bottom-8 right-8 hidden items-center gap-3 text-[9px] uppercase tracking-[0.22em] text-white/55 md:flex"
        >
          Scroll to discover <ArrowDown size={14} />
        </a>
      </section>

      <section id="vision" className="px-6 py-24 md:px-12 md:py-36">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-24">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#1A1A1A]/40">
              Born in Congo · Built for what’s next
            </span>
            <h2 className="mt-6 max-w-md font-serif text-5xl leading-[0.95] tracking-[-0.05em] md:text-7xl">
              Talent is everywhere.
              <span className="italic text-[#9A842D]"> Opportunity should be too.</span>
            </h2>
          </div>
          <div className="md:pt-12">
            <p className="max-w-2xl text-lg font-light leading-relaxed text-[#1A1A1A]/75 md:text-2xl">
              We are the bridge between raw Congolese talent and the visibility, support and
              opportunities needed to build a lasting career.
            </p>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-[#1A1A1A]/55">
              Across sport, the arts and digital culture, talent is abundant. Structured pathways
              are not. Cosmos Talents exists to close that gap — starting locally, growing
              regionally, and reaching further together.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              {['Sports', 'Arts', 'Digital'].map((category) => (
                <span
                  key={category}
                  className="border border-black/10 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/65"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#EEECE6] px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-6 md:mb-20 md:flex-row md:items-end">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#1A1A1A]/40">
                More than representation
              </span>
              <h2 className="mt-5 font-serif text-5xl tracking-[-0.05em] md:text-7xl">
                We build the whole career.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-[#1A1A1A]/55">
              Personal support at every stage — from the first introduction to the next big
              opportunity.
            </p>
          </div>

          <div className="grid border-l border-t border-black/10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="group min-h-56 border-b border-r border-black/10 p-7 transition-colors hover:bg-[#F8F7F3] md:p-9"
              >
                <div className="mb-10 flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#9A842D]">
                    {service.number}
                  </span>
                  <ArrowUpRight
                    size={15}
                    className="text-[#1A1A1A]/30 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#9A842D]"
                  />
                </div>
                <h3 className="font-serif text-2xl tracking-tight">{service.title}</h3>
                <p className="mt-3 max-w-sm text-xs leading-relaxed text-[#1A1A1A]/55">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="px-6 py-24 md:px-12 md:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-24">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#1A1A1A]/40">
                A pathway, not a shortcut
              </span>
              <h2 className="mt-6 font-serif text-5xl leading-[0.95] tracking-[-0.05em] md:text-7xl">
                From first spark to lasting impact.
              </h2>
              <p className="mt-7 max-w-sm text-sm leading-relaxed text-[#1A1A1A]/55">
                We believe in the talent before the deal. Together, we turn potential into a clear
                and supported path forward.
              </p>
            </div>
            <div className="border-t border-black/10">
              {journey.map((step) => (
                <article
                  key={step.number}
                  className="grid grid-cols-[44px_1fr] gap-5 border-b border-black/10 py-6 md:grid-cols-[64px_180px_1fr] md:items-baseline md:gap-7 md:py-8"
                >
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#9A842D]">
                    {step.number}
                  </span>
                  <h3 className="font-serif text-2xl">{step.title}</h3>
                  <p className="col-start-2 max-w-md text-xs leading-relaxed text-[#1A1A1A]/55 md:col-start-auto">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#191916] px-6 py-24 text-white md:px-12 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[1fr_0.9fr] md:items-center md:gap-24">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#CFB53B]">
              Rooted here. Connected everywhere.
            </span>
            <h2 className="mt-6 max-w-2xl font-serif text-5xl leading-[0.92] tracking-[-0.05em] md:text-7xl">
              Local knowledge.
              <span className="italic text-[#CFB53B]"> A wider world.</span>
            </h2>
            <p className="mt-7 max-w-lg text-sm leading-relaxed text-white/60">
              We know the culture and the community our talents come from. Through the wider
              Cosmos ecosystem, we bring their stories to audiences, brands and partners who can
              take them further.
            </p>
          </div>
          <div className="grid grid-cols-1 border-t border-white/15 sm:grid-cols-2">
            {partners.map((partner, index) => (
              <div
                key={partner}
                className="flex min-h-24 items-center gap-4 border-b border-white/15 py-5 sm:pr-5"
              >
                <span className="text-[9px] font-bold tracking-[0.2em] text-[#CFB53B]">
                  0{index + 1}
                </span>
                <span className="text-sm text-white/80">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-24 md:px-12 md:py-36">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#1A1A1A]/40">
              Talent · Partner · Opportunity
            </span>
            <h2 className="mt-6 max-w-3xl font-serif text-5xl leading-[0.9] tracking-[-0.05em] md:text-8xl">
              The next chapter starts here.
            </h2>
          </div>
          <a
            href="mailto:contact@cosmostalents.cg?subject=Let%27s%20build%20with%20Cosmos%20Talents"
            className="group inline-flex w-fit shrink-0 items-center gap-4 border-b border-[#1A1A1A]/25 pb-4 text-xs font-bold uppercase tracking-[0.17em] transition-colors hover:border-[#9A842D] hover:text-[#9A842D]"
          >
            Start a conversation
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        <div className="mx-auto mt-16 flex max-w-7xl flex-col justify-between gap-3 border-t border-black/10 pt-5 text-[9px] uppercase tracking-[0.2em] text-[#1A1A1A]/40 sm:flex-row">
          <span>Brazzaville, Republic of Congo</span>
          <a className="transition-colors hover:text-[#1A1A1A]" href="mailto:contact@cosmostalents.cg">
            contact@cosmostalents.cg
          </a>
          <a
            className="transition-colors hover:text-[#1A1A1A]"
            href="https://www.instagram.com/cosmostalents/"
            target="_blank"
            rel="noreferrer"
          >
            @cosmostalents
          </a>
        </div>
      </section>
    </div>
  );
}
