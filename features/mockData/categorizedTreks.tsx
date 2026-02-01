export interface Trek {
  id: number;
  title: string;
  image: string;
  location: string;
  duration: string;
  price: string;
}

export interface CategorizedTreks {
  [key: string]: Trek[];
}

export const categorizedTreks: CategorizedTreks = {
  Karnataka: [
    {
      id: 1,
      title: "Netravati Trek",
      image: "/karnataka/Netravati.jpg",
      location: "Netravati ",
      duration: "2 Days",
      price: "₹ 3,999/-",
    },
    {
      id: 2,
      title: "Enchanting Coorg",
      image: "/karnataka/Coorg.jpg",
      location: "Coorg",
      duration: "2 Days",
      price: "₹ 4,499/-",
    },
    {
      id: 3,
      title: "Gokarana Beach Trek",
      image: "/Gokarana.jpg",
      location: "Gokarana",
      duration: "2 Days",
      price: "₹ 3,999/-",
    },
    {
      id: 4,
      title: "Hampi Backpack Trip",
      image: "/karnataka/Hampi.jpg",
      location: "Hampi",
      duration: " 2 Days",
      price: "₹ 4,499/-",
    },
    {
      id: 5,
      title: "Kodachadri Trek",
      image: "/karnataka/Kodachadri.jpg",
      location: "Kodachadri",
      duration: " 2 Days",
      price: "₹3,999/-",
    },
    {
      id: 6,
      title: "Bandaje and Kyathanamakki Trek",
      image: "/karnataka/Bandaje.jpg",
      location: "Bandaje",
      duration: " 2 Days",
      price: "₹3,799/-",
    },
    {
      id: 7,
      title: "Kudremukh and Kyathanamakki Trek",
      image: "/karnataka/Kudremukh.jpg",
      location: "Kudremukh",
      duration: " 2 Days",
      price: "₹3,799/-",
    },
  ],
  Kerala: [
    {
      id: 21,
      title: "Paithalamala",
      image: "/kerala/Paithalamala.jpg",
      location: "Kerala",
      duration: "2 Days",
      price: "₹ 4,499/-",
    },
    {
      id: 22,
      title: "Bose peak & Kolukkumalai",
      image: "/kerala/Kolukkumalai.webp",
      location: "Kerala",
      duration: "2 Days",
      price: "₹ 4,999/-",
    },
    {
      id: 23,
      title: "Banasura Trek",
      image: "/kerala/Banasura.jpg",
      location: "Wayanad, Kerala",
      duration: "2 Days",
      price: "₹ 4,799/-",
    },
    {
      id: 24,
      title: "Explore Ranipuram & River Trek",
      image: "/kerala/Ranipuram.jpg",
      location: "Kerala",
      duration: "2 Days",
      price: "₹ 3,899/-",
    },
  ],
  "Tamil Nadu": [
    {
      id: 31,
      title: "Kodaikanal Back Pack Tour",
      image: "/TamilNadu/Kodaikanal.jpg",
      location: "Tamil Nadu",
      duration: "2 Days",
      price: "₹ 5,499-",
    },
    {
      id: 32,
      title: "Explore Valparai",
      image: "/TamilNadu/Valparai.jpg",
      location: "Tamil Nadu",
      duration: "2 Days",
      price: "₹ 4,899/-",
    },
  ],
  Goa: [
    {
      id: 11,
      title: "Goa Christmas & New Year Escape",
      image: "/Goa/goa.jpg",
      location: "Goa",
      duration: "3 Days",
      price: "₹ 9,999/-",
    },
    {
      id: 12,
      title: "Dudhsagar and South Goa",
      image: "/Goa/Dudhsagar.jpg",
      location: "South Goa",
      duration: "3 Days",
      price: "₹ 5,999/-",
    },
  ],
  "North Tours": [
    {
      id: 51,
      title: "Chardham Yatra",
      image: "/north/Chardham.jpg",
      location: " Uttarakhand",
      duration: "10 Days",
      price: "₹ 24,000/-",
    },
    {
      id: 52,
      title: "Kedarnath & Badrinath Trip",
      image: "/north/Kedarnath.jpg",
      location: "Kedarnath",
      duration: "7 Days",
      price: "₹ 15,999/-",
    },
    {
      id: 53,
      title: "Explore Discover Kashmir",
      image: "/north/Kashmir.jpg",
      location: "Kashmir",
      duration: "6 Days",
      price: "₹ 40,000/-",
    },
    {
      id: 54,
      title: "Explore Manali",
      image: "/north/manali.jpg",
      location: "Manali",
      duration: "5 Days",
      price: "₹ 24,999/-",
    }
  ],
  "North East": [
    {
      id: 41,
      title: "Explore Meghalaya",
      image: "/northEast/Meghalaya.jpg",
      location: "Meghalaya",
      duration: "3 Days",
      price: "₹ 20,999/-",
    },
    {
      id: 42,
      title: "Explore Rajasthan",
      image: "/northEast/Rajasthan.jpg",
      location: "Rajasthan",
      duration: "5 Days",
      price: "₹ 67,500/-",
    },
    {
      id: 43,
      title: "Ayodhya Kashi & Prayagral Trip",
      image: "/northEast/Ayodhya.jpg",
      location: "Ayodhya",
      duration: "5 Days",
      price: "₹ 26,999/-",
    },
  ],
  Spiti: [
    {
      id: 61,
      title: "Spiti Valley Highest Holi Celebration",
      image: "/spiti/SpitiHoli.jpg",
      location: "Spiti",
      duration: "9 Days",
      price: "₹ 21,999/-",
    },

  ],
  International: [
    {
      id: 71,
      title: "Discover Vietnam in 6 Days",
      image: "/international/Vietnam6.jpg",
      location: "Vietnam",
      duration: "6 Days",
      price: "₹ 35,999/-",
    },
    {
      id: 72,
      title: "Vietnam Tour – 8 Nights / 9 Days",
      image: "/international/Vietnam9-1.jpg",
      location: "Vietnam",
      duration: "9 Days",
      price: "₹ 44,999/-",
    },
    {
      id: 73,
      title: "Explore Andaman & Nicobar Islands",
      image: "/international/Andaman.jpg",
      location: "Andaman",
      duration: "6 Days",
      price: "₹ 26,000/-",
    },
  ],
}
