export const INITIAL_ENCYCLOPEDIA = [
  {
    id: "early_blight",
    name: "Early Blight",
    scientific_name: "Alternaria solani",
    host_crops: ["Tomato", "Potato", "Eggplant"],
    pathogen_type: "Fungal",
    severity: "Moderate",
    risk_level: "medium",
    color: "#D97706",
    symptoms: [
      "Concentric rings creating dark target-board lesions on older foliage",
      "Yellow chlorotic halo surrounding brown necrotic tissue",
      "Early leaf defoliation progressing upward into canopy",
      "Collar rot in young seedlings and sunken stem lesions"
    ],
    organic_treatment: [
      "Prune affected lower leaves and sterilize pruning shears between plants",
      "Foliar spray with Copper Octanoate or Bacillus subtilis (Serenade) every 7 days",
      "Heavy organic straw mulching to prevent soil pathogen rain-splashing",
      "Install sub-canopy drip irrigation to keep leaf cuticle dry"
    ],
    chemical_treatment: [
      "Targeted Azoxystrobin (Quadris) or Chlorothalonil protectant sprays",
      "Rotate FRAC groups with Difenoconazole to suppress resistance buildup",
      "Maintain strict 7-day pre-harvest field quarantine"
    ],
    transmission_vectors: "Wind-borne conidia and rain splashback in warm, humid microclimates (24-29°C)",
    prevention: "3-year crop rotation outside Solanaceae, certified pathogen-free seed stock",
    icon_type: "blight"
  },
  {
    id: "late_blight",
    name: "Late Blight",
    scientific_name: "Phytophthora infestans",
    host_crops: ["Potato", "Tomato"],
    pathogen_type: "Oomycete / Water Mold",
    severity: "Critical",
    risk_level: "critical",
    color: "#DC2626",
    symptoms: [
      "Water-soaked dark purplish or brown expanding necrotic lesions",
      "Velvety white mycelial downy bloom on leaf undersides in high morning dew",
      "Swift petiole girdling, black stem collapse, and foul vegetative rot smell",
      "Severe dry brown corky rot penetrating deep into potato tubers"
    ],
    organic_treatment: [
      "Immediate eradication (rogueing): double-bag and incinerate infected plants",
      "Prophylactic Bordeaux mixture (copper sulfate + slaked lime) barrier",
      "Rhizosphere inoculation with Trichoderma harzianum bio-protectant"
    ],
    chemical_treatment: [
      "Fast systemic rescue with Mandipropamid (Revus) or Metalaxyl-M (Ridomil Gold)",
      "Co-apply contact protective fungicide (Fluopicolide or Cymoxanil)",
      "Tighten application interval to 5 days when relative humidity exceeds 90%"
    ],
    transmission_vectors: "Airborne sporangia drifting for miles under cloud cover (12-18°C) and runoff water",
    prevention: "Eliminate cull piles, plant certified seed tubers, choose resistant varieties (e.g. Sarpo Mira)",
    icon_type: "water-mold"
  },
  {
    id: "bacterial_spot",
    name: "Bacterial Spot",
    scientific_name: "Xanthomonas perforans / campestris",
    host_crops: ["Bell Pepper", "Tomato", "Chili"],
    pathogen_type: "Bacterial",
    severity: "High",
    risk_level: "high",
    color: "#EA580C",
    symptoms: [
      "Tiny greasy water-soaked circular lesions (1-3mm) turning dark brown-black",
      "Angular leaf spots bounded by leaf veins with yellow marginal halos",
      "Premature leaf drop causing severe fruit sunscald in exposed canopies",
      "Rough blistered scab-like spots developing on immature green peppers"
    ],
    organic_treatment: [
      "Fixed copper bactericide tank-mixed with Bacillus amyloliquefaciens (Double Nickel)",
      "Cease all field handling, trellising, or harvesting while canopies are damp",
      "Thermotherapy seed soaking (50°C for 25 minutes) prior to germination"
    ],
    chemical_treatment: [
      "Copper hydroxide tank-mixed with Mancozeb to enhance copper bioavailability",
      "Acibenzolar-S-methyl (Actigard) systemic acquired resistance (SAR) trigger",
      "Agrimycin (Streptomycin) under authorized localized pesticide regulations"
    ],
    transmission_vectors: "Overhead sprinkler irrigation, wind-driven storms, contaminated farm tools and seed",
    prevention: "Greenhouse sanitation, horizontal airflow fans, drip tape fertigation",
    icon_type: "bacteria"
  },
  {
    id: "powdery_mildew",
    name: "Powdery Mildew",
    scientific_name: "Podosphaera / Erysiphe cichoracearum",
    host_crops: ["Cucumber", "Squash", "Grape", "Apple", "Strawberry"],
    pathogen_type: "Fungal",
    severity: "Moderate",
    risk_level: "medium",
    color: "#65A30D",
    symptoms: [
      "Superficial white powdery talcum spots expanding across upper leaf surface",
      "Crinkled, distorted young shoots and upward curled leaf margins",
      "Reduced photosynthesis leading to premature senescence and low brix levels",
      "Minute dark spherical overwintering chasmothecia bodies in late season"
    ],
    organic_treatment: [
      "Potassium Bicarbonate (MilStop) 5g/L combined with mineral oil protectant",
      "Cold-pressed neem oil (Azadirachtin) or 10% whey/fresh milk foliar spray in bright sun",
      "Increase row and plant spacing to optimize airflow and reduce shade humidity"
    ],
    chemical_treatment: [
      "Triazole fungicides (Myclobutanil / Rally) or Strobilurin (Trifloxystrobin)",
      "Strict rotation between FRAC Group 3 and Group 11 chemistry",
      "Micronized wettable sulfur applications (do not mix within 14 days of oil)"
    ],
    transmission_vectors: "Airborne dry conidia spores stimulated by high relative humidity and warm shade",
    prevention: "Select PM-tolerant rootstocks, thin interior tree canopies, avoid excess nitrogen",
    icon_type: "spore"
  },
  {
    id: "rust",
    name: "Leaf Rust",
    scientific_name: "Puccinia sorghi / Puccinia graminis",
    host_crops: ["Corn", "Wheat", "Coffee", "Beans"],
    pathogen_type: "Fungal",
    severity: "Moderate",
    risk_level: "medium",
    color: "#CA8A04",
    symptoms: [
      "Bright golden-orange to cinnabar-brown raised pustules (uredinia) on leaf lamina",
      "Epidermis ruptures shedding powdery orange spores onto fingertips upon touch",
      "Pustules transition to dark brownish-black teliospores as tissue ages",
      "Impaired grain-filling stage, reduced test weights, and stalk lodging"
    ],
    organic_treatment: [
      "Wettable sulfur or potassium silicate foliar sprays at first dawn",
      "Bio-fungicide inoculations with Bacillus pumilus (Sonata)",
      "Eradicate alternate weed hosts (wild Oxalis or barberry stands) near borders"
    ],
    chemical_treatment: [
      "Pyraclostrobin (Headline) or Tebuconazole fungicide at early vegetative stage",
      "Combined Triazole + Strobilurin formulations for prolonged leaf protection"
    ],
    transmission_vectors: "High-altitude atmospheric wind currents transporting urediniospores across states",
    prevention: "Plant resistant hybrid varieties, subscribe to real-time regional spore alerts",
    icon_type: "rust"
  },
  {
    id: "leaf_mold",
    name: "Leaf Mold",
    scientific_name: "Passalora fulva",
    host_crops: ["Tomato (Greenhouse & High Tunnel)"],
    pathogen_type: "Fungal",
    severity: "Moderate",
    risk_level: "medium",
    color: "#4D7C0F",
    symptoms: [
      "Pale yellowish diffuse chlorotic patches on the upper surface of older leaves",
      "Plush olive-green to velvet chocolate-brown mold layer directly beneath",
      "Affected leaves curl upward, dry out, and drop prematurely in sheltered crops"
    ],
    organic_treatment: [
      "Lower greenhouse humidity below 85% with heat pulsing and ridge vents",
      "Foliar bio-fungicide (Cease / Bacillus subtilis) protective coverage",
      "Maintain 45cm minimum plant spacing and aggressive suckering for air flow"
    ],
    chemical_treatment: [
      "Cyazofamid or Difenoconazole protective fungicide barrier",
      "Chlorothalonil broad-spectrum contact fungicide"
    ],
    transmission_vectors: "Stagnant humid air (>85% RH) and persistent leaf wetness in tunnels",
    prevention: "Forced greenhouse air circulation fans, automated gable venting",
    icon_type: "mold"
  },
  {
    id: "yellow_leaf_curl_virus",
    name: "Yellow Leaf Curl Virus",
    scientific_name: "Tomato Yellow Leaf Curl Begomovirus",
    host_crops: ["Tomato", "Pepper", "Tobacco"],
    pathogen_type: "Viral",
    severity: "Critical",
    risk_level: "critical",
    color: "#B91C1C",
    symptoms: [
      "Distinct upward cupping and curling of leaflets resembling miniature spoons",
      "Vivid interveinal yellowing (chlorosis) on new apical leaves",
      "Dwarf stunted growth habit with compressed internodes and bushy profile",
      "Severe floral drop and blossom abortion; zero commercial fruit setting"
    ],
    organic_treatment: [
      "No chemical cure exists: immediately rogue and solarize/incinerate infected plants",
      "Install 50-mesh fine exclusion insect screens on greenhouse openings",
      "Deploy yellow sticky boards (1 per 100 sq ft) and release Encarsia formosa wasps",
      "UV-reflective aluminized silver plastic ground mulch to deter vector pests"
    ],
    chemical_treatment: [
      "Aggressive vector whitefly control: systemic Imidacloprid or Flupyradifurone",
      "Pyriproxyfen or Buprofezin insect growth regulators targeting whitefly nymphs"
    ],
    transmission_vectors: "Vectored exclusively by the Silverleaf Whitefly (Bemisia tabaci)",
    prevention: "Cultivate resistant varieties carrying Ty-1 or Ty-3 resistance genes",
    icon_type: "virus"
  },
  {
    id: "healthy",
    name: "Healthy Botanical Tissue",
    scientific_name: "Normal Chloroplast Matrix",
    host_crops: ["All Plant Species"],
    pathogen_type: "Non-pathogenic",
    severity: "None",
    risk_level: "low",
    color: "#10B981",
    symptoms: [
      "Uniform vibrant emerald green pigmentation with high chlorophyll integrity",
      "Intact waxy cuticle surface with zero necrotic spots or marginal chlorosis",
      "Normal cell turgor pressure and balanced vegetative development"
    ],
    organic_treatment: [
      "Continue weekly cold-water seaweed extract or aerated vermicompost tea",
      "Maintain consistent soil moisture at 65% field capacity with tensiometers",
      "Support beneficial predatory insects (ladybugs, lacewings, predatory mites)"
    ],
    chemical_treatment: [
      "Zero chemical pesticide intervention necessary",
      "Maintain balanced fertigation (balanced N-P-K with calcium and magnesium)"
    ],
    transmission_vectors: "None",
    prevention: "Maintain active soil microbial biology and optimized drainage",
    icon_type: "healthy"
  }
];

export const SAMPLE_PRESETS = [
  {
    id: "sample-early-blight",
    title: "Tomato Early Blight",
    crop: "Tomato",
    disease_key: "early_blight",
    confidence: 96.8,
    badgeColor: "#D97706",
    badgeLabel: "Fungal · Target Spots",
    description: "Specimen from greenhouse block 3 displaying concentric ring necrosis with chlorotic yellow halo.",
    icon: "blight",
    svg: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><defs><radialGradient id="g1" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="%23854D0E"/><stop offset="40%" stop-color="%23A16207"/><stop offset="70%" stop-color="%23EAB308"/><stop offset="100%" stop-color="%234D7C0F"/></radialGradient></defs><rect width="400" height="400" fill="%232D5A27"/><path d="M200 40 C320 80 360 260 200 360 C40 260 80 80 200 40 Z" fill="%233E7B35" stroke="%23275022" stroke-width="4"/><path d="M200 40 L200 360" stroke="%2368A65E" stroke-width="3"/><path d="M200 120 Q260 140 310 180" stroke="%2368A65E" stroke-width="2" fill="none"/><path d="M200 200 Q270 230 320 280" stroke="%2368A65E" stroke-width="2" fill="none"/><path d="M200 160 Q130 180 80 220" stroke="%2368A65E" stroke-width="2" fill="none"/><circle cx="160" cy="180" r="42" fill="url(%23g1)" opacity="0.95"/><circle cx="160" cy="180" r="28" fill="none" stroke="%23422006" stroke-width="3"/><circle cx="160" cy="180" r="14" fill="none" stroke="%23422006" stroke-width="3"/><circle cx="160" cy="180" r="5" fill="%231E1B4B"/><circle cx="260" cy="240" r="32" fill="url(%23g1)" opacity="0.9"/><circle cx="260" cy="240" r="20" fill="none" stroke="%23422006" stroke-width="2"/><circle cx="220" cy="130" r="22" fill="url(%23g1)" opacity="0.85"/></svg>`
  },
  {
    id: "sample-late-blight",
    title: "Potato Late Blight",
    crop: "Potato",
    disease_key: "late_blight",
    confidence: 98.4,
    badgeColor: "#DC2626",
    badgeLabel: "Critical · Oomycete",
    description: "Field specimen with expanding dark water-soaked rot and white mycelial border.",
    icon: "water-mold",
    svg: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><defs><linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%231E293B"/><stop offset="50%" stop-color="%23451A03"/><stop offset="100%" stop-color="%237F1D1D"/></linearGradient></defs><rect width="400" height="400" fill="%231E3A2F"/><path d="M200 30 C340 70 370 280 200 370 C30 280 60 70 200 30 Z" fill="%232D5A42" stroke="%23142921" stroke-width="4"/><path d="M200 30 L200 370" stroke="%23528A6D" stroke-width="3"/><path d="M200 130 C270 140 330 210 290 280 C240 340 180 300 160 250 C140 200 150 140 200 130 Z" fill="url(%23g2)" opacity="0.96"/><path d="M190 125 C260 135 325 205 285 275" stroke="%23F8FAFC" stroke-width="3" stroke-dasharray="3,3" fill="none" opacity="0.85"/><circle cx="230" cy="210" r="12" fill="%230F172A"/><circle cx="210" cy="250" r="9" fill="%230F172A"/></svg>`
  },
  {
    id: "sample-bacterial-spot",
    title: "Pepper Bacterial Spot",
    crop: "Bell Pepper",
    disease_key: "bacterial_spot",
    confidence: 94.7,
    badgeColor: "#EA580C",
    badgeLabel: "High · Xanthomonas",
    description: "Greenhouse sample showing angular vein-bounded water-soaked dark brown spots.",
    icon: "bacteria",
    svg: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect width="400" height="400" fill="%23133324"/><path d="M200 35 C320 75 350 270 200 365 C50 270 80 75 200 35 Z" fill="%232A6945" stroke="%2310301E" stroke-width="4"/><path d="M200 35 L200 365" stroke="%235CA879" stroke-width="3"/><g fill="%23431407" stroke="%23FACC15" stroke-width="2"><circle cx="150" cy="120" r="9"/><circle cx="170" cy="140" r="12"/><circle cx="140" cy="170" r="8"/><circle cx="230" cy="150" r="11"/><circle cx="250" cy="180" r="14"/><circle cx="220" cy="220" r="10"/><circle cx="160" cy="240" r="13"/><circle cx="260" cy="270" r="9"/><circle cx="180" cy="300" r="8"/><circle cx="190" cy="200" r="15"/></g></svg>`
  },
  {
    id: "sample-healthy-foliage",
    title: "Pristine Healthy Foliage",
    crop: "Tomato / Solanaceae",
    disease_key: "healthy",
    confidence: 99.4,
    badgeColor: "#10B981",
    badgeLabel: "Optimal · Zero Lesions",
    description: "Vibrant emerald green leaf with intact stomatal cuticle, perfect turgor, and zero pathogen indicators.",
    icon: "healthy",
    svg: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><defs><linearGradient id="g4" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%2334D399"/><stop offset="50%" stop-color="%2310B981"/><stop offset="100%" stop-color="%23047857"/></linearGradient></defs><rect width="400" height="400" fill="%23064E3B"/><path d="M200 30 C330 70 360 275 200 370 C40 275 70 70 200 30 Z" fill="url(%23g4)" stroke="%23065F46" stroke-width="4"/><path d="M200 30 L200 370" stroke="%23A7F3D0" stroke-width="3"/><path d="M200 110 Q260 130 310 160" stroke="%23A7F3D0" stroke-width="2.5" fill="none" opacity="0.9"/><path d="M200 170 Q270 200 325 240" stroke="%23A7F3D0" stroke-width="2.5" fill="none" opacity="0.9"/><path d="M200 230 Q270 260 310 300" stroke="%23A7F3D0" stroke-width="2.5" fill="none" opacity="0.9"/><path d="M200 140 Q140 160 90 200" stroke="%23A7F3D0" stroke-width="2.5" fill="none" opacity="0.9"/><path d="M200 200 Q130 230 80 270" stroke="%23A7F3D0" stroke-width="2.5" fill="none" opacity="0.9"/></svg>`
  },
  {
    id: "sample-corn-rust",
    title: "Maize Leaf Rust",
    crop: "Corn / Maize",
    disease_key: "rust",
    confidence: 95.8,
    badgeColor: "#CA8A04",
    badgeLabel: "Fungal · Uredinia",
    description: "Corn leaf strip with dense orange-brown raised pustules erupting along longitudinal veins.",
    icon: "rust",
    svg: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect width="400" height="400" fill="%23243c2c"/><path d="M120 20 L280 20 L260 380 L140 380 Z" fill="%234d7c0f"/><g stroke="%2365a30d" stroke-width="2"><line x1="160" y1="20" x2="160" y2="380"/><line x1="200" y1="20" x2="200" y2="380"/><line x1="240" y1="20" x2="240" y2="380"/></g><g fill="%23c2410c" stroke="%23fed7aa" stroke-width="1.5"><ellipse cx="170" cy="80" rx="8" ry="14"/><ellipse cx="190" cy="110" rx="7" ry="12"/><ellipse cx="220" cy="90" rx="9" ry="15"/><ellipse cx="180" cy="160" rx="8" ry="16"/><ellipse cx="230" cy="190" rx="10" ry="18"/><ellipse cx="170" cy="240" rx="7" ry="13"/><ellipse cx="210" cy="270" rx="9" ry="15"/><ellipse cx="190" cy="320" rx="8" ry="14"/></g></svg>`
  },
  {
    id: "sample-powdery-mildew",
    title: "Cucurbit Powdery Mildew",
    crop: "Cucumber / Squash",
    disease_key: "powdery_mildew",
    confidence: 97.1,
    badgeColor: "#65A30D",
    badgeLabel: "Superficial · Mycelium",
    description: "Broad leaf with superficial talcum-white colonies expanding under low light conditions.",
    icon: "spore",
    svg: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect width="400" height="400" fill="%231a382b"/><path d="M200 40 C340 80 370 290 200 370 C30 290 60 80 200 40 Z" fill="%232b6148"/><g fill="%23f8fafc" opacity="0.82"><circle cx="160" cy="150" r="32" filter="blur(2px)"/><circle cx="240" cy="190" r="40" filter="blur(3px)"/><circle cx="180" cy="260" r="35" filter="blur(2px)"/><circle cx="270" cy="130" r="22" filter="blur(1px)"/><circle cx="130" cy="220" r="26" filter="blur(2px)"/></g></svg>`
  }
];

export const INITIAL_SCAN_HISTORY = [
  {
    id: "scn-9021",
    timestamp: "12 mins ago",
    date: "2026-11-03 11:15",
    disease_id: "late_blight",
    name: "Late Blight",
    scientific_name: "Phytophthora infestans",
    crop: "Potato (Russet Burbank)",
    confidence: 98.4,
    severity: "Critical",
    risk_level: "critical",
    status: "Quarantine Active",
    field_zone: "North Quadrant - Bed 4",
    organic_action: "Plants bagged and destroyed; Bordeaux barrier applied to adjacent 15m radius."
  },
  {
    id: "scn-9020",
    timestamp: "1 hour ago",
    date: "2026-11-03 10:28",
    disease_id: "early_blight",
    name: "Early Blight",
    scientific_name: "Alternaria solani",
    crop: "Tomato (Roma Hybrid)",
    confidence: 96.8,
    severity: "Moderate",
    risk_level: "medium",
    status: "Treatment Applied",
    field_zone: "Tunnel Greenhouse B",
    organic_action: "Lower canopy pruned, copper octanoate sprayed at 10ml/L."
  },
  {
    id: "scn-9019",
    timestamp: "3 hours ago",
    date: "2026-11-03 08:42",
    disease_id: "healthy",
    name: "Healthy Foliage",
    scientific_name: "Chloroplast Matrix",
    crop: "Bell Pepper (California Wonder)",
    confidence: 99.2,
    severity: "None",
    risk_level: "low",
    status: "Optimal",
    field_zone: "Hydroponic Bay 1",
    organic_action: "Routine EC & pH monitoring maintained."
  },
  {
    id: "scn-9018",
    timestamp: "Yesterday",
    date: "2026-11-02 16:15",
    disease_id: "bacterial_spot",
    name: "Bacterial Spot",
    scientific_name: "Xanthomonas perforans",
    crop: "Sweet Pepper",
    confidence: 94.1,
    severity: "High",
    risk_level: "high",
    status: "In Monitoring",
    field_zone: "Open Field Sector 2",
    organic_action: "Overhead watering halted; Bacillus amyloliquefaciens sprayed."
  },
  {
    id: "scn-9017",
    timestamp: "2 days ago",
    date: "2026-11-01 14:05",
    disease_id: "powdery_mildew",
    name: "Powdery Mildew",
    scientific_name: "Podosphaera xanthii",
    crop: "Cucumber (Marketmore)",
    confidence: 97.2,
    severity: "Moderate",
    risk_level: "medium",
    status: "Resolved",
    field_zone: "High Tunnel C",
    organic_action: "Potassium bicarbonate spray applied; ventilation fans increased to 100%."
  }
];
