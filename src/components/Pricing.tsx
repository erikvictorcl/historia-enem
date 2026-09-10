import React, { useState } from 'react';
import { Check, ShieldCheck, ArrowRight } from 'lucide-react';
import { UpgradeModal } from './UpgradeModal';

export const Pricing: React.FC = () => {
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);

  const handleCheckout = (planName: string, price: string) => {
    // Ação de checkout transparente e responsiva
    console.log(`Checkout selecionado: ${planName} - ${price}`);
  };

  const handleBasicClick = () => {
    setIsUpgradeModalOpen(true);
  };

  const handleConfirmUpgrade = () => {
    setIsUpgradeModalOpen(false);
    handleCheckout('Pacote Completo', 'R$ 25,90');
  };

  const handleContinueBasic = () => {
    setIsUpgradeModalOpen(false);
    handleCheckout('Pacote Básico', 'R$ 14,90');
  };

  return (
    <section id="ofertas" className="w-full py-12 sm:py-16 md:py-20 bg-[#F8FAFC] border-t border-slate-200/80">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#244E73] bg-white border border-slate-200/90 px-3.5 py-1 rounded-full mb-2.5 shadow-2xs">
            ACESSO IMEDIATO
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1B3B57] tracking-tight font-display">
            Escolha o material ideal para suas aulas
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2.5 font-normal">
            Adquira materiais completos de História estruturados na matriz do ENEM e prontos para uso.
          </p>
        </div>

        {/* Grade de Ofertas: 2 Cards lado a lado no desktop, 1 coluna no mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto items-stretch">
          
          {/* =====================================================================
              CARD 1: PACOTE BÁSICO — R$ 14,90
              Clean, discreto, borda fina, sombra leve, sem vermelho
              ===================================================================== */}
          <div 
            id="card-pacote-basico"
            className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300"
          >
            <div>
              {/* Cabeçalho do Card */}
              <div className="text-center pb-5 border-b border-slate-100">
                <h3 
                  id="titulo-pacote-basico"
                  className="font-black text-2xl sm:text-3xl text-gray-900 font-display"
                >
                  Pacote Básico
                </h3>

                {/* Preço em verde */}
                <div className="my-3">
                  <div className="text-4xl sm:text-5xl font-black text-[#16A34A] tracking-tight font-display">
                    R$ 14,90
                  </div>
                  <span className="text-xs text-gray-500 font-medium block mt-1">
                    Pagamento único
                  </span>
                </div>
              </div>

              {/* Itens Inclusos (Checkmarks verdes) */}
              <div className="py-5">
                <ul className="space-y-3">
                  {[
                    'Material principal de História para o ENEM',
                    'Slides prontos para projetar em sala',
                    'Conteúdo visual e organizado',
                    'Acesso imediato'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                      <div className="mt-0.5 w-4 h-4 rounded-full bg-[#16A34A]/10 text-[#16A34A] flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Área discreta: NÃO INCLUSOS NESTE PACOTE (Em cinza claro, sem vermelho) */}
              <div className="bg-slate-50/80 border border-slate-200/70 rounded-2xl p-4 my-2">
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2.5">
                  NÃO INCLUSOS NESTE PACOTE:
                </p>
                <ul className="space-y-2 text-xs text-slate-400 font-medium">
                  {[
                    '+150 Mapas Mentais de História',
                    '+300 Atividades para Imprimir',
                    'Guia ENEM de História',
                    'Guia Anual de Planejamento'
                  ].map((naoIncluso, nIdx) => (
                    <li key={nIdx} className="flex items-center gap-2">
                      <span className="text-slate-400 font-bold text-xs shrink-0 select-none">✕</span>
                      <span className="leading-tight">{naoIncluso}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Botão de Compra do Pacote Básico */}
            <div className="pt-6 mt-4 border-t border-slate-100">
              <button
                type="button"
                id="btn-quero-pacote-basico"
                onClick={handleBasicClick}
                className="w-full bg-[#16A34A] hover:bg-[#15803D] text-white py-3.5 sm:py-4 px-6 rounded-2xl font-black text-sm sm:text-base tracking-wide cursor-pointer shadow-sm hover:shadow-md active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <span>Quero o Pacote Básico</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 mt-3 select-none">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                <span>Pagamento Seguro • Acesso Imediato</span>
              </div>
            </div>
          </div>

          {/* =====================================================================
              CARD 2: PACOTE COMPLETO — R$ 25,90
              Mais destaque, borda azul forte, selo MELHOR ESCOLHA, caixa de bônus
              ===================================================================== */}
          <div 
            id="card-pacote-completo"
            className="relative bg-white border-[3px] border-[#26619C] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl shadow-[#26619C]/10 md:scale-[1.02] transition-all duration-300"
          >
            {/* Selo no Topo: ⭐ MELHOR ESCOLHA */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#26619C] text-white text-[10px] sm:text-[11px] font-extrabold tracking-widest px-4 py-1 rounded-full uppercase flex items-center gap-1.5 shadow-sm whitespace-nowrap select-none">
              <span>⭐</span>
              <span>MELHOR ESCOLHA</span>
            </div>

            <div>
              {/* Cabeçalho do Card */}
              <div className="text-center pb-5 border-b border-slate-100 pt-1">
                <h3 
                  id="titulo-pacote-completo"
                  className="font-black text-2xl sm:text-3xl text-gray-900 font-display"
                >
                  Pacote Completo
                </h3>

                {/* Preço em verde com destaque grande */}
                <div className="my-3">
                  <div className="text-4xl sm:text-5xl font-black text-[#16A34A] tracking-tight font-display">
                    R$ 25,90
                  </div>
                  <span className="text-xs text-gray-500 font-medium block mt-1">
                    Pagamento único
                  </span>
                </div>
              </div>

              {/* Itens Inclusos (Checkmarks verdes) */}
              <div className="py-5">
                <ul className="space-y-3">
                  {[
                    'Material principal de História para o ENEM',
                    'Slides prontos para projetar em sala',
                    'Conteúdo visual e organizado',
                    'Acesso imediato',
                    'Todos os bônus exclusivos'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-bold text-gray-900">
                      <div className="mt-0.5 w-4 h-4 rounded-full bg-[#16A34A]/10 text-[#16A34A] flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Caixa interna com fundo azul-claro / cinza-azulado com os BÔNUS EXCLUSIVOS */}
              <div className="bg-[#F0F5FA] border border-[#D1E2F3] rounded-2xl p-4 sm:p-4.5 space-y-2.5 my-2">
                <p className="text-[11px] sm:text-xs font-black text-[#26619C] uppercase tracking-wide flex items-center gap-1.5">
                  <span role="img" aria-label="presente">🎁</span>
                  <span>BÔNUS EXCLUSIVOS INCLUSOS</span>
                </p>
                <div className="space-y-2">
                  {[
                    '+150 Mapas Mentais de História',
                    '+300 Atividades para Imprimir',
                    'Guia ENEM de História',
                    'Guia Anual de Planejamento'
                  ].map((bonusName, bIdx) => (
                    <div 
                      key={bIdx}
                      className="bg-white px-3 py-2 rounded-xl border border-blue-100/80 shadow-2xs text-xs font-bold text-slate-800 flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#26619C] shrink-0" />
                      <span className="leading-tight">{bonusName}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Botão de Compra Chamativo do Pacote Completo */}
            <div className="pt-6 mt-4 border-t border-slate-100">
              <button
                type="button"
                id="btn-quero-pacote-completo"
                onClick={() => handleCheckout('Pacote Completo', 'R$ 25,90')}
                className="w-full bg-[#16A34A] hover:bg-[#15803D] text-white py-4 px-6 rounded-2xl font-black text-base sm:text-lg tracking-wide cursor-pointer shadow-[0_10px_24px_rgba(22,163,74,0.3)] hover:shadow-[0_12px_28px_rgba(22,163,74,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <span>Quero o Pacote Completo</span>
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 mt-3 select-none">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                <span>Pagamento Seguro • Acesso Imediato</span>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Popup de Upgrade de Baixo Ticket (Pacote Básico -> Pacote Completo) */}
      <UpgradeModal
        isOpen={isUpgradeModalOpen}
        onClose={() => setIsUpgradeModalOpen(false)}
        onSelectUpgrade={handleConfirmUpgrade}
        onSelectBasic={handleContinueBasic}
      />
    </section>
  );
};
