import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export interface TestimonialSlot {
  id: number;
  imageUrl: string;
  fallbackUrl: string;
}

// 5 depoimentos reais na ordem especificada
export const testimonialSlots: TestimonialSlot[] = [
  { 
    id: 1, 
    imageUrl: 'https://i.imgur.com/P6D0DRn.jpeg',
    fallbackUrl: '/images/testimonials/depoimento-1.jpeg'
  },
  { 
    id: 2, 
    imageUrl: 'https://i.imgur.com/5zo2wfQ.jpeg',
    fallbackUrl: '/images/testimonials/depoimento-2.jpeg'
  },
  { 
    id: 3, 
    imageUrl: 'https://i.imgur.com/60Fo25n.jpeg',
    fallbackUrl: '/images/testimonials/depoimento-3.jpeg'
  },
  { 
    id: 4, 
    imageUrl: 'https://i.imgur.com/hL1c8Yg.jpeg',
    fallbackUrl: '/images/testimonials/depoimento-4.jpeg'
  },
  { 
    id: 5, 
    imageUrl: 'https://i.imgur.com/unOsQf6.jpeg',
    fallbackUrl: '/images/testimonials/depoimento-5.jpeg'
  },
];

export const TestimonialsCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const total = testimonialSlots.length;

  const prev = () => {
    setActiveIndex((curr) => (curr === 0 ? total - 1 : curr - 1));
  };

  const next = () => {
    setActiveIndex((curr) => (curr === total - 1 ? 0 : curr + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 40) next();
    if (distance < -40) prev();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Cálculo da animação de posicionamento para o layout 3D / carrossel centralizado
  const getSlideMotionProps = (index: number) => {
    let offset = (index - activeIndex + total) % total;
    if (offset > total / 2) offset -= total;

    if (isMobile) {
      // No Mobile: Apenas um espaço principal por vez no centro
      if (offset === 0) {
        return {
          x: '0%',
          scale: 1,
          opacity: 1,
          zIndex: 20,
          filter: 'brightness(1)',
          pointerEvents: 'auto' as const,
        };
      }
      return {
        x: offset > 0 ? '110%' : '-110%',
        scale: 0.88,
        opacity: 0,
        zIndex: 0,
        filter: 'brightness(0.6)',
        pointerEvents: 'none' as const,
      };
    }

    // No Desktop: Espaço central em destaque, laterais (-1 e +1) parcialmente visíveis com leve redução de opacidade
    if (offset === 0) {
      return {
        x: '0%',
        scale: 1,
        opacity: 1,
        zIndex: 20,
        filter: 'brightness(1)',
        pointerEvents: 'auto' as const,
      };
    }
    if (offset === 1) {
      return {
        x: '55%',
        scale: 0.86,
        opacity: 0.5,
        zIndex: 10,
        filter: 'brightness(0.7)',
        pointerEvents: 'auto' as const,
      };
    }
    if (offset === -1) {
      return {
        x: '-55%',
        scale: 0.86,
        opacity: 0.5,
        zIndex: 10,
        filter: 'brightness(0.7)',
        pointerEvents: 'auto' as const,
      };
    }
    return {
      x: offset > 0 ? '110%' : '-110%',
      scale: 0.72,
      opacity: 0,
      zIndex: 0,
      filter: 'brightness(0.4)',
      pointerEvents: 'none' as const,
    };
  };

  return (
    <section 
      id="depoimentos" 
      className="w-full py-14 sm:py-18 md:py-20 bg-white border-t border-slate-200/80 overflow-hidden"
      aria-label="Depoimentos reais de professores"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Cabeçalho da Seção */}
        <div className="max-w-2xl mx-auto mb-8 sm:mb-12">
          <h2 
            id="titulo-depoimentos"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#26619C] font-display tracking-tight leading-tight mb-3"
          >
            O que dizem nossos clientes
          </h2>
          <p 
            id="subtitulo-depoimentos"
            className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed"
          >
            Resultados e depoimentos reais de professores que já estão utilizando o material em sala.
          </p>
        </div>

        {/* Palco do Carrossel de Depoimentos */}
        <div 
          id="palco-carrossel-depoimentos"
          className="relative max-w-4xl mx-auto select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Container com altura calculada para os prints de depoimento */}
          <div className="relative mx-auto flex items-center justify-center min-h-[440px] xs:min-h-[490px] sm:min-h-[550px] md:min-h-[600px] overflow-hidden py-4 sm:py-6">
            
            {/* Botão Anterior */}
            <button
              type="button"
              id="btn-depoimento-anterior"
              onClick={prev}
              aria-label="Depoimento anterior"
              className="absolute left-1 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1B3B57]/85 hover:bg-[#1B3B57] text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer border border-white/25"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
            </button>

            {/* Carrossel de Imagens com Animação Fluida */}
            <div className="relative w-[235px] xs:w-[265px] sm:w-[305px] md:w-[335px] h-[410px] xs:h-[460px] sm:h-[530px] md:h-[570px] flex items-center justify-center">
              {testimonialSlots.map((slot, index) => {
                const motionProps = getSlideMotionProps(index);
                const isCenter = index === activeIndex;
                const isSideLeft = (index - activeIndex + total) % total === total - 1;
                const isSideRight = (index - activeIndex + total) % total === 1;

                return (
                  <motion.div
                    key={slot.id}
                    id={`depoimento-slide-${slot.id}`}
                    animate={motionProps}
                    transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                    onClick={() => {
                      if (!isMobile) {
                        if (isSideLeft) prev();
                        if (isSideRight) next();
                      }
                    }}
                    className="absolute inset-0 flex items-center justify-center rounded-2xl cursor-pointer"
                    style={{ transformOrigin: 'center center', willChange: 'transform, opacity' }}
                  >
                    <img 
                      src={imageErrors[slot.id] ? slot.fallbackUrl : slot.imageUrl} 
                      alt={`Depoimento ${slot.id}`}
                      className="w-full h-full object-contain rounded-2xl drop-shadow-xl select-none pointer-events-none"
                      loading={index === 0 ? 'eager' : 'lazy'}
                      decoding="async"
                      referrerPolicy="no-referrer"
                      onError={() => {
                        setImageErrors(prev => ({ ...prev, [slot.id]: true }));
                      }}
                    />

                    {/* Sobreposição sutil nos itens laterais no desktop */}
                    {!isMobile && !isCenter && (
                      <div className="absolute inset-0 bg-black/15 pointer-events-none rounded-2xl" />
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Botão Próximo */}
            <button
              type="button"
              id="btn-depoimento-proximo"
              onClick={next}
              aria-label="Próximo depoimento"
              className="absolute right-1 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1B3B57]/85 hover:bg-[#1B3B57] text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer border border-white/25"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
            </button>

          </div>

          {/* Indicadores em Pontos (Dots) */}
          <div className="flex items-center justify-center mt-3 gap-2 select-none">
            {testimonialSlots.map((slot, index) => (
              <button
                key={slot.id}
                id={`dot-depoimento-${index}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Ir para depoimento ${slot.id}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  index === activeIndex
                    ? 'w-6 h-2 bg-[#26619C]'
                    : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
