/**
 * Fotos do site. Para trocar uma imagem:
 * 1. Exporte WebP no tamanho indicado
 * 2. Substitua o arquivo em public/assets/ (mesmo nome)
 * 3. Pronto — o site usa só este arquivo
 */
export const photos = {
  logo: {
    src: "/assets/logo.webp",
    alt: "INSPEM — Instituto Percepção de Psicologia Empírica",
    width: 480,
    height: 120,
  },
  hero: {
    src: "/assets/hero.webp",
    alt: "Ingrid Francke na entrada do consultório do INSPEM, no bairro Bom Fim, em Porto Alegre",
    caption: "Ingrid Francke na entrada do consultório, Bom Fim",
    width: 1100,
    height: 1400,
  },
  equipe: {
    src: "/assets/equipe.webp",
    alt: "Equipe da INSPEM: supervisoras e estagiários no consultório, no Bom Fim",
    caption: "A equipe da INSPEM no consultório, Bom Fim — Porto Alegre",
    width: 1600,
    height: 1300,
  },
  simone: {
    src: "/assets/supervisora-simone.webp",
    alt: "Simone, supervisora clínica da INSPEM",
    width: 250,
    height: 315,
  },
  ingrid: {
    src: "/assets/supervisora-ingrid.webp",
    alt: "Ingrid Francke, supervisora clínica da INSPEM",
    width: 250,
    height: 315,
  },
  fachada: {
    src: "/assets/fachada.webp",
    alt: "Fachada do Edifício Baltimore à noite, na Av. Osvaldo Aranha, 1022",
    caption: "Edifício Baltimore — fachada e acesso",
    width: 1600,
    height: 480,
    wide: true,
  },
  espera: {
    src: "/assets/sala-espera.webp",
    alt: "Sala de espera da clínica INSPEM",
    caption: "Sala de espera",
    width: 1000,
    height: 480,
    wide: false,
  },
  entrada: {
    src: "/assets/entrada.webp",
    alt: "Entrada do consultório INSPEM",
    caption: "Entrada do consultório",
    width: 1200,
    height: 480,
    wide: false,
  },
  atendimento: {
    src: "/assets/sala-atendimento.webp",
    alt: "Sala de atendimento da clínica INSPEM",
    caption: "Sala de atendimento",
    width: 1200,
    height: 480,
    wide: true,
  },
  salaEquipe: {
    src: "/assets/sala-equipe.webp",
    alt: "Sala da equipe da clínica INSPEM",
    caption: "Sala da equipe",
    width: 800,
    height: 600,
    wide: true,
  },
} as const;

export const galleryHero = photos.fachada;

export const galleryRooms = [
  photos.atendimento,
  photos.espera,
  photos.entrada,
  photos.salaEquipe,
];
