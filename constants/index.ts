export const SITE_CONFIG = {
  name: "ECOVEST",
  description: "Bank Sampah Digital",
  url: "https://ecovest.com",
};

export * from "./articles";
export * from "./links";

// HOME
export const clouds = [
  {
    alt: "Cloud1",
    className:
      "sm:block absolute w-[134px] h-[133px] lg:left-0 lg:top-[42px] -left-[15px] top-[10px]",
  },
  {
    alt: "Cloud2",
    className:
      "sm:block absolute w-[133px] h-[133px] lg:-right-[30px] lg:bottom-[106px] right-[15px] bottom-[5px]",
  },
  {
    alt: "Cloud3",
    className:
      "hidden lg:block absolute w-[154px] h-[154px] left-[214px] top-0",
  },
  {
    alt: "Cloud4",
    className:
      "hidden lg:block absolute w-[154px] h-[154px] right-[70px] bottom-0 scale-x-[-1]",
  },
  {
    alt: "Cloud5",
    className:
      "sm:block absolute w-[123px] h-[123px] lg:right-[15px] lg:top-[82px] right-[5px] top-[70px] scale-x-[-1]",
  },
  {
    alt: "Cloud6",
    className:
      "hidden lg:block absolute w-[123px] h-[123px] left-[49px] bottom-0",
  },
  {
    alt: "Cloud7",
    className:
      "sm:block absolute w-[123px] h-[123px] lg:-left-[22px] lg:top-[223px] -left-[15px] bottom-[50px]",
  },
];

export const howItWorks = [
  {
    title: "Kumpulkan Sampah",
    text: "Pisahkan sampah rumah tangga sesuai jenisnya, organik, plastik, kertas, atau logam.",
    img: "/img/home/sampah.svg",
    alt: "Collect waste",
  },
  {
    title: "Upload ke Sistem",
    text: "Masukan data dan berat sampahmu ke dalam dashboard digital kami.",
    img: "/img/home/upload.svg",
    alt: "Upload to system",
  },
  {
    title: "Tukar Jadi Poin",
    text: "Dapatkan poin reward yang bisa kamu tukarkan dengan voucher atau donasi sosial.",
    img: "/img/home/poin.svg",
    alt: "Exchange for points",
  },
];

export const impacts = [
  {
    label: "900+",
    text: "Pengguna Aktif",
  },
  {
    label: "52+",
    text: "Komunitas Bergabung",
  },
  {
    label: "12.540 KG",
    text: "Sampah daur ulang",
  },
];

// ABOUT
export const misivisi = [
  {
    label: "Misi",
    text: "Meningkatkan kesadaran digital terhadap pengelolaan sampah dan membangun budaya daur ulang yang berkelanjutan.",
    icon: "/icons/about/misi.svg",
  },
  {
    label: "Visi",
    text: "Menjadi platform digital pengelolaan sampah terbesar di Indonesia serta menghubungkan teknologi, masyarakat, dan bumi dalam satu ekosistem hijau.",
    icon: "/icons/about/visi.svg",
  },
];

export const team = [
  {
    name: "Restu Phandu D",
    role: "UI/UX Designer",
    img: "/img/about/restu.png",
  },
  {
    name: "Delon Pratama",
    role: "Frontend Developer",
    img: "/img/about/delon.png",
  },
  {
    name: "Rizki Farhan A",
    role: "Content & Research",
    img: "/img/about/rizki.png",
  },
];

// DASHBOARD
export const statCards = [
  {
    label: "Total Daur Ulang",
    text: "51,2kg",
    icon: "/icons/user/new/recycle.svg",
  },
  {
    label: "Total Point",
    text: "2.260",
    icon: "/icons/user/new/point.svg",
  },
  {
    label: "CO2 Berkurang",
    text: "6,3kg",
    icon: "/icons/user/new/globe.svg",
  },
];

export const activities = [
  {
    text: "Menukar 3kg plastik",
    date: "10 Nov 2025, 07:30",
    point: "+ 120 poin",
    reward: "",
  },
  {
    text: "Mengumpulkan 2kg kertas",
    date: "7 Nov 2025, 10:20",
    point: "+ 10 poin",
    reward: "",
  },
  {
    text: "Menukar 500 Poin",
    date: "5 Nov 2025, 12:45",
    point: "",
    reward: "Rp 500",
  },
];

export const rankings = [
  {
    rank: 2,
    name: "Jhon Dea",
    imageUrl: "/img/user/profile.png",
    totalWaste: "51,2 kg",
    points: "2.260",
    isUser: true,
  },
  {
    rank: 1,
    name: "Brody Kellan",
    imageUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    totalWaste: "57,8 kg",
    points: "2.520",
  },
  {
    rank: 3,
    name: "Brynn Ashlyn",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    totalWaste: "44,9 kg",
    points: "1.960",
  },
  { rank: 4, name: "Femi Simisola", totalWaste: "40,3 kg", points: "1.760" },
  { rank: 5, name: "Lerato", totalWaste: "37,1 kg", points: "1.630" },
  { rank: 6, name: "Bebe Ludovic", totalWaste: "34,8 kg", points: "1.520" },
  { rank: 7, name: "Su-bin Hye", totalWaste: "31,4 kg", points: "1.380" },
  { rank: 8, name: "Ouyang Xian", totalWaste: "27,9 kg", points: "1.230" },
  { rank: 9, name: "Su-bin Hye", totalWaste: "31,4 kg", points: "1.380" },
  { rank: 10, name: "Ouyang Xian", totalWaste: "27,9 kg", points: "1.230" },
];

export const rankLogo = [
  {
    img: "/icons/user/number1.svg",
  },
  {
    img: "/icons/user/number2.svg",
  },
  {
    img: "/icons/user/number3.svg",
  },
];

export const wasteTypes = ["Plastik", "Kertas", "Logam", "Kaca"];

export const wasteDistribution = [
  { type: "Kaca", percentage: "13%", color: "#6CBC7F" },
  { type: "Logam", percentage: "15%", color: "#51B168" },
  { type: "Kertas", percentage: "28%", color: "#368349" },
  { type: "Plastik", percentage: "48%", color: "#2E673C" },
];

export const history = [
  {
    title: "Setor 3 kg plastik",
    date: "10 Nov 2025, 07:30",
    points: "+ 150 poin",
    status: "Pending",
  },
  {
    title: "Mengumpulkan 2 kg kertas",
    date: "8 Nov 2025, 08.25",
    points: "+ 60 poin",
    status: "Berhasil",
  },
  {
    title: "Mengumpulkan 1 kg plastik",
    date: "8 Nov 2025, 08.25",
    points: "+ 10 poin",
    status: "Berhasil",
  },
  {
    title: "Mengumpulkan 1 kg logam",
    date: "5 Nov 2025, 09:59",
    points: "+ 150 poin",
    status: "Berhasil",
  },
  {
    title: "Mengumpulkan 3 kg kertas",
    date: "2 Nov 2025, 7:30",
    points: "+ 30 poin",
    status: "Berhasil",
  },
  {
    title: "Mengumpulkan 2 kg kertas",
    date: "1 Nov 2025, 10:20",
    points: "+ 20 poin",
    status: "Berhasil",
  },
];

export const transactionHistory = [
  {
    description: "Menukar 500 poin",
    date: "9 Nov 2025, 10.30",
    amount: "Rp 25.000",
    status: "Pending",
  },
  {
    description: "Menukar 200 poin",
    date: "7 Oct 2025, 09.10",
    amount: "Rp 10.000",
    status: "Success",
  },
  {
    description: "Menukar 200 poin",
    date: "1 Oct 2025, 13.00",
    amount: "Rp 10.000",
    status: "Success",
  },
  {
    description: "Menukar 200 poin",
    date: "25 Sep 2025, 09:59",
    amount: "Rp 10.000",
    status: "Success",
  },
  {
    description: "Menukar 500 poin",
    date: "12 Sep 2025, 17:30",
    amount: "Rp 25.000",
    status: "Success",
  },
  {
    description: "Menukar 100 poin",
    date: "12 Sep 2025, 7:30",
    amount: "Rp 7,500",
    status: "Success",
  },
  {
    description: "Menukar 200 poin",
    date: "1 Aug 2025, 10:20",
    amount: "Rp 25.000",
    status: "Success",
  },
];

export const pointsPerKg: Record<string, number> = {
  Plastik: 25,
  Kertas: 25,
  Logam: 50,
  Kaca: 30,
};

export const points = 1240;

export const profileData = {
  name: "Jhon Dea",
  email: "Jhondea@gmail.com",
  password: "12345678",
  phone: "+6285347628111",
};

export const activityCards = [
  {
    label: "Total Setoran",
    text: "12",
    icon: "/icons/user/box.svg",
  },
  {
    label: "Total Daur Ulang",
    text: "51,2kg",
    icon: "/icons/user/new/recycle.svg",
  },
  {
    label: "Total Point",
    text: "2.260",
    icon: "/icons/user/new/point.svg",
  },
  {
    label: "Estimasi Tukar",
    text: "Rp 62.000",
    icon: "/icons/user/rp.svg",
  },
];
