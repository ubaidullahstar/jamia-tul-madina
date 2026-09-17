/** Real photographs supplied by the Jamia, served from /public. */
export const img = {
  logo: "/logo.jpeg",
  campusFront: "/campus-front.jpeg",
  teachersGroup: "/teachers-group.jpeg",
  ijtema1: "/ijtema-1.jpeg",
  ijtema2: "/ijtema-2.jpeg",
  ijtema3: "/ijtema-3.jpeg",
  resultPoster2023: "/result-2023-poster.jpeg",
  positionHolder: "/position-holder-muzammil.jpeg",
  positionCeremony: "/position-holder-ceremony.jpeg",
  awardBanner2019: "/award-banner-2019.jpeg",
  awardNews: "/award-news.jpeg",
  bestTeacher: "/best-teacher.jpeg",
  principal: "/principal-zulfaqar.jpeg",
} as const;

export const galleryImages = [
  { src: img.campusFront, alt: "Jamia campus courtyard and classrooms" },
  { src: img.teachersGroup, alt: "Teachers of the Jamia at the building front" },
  { src: img.ijtema1, alt: "Night ijtema gathering at the Jamia" },
  { src: img.ijtema2, alt: "Ijtema stage and gathering" },
  { src: img.ijtema3, alt: "Aerial view of the ijtema gathering" },
  { src: img.resultPoster2023, alt: "9th class 2023 position holders of the Jamia" },
  { src: img.positionHolder, alt: "Muhammad Muzammil Nawaz receiving his certificate of merit" },
  { src: img.bestTeacher, alt: "Best Teacher Award 2024 recipient" },
] as const;
