// Central configuration and editable data for Modern Dhampur Play School (MDPS)

export const schoolData = {
  name: "Modern Dhampur Play School",
  shortName: "MDPS",
  tagline: "A Happy Beginning to a Bright Future",
  description:
    "Modern Dhampur Play School (MDPS) is a premier early childhood learning center located in Dhampur, Bijnor. We provide a safe, joyful, and nurturing environment where young minds blossom through curiosity, creative play, and foundational learning.",

  contact: {
    phone: "+91 98118 25699",
    phoneClean: "+919811825699",
    email: "info@mdpsdhampur.com", // editable placeholder
    address: {
      plot: "Plot No. 313",
      street: "Backside of Bankey Bihari Medical Store, Seohara Chungi Road",
      landmark: "Near Dropda Devi Mandir, Udaipur",
      city: "Dhampur",
      district: "Bijnor",
      state: "Uttar Pradesh",
      pincode: "246761",
      country: "India",
      full: "Backside of Bankey Bihari Medical Store, Plot No. 313, Seohara Chungi Road, Near Dropda Devi Mandir, Udaipur, Dhampur, Bijnor, Uttar Pradesh 246761, India."
    },
    timings: "Monday - Saturday: 8:30 AM - 1:30 PM (Sunday Closed)",
    officeHours: "Office Timings: 8:00 AM - 3:00 PM",
    mapsSearchUrl: "https://www.google.com/maps/search/?api=1&query=Modern+Dhampur+Play+School+Dhampur+Bijnor",
    // Embed map URL for Dhampur, Bijnor
    mapsEmbedUrl: "https://www.google.com/maps?q=Modern+Dhampur+Play+School+Plot+313+Seohara+Chungi+Road+Dhampur+Bijnor+Uttar+Pradesh+246761&output=embed",
    whatsappUrl: "https://wa.me/919811825699?text=Hello%20Modern%20Dhampur%20Play%20School%2C%20I%20would%20like%20to%20enquire%20about%20admissions."
  },

  about: {
    story:
      "Modern Dhampur Play School was established with a heartfelt vision to provide children in Dhampur and surrounding areas with a joyful, stimulating, and child-centric foundation. We believe that the earliest years of education shape a child's confidence, social skills, and love for lifelong learning.",
    vision:
      "To foster an inspiring and wholesome learning haven where every child feels valued, encouraged, and empowered to explore their innate potential with confidence and joy.",
    mission:
      "To deliver holistic early childhood education integrating playful discovery, character building, foundational numeracy and literacy, and social-emotional development in a loving and secure setting.",
    approach: [
      {
        title: "Play-Way Methodology",
        desc: "Learning through guided games, puzzles, sensory play, and interactive storytelling.",
        icon: "Gamepad2"
      },
      {
        title: "Child-Centric Focus",
        desc: "Every child learns at their unique pace. We cultivate individual talents with personalized care.",
        icon: "UserHeart"
      },
      {
        title: "Nurturing & Secure",
        desc: "Clean, hygienic, CCTV-monitored, and child-proof spaces designed for carefree exploration.",
        icon: "ShieldCheck"
      },
      {
        title: "Foundational Skills",
        desc: "Building phonics, vocabulary, motor control, emotional resilience, and active curiosity.",
        icon: "Sparkles"
      }
    ],
    highlights: [
      "Dedicated, caring, and experienced early-childhood educators",
      "Vibrant, air-cooled, child-safe, and hygienic classrooms",
      "Interactive activity-based learning materials and educational toys",
      "Continuous parent-teacher communication and progress updates",
      "Holistic focus on motor skills, cognitive growth, and social behavior"
    ]
  },

  programs: [
    {
      id: "playgroup",
      name: "Playgroup",
      ageGroup: "2 - 3 Years (Editable by School)",
      timing: "9:00 AM - 11:30 AM",
      badgeColor: "bg-orange-100 text-orange-800 border-orange-200",
      accentColor: "from-orange-500 to-amber-500",
      description:
        "Our Playgroup program introduces young toddlers to a cheerful school environment filled with sensory games, rhymes, and warmth, encouraging smooth transition away from home.",
      learningObjectives: [
        "Developing sensory awareness and hand-eye coordination",
        "Encouraging social interaction and peer sharing",
        "Introducing nursery rhymes, finger plays, and speech habits",
        "Building comfort in a classroom environment"
      ],
      activities: [
        "Sensory sand & water play",
        "Finger painting & scribbling",
        "Music, rhythmic movement & action songs",
        "Circle time & gentle storytelling"
      ],
      image: "/assets/programs_png/programs_png_1.png"
    },
    {
      id: "nursery",
      name: "Nursery",
      ageGroup: "3 - 4 Years (Editable by School)",
      timing: "8:30 AM - 12:00 PM",
      badgeColor: "bg-teal-100 text-teal-800 border-teal-200",
      accentColor: "from-teal-400 to-teal-600",
      description:
        "In Nursery, children embark on early language, pre-writing, number sense, and conversational skills through hands-on activities, colorful flashcards, and imaginative play.",
      learningObjectives: [
        "Alphabet recognition and early phonetic sounds",
        "Number readiness and sorting by shape, size, and color",
        "Fine motor skills like holding crayons and clay modeling",
        "Expressive speech and simple conversational sentences"
      ],
      activities: [
        "Clay sculpting and paper tearing craft",
        "Alphabet recognition games and sound matching",
        "Outdoor play & balance building games",
        "Role play and dress-up activities"
      ],
      image: "/assets/programs_png/programs_png_2.png"
    },
    {
      id: "lkg",
      name: "Lower Kindergarten (LKG)",
      ageGroup: "4 - 5 Years (Editable by School)",
      timing: "8:30 AM - 12:30 PM",
      badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
      accentColor: "from-amber-500 to-orange-500",
      description:
        "LKG bridges playful discovery with structured foundational learning. Children learn two-letter words, basic pencil grip, Hindi Swar/Vyanjan basics, and environmental awareness.",
      learningObjectives: [
        "Letter formation, pencil grip, and basic phonetic blending",
        "Counting, sequential order, and basic addition concepts",
        "Awareness of nature, animals, community helpers, and good habits",
        "Confidence in group participation and classroom presentations"
      ],
      activities: [
        "Worksheet tracing, coloring, and drawing",
        "Math counter manipulatives and pattern building",
        "Show-and-tell speech sessions",
        "Indoor board games and cooperative physical play"
      ],
      image: "/assets/programs_png/programs_png_3.png"
    },
    {
      id: "ukg",
      name: "Upper Kindergarten (UKG)",
      ageGroup: "5 - 6 Years (Editable by School)",
      timing: "8:30 AM - 1:00 PM",
      badgeColor: "bg-cyan-100 text-cyan-800 border-cyan-200",
      accentColor: "from-teal-500 to-navy-900",
      description:
        "UKG prepares young learners seamlessly for formal primary schooling with comprehensive reading, writing, mathematical concepts, and independent problem-solving.",
      learningObjectives: [
        "Sentence reading, sight words, and short paragraph comprehension",
        "Addition, subtraction readiness, and measurement basics",
        "Bilingual language proficiency in English and Hindi basics",
        "Self-discipline, focus, and teamwork for Grade 1 readiness"
      ],
      activities: [
        "Story reading and spelling word-puzzles",
        "Basic science curiosity experiments and plant growth exploration",
        "Creative art projects and craft exhibitions",
        "Stage recitation, elocution, and dance"
      ],
      image: "/assets/programs_png/programs_png_4.png"
    }
  ],

  facilities: [
    {
      id: "classrooms",
      title: "Vibrant & Child-Safe Classrooms",
      category: "Classrooms",
      desc: "Brightly decorated, airy rooms equipped with child-sized ergonomic furniture, rounded corners, soft carpets, and age-appropriate learning corners.",
      icon: "Sparkles",
      image: "/assets/facilities_png/facilities_png_1.png",
      status: "Verified Facility",
      details: ["Rounded edge furniture", "Well-ventilated spaces", "Colorful instructional wall murals", "Accessible book & toy shelves"]
    },
    {
      id: "environment",
      title: "Joyful Learning Environment",
      category: "Learning Environment",
      desc: "A warm, welcoming atmosphere where children feel comfortable, celebrated, and eager to come to school every single morning.",
      icon: "Heart",
      image: "/assets/facilities_png/facilities_png_2.png",
      status: "Verified Facility",
      details: ["Low student-teacher ratio", "Affectionate & attentive staff", "Positive reinforcement culture", "Daily circle & emotional check-in"]
    },
    {
      id: "indoor-play",
      title: "Interactive Indoor Activity Zone",
      category: "Indoor Activities",
      desc: "Equipped with building blocks, Montessori sensory puzzles, safe soft-play equipment, role-play props, and reading pods.",
      icon: "Shapes",
      image: "/assets/facilities_png/facilities_png_3.png",
      status: "Verified Facility",
      details: ["Montessori cognitive materials", "Safe soft play mats", "Role play kitchen & market corners", "Puzzle and shape sorters"]
    },
    {
      id: "outdoor-play",
      title: "Supervised Outdoor Play Area",
      category: "Outdoor Play",
      desc: "Safe physical play zone allowing children to run, play balance games, develop gross motor abilities, and soak in fresh morning sunshine.",
      icon: "Sun",
      image: "/assets/facilities_png/facilities_png_4.png",
      status: "Confirmed by School",
      details: ["Protected ground surface", "Age-appropriate mini slides & tricycles", "Ball games & agility courses", "Continuous staff supervision"]
    },
    {
      id: "safety-hygiene",
      title: "Safety, Security & Hygiene",
      category: "Safety and Hygiene",
      desc: "Top priority given to child safety: CCTV surveillance, visitor logbooks, sanitized washrooms, pure RO drinking water, and first-aid readiness.",
      icon: "ShieldAlert",
      image: "/assets/facilities_png/facilities_png_5.png",
      status: "Verified Standard",
      details: ["CCTV monitored campus", "Clean, sanitized child-friendly washrooms", "RO purified drinking water", "First-aid kit & emergency protocols"]
    },
    {
      id: "creative-learning",
      title: "Creative Arts & Expression Corner",
      category: "Creative Learning",
      desc: "Dedicated stations for finger painting, clay modelling, musical instruments, puppetry, and imaginative storytelling.",
      icon: "Palette",
      image: "/assets/facilities_png/facilities_png_6.png",
      status: "Verified Facility",
      details: ["Non-toxic crayons & finger paints", "Percussion & music instruments", "Puppet stage & dramatic props", "Student craft showcase gallery"]
    }
  ],

  activities: [
    {
      id: "drawing-painting",
      title: "Drawing & Painting",
      category: "Arts & Craft",
      desc: "Unleashing fine motor dexterity and visual imagination using non-toxic paints, pastels, water colors, and finger painting.",
      image: "/assets/activities_png/activities_png_1.png",
      frequency: "Weekly",
      benefits: ["Color perception", "Hand strength", "Creative self-expression"]
    },
    {
      id: "dancing-music",
      title: "Dancing & Music",
      category: "Performing Arts",
      desc: "Rhythmic body movements, joyful nursery rhyme choreographies, and simple percussion instrument play that energize children.",
      image: "/assets/activities_png/activities_png_2.png",
      frequency: "Weekly",
      benefits: ["Rhythm & balance", "Gross motor coordination", "Expressive confidence"]
    },
    {
      id: "sports-games",
      title: "Sports & Fun Games",
      category: "Physical Fitness",
      desc: "Mini obstacle courses, bean bag toss, hopping games, race-relay, and supervised free play for physical vitality.",
      image: "/assets/activities_png/activities_png_3.png",
      frequency: "Daily Outdoor/Indoor",
      benefits: ["Stamina & agility", "Fair play & sharing", "Gross motor balance"]
    },
    {
      id: "festival-celebrations",
      title: "Festival Celebrations",
      category: "Cultural Values",
      desc: "Celebrating Diwali, Eid, Christmas, Janmashtami, Holi, Independence Day, and Republic Day with colorful traditional dresses and sweets.",
      image: "/assets/activities_png/activities_png_4.png",
      frequency: "Seasonal Events",
      benefits: ["Cultural unity", "Traditional awareness", "Joy of togetherness"]
    },
    {
      id: "cultural-activities",
      title: "Cultural & Stage Events",
      category: "Personality Development",
      desc: "Annual day performances, fancy dress shows, poem recitation, and skit presentations where every child gets their spotlight.",
      image: "/assets/activities_png/activities_png_5.png",
      frequency: "Term Events",
      benefits: ["Stage confidence", "Public speaking", "Overcoming shyness"]
    },
    {
      id: "classroom-activities",
      title: "Interactive Classroom Activities",
      category: "Cognitive Learning",
      desc: "Phonics bingo, sensory flashcards, sand tracing, story dramatization, and puzzle solving that make academics pure fun.",
      image: "/assets/activities_png/activities_png_6.png",
      frequency: "Daily",
      benefits: ["Problem solving", "Focus & memory", "Linguistic readiness"]
    }
  ],

  gallery: [
    {
      id: 1,
      title: "Joyful Learning Hour",
      category: "Classrooms",
      image: "/assets/gallery_png/gallery_png_1.png",
      caption: "Children engaging in interactive group learning in our airy classroom."
    },
    {
      id: 2,
      title: "Creative Painting Time",
      category: "Activities",
      image: "/assets/gallery_png/gallery_png_2.png",
      caption: "Exploring colors and creativity through guided painting."
    },
    {
      id: 3,
      title: "Celebration of Festivals",
      category: "Celebrations",
      image: "/assets/gallery_png/gallery_png_3.png",
      caption: "Vibrant festive celebrations fostering cultural harmony."
    },
    {
      id: 4,
      title: "Sensory Toys & Montessori Blocks",
      category: "Classrooms",
      image: "/assets/gallery_png/gallery_png_4.png",
      caption: "Developing spatial awareness and logic with Montessori blocks."
    },
    {
      id: 5,
      title: "Annual Sports & Play Day",
      category: "Events",
      image: "/assets/gallery_png/gallery_png_5.png",
      caption: "Fun athletic games encouraging healthy body movement and teamwork."
    },
    {
      id: 6,
      title: "Music & Rhyme Session",
      category: "Activities",
      image: "/assets/gallery_png/gallery_png_6.png",
      caption: "Singing rhymes with action gestures and rhythm instruments."
    },
    {
      id: 7,
      title: "Little Explorers in Garden",
      category: "Events",
      image: "/assets/gallery_png/gallery_png_7.png",
      caption: "Outdoor fresh air play with teachers ensuring full safety."
    },
    {
      id: 8,
      title: "Storytelling & Puppet Fun",
      category: "Activities",
      image: "/assets/gallery_png/gallery_png_8.png",
      caption: "Captivating story sessions opening young minds to wonder."
    },
    {
      id: 9,
      title: "Fancy Dress & Stage Performance",
      category: "Celebrations",
      image: "/assets/gallery_png/gallery_png_9.png",
      caption: "Young stars shining bright in fancy dress representations."
    }
  ],

  admissions: {
    notice: "Admissions Open for Academic Session 2025–26 / 2026–27. Limited seats per batch to preserve low child-teacher ratio.",
    steps: [
      {
        step: "01",
        title: "Submit Enquiry",
        desc: "Fill our online admission form, call us, or visit the school office in Dhampur to collect the admission kit."
      },
      {
        step: "02",
        title: "Campus Visit & Interaction",
        desc: "Visit our campus with your child to meet the educators, explore our classrooms, and understand our approach."
      },
      {
        step: "03",
        title: "Document Verification",
        desc: "Submit simple required identification documents along with the completed enrollment registration form."
      },
      {
        step: "04",
        title: "Welcome to MDPS Family",
        desc: "Receive the welcome kit, school calendar, and uniform guidelines, ready for your child's joyful journey!"
      }
    ],
    documents: [
      "Child's Birth Certificate (Copy)",
      "Child's Passport Size Photographs (4 Copies)",
      "Parents / Guardian Aadhar Card (Copy)",
      "Parents Passport Size Photographs (2 each)",
      "Immunization / Medical Record (Optional / Editable)",
      "Previous School Report Card (Only for UKG / Transfer students if applicable)"
    ],
    faqs: [
      {
        q: "What is the teacher-to-child ratio at MDPS?",
        a: "We maintain a dedicated low teacher-to-child ratio (approx 1:12 to 1:15) to ensure each child receives individual warmth and guidance."
      },
      {
        q: "What are the school timings for toddlers?",
        a: "Playgroup and Nursery run from 8:30/9:00 AM to 11:30/12:00 PM, while LKG and UKG typically conclude around 12:30/1:00 PM."
      },
      {
        q: "Can parents visit the school before taking admission?",
        a: "Absolutely! We warmly invite parents to tour our campus during office hours (Monday to Saturday, 8:30 AM to 1:30 PM)."
      },
      {
        q: "How does the school ensure safety?",
        a: "We have CCTV surveillance, child-safe infrastructure with rounded furniture, clean filtered water, and staff who supervise at all times."
      }
    ]
  },

  fees: {
    notice:
      "All fee figures shown below are indicative and subject to school administration confirmation. MDPS believes in high-quality, accessible early childhood education without hidden charges. Please contact the school office for current exact fee schedules.",
    academicYear: "2025–2026 / 2026–2027",
    tuitionStructure: [
      {
        program: "Playgroup",
        age: "2 - 3 Years",
        monthlyTuition: "₹ 1,000 - ₹ 1,500*",
        admissionFee: "₹ 1,500 - ₹ 2,500*",
        activityFee: "Included / Nominal",
        notes: "Includes daily activity materials and sensory learning kit"
      },
      {
        program: "Nursery",
        age: "3 - 4 Years",
        monthlyTuition: "₹ 1,200 - ₹ 1,600*",
        admissionFee: "₹ 1,500 - ₹ 2,500*",
        activityFee: "Included / Nominal",
        notes: "Covers worksheets, craft supplies, and festival celebrations"
      },
      {
        program: "LKG",
        age: "4 - 5 Years",
        monthlyTuition: "₹ 1,400 - ₹ 1,800*",
        admissionFee: "₹ 2,000 - ₹ 3,000*",
        activityFee: "Included / Nominal",
        notes: "Includes phonics materials, workbook supplements, and events"
      },
      {
        program: "UKG",
        age: "5 - 6 Years",
        monthlyTuition: "₹ 1,500 - ₹ 2,000*",
        admissionFee: "₹ 2,000 - ₹ 3,000*",
        activityFee: "Included / Nominal",
        notes: "Complete primary school transition curriculum and graduation"
      }
    ],
    otherCharges: [
      {
        name: "Registration & Prospectus",
        amount: "₹ 200 - ₹ 500*",
        frequency: "One-Time (At Enquiry)",
        description: "Official registration form and MDPS information handbook."
      },
      {
        name: "Annual Activity & Events Charge",
        amount: "₹ 1,000 - ₹ 1,800*",
        frequency: "Annual",
        description: "Covers festival functions, sports day, and cultural supplies."
      },
      {
        name: "Stationery & Learning Kit",
        amount: "As per actuals / kit requirement",
        frequency: "At start of session",
        description: "Books, custom notebooks, crayons, and craft materials."
      }
    ],
    paymentMethods: [
      {
        title: "UPI & Digital Payments",
        desc: "Google Pay, PhonePe, Paytm, or BHIM UPI at the school fee counter."
      },
      {
        title: "Cash at School Counter",
        desc: "Direct payment with stamped official fee receipt at our Dhampur office."
      },
      {
        title: "Bank Transfer (NEFT/IMPS)",
        desc: "Direct bank transfer to the school's authorized account (details available on request at office)."
      }
    ],
    feePolicy: [
      "Fees should be deposited by the 10th of every calendar month.",
      "A receipt is provided immediately upon payment. Please retain all payment receipts.",
      "Fee concessions may be reviewed on merit or sibling admissions at the discretion of the management.",
      "*All figures marked with an asterisk are indicative placeholders and can be verified directly at the school office."
    ]
  }
};
