// AURA MOTORS — MADHUKANTA-GRADE 360° FREEMOVE ARCHITECTURAL SHOWROOM ENGINE (v21.0.0)

/**
 * FLEET ARCHITECTURE & VEHICLE ASSET MAPPING
 * 10 Vehicles placed across 3 Enclosed Exhibition Rooms (Ground, 1st Floor, 2nd Floor)
 */
const showroomCars = [
  // GROUND FLOOR ROOM 1 — SUVs & Off-Road (Floor Y = 0, Eye Level Y = 1.65)
  {
    id: "scorpio",
    index: 0,
    floor: "Ground Floor Room 1 — SUV Bay",
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
    pos: [-12, 0.4, -4],
    eyePos: [-12, 1.65, 1.5],
    rotY: Math.PI / 6,
    color: 0x1c222e,
    glb: "models/groundvehicle.glb",
    targetHeight: 1.85,
    stats: { speed: 82, accel: 78, power: 85, handling: 80 }
  },
  {
    id: "nexon",
    index: 1,
    floor: "Ground Floor Room 1 — EV Bay",
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
    pos: [-4, 0.4, -4],
    eyePos: [-4, 1.5, 1.5],
    rotY: Math.PI / 8,
    color: 0x00d2ff,
    glb: "models/ferrari.glb",
    targetHeight: 1.3,
    stats: { speed: 75, accel: 88, power: 76, handling: 84 }
  },
  {
    id: "thar",
    index: 2,
    floor: "Ground Floor Room 1 — 4x4 Bay",
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
    pos: [4, 0.4, -4],
    eyePos: [4, 1.65, 1.5],
    rotY: -Math.PI / 8,
    color: 0xd9381e,
    glb: "models/buggy.glb",
    targetHeight: 1.7,
    stats: { speed: 70, accel: 72, power: 82, handling: 78 }
  },
  {
    id: "bolero",
    index: 3,
    floor: "Ground Floor Room 1 — Utility Bay",
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
    pos: [12, 0.4, -4],
    eyePos: [12, 1.65, 1.5],
    rotY: -Math.PI / 6,
    color: 0x243329,
    glb: "models/truck.glb",
    targetHeight: 1.6,
    stats: { speed: 65, accel: 62, power: 74, handling: 70 }
  },

  // 1ST FLOOR ROOM 2 — Executive Luxury Sedans (Floor Y = 6.5, Eye Level Y = 8.15)
  {
    id: "merc",
    index: 4,
    floor: "1st Floor Room 2 — Bay 5",
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
    pos: [-10, 6.9, 4],
    eyePos: [-10, 8.0, 9.5],
    rotY: Math.PI / 6,
    color: 0x09152a,
    glb: "models/toycar.glb",
    targetHeight: 1.35,
    stats: { speed: 92, accel: 90, power: 94, handling: 92 }
  },
  {
    id: "bmw",
    index: 5,
    floor: "1st Floor Room 2 — Bay 6",
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
    pos: [0, 6.9, 4],
    eyePos: [0, 8.0, 9.5],
    rotY: 0,
    color: 0x730d17,
    glb: "models/toycar.glb",
    targetHeight: 1.35,
    stats: { speed: 90, accel: 88, power: 92, handling: 93 }
  },
  {
    id: "jeep",
    index: 6,
    floor: "1st Floor Room 2 — Bay 7",
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
    pos: [10, 6.9, 4],
    eyePos: [10, 8.15, 9.5],
    rotY: -Math.PI / 6,
    color: 0xd4d8e0,
    glb: "models/groundvehicle.glb",
    targetHeight: 1.75,
    stats: { speed: 80, accel: 79, power: 83, handling: 82 }
  },

  // 2ND FLOOR ROOM 3 — Supercar Deck (Floor Y = 13.0, Eye Level Y = 14.65)
  {
    id: "audi",
    index: 7,
    floor: "2nd Floor Room 3 — Bay 8",
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
    pos: [-10, 13.4, 12],
    eyePos: [-10, 14.5, 17.5],
    rotY: Math.PI / 5,
    color: 0x181a20,
    glb: "models/ferrari.glb",
    targetHeight: 1.25,
    stats: { speed: 98, accel: 99, power: 97, handling: 96 }
  },
  {
    id: "porsche",
    index: 8,
    floor: "2nd Floor Room 3 — Bay 9",
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
    pos: [0, 13.4, 12],
    eyePos: [0, 14.5, 17.5],
    rotY: 0,
    color: 0xd90429,
    glb: "models/ferrari.glb",
    targetHeight: 1.25,
    stats: { speed: 99, accel: 98, power: 96, handling: 99 }
  },
  {
    id: "fortuner",
    index: 9,
    floor: "2nd Floor Room 3 — Bay 10",
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
    pos: [10, 13.4, 12],
    eyePos: [10, 14.65, 17.5],
    rotY: -Math.PI / 5,
    color: 0xf4f5f6,
    glb: "models/groundvehicle.glb",
    targetHeight: 1.85,
    stats: { speed: 84, accel: 80, power: 88, handling: 81 }
  }
];

// Global Engine Variables
let scene, camera, renderer, controls;
let targetCameraPos = new THREE.Vector3(0, 1.7, 24);
let targetLookAt = new THREE.Vector3(0, 1.8, 0);
let currentLookAt = new THREE.Vector3(0, 1.8, 0);

let carMeshes = [];
let stairMesh1, stairMesh2;
let leftDoorGroup, rightDoorGroup;
let isPortalOpen = false;
let currentRoomId = 0; // 0 = Gate Entrance, 1 = Room 1, 2 = Room 2, 3 = Room 3
let activeInspectedIndex = 0;

function initShowroom3D() {
  const container = document.getElementById("showroom-canvas-target");
  if (!container) return;

  // 1. Scene & Fog Setup
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x100e12);
  scene.fog = new THREE.FogExp2(0x100e12, 0.008);

  // 2. Camera Setup (Human Eye Level = 1.7m)
  camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 160);
  camera.position.set(0, 1.7, 24);

  // 3. Renderer Setup
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.25;
  renderer.outputEncoding = THREE.sRGBEncoding;
  container.appendChild(renderer.domElement);

  // 4. OrbitControls Setup — FULL 360° UNCONSTRAINED DRAG & ROTATION
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.rotateSpeed = 0.75;
  controls.zoomSpeed = 0.85;
  controls.panSpeed = 0.75;
  controls.target.copy(currentLookAt);

  updateCameraConstraints();

  // 5. Madhukanta Studio Lighting Setup
  setupShowroomLighting();

  // 6. Build High-Fidelity PBR Architectural Showroom Structure
  buildPBRArchitecturalBuilding();

  // 7. Load 3D Vehicle Fleet
  loadReal3DCarFleet();

  // 8. Setup Interactive Raycasting & Door Triggering
  setupRaycasting(container);

  // Animation Loop with Smooth Camera Lerp
  function animate() {
    requestAnimationFrame(animate);

    camera.position.lerp(targetCameraPos, 0.045);
    currentLookAt.lerp(targetLookAt, 0.045);
    controls.target.copy(currentLookAt);
    controls.update();

    if (leftDoorGroup && rightDoorGroup) {
      const targetRotL = isPortalOpen ? -Math.PI / 2.2 : 0;
      const targetRotR = isPortalOpen ? Math.PI / 2.2 : 0;
      leftDoorGroup.rotation.y = THREE.MathUtils.lerp(leftDoorGroup.rotation.y, targetRotL, 0.06);
      rightDoorGroup.rotation.y = THREE.MathUtils.lerp(rightDoorGroup.rotation.y, targetRotR, 0.06);
    }

    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener("resize", () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });
}

function updateCameraConstraints() {
  if (!controls) return;
  controls.enablePan = true;
  controls.enableZoom = true;
  controls.enableRotate = true;
  controls.minDistance = 1.0;
  controls.maxDistance = 55.0;
  controls.maxPolarAngle = Math.PI / 2 + 0.05; // Full 360 rotation & view flexibility!
}

function setupShowroomLighting() {
  const ambientLight = new THREE.AmbientLight(0xfff5ea, 0.85);
  scene.add(ambientLight);

  const mainSun = new THREE.DirectionalLight(0xffe8d6, 2.2);
  mainSun.position.set(18, 32, 18);
  mainSun.castShadow = true;
  mainSun.shadow.mapSize.width = 2048;
  mainSun.shadow.mapSize.height = 2048;
  scene.add(mainSun);

  const portalPointLight = new THREE.PointLight(0xe2b755, 2.0, 32);
  portalPointLight.position.set(0, 3.8, 20);
  scene.add(portalPointLight);

  const cyanRim = new THREE.PointLight(0x00d2ff, 2.4, 55);
  cyanRim.position.set(-20, 8, -8);
  scene.add(cyanRim);

  const goldRim = new THREE.PointLight(0xe2b755, 2.4, 55);
  goldRim.position.set(20, 12, 8);
  scene.add(goldRim);

  showroomCars.forEach((car) => {
    const [px, py, pz] = car.pos;
    const spot = new THREE.SpotLight(0xfffaee, 2.5, 16, Math.PI / 6, 0.9, 1);
    spot.position.set(px, py + 5.0, pz);
    spot.target.position.set(px, py, pz);
    spot.castShadow = true;
    scene.add(spot);
    scene.add(spot.target);
  });
}

// Procedural Venetian Charcoal Velvet Wall Texture Generator
function createWallTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#161314";
  ctx.fillRect(0, 0, 512, 512);

  for (let i = 0; i < 18000; i++) {
    const x = Math.random() * 512;
    const y = Math.random() * 512;
    const alpha = Math.random() * 0.04;
    ctx.fillStyle = Math.random() > 0.5 ? `rgba(255, 255, 255, ${alpha})` : `rgba(0, 0, 0, ${alpha * 1.8})`;
    ctx.fillRect(x, y, 1.5, 1.5);
  }

  ctx.strokeStyle = "rgba(255, 255, 255, 0.018)";
  ctx.lineWidth = 1;
  for (let x = 0; x < 512; x += 6) {
    ctx.beginPath();
    ctx.moveTo(x, 0); ctx.lineTo(x, 512);
    ctx.stroke();
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(4, 2);
  return tex;
}

// Procedural Dark Walnut Wood Parquet Floor Texture Generator
function createWalnutFloorTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#1e1610";
  ctx.fillRect(0, 0, 512, 512);

  const plankH = 64;
  for (let y = 0; y < 512; y += plankH) {
    ctx.strokeStyle = "rgba(10, 6, 4, 0.75)";
    ctx.lineWidth = 2;
    ctx.strokeRect(0, y, 512, plankH);

    for (let i = 0; i < 12; i++) {
      const gy = y + Math.random() * plankH;
      ctx.strokeStyle = `rgba(45, 32, 22, ${0.15 + Math.random() * 0.22})`;
      ctx.lineWidth = 1 + Math.random() * 2;
      ctx.beginPath();
      ctx.moveTo(0, gy); ctx.lineTo(512, gy + (Math.random() - 0.5) * 4);
      ctx.stroke();
    }
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(4, 8);
  return tex;
}

// Physical Construction of 3 Distinct Architectural Floor Themes & Glass Roof
function buildPBRArchitecturalBuilding() {
  const wallTex = createWallTexture();
  const wallMat = new THREE.MeshStandardMaterial({ map: wallTex, color: 0x221a1a, roughness: 0.45 });
  const pillarMat = new THREE.MeshStandardMaterial({ color: 0x2b201a, roughness: 0.3, metalness: 0.7 });
  const goldMat = new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.95, roughness: 0.1 });

  // 1. GROUND FLOOR ROOM 1 — Dark Walnut Wood Parquet Floor (Y = 0)
  const walnutTex = createWalnutFloorTexture();
  const mahoganyMat = new THREE.MeshStandardMaterial({ map: walnutTex, roughness: 0.12, metalness: 0.88 });
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(60, 60), mahoganyMat);
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);

  // 2. 1ST FLOOR ROOM 2 — Italian Carrara White Marble Deck with Brass Trim (Y = 6.5)
  const marbleMat = new THREE.MeshStandardMaterial({ color: 0xf0ede6, roughness: 0.05, metalness: 0.85 });
  const floor1 = new THREE.Mesh(new THREE.BoxGeometry(50, 0.45, 24), marbleMat);
  floor1.position.set(0, 6.5, 4);
  floor1.receiveShadow = true;
  scene.add(floor1);

  // Gold Brass Inlay Trim for 1st Floor Edge
  const brassBorder = new THREE.Mesh(new THREE.BoxGeometry(50.4, 0.15, 0.2), goldMat);
  brassBorder.position.set(0, 6.75, 16);
  scene.add(brassBorder);

  // Glass Balustrade Guardrails on 1st Floor
  const glassMat = new THREE.MeshPhysicalMaterial({ color: 0xffffff, transparent: true, opacity: 0.35, roughness: 0.05, transmission: 0.9 });
  const rail1 = new THREE.Mesh(new THREE.BoxGeometry(50, 1.1, 0.1), glassMat);
  rail1.position.set(0, 7.3, 16);
  scene.add(rail1);

  const topHandrail1 = new THREE.Mesh(new THREE.BoxGeometry(50.2, 0.08, 0.15), goldMat);
  topHandrail1.position.set(0, 7.85, 16);
  scene.add(topHandrail1);

  // 3. 2ND FLOOR ROOM 3 — Obsidian Gloss Supercar Deck with Neon Halo Trim (Y = 13.0)
  const supercarDeckMat = new THREE.MeshStandardMaterial({ color: 0x0a0a0e, roughness: 0.03, metalness: 0.96 });
  const floor2 = new THREE.Mesh(new THREE.BoxGeometry(50, 0.45, 24), supercarDeckMat);
  floor2.position.set(0, 13.0, 12);
  floor2.receiveShadow = true;
  scene.add(floor2);

  // Neon Cyan Ribbon on Supercar Deck
  const neonMat1 = new THREE.MeshBasicMaterial({ color: 0x00d2ff });
  const neonRibbon1 = new THREE.Mesh(new THREE.BoxGeometry(50.4, 0.1, 0.15), neonMat1);
  neonRibbon1.position.set(0, 13.25, 24);
  scene.add(neonRibbon1);

  // Glass Balustrade Guardrails on 2nd Floor
  const rail2 = new THREE.Mesh(new THREE.BoxGeometry(50, 1.1, 0.1), glassMat);
  rail2.position.set(0, 13.8, 24);
  scene.add(rail2);

  const topHandrail2 = new THREE.Mesh(new THREE.BoxGeometry(50.2, 0.08, 0.15), goldMat);
  topHandrail2.position.set(0, 14.35, 24);
  scene.add(topHandrail2);

  // 4. ARCHITECTURAL GLASS SKYLIGHT ROOF CEILING (Y = 22.0)
  const glassRoofMat = new THREE.MeshPhysicalMaterial({
    color: 0x223344,
    transparent: true,
    opacity: 0.35,
    roughness: 0.1,
    transmission: 0.9,
    thickness: 0.5
  });
  const glassRoof = new THREE.Mesh(new THREE.PlaneGeometry(54, 46), glassRoofMat);
  glassRoof.rotation.x = Math.PI / 2;
  glassRoof.position.set(0, 22.0, 4);
  scene.add(glassRoof);

  // Roof Beam Support Grids
  [-15, 0, 15].forEach(x => {
    const roofBeam = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.6, 46), goldMat);
    roofBeam.position.set(x, 21.8, 4);
    scene.add(roofBeam);
  });

  // Enclosing Walls
  const backWall = new THREE.Mesh(new THREE.PlaneGeometry(54, 22), wallMat);
  backWall.position.set(0, 11, -20);
  scene.add(backWall);

  const leftWall = new THREE.Mesh(new THREE.PlaneGeometry(42, 22), wallMat);
  leftWall.rotation.y = Math.PI / 2;
  leftWall.position.set(-25, 11, 0);
  scene.add(leftWall);

  const rightWall = new THREE.Mesh(new THREE.PlaneGeometry(42, 22), wallMat);
  rightWall.rotation.y = -Math.PI / 2;
  rightWall.position.set(25, 11, 0);
  scene.add(rightWall);

  // Structural Pillars
  [[-18, -4], [18, -4], [-18, 12], [18, 12]].forEach(([px, pz]) => {
    const pil = new THREE.Mesh(new THREE.BoxGeometry(0.8, 20.0, 0.8), pillarMat);
    pil.position.set(px, 10.0, pz);
    scene.add(pil);
  });

  // Interactive 3D Staircases
  stairMesh1 = new THREE.Group();
  for (let i = 0; i < 14; i++) {
    const step = new THREE.Mesh(new THREE.BoxGeometry(4.0, 0.45, 0.48), goldMat);
    step.position.set(19, (i + 0.5) * 0.45, -5 + i * 0.48);
    stairMesh1.add(step);
  }
  scene.add(stairMesh1);

  stairMesh2 = new THREE.Group();
  for (let i = 0; i < 14; i++) {
    const step = new THREE.Mesh(new THREE.BoxGeometry(4.0, 0.45, 0.48), goldMat);
    step.position.set(-19, 6.5 + (i + 0.5) * 0.45, 3 + i * 0.48);
    stairMesh2.add(step);
  }
  scene.add(stairMesh2);

  // Castle Entrance Gate (z = 20)
  const entWallLeft = new THREE.Mesh(new THREE.BoxGeometry(20, 5.0, 0.4), wallMat);
  entWallLeft.position.set(-15, 2.5, 20);
  scene.add(entWallLeft);

  const entWallRight = new THREE.Mesh(new THREE.BoxGeometry(20, 5.0, 0.4), wallMat);
  entWallRight.position.set(15, 2.5, 20);
  scene.add(entWallRight);

  const archTop = new THREE.Mesh(new THREE.BoxGeometry(10, 1.2, 0.4), goldMat);
  archTop.position.set(0, 4.4, 20);
  scene.add(archTop);

  const doorPanelMat = new THREE.MeshStandardMaterial({ color: 0x2b201a, roughness: 0.3, metalness: 0.7 });

  leftDoorGroup = new THREE.Group();
  leftDoorGroup.position.set(-4.8, 0, 20);
  const leftDoorMesh = new THREE.Mesh(new THREE.BoxGeometry(4.7, 3.8, 0.2), doorPanelMat);
  leftDoorMesh.position.set(2.35, 1.9, 0);
  leftDoorGroup.add(leftDoorMesh);

  [-1.2, 0, 1.2].forEach(dx => {
    const f = new THREE.Mesh(new THREE.BoxGeometry(1.0, 2.8, 0.24), goldMat);
    f.position.set(2.35 + dx, 1.9, 0);
    leftDoorGroup.add(f);
  });
  scene.add(leftDoorGroup);

  rightDoorGroup = new THREE.Group();
  rightDoorGroup.position.set(4.8, 0, 20);
  const rightDoorMesh = new THREE.Mesh(new THREE.BoxGeometry(4.7, 3.8, 0.2), doorPanelMat);
  rightDoorMesh.position.set(-2.35, 1.9, 0);
  rightDoorGroup.add(rightDoorMesh);

  [-0.9, 0.9].forEach(dx => {
    const f = new THREE.Mesh(new THREE.BoxGeometry(1.2, 2.8, 0.24), goldMat);
    f.position.set(-2.35 + dx, 1.9, 0);
    rightDoorGroup.add(f);
  });
  scene.add(rightDoorGroup);
}

function loadReal3DCarFleet() {
  const gltfLoader = new THREE.GLTFLoader();

  if (THREE.DRACOLoader) {
    const dracoLoader = new THREE.DRACOLoader();
    dracoLoader.setDecoderPath('https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/libs/draco/gltf/');
    gltfLoader.setDRACOLoader(dracoLoader);
  }

  carMeshes = [];

  showroomCars.forEach((car) => {
    const carGroup = new THREE.Group();
    carGroup.userData = { carData: car };

    const padMat = new THREE.MeshStandardMaterial({ color: 0x181c28, metalness: 0.9, roughness: 0.15 });
    const pad = new THREE.Mesh(new THREE.CylinderGeometry(3.1, 3.3, 0.16, 36), padMat);
    pad.position.y = 0.08;
    carGroup.add(pad);

    const padRingMat = new THREE.MeshBasicMaterial({
      color: car.floorId === 0 ? 0x00d2ff : (car.floorId === 1 ? 0xe2b755 : 0xff0054)
    });
    const padRing = new THREE.Mesh(new THREE.TorusGeometry(3.15, 0.05, 16, 64), padRingMat);
    padRing.rotation.x = Math.PI / 2;
    padRing.position.y = 0.16;
    carGroup.add(padRing);

    const carBaseMesh = createProceduralCarMesh(car);
    carBaseMesh.position.y = 0.16;
    carGroup.add(carBaseMesh);

    gltfLoader.load(car.glb, (gltf) => {
      const model = gltf.scene;

      const box = new THREE.Box3().setFromObject(model);
      const size = box.getSize(new THREE.Vector3());

      if (size.y > 0) {
        const autoScale = car.targetHeight / size.y;
        model.scale.set(autoScale, autoScale, autoScale);
      }

      const scaledBox = new THREE.Box3().setFromObject(model);
      const scaledCenter = scaledBox.getCenter(new THREE.Vector3());

      model.position.x -= scaledCenter.x;
      model.position.z -= scaledCenter.z;
      model.position.y = 0.16 - scaledBox.min.y;

      model.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          if (child.material) {
            child.material.metalness = 0.85;
            child.material.roughness = 0.15;
            child.material.needsUpdate = true;
          }
        }
      });

      carGroup.remove(carBaseMesh);
      carGroup.add(model);
    }, undefined, (err) => {
      console.warn("GLB Model load fallback:", car.name, err);
    });

    const [px, py, pz] = car.pos;
    carGroup.position.set(px, py, pz);
    carGroup.rotation.y = car.rotY;

    scene.add(carGroup);
    carMeshes.push(carGroup);
  });
}

function createProceduralCarMesh(car) {
  const group = new THREE.Group();
  const bodyMat = new THREE.MeshStandardMaterial({ color: car.color, metalness: 0.9, roughness: 0.15 });
  const chassis = new THREE.Mesh(new THREE.BoxGeometry(2.15, 0.75, 4.35), bodyMat);
  chassis.position.y = 0.55;
  group.add(chassis);

  const cabinMat = new THREE.MeshPhysicalMaterial({ color: 0x111622, metalness: 0.9, roughness: 0.05, transparent: true, opacity: 0.85 });
  const cabin = new THREE.Mesh(new THREE.BoxGeometry(1.88, 0.65, 2.2), cabinMat);
  cabin.position.set(0, 1.15, -0.2);
  group.add(cabin);

  return group;
}

// RAYCASTING ENGINE (Handles 3D Doors, Cars, and Staircase Ascent/Descent)
function setupRaycasting(container) {
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  container.addEventListener("click", (e) => {
    const rect = container.getBoundingClientRect();
    mouse.x = ((e.clientX - rect.left) / container.clientWidth) * 2 - 1;
    mouse.y = -((e.clientY - rect.top) / container.clientHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    if (!isPortalOpen && leftDoorGroup && rightDoorGroup) {
      const doorTargets = [...leftDoorGroup.children, ...rightDoorGroup.children];
      const intersectsDoors = raycaster.intersectObjects(doorTargets, true);
      if (intersectsDoors.length > 0) {
        enterRoom1Ground();
        return;
      }
    }

    if (isPortalOpen) {
      const intersectsCars = raycaster.intersectObjects(carMeshes, true);
      if (intersectsCars.length > 0) {
        let obj = intersectsCars[0].object;
        while (obj.parent && !obj.userData.carData) {
          obj = obj.parent;
        }
        if (obj.userData.carData) {
          zoomInspectCarByIndex(obj.userData.carData.index);
          return;
        }
      }

      // Staircase 1 Interactivity: Ground Floor Room 1 <-> 1st Floor Room 2
      const intersectsStair1 = raycaster.intersectObjects(stairMesh1.children, true);
      if (intersectsStair1.length > 0) {
        if (currentRoomId === 2) enterRoom1Ground();
        else climbToRoom2();
        return;
      }

      // Staircase 2 Interactivity: 1st Floor Room 2 <-> 2nd Floor Room 3
      const intersectsStair2 = raycaster.intersectObjects(stairMesh2.children, true);
      if (intersectsStair2.length > 0) {
        if (currentRoomId === 3) climbToRoom2();
        else climbToRoom3();
        return;
      }
    }
  });
}

// MADHUKANTA UNCONSTRAINED 360° SCREEN NAVIGATION CONTROLS
function navMove(action) {
  if (!camera || !controls) return;

  const lookTarget = controls.target;
  const offset = new THREE.Vector3().subVectors(targetCameraPos, lookTarget);

  if (action === 'rotateLeft') {
    const angle = -Math.PI / 8;
    offset.applyAxisAngle(new THREE.Vector3(0, 1, 0), angle);
    targetCameraPos.copy(lookTarget).add(offset);
  } else if (action === 'rotateRight') {
    const angle = Math.PI / 8;
    offset.applyAxisAngle(new THREE.Vector3(0, 1, 0), angle);
    targetCameraPos.copy(lookTarget).add(offset);
  } else if (action === 'zoomIn') {
    if (offset.length() > 2.0) {
      offset.multiplyScalar(0.75);
      targetCameraPos.copy(lookTarget).add(offset);
    }
  } else if (action === 'zoomOut') {
    if (offset.length() < 50.0) {
      offset.multiplyScalar(1.25);
      targetCameraPos.copy(lookTarget).add(offset);
    }
  } else if (action === 'stepForward') {
    const dir = new THREE.Vector3().subVectors(lookTarget, targetCameraPos).normalize();
    dir.y = 0;
    targetCameraPos.addScaledVector(dir, 3.5);
    targetLookAt.addScaledVector(dir, 3.5);
  } else if (action === 'stepBack') {
    const dir = new THREE.Vector3().subVectors(lookTarget, targetCameraPos).normalize();
    dir.y = 0;
    targetCameraPos.addScaledVector(dir, -3.5);
    targetLookAt.addScaledVector(dir, -3.5);
  } else if (action === 'ascendStairs') {
    if (currentRoomId === 1) climbToRoom2();
    else if (currentRoomId === 2) climbToRoom3();
  } else if (action === 'descendStairs') {
    if (currentRoomId === 3) climbToRoom2();
    else if (currentRoomId === 2) enterRoom1Ground();
  }
}

function resetRoomView() {
  if (currentRoomId === 0) enterShowroomFoyer();
  else if (currentRoomId === 1) enterRoom1Ground();
  else if (currentRoomId === 2) climbToRoom2();
  else if (currentRoomId === 3) climbToRoom3();
}

function enterShowroomFoyer() {
  isPortalOpen = false;
  currentRoomId = 0;
  closeNFSInspector();

  targetCameraPos.set(0, 1.7, 24);
  targetLookAt.set(0, 1.8, 0);

  updateCameraConstraints();
  updateActiveFloorBtn(0);
}

function enterRoom1Ground() {
  isPortalOpen = true;
  currentRoomId = 1;
  closeNFSInspector();

  targetCameraPos.set(0, 1.65, 7.5);
  targetLookAt.set(0, 1.5, -4);

  updateCameraConstraints();
  updateActiveFloorBtn(1);
}

function climbToRoom2() {
  isPortalOpen = true;
  currentRoomId = 2;
  closeNFSInspector();

  targetCameraPos.set(16.0, 8.15, 10.0);
  targetLookAt.set(0, 7.8, 4.0);

  updateCameraConstraints();
  updateActiveFloorBtn(2);
}

function climbToRoom3() {
  isPortalOpen = true;
  currentRoomId = 3;
  closeNFSInspector();

  targetCameraPos.set(-16.0, 14.65, 17.0);
  targetLookAt.set(0, 14.2, 12.0);

  updateCameraConstraints();
  updateActiveFloorBtn(3);
}

function switchFloor(floorNum) {
  if (floorNum === 0) enterShowroomFoyer();
  else if (floorNum === 1) enterRoom1Ground();
  else if (floorNum === 2) climbToRoom2();
  else if (floorNum === 3) climbToRoom3();
}

function updateActiveFloorBtn(btnIdx) {
  document.querySelectorAll(".floor-btn").forEach((btn, idx) => {
    if (idx === btnIdx) btn.classList.add("active");
    else btn.classList.remove("active");
  });
}

function zoomInspectCarByIndex(index) {
  if (!isPortalOpen) enterRoom1Ground();

  activeInspectedIndex = (index + showroomCars.length) % showroomCars.length;
  const carData = showroomCars[activeInspectedIndex];

  const [ex, ey, ez] = carData.eyePos;
  const [px, py, pz] = carData.pos;
  targetCameraPos.set(ex, ey, ez);
  targetLookAt.set(px, py + 0.8, pz);

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

function nextCarInspect() {
  zoomInspectCarByIndex(activeInspectedIndex + 1);
}

function prevCarInspect() {
  zoomInspectCarByIndex(activeInspectedIndex - 1);
}

function zoomInspectCar(carData) {
  zoomInspectCarByIndex(carData.index);
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
  const car = showroomCars[activeInspectedIndex] || showroomCars[0];
  const msg = encodeURIComponent(`Hi Aura Motors, I want to schedule a physical test drive for the ${car.name} (${car.price}). Please share available slots!`);
  window.open(`https://wa.me/?text=${msg}`, '_blank');
}

function bookWhatsAppEMI() {
  const amount = document.getElementById("lbl-amount").textContent;
  const emi = document.getElementById("emi-output").textContent;
  const msg = encodeURIComponent(`Hi Aura Motors, I am interested in financing a car with Loan Amount ${amount} (Estimated EMI: ${emi}). Please share loan partners!`);
  window.open(`https://wa.me/?text=${msg}`, '_blank');
}
