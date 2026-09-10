import React from 'react';

export interface BonusItem {
  id: number;
  badge: string;
  title: string;
  description: string;
  imageUrl: string;
}

const localBonusFallbacks: Record<number, string> = {
  1: '/images/bonus/bonus-1.jpg',
  2: '/images/bonus/bonus-2.jpg',
  3: '/images/bonus/bonus-3.jpg',
  4: '/images/bonus/bonus-4.jpg',
};

export const exclusiveBonusesData: BonusItem[] = [
  {
    id: 1,
    badge: 'BÔNUS #1',
    title: '+150 Mapas Mentais de História',
    description: 'Resumos visuais dos principais conteúdos de História, ideais para revisão, projeção em sala e preparação para o ENEM.',
    imageUrl: 'https://i.imgur.com/qVQ6ZXB.jpeg', // Imgur T9SR1c8
  },
  {
    id: 2,
    badge: 'BÔNUS #2',
    title: '+300 Atividades para Imprimir',
    description: 'Questões e atividades prontas para aplicar com os alunos, reforçando os principais conteúdos trabalhados em aula.',
    imageUrl: 'https://i.imgur.com/50vwGFu.jpeg', // Imgur VxQsTJ4
  },
  {
    id: 3,
    badge: 'BÔNUS #3',
    title: 'Guia ENEM de História',
    description: 'Um guia prático para ajudar o professor a organizar revisões e trabalhar os conteúdos de História mais relevantes para o ENEM.',
    imageUrl: 'https://i.imgur.com/nVcMc74.jpeg', // Imgur l9XKabD
  },
  {
    id: 4,
    badge: 'BÔNUS #4',
    title: 'Guia Anual de Planejamento',
    description: 'Material de apoio para organizar conteúdos, aulas e revisões ao longo do ano letivo com mais praticidade.',
    imageUrl: 'https://i.imgur.com/3oaYt1s.jpeg', // Imgur ouXo1T2
  },
];

export const ExclusiveBonuses: React.FC = () => {
  return (
    <section 
      id="bonus-exclusivos"
      className="w-full py-14 sm:py-18 md:py-20 bg-[#FAF9F6] border-t border-slate-200/80"
      aria-label="Seção de Bônus Exclusivos"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          {/* Selo no topo */}
          <div 
            id="selo-bonus-exclusivos"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#244E73]/10 border border-[#244E73]/20 text-[#244E73] text-xs font-bold uppercase tracking-wider mb-3.5 shadow-xs"
          >
            <span role="img" aria-label="presente">🎁</span>
            <span>BÔNUS EXCLUSIVOS</span>
          </div>

          {/* Título */}
          <h2 
            id="titulo-bonus-exclusivos"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1B3B57] tracking-tight font-display"
          >
            E tem mais! Leve também:
          </h2>
        </div>

        {/* Grade 2x2 no Desktop, 1 Coluna no Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          {exclusiveBonusesData.map((bonus) => (
            <div
              key={bonus.id}
              id={`card-bonus-${bonus.id}`}
              className="relative bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
            >
              {/* Selo pequeno no canto superior direito */}
              <div className="absolute top-4 right-4 z-10">
                <span className="inline-block bg-[#244E73]/10 text-[#244E73] text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {bonus.badge}
                </span>
              </div>

              {/* Área superior: Imagem do Bônus em Destaque */}
              <div className="w-full mb-5">
                <div 
                  id={`area-imagem-bonus-${bonus.id}`}
                  className="w-full aspect-[4/3] sm:aspect-[16/11] rounded-xl overflow-hidden bg-[#F8FAFD] border border-slate-100/90 flex items-center justify-center p-2.5 sm:p-3.5 relative"
                >
                  <img 
                    src={bonus.imageUrl} 
                    alt={bonus.title}
                    className="w-full h-full object-contain select-none transition-transform duration-300 hover:scale-[1.02]"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const fallback = localBonusFallbacks[bonus.id];
                      if (fallback && (e.target as HTMLImageElement).src !== window.location.origin + fallback) {
                        (e.target as HTMLImageElement).src = fallback;
                      }
                    }}
                  />
                </div>
              </div>

              {/* Textos do Card: Título em Azul Forte + Descrição Curta */}
              <div className="flex-1 flex flex-col justify-start">
                <h3 
                  id={`titulo-card-bonus-${bonus.id}`}
                  className="text-lg sm:text-xl font-extrabold text-[#1B3B57] font-display tracking-tight leading-snug mb-2"
                >
                  {bonus.title}
                </h3>
                <p 
                  id={`descricao-card-bonus-${bonus.id}`}
                  className="text-sm sm:text-[15px] text-slate-600 font-normal leading-relaxed"
                >
                  {bonus.description}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* =====================================================================
            FAIXA DE VALORIZAÇÃO DO PACOTE COMPLETO DE BÔNUS
            3 níveis:
            1. VALOR TOTAL DOS BÔNUS (letras pequenas, maiúsculas)
            2. R$ 97,24 (riscado, preço antigo)
            3. Inclusos [GRÁTIS] no Pacote Completo! (selo branco com texto azul)
            ===================================================================== */}
        <div 
          id="faixa-valor-bonus"
          className="mt-8 sm:mt-10 md:mt-12 bg-[#26619C] text-white rounded-[20px] sm:rounded-[24px] p-5 sm:p-7 text-center max-w-xl mx-auto shadow-[0_12px_36px_rgba(38,97,156,0.22)] relative overflow-hidden"
        >
          {/* Efeito decorativo sutil de iluminação de fundo */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none" />

          <div className="relative z-10 space-y-1.5 sm:space-y-2.5">
            {/* Nível 1: Letras pequenas e maiúsculas */}
            <p 
              id="label-valor-total-bonus"
              className="text-[10px] sm:text-[11px] font-bold text-white/85 uppercase tracking-widest font-sans"
            >
              VALOR TOTAL DOS BÔNUS
            </p>

            {/* Nível 2: Preço antigo riscado */}
            <p 
              id="preco-riscado-bonus"
              className="text-lg sm:text-xl font-black text-white/75 line-through tracking-tight font-display"
            >
              R$ 97,24
            </p>

            {/* Nível 3: Inclusos [GRÁTIS] no Pacote Completo! */}
            <div 
              id="frase-gratis-pacote-completo"
              className="pt-1 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-base sm:text-xl font-black font-display text-white"
            >
              <span>Inclusos</span>
              <span className="bg-white text-[#26619C] font-black px-2.5 py-0.5 rounded-lg text-xs sm:text-base uppercase tracking-wider shadow-xs select-none">
                GRÁTIS
              </span>
              <span>no Pacote Completo!</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
