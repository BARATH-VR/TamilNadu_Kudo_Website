export interface CommitteeMember {
  id: string;
  nameEn: string;
  nameTa: string;
  roleEn: string;
  roleTa: string;
  bioEn: string;
  bioTa: string;
  image: string;
  order: number;
}

export interface Academy {
  id: string;
  districtEn: string;
  districtTa: string;
  nameEn: string;
  nameTa: string;
  instructorEn: string;
  instructorTa: string;
  addressEn: string;
  addressTa: string;
  phone: string;
  email: string;
  mapUrl?: string;
}

export interface Achievement {
  id: string;
  titleEn: string;
  titleTa: string;
  level: 'State' | 'National' | 'International';
  year: string;
  athleteEn: string;
  athleteTa: string;
  medal: 'Gold' | 'Silver' | 'Bronze';
  categoryEn: string;
  categoryTa: string;
  descriptionEn: string;
  descriptionTa: string;
  image: string;
}

export interface EventItem {
  id: string;
  titleEn: string;
  titleTa: string;
  date: string;
  venueEn: string;
  venueTa: string;
  districtEn: string;
  districtTa: string;
  isUpcoming: boolean;
  descriptionEn: string;
  descriptionTa: string;
  resultsPdf?: string;
  goldCount?: number;
  silverCount?: number;
  bronzeCount?: number;
}

export interface NewsItem {
  id: string;
  titleEn: string;
  titleTa: string;
  date: string;
  categoryEn: string;
  categoryTa: string;
  excerptEn: string;
  excerptTa: string;
  contentEn: string;
  contentTa: string;
  image: string;
  isNotice: boolean;
}

export const TAMILNADU_DISTRICTS = [
  "Ariyalur",
  "Chengalpattu",
  "Chennai",
  "Coimbatore",
  "Cuddalore",
  "Dharmapuri",
  "Dindigul",
  "Erode",
  "Kallakurichi",
  "Kanchipuram",
  "Kanyakumari",
  "Karur",
  "Krishnagiri",
  "Madurai",
  "Mayiladuthurai",
  "Nagapattinam",
  "Namakkal",
  "Nilgiris",
  "Perambalur",
  "Pudukkottai",
  "Ramanathapuram",
  "Ranipet",
  "Salem",
  "Sivaganga",
  "Tenkasi",
  "Thanjavur",
  "Theni",
  "Thoothukudi",
  "Tiruchirappalli",
  "Tirunelveli",
  "Tirupathur",
  "Tiruppur",
  "Tiruvallur",
  "Tiruvannamalai",
  "Tiruvarur",
  "Vellore",
  "Viluppuram",
  "Virudhunagar"
];

export interface DocumentItem {
  id: string;
  titleEn: string;
  titleTa: string;
  categoryEn: string;
  categoryTa: string;
  fileSize: string;
  uploadDate: string;
  fileUrl: string;
}

export interface FaqItem {
  id: string;
  category: 'parents' | 'students' | 'districts';
  questionEn: string;
  questionTa: string;
  answerEn: string;
  answerTa: string;
}

// Initial Mock Data according to PRD recommendations
export const initialCommittee: CommitteeMember[] = [
  {
    id: "cm-1",
    nameEn: "Hanshi Sensei V. Ramachandran",
    nameTa: "ஹான்ஷி சென்சே வி. ராமச்சந்திரன்",
    roleEn: "President & Founder, TNSKA",
    roleTa: "தலைவர் & நிறுவனர், TNSKA",
    bioEn: "7th Dan Black Belt with over 32 years of martial arts leadership. Pioneer in expanding Kudo discipline across 14 districts in Tamil Nadu.",
    bioTa: "32 ஆண்டுகளுக்கும் மேலான தற்காப்பு கலை தலைமையை கொண்ட 7வது டான் பிளாக் பெல்ட் சாதனையாளர். தமிழ்நாட்டின் 14 மாவட்டங்களில் குடோ கலையை பரப்பியவர்.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    order: 1
  },
  {
    id: "cm-2",
    nameEn: "Kyoshi Renshi K. Senthil Kumar",
    nameTa: "கியோஷி ரென்ஷி கே. செந்தில் குமார்",
    roleEn: "General Secretary & Chief Coach",
    roleTa: "பொதுச் செயலாளர் & தலைமைப் பயிற்றுவிப்பாளர்",
    bioEn: "International Certified Kudo Referee (KIF Japan). Led Tamil Nadu contingent to 5 consecutive KIFI National Championships.",
    bioTa: "சர்வதேச சான்றளிக்கப்பட்ட குடோ நடுவர் (KIF ஜப்பான்). தொடர்ச்சியாக 5 KIFI தேசிய போட்டிகளில் தமிழ்நாடு அணியை வழிநடத்தியவர்.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    order: 2
  },
  {
    id: "cm-3",
    nameEn: "Sensei Dr. Anitha Rajesh",
    nameTa: "சென்சே டாக்டர் அனிதா ராஜேஷ்",
    roleEn: "Vice President & Women's Wing Director",
    roleTa: "துணைத் தலைவர் & பெண்கள் பிரிவு இயக்குனர்",
    bioEn: "Sports physician and 3rd Dan Kudo practitioner. Advocate for women's self-defense and youth martial sports safety.",
    bioTa: "விளையாட்டு மருத்துவர் மற்றும் 3வது டான் குடோ வீரர். பெண்கள் தற்காப்பு மற்றும் இளைஞர் விளையாட்டு பாதுகாப்பின் ஆதரவாளர்.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    order: 3
  },
  {
    id: "cm-4",
    nameEn: "Shihan M. Karthikeyan",
    nameTa: "ஷிஹான் எம். கார்த்திகேயன்",
    roleEn: "Treasurer & Technical Committee Head",
    roleTa: "பொருளாளர் & தொழில்நுட்ப குழு தலைவர்",
    bioEn: "5th Dan Kudo expert overseeing referee certification and state tournament technical standards.",
    bioTa: "நடுவர் சான்றிதழ் மற்றும் மாநில போட்டி தொழில்நுட்ப தரநிலைகளை மேற்பார்வையிடும் 5வது டான் குடோ நிபுணர்.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    order: 4
  }
];

export const initialAcademies: Academy[] = [
  {
    id: "ac-1",
    districtEn: "Chennai",
    districtTa: "சென்னை",
    nameEn: "Central Chennai Kudo Budo Headquarters Dojo",
    nameTa: "மத்திய சென்னை குடோ புடோ தலைமைப் பயிற்சிக்கூடம்",
    instructorEn: "Renshi K. Senthil Kumar (5th Dan)",
    instructorTa: "ரென்ஷி கே. செந்தில் குமார் (5வது டான்)",
    addressEn: "Hall 3, Jawaharlal Nehru Indoor Stadium, Periamet, Chennai - 600003",
    addressTa: "ஹால் 3, ஜவஹர்லால் நேரு உள்விளையாட்டரங்கம், பெரியமேடு, சென்னை - 600003",
    phone: "+91 98400 12345",
    email: "chennai@tnkudo.org"
  },
  {
    id: "ac-2",
    districtEn: "Coimbatore",
    districtTa: "கோயம்புத்தூர்",
    nameEn: "Kovai Samurai Kudo Training Center",
    nameTa: "கோவை சாமுராய் குடோ பயிற்சி மையம்",
    instructorEn: "Sensei R. Anandhan (3rd Dan)",
    instructorTa: "சென்சே ஆர். ஆனந்தன் (3வது டான்)",
    addressEn: "45, Race Course Road, Near Thomas Park, Coimbatore - 641018",
    addressTa: "45, ரேஸ் கோர்ஸ் ரோடு, தாமஸ் பார்க் அருகில், கோயம்புத்தூர் - 641018",
    phone: "+91 94430 88210",
    email: "coimbatore@tnkudo.org"
  },
  {
    id: "ac-3",
    districtEn: "Madurai",
    districtTa: "மதுரை",
    nameEn: "Meenakshi City Kudo Academy",
    nameTa: "மீனாட்சி சிட்டி குடோ அகாடமி",
    instructorEn: "Sensei P. Vijayakumar (4th Dan)",
    instructorTa: "சென்சே பி. விஜயகுமார் (4வது டான்)",
    addressEn: "KK Nagar Main Road, Opposite District Sports Complex, Madurai - 625020",
    addressTa: "கே.கே.நகர் முதன்மை சாலை, மாவட்ட விளையாட்டு அரங்கம் எதிரில், மதுரை - 625020",
    phone: "+91 98941 77332",
    email: "madurai@tnkudo.org"
  },
  {
    id: "ac-4",
    districtEn: "Tiruchirappalli",
    districtTa: "திருச்சிராப்பள்ளி",
    nameEn: "Rockfort Kudo Martial Arts Center",
    nameTa: "ராக்போர்ட் குடோ தற்காப்புக் கலை மையம்",
    instructorEn: "Sempei G. Murugan (2nd Dan)",
    instructorTa: "செம்பை ஜி. முருகன் (2வது டான்)",
    addressEn: "12, Cantonment Main Road, Trichy - 620001",
    addressTa: "12, கண்டோன்மென்ட் முதன்மை சாலை, திருச்சி - 620001",
    phone: "+91 97892 44100",
    email: "trichy@tnkudo.org"
  },
  {
    id: "ac-5",
    districtEn: "Salem",
    districtTa: "சேலம்",
    nameEn: "Salem District Kudo Sports Club",
    nameTa: "சேலம் மாவட்ட குடோ ஸ்போர்ட்ஸ் கிளப்",
    instructorEn: "Sensei T. Dinesh (3rd Dan)",
    instructorTa: "சென்சே டி. தினேஷ் (3வது டான்)",
    addressEn: "Hasthampatti Main Road, Salem - 636007",
    addressTa: "ஹஸ்தம்பட்டி முதன்மை சாலை, சேலம் - 636007",
    phone: "+91 94421 55660",
    email: "salem@tnkudo.org"
  },
  {
    id: "ac-6",
    districtEn: "Tirunelveli",
    districtTa: "திருநெல்வேலி",
    nameEn: "Nellai Kudo Training Academy",
    nameTa: "நெல்லை குடோ பயிற்சி அகாடமி",
    instructorEn: "Sensei S. Manikandan (3rd Dan)",
    instructorTa: "சென்சே எஸ். மணிகண்டன் (3வது டான்)",
    addressEn: "Vannarpettai High Road, Tirunelveli - 627003",
    addressTa: "வண்ணாரப்பேட்டை ஹைரோடு, திருநெல்வேலி - 627003",
    phone: "+91 98422 90112",
    email: "tirunelveli@tnkudo.org"
  }
];

export const initialAchievements: Achievement[] = [
  {
    id: "ach-1",
    titleEn: "Bronze Medal at 6th KIF World Cup Japan",
    titleTa: "6வது KIF உலகக் கோப்பை ஜப்பானில் வெண்கலப் பதக்கம்",
    level: "International",
    year: "2025",
    athleteEn: "K. Rithvik (U-19 Boys U-230 Physical Index)",
    athleteTa: "கே. ரித்விக் (U-19 ஆண்கள்)",
    medal: "Bronze",
    categoryEn: "International World Championship",
    categoryTa: "சர்வதேச உலக சாம்பியன்ஷிப்",
    descriptionEn: "First athlete from Tamil Nadu to win an international individual medal at the Kudo World Cup held in Nagoya, Japan.",
    descriptionTa: "ஜப்பானின் நாகோயாவில் நடைபெற்ற குடோ உலகக் கோப்பையில் தனிநபர் பிரிவில் பதக்கம் வென்ற முதல் தமிழ்நாடு வீரர்.",
    image: "https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "ach-2",
    titleEn: "Overall Champion Trophy - 15th KIFI National Championship",
    titleTa: "ஒட்டுமொத்த சாம்பியன் கோப்பை - 15வது KIFI தேசிய சாம்பியன்ஷிப்",
    level: "National",
    year: "2025",
    athleteEn: "Tamil Nadu State Senior Team (18 Medals)",
    athleteTa: "தமிழ்நாடு மாநில மூத்தோர் அணி (18 பதக்கங்கள்)",
    medal: "Gold",
    categoryEn: "National Team Championship",
    categoryTa: "தேசிய அணி சாம்பியன்ஷிப்",
    descriptionEn: "Tamil Nadu secured 8 Gold, 5 Silver, and 5 Bronze medals, claiming 2nd place in overall national team standings.",
    descriptionTa: "தமிழ்நாடு 8 தங்கம், 5 வெள்ளி, 5 வெண்கலப் பதக்கங்களை வென்று தேசிய அளவில் 2ஆம் இடத்தை பிடித்தது.",
    image: "https://images.unsplash.com/photo-1561532325-7d5231a2dede?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "ach-3",
    titleEn: "SGFI National School Games Gold Medal",
    titleTa: "SGFI தேசிய பள்ளி விளையாட்டு தங்கப் பதக்கம்",
    level: "National",
    year: "2024",
    athleteEn: "S. Kavya (U-17 Girls -48kg)",
    athleteTa: "எஸ். காவ்யா (U-17 பெண்கள்)",
    medal: "Gold",
    categoryEn: "SGFI National School Games",
    categoryTa: "SGFI தேசிய பள்ளி விளையாட்டு",
    descriptionEn: "Unbeaten streak of 5 bouts with zero points conceded in the SGFI National Games in New Delhi.",
    descriptionTa: "புதுடெல்லியில் நடைபெற்ற SGFI தேசிய விளையாட்டுகளில் தொடர்ச்சியாக 5 போட்டிகளில் வெற்றி பெற்று தங்கம் வென்றார்.",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "ach-4",
    titleEn: "Gold Medal - South India Inter-State Kudo Championship",
    titleTa: "தங்கப் பதக்கம் - தென்னிந்திய மாநிலங்களுக்கு இடையேயான போட்டி",
    level: "State",
    year: "2025",
    athleteEn: "M. Ashwin (Senior Men U-240 PI)",
    athleteTa: "எம். அஸ்வின் (மூத்தோர் ஆண்கள்)",
    medal: "Gold",
    categoryEn: "Inter-State Championship",
    categoryTa: "மாநிலங்களுக்கு இடையேயான சாம்பியன்ஷிப்",
    descriptionEn: "Dominant victory in the knockout final match at the South Zone Games in Bengaluru.",
    descriptionTa: "பெங்களூருவில் நடைபெற்ற தென்னகப் போட்டிகளின் இறுதிப் போட்டியில் சிறப்பான வெற்றி.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80"
  }
];

export const initialEvents: EventItem[] = [
  {
    id: "ev-1",
    titleEn: "14th Tamil Nadu State Kudo Championship & Selection Trials 2026",
    titleTa: "14வது தமிழ்நாடு மாநில குடோ சாம்பியன்ஷிப் & தேர்வுப் போட்டிகள் 2026",
    date: "August 22 - 24, 2026",
    venueEn: "SDAT Indoor Stadium, Nehru Park, Chetpet, Chennai",
    venueTa: "SDAT உள்விளையாட்டரங்கம், நேரு பூங்கா, சேத்பட், சென்னை",
    districtEn: "Chennai",
    districtTa: "சென்னை",
    isUpcoming: true,
    descriptionEn: "Official state selection trials for sub-juniors, juniors, and seniors to represent Tamil Nadu at the upcoming 16th KIFI National Championship.",
    descriptionTa: "வரவிருக்கும் 16வது KIFI தேசிய போட்டியில் தமிழ்நாட்டைப் பிரதிநிதித்துவப்படுத்த சப்-ஜூனியர், ஜூனியர் மற்றும் மூத்தோருக்கான அதிகாரப்பூர்வ மாநிலத் தேர்வு."
  },
  {
    id: "ev-2",
    titleEn: "State Referee & Certified Belt Grading Seminar",
    titleTa: "மாநில நடுவர் & சான்றளிக்கப்பட்ட பெல்ட் தேர்வு பயிற்சி முகாம்",
    date: "September 12 - 13, 2026",
    venueEn: "Kovai Sports Hall, Race Course Road, Coimbatore",
    venueTa: "கோவை ஸ்போர்ட்ஸ் ஹால், ரேஸ் கோர்ஸ் ரோடு, கோயம்புத்தூர்",
    districtEn: "Coimbatore",
    districtTa: "கோயம்புத்தூர்",
    isUpcoming: true,
    descriptionEn: "Technical seminar on official KIF rules, Super Safe helmet safety regulations, and Kyu/Dan belt grading exams led by Hanshi V. Ramachandran.",
    descriptionTa: "அதிகாரப்பூர்வ KIF விதிகள், சூப்பர் சேஃப் தலைக்கவசப் பாதுகாப்பு மற்றும் பெல்ட் தரவரிசைத் தேர்வுகள் குறித்த தொழில்நுட்பப் பயிற்சி."
  },
  {
    id: "ev-3",
    titleEn: "13th Tamil Nadu State Kudo Championship 2025",
    titleTa: "13வது தமிழ்நாடு மாநில குடோ சாம்பியன்ஷிப் 2025",
    date: "November 10 - 12, 2025",
    venueEn: "MGR Indoor Stadium, Madurai",
    venueTa: "எம்.ஜி.ஆர் உள்விளையாட்டரங்கம், மதுரை",
    districtEn: "Madurai",
    districtTa: "மதுரை",
    isUpcoming: false,
    descriptionEn: "Over 450 athletes from 14 districts participated. Chennai District emerged overall champions, followed by Coimbatore District as runners-up.",
    descriptionTa: "14 மாவட்டங்களைச் சேர்ந்த 450க்கும் மேற்பட்ட வீரர்கள் பங்கேற்றனர். சென்னை மாவட்டம் ஒட்டுமொத்த சாம்பியன் பட்டம் வென்றது.",
    goldCount: 32,
    silverCount: 32,
    bronzeCount: 48
  }
];

export const initialNews: NewsItem[] = [
  {
    id: "news-1",
    titleEn: "Tamil Nadu Kudo Athletes Win 18 Medals at KIFI National Championship",
    titleTa: "KIFI தேசிய போட்டியில் 18 பதக்கங்களை வென்று தமிழ்நாடு சாதனை",
    date: "January 18, 2026",
    categoryEn: "Championship News",
    categoryTa: "போட்டி செய்திகள்",
    excerptEn: "Tamil Nadu squad displayed dominant skill in Mumbai, securing 8 Gold medals and finishing 2nd in overall national team standings.",
    excerptTa: "மும்பையில் நடைபெற்ற போட்டியில் தமிழ்நாடு அணி 8 தங்கப் பதக்கங்களை வென்று தேசிய அளவில் 2ஆம் இடம் பிடித்தது.",
    contentEn: "The Tamil Nadu State Kudo contingent registered its best-ever performance at the 15th KIFI National Championship held at Khandeshwar Stadium, Mumbai. Competing against 24 states, TN athletes excelled across junior and senior physical index categories under the leadership of Chief Coach Renshi K. Senthil Kumar.",
    contentTa: "மும்பையில் நடைபெற்ற 15வது KIFI தேசிய சாம்பியன்ஷிப்பில் தமிழ்நாடு குடோ அணி தனது மிகச்சிறந்த செயல்திறனைப் பதிவு செய்துள்ளது. 24 மாநிலங்களுக்கு எதிராகப் போட்டியிட்ட தமிழ்நாடு வீரர்கள் பல பிரிவுகளில் பதக்கங்களைக் குவித்தனர்.",
    image: "https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&w=600&q=80",
    isNotice: false
  },
  {
    id: "news-2",
    titleEn: "CIRCULAR: Mandatory Registration for All District Secretariats",
    titleTa: "சுற்றறிக்கை: அனைத்து மாவட்டச் செயலகங்களுக்கும் கட்டாயப் பதிவு அறிவிப்பு",
    date: "February 01, 2026",
    categoryEn: "Official Circular",
    categoryTa: "அதிகாரப்பூர்வ சுற்றறிக்கை",
    excerptEn: "All affiliated district associations must submit annual affiliation renewals and instructor list before March 31, 2026.",
    excerptTa: "அனைத்து இணைக்கப்பட்ட மாவட்ட சங்கங்களும் மார்ச் 31, 2026க்குள் தங்களின் வருடாந்திர புதுப்பித்தல் படிவங்களை சமர்ப்பிக்க வேண்டும்.",
    contentEn: "Per the mandate of the TNSKA Executive Board meeting, all 14 affiliated district associations must complete their annual administrative audit, submit instructor certification numbers, and update student rosters prior to March 31, 2026.",
    contentTa: "TNSKA நிர்வாகக் குழுவின் முடிவின்படி, 14 மாவட்ட சங்கங்களும் தங்களின் வருடாந்திர நிர்வாகத் தணிக்கையை மார்ச் 31, 2026க்குள் பூர்த்தி செய்ய வேண்டும்.",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80",
    isNotice: true
  }
];

export const initialDocuments: DocumentItem[] = [
  {
    id: "doc-1",
    titleEn: "TNSKA Official Constitution & Governance Handbook (2026)",
    titleTa: "TNSKA அதிகாரப்பூர்வ அரசியலமைப்பு & ஆட்சி கையேடு (2026)",
    categoryEn: "Governance & Constitution",
    categoryTa: "ஆட்சி & அரசியலமைப்பு",
    fileSize: "2.4 MB",
    uploadDate: "Jan 10, 2026",
    fileUrl: "#"
  },
  {
    id: "doc-2",
    titleEn: "Kudo Belt Grading Syllabus & Exam Standards (KIFI Standard)",
    titleTa: "குடோ பெல்ட் தேர்வு பாடத்திட்டம் & தரநிலைகள் (KIFI தரநிலை)",
    categoryEn: "Rules & Syllabus",
    categoryTa: "விதிகள் & பாடத்திட்டம்",
    fileSize: "1.8 MB",
    uploadDate: "Jan 15, 2026",
    fileUrl: "#"
  },
  {
    id: "doc-3",
    titleEn: "14th State Championship Official Entry & Medical Clearance Form",
    titleTa: "14வது மாநில சாம்பியன்ஷிப் நுழைவு & மருத்துவ சான்றிதழ் படிவம்",
    categoryEn: "Forms & Downloads",
    categoryTa: "படிவங்கள் & பதிவிறக்கங்கள்",
    fileSize: "680 KB",
    uploadDate: "Feb 01, 2026",
    fileUrl: "#"
  },
  {
    id: "doc-4",
    titleEn: "District Association Affiliation Renewal Form 2026-27",
    titleTa: "மாவட்ட சங்க இணைப்பு புதுப்பித்தல் படிவம் 2026-27",
    categoryEn: "Forms & Downloads",
    categoryTa: "படிவங்கள் & பதிவிறக்கங்கள்",
    fileSize: "520 KB",
    uploadDate: "Feb 01, 2026",
    fileUrl: "#"
  }
];

export const initialFaqs: FaqItem[] = [
  {
    id: "faq-1",
    category: "parents",
    questionEn: "Is Kudo safe for young children and teenagers?",
    questionTa: "இளம் குழந்தைகள் மற்றும் சிறார்களுக்கு குடோ பாதுகாப்பானதா?",
    answerEn: "Yes! Kudo is specifically engineered for maximum safety. All practitioners wear the patented Neo-Head Protector (Super Safe Guard) with a clear polycarbonate bubble face shield, along with official chest guards, shin protectors, and hand gloves. Facial strikes, concussions, and facial injuries are practically eliminated.",
    answerTa: "ஆம்! குடோ விளையாட்டு அதிகபட்ச பாதுகாப்பிற்காக பிரத்யேகமாக வடிவமைக்கப்பட்டுள்ளது. அனைத்து வீரர்களும் காப்புரிமை பெற்ற தலைக்கவசம் (Super Safe Guard), மார்பு பாதுகாப்பு மற்றும் கையுறைகளை அணிகிறார்கள். இதனால் முகக் காயங்கள் முற்றிலும் தவிர்க்கப்படுகின்றன."
  },
  {
    id: "faq-2",
    category: "parents",
    questionEn: "How is Kudo different from traditional Karate or Taekwondo?",
    questionTa: "பாரம்பரிய காராத்தே அல்லது டேக்வாண்டோவிலிருந்து குடோ எவ்வாறு வேறுபடுகிறது?",
    answerEn: "Kudo (Budo) is a hybrid martial art that integrates punching, kicking, throwing, takedowns, joint locks, and ground fighting into one unified system under realistic safety rules. Unlike point-contact Karate, Kudo teaches complete, practical self-defense with full protective gear.",
    answerTa: "குடோ என்பது குத்துகள், உதைகள், வீசுதல்கள் மற்றும் தற்காப்பு உத்திகளை உள்ளடக்கிய ஒரு கலப்பு தற்காப்புக் கலை. இது முழுமையான பாதுகாப்பு உபகரணங்களுடன் நிஜ வாழ்க்கை தற்காப்பைக் கற்பிக்கிறது."
  },
  {
    id: "faq-3",
    category: "students",
    questionEn: "How do I earn belt ranks and progress to National competitions?",
    questionTa: "நான் எவ்வாறு பெல்ட் தரவரிசைகளைப் பெற்று தேசியப் போட்டிகளுக்குச் செல்லலாம்?",
    answerEn: "Students train at official affiliated district dojos and undergo standardized Kyu belt grading exams conducted twice a year by TNSKA master instructors. High-performing belt holders are selected during the annual State Championship to represent Tamil Nadu at the KIFI Nationals.",
    answerTa: "மாணவர்கள் அதிகாரப்பூர்வ மாவட்ட பயிற்சிக்கூடங்களில் பயிற்சி பெற்று, வருடத்திற்கு இருமுறை நடத்தப்படும் பெல்ட் தேர்வுகளில் பங்கேற்கலாம். மாநில போட்டிகளில் வெற்றி பெறுபவர்கள் தேசிய போட்டிக்கு தேர்வு செய்யப்படுவார்கள்."
  },
  {
    id: "faq-4",
    category: "districts",
    questionEn: "How can a local martial arts academy get affiliated with TNSKA?",
    questionTa: "ஒரு உள்ளூர் தற்காப்புக் கலைக்கூடம் TNSKA உடன் எவ்வாறு இணையலாம்?",
    answerEn: "Chief instructors must hold a minimum 1st Dan Kudo Black Belt recognized by KIFI India, submit the District Affiliation Renewal/Registration form from our Resources page, and undergo technical audit by the TNSKA Technical Committee.",
    answerTa: "முதன்மை பயிற்றுவிப்பாளர் KIFI இந்தியாவால் அங்கீகரிக்கப்பட்ட குறைந்தபட்சம் 1வது டான் பிளாக் பெல்ட் வைத்திருக்க வேண்டும் மற்றும் எங்கள் பதிவிறக்கப் பக்கத்தில் உள்ள படிவத்தை பூர்த்தி செய்து சமர்ப்பிக்க வேண்டும்."
  }
];
