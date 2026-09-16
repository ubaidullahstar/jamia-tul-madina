export const jamia = {
  name: "Jamia Tul Madina Khanqah Sharif",
  fullName:
    "Jamia Tul Madina Faizan e Madina, K.L.P Road, Khanqah Sharif, Bahawalpur",
  founded: "2010",
  parent: "Dawat-e-Islami (Education Department)",
  mottoUrdu: "میں اپنی اور ساری دنیا کے لوگوں کی اصلاح کی کوشش کروں گا",
  mottoEnglish:
    "I must strive to reform myself and the people of the entire world",
  phone: "03066862692",
  whatsapp: "03066862692",
  email: "Jamiakhanqah@gmail.com",
  facebook: "#",
  address:
    "Jamia Tul Madina Faizan e Madina, K.L.P Road, Khanqah Sharif, Bahawalpur",
} as const;

export const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "History", to: "/history" },
  { label: "Administration", to: "/administration" },
  { label: "Faculty", to: "/faculty" },
  { label: "Courses", to: "/courses" },
  { label: "Board Positions", to: "/board-positions" },
  { label: "Awards", to: "/awards" },
  { label: "Campus", to: "/campus" },
  { label: "Events", to: "/events" },
  { label: "Gallery", to: "/gallery" },
  { label: "Admissions", to: "/admissions" },
  { label: "Contact", to: "/contact" },
] as const;

export const ayah = {
  arabic: "وَقُل رَّبِّ زِدْنِى عِلْمًا",
  translation: "And say: My Lord, increase me in knowledge.",
  reference: "Surah Ta-Ha, Verse 114",
} as const;

export const hadith = {
  arabic: "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ",
  translation:
    "The best among you are those who learn the Qur'an and teach it.",
  reference: "Sahih al-Bukhari",
} as const;

export const featuredPosition = {
  student: "Muhammad Muzammil Nawaz",
  position: "2nd Position",
  className: "Matric — Arts Group",
  marks: "1052 / 1200",
  percentage: "87.67%",
  year: "2024",
  board: "B.I.S.E Bahawalpur",
  level: "Division Level",
} as const;

export const stats = [
  { value: 200, suffix: "", label: "Students" },
  { value: 0, suffix: "", label: "Teachers", placeholder: true },
  { value: 15, suffix: "+", label: "Years of Service" },
  { value: 1, suffix: "", label: "Board Position" },
] as const;

export const courses = [
  {
    title: "Dars-e-Nizami",
    urdu: "درسِ نظامی",
    duration: "8 Years",
    detail:
      "The complete traditional Islamic sciences curriculum, equivalent to M.A Arabic on completion.",
  },
  {
    title: "Matric",
    urdu: "میٹرک",
    duration: "2 Years",
    detail:
      "Contemporary secondary education alongside Islamic studies, examined by the local board.",
  },
  {
    title: "F.A",
    urdu: "ایف اے",
    duration: "2 Years",
    detail:
      "Intermediate level contemporary education continuing alongside the Deeni curriculum.",
  },
] as const;

export const facilities = [
  { label: "Library", detail: "Study and reference resources for students." },
  { label: "Medical Facility", detail: "On-campus care for resident students." },
  { label: "R.O Water Plants", detail: "Clean, filtered drinking water." },
  { label: "Quality Meals", detail: "Prepared daily for resident students." },
  { label: "Hostel", detail: "120 residential students accommodated." },
  { label: "Free Laundry", detail: "Provided for resident students." },
] as const;

export const developer = {
  name: "Muzammil Nawaz",
  links: [
    { label: "WhatsApp", url: "https://wa.me/+923057954200/" },
    { label: "Facebook", url: "https://www.facebook.com/themuzammilnawaz/" },
    { label: "Instagram", url: "https://www.instagram.com/themuzammilnawaz/" },
    { label: "X", url: "https://x.com/themuzammilnawaz/" },
    { label: "GitHub", url: "https://www.github.com/themuzammilnawaz/" },
  ],
} as const;
