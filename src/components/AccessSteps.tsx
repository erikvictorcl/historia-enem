import React from 'react';

export const AccessSteps: React.FC = () => {
  const steps = [
    {
      number: '1',
      text: 'A compra é confirmada na hora via Pix ou Cartão',
    },
    {
      number: '2',
      text: 'Você recebe o link de acesso por e-mail',
    },
    {
      number: '3',
      text: 'Você acessa os materiais no Google Drive, escolhe o conteúdo e já pode utilizar em sala de aula',
    },
  ];

  return (
    <section 
      id="como-receber-acesso" 
      className="w-full py-12 sm:py-16 md:py-20 bg-[#FAF9F6] border-t border-slate-200/80"
      aria-label="Como você vai receber o acesso"
    >
      <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Cabeçalho da Seção */}
        <div className="mb-8 sm:mb-10">
          <h2 
            id="titulo-como-receber-acesso"
            className="text-2xl sm:text-3xl font-extrabold text-[#1B3B57] font-display tracking-tight leading-tight mb-3"
          >
            Como você vai receber o acesso
          </h2>
          <div className="w-12 h-1 bg-[#26619C] mx-auto rounded-full" />
        </div>

        {/* 3 Passos em Cards Horizontais Brancos com Cantos Arredondados */}
        <div className="space-y-3.5 sm:space-y-4 text-left">
          {steps.map((step, index) => (
            <div 
              key={index}
              id={`card-passo-acesso-${step.number}`}
              className="flex items-center gap-3.5 sm:gap-4 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/85 shadow-xs hover:shadow-sm transition-all duration-200"
            >
              {/* Círculo Azul com o Número */}
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#26619C] text-white flex items-center justify-center font-bold text-sm sm:text-base shrink-0 shadow-xs select-none">
                {step.number}
              </div>

              {/* Texto do Passo */}
              <p className="text-xs sm:text-sm md:text-[15px] text-slate-800 font-semibold leading-snug">
                {step.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
