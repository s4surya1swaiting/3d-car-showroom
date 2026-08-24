// AURA MOTORS 3D SHOWROOM ENGINE

const carsData = [
  {
    id: 0,
    name: "Mercedes-Benz S-Class S450",
    price: "₹ 1,35,00,000",
    year: "2022",
    km: "14,200 KM",
    owner: "1st Owner (Individual)",
    fuel: "3.0L V6 Turbo Petrol",
    trans: "9G-TRONIC Automatic",
    grade: "140/140 Points Passed",
    color: 0x111622, // Metallic Obsidian Black / Navy
    accentColor: 0xcccccc
  },
  {
    id: 1,
    name: "BMW 7 Series 730Ld M-Sport",
    price: "₹ 1,18,00,000",
    year: "2021",
    km: "22,000 KM",
    owner: "1st Owner (Corporate)",
    fuel: "3.0L Straight-6 Diesel",
    trans: "8-Speed Steptronic",
    grade: "138/140 Points Passed",
    color: 0x880e14, // Metallic Carbon Crimson
    accentColor: 0xe2b755
  },
  {
    id: 2,
    name: "Audi RS e-tron GT Quattro",
    price: "₹ 1,62,00,000",
    year: "2023",
    km: "6,500 KM",
    owner: "1st Owner (Individual)",
    fuel: "637 HP Dual Electric Motors",
    trans: "2-Speed Rear Automatic",
    grade: "140/140 Points Passed",
    color: 0x1a1c23, // Matte Daytona Gray
    accentColor: 0x00d2ff
  }
];

let activeCarIndex = 0;
let scene, camera, renderer, controls;
let carGroup, bodyMesh, wheelMeshes = [];

function init3D() {
  const container = document.getElementById("canvas-container");
  if (!container) return;

  // 1. Scene
  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x0a0b0d, 0.025);

  // 2. Camera
  camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
  camera.position.set(5.5, 2.2, 7.5);

  // 3. Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  container.appendChild(renderer.domElement);

  // 4. Controls
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.maxPolarAngle = Math.PI / 2 - 0.02; // Don't clip below floor
  controls.minDistance = 3.5;
  controls.maxDistance = 12;

  // 5. Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
  scene.add(ambientLight);

  const mainSpot = new THREE.SpotLight(0xfff5e6, 4);
  mainSpot.position.set(8, 12, 6);
  mainSpot.angle = Math.PI / 4;
  mainSpot.penumbra = 0.6;
  mainSpot.castShadow = true;
  scene.add(mainSpot);

  const rimLight = new THREE.DirectionalLight(0xe2b755, 2.5);
  rimLight.position.set(-6, 8, -6);
  scene.add(rimLight);

  // 6. Showroom Floor Grid
  const floorGeo = new THREE.PlaneGeometry(30, 30);
  const floorMat = new THREE.MeshStandardMaterial({
    color: 0x0f1117,
    roughness: 0.2,
    metalness: 0.8
  });
  const floor = new THREE.Mesh(floorGeo, floorMat);
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;
  scene.add(floor);

  const grid = new THREE.GridHelper(30, 30, 0xe2b755, 0x1f2430);
  grid.position.y = 0.01;
  scene.add(grid);

  // 7. Create Procedural 3D Car Model Group
  createCarModel();

  // Animation Loop
  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    if (carGroup) {
      carGroup.rotation.y += 0.002; // Gentle slow showcase rotation
    }
    renderer.render(scene, camera);
  }
  animate();

  // Window Resize
  window.addEventListener("resize", () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });
}

function createCarModel() {
  carGroup = new THREE.Group();

  const carData = carsData[activeCarIndex];

  // Car Body Base
  const bodyGeo = new THREE.BoxGeometry(3.6, 0.9, 1.8);
  const bodyMat = new THREE.MeshStandardMaterial({
    color: carData.color,
    roughness: 0.15,
    metalness: 0.9,
    envMapIntensity: 1.5
  });
  bodyMesh = new THREE.Mesh(bodyGeo, bodyMat);
  bodyMesh.position.y = 0.65;
  bodyMesh.castShadow = true;
  carGroup.add(bodyMesh);

  // Cabin / Roof Top
  const cabinGeo = new THREE.BoxGeometry(2.0, 0.7, 1.5);
  const cabinMat = new THREE.MeshStandardMaterial({
    color: 0x111111,
    roughness: 0.1,
    metalness: 0.95,
    transparent: true,
    opacity: 0.85
  });
  const cabinMesh = new THREE.Mesh(cabinGeo, cabinMat);
  cabinMesh.position.set(-0.2, 1.3, 0);
  cabinMesh.castShadow = true;
  carGroup.add(cabinMesh);

  // Headlights
  const lightGeo = new THREE.BoxGeometry(0.1, 0.15, 0.4);
  const lightMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const lightL = new THREE.Mesh(lightGeo, lightMat);
  lightL.position.set(1.76, 0.65, 0.6);
  const lightR = lightL.clone();
  lightR.position.z = -0.6;
  carGroup.add(lightL, lightR);

  // Wheels
  const wheelGeo = new THREE.CylinderGeometry(0.38, 0.38, 0.25, 32);
  const wheelMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.5 });
  const rimMat = new THREE.MeshStandardMaterial({ color: carData.accentColor, metalness: 0.9, roughness: 0.2 });

  const wheelPositions = [
    [1.1, 0.38, 0.95],
    [1.1, 0.38, -0.95],
    [-1.1, 0.38, 0.95],
    [-1.1, 0.38, -0.95]
  ];

  wheelMeshes = [];
  wheelPositions.forEach(pos => {
    const wGroup = new THREE.Group();
    const tire = new THREE.Mesh(wheelGeo, wheelMat);
    tire.rotation.x = Math.PI / 2;
    tire.castShadow = true;
    wGroup.add(tire);

    const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 0.26, 8), rimMat);
    rim.rotation.x = Math.PI / 2;
    wGroup.add(rim);

    wGroup.position.set(...pos);
    carGroup.add(wGroup);
    wheelMeshes.push(wGroup);
  });

  scene.add(carGroup);
}

function switchCar(index) {
  activeCarIndex = index;
  const carData = carsData[index];

  // Update UI Pills
  document.querySelectorAll(".pill-btn").forEach((btn, i) => {
    btn.classList.toggle("active", i === index);
  });

  // Update Overlay Specs
  document.getElementById("quick-car-name").textContent = carData.name;
  document.getElementById("quick-car-price").innerHTML = `${carData.price} <span>• ${carData.year} Model</span>`;
  document.getElementById("spec-km").textContent = carData.km;
  document.getElementById("spec-owner").textContent = carData.owner;
  document.getElementById("spec-fuel").textContent = carData.fuel;

  // Re-color 3D Model
  if (bodyMesh) {
    bodyMesh.material.color.setHex(carData.color);
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

  // Modal Listeners
  const backdrop = document.getElementById("modal-backdrop");
  document.getElementById("btn-open-modal").addEventListener("click", () => {
    updateModalData();
    backdrop.classList.add("active");
  });
  document.getElementById("btn-modal-close").addEventListener("click", () => {
    backdrop.classList.remove("active");
  });

  // Car Pill Listeners
  document.querySelectorAll(".pill-btn").forEach((btn, i) => {
    btn.addEventListener("click", () => switchCar(i));
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
