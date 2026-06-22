const products = [
  // =========================
  // PRESCRIPTION MEDICINES
  // =========================
  { id: 1, name: "Dolo 650", category: "Prescription Medicines", brand: "Micro Labs", price: 120, oldPrice: 150, rating: 4.8, stock: "In Stock", image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88" },
  { id: 2, name: "Paracetamol 650", category: "Prescription Medicines", brand: "Cipla", price: 95, oldPrice: 120, rating: 4.7, stock: "In Stock", image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88" },
  { id: 3, name: "Azithromycin 500", category: "Prescription Medicines", brand: "Sun Pharma", price: 180, oldPrice: 220, rating: 4.6, stock: "In Stock", image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88" },
  { id: 4, name: "Cetirizine", category: "Prescription Medicines", brand: "Dr Reddy's", price: 75, oldPrice: 95, rating: 4.5, stock: "In Stock", image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88" },
  { id: 5, name: "Pantoprazole", category: "Prescription Medicines", brand: "Cipla", price: 150, oldPrice: 180, rating: 4.7, stock: "In Stock", image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88" },
  { id: 6, name: "Amoxicillin", category: "Prescription Medicines", brand: "GSK", price: 110, oldPrice: 140, rating: 4.5, stock: "In Stock", image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88" },
  { id: 7, name: "Metformin", category: "Prescription Medicines", brand: "USV", price: 60, oldPrice: 75, rating: 4.6, stock: "Low Stock", image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88" },
  { id: 8, name: "Atorvastatin", category: "Prescription Medicines", brand: "Zydus Cadila", price: 130, oldPrice: 160, rating: 4.5, stock: "In Stock", image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88" },
  { id: 9, name: "Amlodipine", category: "Prescription Medicines", brand: "Cipla", price: 85, oldPrice: 100, rating: 4.6, stock: "In Stock", image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88" },
  { id: 10, name: "Levocetirizine", category: "Prescription Medicines", brand: "Dr Reddy's", price: 70, oldPrice: 90, rating: 4.6, stock: "In Stock", image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88" },
  
  // =========================
  // OTC MEDICINES
  // =========================
  { id: 11, name: "Crocin Advance", category: "OTC Medicines", brand: "GSK", price: 45, oldPrice: 55, rating: 4.7, stock: "In Stock", image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de" },
  { id: 12, name: "Benadryl Syrup", category: "OTC Medicines", brand: "Johnson & Johnson", price: 110, oldPrice: 130, rating: 4.5, stock: "In Stock", image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de" },
  { id: 13, name: "Digene", category: "OTC Medicines", brand: "Abbott", price: 95, oldPrice: 115, rating: 4.4, stock: "In Stock", image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de" },
  { id: 14, name: "Eno", category: "OTC Medicines", brand: "GSK", price: 20, oldPrice: 25, rating: 4.6, stock: "In Stock", image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de" },
  { id: 15, name: "Vicks VapoRub", category: "OTC Medicines", brand: "Procter & Gamble", price: 90, oldPrice: 110, rating: 4.7, stock: "In Stock", image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de" },
  { id: 16, name: "Volini Spray", category: "OTC Medicines", brand: "Sun Pharma", price: 180, oldPrice: 210, rating: 4.6, stock: "In Stock", image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de" },
  { id: 17, name: "Moov Pain Relief", category: "OTC Medicines", brand: "Reckitt", price: 150, oldPrice: 175, rating: 4.5, stock: "Low Stock", image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de" },
  { id: 18, name: "Strepsils", category: "OTC Medicines", brand: "Reckitt", price: 60, oldPrice: 75, rating: 4.4, stock: "In Stock", image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de" },
  { id: 19, name: "Disprin", category: "OTC Medicines", brand: "Reckitt", price: 25, oldPrice: 30, rating: 4.3, stock: "In Stock", image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de" },
  { id: 20, name: "Gelusil", category: "OTC Medicines", brand: "Pfizer", price: 85, oldPrice: 100, rating: 4.5, stock: "In Stock", image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de" },
  
  // =========================
  // BABY CARE
  // =========================
  { id: 21, name: "Johnson Baby Shampoo", category: "Baby Care", brand: "Johnson & Johnson", price: 180, oldPrice: 210, rating: 4.6, stock: "In Stock", image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4" },
  { id: 22, name: "Johnson Baby Powder", category: "Baby Care", brand: "Johnson & Johnson", price: 150, oldPrice: 175, rating: 4.5, stock: "In Stock", image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4" },
  { id: 23, name: "Johnson Baby Lotion", category: "Baby Care", brand: "Johnson & Johnson", price: 220, oldPrice: 250, rating: 4.6, stock: "In Stock", image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4" },
  { id: 24, name: "Himalaya Baby Soap", category: "Baby Care", brand: "Himalaya", price: 60, oldPrice: 75, rating: 4.5, stock: "In Stock", image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4" },
  { id: 25, name: "Himalaya Baby Lotion", category: "Baby Care", brand: "Himalaya", price: 190, oldPrice: 220, rating: 4.6, stock: "In Stock", image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4" },
  { id: 26, name: "Mee Mee Baby Wipes", category: "Baby Care", brand: "Mee Mee", price: 120, oldPrice: 150, rating: 4.4, stock: "In Stock", image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4" },
  { id: 27, name: "Sebamed Baby Wash", category: "Baby Care", brand: "Sebamed", price: 350, oldPrice: 400, rating: 4.7, stock: "In Stock", image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4" },
  { id: 28, name: "Sebamed Baby Cream", category: "Baby Care", brand: "Sebamed", price: 280, oldPrice: 320, rating: 4.6, stock: "In Stock", image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4" },
  { id: 29, name: "Mamaearth Baby Lotion", category: "Baby Care", brand: "Mamaearth", price: 260, oldPrice: 300, rating: 4.5, stock: "In Stock", image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4" },
  { id: 30, name: "Mamaearth Baby Shampoo", category: "Baby Care", brand: "Mamaearth", price: 240, oldPrice: 280, rating: 4.5, stock: "In Stock", image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4" },
  
  // =========================
  // DIABETES CARE
  // =========================
  { id: 31, name: "Accu-Chek Glucometer", category: "Diabetes Care", brand: "Roche", price: 1200, oldPrice: 1500, rating: 4.6, stock: "In Stock", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d" },
  { id: 32, name: "OneTouch Select Plus", category: "Diabetes Care", brand: "Johnson & Johnson", price: 1100, oldPrice: 1400, rating: 4.5, stock: "In Stock", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d" },
  { id: 33, name: "Accu-Chek Strips", category: "Diabetes Care", brand: "Roche", price: 650, oldPrice: 750, rating: 4.6, stock: "In Stock", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d" },
  { id: 34, name: "OneTouch Strips", category: "Diabetes Care", brand: "Johnson & Johnson", price: 600, oldPrice: 700, rating: 4.5, stock: "In Stock", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d" },
  { id: 35, name: "Sugar Free Gold", category: "Diabetes Care", brand: "Zydus Wellness", price: 80, oldPrice: 95, rating: 4.4, stock: "In Stock", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d" },
  { id: 36, name: "Diabetic Socks", category: "Diabetes Care", brand: "Dr Foot", price: 350, oldPrice: 420, rating: 4.3, stock: "Low Stock", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d" },
  { id: 37, name: "Dr Morepen Glucometer", category: "Diabetes Care", brand: "Morepen", price: 950, oldPrice: 1200, rating: 4.4, stock: "In Stock", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d" },
  { id: 38, name: "Contour Plus Strips", category: "Diabetes Care", brand: "Bayer", price: 700, oldPrice: 850, rating: 4.5, stock: "In Stock", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d" },
  { id: 39, name: "Lancets", category: "Diabetes Care", brand: "Accu-Chek", price: 150, oldPrice: 180, rating: 4.4, stock: "In Stock", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d" },
  { id: 40, name: "Insulin Cooler Bag", category: "Diabetes Care", brand: "Frio", price: 900, oldPrice: 1100, rating: 4.5, stock: "In Stock", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d" },
  
  // =========================
  // HEALTHCARE DEVICES
  // =========================
  { id: 41, name: "Omron BP Monitor", category: "Healthcare Devices", brand: "Omron", price: 2200, oldPrice: 2600, rating: 4.7, stock: "In Stock", image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c" },
  { id: 42, name: "Digital Thermometer", category: "Healthcare Devices", brand: "Dr Trust", price: 150, oldPrice: 200, rating: 4.5, stock: "In Stock", image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c" },
  { id: 43, name: "Pulse Oximeter", category: "Healthcare Devices", brand: "Dr Trust", price: 1200, oldPrice: 1500, rating: 4.6, stock: "In Stock", image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c" },
  { id: 44, name: "Nebulizer", category: "Healthcare Devices", brand: "Omron", price: 1800, oldPrice: 2200, rating: 4.6, stock: "In Stock", image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c" },
  { id: 45, name: "Weighing Scale", category: "Healthcare Devices", brand: "Dr Trust", price: 1100, oldPrice: 1400, rating: 4.5, stock: "In Stock", image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c" },
  { id: 46, name: "Infrared Thermometer", category: "Healthcare Devices", brand: "Beurer", price: 1600, oldPrice: 2000, rating: 4.6, stock: "In Stock", image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c" },
  { id: 47, name: "Steam Inhaler", category: "Healthcare Devices", brand: "Equinox", price: 700, oldPrice: 900, rating: 4.4, stock: "In Stock", image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c" },
  { id: 48, name: "Heating Pad", category: "Healthcare Devices", brand: "Dr Trust", price: 600, oldPrice: 750, rating: 4.4, stock: "In Stock", image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c" },
  { id: 49, name: "Massage Gun", category: "Healthcare Devices", brand: "Lifelong", price: 2800, oldPrice: 3500, rating: 4.5, stock: "Low Stock", image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c" },
  { id: 50, name: "TENS Machine", category: "Healthcare Devices", brand: "Dr Trust", price: 1900, oldPrice: 2300, rating: 4.4, stock: "In Stock", image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c" },
  
  // =========================
  // AYURVEDA
  // =========================
  { id: 51, name: "Dabur Chyawanprash", category: "Ayurveda", brand: "Dabur", price: 280, oldPrice: 320, rating: 4.6, stock: "In Stock", image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15" },
  { id: 52, name: "Liv52", category: "Ayurveda", brand: "Himalaya", price: 110, oldPrice: 130, rating: 4.6, stock: "In Stock", image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15" },
  { id: 53, name: "Ashwagandha", category: "Ayurveda", brand: "Himalaya", price: 220, oldPrice: 260, rating: 4.7, stock: "In Stock", image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15" },
  { id: 54, name: "Tulsi Tablets", category: "Ayurveda", brand: "Patanjali", price: 95, oldPrice: 115, rating: 4.5, stock: "In Stock", image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15" },
  { id: 55, name: "Brahmi", category: "Ayurveda", brand: "Himalaya", price: 180, oldPrice: 210, rating: 4.5, stock: "In Stock", image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15" },
  { id: 56, name: "Neem Capsules", category: "Ayurveda", brand: "Patanjali", price: 130, oldPrice: 150, rating: 4.4, stock: "In Stock", image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15" },
  { id: 57, name: "Amla Juice", category: "Ayurveda", brand: "Dabur", price: 160, oldPrice: 190, rating: 4.5, stock: "In Stock", image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15" },
  { id: 58, name: "Giloy Juice", category: "Ayurveda", brand: "Patanjali", price: 175, oldPrice: 200, rating: 4.5, stock: "In Stock", image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15" },
  { id: 59, name: "Triphala", category: "Ayurveda", brand: "Himalaya", price: 140, oldPrice: 165, rating: 4.6, stock: "In Stock", image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15" },
  { id: 60, name: "Aloe Vera Juice", category: "Ayurveda", brand: "Patanjali", price: 150, oldPrice: 175, rating: 4.5, stock: "In Stock", image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15" },
  
  // =========================
  // NUTRITION & SUPPLEMENTS
  // =========================
  { id: 61, name: "Ensure", category: "Nutrition & Supplements", brand: "Abbott", price: 650, oldPrice: 750, rating: 4.6, stock: "In Stock", image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061" },
  { id: 62, name: "Horlicks", category: "Nutrition & Supplements", brand: "HUL", price: 320, oldPrice: 380, rating: 4.5, stock: "In Stock", image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061" },
  { id: 63, name: "Boost", category: "Nutrition & Supplements", brand: "HUL", price: 290, oldPrice: 340, rating: 4.5, stock: "In Stock", image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061" },
  { id: 64, name: "Protinex", category: "Nutrition & Supplements", brand: "Danone", price: 480, oldPrice: 550, rating: 4.6, stock: "In Stock", image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061" },
  { id: 65, name: "Vitamin C", category: "Nutrition & Supplements", brand: "HealthKart", price: 220, oldPrice: 260, rating: 4.5, stock: "In Stock", image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061" },
  { id: 66, name: "Multivitamin", category: "Nutrition & Supplements", brand: "Revital", price: 380, oldPrice: 450, rating: 4.6, stock: "In Stock", image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061" },
  { id: 67, name: "Omega 3", category: "Nutrition & Supplements", brand: "HealthKart", price: 450, oldPrice: 520, rating: 4.5, stock: "In Stock", image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061" },
  { id: 68, name: "Calcium Tablets", category: "Nutrition & Supplements", brand: "Shelcal", price: 150, oldPrice: 180, rating: 4.5, stock: "In Stock", image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061" },
  { id: 69, name: "Protein Powder", category: "Nutrition & Supplements", brand: "MuscleBlaze", price: 1200, oldPrice: 1450, rating: 4.6, stock: "Low Stock", image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061" },
  { id: 70, name: "B12 Tablets", category: "Nutrition & Supplements", brand: "HealthKart", price: 200, oldPrice: 240, rating: 4.5, stock: "In Stock", image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061" },
  
  // =========================
  // PERSONAL CARE
  // =========================
  { id: 71, name: "Nivea Body Lotion", category: "Personal Care", brand: "Nivea", price: 280, oldPrice: 320, rating: 4.6, stock: "In Stock", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9" },
  { id: 72, name: "Dove Soap", category: "Personal Care", brand: "Dove", price: 60, oldPrice: 75, rating: 4.6, stock: "In Stock", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9" },
  { id: 73, name: "Pears Soap", category: "Personal Care", brand: "Pears", price: 50, oldPrice: 60, rating: 4.5, stock: "In Stock", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9" },
  { id: 74, name: "Lux Soap", category: "Personal Care", brand: "Lux", price: 45, oldPrice: 55, rating: 4.4, stock: "In Stock", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9" },
  { id: 75, name: "Dettol Hand Wash", category: "Personal Care", brand: "Dettol", price: 110, oldPrice: 130, rating: 4.6, stock: "In Stock", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9" },
  { id: 76, name: "Savlon Hand Wash", category: "Personal Care", brand: "Savlon", price: 105, oldPrice: 125, rating: 4.5, stock: "In Stock", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9" },
  { id: 77, name: "Body Wash", category: "Personal Care", brand: "Dove", price: 250, oldPrice: 300, rating: 4.5, stock: "In Stock", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9" },
  { id: 78, name: "Roll On", category: "Personal Care", brand: "Nivea", price: 180, oldPrice: 210, rating: 4.4, stock: "In Stock", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9" },
  { id: 79, name: "Perfume", category: "Personal Care", brand: "Fogg", price: 450, oldPrice: 550, rating: 4.4, stock: "In Stock", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9" },
  { id: 80, name: "Deodorant", category: "Personal Care", brand: "Axe", price: 220, oldPrice: 260, rating: 4.4, stock: "In Stock", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9" },
  
  // =========================
  // SKIN CARE
  // =========================
  { id: 81, name: "Cetaphil Cleanser", category: "Skin Care", brand: "Cetaphil", price: 580, oldPrice: 650, rating: 4.7, stock: "In Stock", image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883" },
  { id: 82, name: "Cetaphil Moisturizer", category: "Skin Care", brand: "Cetaphil", price: 620, oldPrice: 700, rating: 4.7, stock: "In Stock", image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883" },
  { id: 83, name: "CeraVe Cleanser", category: "Skin Care", brand: "CeraVe", price: 750, oldPrice: 850, rating: 4.6, stock: "In Stock", image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883" },
  { id: 84, name: "Sunscreen SPF 50", category: "Skin Care", brand: "Neutrogena", price: 480, oldPrice: 550, rating: 4.6, stock: "In Stock", image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883" },
  { id: 85, name: "Face Wash", category: "Skin Care", brand: "Himalaya", price: 180, oldPrice: 210, rating: 4.5, stock: "In Stock", image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883" },
  { id: 86, name: "Night Cream", category: "Skin Care", brand: "Pond's", price: 320, oldPrice: 380, rating: 4.4, stock: "In Stock", image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883" },
  { id: 87, name: "Vitamin C Serum", category: "Skin Care", brand: "Minimalist", price: 550, oldPrice: 650, rating: 4.6, stock: "Low Stock", image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883" },
  { id: 88, name: "Acne Gel", category: "Skin Care", brand: "Clean & Clear", price: 150, oldPrice: 180, rating: 4.4, stock: "In Stock", image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883" },
  { id: 89, name: "Aloe Vera Gel", category: "Skin Care", brand: "Patanjali", price: 120, oldPrice: 150, rating: 4.5, stock: "In Stock", image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883" },
  { id: 90, name: "Lip Balm", category: "Skin Care", brand: "Nivea", price: 95, oldPrice: 115, rating: 4.5, stock: "In Stock", image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883" },
  
  // =========================
  // ORAL CARE
  // =========================
  { id: 91, name: "Sensodyne", category: "Oral Care", brand: "GSK", price: 110, oldPrice: 130, rating: 4.6, stock: "In Stock", image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04" },
  { id: 92, name: "Colgate", category: "Oral Care", brand: "Colgate", price: 95, oldPrice: 115, rating: 4.5, stock: "In Stock", image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04" },
  { id: 93, name: "Pepsodent", category: "Oral Care", brand: "HUL", price: 85, oldPrice: 100, rating: 4.4, stock: "In Stock", image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04" },
  { id: 94, name: "Mouthwash", category: "Oral Care", brand: "Listerine", price: 180, oldPrice: 220, rating: 4.5, stock: "In Stock", image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04" },
  { id: 95, name: "Electric Toothbrush", category: "Oral Care", brand: "Oral-B", price: 1500, oldPrice: 1800, rating: 4.6, stock: "In Stock", image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04" },
  { id: 96, name: "Tongue Cleaner", category: "Oral Care", brand: "Colgate", price: 40, oldPrice: 50, rating: 4.3, stock: "In Stock", image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04" },
  { id: 97, name: "Dental Floss", category: "Oral Care", brand: "Oral-B", price: 120, oldPrice: 150, rating: 4.4, stock: "In Stock", image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04" },
  { id: 98, name: "Whitening Toothpaste", category: "Oral Care", brand: "Colgate", price: 130, oldPrice: 160, rating: 4.5, stock: "In Stock", image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04" },
  { id: 99, name: "Kids Toothpaste", category: "Oral Care", brand: "Colgate", price: 90, oldPrice: 110, rating: 4.5, stock: "In Stock", image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04" },
  { id: 100, name: "Oral Gel", category: "Oral Care", brand: "Dentogel", price: 70, oldPrice: 90, rating: 4.4, stock: "In Stock", image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04" },
  
  // =========================
  // FIRST AID
  // =========================
  { id: 101, name: "Dettol", category: "First Aid", brand: "Dettol", price: 130, oldPrice: 150, rating: 4.7, stock: "In Stock", image: "https://images.unsplash.com/photo-1584515933487-779824d29309" },
  { id: 102, name: "Savlon", category: "First Aid", brand: "Savlon", price: 120, oldPrice: 140, rating: 4.6, stock: "In Stock", image: "https://images.unsplash.com/photo-1584515933487-779824d29309" },
  { id: 103, name: "Band Aid", category: "First Aid", brand: "Johnson & Johnson", price: 50, oldPrice: 60, rating: 4.6, stock: "In Stock", image: "https://images.unsplash.com/photo-1584515933487-779824d29309" },
  { id: 104, name: "Cotton Roll", category: "First Aid", brand: "Johnson & Johnson", price: 60, oldPrice: 75, rating: 4.5, stock: "In Stock", image: "https://images.unsplash.com/photo-1584515933487-779824d29309" },
  { id: 105, name: "Gauze", category: "First Aid", brand: "Johnson & Johnson", price: 45, oldPrice: 55, rating: 4.4, stock: "In Stock", image: "https://images.unsplash.com/photo-1584515933487-779824d29309" },
  { id: 106, name: "Crepe Bandage", category: "First Aid", brand: "Tynor", price: 90, oldPrice: 110, rating: 4.4, stock: "In Stock", image: "https://images.unsplash.com/photo-1584515933487-779824d29309" },
  { id: 107, name: "Burn Cream", category: "First Aid", brand: "Silverex", price: 110, oldPrice: 130, rating: 4.5, stock: "In Stock", image: "https://images.unsplash.com/photo-1584515933487-779824d29309" },
  { id: 108, name: "Antiseptic Cream", category: "First Aid", brand: "Boroline", price: 80, oldPrice: 95, rating: 4.5, stock: "In Stock", image: "https://images.unsplash.com/photo-1584515933487-779824d29309" },
  { id: 109, name: "Betadine", category: "First Aid", brand: "Win-Medicare", price: 95, oldPrice: 115, rating: 4.6, stock: "In Stock", image: "https://images.unsplash.com/photo-1584515933487-779824d29309" },
  { id: 110, name: "First Aid Kit", category: "First Aid", brand: "St John", price: 450, oldPrice: 550, rating: 4.5, stock: "Low Stock", image: "https://images.unsplash.com/photo-1584515933487-779824d29309" },
  
  // =========================
  // WELLNESS PRODUCTS
  // =========================
  { id: 111, name: "Vitamin C", category: "Wellness Products", brand: "HealthKart", price: 220, oldPrice: 260, rating: 4.5, stock: "In Stock", image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528" },
  { id: 112, name: "Multivitamin", category: "Wellness Products", brand: "Revital", price: 380, oldPrice: 450, rating: 4.6, stock: "In Stock", image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528" },
  { id: 113, name: "Omega 3", category: "Wellness Products", brand: "HealthKart", price: 450, oldPrice: 520, rating: 4.5, stock: "In Stock", image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528" },
  { id: 114, name: "Melatonin", category: "Wellness Products", brand: "HealthKart", price: 350, oldPrice: 400, rating: 4.4, stock: "In Stock", image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528" },
  { id: 115, name: "Ashwagandha", category: "Wellness Products", brand: "Himalaya", price: 220, oldPrice: 260, rating: 4.6, stock: "In Stock", image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528" },
  { id: 116, name: "Green Tea", category: "Wellness Products", brand: "Lipton", price: 180, oldPrice: 210, rating: 4.4, stock: "In Stock", image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528" },
  { id: 117, name: "Probiotics", category: "Wellness Products", brand: "HealthKart", price: 480, oldPrice: 550, rating: 4.5, stock: "In Stock", image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528" },
  { id: 118, name: "Magnesium", category: "Wellness Products", brand: "HealthKart", price: 300, oldPrice: 350, rating: 4.5, stock: "In Stock", image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528" },
  { id: 119, name: "Electrolyte Powder", category: "Wellness Products", brand: "Electral", price: 150, oldPrice: 180, rating: 4.4, stock: "In Stock", image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528" },
  { id: 120, name: "Herbal Tea", category: "Wellness Products", brand: "Organic India", price: 220, oldPrice: 260, rating: 4.5, stock: "In Stock", image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528" },
];

export default products;