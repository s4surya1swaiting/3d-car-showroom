// AURA MOTORS 3-STORY LUXURY ARCHITECTURAL SHOWROOM ENGINE

const carsData = [
  // GROUND FLOOR: SUVs & Utility
  {
    id: 0,
    floor: 0,
    floorName: "Ground Floor — SUV & Off-Road Zone",
    name: "Mahindra Scorpio-N Z8L 4x4",
    price: "₹ 24,50,000",
    year: "2023",
    km: "12,000 KM",
    owner: "1st Owner",
    fuel: "2.2L mHawk Diesel (172 BHP)",
    trans: "6-Speed Automatic 4XPLOR",
    grade: "140/140 Certified",
    type: "SUV",
    color: 0x8899a6, // Deep Metallic Silver
    accentColor: 0xd4af37,
    pos: [-6, 0.4, -3],
    dim: [3.4, 1.4, 1.7] // [length, height, width]
  },
  {
    id: 1,
    floor: 0,
    floorName: "Ground Floor — SUV & Off-Road Zone",
    name: "Tata Nexon EV Dark Edition",
    price: "₹ 16,80,000",
    year: "2023",
    km: "8,500 KM",
    owner: "1st Owner",
    fuel: "Electric (465 KM Range)",
    trans: "Single-Speed Automatic",
    grade: "140/140 Certified",
    type: "EV Crossover",
    color: 0x0f2b3c, // Midnight Electric Teal
    accentColor: 0x00d2ff,
    pos: [0, 0.4, -3],
    dim: [2.9, 1.25, 1.55]
  },
  {
    id: 2,
    floor: 0,
    floorName: "Ground Floor — SUV & Off-Road Zone",
    name: "Mahindra Thar LX 4x4 Hard Top",
    price: "₹ 15,20,000",
    year: "2022",
    km: "18,400 KM",
    owner: "1st Owner",
    fuel: "2.0L mStallion Turbo Petrol",
    trans: "6-Speed Automatic 4WD",
    grade: "138/140 Certified",
    type: "Off-Road Jeep",
    color: 0x1c1d21, // Matte Black
    accentColor: 0xff4444,
    pos: [6, 0.4, -3],
    dim: [2.8, 1.35, 1.6]
  },
  {
    id: 3,
    floor: 0,
    floorName: "Ground Floor — SUV & Off-Road Zone",
    name: "Mahindra Bolero Neo N10 Opt",
    price: "₹ 10,90,000",
    year: "2022",
    km: "24,000 KM",
    owner: "1st Owner",
    fuel: "1.5L mHawk75 Diesel",
    trans: "5-Speed Manual MLD",
    grade: "135/140 Certified",
    type: "Utility SUV",
    color: 0x1e3a2b, // Forest Green
    accentColor: 0xcccccc,
    pos: [-3, 0.4, 3],
    dim: [3.1, 1.3, 1.6]
  },

  // 1ST FLOOR: Luxury & Executive Sedans
  {
    id: 4,
    floor: 1,
    floorName: "1st Floor — Executive Luxury Suite",
    name: "Mercedes-Benz S-Class S450",
    price: "₹ 1,35,00,000",
    year: "2022",
    km: "14,200 KM",
    owner: "1st Owner (Individual)",
    fuel: "3.0L V6 Turbo Petrol",
    trans: "9G-TRONIC Automatic",
    grade: "140/140 Certified",
    type: "Luxury Saloon",
    color: 0x0d131f, // Metallic Obsidian Navy
    accentColor: 0xe2b755,
    pos: [-5, 5.4, -3],
    dim: [3.8, 0.95, 1.75]
  },
  {
    id: 5,
    floor: 1,
    floorName: "1st Floor — Executive Luxury Suite",
    name: "BMW 7 Series 730Ld M-Sport",
    price: "₹ 1,18,00,000",
    year: "2021",
    km: "22,000 KM",
    owner: "1st Owner (Corporate)",
    fuel: "3.0L Straight-6 Diesel",
    trans: "8-Speed Steptronic",
    grade: "139/140 Certified",
    type: "Executive Sedan",
    color: 0x6e0d16, // Carbon Red Metallic
    accentColor: 0xffffff,
    pos: [1, 5.4, -3],
    dim: [3.7, 0.95, 1.75]
  },
  {
    id: 6,
    floor: 1,
    floorName: "1st Floor — Executive Luxury Suite",
    name: "Jeep Compass Model S 4x4",
    price: "₹ 26,40,000",
    year: "2023",
    km: "11,000 KM",
    owner: "1st Owner",
    fuel: "2.0L Multijet II Turbo Diesel",
    trans: "9-Speed Torque Converter",
    grade: "140/140 Certified",
    type: "Premium SUV",
    color: 0xe8e8e8, // Pearl White Metallic
    accentColor: 0x333333,
    pos: [6, 5.4, 2],
    dim: [3.2, 1.25, 1.65]
  },

  // 2ND FLOOR: Supercars & Premium Flagships
  {
    id: 7,
    floor: 2,
    floorName: "2nd Floor — Performance & Flagship Gallery",
    name: "Audi RS e-tron GT Quattro",
    price: "₹ 1,62,00,000",
    year: "2023",
    km: "6,500 KM",
    owner: "1st Owner",
    fuel: "637 HP Dual Electric Motors",
    trans: "2-Speed Rear Automatic",
    grade: "140/140 Certified",
    type: "Electric Supercar",
    color: 0x22252a, // Daytona Matte Gray
    accentColor: 0x00d2ff,
    pos: [-5, 10.4, -3],
    dim: [3.6, 0.85, 1.8]
  },
  {
    id: 8,
    floor: 2,
    floorName: "2nd Floor — Performance & Flagship Gallery",
    name: "Porsche 911 Carrera S",
    price: "₹ 1,85,00,000",
    year: "2022",
    km: "4,800 KM",
    owner: "1st Owner",
    fuel: "3.0L Twin-Turbo Flat-6 (450 HP)",
    trans: "8-Speed PDK Dual-Clutch",
    grade: "140/140 Certified",
    type: "Sports Coupe",
    color: 0xcc0000, // Guards Red
    accentColor: 0x111111,
    pos: [1, 10.4, -3],
    dim: [3.3, 0.8, 1.7]
  },
  {
    id: 9,
    floor: 2,
    floorName: "2nd Floor — Performance & Flagship Gallery",
    name: "Toyota Fortuner Legender 4x4",
    price: "₹ 44,50,000",
    year: "2023",
    km: "15,800 KM",
    owner: "1st Owner",
    fuel: "2.8L Turbo Diesel (204 BHP)",
    trans: "6-Speed Automatic",
    grade: "140/140 Certified",
    type: "Luxury 7-Seater SUV",
    color: 0xf5f5f5, // Pearl White & Black Roof
    accentColor: 0xd4af37,
    pos: [6, 10.4, 2],
    dim: [3.6, 1.45, 1.75]
  }
];

let activeCarIndex = 0;
let scene, camera, renderer, controls;
let carMeshes = [];
let targetCameraPos = new THREE.Vector3(0, 4, 16);
let targetLookAt = new THREE.Vector3(0, 2, 0);
let currentLookAt = new THREE.Vector3(0, 2, 0);

function init3D() {
  const container = document.getElementById("canvas-container");
  if (!container) return;

  // 1. Scene setup
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x060709);
  scene.fog = new THREE.FogExp2(0x060709, 0.015);

  // 2. Camera
  camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 150);
  camera.position.set(0, 4, 22);

  // 3. Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  container.appendChild(renderer.domElement);

  // 4. Orbit Controls
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.maxPolarAngle = Math.PI / 2 - 0.01;
  controls.minDistance = 3;
  controls.maxDistance = 45;

  // 5. Showroom Lighting setup
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
  scene.add(ambientLight);

  const mainSun = new THREE.DirectionalLight(0xfff5e6, 1.8);
  mainSun.position.set(15, 25, 20);
  mainSun.castShadow = true;
  scene.add(mainSun);

  const blueFill = new THREE.DirectionalLight(0x00d2ff, 0.8);
  blueFill.position.set(-15, 15, -10);
  scene.add(blueFill);

  // 6. Build Architectural Multi-Floor Showroom Building
  build3DShowroomBuilding();

  // 7. Populate All 10 Cars on Showroom Floors
  populateShowroomCars();

  // Raycaster for Clicking Cars
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  container.addEventListener("click", (e) => {
    const rect = container.getBoundingClientRect();
    mouse.x = ((e.clientX - rect.left) / container.clientWidth) * 2 - 1;
    mouse.y = -((e.clientY - rect.top) / container.clientHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(carMeshes, true);
    if (intersects.length > 0) {
      let obj = intersects[0].object;
      while (obj.parent && !obj.userData.carId && obj.userData.carId !== 0) {
        obj = obj.parent;
      }
      if (obj.userData.carId !== undefined) {
        switchCar(obj.userData.carId);
      }
    }
  });

  // Animation Loop
  function animate() {
    requestAnimationFrame(animate);
    controls.update();

    // Smooth Camera lerp to target car bay
    camera.position.lerp(targetCameraPos, 0.05);
    currentLookAt.lerp(targetLookAt, 0.05);
    controls.target.copy(currentLookAt);

    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener("resize", () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });
}

// Build 3-Story Glass & Steel Luxury Showroom Building
function build3DShowroomBuilding() {
  const floorHeights = [0, 5, 10];

  floorHeights.forEach((yPos, floorIdx) => {
    // Showroom Floor Slab
    const floorGeo = new THREE.BoxGeometry(22, 0.4, 16);
    const floorMat = new THREE.MeshStandardMaterial({
      color: floorIdx === 0 ? 0x12141c : 0x1a1d26,
      roughness: 0.2,
      metalness: 0.7
    });
    const floorMesh = new THREE.Mesh(floorGeo, floorMat);
    floorMesh.position.set(0, yPos, 0);
    floorMesh.receiveShadow = true;
    scene.add(floorMesh);

    // Floor Grid Tile Lines
    const grid = new THREE.GridHelper(22, 22, 0xd4af37, 0x2a2e3d);
    grid.position.set(0, yPos + 0.21, 0);
    scene.add(grid);

    // Ceiling & Track Spotlights for Each Floor
    const spot = new THREE.PointLight(0xfffaed, 2, 12);
    spot.position.set(0, yPos + 3.8, 0);
    scene.add(spot);

    // Floor Level Marker Pillars & Glass Railing
    const pillarGeo = new THREE.BoxGeometry(0.6, 5, 0.6);
    const pillarMat = new THREE.MeshStandardMaterial({ color: 0x0a0c10, metalness: 0.9, roughness: 0.1 });
    
    [[-10.8, -7.8], [10.8, -7.8], [-10.8, 7.8], [10.8, 7.8]].forEach(([px, pz]) => {
      const pillar = new THREE.Mesh(pillarGeo, pillarMat);
      pillar.position.set(px, yPos + 2.5, pz);
      scene.add(pillar);
    });
  });

  // Glass Facade Enclosure (Outer Glass Showroom Walls)
  const glassMat = new THREE.MeshPhysicalMaterial({
    color: 0x88ccff,
    transparent: true,
    opacity: 0.18,
    roughness: 0.05,
    transmission: 0.9,
    thickness: 0.5
  });

  const glassBackGeo = new THREE.PlaneGeometry(22, 15);
  const glassBack = new THREE.Mesh(glassBackGeo, glassMat);
  glassBack.position.set(0, 7.5, -7.9);
  scene.add(glassBack);

  // Exterior Brand Banner Structure
  const bannerGeo = new THREE.BoxGeometry(22.4, 1.2, 0.3);
  const bannerMat = new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.8, roughness: 0.2 });
  const banner = new THREE.Mesh(bannerGeo, bannerMat);
  banner.position.set(0, 15.6, 7.9);
  scene.add(banner);
}

// Generate 10 Distinct Procedural Car Models
function populateShowroomCars() {
  carMeshes = [];

  carsData.forEach((car) => {
    const carGroup = new THREE.Group();
    carGroup.userData = { carId: car.id };

    // 1. Display Stage Base Pad
    const padGeo = new THREE.CylinderGeometry(2.4, 2.6, 0.15, 32);
    const padMat = new THREE.MeshStandardMaterial({ color: 0x222633, metalness: 0.8, roughness: 0.3 });
    const pad = new THREE.Mesh(padGeo, padMat);
    pad.position.y = 0.08;
    carGroup.add(pad);

    const padRing = new THREE.Mesh(
      new THREE.TorusGeometry(2.45, 0.04, 16, 64),
      new THREE.MeshBasicMaterial({ color: car.accentColor })
    );
    padRing.rotation.x = Math.PI / 2;
    padRing.position.y = 0.16;
    carGroup.add(padRing);

    // 2. Car Body Shell
    const [len, ht, wd] = car.dim;
    const bodyGeo = new THREE.BoxGeometry(len, ht * 0.6, wd);
    const bodyMat = new THREE.MeshStandardMaterial({
      color: car.color,
      roughness: 0.15,
      metalness: 0.85
    });
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.position.y = (ht * 0.6) / 2 + 0.35;
    body.castShadow = true;
    carGroup.add(body);

    // 3. Cabin & Glass Roof
    const cabinGeo = new THREE.BoxGeometry(len * 0.55, ht * 0.5, wd * 0.88);
    const cabinMat = new THREE.MeshStandardMaterial({
      color: 0x111622,
      roughness: 0.05,
      metalness: 0.95,
      transparent: true,
      opacity: 0.8
    });
    const cabin = new THREE.Mesh(cabinGeo, cabinMat);
    cabin.position.set(-len * 0.08, body.position.y + ht * 0.55, 0);
    carGroup.add(cabin);

    // 4. Headlights & Taillights
    const headMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const lightL = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.12, 0.35), headMat);
    lightL.position.set(len / 2 + 0.02, body.position.y, wd * 0.32);
    const lightR = lightL.clone();
    lightR.position.z = -wd * 0.32;
    carGroup.add(lightL, lightR);

    // 5. 4 Wheels
    const wRadius = ht * 0.28;
    const wheelGeo = new THREE.CylinderGeometry(wRadius, wRadius, 0.22, 24);
    const wheelMat = new THREE.MeshStandardMaterial({ color: 0x151515, roughness: 0.6 });
    const rimMat = new THREE.MeshStandardMaterial({ color: car.accentColor, metalness: 0.9, roughness: 0.1 });

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

      const rim = new THREE.Mesh(new THREE.CylinderGeometry(wRadius * 0.65, wRadius * 0.65, 0.23, 8), rimMat);
      rim.rotation.x = Math.PI / 2;
      wGroup.add(rim);

      wGroup.position.set(wx, wy, wz);
      carGroup.add(wGroup);
    });

    // Position Car Group on Showroom Floor
    const [px, py, pz] = car.pos;
    carGroup.position.set(px, py, pz);
    scene.add(carGroup);

    carMeshes.push(carGroup);
  });
}

// Switch Active Car & Animate Camera to Car Bay
function switchCar(index) {
  activeCarIndex = index;
  const car = carsData[index];

  // Update UI Selector Pills
  document.querySelectorAll(".car-pill").forEach((btn) => {
    btn.classList.toggle("active", parseInt(btn.dataset.carId) === index);
  });

  // Update UI Floor Pills
  document.querySelectorAll(".floor-pill").forEach((btn) => {
    btn.classList.toggle("active", parseInt(btn.dataset.floor) === car.floor);
  });

  // Update Quick Overlay Specs
  document.getElementById("quick-car-name").textContent = car.name;
  document.getElementById("quick-car-price").innerHTML = `${car.price} <span>• ${car.year} Model</span>`;
  document.getElementById("spec-km").textContent = car.km;
  document.getElementById("spec-owner").textContent = car.owner;
  document.getElementById("spec-fuel").textContent = car.fuel;
  document.getElementById("floor-tag-label").textContent = car.floorName;

  // Set Smooth Camera Target Position
  const [px, py, pz] = car.pos;
  targetLookAt.set(px, py + 1.0, pz);
  targetCameraPos.set(px + 4.5, py + 2.5, pz + 5.5);
}

function switchFloor(floorNum) {
  // Find first car on this floor
  const carOnFloor = carsData.find(c => c.floor === floorNum);
  if (carOnFloor) {
    switchCar(carOnFloor.id);
  }
}

// Modal Handlers
function updateModalData() {
  const car = carsData[activeCarIndex];
  document.getElementById("modal-car-title").textContent = car.name;
  document.getElementById("modal-car-price").textContent = car.price;
  document.getElementById("m-year").textContent = car.year;
  document.getElementById("m-km").textContent = car.km;
  document.getElementById("m-engine").textContent = car.fuel;
  document.getElementById("m-trans").textContent = car.trans;
  document.getElementById("m-owner").textContent = car.owner;
  document.getElementById("m-grade").textContent = car.grade;
}

document.addEventListener("DOMContentLoaded", () => {
  init3D();

  // Populate Car Pills dynamically
  const carPillsContainer = document.getElementById("car-pills-wrap");
  if (carPillsContainer) {
    carPillsContainer.innerHTML = "";
    carsData.forEach((car) => {
      const btn = document.createElement("button");
      btn.className = `car-pill ${car.id === 0 ? "active" : ""}`;
      btn.dataset.carId = car.id;
      btn.textContent = car.name.split(" ")[0] + " " + car.name.split(" ")[1];
      btn.onclick = () => switchCar(car.id);
      carPillsContainer.appendChild(btn);
    });
  }

  // Modal Listeners
  const backdrop = document.getElementById("modal-backdrop");
  document.getElementById("btn-open-modal").addEventListener("click", () => {
    updateModalData();
    backdrop.classList.add("active");
  });
  document.getElementById("btn-modal-close").addEventListener("click", () => {
    backdrop.classList.remove("active");
  });

  // Floor Pill Listeners
  document.querySelectorAll(".floor-pill").forEach((btn) => {
    btn.addEventListener("click", () => {
      switchFloor(parseInt(btn.dataset.floor));
    });
  });

  // EMI Calculator Calculation
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

// WhatsApp Actions
function bookWhatsAppDrive() {
  const car = carsData[activeCarIndex];
  const msg = encodeURIComponent(`Hi Aura Motors, I want to schedule a physical test drive for the ${car.name} (${car.price}). Please share available slots!`);
  window.open(`https://wa.me/?text=${msg}`, '_blank');
}

function bookWhatsAppEMI() {
  const amount = document.getElementById("lbl-amount").textContent;
  const emi = document.getElementById("emi-output").textContent;
  const msg = encodeURIComponent(`Hi Aura Motors, I am interested in financing a car with Loan Amount ${amount} (Estimated EMI: ${emi}). Please share loan partners!`);
  window.open(`https://wa.me/?text=${msg}`, '_blank');
}
