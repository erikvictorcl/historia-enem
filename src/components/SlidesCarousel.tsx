import React from 'react';
import { Image as ImageIcon } from 'lucide-react';
import { slidesRow1, slidesRow2 } from '../data/materialsData';
import { MaterialImageItem } from '../types';

// =============================================================================
// COMPONENTE DO CARD DE SLIDE
// Proporção 16:9, cantos arredondados, sem distorção e com visual de alta nitidez
// =============================================================================
const localFallbackMap: Record<string, string> = {
  'slide-r1-1': '/images/slides/slide-1.jpg',
  'slide-r1-2': '/images/slides/slide-2.jpg',
  'slide-r1-3': '/images/slides/slide-3.jpg',
  'slide-r1-4': '/images/slides/slide-4.jpg',
  'slide-r1-5': '/images/slides/slide-5.jpg',
  'slide-r2-1': '/images/slides/slide-6.jpg',
  'slide-r2-2': '/images/slides/slide-7.jpg',
  'slide-r2-3': '/images/slides/slide-8.jpg',
  'slide-r2-4': '/images/slides/slide-9.jpg',
};

interface SlideCardProps {
  slide: MaterialImageItem;
  index: number;
  rowName: string;
}

const SlideCard: React.FC<SlideCardProps> = ({ slide, index, rowName }) => {
  return (
    <div
      id={`slideCard-${rowName}-${index}`}
      className="relative w-[275px] sm:w-[350px] md:w-[410px] lg:w-[460px] aspect-[16/9] flex-shrink-0 rounded-xl sm:rounded-2xl overflow-hidden bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow duration-300 select-none group"
    >
      <div id={`slideImage-${rowName}-${index}`} className="w-full h-full relative overflow-hidden bg-slate-900">
        {slide.src ? (
          <img
            src={slide.src}
            alt={slide.alt || slide.label}
            className="w-full h-full object-cover select-none pointer-events-none transform transition-transform duration-500 group-hover:scale-[1.02]"
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={(e) => {
              const fallback = localFallbackMap[slide.id];
              if (fallback && (e.target as HTMLImageElement).src !== window.location.origin + fallback) {
                (e.target as HTMLImageElement).src = fallback;
              }
            }}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#FAFBFD] via-[#F1F5F9] to-[#E2E8F0]/70 text-slate-500 p-4 text-center select-none">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center justify-center text-[#244E73]/60 mb-2">
              <ImageIcon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5]" />
            </div>
            <span className="text-xs sm:text-[13px] font-semibold text-slate-700 tracking-tight line-clamp-1 max-w-[90%]">
              {slide.label}
            </span>
            <span className="text-[10px] sm:text-xs text-slate-400 mt-1">
              Apresentação 16:9 • Pronta para aula
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export const SlidesCarousel: React.FC = () => {
  // Duplicação dos itens para criar o loop contínuo infinito sem nenhuma lacuna ou espaço vazio
  const baseRow1 = [...slidesRow1, ...slidesRow1];
  const doubledRow1 = [...baseRow1, ...baseRow1];

  const baseRow2 = [...slidesRow2, ...slidesRow2];
  const doubledRow2 = [...baseRow2, ...baseRow2];

  return (
    <section 
      id="slidesCarousel" 
      className="w-full py-12 sm:py-16 bg-white border-t border-slate-100 overflow-hidden"
      aria-label="Carrossel de apresentação dos slides"
    >
      {/* =====================================================================
          CABEÇALHO DA SEÇÃO: Título + Linha Decorativa + Subtítulo (PRESERVADOS)
          ===================================================================== */}
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1B3B57] tracking-tight font-display">
          Veja os slides por dentro
        </h2>
        
        {/* Pequena linha / traço decorativo */}
        <div 
          className="w-12 sm:w-16 h-1 bg-[#F2C553] mx-auto rounded-full mt-3 mb-3.5" 
          aria-hidden="true" 
        />
        
        <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
          Observe algumas apresentações reais do conteúdo que você recebe.
        </p>
      </div>

      {/* =====================================================================
          ESTEIRA DUPLA DE SLIDES (CARROSSEL DUPLO CONTÍNUO EM LOOP INFINITO)
          Row 1: Esquerda para a direita (20s)
          Row 2: Direita para a esquerda (22s)
          ===================================================================== */}
      <div 
        id="slideTrack"
        className="relative w-full overflow-hidden select-none space-y-3.5 sm:space-y-5"
      >
        {/* Leve fade nas extremidades esquerda e direita para entrada e saída elegantes */}
        <div 
          className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-24 md:w-36 bg-gradient-to-r from-white via-white/80 to-transparent z-10" 
          aria-hidden="true" 
        />
        <div 
          className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-24 md:w-36 bg-gradient-to-l from-white via-white/80 to-transparent z-10" 
          aria-hidden="true" 
        />

        {/* 1ª FILEIRA: Move automaticamente da ESQUERDA para a DIREITA */}
        <div className="w-full overflow-hidden flex py-1">
          <div 
            className="animate-marquee-right flex gap-3 sm:gap-4.5 items-center"
            style={{ animationDuration: '20s' }}
          >
            {doubledRow1.map((slide, index) => (
              <SlideCard 
                key={`row1-${slide.id}-${index}`} 
                slide={slide} 
                index={index} 
                rowName="top" 
              />
            ))}
          </div>
        </div>

        {/* 2ª FILEIRA: Move automaticamente da DIREITA para a ESQUERDA */}
        <div className="w-full overflow-hidden flex py-1">
          <div 
            className="animate-marquee-left flex gap-3 sm:gap-4.5 items-center"
            style={{ animationDuration: '22s' }}
          >
            {doubledRow2.map((slide, index) => (
              <SlideCard 
                key={`row2-${slide.id}-${index}`} 
                slide={slide} 
                index={index} 
                rowName="bottom" 
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
