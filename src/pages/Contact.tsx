import { motion } from 'framer-motion';
import { useLanguage } from '../i18n';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <div className="pt-40 pb-24 bg-[#F8F7F3]">
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1A1A1A]/30 mb-8 block">{t('Inquiries')}</span>
            <h1 className="text-6xl md:text-8xl font-serif text-[#1A1A1A] tracking-tighter leading-[0.8] mb-12">
              {t("Let's build")}<br />
              <span className="italic opacity-80 decoration-1">{t('together.')}</span>
            </h1>
            
            <div className="space-y-16 mt-24">
               <div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/40 mb-4 block">{t('General & Partnerships')}</span>
                  <p className="text-xl font-medium border-b border-black/10 inline-block pb-1">partners@cosmos.africa</p>
               </div>
               <div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/40 mb-4 block">{t('Talent Scouting')}</span>
                  <p className="text-xl font-medium border-b border-black/10 inline-block pb-1">talents@cosmos.africa</p>
               </div>
               <div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/40 mb-4 block">{t('Office')}</span>
                  <p className="text-xl font-medium">{t('Brazzaville, Rep. of Congo')}<br />82 Avenue de la Paix</p>
               </div>
            </div>
          </div>

          <div className="bg-white p-12 shadow-sm border border-black/5">
             <h3 className="text-2xl font-serif mb-8 italic">{t('Send us a message')}</h3>
             <form className="space-y-8">
                <div className="space-y-2">
                   <label className="text-[10px] uppercase font-bold tracking-widest text-[#1A1A1A]/40">{t('Your Name')}</label>
                   <input type="text" aria-label={t('Your Name')} className="w-full bg-transparent border-b border-black/10 py-4 focus:border-black outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] uppercase font-bold tracking-widest text-[#1A1A1A]/40">{t('Email Address')}</label>
                   <input type="email" aria-label={t('Email Address')} className="w-full bg-transparent border-b border-black/10 py-4 focus:border-black outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] uppercase font-bold tracking-widest text-[#1A1A1A]/40">{t('Interested in')}</label>
                   <select aria-label={t('Interested in')} className="w-full bg-transparent border-b border-black/10 py-4 focus:border-black outline-none transition-colors">
                      <option>{t('Event Partnership')}</option>
                      <option>{t('Talent Management')}</option>
                      <option>{t('Studio Production')}</option>
                      <option>{t('Other')}</option>
                   </select>
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] uppercase font-bold tracking-widest text-[#1A1A1A]/40">{t('Message')}</label>
                   <textarea aria-label={t('Message')} rows={4} className="w-full bg-transparent border-b border-black/10 py-4 focus:border-black outline-none transition-colors resize-none"></textarea>
                </div>
                <button type="submit" className="w-full py-5 bg-[#1A1A1A] text-white text-[10px] uppercase font-bold tracking-widest hover:italic transition-all">
                   {t('Send Inquiry')}
                </button>
             </form>
          </div>
        </div>
      </section>
    </div>
  );
}
