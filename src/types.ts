export interface MaterialImageItem {
  id: string;
  label: string;
  src?: string;
  alt?: string;
}

export interface PricingOption {
  id: string;
  name: string;
  badge?: string;
  isFeatured?: boolean;
  priceCash: string;
  installments: string;
  description: string;
  features: string[];
  buttonText: string;
  checkoutUrl?: string;
}

