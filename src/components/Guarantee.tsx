import React from 'react';
import { ShieldCheck, Award } from 'lucide-react';

export const Guarantee: React.FC = () => {
  return (
    <section id="garantia" className="w-full py-8 sm:py-10 bg-white border-t border-slate-200/60">
      <div className="max-w-[760px] mx-auto px-4 sm:px-6 text-center">
        
        {/* Subtle Guarantee Seal */}
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#EBF2F8] border-2 border-[#244E73]/30 text-[#244E73] shadow-xs mb-4">
          <ShieldCheck className="w-7 h-7 text-[#244E73]" />
        </div>

        {/* Guarantee Headline */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B3B57] tracking-tight font-display">
          Você tem 7 dias para conhecer o material
        </h2>

        {/* Short, reassuring explanation */}
        <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed max-w-xl mx-auto font-normal">
          Você pode acessar o conteúdo e avaliar com tranquilidade. Se dentro de 7 dias entender que o material não é para você, basta solicitar o reembolso conforme as condições da plataforma.
        </p>

        {/* Small discreet badge */}
        <div className="mt-5 inline-flex items-center gap-1.5 text-xs text-slate-400 font-medium">
          <Award className="w-3.5 h-3.5 text-[#244E73]" />
          <span>Garantia incondicional de 7 dias</span>
        </div>

      </div>
    </section>
  );
};
