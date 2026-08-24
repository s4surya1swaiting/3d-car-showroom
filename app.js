// AURA MOTORS 3D ARCHITECTURAL SHOWROOM ROOM WALKTHROUGH (MADHUKANTA-STYLE)

const carsData = [
  {
    id: "car-1",
    name: "Mahindra Scorpio-N Z8L 4x4",
    wall: "West Showroom Wall — Bay 1",
    price: "₹ 24,50,000",
    year: "2023",
    km: "12,000 KM",
    fuel: "2.2L mHawk Diesel (172 BHP)",
    trans: "6-Speed Automatic 4XPLOR",
    owner: "1st Owner",
    grade: "140/140 Certified",
    img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop",
    pos: { x: -14, y: 1.8, z: -10 },
    rotY: Math.PI / 6
  },
  {
    id: "car-2",
    name: "Tata Nexon EV Dark Edition",
    wall: "West Showroom Wall — Bay 2",
    price: "₹ 16,80,000",
    year: "2023",
    km: "8,500 KM",
    fuel: "Electric (465 KM Range)",
    trans: "Single-Speed Automatic",
    owner: "1st Owner",
    grade: "140/140 Certified",
    img: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=800&auto=format&fit=crop",
    pos: { x: -14, y: 1.8, z: 0 },
    rotY: Math.PI / 6
  },
  {
    id: "car-3",
    name: "Mahindra Thar LX 4x4 Hard Top",
    wall: "West Showroom Wall — Bay 3",
    price: "₹ 15,20,000",
    year: "2022",
    km: "18,400 KM",
    fuel: "2.0L mStallion Turbo Petrol",
    trans: "6-Speed Automatic 4WD",
    owner: "1st Owner",
    grade: "138/140 Certified",
    img: "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?q=80&w=800&auto=format&fit=crop",
    pos: { x: -14, y: 1.8, z: 10 },
    rotY: Math.PI / 6
  },
  {
    id: "car-4",
    name: "Mahindra Bolero Neo N10 Opt",
    wall: "North Showroom Wall — Bay 4",
    price: "₹ 10,90,000",
    year: "2022",
    km: "24,000 KM",
    fuel: "1.5L mHawk75 Diesel",
    trans: "5-Speed Manual MLD",
    owner: "1st Owner",
    grade: "135/140 Certified",
    img: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=800&auto=format&fit=crop",
    pos: { x: -6, y: 1.8, z: -18 },
    rotY: 0
  },
  {
    id: "car-5",
    name: "Mercedes-Benz S-Class S450",
    wall: "North Showroom Wall — Bay 5",
    price: "₹ 1,35,00,000",
    year: "2022",
    km: "14,200 KM",
    fuel: "3.0L V6 Turbo Petrol",
    trans: "9G-TRONIC Automatic",
    owner: "1st Owner (Individual)",
    grade: "140/140 Certified",
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=800&auto=format&fit=crop",
    pos: { x: 6, y: 1.8, z: -18 },
    rotY: 0
  },
  {
    id: "car-6",
    name: "BMW 7 Series 730Ld M-Sport",
    wall: "East Showroom Wall — Bay 6",
    price: "₹ 1,18,00,000",
    year: "2021",
    km: "22,000 KM",
    fuel: "3.0L Straight-6 Diesel",
    trans: "8-Speed Steptronic",
    owner: "1st Owner (Corporate)",
    grade: "139/140 Certified",
    img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=800&auto=format&fit=crop",
    pos: { x: 14, y: 1.8, z: -10 },
    rotY: -Math.PI / 6
  },
  {
    id: "car-7",
    name: "Jeep Compass Model S 4x4",
    wall: "East Showroom Wall — Bay 7",
    price: "₹ 26,40,000",
    year: "2023",
    km: "11,000 KM",
    fuel: "2.0L Multijet II Turbo Diesel",
    trans: "9-Speed Torque Converter",
    owner: "1st Owner",
    grade: "140/140 Certified",
    img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop",
    pos: { x: 14, y: 1.8, z: 0 },
    rotY: -Math.PI / 6
  },
  {
    id: "car-8",
    name: "Audi RS e-tron GT Quattro",
    wall: "East Showroom Wall — Bay 8",
    price: "₹ 1,62,00,000",
    year: "2023",
    km: "6,500 KM",
    fuel: "637 HP Dual Electric Motors",
    trans: "2-Speed Rear Automatic",
    owner: "1st Owner",
    grade: "140/140 Certified",
    img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=800&auto=format&fit=crop",
    pos: { x: 14, y: 1.8, z: 10 },
    rotY: -Math.PI / 6
  },
  {
    id: "car-9",
    name: "Porsche 911 Carrera S",
    wall: "South Entrance Wall — Bay 9",
    price: "₹ 1,85,00,000",
    year: "2022",
    km: "4,800 KM",
    fuel: "3.0L Twin-Turbo Flat-6 (450 HP)",
    trans: "8-Speed PDK Dual-Clutch",
    owner: "1st Owner",
    grade: "140/140 Certified",
    img: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=800&auto=format&fit=crop",
    pos: { x: -6, y: 1.8, z: 18 },
    rotY: Math.PI
  },
  {
    id: "car-10",
    name: "Toyota Fortuner Legender 4x4",
    wall: "South Entrance Wall — Bay 10",
    price: "₹ 44,50,000",
    year: "2023",
    km: "15,800 KM",
    fuel: "2.8L Turbo Diesel (204 BHP)",
    trans: "6-Speed Automatic",
    owner: "1st Owner",
    grade: "140/140 Certified",
    img: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=800&auto=format&fit=crop",
    pos: { x: 6, y: 1.8, z: 18 },
    rotY: Math.PI
  }
];

let activeCar = null;
let scene, camera, renderer;
let targetPos = new THREE.Vector3(0, 2.2, 16);
let targetLookAt = new THREE.Vector3(0, 2.0, 0);
let currentLookAt = new THREE.Vector3(0, 2.0, 0);
let isNavigating = false;
let carMeshes = [];

function initShowroom3D() {
  const container = document.getElementById("museum-canvas-target");
  if (!container) return;

  // 1. Scene setup
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0a0c10);
  scene.fog = new THREE.FogExp2(0x0a0c10, 0.015);

  // 2. Camera setup
  camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 100);
  camera.position.set(0, 2.2, 16);

  // 3. Renderer setup
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  container.appendChild(renderer.domElement);

  // 4. Showroom Lighting
  const ambient = new THREE.AmbientLight(0xffffff, 0.9);
  scene.add(ambient);

  const mainLight = new THREE.DirectionalLight(0xfffaed, 1.5);
  mainLight.position.set(10, 20, 10);
  mainLight.castShadow = true;
  scene.add(mainLight);

  const accentBlue = new THREE.PointLight(0x00d2ff, 1.8, 30);
  accentBlue.position.set(-12, 6, -12);
  scene.add(accentBlue);

  const accentGold = new THREE.PointLight(0xe2b755, 1.8, 30);
  accentGold.position.set(12, 6, -12);
  scene.add(accentGold);

  // 5. Build Architectural Showroom Corridor
  buildArchitecturalRoom();

  // 6. Mount Car Bays & Frames
  mountCarBays();

  // 7. Touch & Mouse Navigation Controls
  setupNavigation(container);

  // 8. Raycaster Click Listener
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

    // Smooth Camera Movement
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

// Build Architectural Room Corridor (Walls, Polished Floor, Ceiling, Glass Door)
function buildArchitecturalRoom() {
  const textureLoader = new THREE.TextureLoader();

  // Polished Showroom Floor
  const floorGeo = new THREE.PlaneGeometry(36, 44);
  const floorMat = new THREE.MeshStandardMaterial({
    color: 0x11141d,
    roughness: 0.15,
    metalness: 0.85
  });
  const floor = new THREE.Mesh(floorGeo, floorMat);
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;
  scene.add(floor);

  // Floor Grid Tile Lines
  const grid = new THREE.GridHelper(44, 44, 0xe2b755, 0x232733);
  grid.position.y = 0.01;
  scene.add(grid);

  // Ceiling with LED Strip Fixtures
  const ceilingGeo = new THREE.PlaneGeometry(36, 44);
  const ceilingMat = new THREE.MeshStandardMaterial({ color: 0x07080b, roughness: 0.8 });
  const ceiling = new THREE.Mesh(ceilingGeo, ceilingMat);
  ceiling.rotation.x = Math.PI / 2;
  ceiling.position.y = 8;
  scene.add(ceiling);

  // Showroom Walls (North, West, East, South)
  const wallMat = new THREE.MeshStandardMaterial({ color: 0x0d1017, roughness: 0.4 });

  // North Wall (Back)
  const northWall = new THREE.Mesh(new THREE.PlaneGeometry(36, 8), wallMat);
  northWall.position.set(0, 4, -22);
  scene.add(northWall);

  // West Wall (Left)
  const westWall = new THREE.Mesh(new THREE.PlaneGeometry(44, 8), wallMat);
  westWall.rotation.y = Math.PI / 2;
  westWall.position.set(-18, 4, 0);
  scene.add(westWall);

  // East Wall (Right)
  const eastWall = new THREE.Mesh(new THREE.PlaneGeometry(44, 8), wallMat);
  eastWall.rotation.y = -Math.PI / 2;
  eastWall.position.set(18, 4, 0);
  scene.add(eastWall);

  // South Wall (Front Entrance with Glass Door)
  const southWallL = new THREE.Mesh(new THREE.PlaneGeometry(12, 8), wallMat);
  southWallL.rotation.y = Math.PI;
  southWallL.position.set(-12, 4, 22);
  scene.add(southWallL);

  const southWallR = new THREE.Mesh(new THREE.PlaneGeometry(12, 8), wallMat);
  southWallR.rotation.y = Math.PI;
  southWallR.position.set(12, 4, 22);
  scene.add(southWallR);

  // Glass Entrance Door Frame
  const glassDoorMat = new THREE.MeshPhysicalMaterial({
    color: 0x88ccff,
    transparent: true,
    opacity: 0.25,
    roughness: 0.1,
    transmission: 0.9
  });
  const glassDoor = new THREE.Mesh(new THREE.PlaneGeometry(12, 7), glassDoorMat);
  glassDoor.position.set(0, 3.5, 22);
  scene.add(glassDoor);
}

// Mount All 10 Car Bays with Renders, Spotlight, & 3D Podium
function mountCarBays() {
  const textureLoader = new THREE.TextureLoader();
  carMeshes = [];

  carsData.forEach((car) => {
    const bayGroup = new THREE.Group();
    bayGroup.userData = { carData: car };

    // 1. Gold Illuminated Podium Base
    const podGeo = new THREE.CylinderGeometry(2.8, 3.0, 0.2, 32);
    const podMat = new THREE.MeshStandardMaterial({ color: 0x181b24, metalness: 0.9, roughness: 0.2 });
    const pod = new THREE.Mesh(podGeo, podMat);
    pod.position.y = 0.1;
    bayGroup.add(pod);

    const podRing = new THREE.Mesh(
      new THREE.TorusGeometry(2.85, 0.05, 16, 64),
      new THREE.MeshBasicMaterial({ color: 0xe2b755 })
    );
    podRing.rotation.x = Math.PI / 2;
    podRing.position.y = 0.21;
    bayGroup.add(podRing);

    // 2. High-Definition 3D Car Frame Display
    textureLoader.load(car.img, (texture) => {
      texture.encoding = THREE.sRGBEncoding;

      const frameGeo = new THREE.BoxGeometry(4.8, 2.8, 0.15);
      const frameMat = new THREE.MeshStandardMaterial({ color: 0x11141c, metalness: 0.8 });
      const frame = new THREE.Mesh(frameGeo, frameMat);
      frame.position.y = 2.2;

      const displayGeo = new THREE.PlaneGeometry(4.6, 2.6);
      const displayMat = new THREE.MeshBasicMaterial({ map: texture });
      const display = new THREE.Mesh(displayGeo, displayMat);
      display.position.set(0, 2.2, 0.08);

      bayGroup.add(frame);
      bayGroup.add(display);
    });

    // 3. Spotlight Fixture
    const spot = new THREE.SpotLight(0xfffaed, 3);
    spot.position.set(car.pos.x, 7.5, car.pos.z);
    spot.target = bayGroup;
    spot.angle = Math.PI / 5;
    spot.penumbra = 0.5;
    scene.add(spot);
    scene.add(spot.target);

    // Position & Rotate Bay Group
    bayGroup.position.set(car.pos.x, 0, car.pos.z);
    bayGroup.rotation.y = car.rotY;

    scene.add(bayGroup);
    carMeshes.push(bayGroup);
  });
}

// Navigation Handlers (D-Pad, Arrow Keys, Reset)
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

  // Touch Drag for Mobile
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

// D-Pad Button Functions
function moveCamera(dir) {
  const step = 4;
  if (dir === 'up') targetPos.z -= step;
  if (dir === 'down') targetPos.z += step;
  if (dir === 'left') targetPos.x -= step;
  if (dir === 'right') targetPos.x += step;

  // Clamp Camera inside Showroom Walls
  targetPos.x = Math.max(-14, Math.min(14, targetPos.x));
  targetPos.z = Math.max(-18, Math.min(18, targetPos.z));
  targetLookAt.set(targetPos.x, 2.0, targetPos.z - 4);
}

function resetShowroomCamera() {
  targetPos.set(0, 2.2, 16);
  targetLookAt.set(0, 2.0, 0);
  closeInspectorModal();
}

// Inspector Modal Handler
function openInspectorModal(carData) {
  activeCar = carData;

  // Focus Camera on Selected Car Bay
  targetPos.set(carData.pos.x, 2.2, carData.pos.z + 5);
  targetLookAt.set(carData.pos.x, 2.0, carData.pos.z);

  // Populate Modal UI
  document.getElementById("modal-wall-tag").textContent = carData.wall;
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

// Fullscreen Toggle (Madhukanta Feature)
function toggleShowroomFullscreen() {
  const wrapper = document.getElementById("museum-stage-wrapper");
  if (!document.fullscreenElement) {
    if (wrapper.requestFullscreen) {
      wrapper.requestFullscreen();
    } else if (wrapper.webkitRequestFullscreen) {
      wrapper.webkitRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initShowroom3D();

  // Populate Selector Pills
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

  // Close Modal Button Listener
  document.getElementById("inspector-close-btn").addEventListener("click", closeInspectorModal);

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

// WhatsApp Booking Triggers
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
