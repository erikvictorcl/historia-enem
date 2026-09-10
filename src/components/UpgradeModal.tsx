import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectUpgrade: () => void;
  onSelectBasic: () => void;
}

export const UpgradeModal: React.FC<UpgradeModalProps> = ({
  isOpen,
  onClose,
  onSelectUpgrade,
  onSelectBasic,
}) => {
  // Previne rolagem do fundo quando o popup está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Fecha o popup ao pressionar a tecla ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      id="upgrade-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/65 backdrop-blur-xs transition-opacity duration-200"
      onClick={(e) => {
        // Fecha ao clicar fora da caixa do popup
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      aria-modal="true"
      role="dialog"
      aria-labelledby="titulo-popup-upgrade"
    >
      {/* Caixa Principal do Popup (520px a 580px no desktop, 90-94% no mobile) */}
      <div 
        id="upgrade-modal-card"
        className="relative w-[92%] sm:w-full max-w-[540px] bg-white rounded-[24px] sm:rounded-3xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col max-h-[92vh] animate-in fade-in zoom-in-95 duration-150"
      >
        {/* CABEÇALHO: Faixa azul forte ocupando toda a largura */}
        <div className="bg-[#26619C] text-white px-4 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between relative rounded-t-[24px] sm:rounded-t-3xl select-none">
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-center flex-1 pr-6 pl-2">
            <span className="text-base sm:text-lg shrink-0">🎁</span>
            <h3 
              id="titulo-popup-upgrade"
              className="text-xs xs:text-sm sm:text-base font-black tracking-tight text-white leading-snug"
            >
              ESPERE! Vai deixar esses bônus incríveis?
            </h3>
          </div>

          {/* Botão circular discreto com X para fechar */}
          <button
            type="button"
            id="btn-fechar-popup"
            onClick={onClose}
            aria-label="Fechar"
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-all cursor-pointer shrink-0 absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 active:scale-95"
          >
            <X className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

        {/* CORPO DO POPUP COM ROLAGEM INTERNA CASO A TELA SEJA PEQUENA */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-3.5 sm:space-y-4 text-center">
          
          {/* AVISO DO PACOTE BÁSICO */}
          <div className="space-y-2">
            <p className="font-extrabold text-xs sm:text-sm tracking-wide uppercase">
              <span className="text-[#1B3B57]">O PACOTE BÁSICO </span>
              <span className="text-red-600">NÃO INCLUI:</span>
            </p>

            {/* Caixa Vermelha Muito Clara */}
            <div className="bg-red-50/80 border border-red-200/70 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-left space-y-2">
              {[
                '+150 Mapas Mentais de História',
                '+300 Atividades para Imprimir',
                'Guia ENEM de História',
                'Guia Anual de Planejamento'
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-2 sm:gap-2.5 text-xs sm:text-[13px] font-bold text-[#7F1D1D] leading-tight"
                >
                  <span className="text-red-600 font-extrabold text-xs sm:text-sm shrink-0 select-none">✕</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* BLOCO DE UPGRADE: Card Verde Muito Claro */}
          <div className="bg-[#F0FDF4] border border-emerald-200/80 rounded-xl sm:rounded-2xl p-3.5 sm:p-4.5 text-center space-y-1 sm:space-y-1.5 shadow-2xs">
            <p className="text-xs sm:text-sm font-extrabold text-emerald-900">
              Por apenas <span className="text-emerald-700 font-black">+ R$ 17,90</span>, destrave o
            </p>
            <p className="text-xl sm:text-2xl md:text-[26px] font-black text-[#16A34A] tracking-tight font-display uppercase leading-tight">
              PACOTE COMPLETO
            </p>
            <p className="text-[11px] sm:text-xs font-bold text-emerald-800/85">
              com todos os Bônus Exclusivos
            </p>
          </div>

          {/* ÁREA DE BOTÕES */}
          <div className="pt-1 sm:pt-2 space-y-2 sm:space-y-2.5">
            {/* BOTÃO PRINCIPAL: Verde, Grande, Destaque */}
            <button
              type="button"
              id="btn-aceitar-upgrade"
              onClick={onSelectUpgrade}
              className="w-full bg-[#16A34A] hover:bg-[#15803D] text-white py-3.5 sm:py-4 px-4 rounded-2xl font-black text-sm sm:text-base tracking-wide cursor-pointer shadow-[0_8px_20px_rgba(22,163,74,0.3)] hover:shadow-[0_10px_24px_rgba(22,163,74,0.4)] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <span>SIM! Quero o Pacote Completo por + R$ 17,90</span>
            </button>

            {/* BOTÃO SECUNDÁRIO: Branco com borda cinza clara */}
            <button
              type="button"
              id="btn-recusar-upgrade"
              onClick={onSelectBasic}
              className="w-full bg-white hover:bg-slate-50 border border-slate-200/90 text-slate-500 hover:text-slate-700 py-2.5 sm:py-3 px-4 rounded-2xl font-bold text-xs sm:text-sm cursor-pointer transition-colors block text-center"
            >
              <span>Continuar apenas com o Pacote Básico</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
