import React from 'react';

export const TopBanner: React.FC = () => {
  // Sempre garante a data de hoje formatada, com fallback exato para 10 de setembro
  const currentDateFormatted = React.useMemo(() => {
    try {
      const now = new Date();
      const day = now.getDate();
      const months = [
        'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
        'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
      ];
      return `${day} de ${months[now.getMonth()]}`;
    } catch {
      return '10 de setembro';
    }
  }, []);

  return (
    <aside 
      id="top-announcement-bar"
      className="w-full bg-[#B8422F] text-white py-2.5 px-4 text-center text-xs sm:text-sm font-normal shadow-xs z-50 relative select-none"
      aria-label="Aviso de urgência e encerramento de oferta"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-2">
        <span className="text-amber-300 text-sm leading-none shrink-0" aria-hidden="true">
          ⚠️
        </span>
        <p className="leading-tight">
          <strong className="font-bold">Atenção:</strong> oferta e bônus encerram hoje, {currentDateFormatted}
        </p>
      </div>
    </aside>
  );
};
