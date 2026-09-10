import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, FileText } from 'lucide-react';
import { mindMapsImages } from '../data/materialsData';

export const MindMapsCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const prev = () => {
    setActiveIndex((current) => (current === 0 ? mindMapsImages.length - 1 : current - 1));
  };

  const next = () => {
    setActiveIndex((current) => (current === mindMapsImages.length - 1 ? 0 : current + 1));
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

  return (
    <section id="mapas-mentais" className="w-full py-8 sm:py-10 bg-[#F4F7FA] border-t border-slate-200/60">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header: Selo + Título + Subtexto aproximados */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#244E73] bg-white border border-[#244E73]/20 px-3 py-1 rounded-full mb-2">
            MAPAS MENTAIS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1B3B57] tracking-tight font-display">
            Mapas Mentais de História para revisar o ENEM
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal">
            Resumos visuais para revisar os principais temas.
          </p>
        </div>

        {/* Carrossel Visual em Formato Folha/A4 Vertical */}
        <div 
          className="relative select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Desktop: 3 itens visíveis simultâneos, central em destaque */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 items-center max-w-5xl mx-auto">
            {[-1, 0, 1].map((offset) => {
              const targetIndex = (activeIndex + offset + mindMapsImages.length) % mindMapsImages.length;
              const map = mindMapsImages[targetIndex];
              const isCenter = offset === 0;

              return (
                <div
                  key={`${map.id}-${offset}`}
                  onClick={() => {
                    if (offset === -1) prev();
                    if (offset === 1) next();
                  }}
                  className={`transition-all duration-300 rounded-2xl overflow-hidden ${
                    isCenter
                      ? 'scale-100 z-10 shadow-xl shadow-[#244E73]/12 border-2 border-[#244E73]/40 cursor-default'
                      : 'scale-90 opacity-60 hover:opacity-90 shadow-md border border-slate-200 cursor-pointer'
                  }`}
                >
                  <div className="relative aspect-[3/4] w-full bg-white flex items-center justify-center p-4">
                    {map.src ? (
                      <img
                        src={map.src}
                        alt={map.alt || map.label}
                        className="w-full h-full object-cover rounded-lg"
                        loading={isCenter ? 'eager' : 'lazy'}
                      />
                    ) : (
                      /* Placeholder Neutro e Limpo */
                      <div className="w-full h-full rounded-xl bg-slate-50 border border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-400 p-6 text-center">
                        <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center justify-center text-slate-400 mb-3">
                          <FileText className="w-6 h-6 stroke-[1.5]" />
                        </div>
                        <span className="text-xs font-semibold text-slate-600 font-mono">
                          {map.label}
                        </span>
                        <span className="text-[10px] text-slate-400 mt-1">
                          Formato A4 Vertical
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile: 1 item por vez com transição suave */}
          <div className="md:hidden max-w-sm mx-auto">
            {(() => {
              const map = mindMapsImages[activeIndex];
              return (
                <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-[#244E73]/30 bg-white">
                  <div className="relative aspect-[3/4] w-full flex items-center justify-center p-4">
                    {map.src ? (
                      <img
                        src={map.src}
                        alt={map.alt || map.label}
                        className="w-full h-full object-cover rounded-lg"
                        loading="eager"
                      />
                    ) : (
                      <div className="w-full h-full rounded-xl bg-slate-50 border border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-400 p-6 text-center">
                        <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center text-slate-400 mb-3">
                          <FileText className="w-6 h-6 stroke-[1.5]" />
                        </div>
                        <span className="text-xs font-semibold text-slate-600 font-mono">
                          {map.label}
                        </span>
                        <span className="text-[10px] text-slate-400 mt-1">
                          Formato A4 Vertical
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })()}
          </div>

          {/* Setas Discretas */}
          <button
            id="mindmaps-prev-arrow"
            onClick={prev}
            aria-label="Mapa mental anterior"
            className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-2.5 rounded-full bg-white hover:bg-slate-50 text-[#244E73] shadow-md border border-slate-200 transition-transform active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <button
            id="mindmaps-next-arrow"
            onClick={next}
            aria-label="Próximo mapa mental"
            className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-2.5 rounded-full bg-white hover:bg-slate-50 text-[#244E73] shadow-md border border-slate-200 transition-transform active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Indicadores / Bolinhas */}
        <div className="flex items-center justify-center gap-1.5 mt-5 sm:mt-6">
          {mindMapsImages.map((_, idx) => (
            <button
              key={idx}
              id={`mindmap-dot-${idx}`}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Ir para o mapa mental ${idx + 1}`}
              className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                idx === activeIndex
                  ? 'w-6 bg-[#244E73]'
                  : 'w-1.5 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
