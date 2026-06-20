// Sample content for the AndQXAI website (Uzbek, Latin script).
export const SiteData = {
  nav: [
    { label: "Institut", key: "structure" },
    { label: "Dasturlar", key: "programs" },
    { label: "Qabul", key: "admission" },
    { label: "Yangiliklar", key: "news" },
    { label: "Tadbirlar", key: "events" },
    { label: "Talabalarga", key: "dormitory" },
  ],
  stats: [
    { value: "23", suffix: "K+", label: "Bitiruvchi mutaxassis" },
    { value: "60", suffix: "+", label: "Yillik tajriba" },
    { value: "5", label: "Fakultet" },
    { value: "60", suffix: "+", label: "Xorijiy hamkor" },
  ],
  quickLinks: [
    { icon: "cap", title: "Qabul – 2026", text: "Bakalavr va magistratura uchun hujjat topshirish", key: "admission" },
    { icon: "book", title: "Ta'lim dasturlari", text: "5 fakultet, 20+ yo'nalish bo'yicha mutaxassisliklar", key: "programs" },
    { icon: "building", title: "Institut tuzilmasi", text: "Fakultetlar, kafedralar va boshqaruv", key: "structure" },
    { icon: "bed", title: "Talabalar turar joyi", text: "Zamonaviy yotoqxona va ijtimoiy hayot", key: "dormitory" },
  ],
  faculties: [
    { icon: "leaf", name: "Agrobiologiya", majors: ["O'simlikshunoslik", "Agrokimyo va tuproqshunoslik", "Seleksiya va urug'chilik", "O'simliklar himoyasi"] },
    { icon: "tractor", name: "Agroinjeneriya va gidromelioratsiya", majors: ["Qishloq xo'jaligini mexanizatsiyalashtirish", "Gidrotexnika inshootlari", "Suv resurslarini boshqarish"] },
    { icon: "building", name: "Agrobiznes va raqamli iqtisodiyot", majors: ["Agrologistika", "Moliya va marketing", "Agrobiznesni boshqarish"] },
    { icon: "flask", name: "Veterinariya va zootexniya", majors: ["Veterinariya tibbiyoti", "Zootexniya", "Chorvachilik mahsulotlari"] },
    { icon: "leaf", name: "O'rmon va meva-sabzavotchilik", majors: ["O'rmon xo'jaligi", "Bog'dorchilik", "Sabzavotchilik"] },
  ],
  news: [
    { tag: "Tadbir", date: "04 Iyun 2026", title: "Talaba-qizlar va ota-onalar forumi o'tkazildi", excerpt: "Institutda talaba-qizlar va ularning ota-onalari ishtirokida ochiq muloqot forumi bo'lib o'tdi.", icon: "users", featured: true },
    { tag: "Rasmiy", date: "25 May 2026", title: "Prezident tabrigi maktab bitiruvchilariga yetkazildi", excerpt: "Bitiruvchilarga Prezidentning bayram tabrigi tantanali ravishda taqdim etildi.", icon: "award" },
    { tag: "Yoshlar", date: "21 May 2026", title: "Yoshlar bilan ochiq muloqot tashkil etildi", excerpt: "Institut rahbariyati talabalar bilan ochiq muloqot va savol-javob uchrashuvini o'tkazdi.", icon: "users" },
    { tag: "Ilmiy", date: "12 May 2026", title: "Agrotexnologiyalar bo'yicha xalqaro konferensiya", excerpt: "60 dan ortiq xorijiy universitet vakillari ishtirokida ilmiy-amaliy anjuman bo'lib o'tdi.", icon: "flask" },
    { tag: "Hamkorlik", date: "30 Apr 2026", title: "Germaniya universitetlari bilan amaliyot dasturi", excerpt: "Talabalar uchun xorijda amaliyot o'tash imkoniyatlari kengaytirildi.", icon: "globe" },
    { tag: "Ta'lim", date: "18 Apr 2026", title: "Yangi zamonaviy laboratoriyalar ishga tushirildi", excerpt: "Agrokimyo va tuproqshunoslik yo'nalishi uchun jihozlangan laboratoriyalar foydalanishga topshirildi.", icon: "flask" },
  ],
  events: [
    { day: "24", mon: "Iyun", title: "Ochiq eshiklar kuni", time: "10:00 – 14:00", place: "Bosh bino, Kuyganyor", type: "Qabul" },
    { day: "28", mon: "Iyun", title: "Magistratura imtihonlari boshlanishi", time: "09:00", place: "Imtihon markazi", type: "Imtihon" },
    { day: "05", mon: "Iyul", title: "Agro-innovatsiya forumi 2026", time: "11:00 – 17:00", place: "Akt zali", type: "Forum" },
    { day: "15", mon: "Iyul", title: "Xalqaro yozgi maktab ochilishi", time: "10:00", place: "2-o'quv bino", type: "Ta'lim" },
  ],
  admissionSteps: [
    { n: "01", title: "Onlayn ariza", text: "Rasmiy portal orqali shaxsiy ma'lumotlar va yo'nalishni tanlang." },
    { n: "02", title: "Hujjatlarni yuklash", text: "Diplom, pasport va kerakli hujjatlar nusxasini biriktiring." },
    { n: "03", title: "Imtihon / test", text: "Tanlangan yo'nalish bo'yicha kirish imtihonidan o'ting." },
    { n: "04", title: "Qabul natijasi", text: "Natijalar va o'qishga taklif elektron pochta orqali yuboriladi." },
  ],
  contact: {
    address: "Andijon viloyati, Kuyganyor shaharchasi, Oliygoh ko'chasi 1-uy",
    phone: "+998 74 373 16 63",
    email: "admission@andqxai.uz",
    hours: "Dushanba – Shanba, 8:00 – 18:00",
  },
};
