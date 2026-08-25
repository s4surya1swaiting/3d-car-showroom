// AURA MOTORS — AAA NEED FOR SPEED (NFS) / ASPHALT 3D SHOWROOM GARAGE STUDIO

const nfsCars = [
  {
    id: "scorpio",
    name: "Mahindra Scorpio-N Z8L 4x4",
    tagline: "The Unmissable SUV • 4XPLOR All-Terrain",
    price: "₹ 24,50,000",
    year: "2023",
    km: "12,000 KM",
    fuel: "2.2L mHawk Diesel (172 BHP)",
    trans: "6-Speed Automatic 4WD",
    owner: "1st Owner",
    grade: "140/140 Certified",
    img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop",
    color: 0x3a404a,
    dim: [3.5, 1.45, 1.75],
    stats: { speed: 82, accel: 78, power: 85, handling: 80 }
  },
  {
    id: "nexon",
    name: "Tata Nexon EV Dark Edition",
    tagline: "100% Electric Crossover • #Dark Aesthetics",
    price: "₹ 16,80,000",
    year: "2023",
    km: "8,500 KM",
    fuel: "Electric (465 KM Range)",
    trans: "Single-Speed Automatic",
    owner: "1st Owner",
    grade: "140/140 Certified",
    img: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=800&auto=format&fit=crop",
    color: 0x00d2ff,
    dim: [3.0, 1.25, 1.6],
    stats: { speed: 75, accel: 88, power: 76, handling: 84 }
  },
  {
    id: "thar",
    name: "Mahindra Thar LX 4x4 Hard Top",
    tagline: "Iconic Off-Road Legend • Convertible Vibes",
    price: "₹ 15,20,000",
    year: "2022",
    km: "18,400 KM",
    fuel: "2.0L mStallion Turbo Petrol",
    trans: "6-Speed Automatic 4WD",
    owner: "1st Owner",
    grade: "138/140 Certified",
    img: "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?q=80&w=800&auto=format&fit=crop",
    color: 0x1f2421,
    dim: [2.9, 1.38, 1.65],
    stats: { speed: 70, accel: 72, power: 82, handling: 78 }
  },
  {
    id: "bolero",
    name: "Mahindra Bolero Neo N10 Opt",
    tagline: "Tough Utility Vehicle • Multi-Terrain Select",
    price: "₹ 10,90,000",
    year: "2022",
    km: "24,000 KM",
    fuel: "1.5L mHawk75 Diesel",
    trans: "5-Speed Manual MLD",
    owner: "1st Owner",
    grade: "135/140 Certified",
    img: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=800&auto=format&fit=crop",
    color: 0x2b3a2f,
    dim: [3.2, 1.35, 1.6],
    stats: { speed: 65, accel: 62, power: 74, handling: 70 }
  },
  {
    id: "merc",
    name: "Mercedes-Benz S-Class S450",
    tagline: "The Pinnacle of Luxury • VIP First-Class Cabin",
    price: "₹ 1,35,00,000",
    year: "2022",
    km: "14,200 KM",
    fuel: "3.0L V6 Turbo Petrol",
    trans: "9G-TRONIC Automatic",
    owner: "1st Owner (Individual)",
    grade: "140/140 Certified",
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=800&auto=format&fit=crop",
    color: 0x09152a,
    dim: [3.9, 0.95, 1.78],
    stats: { speed: 92, accel: 90, power: 94, handling: 92 }
  },
  {
    id: "bmw",
    name: "BMW 7 Series 730Ld M-Sport",
    tagline: "Sheer Driving Pleasure • Executive Lounge",
    price: "₹ 1,18,00,000",
    year: "2021",
    km: "22,000 KM",
    fuel: "3.0L Straight-6 Diesel",
    trans: "8-Speed Steptronic",
    owner: "1st Owner (Corporate)",
    grade: "139/140 Certified",
    img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=800&auto=format&fit=crop",
    color: 0x730d17,
    dim: [3.8, 0.95, 1.78],
    stats: { speed: 90, accel: 88, power: 92, handling: 93 }
  },
  {
    id: "jeep",
    name: "Jeep Compass Model S 4x4",
    tagline: "Premium Urban SUV • Panoramic Sunroof",
    price: "₹ 26,40,000",
    year: "2023",
    km: "11,000 KM",
    fuel: "2.0L Diesel 9-Speed Auto",
    trans: "9-Speed Torque Converter",
    owner: "1st Owner",
    grade: "140/140 Certified",
    img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop",
    color: 0xe0e0e0,
    dim: [3.3, 1.25, 1.65],
    stats: { speed: 80, accel: 79, power: 83, handling: 82 }
  },
  {
    id: "audi",
    name: "Audi RS e-tron GT Quattro",
    tagline: "Electric Supercar • 637 HP Dual Motors",
    price: "₹ 1,62,00,000",
    year: "2023",
    km: "6,500 KM",
    fuel: "637 HP Dual Electric",
    trans: "2-Speed Rear Auto",
    owner: "1st Owner",
    grade: "140/140 Certified",
    img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=800&auto=format&fit=crop",
    color: 0x181a20,
    dim: [3.7, 0.85, 1.82],
    stats: { speed: 98, accel: 99, power: 97, handling: 96 }
  },
  {
    id: "porsche",
    name: "Porsche 911 Carrera S",
    tagline: "Pure Performance Icon • Sport Chrono",
    price: "₹ 1,85,00,000",
    year: "2022",
    km: "4,800 KM",
    fuel: "3.0L Twin-Turbo Flat-6",
    trans: "8-Speed PDK Dual-Clutch",
    owner: "1st Owner",
    grade: "140/140 Certified",
    img: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=800&auto=format&fit=crop",
    color: 0xd90429,
    dim: [3.4, 0.8, 1.72],
    stats: { speed: 99, accel: 98, power: 96, handling: 99 }
  },
  {
    id: "fortuner",
    name: "Toyota Fortuner Legender 4x4",
    tagline: "Flagship SUV • Dual Tone Black Roof",
    price: "₹ 44,50,000",
    year: "2023",
    km: "15,800 KM",
    fuel: "2.8L Turbo Diesel (204 BHP)",
    trans: "6-Speed Automatic",
    owner: "1st Owner",
    grade: "140/140 Certified",
    img: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=800&auto=format&fit=crop",
    pos: [0, 0, 0],
    color: 0xf4f5f6,
    dim: [3.7, 1.45, 1.78],
    stats: { speed: 84, accel: 80, power: 88, handling: 81 }
  }
];

let activeCarIndex = 0;
let scene, camera, renderer;
let turntableStage, activeCarGroup;
let bodyMaterial, cabinMaterial, rimMaterial;
let isAutoRotate = true;

function initNFSGarage3D() {
  const container = document.getElementById("nfs-canvas-target");
  if (!container) return;

  // 1. Scene setup
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x06070a);
  scene.fog = new THREE.FogExp2(0x06070a, 0.02);

  // 2. Camera setup (NFS Studio Perspective)
  camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
  camera.position.set(5.5, 2.2, 7.5);

  // 3. Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;
  container.appendChild(renderer.domElement);

  // 4. NFS Studio Spotlighting
  const ambient = new THREE.AmbientLight(0xffffff, 0.8);
  scene.add(ambient);

  const overheadSpot = new THREE.SpotLight(0xfff5e6, 3.5);
  overheadSpot.position.set(0, 12, 0);
  overheadSpot.angle = Math.PI / 4;
  overheadSpot.penumbra = 0.4;
  overheadSpot.castShadow = true;
  scene.add(overheadSpot);

  const cyanRimLight = new THREE.PointLight(0x00d2ff, 2.2, 20);
  cyanRimLight.position.set(-6, 4, -5);
  scene.add(cyanRimLight);

  const goldRimLight = new THREE.PointLight(0xe2b755, 2.2, 20);
  goldRimLight.position.set(6, 4, 5);
  scene.add(goldRimLight);

  // 5. Build NFS Turntable Stage Floor
  buildNFSTurntableStage();

  // 6. Load Initial 3D Car Model
  loadCarModel3D(0);

  // 7. Touch & Mouse Orbit Controls
  setupNFSOrbitControls(container);

  // Render Loop
  function animate() {
    requestAnimationFrame(animate);

    if (isAutoRotate && turntableStage) {
      turntableStage.rotation.y += 0.005;
    }

    camera.lookAt(0, 0.9, 0);
    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener("resize", () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });
}

// Build NFS Studio Turntable Stage & Cyber Floor
function buildNFSTurntableStage() {
  turntableStage = new THREE.Group();

  // Polished Carbon Fiber Platform
  const platformGeo = new THREE.CylinderGeometry(4.2, 4.4, 0.3, 64);
  const platformMat = new THREE.MeshStandardMaterial({
    color: 0x0f121a,
    roughness: 0.1,
    metalness: 0.9
  });
  const platform = new THREE.Mesh(platformGeo, platformMat);
  platform.position.y = -0.15;
  platform.receiveShadow = true;
  turntableStage.add(platform);

  // Neon Cyan Outer Ring
  const neonRingGeo = new THREE.TorusGeometry(4.35, 0.05, 16, 100);
  const neonRingMat = new THREE.MeshBasicMaterial({ color: 0x00d2ff });
  const neonRing = new THREE.Mesh(neonRingGeo, neonRingMat);
  neonRing.rotation.x = Math.PI / 2;
  neonRing.position.y = 0.01;
  turntableStage.add(neonRing);

  // Gold Inner Accent Ring
  const goldRingGeo = new THREE.TorusGeometry(3.6, 0.04, 16, 100);
  const goldRingMat = new THREE.MeshBasicMaterial({ color: 0xe2b755 });
  const goldRing = new THREE.Mesh(goldRingGeo, goldRingMat);
  goldRing.rotation.x = Math.PI / 2;
  goldRing.position.y = 0.015;
  turntableStage.add(goldRing);

  // Reflective Floor Grid around stage
  const grid = new THREE.GridHelper(30, 30, 0x00d2ff, 0x181c28);
  grid.position.y = -0.3;
  scene.add(grid);

  scene.add(turntableStage);
}

// Load 3D Car Model on the Turntable Stage
function loadCarModel3D(index) {
  activeCarIndex = index;
  const carData = nfsCars[index];

  if (activeCarGroup) {
    turntableStage.remove(activeCarGroup);
  }

  activeCarGroup = new THREE.Group();

  // Metallic Car Body Shell
  const [len, ht, wd] = carData.dim;
  const bodyGeo = new THREE.BoxGeometry(len, ht * 0.55, wd);
  bodyMaterial = new THREE.MeshStandardMaterial({
    color: carData.color,
    roughness: 0.12,
    metalness: 0.88
  });
  const body = new THREE.Mesh(bodyGeo, bodyMaterial);
  body.position.y = (ht * 0.55) / 2 + 0.35;
  body.castShadow = true;
  activeCarGroup.add(body);

  // Cabin Glass Roof & Windshield
  const cabinGeo = new THREE.BoxGeometry(len * 0.55, ht * 0.5, wd * 0.88);
  cabinMaterial = new THREE.MeshStandardMaterial({
    color: 0x07090e,
    roughness: 0.05,
    metalness: 0.95,
    transparent: true,
    opacity: 0.88
  });
  const cabin = new THREE.Mesh(cabinGeo, cabinMaterial);
  cabin.position.set(-len * 0.08, body.position.y + ht * 0.5, 0);
  cabin.castShadow = true;
  activeCarGroup.add(cabin);

  // Front Headlights & Rear LED Taillights
  const headMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const tailMat = new THREE.MeshBasicMaterial({ color: 0xff0033 });

  const lightL = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.12, 0.35), headMat);
  lightL.position.set(len / 2 + 0.02, body.position.y, wd * 0.32);
  const lightR = lightL.clone();
  lightR.position.z = -wd * 0.32;
  activeCarGroup.add(lightL, lightR);

  const tailL = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.12, 0.35), tailMat);
  tailL.position.set(-len / 2 - 0.02, body.position.y, wd * 0.32);
  const tailR = tailL.clone();
  tailR.position.z = -wd * 0.32;
  activeCarGroup.add(tailL, tailR);

  // 4 Wheels with Custom Rim Styling
  const wRadius = ht * 0.26;
  const wheelGeo = new THREE.CylinderGeometry(wRadius, wRadius, 0.24, 32);
  const wheelMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.5 });
  rimMaterial = new THREE.MeshStandardMaterial({ color: 0xe2b755, metalness: 0.95, roughness: 0.1 });

  const wheelOffsetX = len * 0.32;
  const wheelOffsetZ = wd * 0.52;

  [
    [wheelOffsetX, wRadius, wheelOffsetZ],
    [wheelOffsetX, wRadius, -wheelOffsetZ],
    [-wheelOffsetX, wRadius, wheelOffsetZ],
    [-wheelOffsetX, wRadius, -wheelOffsetZ]
  ].forEach(([wx, wy, wz]) => {
    const wGroup = new THREE.Group();
    const tire = new THREE.Mesh(wheelGeo, wheelMat);
    tire.rotation.x = Math.PI / 2;
    wGroup.add(tire);

    const rim = new THREE.Mesh(new THREE.CylinderGeometry(wRadius * 0.68, wRadius * 0.68, 0.25, 10), rimMaterial);
    rim.rotation.x = Math.PI / 2;
    wGroup.add(rim);

    wGroup.position.set(wx, wy, wz);
    activeCarGroup.add(wGroup);
  });

  turntableStage.add(activeCarGroup);

  // Update UI Panels
  updateNFSUI(carData);
}

// Update NFS Specs & Performance Meter UI
function updateNFSUI(carData) {
  document.getElementById("nfs-car-title").textContent = carData.name;
  document.getElementById("nfs-car-tagline").textContent = carData.tagline;
  document.getElementById("nfs-car-price").textContent = carData.price;
  document.getElementById("nfs-year").textContent = carData.year;
  document.getElementById("nfs-km").textContent = carData.km;
  document.getElementById("nfs-engine").textContent = carData.fuel;
  document.getElementById("nfs-trans").textContent = carData.trans;
  document.getElementById("nfs-owner").textContent = carData.owner;
  document.getElementById("nfs-grade").textContent = carData.grade;

  // Update Performance Meters
  document.getElementById("meter-speed").style.width = carData.stats.speed + "%";
  document.getElementById("meter-accel").style.width = carData.stats.accel + "%";
  document.getElementById("meter-power").style.width = carData.stats.power + "%";
  document.getElementById("meter-handling").style.width = carData.stats.handling + "%";

  document.getElementById("val-speed").textContent = carData.stats.speed;
  document.getElementById("val-accel").textContent = carData.stats.accel;
  document.getElementById("val-power").textContent = carData.stats.power;
  document.getElementById("val-handling").textContent = carData.stats.handling;

  // Active Carousel Highlight
  document.querySelectorAll(".nfs-dock-card").forEach((card, idx) => {
    if (idx === activeCarIndex) card.classList.add("active");
    else card.classList.remove("active");
  });
}

// NFS Real-Time Paint Color Switcher
function setCarPaintColor(colorHex) {
  if (bodyMaterial) {
    bodyMaterial.color.setHex(colorHex);
  }
}

// Touch & Mouse Orbit Controls for 360° Drag
function setupNFSOrbitControls(container) {
  let isDragging = false;
  let previousMousePosition = { x: 0, y: 0 };

  container.addEventListener("mousedown", (e) => {
    isDragging = true;
    isAutoRotate = false;
    previousMousePosition = { x: e.clientX, y: e.clientY };
  });

  container.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - previousMousePosition.x;
    turntableStage.rotation.y += deltaX * 0.01;
    previousMousePosition = { x: e.clientX, y: e.clientY };
  });

  window.addEventListener("mouseup", () => {
    isDragging = false;
  });

  container.addEventListener("touchstart", (e) => {
    if (e.touches.length === 1) {
      isDragging = true;
      isAutoRotate = false;
      previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  });

  container.addEventListener("touchmove", (e) => {
    if (!isDragging || e.touches.length !== 1) return;
    const deltaX = e.touches[0].clientX - previousMousePosition.x;
    turntableStage.rotation.y += deltaX * 0.015;
    previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  });

  window.addEventListener("touchend", () => {
    isDragging = false;
  });
}

function toggleAutoRotate() {
  isAutoRotate = !isAutoRotate;
  const btn = document.getElementById("btn-rotate-toggle");
  if (btn) btn.textContent = isAutoRotate ? "⏸ PAUSE ROTATION" : "▶ 360° AUTO ROTATE";
}

function toggleNFSFullscreen() {
  const wrapper = document.getElementById("nfs-stage-wrapper");
  if (!document.fullscreenElement) {
    if (wrapper.requestFullscreen) wrapper.requestFullscreen();
    else if (wrapper.webkitRequestFullscreen) wrapper.webkitRequestFullscreen();
  } else {
    if (document.exitFullscreen) document.exitFullscreen();
  }
}

// Inventory Filtering
function filterInventory() {
  const typeVal = document.getElementById("filter-type").value;
  const budgetVal = document.getElementById("filter-budget").value;
  const fuelVal = document.getElementById("filter-fuel").value;

  const cards = document.querySelectorAll(".car-card");
  cards.forEach(card => {
    const cType = card.getAttribute("data-type");
    const cPrice = parseInt(card.getAttribute("data-price"), 10);
    const cFuel = card.getAttribute("data-fuel");

    let matchType = (typeVal === "all" || cType === typeVal);
    let matchFuel = (fuelVal === "all" || cFuel === fuelVal);
    let matchBudget = true;

    if (budgetVal === "under20") matchBudget = (cPrice < 2000000);
    if (budgetVal === "20to50") matchBudget = (cPrice >= 2000000 && cPrice <= 5000000);
    if (budgetVal === "above1cr") matchBudget = (cPrice > 10000000);

    if (matchType && matchFuel && matchBudget) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// Test Drive Concierge Form Handler
function handleFormBooking(e) {
  e.preventDefault();
  const name = document.getElementById("b-name").value;
  const phone = document.getElementById("b-phone").value;
  const car = document.getElementById("b-car").value;
  const city = document.getElementById("b-city").value;

  const msg = encodeURIComponent(`Hi Aura Motors, my name is ${name} (${phone}). I would like to book a doorstep test drive for ${car} in ${city}. Please confirm my appointment!`);
  window.open(`https://wa.me/?text=${msg}`, '_blank');
}

document.addEventListener("DOMContentLoaded", () => {
  initNFSGarage3D();

  // Populate NFS Bottom Dock
  const dockContainer = document.getElementById("nfs-dock-container");
  if (dockContainer) {
    dockContainer.innerHTML = "";
    nfsCars.forEach((car, index) => {
      const card = document.createElement("div");
      card.className = `nfs-dock-card ${index === 0 ? 'active' : ''}`;
      card.onclick = () => loadCarModel3D(index);
      card.innerHTML = `
        <div class="dock-img-box"><img src="${car.img}" alt="${car.name}"></div>
        <div class="dock-info">
          <span class="dock-name">${car.name.split(" ")[0]} ${car.name.split(" ")[1]}</span>
          <span class="dock-price">${car.price}</span>
        </div>
      `;
      dockContainer.appendChild(card);
    });
  }

  const rngAmount = document.getElementById("rng-amount");
  const rngRate = document.getElementById("rng-rate");
  const rngTenure = document.getElementById("rng-tenure");

  function calcEMI() {
    const P = parseFloat(rngAmount.value);
    const r = parseFloat(rngRate.value) / 12 / 100;
    const n = parseFloat(rngTenure.value) * 12;

    document.getElementById("lbl-amount").textContent = `₹ ${(P / 100000).toFixed(1)} Lakhs`;
    document.getElementById("lbl-rate").textContent = `${rngRate.value}%`;
    document.getElementById("lbl-tenure").textContent = `${rngTenure.value} Years`;

    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    document.getElementById("emi-output").textContent = `₹ ${Math.round(emi).toLocaleString('en-IN')} / mo`;
  }

  [rngAmount, rngRate, rngTenure].forEach(el => el.addEventListener("input", calcEMI));
  calcEMI();
});

function bookWhatsAppDrive() {
  const car = nfsCars[activeCarIndex];
  const msg = encodeURIComponent(`Hi Aura Motors, I want to schedule a physical test drive for the ${car.name} (${car.price}). Please share available slots!`);
  window.open(`https://wa.me/?text=${msg}`, '_blank');
}

function bookWhatsAppEMI() {
  const amount = document.getElementById("lbl-amount").textContent;
  const emi = document.getElementById("emi-output").textContent;
  const msg = encodeURIComponent(`Hi Aura Motors, I am interested in financing a car with Loan Amount ${amount} (Estimated EMI: ${emi}). Please share loan partners!`);
  window.open(`https://wa.me/?text=${msg}`, '_blank');
}
