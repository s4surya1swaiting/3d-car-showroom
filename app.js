// AURA MOTORS — 3-STORY ARCHITECTURAL SHOWROOM WITH FPS WALKTHROUGH & NFS ZOOM INSPECTION

const showroomCars = [
  // GROUND FLOOR BAYS (SUVs & Off-Road)
  {
    id: "scorpio",
    floor: "Ground Floor — SUV Bay 1",
    floorId: 0,
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
    pos: [-10, 0.2, -6],
    rotY: Math.PI / 6,
    color: 0x3a404a,
    stats: { speed: 82, accel: 78, power: 85, handling: 80 }
  },
  {
    id: "nexon",
    floor: "Ground Floor — EV Bay 2",
    floorId: 0,
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
    pos: [-3, 0.2, -6],
    rotY: Math.PI / 6,
    color: 0x00d2ff,
    stats: { speed: 75, accel: 88, power: 76, handling: 84 }
  },
  {
    id: "thar",
    floor: "Ground Floor — 4x4 Bay 3",
    floorId: 0,
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
    pos: [4, 0.2, -6],
    rotY: -Math.PI / 6,
    color: 0x1f2421,
    stats: { speed: 70, accel: 72, power: 82, handling: 78 }
  },
  {
    id: "bolero",
    floor: "Ground Floor — Utility Bay 4",
    floorId: 0,
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
    pos: [11, 0.2, -6],
    rotY: -Math.PI / 6,
    color: 0x2b3a2f,
    stats: { speed: 65, accel: 62, power: 74, handling: 70 }
  },

  // 1ST FLOOR BAYS (Executive Luxury Sedans) — Height y = 5.2
  {
    id: "merc",
    floor: "1st Floor — Luxury Suite Bay 5",
    floorId: 1,
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
    pos: [-10, 5.2, 4],
    rotY: Math.PI / 6,
    color: 0x09152a,
    stats: { speed: 92, accel: 90, power: 94, handling: 92 }
  },
  {
    id: "bmw",
    floor: "1st Floor — Luxury Suite Bay 6",
    floorId: 1,
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
    pos: [-3, 5.2, 4],
    rotY: Math.PI / 6,
    color: 0x730d17,
    stats: { speed: 90, accel: 88, power: 92, handling: 93 }
  },
  {
    id: "jeep",
    floor: "1st Floor — Luxury Suite Bay 7",
    floorId: 1,
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
    pos: [4, 5.2, 4],
    rotY: -Math.PI / 6,
    color: 0xe0e0e0,
    stats: { speed: 80, accel: 79, power: 83, handling: 82 }
  },

  // 2ND FLOOR BAYS (Supercar Gallery) — Height y = 10.2
  {
    id: "audi",
    floor: "2nd Floor — Supercar Gallery Bay 8",
    floorId: 2,
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
    pos: [-8, 10.2, 10],
    rotY: Math.PI / 6,
    color: 0x181a20,
    stats: { speed: 98, accel: 99, power: 97, handling: 96 }
  },
  {
    id: "porsche",
    floor: "2nd Floor — Supercar Gallery Bay 9",
    floorId: 2,
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
    pos: [0, 10.2, 10],
    rotY: 0,
    color: 0xd90429,
    stats: { speed: 99, accel: 98, power: 96, handling: 99 }
  },
  {
    id: "fortuner",
    floor: "2nd Floor — Supercar Gallery Bay 10",
    floorId: 2,
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
    pos: [8, 10.2, 10],
    rotY: -Math.PI / 6,
    color: 0xf4f5f6,
    stats: { speed: 84, accel: 80, power: 88, handling: 81 }
  }
];

let scene, camera, renderer;
let targetCameraPos = new THREE.Vector3(0, 2.2, 18);
let targetLookAt = new THREE.Vector3(0, 2.0, 0);
let currentLookAt = new THREE.Vector3(0, 2.0, 0);
let carBays = [];
let activeInspectedCar = null;

function initShowroom3D() {
  const container = document.getElementById("showroom-canvas-target");
  if (!container) return;

  // 1. Scene setup
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x06070a);
  scene.fog = new THREE.FogExp2(0x06070a, 0.012);

  // 2. Camera setup
  camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 140);
  camera.position.set(0, 2.2, 18);

  // 3. Renderer setup
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  container.appendChild(renderer.domElement);

  // 4. Lighting setup
  const ambient = new THREE.AmbientLight(0xffffff, 0.95);
  scene.add(ambient);

  const mainSun = new THREE.DirectionalLight(0xfff5e6, 1.8);
  mainSun.position.set(15, 30, 15);
  mainSun.castShadow = true;
  scene.add(mainSun);

  const neonBlue = new THREE.PointLight(0x00d2ff, 2.0, 40);
  neonBlue.position.set(-15, 6, -10);
  scene.add(neonBlue);

  const neonGold = new THREE.PointLight(0xe2b755, 2.0, 40);
  neonGold.position.set(15, 12, 10);
  scene.add(neonGold);

  // 5. Build 3-Story Architectural Building
  build3StoryBuilding();

  // 6. Mount Realistic Car Displays
  mountCarDisplays();

  // 7. Touch & Mouse Navigation Controls
  setupNavigation(container);

  // 8. Raycaster for Zoom-In NFS Inspection
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  container.addEventListener("click", (e) => {
    const rect = container.getBoundingClientRect();
    mouse.x = ((e.clientX - rect.left) / container.clientWidth) * 2 - 1;
    mouse.y = -((e.clientY - rect.top) / container.clientHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(carBays, true);
    if (intersects.length > 0) {
      let obj = intersects[0].object;
      while (obj.parent && !obj.userData.carData) {
        obj = obj.parent;
      }
      if (obj.userData.carData) {
        zoomInspectCar(obj.userData.carData);
      }
    }
  });

  // Render Loop
  function animate() {
    requestAnimationFrame(animate);

    camera.position.lerp(targetCameraPos, 0.06);
    currentLookAt.lerp(targetLookAt, 0.06);
    camera.lookAt(currentLookAt);

    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener("resize", () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });
}

// Build 3-Story Architectural Showroom (Ground, 1st Floor, 2nd Floor, Grand Stairs, Glass Enclosure)
function build3StoryBuilding() {
  // Ground Floor Slab
  const groundGeo = new THREE.PlaneGeometry(40, 44);
  const groundMat = new THREE.MeshStandardMaterial({ color: 0x11141d, roughness: 0.12, metalness: 0.88 });
  const ground = new THREE.Mesh(groundGeo, groundMat);
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);

  const grid0 = new THREE.GridHelper(44, 44, 0x00d2ff, 0x1f2433);
  grid0.position.y = 0.01;
  scene.add(grid0);

  // 1st Floor Slab (Height y = 5.0)
  const floor1Geo = new THREE.BoxGeometry(36, 0.4, 24);
  const floor1Mat = new THREE.MeshStandardMaterial({ color: 0x161a26, roughness: 0.2, metalness: 0.8 });
  const floor1 = new THREE.Mesh(floor1Geo, floor1Mat);
  floor1.position.set(0, 5.0, 4);
  floor1.receiveShadow = true;
  scene.add(floor1);

  const grid1 = new THREE.GridHelper(36, 36, 0xe2b755, 0x2b3245);
  grid1.position.set(0, 5.21, 4);
  scene.add(grid1);

  // 2nd Floor Slab (Height y = 10.0)
  const floor2Geo = new THREE.BoxGeometry(36, 0.4, 24);
  const floor2Mat = new THREE.MeshStandardMaterial({ color: 0x1c2130, roughness: 0.2, metalness: 0.8 });
  const floor2 = new THREE.Mesh(floor2Geo, floor2Mat);
  floor2.position.set(0, 10.0, 10);
  floor2.receiveShadow = true;
  scene.add(floor2);

  const grid2 = new THREE.GridHelper(36, 36, 0x00d2ff, 0x333b52);
  grid2.position.set(0, 10.21, 10);
  scene.add(grid2);

  // Steel Pillars supporting 1st & 2nd floors
  const colGeo = new THREE.CylinderGeometry(0.4, 0.4, 10.0, 16);
  const colMat = new THREE.MeshStandardMaterial({ color: 0x080a0e, metalness: 0.9, roughness: 0.1 });
  [[-16, -2], [16, -2], [-16, 14], [16, 14]].forEach(([cx, cz]) => {
    const col = new THREE.Mesh(colGeo, colMat);
    col.position.set(cx, 5.0, cz);
    scene.add(col);
  });

  // Architectural Grand Staircases (Ground -> 1st Floor, 1st -> 2nd Floor)
  const stepMat = new THREE.MeshStandardMaterial({ color: 0xe2b755, metalness: 0.8, roughness: 0.2 });

  // Stairs 1
  for (let i = 0; i < 12; i++) {
    const step = new THREE.Mesh(new THREE.BoxGeometry(3.5, 0.42, 0.45), stepMat);
    step.position.set(15, (i + 0.5) * 0.42, -4 + i * 0.45);
    scene.add(step);
  }

  // Stairs 2
  for (let i = 0; i < 12; i++) {
    const step = new THREE.Mesh(new THREE.BoxGeometry(3.5, 0.42, 0.45), stepMat);
    step.position.set(-15, 5.0 + (i + 0.5) * 0.42, 2 + i * 0.45);
    scene.add(step);
  }

  // Glass Front Facade
  const glassWall = new THREE.Mesh(new THREE.PlaneGeometry(40, 15), new THREE.MeshPhysicalMaterial({ color: 0x88ccff, transparent: true, opacity: 0.15, transmission: 0.95 }));
  glassWall.position.set(0, 7.5, -20);
  scene.add(glassWall);
}

// Mount Realistic Car Display Bays (3D Podium + HD Photo Frame + 3D Chassis)
function mountCarDisplays() {
  const textureLoader = new THREE.TextureLoader();
  carBays = [];

  showroomCars.forEach((car) => {
    const bayGroup = new THREE.Group();
    bayGroup.userData = { carData: car };

    // 1. Illuminated Gold/Cyan Podium Base
    const podGeo = new THREE.CylinderGeometry(2.6, 2.8, 0.16, 32);
    const podMat = new THREE.MeshStandardMaterial({ color: 0x161a24, metalness: 0.85, roughness: 0.2 });
    const pod = new THREE.Mesh(podGeo, podMat);
    pod.position.y = 0.08;
    bayGroup.add(pod);

    const podRing = new THREE.Mesh(
      new THREE.TorusGeometry(2.65, 0.04, 16, 64),
      new THREE.MeshBasicMaterial({ color: car.floorId === 0 ? 0x00d2ff : 0xe2b755 })
    );
    podRing.rotation.x = Math.PI / 2;
    podRing.position.y = 0.17;
    bayGroup.add(podRing);

    // 2. Realistic HD Car Photo Frame Display
    textureLoader.load(car.img, (texture) => {
      texture.encoding = THREE.sRGBEncoding;

      const frameGeo = new THREE.BoxGeometry(4.4, 2.6, 0.12);
      const frameMat = new THREE.MeshStandardMaterial({ color: 0x0d1017, metalness: 0.9 });
      const frame = new THREE.Mesh(frameGeo, frameMat);
      frame.position.y = 1.8;

      const displayGeo = new THREE.PlaneGeometry(4.2, 2.4);
      const displayMat = new THREE.MeshBasicMaterial({ map: texture });
      const display = new THREE.Mesh(displayGeo, displayMat);
      display.position.set(0, 1.8, 0.07);

      bayGroup.add(frame);
      bayGroup.add(display);
    });

    // 3. Position & Rotate Bay Group
    const [px, py, pz] = car.pos;
    bayGroup.position.set(px, py, pz);
    bayGroup.rotation.y = car.rotY;

    scene.add(bayGroup);
    carBays.push(bayGroup);
  });
}

// Navigation Controls (Floor Selector, D-Pad, Mouse Drag)
function setupNavigation(container) {
  let isDragging = false;
  let previousMousePosition = { x: 0, y: 0 };

  container.addEventListener("mousedown", (e) => {
    isDragging = true;
    previousMousePosition = { x: e.clientX, y: e.clientY };
  });

  container.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - previousMousePosition.x;
    targetLookAt.x += deltaX * 0.02;
    previousMousePosition = { x: e.clientX, y: e.clientY };
  });

  window.addEventListener("mouseup", () => { isDragging = false; });

  container.addEventListener("touchstart", (e) => {
    if (e.touches.length === 1) {
      isDragging = true;
      previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  });

  container.addEventListener("touchmove", (e) => {
    if (!isDragging || e.touches.length !== 1) return;
    const deltaX = e.touches[0].clientX - previousMousePosition.x;
    targetLookAt.x += deltaX * 0.03;
    previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  });

  window.addEventListener("touchend", () => { isDragging = false; });
}

// Switch Showroom Floors (Ground = 0, 1st = 1, 2nd = 2)
function switchFloor(floorNum) {
  closeNFSInspector();
  if (floorNum === 0) {
    targetCameraPos.set(0, 2.2, 18);
    targetLookAt.set(0, 2.0, 0);
  } else if (floorNum === 1) {
    targetCameraPos.set(0, 7.2, 18);
    targetLookAt.set(0, 6.8, 0);
  } else if (floorNum === 2) {
    targetCameraPos.set(0, 12.2, 22);
    targetLookAt.set(0, 11.8, 0);
  }

  document.querySelectorAll(".floor-btn").forEach((btn, idx) => {
    if (idx === floorNum) btn.classList.add("active");
    else btn.classList.remove("active");
  });
}

function moveCamera(dir) {
  const step = 3.5;
  if (dir === 'up') targetCameraPos.z -= step;
  if (dir === 'down') targetCameraPos.z += step;
  if (dir === 'left') targetCameraPos.x -= step;
  if (dir === 'right') targetCameraPos.x += step;

  targetLookAt.set(targetCameraPos.x, targetCameraPos.y - 0.5, targetCameraPos.z - 5);
}

function resetShowroomCamera() {
  switchFloor(0);
}

// Zoom-In & Open NFS Performance Spec Inspection Screen
function zoomInspectCar(carData) {
  activeInspectedCar = carData;

  // Zoom Camera Smoothly Up Close to the Selected Car Bay
  const [px, py, pz] = carData.pos;
  targetCameraPos.set(px, py + 1.6, pz + 4.5);
  targetLookAt.set(px, py + 1.2, pz);

  // Populate NFS Inspection HUD
  document.getElementById("nfs-floor-tag").textContent = carData.floor;
  document.getElementById("nfs-car-title").textContent = carData.name;
  document.getElementById("nfs-car-tagline").textContent = carData.tagline;
  document.getElementById("nfs-car-price").textContent = carData.price;
  document.getElementById("nfs-year").textContent = carData.year;
  document.getElementById("nfs-km").textContent = carData.km;
  document.getElementById("nfs-engine").textContent = carData.fuel;
  document.getElementById("nfs-trans").textContent = carData.trans;
  document.getElementById("nfs-owner").textContent = carData.owner;
  document.getElementById("nfs-grade").textContent = carData.grade;
  document.getElementById("nfs-car-img").src = carData.img;

  // Performance Meters
  document.getElementById("meter-speed").style.width = carData.stats.speed + "%";
  document.getElementById("meter-accel").style.width = carData.stats.accel + "%";
  document.getElementById("meter-power").style.width = carData.stats.power + "%";
  document.getElementById("meter-handling").style.width = carData.stats.handling + "%";

  document.getElementById("val-speed").textContent = carData.stats.speed;
  document.getElementById("val-accel").textContent = carData.stats.accel;
  document.getElementById("val-power").textContent = carData.stats.power;
  document.getElementById("val-handling").textContent = carData.stats.handling;

  const modal = document.getElementById("nfs-inspection-modal");
  if (modal) modal.classList.add("active");
}

function closeNFSInspector() {
  const modal = document.getElementById("nfs-inspection-modal");
  if (modal) modal.classList.remove("active");
}

function toggleShowroomFullscreen() {
  const wrapper = document.getElementById("museum-stage-wrapper");
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
  initShowroom3D();

  const pillsContainer = document.getElementById("car-pills-wrap");
  if (pillsContainer) {
    pillsContainer.innerHTML = "";
    showroomCars.forEach((car) => {
      const btn = document.createElement("button");
      btn.className = "car-pill";
      btn.textContent = car.name.split(" ")[0] + " " + car.name.split(" ")[1];
      btn.onclick = () => zoomInspectCar(car);
      pillsContainer.appendChild(btn);
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
  const car = activeInspectedCar || showroomCars[0];
  const msg = encodeURIComponent(`Hi Aura Motors, I want to schedule a physical test drive for the ${car.name} (${car.price}). Please share available slots!`);
  window.open(`https://wa.me/?text=${msg}`, '_blank');
}

function bookWhatsAppEMI() {
  const amount = document.getElementById("lbl-amount").textContent;
  const emi = document.getElementById("emi-output").textContent;
  const msg = encodeURIComponent(`Hi Aura Motors, I am interested in financing a car with Loan Amount ${amount} (Estimated EMI: ${emi}). Please share loan partners!`);
  window.open(`https://wa.me/?text=${msg}`, '_blank');
}
