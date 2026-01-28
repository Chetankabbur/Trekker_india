export interface TrekDetails {
  id: number
  slug: string
  title: string
  subtitle: string
  location: string
  totalSeats: string
  altitude: string
  distance: string
  duration: string
  price: string
  originalPrice: string
  bestTime: string
  difficulty: string
  description: string
  highlights: string[]
  inclusions: string[]
  itinerary: Array<{
    day: number
    title: string
    description: string
    details: string[]
  }>
  images: Array<{
    id: number
    src: string
    alt: string
    featured?: boolean
  }>
}

export const treksData = [
  {
    id: 1,
    title: "Netravati Trek",
    subtitle: "The Netravati Peak Trek is one of the most popular treks in Karnataka, located in the Western Ghats about 300 km from Bangalore. The 4–5 km trail takes around 2–3 hours to complete and is well-marked and easy to follow. The region is rich in flora and fauna, including the rare Lion-tailed Macaque.",
    location: "Netravati",
    duration: "1 Night - 2 Days",
    price: "₹3,999",
    originalPrice: "₹4,999",
    totalSeats: "15-20 persons",
    images: [
      {
        id: 1,
        src: "/karnataka/Netravati.jpg",
        alt: "Manali Mountain View",
      },
      {
        id: 2,
        src: "/karnataka/Coorg.jpg",
        alt: "Manali Valley",
      },
    ],
    inclusions: [
      "Pick-up and drop as per itinerary",
      "Accommodation",
      "Meals (2 breakfasts, 1 lunch & 1 dinner)",
      "All toll taxes",
      "Parking fees",
      "Driver allowances",
    ],
    exclusions: [
      "Anything not mentioned in the inclusions",
      "All personal expenses",
      "Optional tours and extra meals",
      "Any unplanned transport expenses",
      "Travel insurance",
      "Medical insurance",
      "Any cost arising due to natural calamities",
    ],

    itinerary: [
      {
        day: 0,
        title: "Pickup from Bangalore & Drive to Netravati",
        description: "Begin your journey with a comfortable overnight drive to the trek location.",
        details: [
          "Evening pickup from Bangalore",
          "Overnight drive through scenic mountain terrain",
          "Early morning arrival at the homestay",
          "Relax and enjoy hot beverages before the trek",
        ],
      },
      {
        day: 1,
        title: "Netravati Trek & Waterfalls",
        description: "Begin your journey with an exciting trek and a peaceful homestay experience.",
        details: [
          "Morning check-in at the homestay, room allotment, and breakfast",
          "Proceed towards the Netravati Trek with an off-road jeep ride to the trek base",
          "Trek through scenic forest trails and explore nearby waterfalls",
          "Return to the homestay for evening snacks and tea",
          "Enjoy a campfire with team activities",
          "Authentic Malnad-style dinner followed by overnight rest at the homestay",
        ],
      },
      {
        day: 2,
        title: "Sightseeing & Return to Bangalore",
        description: "Explore scenic landmarks and temples before returning to Bangalore.",
        details: [
          "Enjoy sunrise with hot tea at the homestay",
          "Breakfast, check-out, and drive towards Samse Tea Estate",
          "Visit Samse Tea Estate, Kalasa Hanging Bridge, and Kalasa Temple",
          "Darshan at historic Horanadu Temple with prasadam",
          "Visit Kodige Waterfalls and spend leisure time",
          "Begin overnight journey towards Bangalore (arrival around 11 PM)",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Enchanting Coorg",
    subtitle: "Experience the beauty and adventure of Coorg in this 2-day trip, with scenic landscapes, waterfalls, wildlife encounters, cultural sights, comfortable resort stay, delicious meals, and memorable moments by the campfire.",
    location: "Coorg",
    duration: "1 Night - 2 Days",
    price: "₹4,499",
    originalPrice: "₹5,000",
    images: [
      {
        id: 1,
        src: "/karnataka/Coorg.jpg",
        alt: "Spiti Valley",
      },
      
    ],
    inclusions: [
      "1 Night Accommodation (Resort – 3/4 sharing)",
      "2 Breakfasts, 1 Lunch, 1 Dinner",
      "Transportation (NON/AC Tempo Traveller)",
      "All Sightseeing & Entry Fees",
      "Campfire with Music",
    ],
    exclusions: [
      "Lunch and Dinner on Day 2",
      "River rafting or any optional adventure activities",
      "Mandalpatti Jeep Ride",
      "Personal expenses (shopping, tips, etc.)",
      "Anything not mentioned in inclusions",
    ],

    itinerary: [
      {
        day: 1,
        title: "Into the Wild & Calm",
        description: "Explore the scenic beauty, culture, and adventure of Coorg.",
        details: [
          "Arrival at the resort and freshen up with breakfast",
          "Visit Chiklihole Dam and Dubare Elephant Camp",
          "Optional river rafting adventure (not included)",
          "Lunch break during sightseeing",
          "Visit Golden Temple (Namdroling Monastery) and Nisargadhama",
          "Explore Harangi Dam with light & music show",
          "Return to resort for campfire, music, dance, and pool time",
        ],
      },
      {
        day: 2,
        title: "Mountains, Waterfalls & Memories",
        description: "Experience thrilling views, waterfalls, and a memorable return journey.",
        details: [
          "Checkout from resort after breakfast",
          "Mandalpatti Jeep Ride with hilltop views",
          "Lunch stop en route",
          "Visit Abbi Falls and Raja’s Seat",
          "Evening shopping for souvenirs and spices",
          "Dinner at own expense exploring local Coorgi cuisine",
          "Depart back to Bengaluru and reach by Monday morning",
        ],
      },
    ],

  },
  {
    id: 3,
    title: "Gokarana Beach Trek",
    subtitle: "Explore scenic coastal trails, stunning sunsets, and private beach camping along Gokarna’s breathtaking shoreline.",
    location: "Gokarana",
    "duration": "1 Nights - 2 Days",
    price: "₹3,999",
    originalPrice: "₹4,999",
    images: [
      {
        id: 1,
        src: "/karnataka/Gokarana.jpg",
        alt: "Gokarana",
      },
    ],

    "inclusions": [
      "Gokarna Beach Trek experience",
      "Sightseeing as per itinerary",
      "2 vegetarian breakfasts",
      "1 lunch",
      "1 dinner (vegetarian & non-vegetarian buffet)",
      "Evening coffee or tea with snacks",
      "Bonfire with music",
      "Ferry ride",
      "All entry fees",
      "Professional and local guide support"
    ],
    exclusions: [
      "All personal expenses",
      "Travel insurance",
      "Alcoholic beverages",
      "Extra activities outside itinerary",
    ],

    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Beach Trek Experience",
        "description": "Arrival at Honnavar, ferry ride, beach trek, sunset views, and campsite experience",
        "details": [
          "Arrival at Honnavar Beach campsite with welcome beverages",
          "Breakfast followed by an exciting ferry ride",
          "Beach trek starting from Belekan Beach",
          "Lunch at a beachside restaurant or cafe",
          "Relax and enjoy scenic coastal views",
          "Sunset experience at Kudle Beach",
          "Return to the campsite",
          "Campfire with snacks and fun activities",
          "Dinner (Veg & Non-Veg) and overnight stay"
        ]
      },
      {
        "day": 2,
        "title": "Backwaters, Waterfalls & Temple Visit",
        "description": "Explore Honnavar backwaters, waterfalls, and the iconic Murudeshwara Temple",
        "details": [
          "Morning wake-up call and refreshments",
          "Breakfast and packing",
          "Checkout from the campsite",
          "Honnavar Backwaters boating experience",
          "Lunch featuring local cuisine",
          "Visit Apasarakonda Beach and Waterfalls",
          "Visit Murudeshwara Temple",
          "Departure towards Bengaluru",
          "Dinner break en route"
        ]
      },
      {
        "day": 3,
        "title": "Return to Bengaluru",
        "description": "Journey back with unforgettable memories",
        "details": [
          "Arrival in Bengaluru with cherished memories"
        ]
      }
    ]

    ,
  },
  {
    id: 4,
    title: "Hampi Backpack Trip",
    subtitle: "Hampi is a UNESCO World Heritage Site in Karnataka, India, renowned for its ancient ruins and historic temples. Once the capital of the Vijayanagara Empire, it is a rich blend of history, architecture, and culture, featuring iconic landmarks like the Virupaksha Temple, Vijaya Vittala Temple, and breathtaking natural surroundings.",
    location: "Hampi",
    duration: "2 Days",
    price: "₹4,499",
    originalPrice: "₹5,499",
    images: [
      {
        id: 1,
        src: "/karnataka/Hampi.jpg",
        alt: "Ladakh Mountains",
      },
    ],

    inclusions: [
      "Transportation from Bangalore to Bangalore",
      "Stay in bamboo huts (3-sharing)",
      "Meals (2 breakfasts and 1 dinner)",
      "All entry fees",
      "Professional guide support",
      "Sightseeing as per itinerary"
    ],


    exclusions: [
      "All lunches",
      "Coracle ride charges",
      "Anything not mentioned in the inclusions"
    ],

    itinerary: [
      {
        "day": 1,
        "title": "Lakes, Hills & Sunset Views",
        "description": "Explore scenic lakes, sacred hills, and enjoy a sunset hike in Hampi",
        "details": [
          "Visit Sanapur Lake and enjoy the scenic views and tranquil atmosphere",
          "Experience a thrilling coracle ride",
          "Explore Anjanadri Hills, the birthplace of Lord Hanuman",
          "Lunch at a local restaurant",
          "Hike to Bal Hanuman Peak and witness a stunning sunset",
          "Dinner and relax at your accommodation"
        ]
      },
      {
        "day": 2,
        "title": "Temples, Heritage & Local Markets",
        "description": "Discover UNESCO heritage sites, ancient temples, river views, and local bazaars",
        "details": [
          "Visit Virupaksha Temple, a UNESCO World Heritage Site",
          "Explore the Royal Enclosure including Elephant Stables and Queen's Bath",
          "Lunch at a local restaurant",
          "Visit Vijaya Vittala Temple, famous for its musical pillars and stone chariot",
          "Stroll along the Tungabhadra River and enjoy scenic views",
          "Visit Achyutaraya Temple, Badavi Linga, and Ugra Narasimha Statue",
          "Explore Hampi Bazaar for souvenirs and local handicrafts",
          "Dinner and departure"
        ]
      }
    ],
  },
  {
    id: 5,
    title: "Kodachadri Trek",
    subtitle: "Experience the Kodachadri Trek, a thrilling monsoon adventure in the Western Ghats featuring lush forests, scenic hill trails, waterfalls, and historic forts. This weekend trek from Bengaluru includes guided trekking, comfortable stays, meals, and breathtaking views from the Kodachadri peak.",
    location: "Kodachadri",
    duration: "1 Night - 2 Days",
    price: "₹3,999",
    originalPrice: "₹4,999",
    images: [
      {
        id: 1,
        src: "/karnataka/Kodachadri.jpg",
        alt: "Ladakh Mountains",
      },
    ],

    inclusions: [
      "Transportation from Bangalore to Bangalore",
      "Stay in bamboo huts (3-sharing)",
      "Meals (2 breakfasts and 1 dinner)",
      "All entry fees",
      "Professional guide support",
      "Sightseeing as per itinerary"
    ],
    exclusions: [
      "All lunches",
      "Coracle ride charges",
      "Anything not mentioned in the inclusions"
    ],

    itinerary: [
  {
    "day": 1,
    "title": "Departure to Kodachadri",
    "description": "Evening departure from Bengaluru for an overnight journey to Kodachadri base.",
    "details": [
      "8:00 PM: Departure from Bengaluru",
      "Overnight journey to Kodachadri base"
    ]
  },
  {
    "day": 2,
    "title": "Trek to Kodachadri Peak",
    "description": "Trek to the Kodachadri peak, explore the summit, and enjoy scenic views.",
    "details": [
      "7:00 AM: Arrive at Kodachadri homestay",
      "9:00 AM: Start trek to Kodachadri peak (9 km)",
      "3:30 PM: Reach peak, explore the area, and optionally return by Jeep (own expense)",
      "6:30 PM: Return to homestay, dinner, and rest"
    ]
  },
  {
    "day": 3,
    "title": "Local Exploration & Return",
    "description": "Explore nearby attractions and return to Bengaluru.",
    "details": [
      "8:00 AM: Breakfast and checkout",
      "Visit Devagange ponds, Nagara fort, Kuppalli, and Kavale Durga",
      "6:00 PM: Start return journey to Bengaluru"
    ]
  }
]
  },
    {
    id: 6,
    title: "Bandajje and Kyathanamakki Trek",
    subtitle: "Experience the Kodachadri Trek, a thrilling monsoon adventure in the Western Ghats featuring lush forests, scenic hill trails, waterfalls, and historic forts. This weekend trek from Bengaluru includes guided trekking, comfortable stays, meals, and breathtaking views from the Kodachadri peak. Bandajje Trek offers a captivating journey through mesmerizing landscapes, lush forests, and diverse flora and fauna, promising an unforgettable experience for nature enthusiasts.",
    location: "Bandajje",
    duration: "1 Night - 2 Days",
    price: "₹3,799",
    originalPrice: "₹4,599",
    images: [
      {
        id: 1,
        src: "/karnataka/Bandaje.jpg",
        alt: "Ladakh Mountains",
      },
    ],
    inclusions: [
  "Transportation from Bangalore to Bangalore",
  "Stay in bamboo huts (3-sharing)",
  "Meals (2 breakfasts, 1 lunch, and 1 dinner - Veg & Non-Veg buffet as specified)",
  "Evening coffee/tea with snacks",
  "Bonfire with music",
  "Kyathanamakki off-road jeep ride",
  "All entry fees and Jeep rides as per itinerary",
  "Professional guide / Local guide support",
  "Sightseeing as per itinerary"
],
    exclusions: [
      "meals (1 lunch, and 1 dinner excluded)",
      "Alcoholic beverages",
      "Anything not mentioned in the inclusions"
    ],

    itinerary: [
  {
    "day": 1,
    "title": "Bandajje Trek Adventure",
    "description": "Embark on a thrilling trek to Bandajje Peak, enjoy breathtaking views, and spend the night at a cozy homestay.",
    "details": [
      "6:00 AM: Arrive at the homestay, check-in, and freshen up",
      "Breakfast and packed lunch for the trek",
      "Start the trek to Bandajje Peak, enjoy scenic surroundings",
      "Reach the summit, have packed lunch, and savor panoramic views",
      "Descend from the peak and return to the homestay",
      "Evening snacks, campfire, music, dinner, and fun activities",
      "Retire for the night at the homestay"
    ]
  },
  {
    "day": 2,
    "title": "Sunrise Jeep Ride, Waterfalls & Belur Exploration",
    "description": "Experience an off-road jeep ride at sunrise, visit Kodige Waterfalls, explore Belur's historic town, and return to Bengaluru.",
    "details": [
      "5:00 AM: Wake up and enjoy a hot cup of tea",
      "Sunrise off-road jeep ride to Kyathanamakki",
      "Return to homestay for breakfast and check-out",
      "Visit Kodige Waterfalls and enjoy the natural beauty",
      "2:00 PM: Lunch at a local restaurant (own expense)",
      "Explore Belur town, admire the art and architecture",
      "Depart for Bengaluru, aiming to reach by 9:00 PM"
    ]
  }
]
  },
      {
    id: 7,
    title: "Kudremukh and Kyathanamakki Trek",
    subtitle: "Experience the Kodachadri Trek, a thrilling monsoon adventure in the Western Ghats featuring lush forests, scenic hill trails, waterfalls, and historic forts. This weekend trek from Bengaluru includes guided trekking, comfortable stays, meals, and breathtaking views from the Kodachadri peak. Bandajje Trek offers a captivating journey through mesmerizing landscapes, lush forests, and diverse flora and fauna, promising an unforgettable experience for nature enthusiasts. Kudremukh Trek offers a thrilling journey through lush forests, sparkling streams, and misty mountains, culminating in panoramic views from the horse-face peak. Kyathanamakki Trek features verdant hills, cascading waterfalls, and rugged trails, promising adventure and unforgettable natural beauty.",
    location: "Kudremukh",
    duration: "1 Night - 2 Days",
    price: "₹3,799",
    originalPrice: "₹4,599",
    images: [
      {
        id: 1,
        src: "/karnataka/Kudremukh.jpg",
        alt: "Ladakh Mountains",
      },
    ],
    inclusions: [
  "Transportation from Bangalore to Bangalore",
  "Stay in bamboo huts (3-sharing)",
  "Meals (2 breakfasts, 1 lunch, and 1 dinner - Veg & Non-Veg buffet as specified)",
  "Evening coffee/tea with snacks",
  "Bonfire with music",
  "Kyathanamakki off-road jeep ride",
  "All entry fees and Jeep rides as per itinerary",
  "Professional guide / Local guide support",
  "Sightseeing as per itinerary"
],
    exclusions: [
      "meals (1 lunch, and 1 dinner excluded)",
      "Alcoholic beverages",
      "Anything not mentioned in the inclusions"
    ],

    itinerary: [
  {
    "day": 1,
    "title": "Kudremukh Trek Adventure",
    "description": "Embark on a thrilling trek to Kudremukh Peak, enjoy breathtaking panoramic views, and spend the night at a cozy homestay.",
    "details": [
      "6:00 AM: Arrive at the homestay, check-in, and freshen up",
      "Enjoy a delicious breakfast and packed lunch for the trek",
      "Start the trek to Kudremukh Peak, taking in the lush surroundings",
      "Reach the summit, have packed lunch, and savor breathtaking panoramic views",
      "Descend from the peak and return to the homestay, enjoying the natural trail",
      "Evening snacks, gather around a campfire with music, dinner, and fun activities",
      "Retire for the night at the homestay, sharing stories and making memories"
    ]
  },
  {
    "day": 2,
    "title": "Sunrise Jeep Ride, Waterfalls & Belur Exploration",
    "description": "Experience a sunrise off-road jeep ride to Kyathanamakki, visit Kodige Waterfalls, explore Belur's historic town, and return to Bengaluru.",
    "details": [
      "5:00 AM: Wake up and enjoy a hot cup of tea",
      "Sunrise off-road jeep ride to Kyathanamakki",
      "Return to homestay for breakfast and check-out",
      "Visit Kodige Waterfalls and take in the natural beauty",
      "2:00 PM: Lunch at a local restaurant (own expense)",
      "Explore Belur town, admire its art and architecture, and learn about its rich history",
      "Depart from Belur and return to Bengaluru, aiming to reach by 9:00 PM"
    ]
  }
]
  },

  {
  id: 11,
  title: "Goa Christmas & New Year Escape",
  subtitle: "Celebrate Christmas and New Year in Goa with 2N/3D beach adventures, DJ cruise parties, scenic Arambol Beach walks, local sightseeing, vibrant nightlife, and cultural exploration. Includes comfortable stays, meals, guided tours, and unforgettable experiences along the Goan coast.",
  location: "Goa",
  duration: "2 Nights - 3 Days",
  price: "₹9,999",
  originalPrice: "₹12,499",
  images: [
    {
      id: 1,
      src: "/Goa/goa.jpg",
      alt: "Goa Beach Party",
    }
  ],
  inclusions: [
    "Transportation – Bengaluru to Bengaluru",
    "Accommodation – Deluxe Rooms (3 sharing)",
    "Sightseeing as per itinerary",
    "DJ Cruise Party (2 Beer/2 Pegs/Soft drinks included)",
    "Meals – 2 Breakfasts, 1 Dinner",
    "24 Hrs tour assistance",
    "Professional Tour Guide support"
  ],
  exclusions: [
    "Meals not specified (Lunch, snacks, Dinner)",
    "Travel insurance and medical expenses",
    "Anything not specifically mentioned in the Inclusions",
    "Adventure activities (water sports, beach games)",
    "New Year Party Entry Passes"
  ],
  itinerary: [
    {
      day: 1,
      title: "North Goa Beaches & Nightlife",
      description: "Enjoy a relaxed day exploring North Goa's beaches and vibrant nightlife.",
      details: [
        "Morning: After breakfast, stroll around Baga and Calangute Beach, enjoy beach games and water activities (self-sponsored)",
        "Afternoon: Relax at the hotel pool and go shopping in local markets",
        "Evening: Explore nightlife spots within walking distance (party passes available)",
        "Night: Return to hotel for dinner and rest"
      ]
    },
    {
      day: 2,
      title: "Arambol Beach & Dinner Cruise",
      description: "Scenic beach walks, Sweet Lake exploration, and an evening cruise party with DJ and dinner.",
      details: [
        "Morning: Drive to Arambol Beach, check in, relax and refresh",
        "Take a scenic walk along beach cliffs and reach Sweet Lake for a swim and peaceful vibes",
        "Afternoon: Lunch at a local café or beach shack, then unwind at hotel",
        "Evening: Cruise Dinner experience with DJ, dance floor, and drinks",
        "Night: Return to hotel, explore pubs if interested, and rest"
      ]
    },
    {
      day: 3,
      title: "Goa Sightseeing & Return to Bengaluru",
      description: "Explore Goa's heritage, forts, churches, and Latin Quarter before returning to Bengaluru.",
      details: [
        "Morning: Check out and visit Aguada Fort for panoramic views",
        "Afternoon: Visit St. Xavier’s Basilica, St. Francis Xavier Church, and have leisure lunch",
        "Evening: Explore Fontainhas Latin Quarter and its Portuguese houses, art cafés, and heritage streets",
        "Night: Begin return journey to Bengaluru, stop for dinner en route"
      ]
    }
  ],
},
{
  id: 12,
  title: "South Goa & Dudhsagar Waterfalls Trek",
  subtitle: "Experience a budget-friendly 2N/2D South Goa adventure with Dudhsagar Waterfalls trek, beach hopping at Agonda, Cola, and Butterfly beaches, Cabo de Rama viewpoints, and scenic explorations. Perfect for backpackers and group trips with shared stays and guided trekking.",
  location: "South Goa",
  duration: "2 Nights - 2 Days",
  price: "₹5,699",
  originalPrice: "₹5,999",
  images: [
    {
      id: 1,
      src: "/Goa/Dudhsagar.jpg",
      alt: "Dudhsagar Waterfalls Trek",
    }
  ],
  inclusions: [
    "Bengaluru ↔ Goa transport",
    "Fresh-up rooms near Ramnagar (3 rooms for 20 people)",
    "2 Breakfasts (Day 1 & Day 2)",
    "1 Lunch (Day 1 – Veg Biryani)",
    "Trek guide + Jeep ride + Permits for Dudhsagar",
    "Entry to Dudhsagar Waterfalls",
    "Sightseeing: Butterfly Beach, Agonda Beach, Kakolem Beach, Cola Beach, Cabo de Rama View Point",
    "Shared dormitory stay in South Goa (3–6 sharing)",
    "Trip coordination and group experience"
  ],
  exclusions: [
    "Dinners (Day 1 & Day 2)",
    "Lunch on Day 2",
    "Any additional personal expenses or extra activities",
    "Travel insurance and medical expenses",
    "Anything not mentioned in the inclusions"
  ],
  itinerary: [
    {
      day: 0,
      title: "Departure from Bengaluru",
      description: "Group assembly and overnight journey from Bengaluru to Goa.",
      details: [
        "7:00 PM: Depart from Bengaluru"
      ]
    },
    {
      day: 1,
      title: "Dudhsagar Waterfalls Trek",
      description: "Trek to the majestic Dudhsagar Waterfalls with jeep ride and guided exploration.",
      details: [
        "6:00 AM: Arrive at Ramnagar, Dandeli",
        "6:15 AM: Freshen up at pre-arranged rooms (basic fresh-up)",
        "8:00 AM: Breakfast (Dosa & Idli)",
        "9:00 AM: Drive to Dudhsagar trek base",
        "9:30 AM: Complete registration & briefing",
        "10:00 AM: Start Jeep ride + guided trek to Dudhsagar Waterfalls",
        "2:00 PM: Reach waterfalls, enjoy scenic beauty & lunch (Veg Biryani)",
        "4:00 PM: Trek back and return to South Goa",
        "8:00 PM: Check-in at shared dormitory stay (3–6 sharing)",
        "Evening: Free time to relax or explore nearby areas",
        "Dinner: On your own"
      ]
    },
    {
      day: 2,
      title: "South Goa Beach Hopping & Return",
      description: "Explore South Goa’s hidden beaches and viewpoints before returning to Bengaluru.",
      details: [
        "8:00 AM: Breakfast (Aloo Paratha/Poori Bhaji – limited)",
        "10:00 AM: Visit Agonda Beach – short hike/boat experience",
        "12:30 PM: Visit Cola Beach – serene and scenic",
        "2:00 PM: Free time for lunch (not included) & relaxation",
        "3:00 PM: Visit Cabo de Rama View Point – peaceful offbeat location",
        "5:00 PM: Depart from Goa to Bengaluru",
        "Next Day 6:00 AM: Arrive in Bengaluru"
      ]
    }
  ]
},
{
  id: 21,
  title: "Paithalamala & Ezharakund Waterfalls Trek",
  subtitle: "Experience a 1N/2D adventure at Paithalamala Peak and Ezharakund Waterfalls in Kerala, featuring off-road jeep rides, trekking, infinity pool relaxation, hidden waterfalls, scenic viewpoints, and guided exploration. Ideal for nature enthusiasts and adventure seekers.",
  location: "Paithalamala, Kerala",
  duration: "1 Night - 2 Days",
  price: "₹3,999",
  originalPrice: "₹4,499",
  images: [
    {
      id: 1,
      src: "/kerala/Paithalamala.jpg",
      alt: "Paithalamala Trek",
    }
  ],
  inclusions: [
    "Paithalamala off-road jeep ride",
    "Infinity Pool access",
    "2 Breakfasts (Veg - Buffet)",
    "1 Dinner (Veg & Non-Veg - Buffet)",
    "Evening coffee/tea with snacks",
    "Bonfire with music (weather dependent)",
    "All entry fees & Jeep rides (if required)",
    "Professional guide / Local guide support"
  ],
  exclusions: [
    "Lunch (Day 1 & Day 2 unless specified)",
    "Any personal expenses or extra activities",
    "Travel insurance and medical expenses",
    "Anything not mentioned in inclusions"
  ],
  itinerary: [
    {
      day: 1,
      title: "Paithalamala Trek & Hidden Waterfalls",
      description: "Trek to Paithalamala Peak, enjoy panoramic views, explore hidden waterfalls, and relax at the homestay.",
      details: [
        "7:00 AM: Arrive at homestay, check-in, and freshen up",
        "9:00 AM: Breakfast and prepare for the trek",
        "10:00 AM: Trek to Paithalamala Peak and enjoy scenic surroundings",
        "12:00 PM: Reach summit, enjoy panoramic views",
        "2:00 PM: Lunch (Veg/Non-Veg, own expense)",
        "3:30 PM: Explore hidden waterfalls on a 1.5 km trek",
        "6:00 PM: Return to homestay, enjoy hot coffee/tea, infinity pool, and campfire (weather dependent)",
        "7:00 PM: Fun activities and group bonding",
        "9:15 PM: Dinner and retire for the night"
      ]
    },
    {
      day: 2,
      title: "Ezharakund Waterfalls & Palakayum Thattu Viewpoint",
      description: "Visit Ezharakund Waterfalls, enjoy nature, visit scenic viewpoints, and return to Bengaluru.",
      details: [
        "8:00 AM: Wake up and enjoy hot tea/black coffee",
        "9:00 AM: Breakfast and prepare packed lunch",
        "10:00 AM: Visit Ezharakund Waterfalls (swimming allowed)",
        "2:00 PM: Lunch at hotel",
        "3:00 PM: Visit Palakayum Thattu Viewpoint",
        "4:00 PM: Depart towards Bengaluru",
        "8:00 PM: Stop for dinner in Mysore (own expense)"
      ]
    }
  ]
},
{
  id: 22,
  title: "Bose Peak & Kolukkumalai Trek",
  subtitle: "Experience a 2N/3D adventure in the Western Ghats with Bose Peak and Kolukkumalai, featuring sunrise treks, scenic tea plantations, off-road jeep rides, hidden waterfalls, and cultural experiences. Ideal for nature lovers and adventure seekers.",
  location: "Kolukkumalai, Tamil Nadu",
  duration: "2 Nights - 3 Days",
  price: "₹5,699",
  originalPrice: "₹4,999",
  images: [
    {
      id: 1,
      src: "/kerala/Kolukkumalai.webp",
      alt: "Kolukkumalai Trek"
    }
  ],
  inclusions: [
    "Transportation from Bangalore to Kolukkumalai and back",
    "Accommodation in tents (separate for male & female)",
    "Meals: 2 Breakfasts and 1 Dinner",
    "Trekking to Bose Peak and Kolukkumalai",
    "Off-road jeep ride",
    "Visit to tea estates and cultural activities",
    "Professional guide / Local guide support",
    "Activities as per itinerary"
  ],
  exclusions: [
    "Lunch (unless specified)",
    "Personal expenses and extra activities",
    "Travel insurance and medical expenses",
    "Anything not mentioned in inclusions"
  ],
  itinerary: [
    {
      day: 0,
      title: "Departure from Bengaluru",
      description: "Start the journey from Bengaluru towards Kolukkumalai.",
      details: [
        "7:00 PM: Depart from Bengaluru (Group assembly at Majestic)"
      ]
    },
    {
      day: 1,
      title: "Arrival, Waterfalls & Sunset Trek",
      description: "Check-in to homestay, trek to hidden waterfalls, explore tea estate views, and enjoy sunset point.",
      details: [
        "Morning: Check-in to homestay and freshen up",
        "Breakfast at campsite",
        "Trek to hidden waterfalls and enjoy the surroundings",
        "Lunch at a local restaurant and rest",
        "Trek to nearby sunset point (2+2 km steep trek)",
        "Evening: Campfire, music, and activities at campsite",
        "Dinner and overnight stay at campsite"
      ]
    },
    {
      day: 2,
      title: "Sunrise Trek & Kolukkumalai Exploration",
      description: "Early morning sunrise drive, trek Bose Peak, visit Kolukkumalai tea estates, Panther Rock, and enjoy local activities.",
      details: [
        "4:00 AM: Wake up and freshen up",
        "Hot tea/coffee and prepare for sunrise drive",
        "Off-road jeep ride to Bose Peak base",
        "Trek to Bose Peak and witness sunrise",
        "Visit Kolukkumalai tea estates for panoramic views",
        "Explore Panther Rock (less crowded after sunrise)",
        "Return to campsite and breakfast",
        "Checkout from campsite",
        "Optional zipline and kayaking (own expense)",
        "Lunch at a local restaurant",
        "Visit highest tea estates and cardamom factory",
        "Depart for Bengaluru, stop for dinner on the way"
      ]
    },
    {
      day: 3,
      title: "Arrival at Bengaluru",
      description: "Return journey to Bengaluru and conclusion of the trip.",
      details: [
        "6:00 AM: Arrive at Bengaluru and end of trip"
      ]
    }
  ]
},
{
  "id": 23,
  "title": "Banasura Trek",
  "subtitle": "Experience an exhilarating 2N/3D Banasura Trek in the Western Ghats, featuring lush green landscapes, hidden waterfalls, historical Edakkal Caves, Banasura Dam, and panoramic views from the peak. Ideal for adventure enthusiasts seeking moderate trekking challenges and natural beauty.",
  "location": "Wayanad, Kerala",
  "duration": "2 Nights - 3 Days",
  "price": "₹4,999",
  "originalPrice": "₹5,699",
  "images": [
    {
      "id": 1,
      "src": "/kerala/Banasura.jpg",
      "alt": "Banasura Trek Western Ghats"
    }
  ],
  "inclusions": [
    "2 Breakfasts, 2 Lunches, and 1 Dinner",
    "Homestay accommodation",
    "Forest Entry Fee and Permit",
    "Professional Guide and Local Guide support",
    "Transportation from Bangalore to Banasura and back",
    "Campfire (weather permitting) and engaging activities"
  ],
  "exclusions": [
    "Any personal expenses or extra activities not mentioned",
    "Travel insurance and medical expenses",
    "Meals or snacks not specified in inclusions"
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "Arrival, Hidden Waterfalls & Historical Sites",
      "description": "Arrive at the homestay, explore hidden waterfalls, Edakkal Caves, and visit Banasura Dam.",
      "details": [
        "6:00 AM: Arrive at homestay, enjoy hot beverage and freshen up",
        "8:00 AM: Breakfast at homestay",
        "10:00 AM: Trek to Hidden Waterfalls, take pictures, swim in natural Jacuzzi",
        "1:00 PM: Packed lunch along the stream",
        "2:00 PM: Explore Historical Edakkal Caves, admire ancient engravings",
        "4:00 PM: Visit Banasura Dam, enjoy sunset and capture scenic photos",
        "6:00 PM: Return to homestay, freshen up, and gather for campfire (weather permitting)",
        "8:00 PM: Dinner with music, dance, and fun activities",
        "10:00 PM: Rest and overnight stay"
      ]
    },
    {
      "day": 2,
      "title": "Banasura Trek & Peak Adventure",
      "description": "Trek to Banasura Peak with panoramic views, enjoy packed lunch, and explore the natural surroundings.",
      "details": [
        "6:00 AM: Wake up, enjoy tea/coffee",
        "7:00 AM: Breakfast and check-out",
        "8:00 AM: Arrive at base, complete entry formalities",
        "8:30 AM: Begin moderate 18KM trek to Banasura Peak",
        "1:00 PM: Packed lunch during trek",
        "2:00 PM: Reach Banasura Peak, capture stunning views and photos",
        "5:00 PM: Descend back to base, freshen up and relax",
        "8:00 PM: Begin return journey to Bangalore with dinner stop en route"
      ]
    },
    {
      "day": 3,
      "title": "Return to Bangalore",
      "description": "Arrive in Bangalore with unforgettable memories of the trek.",
      "details": [
        "5:00 AM: Reach Bangalore, trip concludes"
      ]
    }
  ]
},
{
  "id": 24,
  "title": "Ranipuram & River Trek",
  "subtitle": "Discover the untouched beauty of Kerala with an adventurous getaway to Ranipuram, often called the ‘Ooty of Kerala’. This trip combines a scenic hill trek, hidden waterfalls, thrilling river trekking, cultural temple visits, and the iconic Madikeri Glass Bridge—perfect for weekend explorers and nature lovers.",
  "location": "Kerala & Coorg",
  "duration": "2 Nights - 3 Days",
  "price": "₹—",
  "startingPoints": [
    "Bangalore"
  ],
  "images": [
    {
      "id": 1,
      "src": "/kerala/Ranipuram.jpg",
      "alt": "Ranipuram Hills Kerala"
    }
  ],
  "inclusions": [
    "Transportation from Bangalore to Bangalore",
    "Accommodation in homestay / camp on sharing basis",
    "Daily breakfast",
    "Authentic Kerala meals (as mentioned in itinerary)",
    "Ranipuram trek entry & local guide support",
    "Campfire experience",
    "Trip coordination and support"
  ],
  "exclusions": [
    "Lunch unless specified",
    "Personal expenses",
    "Any adventure activities not mentioned",
    "Entry fees not specified in inclusions",
    "Travel insurance & medical expenses",
    "Anything not mentioned in inclusions"
  ],
  "itinerary": [
    {
      "day": 0,
      "title": "Bangalore to Ranipuram (Overnight Journey)",
      "description": "Overnight departure from Bangalore towards Ranipuram.",
      "details": [
        "Pickup from Bangalore (Majestic)",
        "Dinner break en route (self-sponsored)",
        "Overnight journey towards Ranipuram",
        "Reach Paithalmala / Ranipuram base early morning (~6:00 AM)"
      ]
    },
    {
      "day": 1,
      "title": "Ranipuram Trek & Waterfalls",
      "description": "Scenic hill trek through forests and meadows followed by waterfalls and campfire.",
      "details": [
        "Early morning arrival at homestay",
        "Freshen up and breakfast",
        "Proceed to Ranipuram trek base",
        "Forest entry and start 2.5 km trek to Ranipuram peak",
        "Enjoy 360° panoramic views, water streams, and Western Ghats landscapes",
        "Descend and return to homestay",
        "Authentic Kerala lunch",
        "Visit hidden waterfalls and spend leisure time",
        "Evening campfire",
        "Dinner and overnight stay at homestay"
      ]
    },
    {
      "day": 2,
      "title": "River Trek, Coorg Sightseeing & Return",
      "description": "Adventure river trek and scenic sightseeing in Coorg before returning to Bangalore.",
      "details": [
        "Early morning breakfast",
        "Proceed for adventurous river trekking",
        "Visit Tala Kaveri Temple",
        "Madikeri sightseeing",
        "Experience Madikeri Glass Bridge",
        "Visit Raja’s Seat for sunset views",
        "Dinner stop en route (self-sponsored)",
        "Overnight drive back to Bangalore",
        "Arrival in Bangalore around 4:00 AM"
      ]
    }
  ]
},
{
  "id": 31,
  "title": "kodaikanal backpack trip",
  "subtitle": "Experience a 3-day backpacking adventure in Kodaikanal with trekking, scenic viewpoints, hidden waterfalls, and cultural explorations. Includes comfortable stays, guided treks, nature camping, and all essential sightseeing activities.",
  "location": "Kodaikanal, Tamil Nadu",
  "duration": "1 Nights - 2 Days",
  "price": "₹5,499",
  "originalPrice": "₹5,199",
  "images": [
    {
      "id": 1,
      "src": "/TamilNadu/Kodaikanal.jpg",
      "alt": "Kodaikanal Trekking"
    }
  ],
  "inclusions": [
    "Transportation from Bengaluru to Kodaikanal and back",
    "2 Breakfasts and 1 Dinner (Veg/Non-Veg)",
    "State Permit",
    "Local and Professional Trek Guides",
    "Nature Camping",
    "Sightseeing as per itinerary",
    "All Entry Fees"
  ],
  "exclusions": [
    "Any personal expenses or extra activities not mentioned",
    "Lunches not specified in inclusions",
    "Travel insurance and medical expenses"
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "Adventure & Trekking",
      "description": "Explore scenic locations, trek to hidden waterfalls, and visit local villages.",
      "details": [
        "8:00 AM: Check-in at hotel & refresh",
        "Visit Mannavanur Lake & Sheep Farm",
        "Hidden Waterfalls Trek",
        "Kookal Village",
        "Poombarai Village"
      ]
    },
    {
      "day": 2,
      "title": "Sightseeing in Kodaikanal",
      "description": "Visit forests, viewpoints, and trekking spots while enjoying Kodaikanal’s natural beauty.",
      "details": [
        "10:00 AM: After breakfast, check-out from the hotel",
        "Pine Tree Forest & Devil's Kitchen (Guna Caves)",
        "Pillar Rocks & Green Valley View",
        "Guna Caves",
        "Moir View Point",
        "Vattakanal Falls",
        "Dolphin's Nose Trek & Echo Rock",
        "Coakers Walk",
        "Local Shopping"
      ]
    },
    {
      "day": 3,
      "title": "Return to Bengaluru",
      "description": "Depart from Kodaikanal and reach Bengaluru by early morning.",
      "details": [
        "6:00 AM: Arrive in Bengaluru, trip concludes"
      ]
    }
  ]
},
{
  "id": 32,
  "title": "explore valparai",
  "subtitle": "Experience a peaceful 2N/3D getaway to Valparai with scenic tea plantations, waterfalls, viewpoints, and relaxation at Aliyar Dam. Perfect for nature lovers and families seeking a tranquil escape from the city.",
  "location": "Valparai, Tamil Nadu",
  "duration": "1 Nights - 2 Days",
  "price": "₹5,599",
  "originalPrice": "₹4,899",
  "images": [
    {
      "id": 1,
      "src": "/TamilNadu/Valparai.jpg",
      "alt": "Valparai Hills"
    }
  ],
  "inclusions": [
    "Transportation from Bangalore to Valparai and back",
    "Accommodation in a resort or homestay (3 sharing, separate for male & female)",
    "2 Breakfasts and 1 Dinner (Veg/Non-Veg)",
    "Visits to waterfalls, viewpoints, and tea estates",
    "Entry fees included",
    "Campfire and music (weather permitting)",
    "Professional/local guide support"
  ],
  "exclusions": [
    "Any personal expenses or extra activities not mentioned",
    "Travel insurance and medical expenses",
    "Lunches not specified in inclusions"
  ],
  "itinerary": [
    {
      "day": 0,
      "title": "Departure from Bengaluru",
      "description": "Group assembles and departs from Bengaluru on a comfortable vehicle.",
      "details": [
        "Night: Departure from Bengaluru"
      ]
    },
    {
      "day": 1,
      "title": "Valparai Sightseeing & Campfire",
      "description": "Explore waterfalls, tea estates, and viewpoints in Valparai while enjoying a relaxing evening with a campfire.",
      "details": [
        "Morning: Arrive in Valparai, check-in at homestay/hotel",
        "Visit Monkey Falls",
        "Explore 360° tea estate views and learn tea-making process",
        "Visit Tiger Valley Viewpoint",
        "Evening: Return to stay, enjoy campfire and music (weather permitting)",
        "Dinner and overnight stay at Valparai"
      ]
    },
    {
      "day": 2,
      "title": "Valparai Exploration & Return",
      "description": "Visit tunnels, dams, waterfalls, and viewpoints before starting the return journey to Bengaluru.",
      "details": [
        "Morning: Breakfast and check-out",
        "Visit Vellamalai Tunnel",
        "Explore Aliyar Dam",
        "Visit Chinnakalar Falls",
        "Visit Nallamudi Viewpoint",
        "Evening: Depart for Bengaluru, stop for dinner en route",
        "Next Day 6:00 AM: Arrive in Bengaluru"
      ]
    }
  ]
},
{
  "id": 41,
  "title": "Explore Meghalaya",
  "subtitle": "Experience an unforgettable 6-day journey through Meghalaya with lush waterfalls, living root bridges, crystal-clear rivers, scenic villages, caves, and cultural hotspots. This guided SUV road trip covers Shillong, Mawlynnong, Cherrapunji, and Guwahati—perfect for nature lovers and adventure seekers.",
  "location": "Meghalaya & Assam",
  "duration": "5 Nights - 6 Days",
  "price": "₹20,999",
  "originalPrice": "₹23,999",
  "images": [
    {
      "id": 1,
      "src": "/northEast/Meghalaya.jpg",
      "alt": "Meghalaya Hills and Waterfalls"
    }
  ],
  "inclusions": [
    "All transfers & sightseeing by private SUV (as per itinerary)",
    "Accommodation in hotels on 2-sharing basis",
    "Daily breakfast (6 breakfasts)",
    "Sightseeing as per itinerary",
    "24-hour tour assistance",
    "Experienced driver for sightseeing"
  ],
  "exclusions": [
    "Airfare / train tickets to & from Guwahati",
    "Lunch, dinner, snacks not specified",
    "Adventure activities not mentioned in inclusions (boating, zip-lining, jeep rides, etc.)",
    "Entry fees to monuments & attractions",
    "Travel insurance & medical expenses",
    "Any personal expenses",
    "Anything not specifically mentioned in inclusions"
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "Guwahati to Shillong",
      "description": "Begin your Meghalaya journey with a scenic drive from Guwahati to Shillong.",
      "details": [
        "Morning: Pickup from Guwahati airport/hotel",
        "Breakfast stop en route",
        "Drive to Shillong (approx. 3 hours)",
        "Visit Umiam Lake (Barapani) for photography",
        "Check-in at hotel",
        "Evening: Explore Police Bazaar for shopping & dinner",
        "Overnight stay in Shillong"
      ]
    },
    {
      "day": 2,
      "title": "Shillong to Mawlynnong",
      "description": "Travel to Asia’s cleanest village and explore waterfalls en route.",
      "details": [
        "Morning: Breakfast & checkout from Shillong",
        "Drive to Mawlynnong",
        "Visit Phe Phe Falls",
        "Lunch break (self-sponsored)",
        "Explore Krangsuri Waterfalls",
        "Evening: Reach Mawlynnong & check-in",
        "Overnight stay in Mawlynnong"
      ]
    },
    {
      "day": 3,
      "title": "Mawlynnong to Cherrapunji",
      "description": "Explore scenic villages, living root bridges, and crystal-clear rivers.",
      "details": [
        "Morning: Breakfast",
        "Explore Mawlynnong Village",
        "Visit Balancing Rock",
        "Visit Single Living Root Bridge",
        "Drive to Dawki",
        "Boating at Umngot River (optional)",
        "Lunch near the river (self-sponsored)",
        "Evening: Drive to Cherrapunji",
        "Overnight stay in Cherrapunji"
      ]
    },
    {
      "day": 4,
      "title": "Double Decker Living Root Bridge Trek",
      "description": "Embark on a thrilling trek to the iconic Double Decker Living Root Bridge.",
      "details": [
        "Morning: Breakfast",
        "Drive to trek base point",
        "Start Double Decker Living Root Bridge trek",
        "Lunch on the way",
        "Reach Double Decker Root Bridge",
        "Evening: Return to base point",
        "Drive back to hotel & rest",
        "Overnight stay in Cherrapunji"
      ]
    },
    {
      "day": 5,
      "title": "Cherrapunji to Shillong",
      "description": "Explore iconic waterfalls, caves, and scenic viewpoints.",
      "details": [
        "Morning: Breakfast & checkout",
        "Visit Seven Sisters Waterfalls",
        "Visit Nohkalikai Waterfalls",
        "Lunch break",
        "Explore Mawsmai Caves",
        "Evening: Drive to Shillong",
        "Check-in & overnight stay in Shillong"
      ]
    },
    {
      "day": 6,
      "title": "Shillong to Guwahati Departure",
      "description": "Conclude the trip with temple visit and return journey.",
      "details": [
        "08:00 AM: Breakfast & checkout",
        "02:00 PM: Drive to Kamakhya Devi Temple",
        "Visit Kamakhya Temple",
        "04:00 PM: Lunch",
        "07:30 PM: Drop at Guwahati Airport / Railway Station",
        "Tour ends with beautiful memories"
      ]
    }
  ]
},
{
  "id": 62,
  "title": "Explore Rajasthan",
  "subtitle": "A detailed journey through the Land of Kings, covering royal cities, majestic forts, vibrant bazaars, desert landscapes, and rich cultural heritage across Jaipur, Jodhpur, and Jaisalmer.",
  "location": "Rajasthan, India",
  "duration": "4 Nights - 5 Days",
  "price": "₹67,500",
  "originalPrice": "₹70,000",
  "startingPoints": [
    "Jaipur"
  ],
  "dates": "16th December – 20th December 2025",
  "groupSize": "5 Adults",
  "images": [
    {
      "id": 1,
      "src": "/northEast/Rajasthan.jpg",
      "alt": "Rajasthan Forts and Desert"
    }
  ],
  "accommodation": [
    {
      "city": "Jaipur",
      "nights": 2,
      "hotel": "Hotel Royal View",
      "roomType": "2 Deluxe Rooms",
      "mealPlan": "Breakfast & Dinner"
    },
    {
      "city": "Jodhpur",
      "nights": 1,
      "hotel": "Hotel Kissan Legacy (3 Star)",
      "roomType": "2 Deluxe Rooms",
      "mealPlan": "Breakfast & Dinner"
    },
    {
      "city": "Jaisalmer",
      "nights": 1,
      "hotel": "Hotel Meerana",
      "roomType": "2 Deluxe Rooms",
      "mealPlan": "Breakfast & Dinner"
    }
  ],
  "transportation": "Private Etios / Dzire with driver",
  "inclusions": [
    "Pickup and drop as per itinerary",
    "Accommodation as per itinerary",
    "Daily breakfast and dinner",
    "Private vehicle for transfers and sightseeing",
    "Toll tax, parking, fuel charges and driver allowance",
    "5% GST included"
  ],
  "exclusions": [
    "Flights, trains or ferry tickets",
    "Monument entry fees and camera charges",
    "Lunches during the trip",
    "Personal expenses (laundry, shopping, tips, phone bills)",
    "Adventure activities (safaris, rides, etc.)",
    "Anything not specifically mentioned in inclusions"
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "Arrival in Jaipur",
      "description": "Arrive in the Pink City and explore its iconic landmarks.",
      "details": [
        "Pickup from Jaipur Airport / Railway Station",
        "Hotel check-in",
        "Visit City Palace",
        "Visit Jantar Mantar",
        "Photo stop at Hawa Mahal",
        "Visit Birla Temple",
        "Explore Albert Hall Museum",
        "Evening free for leisure",
        "Overnight stay in Jaipur"
      ]
    },
    {
      "day": 2,
      "title": "Jaipur Local Sightseeing",
      "description": "Discover the royal heritage and architectural wonders of Jaipur.",
      "details": [
        "Breakfast at hotel",
        "Visit Amber Fort",
        "Explore local markets",
        "Optional cultural experiences",
        "Return to hotel",
        "Overnight stay in Jaipur"
      ]
    },
    {
      "day": 3,
      "title": "Jaipur to Jodhpur via Ajmer & Pushkar",
      "description": "Scenic drive with spiritual and cultural stops en route.",
      "details": [
        "Breakfast and check-out",
        "Drive to Ajmer",
        "Visit Ajmer Sharif Dargah",
        "Visit Pushkar Brahma Temple and Pushkar Lake",
        "Continue drive to Jodhpur",
        "Check-in at hotel",
        "Overnight stay in Jodhpur"
      ]
    },
    {
      "day": 4,
      "title": "Jodhpur to Jaisalmer",
      "description": "Travel from the Blue City to the Golden City of the Thar Desert.",
      "details": [
        "Breakfast and check-out",
        "Local sightseeing in Jodhpur (time permitting)",
        "Drive to Jaisalmer",
        "Check-in at hotel",
        "Evening free for leisure",
        "Overnight stay in Jaisalmer"
      ]
    },
    {
      "day": 5,
      "title": "Jaisalmer to Jaipur – Departure",
      "description": "Conclude the royal Rajasthan journey.",
      "details": [
        "Breakfast at hotel",
        "Free time for leisure",
        "Check-out from hotel",
        "Drop at Jaisalmer Airport / Railway Station or drive to Jaipur",
        "Departure with memorable experiences"
      ]
    }
  ]
},
{
  "id": 43,
  "title": "Ayodhya Kashi & Prayagral",
  "subtitle": "A spiritually enriching journey covering the sacred cities of Ayodhya, Kashi, and Prayagral. This package blends devotion, heritage, and peaceful exploration, offering a soulful escape with guided darshans and comfortable travel.",
  "location": "Uttar Pradesh, India",
  "duration": "4 Nights - 5 Days",
  "price": "₹26,999",
  "originalPrice": "₹28,999",
  "startingPoints": [
    "Ayodhya"
  ],
  "groupSize": "Minimum 4+ Pax",
  "images": [
    {
      "id": 1,
      "src": "/northEast/Ayodhya.jpg",
      "alt": "Chardham Yatra Himalayas"
    }
  ],
  "inclusions": [
    "Airport pickup and drop as per itinerary",
    "Hotel accommodation on sharing basis",
    "Daily breakfast",
    "All transfers and sightseeing by private vehicle",
    "Driver allowance, fuel, toll and parking charges",
    "Local assistance during darshan"
  ],
  "exclusions": [
    "Flights or train tickets unless specified",
    "Lunch and dinner",
    "Temple special darshan or VIP pass charges",
    "Personal expenses (shopping, tips, laundry, phone bills)",
    "Anything not specifically mentioned in inclusions"
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "Arrival in Ayodhya & Local Darshan",
      "description": "Arrival and spiritual exploration of Ayodhya.",
      "details": [
        "Arrive at Ayodhya Airport (AYJ)",
        "Meet and greet with driver",
        "Transfer to hotel and check-in",
        "Afternoon local sightseeing",
        "Visit Ram Mandir for darshan",
        "Visit Hanuman Garhi (stairs involved)",
        "Visit Kanak Bhawan",
        "Evening free for leisure or aarti",
        "Overnight stay in Ayodhya"
      ]
    },
    {
      "day": 2,
      "title": "Ayodhya to Prayagral",
      "description": "Travel to the sacred confluence city of Prayagral.",
      "details": [
        "Breakfast at hotel",
        "Check-out from hotel",
        "Drive to Prayagral",
        "Visit Triveni Sangam",
        "Visit Anand Bhawan",
        "Visit Hanuman Mandir",
        "Evening free for leisure",
        "Overnight stay in Prayagral"
      ]
    },
    {
      "day": 3,
      "title": "Prayagral to Kashi",
      "description": "Proceed to the ancient city of Kashi (Varanasi).",
      "details": [
        "Breakfast and check-out",
        "Drive to Kashi",
        "Hotel check-in",
        "Evening Ganga Aarti at Dashashwamedh Ghat",
        "Explore local ghats",
        "Overnight stay in Kashi"
      ]
    },
    {
      "day": 4,
      "title": "Kashi Local Sightseeing",
      "description": "Spiritual and cultural exploration of Kashi.",
      "details": [
        "Early morning visit to Kashi Vishwanath Temple",
        "Visit Kalbhairav Temple",
        "Visit Sankat Mochan Hanuman Temple",
        "Boat ride on River Ganga (optional)",
        "Explore local markets",
        "Overnight stay in Kashi"
      ]
    },
    {
      "day": 5,
      "title": "Departure",
      "description": "Tour concludes with spiritual memories.",
      "details": [
        "Breakfast at hotel",
        "Check-out from hotel",
        "Drop at airport / railway station",
        "Tour ends"
      ]
    }
  ]
},

{
  "id": 51,
  "title": "Chardham Yatra",
  "subtitle": "Undertake the sacred Chardham Yatra across Uttarakhand—Yamunotri, Gangotri, Kedarnath, and Badrinath—on a spiritually enriching 10-day journey through the Himalayas. Known as Devbhoomi, this pilgrimage combines devotion, scenic mountain landscapes, holy rivers, and ancient temples.",
  "location": "Uttarakhand",
  "duration": "9 Nights - 10 Days",
  "price": "₹24,000",
  "originalPrice": "₹27,000",
  "startingPoints": [
    "Bangalore",
    "Delhi",
    "Haridwar"
  ],
  "maxAltitude": "11,755 ft",
  "images": [
    {
      "id": 1,
      "src": "/north/Chardham.jpg",
      "alt": "Chardham Yatra Himalayas"
    }
  ],
  "inclusions": [
    "Accommodation in hotels on sharing basis",
    "All transfers and sightseeing by private vehicle (as per itinerary)",
    "Daily breakfast",
    "Experienced driver and trip coordination",
    "Assistance throughout the yatra"
  ],
  "exclusions": [
    "Airfare / train tickets to starting point",
    "Lunches, dinners, and snacks",
    "Pony, doli, helicopter, or porter charges",
    "Entry fees and temple donations",
    "Personal expenses",
    "Travel insurance & medical expenses",
    "Anything not mentioned in inclusions"
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "Haridwar to Barkot",
      "description": "Scenic drive via Mussoorie to Barkot, the base for Yamunotri.",
      "details": [
        "Distance: 210 km | Duration: 7–8 hrs | Altitude: 1352 m",
        "En route visit Kempty Falls and Mussoorie Lake",
        "Lunch stop recommended at Kempty Falls",
        "Check-in at hotel in Barkot",
        "Overnight stay in Barkot"
      ]
    },
    {
      "day": 2,
      "title": "Barkot – Yamunotri – Barkot",
      "description": "Holy trek to Yamunotri, the source of River Yamuna.",
      "details": [
        "Drive: 36 km | Trek: 6 km (one side)",
        "Start trek from Janki Chatti / Phool Chatti",
        "Visit Yamunotri Temple, Surya Kund & Divya Shila",
        "Take holy dip and collect Prasad",
        "Return trek and drive back to Barkot",
        "Overnight stay in Barkot"
      ]
    },
    {
      "day": 3,
      "title": "Barkot to Uttarkashi",
      "description": "Drive to the spiritual town of Uttarkashi on the banks of River Ganga.",
      "details": [
        "Distance: 100 km | Duration: 3–4 hrs | Altitude: 1352 m",
        "Check-in at hotel in Uttarkashi",
        "Visit Kashi Vishwanath Temple & Shakti Temple",
        "Evening free for rest",
        "Overnight stay in Uttarkashi"
      ]
    },
    {
      "day": 4,
      "title": "Uttarkashi – Gangotri – Uttarkashi",
      "description": "Pilgrimage to Gangotri, the origin of River Ganga.",
      "details": [
        "Distance: 100 km (each side) | Altitude: 3048 m",
        "Early morning drive with packed breakfast",
        "Stop at Gangnani for holy dip at Garam Kund",
        "Drive through scenic Harsil Valley",
        "Visit Gangotri Temple and perform pooja",
        "Return to Uttarkashi",
        "Overnight stay in Uttarkashi"
      ]
    },
    {
      "day": 5,
      "title": "Uttarkashi to Guptkashi",
      "description": "Long scenic drive towards Kedarnath region.",
      "details": [
        "Distance: 220 km | Duration: 8–9 hrs | Altitude: 1319 m",
        "Drive via Moolgarh and Lambgoan",
        "Check-in at hotel in Guptkashi",
        "Evening free for rest",
        "Overnight stay in Guptkashi"
      ]
    },
    {
      "day": 6,
      "title": "Guptkashi to Kedarnath",
      "description": "Journey to Kedarnath, one of the twelve Jyotirlingas of Lord Shiva.",
      "details": [
        "Drive: 30 km | Trek: 19 km",
        "Drive to Gaurikund",
        "Start trek to Kedarnath (pony/doli optional at own cost)",
        "Arrive at Kedarnath Temple",
        "Evening aarti & darshan",
        "Overnight stay near Kedarnath"
      ]
    },
    {
      "day": 7,
      "title": "Kedarnath to Guptkashi",
      "description": "Morning darshan followed by descent.",
      "details": [
        "Morning darshan at Kedarnath Temple",
        "19 km downhill trek to Gaurikund",
        "30 km drive back to Guptkashi",
        "Overnight stay in Guptkashi"
      ]
    },
    {
      "day": 8,
      "title": "Guptkashi to Badrinath",
      "description": "Drive to the sacred town of Badrinath.",
      "details": [
        "Distance: 215 km | Duration: 7 hrs | Altitude: 3133 m",
        "Check-in at hotel in Badrinath",
        "Visit Badrinath Temple for evening darshan",
        "Overnight stay in Badrinath"
      ]
    },
    {
      "day": 9,
      "title": "Badrinath to Joshimath to Rishikesh",
      "description": "Return journey via Joshimath with scenic views.",
      "details": [
        "Distance: 310 km",
        "Morning darshan at Badrinath Temple",
        "Drive via Joshimath",
        "Reach Rishikesh by evening",
        "Overnight stay in Rishikesh"
      ]
    },
    {
      "day": 10,
      "title": "Rishikesh to Haridwar / Delhi Drop",
      "description": "Departure and conclusion of the sacred yatra.",
      "details": [
        "Morning breakfast",
        "Drop at Haridwar / Delhi",
        "Tour ends with divine memories"
      ]
    }
  ]
},
{
  "id": 52,
  "title": "Kedarnath & Badrinath Yatra",
  "subtitle": "Embark on a spiritually uplifting journey to Kedarnath and Badrinath in Uttarakhand, two of the most revered Himalayan pilgrimage sites associated with the Pandavas and Adi Shankaracharya. This yatra blends devotion, scenic mountain drives, sacred temples, and holy rivers.",
  "location": "Uttarakhand",
  "duration": "5 Nights - 6 Days",
  "price": "₹24,000",
  "originalPrice": "₹27,000",
  "startingPoints": [
    "Haridwar",
    "Delhi",
    "Bangalore"
  ],
  "images": [
    {
      "id": 1,
      "src": "/north/Kedarnath.jpg",
      "alt": "Chardham Yatra Himalayas"
    }
  ],
  "inclusions": [
    "Transportation from Haridwar to Rishikesh as per itinerary",
    "Hotel accommodation on sharing basis",
    "Daily breakfast (5) and dinner (4)",
    "Pick-up and drop as per itinerary",
    "Entry fees, trek guide, and local support",
    "River rafting in Rishikesh",
    "Experienced driver and trip coordination"
  ],
  "exclusions": [
    "Lunch for the entire trip",
    "Personal expenses",
    "Porter, mule, doli, or helicopter charges",
    "Any extra sightseeing not mentioned in itinerary",
    "Travel insurance and medical expenses",
    "Anything not specifically mentioned in inclusions"
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "Haridwar to Guptkashi",
      "description": "Scenic drive along the Mandakini River to Guptkashi.",
      "details": [
        "Distance: 205–220 km | Duration: 7–8 hrs | Altitude: 1319 m",
        "Meet the team at Haridwar in the morning",
        "Enjoy views of Mandakini River at Tilwara",
        "Visit Ardh Narishwar Temple in Guptkashi",
        "Check-in at hotel",
        "Overnight stay in Guptkashi"
      ]
    },
    {
      "day": 2,
      "title": "Guptkashi – Sonprayag – Kedarnath",
      "description": "Journey to Kedarnath, one of the twelve Jyotirlingas of Lord Shiva.",
      "details": [
        "Drive: 30 km | Trek: 24 km | Altitude: 3384 m",
        "Drive to Sonprayag and reach Gaurikund",
        "Trek to Kedarnath (helicopter optional at own cost)",
        "Visit Kedarnath Temple and Shankaracharya Samadhi",
        "Dinner and overnight stay in Kedarnath"
      ]
    },
    {
      "day": 3,
      "title": "Kedarnath to Guptkashi",
      "description": "Morning darshan and return journey to Guptkashi.",
      "details": [
        "Morning breakfast",
        "Optional walk around Kedarnath surroundings",
        "Trek down to Gaurikund",
        "Drive back to Guptkashi (local jeep optional at own cost)",
        "Dinner and overnight stay in Guptkashi"
      ]
    },
    {
      "day": 4,
      "title": "Guptkashi to Badrinath",
      "description": "Drive to the holy town of Badrinath.",
      "details": [
        "Distance: 220 km | Duration: 8–9 hrs",
        "Check-in at hotel in Badrinath",
        "Holy bath at Taptkund",
        "Evening darshan and aarti at Badrinath Temple",
        "Visit Brahmakapal and nearby attractions (Mana Village, Vyas Gufa, Mata Murti Temple, Charanpaduka)",
        "Dinner and overnight stay in Badrinath"
      ]
    },
    {
      "day": 5,
      "title": "Badrinath to Rishikesh",
      "description": "Return journey with visits to sacred sites in Rishikesh.",
      "details": [
        "Distance: ~300 km | Duration: 10 hrs",
        "Morning breakfast",
        "Drive to Rishikesh",
        "Visit Ram Jhula, Laxman Jhula, Triveni Ghat",
        "Attend evening Ganga Aarti",
        "Dinner and overnight stay in Rishikesh"
      ]
    },
    {
      "day": 6,
      "title": "Rishikesh – River Rafting – Drop",
      "description": "Adventure and farewell.",
      "details": [
        "Morning breakfast",
        "Enjoy river rafting in Rishikesh (included)",
        "Return to hotel, freshen up and check-out",
        "Drop at Rishikesh / Haridwar",
        "Tour concludes with divine memories"
      ]
    }
  ]
},
{
  "id": 53,
  "title": "Explore Discover Kashmir",
  "subtitle": "A scenic Kashmir journey covering Srinagar, Gulmarg, Sonmarg, Pahalgam, and a unique houseboat stay. This tour blends nature, spirituality, snow landscapes, lakes, gardens, and local culture with guided experiences.",
  "location": "Kashmir",
  "duration": "5 Nights - 6 Days",
  "price": "On Request",
  "startingPoints": [
    "Bangalore",
    "Delhi"
  ],
  "dates": "Flexible Dates",
  "groupSize": "Group / Customized",
   "images": [
    {
      "id": 1,
      "src": "/north/Kashmir.jpg",
      "alt": "Chardham Yatra Himalayas"
    }
  ],
  "transportation": "Airport transfers and sightseeing by private vehicle",
  "inclusions": [
    "Airport pickup and drop from Srinagar",
    "Hotel accommodation on sharing basis",
    "Daily dinner at hotels",
    "1-hour complimentary Shikara ride on Dal Lake",
    "All sightseeing as per itinerary",
    "Professional local guide support",
    "All entry fees mentioned in itinerary"
  ],
  "exclusions": [
    "Airfare or train tickets",
    "Personal expenses and tips",
    "Optional activities like pony rides and Gondola tickets",
    "Local taxi charges for Aru Valley, Betaab Valley, and Chandanwari",
    "Anything not mentioned in inclusions"
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "Arrival in Srinagar & Local Sightseeing",
      "description": "Arrival and explore Srinagar’s iconic gardens and temples.",
      "details": [
        "Arrival at Srinagar Airport and hotel check-in assistance",
        "Visit Mughal Gardens – Nishat Bagh, Shalimar Bagh, and Chashma Shahi",
        "Visit Hazratbal Shrine",
        "Visit Shankaracharya Temple",
        "Dinner and overnight stay at Srinagar hotel"
      ]
    },
    {
      "day": 2,
      "title": "Srinagar – Gulmarg Excursion",
      "description": "Full-day excursion to Gulmarg, famous for snow landscapes and gondola rides.",
      "details": [
        "Breakfast at hotel",
        "Drive to Gulmarg",
        "Explore world-famous ski slopes and 18-hole golf course",
        "Enjoy views of Nanga Parbat",
        "Visit Apharwat Peak via Gondola (Phase 1 & 2 – optional)",
        "Continue sightseeing en route including Doodhpatri",
        "Return to Srinagar hotel",
        "Dinner and overnight stay in Srinagar"
      ]
    },
    {
      "day": 3,
      "title": "Srinagar – Sonmarg",
      "description": "Day trip to Sonmarg, the Meadow of Gold.",
      "details": [
        "Breakfast at hotel",
        "Drive to Sonmarg (Altitude 2,730 m)",
        "Enjoy views of snow-clad mountains and Sindh River",
        "Optional pony ride to Thajiwas Glacier",
        "Visit Kheer Bhawani Temple",
        "Check-in to Sonmarg hotel",
        "Dinner and overnight stay in Sonmarg"
      ]
    },
    {
      "day": 4,
      "title": "Sonmarg – Srinagar Houseboat",
      "description": "Transfer to Srinagar with houseboat experience.",
      "details": [
        "Breakfast and checkout from Sonmarg",
        "Proceed to Srinagar",
        "Check-in to Srinagar houseboat",
        "Enjoy scenic views of snow, meadows, and valleys",
        "Complimentary 1-hour Shikara ride on Dal Lake",
        "Overnight stay at Srinagar houseboat"
      ]
    },
    {
      "day": 5,
      "title": "Srinagar – Pahalgam",
      "description": "Journey to Pahalgam, the Valley of Shepherds.",
      "details": [
        "Breakfast and checkout from houseboat",
        "Drive to Pahalgam",
        "En route visit Saffron fields",
        "Visit Awantipura Ruins",
        "Visit Anantnag Sulphur Springs",
        "Arrive in Pahalgam",
        "Check-in to hotel",
        "Dinner and overnight stay in Pahalgam",
        "Note: Aru Valley, Betaab Valley & Chandanwari require local taxis"
      ]
    },
    {
      "day": 6,
      "title": "Pahalgam Sightseeing & Departure",
      "description": "Tour concludes with departure from Srinagar.",
      "details": [
        "Breakfast at hotel",
        "Checkout from hotel",
        "Proceed to Srinagar Airport",
        "Departure to onward destination",
        "Tour ends with beautiful memories of Kashmir"
      ]
    }
  ],
},
{
  "id": 54,
  "title": "Explore Manali, Kullu & Kasol",
  "subtitle": "A refreshing Himalayan escape covering Manali, Solang Valley, Kullu, and Kasol. This tour blends scenic mountain drives, temples, adventure activities, river rafting, hot springs, camping experiences, and relaxed hill-town vibes with comfortable stays and guided sightseeing.",
  "location": "Himachal Pradesh",
  "duration": "4 Nights - 5 Days",
  "price": "₹24,999/-",
  "originalPrice": "₹28,999/-",
  "startingPoints": [
    "Delhi",
    "Bangalore"
  ],
  "dates": "Flexible Dates",
  "groupSize": "Group / Customized",
  "images": [
    {
      "id": 1,
      "src": "/north/Manali.jpg",
      "alt": "Manali Solang Valley"
    }
  ],
  "transportation": "AC Volvo transfers, private vehicles for sightseeing, and overnight intercity travel as per itinerary",
  "inclusions": [
    "Flights (Bangalore to Bangalore)",
    "AC Volvo transfers from Delhi to Manali and Kasol to Delhi",
    "3 nights hotel accommodation and 1 night riverside camping",
    "Daily breakfast and dinner (4 breakfasts & 3 dinners)",
    "All sightseeing and transfers by private vehicle",
    "Driver charges, fuel, tolls, parking, and permits",
    "Tour guide support for groups above 10 people"
  ],
  "exclusions": [
    "Adventure activities such as paragliding, skiing, zorbing, snow scooter, and river rafting",
    "Entry fees at monuments and attractions",
    "Personal expenses such as laundry, tips, beverages, and shopping",
    "Professional guide charges unless mentioned",
    "Any services not mentioned in inclusions"
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "Delhi to Manali – Overnight Journey",
      "description": "Begin your Himalayan journey with an overnight drive to Manali.",
      "details": [
        "Arrival in Delhi",
        "Board AC Volvo bus from Delhi to Manali",
        "Overnight journey to Manali"
      ]
    },
    {
      "day": 2,
      "title": "Arrival in Manali & Local Sightseeing",
      "description": "Explore Manali’s temples, monasteries, and scenic attractions.",
      "details": [
        "Arrival in Manali and hotel check-in",
        "Freshen up and breakfast",
        "Visit Hadimba Devi Temple",
        "Visit Ghatotkach Temple",
        "Visit Club House",
        "Visit Vashisht Hot Water Springs",
        "Visit Tibetan Monastery and Van Vihar",
        "Return to hotel, dinner and relaxation",
        "Overnight stay in Manali"
      ]
    },
    {
      "day": 3,
      "title": "Solang Valley Adventure & Optional Atal Tunnel",
      "description": "A day filled with adventure activities and breathtaking mountain views.",
      "details": [
        "Breakfast at hotel",
        "Visit Solang Valley",
        "Enjoy optional activities such as paragliding, zorbing, skiing, and snow scooter ride",
        "Optional drive through Atal Tunnel (subject to availability)",
        "Lunch at a local restaurant (own expense)",
        "Return to hotel in the evening",
        "Dinner and overnight stay in Manali"
      ]
    },
    {
      "day": 4,
      "title": "Manali – Kullu – Kasol Excursion",
      "description": "Experience river rafting, scenic valleys, and riverside camping.",
      "details": [
        "Breakfast at hotel and checkout",
        "Proceed towards Kullu",
        "Enjoy white-water river rafting (optional)",
        "En-route visit Hanogi Mata Temple",
        "Visit Pandoh Dam",
        "Continue journey to Kasol",
        "Explore Kasol village in Parvati Valley (Mini Israel)",
        "Evening arrival at riverside campsite",
        "Enjoy music, bonfire, dinner",
        "Overnight stay at Kasol campsite"
      ]
    },
    {
      "day": 5,
      "title": "Kasol – Manikaran – Delhi Departure",
      "description": "Visit spiritual sites and return journey to Delhi.",
      "details": [
        "Breakfast at campsite",
        "Checkout and proceed to Manikaran Valley",
        "Visit Manikaran Gurudwara",
        "Visit Rama, Krishna, and Vishnu temples",
        "Experience natural hot water springs",
        "Enjoy Gurudwara langar",
        "Free time for shopping and exploration in Kasol",
        "Board AC Volvo bus for overnight journey to Delhi",
        "Tour ends with beautiful memories"
      ]
    }
  ],
  "contact": {
    "phone": [
      "+91-9649646645"
    ],
    "email": "trekkarindia@gmail.com",
    "website": "trekkarindia.com"
  }
},
{
  "id": 61,
  "title": "Spiti Valley – 2026 Highest Holi Celebration",
  "subtitle": "Celebrate the highest Holi festival in the heart of the Himalayas. This winter Spiti Valley expedition blends snow landscapes, ancient monasteries, remote villages, and the vibrant Sangla Holi celebration—an unforgettable cultural and adventure experience.",
  "location": "Himachal Pradesh",
  "duration": "8 Nights - 9 Days",
  "price": "₹21,999",
  "originalPrice": "₹25,000",
  "startingPoints": [
    "Delhi"
  ],
  "dates": "25th February – 5th March 2026",
  "maxAltitude": "15,039 ft",
  "images": [
    {
      "id": 1,
      "src": "/spiti/SpitiHoli.jpg",
      "alt": "Spiti Valley Winter Landscape"
    }
  ],
  "inclusions": [
    "Transportation from Delhi to Delhi as per itinerary",
    "Accommodation in hotels/homestays on sharing basis",
    "Daily breakfast and dinner",
    "All sightseeing as mentioned in itinerary",
    "Experienced trip leader and local support",
    "Sangla Holi celebration experience",
    "All inner-line permits and tolls"
  ],
  "exclusions": [
    "Lunches and any meals not mentioned in inclusions",
    "Personal expenses (shopping, tips, etc.)",
    "Adventure activities not mentioned",
    "Medical or travel insurance",
    "Anything not specifically mentioned in inclusions"
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "Delhi to Shimla (Overnight Journey)",
      "description": "Begin your Spiti Valley adventure with an overnight journey from Delhi to Shimla.",
      "details": [
        "Pickup from Delhi",
        "Overnight bus/tempo traveler journey",
        "Enjoy changing landscapes en route"
      ]
    },
    {
      "day": 2,
      "title": "Shimla to Sangla",
      "description": "Scenic drive through Himalayan towns and valleys.",
      "details": [
        "Pickup from Shimla bus stand",
        "Quick fresh-up and breakfast",
        "Drive via Kufri, Narkanda & Rampur",
        "Enjoy stunning mountain terrain views",
        "Dinner and overnight stay in Sangla"
      ]
    },
    {
      "day": 3,
      "title": "Sangla – Chitkul – Nako – Tabo",
      "description": "Journey deeper into the trans-Himalayan region.",
      "details": [
        "Morning breakfast",
        "Visit Chitkul village (last village near Indo-Tibet border)",
        "Drive towards Nako village",
        "Continue journey to Tabo",
        "Dinner and overnight stay in Tabo"
      ]
    },
    {
      "day": 4,
      "title": "Tabo – Dhankar – Pin Valley",
      "description": "Explore ancient monasteries and hidden valleys.",
      "details": [
        "Visit Tabo Monastery",
        "Drive to Dhankar Monastery & viewpoint",
        "Explore Pin Valley National Park",
        "Return to hotel",
        "Dinner and overnight stay"
      ]
    },
    {
      "day": 5,
      "title": "Tabo to Kaza",
      "description": "Travel to the heart of Spiti Valley.",
      "details": [
        "Breakfast at hotel",
        "Scenic drive to Kaza",
        "Explore local market (time permitting)",
        "Dinner and overnight stay in Kaza"
      ]
    },
    {
      "day": 6,
      "title": "Kaza Sightseeing",
      "description": "Explore iconic villages and monasteries of Spiti.",
      "details": [
        "Visit Key Monastery",
        "Explore Kibber village",
        "Visit Hikkim (world’s highest post office)",
        "Drive to Chicham Bridge",
        "Visit Langza village (fossil village)",
        "Return to Kaza",
        "Dinner and overnight stay in Kaza"
      ]
    },
    {
      "day": 7,
      "title": "Kaza to Sangla",
      "description": "Return journey towards Sangla Valley.",
      "details": [
        "Breakfast",
        "Drive back to Sangla",
        "Relax and prepare for Holi celebration",
        "Dinner and overnight stay in Sangla"
      ]
    },
    {
      "day": 8,
      "title": "Sangla Holi Celebration",
      "description": "Celebrate the highest Holi festival amidst snow-capped peaks.",
      "details": [
        "Traditional Holi celebration with locals",
        "Natural colors, folk music and dance",
        "Experience local culture and community spirit",
        "Evening leisure time",
        "Overnight stay in Sangla"
      ]
    },
    {
      "day": 9,
      "title": "Sangla to Shimla – Departure",
      "description": "Conclude the journey and head back with unforgettable memories.",
      "details": [
        "Early morning breakfast",
        "Drive from Sangla to Shimla",
        "Drop at Shimla",
        "Tour ends with lifelong memories"
      ]
    }
  ]
},
{
  "id": 71,
  "title": "Discover Vietnam in 6 Days",
  "subtitle": "An immersive Vietnam journey covering Hanoi, Halong Bay, Ninh Binh, Danang, Hoi An, and Bana Hills. This tour blends culture, heritage, nature, cruising, and iconic landmarks like the Golden Bridge with guided group experiences.",
  "location": "Vietnam",
  "duration": "5 Nights - 6 Days",
  "price": "₹35,999",
  "originalPrice": "₹40,000",
  "startingPoints": [
    "Hanoi"
  ],
  "dates": "23rd May – 28th May 2025",
  "groupSize": "SIC (Seat In Coach)",
  "images": [
    {
      "id": 1,
      "src": "/international/Vietnam6.jpg",
      "alt": "Spiti Valley Winter Landscape"
    }
  ],
  "accommodation": [
    {
      "city": "Hanoi",
      "nights": 2,
      "hotel": "Bonjour d’Annam Hotel (3 Star)",
      "roomType": "Deluxe Double",
      "mealPlan": "Breakfast"
    },
    {
      "city": "Danang",
      "nights": 3,
      "hotel": "Valencia Hotel (3 Star)",
      "roomType": "Superior Double",
      "mealPlan": "Breakfast"
    }
  ],
  "transportation": "SIC tours with private airport transfers and internal flight",
  "inclusions": [
    "Private airport pickup and drop",
    "3-star hotel accommodation on twin/double sharing with daily breakfast",
    "Internal flight Hanoi – Danang with 20kg checked baggage and 7kg cabin baggage",
    "Daily SIC group tours with transportation, guide, lunch, and entrance fees",
    "Halong Bay luxury day cruise with lunch",
    "Boat rides as per itinerary",
    "Bana Hills cable car ticket",
    "All sightseeing tickets as mentioned",
    "Tissues and water on coach",
    "Service charges and government taxes",
    "24/7 hotline support"
  ],
  "exclusions": [
    "Personal expenses, tips, and gratuities",
    "Travel insurance",
    "Personal beverages",
    "Anything not specifically mentioned in inclusions"
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "Hanoi Arrival & City Half Day Tour",
      "description": "Arrival in Hanoi followed by guided city sightseeing.",
      "details": [
        "Arrival at Hanoi Airport and transfer to hotel (Old Quarter)",
        "Drop luggage and relax",
        "Visit Ho Chi Minh Mausoleum (outside view)",
        "Lunch at local restaurant",
        "Visit Temple of Literature",
        "Visit Hoa Lo Prison Museum",
        "Visit Ngoc Son Temple at Hoan Kiem Lake",
        "Return to hotel",
        "Overnight stay in Hanoi"
      ]
    },
    {
      "day": 2,
      "title": "Hanoi – Halong Bay Luxury Day Cruise",
      "description": "Scenic cruise through the UNESCO World Heritage Halong Bay.",
      "details": [
        "Breakfast at hotel",
        "Pickup from Hanoi Old Quarter",
        "Drive to Tuan Chau Harbor",
        "Luxury cruise with set menu lunch",
        "View Fighting Chicken and Incense Burner Islets",
        "Visit Sung Sot Cave",
        "Kayaking or bamboo boat at Luon Cave",
        "Visit Titop Island (swimming or viewpoint trek)",
        "Sunset party on cruise",
        "Return to Hanoi",
        "Overnight stay in Hanoi"
      ]
    },
    {
      "day": 3,
      "title": "Hanoi – Ninh Binh – Fly to Danang",
      "description": "Explore Ninh Binh’s heritage and fly to Danang.",
      "details": [
        "Breakfast and hotel check-out",
        "Drive to Ninh Binh",
        "Visit Hoa Lu Ancient Capital",
        "Buffet lunch with local cuisine",
        "Boat ride at Trang An (UNESCO site)",
        "Cycling around village",
        "Visit Mua Cave viewpoint (500 steps)",
        "Return to Hanoi",
        "Transfer to airport",
        "Flight to Danang (Vietnam Airlines VN7155)",
        "Overnight stay in Danang"
      ]
    },
    {
      "day": 4,
      "title": "Marble Mountain – Coconut Jungle – Hoi An",
      "description": "Nature, culture, and lantern-lit evenings in Hoi An.",
      "details": [
        "Breakfast at hotel",
        "Visit Son Tra Peninsula (Monkey Mountain)",
        "Visit Linh Ung Pagoda",
        "Explore Marble Mountains and Am Phu Cave",
        "Visit Non Nuoc Stone Carving Village",
        "Lunch at local restaurant",
        "Basket boat ride at Cam Thanh Coconut Jungle",
        "Explore Hoi An Ancient Town",
        "Visit Japanese Bridge and old houses",
        "Dinner in Hoi An",
        "Boat ride on Hoai River and release lanterns",
        "Return to Danang",
        "Overnight stay in Danang"
      ]
    },
    {
      "day": 5,
      "title": "Bana Hills & Golden Bridge",
      "description": "Full-day excursion to Bana Hills and Golden Bridge.",
      "details": [
        "Breakfast at hotel",
        "Drive to Bana Hills",
        "Cable car ride",
        "Visit Golden Bridge (Hands of God)",
        "Visit Debay Wine Cellar",
        "Explore Le Jardin D’Amour Flower Garden",
        "Visit Linh Ung Pagoda",
        "Lunch at restaurant",
        "Visit French Village and Fantasy Park",
        "Return to hotel",
        "Overnight stay in Danang"
      ]
    },
    {
      "day": 6,
      "title": "Danang Departure",
      "description": "Tour concludes with departure from Danang.",
      "details": [
        "Breakfast at hotel",
        "Free time for leisure",
        "Transfer to Danang Airport",
        "Tour ends with memorable experiences"
      ]
    }
  ]
},
{
  "id": 73,
  "title": "Explore Andaman & Nicobar Islands",
  "subtitle": "A tropical island escape covering Port Blair, Havelock Island, and Neil Island. This tour blends pristine beaches, coral reefs, historical landmarks, island cruises, sunsets, and marine life with comfortable stays and guided sightseeing.",
  "location": "Andaman & Nicobar Islands",
  "duration": "5 Nights - 6 Days",
  "price": "₹26,000/- ",
  "originalPrice": "₹30,000",
  
  "dates": "Flexible Dates",
  "groupSize": "Group / Customized",
  "images": [
    {
      "id": 1,
      "src": "/international/Andaman.jpg",
      "alt": "Spiti Valley Winter Landscape"
    }
  ],
  "accommodation": [
    {
      "city": "Port Blair",
      "nights": 2,
      "hotel": "Deluxe Category Hotel",
      "roomType": "Double Sharing",
      "mealPlan": "Breakfast & Dinner"
    },
    {
      "city": "Havelock Island",
      "nights": 1,
      "hotel": "Deluxe Category Resort",
      "roomType": "Double Sharing",
      "mealPlan": "Breakfast & Dinner"
    },
    {
      "city": "Neil Island",
      "nights": 1,
      "hotel": "Deluxe Category Hotel",
      "roomType": "Double Sharing",
      "mealPlan": "Breakfast & Dinner"
    },
    {
      "city": "Port Blair",
      "nights": 1,
      "hotel": "Deluxe Category Hotel",
      "roomType": "Double Sharing",
      "mealPlan": "Breakfast & Dinner"
    }
  ],
  "transportation": "Airport transfers, inter-island ferry transfers, and sightseeing by AC vehicle as per itinerary",
  "inclusions": [
    "Airport pickup and drop at Port Blair",
    "5 nights accommodation on double sharing basis in deluxe category hotels",
    "5 breakfasts and 5 dinners",
    "AC vehicle for sightseeing as per itinerary (not on disposal basis)",
    "Round-trip ferry tickets to Havelock and Neil Island (base category seats)",
    "Entry permits and sightseeing tickets as per itinerary",
    "All parking charges",
    "All applicable government and service taxes",
    "Assistance and support at all arrival and departure points"
  ],
  "exclusions": [
    "Airfare and train fare",
    "Travel insurance",
    "Optional water sports and adventure activities",
    "Personal expenses such as laundry, bottled water, snacks, tips, and porter charges",
    "Professional guide charges unless specified",
    "Camera or video fees at sightseeing locations",
    "Any services not mentioned in inclusions",
    "Additional costs due to natural calamities, political unrest, or unforeseen circumstances"
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "Arrival at Port Blair – Local Sightseeing & Sound and Light Show",
      "description": "Arrival in Port Blair followed by beach visit, historic sightseeing, and an evening cultural show.",
      "details": [
        "Arrival at Port Blair Airport and transfer to hotel",
        "Check-in and freshen up",
        "Visit Corbyn’s Cove Beach for relaxation and swimming",
        "Explore the historic Cellular Jail",
        "Witness the Sound and Light Show at Cellular Jail",
        "Overnight stay at Port Blair"
      ]
    },
    {
      "day": 2,
      "title": "Port Blair to Havelock Island – Radhanagar Beach",
      "description": "Cruise to Havelock Island and visit Asia’s famous Radhanagar Beach.",
      "details": [
        "Early morning transfer to jetty",
        "Inter-island cruise to Havelock Island (approx. 1.5 hours)",
        "Check-in to resort and relax",
        "Visit Radhanagar Beach (Beach No. 7)",
        "Enjoy turquoise waters and white sandy beach",
        "Overnight stay at Havelock Island"
      ]
    },
    {
      "day": 3,
      "title": "Havelock to Neil Island – Beach Exploration",
      "description": "Travel to Neil Island and explore serene beaches and sunsets.",
      "details": [
        "Breakfast and checkout from Havelock",
        "Boat transfer to Neil Island",
        "Check-in to hotel and freshen up",
        "Visit Bharatpur Beach for snorkeling and water activities",
        "Visit Laxmanpur Beach for sunset views",
        "Overnight stay at Neil Island"
      ]
    },
    {
      "day": 4,
      "title": "Neil Island – Natural Bridge & Return to Port Blair",
      "description": "Explore natural rock formations and return to Port Blair.",
      "details": [
        "Breakfast at hotel",
        "Visit Natural Coral Bridge",
        "Board ferry back to Port Blair",
        "Hotel check-in and leisure time",
        "Evening free for shopping at local markets",
        "Overnight stay at Port Blair"
      ]
    },
    {
      "day": 5,
      "title": "Excursion to North Bay Island & Ross Island",
      "description": "Full-day marine and heritage excursion.",
      "details": [
        "Breakfast at hotel",
        "Boat transfer to North Bay Island (Coral Island)",
        "Optional activities: snorkeling, scuba diving, sea walk, jet ski, glass-bottom boat ride",
        "Visit Ross Island with colonial ruins and wildlife",
        "Return to Port Blair",
        "Overnight stay at Port Blair"
      ]
    },
    {
      "day": 6,
      "title": "Departure from Port Blair",
      "description": "Tour concludes with departure.",
      "details": [
        "Breakfast at hotel",
        "Hotel checkout",
        "Transfer to Port Blair Airport",
        "Departure with memorable experiences of Andaman Islands"
      ]
    }
  ],
},
{
  "id": 72,
  "title": "Vietnam Tour – 8 Nights / 9 Days",
  "subtitle": "An immersive journey across Hanoi, Halong Bay, Ninh Binh, Danang, Hoi An, and Phu Quoc covering culture, heritage, cruises, beaches, theme parks, and island hopping experiences.",
  "location": "Vietnam",
  "duration": "8 Nights - 9 Days",
  "price": "₹44,999 per person*",
  "startingPoints": [
    "Bangalore"
  ],
  "dates": "Flexible Dates",
  "groupSize": "Group / Customized",
  "images":  [
    {
      "id": 1,
      "src":  "/international/Vietnam9-1.jpg",
      "alt": "Spiti Valley Winter Landscape"
    },
  ],
  "transportation": "Airport transfers, internal flights, sightseeing by AC vehicle, and cruise transfers as per itinerary",
  "inclusions": [
    "Accommodation as per itinerary",
    "Daily breakfast",
    "Airport transfers",
    "Sightseeing as per itinerary"
  ],
  "exclusions": [
    "International and domestic airfare",
    "Visa fees",
    "Travel insurance",
    "Personal expenses",
    "Any services not mentioned in inclusions"
  ],
  "itinerary": [
    {
      "day": 0,
      "title": "Bangalore to Hanoi",
      "description": "Arrival in Hanoi with leisure evening.",
      "details": [
        "Departure from Bangalore to Hanoi",
        "Arrival at Hanoi International Airport",
        "Meet & greet by local representative",
        "Transfer to hotel and check-in",
        "Evening free for leisure or local market visit",
        "Overnight stay in Hanoi"
      ]
    },
    {
      "day": 1,
      "title": "Hanoi City Tour",
      "description": "Full-day guided tour of Hanoi’s iconic landmarks.",
      "details": [
        "Breakfast at hotel",
        "Visit Ho Chi Minh Mausoleum (outside view)",
        "Visit One Pillar Pagoda",
        "Visit Temple of Literature",
        "Visit Hoan Kiem Lake and Old Quarter",
        "Overnight stay in Hanoi"
      ]
    },
    {
      "day": 2,
      "title": "Hanoi to Halong Bay Cruise",
      "description": "Scenic drive and overnight cruise at Halong Bay.",
      "details": [
        "Breakfast at hotel",
        "Drive to Halong Bay",
        "Board cruise and enjoy limestone karst views",
        "Lunch on cruise",
        "Kayaking or cave visit (subject to cruise itinerary)",
        "Overnight stay on cruise or Halong area"
      ]
    },
    {
      "day": 3,
      "title": "Halong Bay – Ninh Binh – Hanoi",
      "description": "Explore Vietnam’s natural heritage and return to Hanoi.",
      "details": [
        "Early breakfast",
        "Visit Ninh Binh (Tam Coc or Trang An)",
        "Boat ride through limestone landscapes",
        "Visit Bai Dinh Pagoda",
        "Return to Hanoi",
        "Overnight stay in Hanoi"
      ]
    },
    {
      "day": 4,
      "title": "Hanoi to Danang – Hoi An",
      "description": "Flight to central Vietnam with cultural exploration.",
      "details": [
        "Breakfast at hotel",
        "Flight from Hanoi to Danang",
        "Danang city tour",
        "Visit Marble Mountains",
        "Drive to Hoi An",
        "Hoi An Ancient Town walking tour",
        "Overnight stay in Hoi An / Danang"
      ]
    },
    {
      "day": 5,
      "title": "Danang to Phu Quoc",
      "description": "Beach destination transfer and relaxation.",
      "details": [
        "Breakfast at hotel",
        "Transfer to airport",
        "Flight to Phu Quoc",
        "Hotel check-in",
        "Relax at the beach",
        "Overnight stay in Phu Quoc"
      ]
    },
    {
      "day": 6,
      "title": "Phu Quoc – Vinpearl Safari & Theme Park",
      "description": "Full-day wildlife and theme park experience.",
      "details": [
        "Breakfast at hotel",
        "Visit Vinpearl Safari",
        "Visit VinWonders / Vinpearl Theme Park",
        "Enjoy rides and attractions",
        "Overnight stay in Phu Quoc"
      ]
    },
    {
      "day": 7,
      "title": "Phu Quoc – 4 Island Tour & Kiss Bridge",
      "description": "Island hopping, snorkeling, and sunset views.",
      "details": [
        "Breakfast at hotel",
        "Full-day 4 Island hopping tour",
        "Snorkeling and beach activities",
        "Visit Kiss Bridge and Sunset Town",
        "Overnight stay in Phu Quoc"
      ]
    },
    {
      "day": 8,
      "title": "Phu Quoc to Bangalore",
      "description": "Departure and tour conclusion.",
      "details": [
        "Breakfast at hotel",
        "Hotel check-out",
        "Transfer to airport",
        "Return flight to Bangalore",
        "Tour ends with beautiful memories"
      ]
    }
  ]
}

]
