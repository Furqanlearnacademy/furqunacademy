export interface Article {
  id: string;
  slug: string;
  title: string;
  arabicTitle: string;
  category: string;
  badge: string;
  readTime: string;
  views: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
    azharCertified: boolean;
  };
  image: string;
  excerpt: string;
  keyTakeaway: string;
  tags: string[];
  content: {
    intro: string;
    sections: {
      heading: string;
      arabicQuote?: string;
      body: string;
      bulletPoints?: string[];
    }[];
    conclusion: string;
  };
}

export const ARTICLES_DATA: Article[] = [
  {
    id: "art-1",
    slug: "art-of-tarteel-vocal-modulation-tajweed",
    title: "The Art of Tarteel: Mastering Vocal Modulation & Tajweed Phonetics",
    arabicTitle: "فن الترتيل وأسرار ضبط مخارج الحروف الصوتية ومقامات التلاوة",
    category: "Tajweed Masterclass",
    badge: "Featured Masterclass",
    readTime: "7 min read",
    views: "4.9k views",
    date: "Aug 12, 2026",
    author: {
      name: "Dr. Ahmed Al-Azhari",
      role: "Senior Tajweed Scholar & Qira'at Master",
      avatar: "/images/avatars/review-4.webp",
      azharCertified: true,
    },
    image: "/images/courses/tajweed.webp",
    excerpt:
      "An in-depth scholarly breakdown of how classical vocal resonance harmonizes with accurate articulatory phonetics (Makharij & Sifat) to produce reverent, tear-inspiring Tilawah.",
    keyTakeaway: "Mastering breath control and elongation (Madd) transforms recitation fluency and emotional resonance.",
    tags: ["Tajweed", "Tarteel", "Makharij", "Vocal Control", "Phonetics"],
    content: {
      intro: "Reciting the Holy Quran with Tarteel is a divine command revealed directly in Surah Al-Muzzammil: 'وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا' (And recite the Quran with measured recitation). True Tarteel is not merely melodic singing; it is the exact science of pronouncing every single letter from its designated point of articulation (Makhraj) while applying its intrinsic acoustic qualities (Sifat).",
      sections: [
        {
          heading: "1. The Acoustic Geometry of Arabic Articulation",
          arabicQuote: "مَخَارِجُ الحُرُوفِ سَبْعَةَ عَشَرْ عَلَى الَّذِي يَخْتَارُهُ مَنِ اخْتَبَرْ",
          body: "The Arabic language possesses deep guttural and pharyngeal sounds that do not exist in Germanic or Romance languages. Al-Imam Ibn Al-Jazari established the 17 standard articulation points, categorizing them into five major anatomical regions: Al-Jawf (the oral and throat cavity), Al-Halq (the throat), Al-Lisaan (the tongue), Ash-Shafataan (the lips), and Al-Khayshoom (the nasal cavity).",
          bulletPoints: [
            "Al-Halq (Throat): Throat letters (ء, هـ, ع, ح, غ, خ) require controlled pharyngeal constriction.",
            "Al-Lisaan (Tongue): 18 letters rely on the tip, sides, and root of the tongue interacting with the palate.",
            "Ash-Shafataan (Lips): Precise rounding for Waw (و) and complete closure for Meem (م) and Baa (ب).",
          ],
        },
        {
          heading: "2. Breath Management & Diaphragmatic Support",
          body: "A common impediment among non-native reciters is running out of breath mid-verse, leading to abrupt stops at linguistically forbidden junctures (Waqf Qabeeh). Classical Azhari training teaches reciters how to use diaphragmatic breathing rather than shallow chest breathing, sustaining long Madd rules without vocal strain.",
        },
        {
          heading: "3. Transforming Recitation from Mechanical to Spiritual",
          body: "When Tajweed rules become second nature through persistent 1-on-1 Talaqqi (direct oral transmission), the reciter's mind is liberated from mechanical decoding to engage in deep contemplation (Tadabbur) of the divine message.",
        },
      ],
      conclusion: "Begin your journey by sitting with a certified Sheikh who can hear your recitation and adjust your Makharij letter by letter. The Holy Quran is an oral tradition passed down through living chains of transmission.",
    },
  },
  {
    id: "art-2",
    slug: "step-by-step-memorize-surah-al-kahf",
    title: "Step-by-Step Guide: How Non-Arabic Speakers Can Memorize Surah Al-Kahf",
    arabicTitle: "دليل الحفظ المتقن لسورة الكهف لغير الناطقين بالعربية خطوة بخطوة",
    category: "Hifz & Memorization",
    badge: "Practical Guide",
    readTime: "5 min read",
    views: "3.2k views",
    date: "Aug 10, 2026",
    author: {
      name: "Ustadh Farooq Al-Mansoor",
      role: "Head of Hifz Programs at Furqan Learn Academy",
      avatar: "/images/avatars/review-1.webp",
      azharCertified: true,
    },
    image: "/images/courses/hifz.webp",
    excerpt:
      "Breaking down 110 verses into mnemonic thematic quarters, rhythmic repetitions, and daily retention loops designed for busy professionals.",
    keyTakeaway: "Thematic grouping reduces memorization cognitive fatigue by over 40%.",
    tags: ["Hifz", "Surah Al-Kahf", "Retention", "Memory", "Habits"],
    content: {
      intro: "Surah Al-Kahf holds immense spiritual virtues, protecting the believer from the trials of the Dajjal and illuminating the week with divine light when recited on Friday. For non-Arabic speakers, memorizing all 110 verses can feel overwhelming without a structured thematic blueprint.",
      sections: [
        {
          heading: "1. The 4 Stories Framework",
          body: "Surah Al-Kahf revolves around 4 central narratives that each counter a fundamental human trial: The People of the Cave (Trial of Faith), The Owner of the Two Gardens (Trial of Wealth), Musa and Al-Khidr (Trial of Knowledge), and Dhul-Qarnayn (Trial of Power). Memorizing with this narrative structure in mind anchors the sequence in your visual memory.",
        },
        {
          heading: "2. The 3-Tier Daily Retention Loop (Sabbaq, Sabqi, Manzil)",
          body: "The traditional Al-Azhar methodology divides daily Hifz into three non-negotiable components: new verses (Sabbaq), recent 5 pages (Sabqi), and distant revision (Manzil). Without daily Manzil, newly memorized verses fade within 14 days.",
          bulletPoints: [
            "Sabbaq: 3-5 new Ayahs memorized in the morning with 20 repetitions.",
            "Sabqi: Reciting the past 5 pages from memory before beginning the new portion.",
            "Manzil: Reciting 1 Juz or 1 complete Surah in daily Sunnah prayers.",
          ],
        },
      ],
      conclusion: "Consistency beats intensity. Memorizing just 3 Ayahs a day with solid revision will allow you to complete Surah Al-Kahf in under 6 weeks with lifelong retention.",
    },
  },
  {
    id: "art-3",
    slug: "ten-authentic-qiraat-connected-sanad-history",
    title: "The 10 Authentic Qira'at: Chains of Transmission (Sanad) Explained",
    arabicTitle: "القراءات العشر المتواترة وتاريخ أسانيدها المتصلة للنبي ﷺ",
    category: "Quranic Sciences",
    badge: "Scholarly Research",
    readTime: "9 min read",
    views: "2.8k views",
    date: "Aug 06, 2026",
    author: {
      name: "Dr. Mahmoud Al-Suhaili",
      role: "Ten Qira'at Ijazah Holder & Azhar Lecturer",
      avatar: "/images/avatars/avatar-3.webp",
      azharCertified: true,
    },
    image: "/images/courses/tafseer.webp",
    excerpt:
      "Explore the uninterrupted golden chains connecting modern Azhari reciters back through the Imams of Qira'at directly to the Companions and Prophet Muhammad ﷺ.",
    keyTakeaway: "Every single vowel and letter in the Mutawatir Qira'at is preserved through oral verification.",
    tags: ["Qira'at", "Sanad", "Ijazah", "Hadith & Isnad", "History"],
    content: {
      intro: "The Quran was revealed in seven Ahruf (dialectical modes) to facilitate recitation across various Arab tribes. From these divine modes emerged the 10 Mutawatir (mass-transmitted) Qira'at, preserved through rigorously documented chains of scholars across 14 centuries.",
      sections: [
        {
          heading: "1. What is an Ijazah with Continuous Sanad?",
          body: "An Ijazah is a formal accreditation granted by a certified Grand Sheikh to a student who has recited the entire Quran from memory with flawless Tajweed. The certificate lists every teacher in an unbroken chain going back to the Prophet Muhammad ﷺ, Jibreel (AS), and Allah (SWT).",
        },
        {
          heading: "2. The 10 Master Readers (Al-Qurra' Al-Ashrah)",
          body: "The ten authentic recitations are named after master Imams of the 1st and 2nd centuries Hijri: Nafi' (Madinah), Ibn Kathir (Makkah), Abu Amr (Basra), Ibn Amir (Damascus), Asim (Kufa), Hamzah (Kufa), Al-Kisa'i (Kufa), Abu Ja'far (Madinah), Ya'qub (Basra), and Khalaf (Kufa).",
        },
      ],
      conclusion: "Pursuing an Ijazah is one of the highest honors in Islamic scholarship, connecting your voice directly with the greatest reciters in Islamic history.",
    },
  },
  {
    id: "art-4",
    slug: "parents-handbook-raising-quran-loving-children",
    title: "Parent's Handbook: Raising Quran-Loving Children in the Digital Era",
    arabicTitle: "دليل الآباء: غرس حب القرآن في قلوب الأبناء في العصر الرقمي",
    category: "Family & Kids",
    badge: "Parenting Focus",
    readTime: "4 min read",
    views: "5.1k views",
    date: "Aug 03, 2026",
    author: {
      name: "Ustadha Maryam Hassan",
      role: "Child Islamic Education Specialist",
      avatar: "/images/avatars/review-2.webp",
      azharCertified: true,
    },
    image: "/images/courses/nooralbayan.webp",
    excerpt:
      "5 psychological and positive habit-building strategies to connect young hearts with daily Tilawah without screen fatigue or resistance.",
    keyTakeaway: "Positive reinforcement and parental role-modeling build lifelong Quran attachment.",
    tags: ["Kids", "Parenting", "Habits", "Education", "Family"],
    content: {
      intro: "In an age of instant dopamine and endless digital distractions, fostering an intrinsic love for the Holy Quran in children requires empathy, positive pedagogy, and structured daily routines rather than coercion.",
      sections: [
        {
          heading: "1. Lead by Example: The Silent Teacher",
          body: "Children imitate what they see far more than what they are told. When children observe their parents opening the Mushaf daily with joy and reverence, Quranic recitation becomes a natural cornerstone of household culture.",
        },
        {
          heading: "2. Gamification & Milestone Celebrations",
          body: "Celebrate every Juz completed with special family gatherings, gifts, and heartfelt Du'a. Associating Quranic progress with warmth and celebration anchors positive emotional memories.",
        },
      ],
      conclusion: "Find a warm, patient teacher who makes learning interactive and enjoyable for young minds.",
    },
  },
  {
    id: "art-5",
    slug: "understanding-noor-al-bayan-fastest-arabic-reading",
    title: "Why Noor Al-Bayan is the World's Most Effective Method for Arabic Reading",
    arabicTitle: "لماذا يعد منهج نور البيان الأسرع والأكثر فاعلية لتعلم القراءة القرآنية؟",
    category: "Pedagogy & Foundations",
    badge: "Curriculum Insight",
    readTime: "6 min read",
    views: "3.7k views",
    date: "Jul 28, 2026",
    author: {
      name: "Sheikh Tariq Al-Sayed",
      role: "Foundational Literacy Coordinator",
      avatar: "/images/avatars/review-4.webp",
      azharCertified: true,
    },
    image: "/images/courses/arabic-conversation.webp",
    excerpt:
      "A pedagogical breakdown of synthetic phonics in Noor Al-Bayan and how it accelerates Quranic literacy for total beginners in under 90 days.",
    keyTakeaway: "Graduated phonetic synthesis builds reading confidence from day one.",
    tags: ["Noor Al-Bayan", "Beginners", "Arabic Reading", "Pedagogy"],
    content: {
      intro: "Noor Al-Bayan is the premier pedagogical curriculum across the Muslim world for teaching Quranic reading. Its structured, phonics-based approach transforms non-Arabic speakers into confident Mushaf readers in record time.",
      sections: [
        {
          heading: "1. Step-by-Step Phonetic Progression",
          body: "Unlike traditional rote memorization, Noor Al-Bayan introduces isolated letter shapes, followed by single short vowels (Fathah, Kasrah, Dammah), then Sukoon, Tanween, Shaddah, and complex Madd rules in a logical sequence.",
        },
        {
          heading: "2. Direct Mushaf Application",
          body: "Every single example word used in Noor Al-Bayan exercises is taken directly from the Quranic text in Uthmanic script, ensuring zero disconnect when the student transitions to reading from the Mushaf.",
        },
      ],
      conclusion: "With just 3 live 1-on-1 sessions per week, adult beginners routinely read full pages of the Quran within 8 to 12 weeks.",
    },
  },
  {
    id: "art-6",
    slug: "secrets-of-quranic-arabic-vocabulary-grammar",
    title: "Secrets of Quranic Arabic: Unlocking 80% of the Quran with 500 Root Words",
    arabicTitle: "أسرار المفردات القرآنية: كيف تفهم 80% من القرآن الكريم من خلال 500 جذر لغوي",
    category: "Quranic Arabic & Grammar",
    badge: "Linguistic Key",
    readTime: "8 min read",
    views: "6.4k views",
    date: "Jul 22, 2026",
    author: {
      name: "Dr. Ahmed Al-Azhari",
      role: "Senior Tajweed Scholar & Qira'at Master",
      avatar: "/images/avatars/review-4.webp",
      azharCertified: true,
    },
    image: "/images/courses/sarf-morphology.webp",
    excerpt:
      "How morphological root analysis and high-frequency vocabulary unlock direct comprehension of the Quran during daily Salah without relying on translation.",
    keyTakeaway: "Mastering high-frequency 3-letter roots unlocks direct comprehension of 80% of the Quranic text.",
    tags: ["Arabic", "Vocabulary", "Grammar", "Tadabbur", "Roots"],
    content: {
      intro: "The Arabic language is built on a mathematical three-letter root system. By understanding the core meaning of approximately 500 high-frequency roots that repeat thousands of times across the 114 Surahs, you can understand the majority of the Quran during Salah.",
      sections: [
        {
          heading: "1. The Power of Trilateral Roots (Awzan)",
          body: "Take the root 'ك-ت-ب' (K-T-B), which fundamentally denotes writing. From this single root emerge: Kataba (he wrote), Yaktubu (he writes), Kitaab (book), Kaatib (writer), Maktabah (library), and Maktoub (destined/written). Understanding root patterns unlocks whole families of meaning instantly.",
        },
      ],
      conclusion: "Direct comprehension of the Quran in Arabic during Salah brings an unprecedented level of tranquility (Khushu') to your worship.",
    },
  },
];
