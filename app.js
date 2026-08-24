// AURA MOTORS 2-STORY ARCHITECTURAL 3D SHOWROOM WITH 3D CAR MESHES & STAIRS

const carsData = [
  // GROUND FLOOR BAYS
  {
    id: "car-1",
    floor: "Ground Floor — Display Bay 1",
    name: "Mahindra Scorpio-N Z8L 4x4",
    price: "₹ 24,50,000",
    year: "2023",
    km: "12,000 KM",
    fuel: "2.2L mHawk Diesel (172 BHP)",
    trans: "6-Speed Automatic 4XPLOR",
    owner: "1st Owner",
    grade: "140/140 Certified",
    img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop",
    pos: [-10, 0.4, -6],
    color: 0x5c6b73, // Silver Metallic SUV
    dim: [3.4, 1.45, 1.75]
  },
  {
    id: "car-2",
    floor: "Ground Floor — Display Bay 2",
    name: "Tata Nexon EV Dark Edition",
    price: "₹ 16,80,000",
    year: "2023",
    km: "8,500 KM",
    fuel: "Electric (465 KM Range)",
    trans: "Single-Speed Automatic",
    owner: "1st Owner",
    grade: "140/140 Certified",
    img: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=800&auto=format&fit=crop",
    pos: [-3, 0.4, -6],
    color: 0x0a3641, // Teal Electric
    dim: [2.9, 1.25, 1.6]
  },
  {
    id: "car-3",
    floor: "Ground Floor — Display Bay 3",
    name: "Mahindra Thar LX 4x4 Hard Top",
    price: "₹ 15,20,000",
    year: "2022",
    km: "18,400 KM",
    fuel: "2.0L mStallion Turbo Petrol",
    trans: "6-Speed Automatic 4WD",
    owner: "1st Owner",
    grade: "138/140 Certified",
    img: "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?q=80&w=800&auto=format&fit=crop",
    pos: [4, 0.4, -6],
    color: 0x1f2421, // Matte Black Off-Road
    dim: [2.8, 1.35, 1.65]
  },
  {
    id: "car-4",
    floor: "Ground Floor — Display Bay 4",
    name: "Mahindra Bolero Neo N10 Opt",
    price: "₹ 10,90,000",
    year: "2022",
    km: "24,000 KM",
    fuel: "1.5L mHawk75 Diesel",
    trans: "5-Speed Manual MLD",
    owner: "1st Owner",
    grade: "135/140 Certified",
    img: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=800&auto=format&fit=crop",
    pos: [11, 0.4, -6],
    color: 0x22382b, // Forest Green
    dim: [3.1, 1.35, 1.6]
  },

  // 1ST FLOOR MEZZANINE BALCONY BAYS (Height y = 5.4)
  {
    id: "car-5",
    floor: "1st Floor Mezzanine — Bay 5",
    name: "Mercedes-Benz S-Class S450",
    price: "₹ 1,35,00,000",
    year: "2022",
    km: "14,200 KM",
    fuel: "3.0L V6 Turbo Petrol",
    trans: "9G-TRONIC Automatic",
    owner: "1st Owner (Individual)",
    grade: "140/140 Certified",
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=800&auto=format&fit=crop",
    pos: [-10, 5.4, 4],
    color: 0x0b132b, // Midnight Navy Limousine
    dim: [3.8, 0.95, 1.75]
  },
  {
    id: "car-6",
    floor: "1st Floor Mezzanine — Bay 6",
    name: "BMW 7 Series 730Ld M-Sport",
    price: "₹ 1,18,00,000",
    year: "2021",
    km: "22,000 KM",
    fuel: "3.0L Straight-6 Diesel",
    trans: "8-Speed Steptronic",
    owner: "1st Owner (Corporate)",
    grade: "139/140 Certified",
    img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=800&auto=format&fit=crop",
    pos: [-3, 5.4, 4],
    color: 0x6e0d16, // Carbon Crimson
    dim: [3.7, 0.95, 1.75]
  },
  {
    id: "car-7",
    floor: "1st Floor Mezzanine — Bay 7",
    name: "Jeep Compass Model S 4x4",
    price: "₹ 26,40,000",
    year: "2023",
    km: "11,000 KM",
    fuel: "2.0L Multijet II Turbo Diesel",
    trans: "9-Speed Torque Converter",
    owner: "1st Owner",
    grade: "140/140 Certified",
    img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop",
    pos: [4, 5.4, 4],
    color: 0xdedede, // Pearl White Premium
    dim: [3.2, 1.25, 1.65]
  },
  {
    id: "car-8",
    floor: "1st Floor Mezzanine — Bay 8",
    name: "Audi RS e-tron GT Quattro",
    price: "₹ 1,62,00,000",
    year: "2023",
    km: "6,500 KM",
    fuel: "637 HP Dual Electric Motors",
    trans: "2-Speed Rear Automatic",
    owner: "1st Owner",
    grade: "140/140 Certified",
    img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=800&auto=format&fit=crop",
    pos: [11, 5.4, 4],
    color: 0x1c1e24, // Daytona Matte Gray Supercar
    dim: [3.6, 0.85, 1.8]
  },
  {
    id: "car-9",
    floor: "1st Floor Mezzanine — Bay 9",
    name: "Porsche 911 Carrera S",
    price: "₹ 1,85,00,000",
    year: "2022",
    km: "4,800 KM",
    fuel: "3.0L Twin-Turbo Flat-6 (450 HP)",
    trans: "8-Speed PDK Dual-Clutch",
    owner: "1st Owner",
    grade: "140/140 Certified",
    img: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=800&auto=format&fit=crop",
    pos: [-6, 5.4, 12],
    color: 0xd90429, // Guards Red Sports Coupe
    dim: [3.3, 0.8, 1.7]
  },
  {
    id: "car-10",
    floor: "1st Floor Mezzanine — Bay 10",
    name: "Toyota Fortuner Legender 4x4",
    price: "₹ 44,50,000",
    year: "2023",
    km: "15,800 KM",
    fuel: "2.8L Turbo Diesel (204 BHP)",
    trans: "6-Speed Automatic",
    owner: "1st Owner",
    grade: "140/140 Certified",
    img: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=800&auto=format&fit=crop",
    pos: [6, 5.4, 12],
    color: 0xf8f9fa, // Pearl White & Black Roof SUV
    dim: [3.6, 1.45, 1.75]
  }
];

let activeCar = null;
let scene, camera, renderer;
let targetPos = new THREE.Vector3(0, 3.5, 18);
let targetLookAt = new THREE.Vector3(0, 2.0, 0);
let currentLookAt = new THREE.Vector3(0, 2.0, 0);
let carMeshes = [];

function initShowroom3D() {
  const container = document.getElementById("museum-canvas-target");
  if (!container) return;

  // 1. Scene setup
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0a0c10);
  scene.fog = new THREE.FogExp2(0x0a0c10, 0.015);

  // 2. Camera setup
  camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 120);
  camera.position.set(0, 3.5, 20);

  // 3. Renderer setup
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  container.appendChild(renderer.domElement);

  // 4. Lighting setup
  const ambient = new THREE.AmbientLight(0xffffff, 0.9);
  scene.add(ambient);

  const sunLight = new THREE.DirectionalLight(0xfff5e6, 1.6);
  sunLight.position.set(12, 22, 14);
  sunLight.castShadow = true;
  scene.add(sunLight);

  const fillLight = new THREE.PointLight(0xe2b755, 1.5, 30);
  fillLight.position.set(0, 10, 0);
  scene.add(fillLight);

  // 5. Build 2-Story Architectural Building with Stairs & Balcony
  build2StoryShowroomBuilding();

  // 6. Build & Position 10 Detailed 3D Car Meshes
  build3DCarModels();

  // 7. Touch & Mouse Navigation Controls
  setupNavigation(container);

  // 8. Raycaster for Tapping 3D Cars
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
      while (obj.parent && !obj.userData.carData) {
        obj = obj.parent;
      }
      if (obj.userData.carData) {
        openInspectorModal(obj.userData.carData);
      }
    }
  });

  // Render Loop
  function animate() {
    requestAnimationFrame(animate);

    // Smooth Camera lerp to target
    camera.position.lerp(targetPos, 0.06);
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

// Build 2-Story Building Structure (Ground Floor, 1st Floor Balcony, Stairs, Glass Facade)
function build2StoryShowroomBuilding() {
  // Ground Floor Slab
  const floorGeo = new THREE.PlaneGeometry(36, 40);
  const floorMat = new THREE.MeshStandardMaterial({ color: 0x11141d, roughness: 0.15, metalness: 0.85 });
  const floor = new THREE.Mesh(floorGeo, floorMat);
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;
  scene.add(floor);

  const grid = new THREE.GridHelper(40, 40, 0xe2b755, 0x232733);
  grid.position.y = 0.01;
  scene.add(grid);

  // 1st Floor Mezzanine Balcony Slab (Height y = 5.0)
  const mezGeo = new THREE.BoxGeometry(34, 0.4, 20);
  const mezMat = new THREE.MeshStandardMaterial({ color: 0x181c28, roughness: 0.2, metalness: 0.7 });
  const mezzanine = new THREE.Mesh(mezGeo, mezMat);
  mezzanine.position.set(0, 5.0, 7);
  mezzanine.receiveShadow = true;
  scene.add(mezzanine);

  const mezGrid = new THREE.GridHelper(34, 34, 0xe2b755, 0x2d3345);
  mezGrid.position.set(0, 5.21, 7);
  scene.add(mezGrid);

  // Support Columns for Mezzanine
  const colGeo = new THREE.CylinderGeometry(0.4, 0.4, 5.0, 16);
  const colMat = new THREE.MeshStandardMaterial({ color: 0x090b0e, metalness: 0.9, roughness: 0.1 });
  [[-15, -1], [15, -1], [-15, 15], [15, 15]].forEach(([cx, cz]) => {
    const col = new THREE.Mesh(colGeo, colMat);
    col.position.set(cx, 2.5, cz);
    scene.add(col);
  });

  // Architectural Glass Railing around 1st Floor Balcony
  const glassRailMat = new THREE.MeshPhysicalMaterial({
    color: 0x88ccff,
    transparent: true,
    opacity: 0.25,
    transmission: 0.9,
    roughness: 0.05
  });

  const railFrontGeo = new THREE.BoxGeometry(34, 1.0, 0.1);
  const railFront = new THREE.Mesh(railFrontGeo, glassRailMat);
  railFront.position.set(0, 5.7, -3);
  scene.add(railFront);

  // Architectural Grand Staircase leading from Ground Floor to Mezzanine Balcony
  const stepCount = 14;
  const stepHeight = 5.0 / stepCount;
  const stepDepth = 0.45;
  const stepWidth = 3.6;
  const stepMat = new THREE.MeshStandardMaterial({ color: 0xe2b755, metalness: 0.7, roughness: 0.2 });

  for (let i = 0; i < stepCount; i++) {
    const stepGeo = new THREE.BoxGeometry(stepWidth, stepHeight, stepDepth);
    const step = new THREE.Mesh(stepGeo, stepMat);
    step.position.set(14, (i + 0.5) * stepHeight, -2 + i * stepDepth);
    step.receiveShadow = true;
    scene.add(step);
  }

  // Outer Glass Facade Wall
  const glassWallGeo = new THREE.PlaneGeometry(36, 12);
  const glassWallMat = new THREE.MeshPhysicalMaterial({ color: 0x88ccff, transparent: true, opacity: 0.15, transmission: 0.95 });
  const glassWall = new THREE.Mesh(glassWallGeo, glassWallMat);
  glassWall.position.set(0, 6, -20);
  scene.add(glassWall);
}

// Build & Staging 10 Detailed Procedural 3D Car Models
function build3DCarModels() {
  carMeshes = [];

  carsData.forEach((car) => {
    const carGroup = new THREE.Group();
    carGroup.userData = { carData: car };

    // 1. Gold Illuminated Display Podium Base
    const padGeo = new THREE.CylinderGeometry(2.5, 2.7, 0.15, 32);
    const padMat = new THREE.MeshStandardMaterial({ color: 0x1b1e2a, metalness: 0.85, roughness: 0.25 });
    const pad = new THREE.Mesh(padGeo, padMat);
    pad.position.y = 0.08;
    carGroup.add(pad);

    const padRing = new THREE.Mesh(
      new THREE.TorusGeometry(2.55, 0.04, 16, 64),
      new THREE.MeshBasicMaterial({ color: 0xe2b755 })
    );
    padRing.rotation.x = Math.PI / 2;
    padRing.position.y = 0.16;
    carGroup.add(padRing);

    // 2. 3D Metallic Car Body Shell
    const [len, ht, wd] = car.dim;
    const bodyGeo = new THREE.BoxGeometry(len, ht * 0.55, wd);
    const bodyMat = new THREE.MeshStandardMaterial({
      color: car.color,
      roughness: 0.15,
      metalness: 0.85
    });
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.position.y = (ht * 0.55) / 2 + 0.35;
    body.castShadow = true;
    carGroup.add(body);

    // 3. Cabin & Glass Roof Windows
    const cabinGeo = new THREE.BoxGeometry(len * 0.55, ht * 0.5, wd * 0.88);
    const cabinMat = new THREE.MeshStandardMaterial({
      color: 0x090b0e,
      roughness: 0.05,
      metalness: 0.95,
      transparent: true,
      opacity: 0.85
    });
    const cabin = new THREE.Mesh(cabinGeo, cabinMat);
    cabin.position.set(-len * 0.08, body.position.y + ht * 0.5, 0);
    cabin.castShadow = true;
    carGroup.add(cabin);

    // 4. Headlights & Taillights
    const headMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const lightL = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.12, 0.35), headMat);
    lightL.position.set(len / 2 + 0.02, body.position.y, wd * 0.32);
    const lightR = lightL.clone();
    lightR.position.z = -wd * 0.32;
    carGroup.add(lightL, lightR);

    // 5. 4 Wheels with Rims
    const wRadius = ht * 0.26;
    const wheelGeo = new THREE.CylinderGeometry(wRadius, wRadius, 0.22, 24);
    const wheelMat = new THREE.MeshStandardMaterial({ color: 0x151515, roughness: 0.6 });
    const rimMat = new THREE.MeshStandardMaterial({ color: 0xe2b755, metalness: 0.9, roughness: 0.1 });

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

    // Position Car Group in Showroom Bay
    const [px, py, pz] = car.pos;
    carGroup.position.set(px, py, pz);
    scene.add(carGroup);

    carMeshes.push(carGroup);
  });
}

// Navigation & Camera Controls
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

  window.addEventListener("mouseup", () => {
    isDragging = false;
  });

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

  window.addEventListener("touchend", () => {
    isDragging = false;
  });
}

function moveCamera(dir) {
  const step = 3.5;
  if (dir === 'up') targetPos.z -= step;
  if (dir === 'down') targetPos.z += step;
  if (dir === 'left') targetPos.x -= step;
  if (dir === 'right') targetPos.x += step;

  targetPos.x = Math.max(-14, Math.min(14, targetPos.x));
  targetPos.z = Math.max(-12, Math.min(22, targetPos.z));
  targetLookAt.set(targetPos.x, targetPos.y - 1.5, targetPos.z - 5);
}

function resetShowroomCamera() {
  targetPos.set(0, 3.5, 20);
  targetLookAt.set(0, 2.0, 0);
  closeInspectorModal();
}

function openInspectorModal(carData) {
  activeCar = carData;

  // Elevate Camera to Car Bay (Ground or 1st Floor)
  const [px, py, pz] = carData.pos;
  targetPos.set(px, py + 1.8, pz + 5.5);
  targetLookAt.set(px, py + 0.8, pz);

  document.getElementById("modal-wall-tag").textContent = carData.floor;
  document.getElementById("modal-car-title").textContent = carData.name;
  document.getElementById("modal-car-price").textContent = carData.price;
  document.getElementById("m-year").textContent = carData.year;
  document.getElementById("m-km").textContent = carData.km;
  document.getElementById("m-engine").textContent = carData.fuel;
  document.getElementById("m-trans").textContent = carData.trans;
  document.getElementById("m-owner").textContent = carData.owner;
  document.getElementById("m-grade").textContent = carData.grade;
  document.getElementById("modal-car-img").src = carData.img;

  const modal = document.getElementById("museum-inspector-modal");
  if (modal) modal.classList.add("active");
}

function closeInspectorModal() {
  const modal = document.getElementById("museum-inspector-modal");
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

document.addEventListener("DOMContentLoaded", () => {
  initShowroom3D();

  const pillsContainer = document.getElementById("car-pills-wrap");
  if (pillsContainer) {
    pillsContainer.innerHTML = "";
    carsData.forEach((car) => {
      const btn = document.createElement("button");
      btn.className = "car-pill";
      btn.textContent = car.name.split(" ")[0] + " " + car.name.split(" ")[1];
      btn.onclick = () => openInspectorModal(car);
      pillsContainer.appendChild(btn);
    });
  }

  document.getElementById("inspector-close-btn").addEventListener("click", closeInspectorModal);

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
  if (!activeCar) activeCar = carsData[0];
  const msg = encodeURIComponent(`Hi Aura Motors, I want to schedule a physical test drive for the ${activeCar.name} (${activeCar.price}). Please share available slots!`);
  window.open(`https://wa.me/?text=${msg}`, '_blank');
}

function bookWhatsAppEMI() {
  const amount = document.getElementById("lbl-amount").textContent;
  const emi = document.getElementById("emi-output").textContent;
  const msg = encodeURIComponent(`Hi Aura Motors, I am interested in financing a car with Loan Amount ${amount} (Estimated EMI: ${emi}). Please share loan partners!`);
  window.open(`https://wa.me/?text=${msg}`, '_blank');
}
