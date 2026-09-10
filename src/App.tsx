import React from 'react';
import { Hero } from './components/Hero';
import { SlidesCarousel } from './components/SlidesCarousel';
import { SlidesCtaBanner } from './components/SlidesCtaBanner';
import { ExclusiveBonuses } from './components/ExclusiveBonuses';
import { Pricing } from './components/Pricing';
import { AccessSteps } from './components/AccessSteps';
import { TestimonialsCarousel } from './components/TestimonialsCarousel';
import { Guarantee } from './components/Guarantee';

export default function App() {
  return (
    <main className="w-full min-h-screen bg-[#FAF9F6] text-[#1E293B]">
      {/* 1. HERO */}
      <Hero />

      {/* 2. SEÇÃO DE SLIDES — CARROSSEL */}
      <SlidesCarousel />

      {/* 2.1. FAIXA DE CTA PÓS-SLIDES */}
      <SlidesCtaBanner />

      {/* 3. SEÇÃO DE BÔNUS EXCLUSIVOS */}
      <ExclusiveBonuses />

      {/* 4. SEÇÃO DE OFERTAS */}
      <Pricing />

      {/* 5. COMO VOCÊ VAI RECEBER O ACESSO */}
      <AccessSteps />

      {/* 6. SEÇÃO DE DEPOIMENTOS */}
      <TestimonialsCarousel />

      {/* 7. SEÇÃO DE GARANTIA */}
      <Guarantee />
    </main>
  );
}
