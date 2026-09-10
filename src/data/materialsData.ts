import { MaterialImageItem, PricingOption } from '../types';

/**
 * Arrays dedicados para as duas esteiras do Carrossel de Slides de História (16:9).
 * Imagens reais dos materiais de História em formato widescreen (1920x1080).
 */
export const slidesRow1: MaterialImageItem[] = [
  { 
    id: 'slide-r1-1', 
    label: 'Slide 01 • História', 
    alt: 'Apresentação de Slides de História 01', 
    src: 'https://i.imgur.com/HR7JrQe.jpeg' 
  },
  { 
    id: 'slide-r1-2', 
    label: 'Slide 02 • História', 
    alt: 'Apresentação de Slides de História 02', 
    src: 'https://i.imgur.com/yuQMyb1.jpeg' 
  },
  { 
    id: 'slide-r1-3', 
    label: 'Slide 03 • História', 
    alt: 'Apresentação de Slides de História 03', 
    src: 'https://i.imgur.com/JcDiBsI.jpeg' 
  },
  { 
    id: 'slide-r1-4', 
    label: 'Slide 04 • História', 
    alt: 'Apresentação de Slides de História 04', 
    src: 'https://i.imgur.com/IlnxATT.jpeg' 
  },
  { 
    id: 'slide-r1-5', 
    label: 'Slide 05 • História', 
    alt: 'Apresentação de Slides de História 05', 
    src: 'https://i.imgur.com/cFcGIwm.jpeg' 
  },
];

export const slidesRow2: MaterialImageItem[] = [
  { 
    id: 'slide-r2-1', 
    label: 'Slide 06 • História', 
    alt: 'Apresentação de Slides de História 06', 
    src: 'https://i.imgur.com/ifJ4pfF.jpeg' 
  },
  { 
    id: 'slide-r2-2', 
    label: 'Slide 07 • História', 
    alt: 'Apresentação de Slides de História 07', 
    src: 'https://i.imgur.com/Y52Cld3.jpeg' 
  },
  { 
    id: 'slide-r2-3', 
    label: 'Slide 08 • História', 
    alt: 'Apresentação de Slides de História 08', 
    src: 'https://i.imgur.com/MzmORQ1.jpeg' 
  },
  { 
    id: 'slide-r2-4', 
    label: 'Slide 09 • História', 
    alt: 'Apresentação de Slides de História 09', 
    src: 'https://i.imgur.com/pEzVkbe.jpeg' 
  },
];

export const slidesImages: MaterialImageItem[] = [...slidesRow1, ...slidesRow2];

/**
 * Array dedicado para os Mapas Mentais de História (Formato A4/Vertical).
 * Insira o caminho das imagens reais em 'src' quando estiverem disponíveis.
 */
export const mindMapsImages: MaterialImageItem[] = [
  { id: 'map-1', label: 'Mapa Mental 01', alt: 'Mapa Mental de História 01' },
  { id: 'map-2', label: 'Mapa Mental 02', alt: 'Mapa Mental de História 02' },
  { id: 'map-3', label: 'Mapa Mental 03', alt: 'Mapa Mental de História 03' },
  { id: 'map-4', label: 'Mapa Mental 04', alt: 'Mapa Mental de História 04' },
  { id: 'map-5', label: 'Mapa Mental 05', alt: 'Mapa Mental de História 05' },
];

/**
 * Array dedicado para as Atividades de História (Formato A4/Folha).
 * Insira o caminho das imagens reais em 'src' quando estiverem disponíveis.
 */
export const activitiesImages: MaterialImageItem[] = [
  { id: 'act-1', label: 'Atividade 01', alt: 'Atividade de História 01' },
  { id: 'act-2', label: 'Atividade 02', alt: 'Atividade de História 02' },
  { id: 'act-3', label: 'Atividade 03', alt: 'Atividade de História 03' },
  { id: 'act-4', label: 'Atividade 04', alt: 'Atividade de História 04' },
  { id: 'act-5', label: 'Atividade 05', alt: 'Atividade de História 05' },
];

/**
 * Ofertas e preços preservados rigorosamente sem alterações
 */
export const PRICING_OPTIONS: PricingOption[] = [
  {
    id: 'essencial',
    name: 'Pacote Essencial',
    badge: 'Aulas Prontas',
    isFeatured: false,
    priceCash: 'R$ 47',
    installments: 'ou 5x de R$ 10,23',
    description: 'Para o professor que precisa de agilidade imediata nos slides e atividades do ano letivo.',
    features: [
      'Coleção de Slides de História em 16:9',
      'Mais de 250 Atividades com Gabarito Comentado',
      'Conteúdo estruturado por eixos temáticos do ENEM',
      'Formato 100% editável (PowerPoint e PDF)',
      'Acesso imediato para download'
    ],
    buttonText: 'QUERO O PACOTE ESSENCIAL',
    checkoutUrl: '#checkout-essencial'
  },
  {
    id: 'combo-completo',
    name: 'Combo Completo ENEM',
    badge: 'Mais Recomendado',
    isFeatured: true,
    priceCash: 'R$ 87',
    installments: 'ou 10x de R$ 9,90',
    description: 'O acervo definitivo de História: do 6º ano do Fundamental ao 3º ano do Ensino Médio.',
    features: [
      'Todos os Slides de História em formato cinematográfico (16:9)',
      'Todos os Mapas Mentais em alta definição prontos para impressão',
      'Banco completo de Atividades alinhadas às Habilidades da Matriz ENEM',
      'Cronogramas de aulas e planos bimestrais organizados',
      'Acesso vitalício com atualizações de temas recorrentes',
      'Suporte direto para dúvidas pedagógicas'
    ],
    buttonText: 'QUERO O COMBO COMPLETO',
    checkoutUrl: '#checkout-completo'
  }
];
