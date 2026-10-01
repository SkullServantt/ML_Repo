export type Motorcycle = {
  name: string;
  category: "Street" | "Scooter" | "Naked" | "Adventure" | "Sport" | "Touring";
  description: string;
  image: string;
  featured?: boolean;
  officialUrl: string;
};

const honda = "https://www.honda.com.br/motos/modelos";

export const motorcycles: Motorcycle[] = [
  { name: "CG160 Start", category: "Street", description: "Prática para o dia a dia e para quem busca mobilidade.", image: "https://cmssaladeimprensa.honda.com.br/sites/default/files/2022-11/CG%20160%20Start_Azul%20Perolizado_%20%284%29_0.jpg", featured: true, officialUrl: honda },
  { name: "CG160 Fan", category: "Street", description: "Equilíbrio entre economia, robustez e uso urbano.", image: "https://cmssaladeimprensa.honda.com.br/sites/default/files/2022-11/FAN-LATERAL_0.png", featured: true, officialUrl: honda },
  { name: "CG160 Titan", category: "Street", description: "Visual marcante, tecnologia e presença para a cidade.", image: "https://cmssaladeimprensa.honda.com.br/sites/default/files/2022-11/CARROSEL_TITAN-LATERAL_0.png", featured: true, officialUrl: "https://www.honda.com.br/motos/street/city/cg-160-titan" },
  { name: "CG160 Cargo", category: "Street", description: "Uma opção voltada para quem trabalha sobre duas rodas.", image: "https://cmssaladeimprensa.honda.com.br/sites/default/files/2021-07/CG160CARGO%20%281%29.png", featured: false, officialUrl: honda },
  { name: "Pop110i ES", category: "Street", description: "Leve, simples e prática para a rotina urbana.", image: "https://cmssaladeimprensa.honda.com.br/sites/default/files/2024-04/Design%20sem%20nome%20%2851%29.png", featured: true, officialUrl: honda },
  { name: "Biz125", category: "Street", description: "Praticidade e facilidade para a mobilidade do dia a dia.", image: "https://cmssaladeimprensa.honda.com.br/sites/default/files/2024-08/GAL_Honda%20Biz%20125%20ES_2025_Vermelha_%20%282%29_1.jpg", featured: true, officialUrl: honda },
  { name: "Elite125", category: "Scooter", description: "Scooter compacta para mobilidade e praticidade.", image: "https://cmssaladeimprensa.honda.com.br/sites/default/files/2022-11/CARROS_ELITE125_pratametalico_lateral_4.png", featured: false, officialUrl: honda },
  { name: "PCX", category: "Scooter", description: "Conforto, tecnologia e praticidade para a cidade.", image: "https://cmssaladeimprensa.honda.com.br/sites/default/files/2022-09/taxo_PCX%20DLX_ESTUDIO_AZUL_%20%282%29.jpg", featured: true, officialUrl: honda },
  { name: "Honda ADV", category: "Scooter", description: "Scooter aventureira para cidade e novos caminhos.", image: "https://cmssaladeimprensa.honda.com.br/sites/default/files/2023-10/cross_ADV-Lateral-Verde.jpg", featured: false, officialUrl: honda },
  { name: "CB300F Twister", category: "Naked", description: "Naked de média cilindrada com proposta urbana e esportiva.", image: "https://cmssaladeimprensa.honda.com.br/sites/default/files/2024-07/CB300F%20Twister_0.png", featured: true, officialUrl: honda },
  { name: "NXR160 Bros", category: "Adventure", description: "Versátil para asfalto e terrenos não pavimentados.", image: "https://cmssaladeimprensa.honda.com.br/sites/default/files/2022-07/NXR%20160%20Bros_2022_3.jpg", featured: true, officialUrl: honda },
  { name: "XR300L Tornado", category: "Adventure", description: "Uma proposta on-off road para quem gosta de aventura.", image: "https://cmssaladeimprensa.honda.com.br/sites/default/files/2024-07/Tornado_Taxonomia_png.png", featured: true, officialUrl: honda },
  { name: "XRE190", category: "Adventure", description: "Aventureira compacta para diferentes tipos de uso.", image: "https://cmssaladeimprensa.honda.com.br/sites/default/files/2021-07/XRE190%20%281%29.png", featured: false, officialUrl: honda },
  { name: "XRE300 Sahara", category: "Adventure", description: "Aventureira para quem busca versatilidade e presença.", image: "https://cmssaladeimprensa.honda.com.br/sites/default/files/2023-11/MicrosoftTeams-image%20%2846%29.png", featured: false, officialUrl: honda },
  { name: "NX500", category: "Adventure", description: "Aventureira versátil para múltiplos usos.", image: "https://cmssaladeimprensa.honda.com.br/sites/default/files/2025-05/PROOM_Honda%20NX%20500_ESTUDIO_VERMELHO_%20%284%29_0.jpg", featured: false, officialUrl: honda },
  { name: "NC750X", category: "Adventure", description: "Touring e adventure com foco em conforto e versatilidade.", image: "https://cmssaladeimprensa.honda.com.br/sites/default/files/2022-07/Honda%20NC750X_ESTUDIO_%20%282%29_VERMELHA_0.jpg", featured: false, officialUrl: honda },
  { name: "XL750 Transalp", category: "Adventure", description: "Aventureira para grandes viagens e novos caminhos.", image: "https://cmssaladeimprensa.honda.com.br/sites/default/files/2025-11/MINIATURA_XL750%20Transalp_.jpg", featured: false, officialUrl: honda },
  { name: "CRF1100L Africa Twin", category: "Adventure", description: "Uma referência Honda para longas aventuras.", image: "https://cmssaladeimprensa.honda.com.br/sites/default/files/2022-01/CRF%201100L.png", featured: false, officialUrl: honda },
  { name: "CBR1000RR-R Fireblade SP", category: "Sport", description: "Esportiva de alta performance da Honda.", image: "https://cmssaladeimprensa.honda.com.br/sites/default/files/2022-01/CBR%201000RR-R.png", featured: false, officialUrl: honda },
  { name: "GL1800 Gold Wing Tour", category: "Touring", description: "Touring premium para viagens de longa distância.", image: "https://cmssaladeimprensa.honda.com.br/sites/default/files/2023-10/PROOM_Studio_GOLD%20WING_CANDY%20ARDENT%20RED_angle006_50_0.jpg", featured: false, officialUrl: honda },
];
