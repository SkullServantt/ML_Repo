export type Motorcycle = {
  id: string;
  name: string;
  category: "Street" | "Scooter" | "Adventure" | "Sport" | "Touring" | "Off Road";
  price?: number;
  cc?: string;
  power?: string;
  fuel?: string;
  image?: string;
  description: string;
  benefit: string;
  tags: string[];
};

export const motorcycles: Motorcycle[] = [
  { id:"cg-160-start", name:"CG 160 Start", category:"Street", price:17350, cc:"160 cc", fuel:"Flex", description:"Praticidade para a rotina urbana.", benefit:"Uma opção direta para quem procura mobilidade e uso diário.", tags:["trabalho","cidade"] },
  { id:"cg-160-fan", name:"CG 160 Fan", category:"Street", price:18980, cc:"160 cc", fuel:"Flex", description:"Equilíbrio entre praticidade e estilo.", benefit:"Uma escolha versátil para trabalho, deslocamentos e lazer.", tags:["trabalho","cidade","estilo"] },
  { id:"cg-160-titan", name:"CG 160 Titan", category:"Street", price:20590, cc:"160 cc", fuel:"Flex", description:"Presença, tecnologia e tradição.", benefit:"Para quem quer uma CG com visual marcante e conjunto completo.", tags:["trabalho","cidade","estilo"] },
  { id:"cg-160-cargo", name:"CG 160 Cargo", category:"Street", price:18390, cc:"160 cc", fuel:"Flex", description:"Pensada para a rotina de trabalho.", benefit:"Uma alternativa voltada para quem precisa de praticidade no dia a dia.", tags:["trabalho"] },
  { id:"pop-110i-es", name:"Pop110i ES", category:"Street", price:10588, cc:"110 cc", fuel:"Flex", description:"Compacta e prática para a cidade.", benefit:"Uma proposta simples para quem busca mobilidade urbana.", tags:["trabalho","cidade"] },
  { id:"biz-125", name:"Biz 125", category:"Street", price:13505, cc:"125 cc", fuel:"Flex", description:"Praticidade para a mobilidade urbana.", benefit:"Facilidade para os deslocamentos cotidianos.", tags:["cidade","trabalho"] },
  { id:"elite-125", name:"Elite 125", category:"Scooter", price:14440, cc:"125 cc", fuel:"Flex", description:"Scooter urbana de proposta prática.", benefit:"Uma alternativa para quem prioriza praticidade na cidade.", tags:["cidade","estilo"] },
  { id:"pcx", name:"PCX", category:"Scooter", price:19080, cc:"160 cc", fuel:"Gasolina", description:"Conforto e tecnologia para a rotina.", benefit:"Uma scooter para quem quer combinar mobilidade com uma experiência mais sofisticada.", tags:["cidade","estilo"] },
  { id:"adv", name:"Honda ADV", category:"Scooter", price:26030, cc:"160 cc", fuel:"Gasolina", description:"Versatilidade com proposta aventureira.", benefit:"Para quem quer uma scooter com visual e proposta mais aventureiros.", tags:["cidade","aventura","estilo"] },
  { id:"cb300f", name:"CB300F Twister", category:"Street", price:26880, cc:"300 cc", fuel:"Flex", description:"Esportividade para a rotina.", benefit:"Uma naked para quem quer mais desempenho e presença sem abrir mão do uso urbano.", tags:["cidade","estrada","estilo"] },
  { id:"bros-160", name:"NXR160 Bros", category:"Adventure", price:22400, cc:"160 cc", fuel:"Flex", description:"Versatilidade dentro e fora da cidade.", benefit:"Uma opção para quem alterna entre asfalto, ruas irregulares e lazer.", tags:["trabalho","cidade","aventura"] },
  { id:"xre190", name:"XRE190", category:"Adventure", price:24530, cc:"190 cc", fuel:"Flex", description:"Proposta aventureira para diferentes rotinas.", benefit:"Para quem quer versatilidade e uma posição de pilotagem mais aventureira.", tags:["aventura","estrada"] },
  { id:"xre300-sahara", name:"XRE300 Sahara", category:"Adventure", price:31855, cc:"300 cc", fuel:"Flex", description:"Aventura, tecnologia e versatilidade.", benefit:"Para quem busca uma moto capaz de acompanhar diferentes tipos de trajeto.", tags:["aventura","estrada","estilo"] },
  { id:"xr300l-tornado", name:"XR300L Tornado", category:"Adventure", price:31700, cc:"300 cc", fuel:"Gasolina", description:"Pegada on-off road.", benefit:"Uma proposta para quem quer sair do asfalto e explorar novos caminhos.", tags:["aventura","estrada"] },
  { id:"cb500-hornet", name:"CB500 Hornet", category:"Street", price:43470, cc:"500 cc", fuel:"Gasolina", description:"Desempenho e personalidade.", benefit:"Uma opção para quem busca uma experiência mais forte na estrada e na cidade.", tags:["estrada","estilo"] },
  { id:"cb750-hornet", name:"CB750 Hornet", category:"Street", price:53694, cc:"750 cc", fuel:"Gasolina", description:"Performance com personalidade.", benefit:"Para quem procura uma naked de maior cilindrada e presença.", tags:["estrada","estilo"] },
  { id:"xl750-transalp", name:"XL750 Transalp", category:"Adventure", price:65545, cc:"750 cc", fuel:"Gasolina", description:"Longas viagens e espírito aventureiro.", benefit:"Uma plataforma voltada para quem quer viajar e explorar diferentes caminhos.", tags:["estrada","aventura"] },
  { id:"africa-twin", name:"CRF1100L Africa Twin", category:"Adventure", price:85500, cc:"1100 cc", fuel:"Gasolina", description:"Adventure de alta cilindrada.", benefit:"Para quem procura uma motocicleta voltada a grandes viagens e exploração.", tags:["estrada","aventura"] },
  { id:"cbr1000rrr", name:"CBR1000RR-R FIREBLADE SP", category:"Sport", price:189174, cc:"1000 cc", fuel:"Gasolina", description:"Uma esportiva de alto desempenho.", benefit:"Para quem busca uma experiência esportiva em uma motocicleta de alta cilindrada.", tags:["estrada","estilo"] },
  { id:"gold-wing", name:"GL1800 Gold Wing Tour", category:"Touring", price:304450, cc:"1800 cc", fuel:"Gasolina", description:"Turismo premium em duas rodas.", benefit:"Para quem coloca viagens e conforto em primeiro lugar.", tags:["estrada","estilo"] }
];