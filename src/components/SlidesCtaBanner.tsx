import React from 'react';

export const SlidesCtaBanner: React.FC = () => {
  const handleScrollToOffers = () => {
    const section = document.getElementById('ofertas');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="cta-slides-section" 
      className="w-full bg-[#205487] py-10 sm:py-12 md:py-14 px-4 sm:px-6 text-center text-white border-y border-[#184570] shadow-inner"
      aria-label="Chamada para ação - Transformar aulas"
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center justify-center">
        {/* Texto em destaque */}
        <h2 
          id="cta-slides-title"
          className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight sm:leading-snug max-w-md sm:max-w-xl text-center mb-6 sm:mb-7 font-display"
        >
          Pronto para transformar suas aulas?
        </h2>

        {/* Botão verde grande centralizado */}
        <button
          id="btn-cta-slides"
          onClick={handleScrollToOffers}
          className="w-full max-w-[320px] sm:w-auto sm:min-w-[270px] inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-base sm:text-lg tracking-wide shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-[0.98]"
        >
          <span>Começar Agora</span>
          <span aria-hidden="true" className="text-xl leading-none">→</span>
        </button>
      </div>
    </section>
  );
};
