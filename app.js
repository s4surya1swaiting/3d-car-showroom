// AURA MOTORS — ALL-OBSIDIAN BLACK LUXURY ARCHITECTURAL SHOWROOM ENGINE (v23.0.0)
// Architectural 3-Story Glass Atrium with Real-Time PBR Paint Customizer & Studio Lighting

/**
 * FLEET ARCHITECTURE & VEHICLE ASSET MAPPING
 * 6 Authentic Flagship Vehicles mapped 1:1 to Physical 3D GLB Assets
 */
const showroomCars = [
  // GROUND FLOOR ROOM 1 — Extreme Terrain & Tactical Engineering (Floor Y = 0)
  {
    id: "apex_raider",
    index: 0,
    floor: "Ground Floor Room 1 — Tactical Heavy Bay",
    floorId: 0,
    name: "Apex Raider Tactical Cyber-SUV",
    tagline: "Tri-Motor Electric AWD • Ballistic Armor Concept",
    price: "₹ 88,00,000",
    year: "2024",
    km: "1,200 KM",
    fuel: "800 BHP Tri-Motor Electric AWD",
    trans: "Direct-Drive Dual-Range AWD",
    owner: "DevNx R&D Prototype",
    grade: "140/140 Certified",
    img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop",
    pos: [0, 0.4, -6],
    cameraOffset: [-3.8, 1.4, 4.6],
    rotY: 0,
    color: 0x1a1e24,
    glb: "models/groundvehicle.glb",
    targetHeight: 1.85,
    stats: { speed: 85, accel: 89, power: 94, handling: 82 }
  },
  {
    id: "dune_stormer",
    index: 1,
    floor: "Ground Floor Room 1 — Dakar Rally Bay",
    floorId: 0,
    name: "Baja Dune Stormer 4x4 Trophy Buggy",
    tagline: "Chromoly Tubular Spaceframe • Long-Travel Fox Suspension",
    price: "₹ 42,00,000",
    year: "2023",
    km: "3,800 KM",
    fuel: "2.5L Turbo Charged Boxer (450 BHP)",
    trans: "6-Speed Sequential Manual",
    owner: "1st Owner (Motorsport Spec)",
    grade: "139/140 Certified",
    img: "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?q=80&w=800&auto=format&fit=crop",
    pos: [-12, 0.4, -4],
    cameraOffset: [-3.6, 1.4, 4.4],
    rotY: Math.PI / 6,
    color: 0xd9381e,
    glb: "models/buggy.glb",
    targetHeight: 1.70,
    stats: { speed: 78, accel: 92, power: 84, handling: 95 }
  },
  {
    id: "titan_hauler",
    index: 2,
    floor: "Ground Floor Room 1 — Cyber Utility Bay",
    floorId: 0,
    name: "Titan Hauler Autonomous Electric Transport",
    tagline: "Heavy Cybernetic Freight Hauler • Solid-State Megawatt Power",
    price: "₹ 75,00,000",
    year: "2024",
    km: "900 KM",
    fuel: "Quad-Motor Electric (1200 Nm)",
    trans: "Single-Speed Heavy Duty",
    owner: "1st Owner (Commercial Fleet)",
    grade: "140/140 Certified",
    img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800&auto=format&fit=crop",
    pos: [12, 0.4, -4],
    cameraOffset: [-4.2, 1.8, 5.0],
    rotY: -Math.PI / 6,
    color: 0x22262e,
    glb: "models/truck.glb",
    targetHeight: 2.10,
    stats: { speed: 68, accel: 64, power: 98, handling: 70 }
  },

  // 1ST FLOOR ROOM 2 — Grand Heritage & Gran Turismo Salon (Floor Y = 6.5)
  {
    id: "heritage_classic",
    index: 3,
    floor: "1st Floor Room 2 — Royal Collector Salon",
    floorId: 1,
    name: "1967 Grand Heritage Classic Coupe",
    tagline: "Hand-Crafted Coachwork • Concours d'Elegance 100-Point Restoration",
    price: "₹ 1,85,00,000",
    year: "1967",
    km: "14,200 KM",
    fuel: "4.2L Naturally Aspirated Inline-6",
    trans: "4-Speed Synchromesh Manual",
    owner: "Private Royal Collector",
    grade: "140/140 Certified",
    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop",
    pos: [-9, 6.9, 4],
    cameraOffset: [-3.6, 1.4, 4.4],
    rotY: Math.PI / 6,
    color: 0x0d3b2e,
    glb: "models/classic_car.glb",
    targetHeight: 1.35,
    stats: { speed: 76, accel: 72, power: 78, handling: 82 }
  },
  {
    id: "aura_gt",
    index: 4,
    floor: "1st Floor Room 2 — Gran Turismo Salon",
    floorId: 1,
    name: "Aura GT Velocity Trackday Coupe",
    tagline: "Twin-Turbo Aerodynamic Coupe • Pure Driver's Track Weapon",
    price: "₹ 1,35,00,000",
    year: "2023",
    km: "6,800 KM",
    fuel: "3.0L Twin-Turbo V6 (520 BHP)",
    trans: "8-Speed Paddle-Shift Dual-Clutch",
    owner: "1st Owner",
    grade: "140/140 Certified",
    img: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=800&auto=format&fit=crop",
    pos: [9, 6.9, 4],
    cameraOffset: [-3.6, 1.4, 4.4],
    rotY: -Math.PI / 6,
    color: 0x092347,
    glb: "models/toycar.glb",
    targetHeight: 1.35,
    stats: { speed: 94, accel: 93, power: 91, handling: 96 }
  },

  // 2ND FLOOR ROOM 3 — The Crown Exotic Supercar Deck (Floor Y = 13.0)
  {
    id: "ferrari_f8",
    index: 5,
    floor: "2nd Floor Room 3 — Exotic Supercar Deck",
    floorId: 2,
    name: "Ferrari F8 Tributo V8 Bi-Turbo",
    tagline: "710 BHP Twin-Turbo 3.9L V8 • 0-100 in 2.9s • Italian Purebred Exotic",
    price: "₹ 4,02,00,000",
    year: "2023",
    km: "3,200 KM",
    fuel: "3.9L Twin-Turbo V8 (710 BHP)",
    trans: "7-Speed F1 Dual-Clutch",
    owner: "1st Owner (Certified Exotic)",
    grade: "140/140 Certified",
    img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=800&auto=format&fit=crop",
    pos: [0, 13.4, 12],
    cameraOffset: [-3.8, 1.4, 4.4],
    rotY: 0,
    color: 0xd90429,
    glb: "models/ferrari.glb",
    targetHeight: 1.25,
    stats: { speed: 99, accel: 99, power: 98, handling: 99 }
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

// VFX State
let isHeadlightsOn = false;
let isTurntableRotating = false;
let neonRings = [];

function initShowroom3D() {
  const container = document.getElementById("showroom-canvas-target");
  if (!container) return;

  // 1. Scene & Fog Setup — OBSIDIAN BLACK LUXURY AESTHETIC
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0a090c);
  scene.fog = new THREE.FogExp2(0x0a090c, 0.007);

  // 2. Camera Setup (Human Eye Level = 1.7m)
  camera = new THREE.PerspectiveCamera(58, container.clientWidth / container.clientHeight, 0.1, 180);
  camera.position.set(0, 1.7, 24);

  // 3. High-Performance PBR Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.35;
  renderer.outputEncoding = THREE.sRGBEncoding;
  container.appendChild(renderer.domElement);

  // 4. OrbitControls Setup — Smooth 360° Unconstrained Freedom
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.rotateSpeed = 0.75;
  controls.zoomSpeed = 0.85;
  controls.panSpeed = 0.75;
  controls.target.copy(currentLookAt);

  updateCameraConstraints();

  // 5. Studio Automotive Lighting & Linear Ceiling Tubes
  setupShowroomLighting();

  // 6. Build High-Fidelity All-Obsidian Architectural Structure
  buildPBRArchitecturalBuilding();

  // 7. Load 3D Vehicle Fleet with Dynamic Materials & Headlights
  loadReal3DCarFleet();

  // 8. Setup Interactive Raycasting & Door Triggering
  setupRaycasting(container);

  // Animation Loop with Smooth Camera Lerp & Turntable VFX
  function animate() {
    requestAnimationFrame(animate);

    camera.position.lerp(targetCameraPos, 0.05);
    currentLookAt.lerp(targetLookAt, 0.05);
    controls.target.copy(currentLookAt);
    controls.update();

    // Smooth Entrance Door Opening Animation
    if (leftDoorGroup && rightDoorGroup) {
      const targetRotL = isPortalOpen ? -Math.PI / 2.2 : 0;
      const targetRotR = isPortalOpen ? Math.PI / 2.2 : 0;
      leftDoorGroup.rotation.y = THREE.MathUtils.lerp(leftDoorGroup.rotation.y, targetRotL, 0.06);
      rightDoorGroup.rotation.y = THREE.MathUtils.lerp(rightDoorGroup.rotation.y, targetRotR, 0.06);
    }

    // Sinusoidal Breathing Pulse on Pedestal Neon Rings
    const time = Date.now() * 0.003;
    const pulseOpacity = 0.65 + Math.sin(time) * 0.35;
    neonRings.forEach(ring => {
      if (ring.material) ring.material.opacity = pulseOpacity;
    });

    // Turntable 360° Rotation VFX for Active Inspected Vehicle
    if (isTurntableRotating && carMeshes[activeInspectedIndex]) {
      carMeshes[activeInspectedIndex].rotation.y += 0.006;
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
  controls.maxDistance = 60.0;
  controls.maxPolarAngle = Math.PI / 2 + 0.05;
}

function setupShowroomLighting() {
  // Ambient Soft Fill
  const ambientLight = new THREE.AmbientLight(0xfff5ea, 0.95);
  scene.add(ambientLight);

  // Main Overhead Studio Sun
  const mainSun = new THREE.DirectionalLight(0xfffaee, 2.4);
  mainSun.position.set(15, 30, 15);
  mainSun.castShadow = true;
  mainSun.shadow.mapSize.width = 2048;
  mainSun.shadow.mapSize.height = 2048;
  scene.add(mainSun);

  // Entrance Warm Gold Welcome Light
  const portalPointLight = new THREE.PointLight(0xe2b755, 2.2, 35);
  portalPointLight.position.set(0, 3.8, 20);
  scene.add(portalPointLight);

  // Cool Cyan Architectural Rim Light (Left)
  const cyanRim = new THREE.PointLight(0x00d2ff, 2.2, 55);
  cyanRim.position.set(-22, 10, -6);
  scene.add(cyanRim);

  // Royal Gold Accent Rim Light (Right)
  const goldRim = new THREE.PointLight(0xe2b755, 2.4, 55);
  goldRim.position.set(22, 14, 8);
  scene.add(goldRim);

  // Individual Dramatic Spotlights on Each Vehicle Bay
  showroomCars.forEach((car) => {
    const [px, py, pz] = car.pos;
    const spot = new THREE.SpotLight(0xfffaee, 2.8, 18, Math.PI / 5.5, 0.85, 1);
    spot.position.set(px, py + 5.2, pz);
    spot.target.position.set(px, py, pz);
    spot.castShadow = true;
    scene.add(spot);
    scene.add(spot.target);
  });
}

// Procedural Obsidian Black Velvet Wall Texture Generator
function createWallTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#110f13";
  ctx.fillRect(0, 0, 512, 512);

  for (let i = 0; i < 20000; i++) {
    const x = Math.random() * 512;
    const y = Math.random() * 512;
    const alpha = Math.random() * 0.04;
    ctx.fillStyle = Math.random() > 0.5 ? `rgba(255, 255, 255, ${alpha})` : `rgba(0, 0, 0, ${alpha * 2.0})`;
    ctx.fillRect(x, y, 1.5, 1.5);
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(4, 2);
  return tex;
}

// Procedural Obsidian Mirror Tile Floor Texture Generator
function createObsidianFloorTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#09080c";
  ctx.fillRect(0, 0, 512, 512);

  // Subtle luxury floor grid lines
  ctx.strokeStyle = "rgba(226, 183, 85, 0.08)";
  ctx.lineWidth = 1.5;
  for (let x = 0; x < 512; x += 128) {
    ctx.beginPath();
    ctx.moveTo(x, 0); ctx.lineTo(x, 512);
    ctx.stroke();
  }
  for (let y = 0; y < 512; y += 128) {
    ctx.beginPath();
    ctx.moveTo(0, y); ctx.lineTo(512, y);
    ctx.stroke();
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(6, 6);
  return tex;
}

// Physical Construction of All-Obsidian Black Architectural Building
function buildPBRArchitecturalBuilding() {
  const wallTex = createWallTexture();
  const wallMat = new THREE.MeshStandardMaterial({ map: wallTex, color: 0x18151a, roughness: 0.45 });
  const pillarMat = new THREE.MeshStandardMaterial({ color: 0x1c1920, roughness: 0.25, metalness: 0.85 });
  const goldMat = new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.95, roughness: 0.12 });

  // 1. GROUND FLOOR ROOM 1 — Obsidian Mirror Black Floor (Y = 0)
  const obsidianTex = createObsidianFloorTexture();
  const obsidianGroundMat = new THREE.MeshStandardMaterial({
    map: obsidianTex,
    color: 0x09080c,
    roughness: 0.06,
    metalness: 0.94
  });
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(64, 64), obsidianGroundMat);
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);

  // 2. 1ST FLOOR ROOM 2 — Dark Obsidian Marble Deck with Brass Trim (Y = 6.5)
  const darkMarbleMat = new THREE.MeshStandardMaterial({ color: 0x100e14, roughness: 0.06, metalness: 0.92 });
  const floor1 = new THREE.Mesh(new THREE.BoxGeometry(50, 0.45, 24), darkMarbleMat);
  floor1.position.set(0, 6.5, 4);
  floor1.receiveShadow = true;
  scene.add(floor1);

  // Gold Brass Trim for 1st Floor Edge
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

  // 3. 2ND FLOOR ROOM 3 — Obsidian Hexagonal Gloss Supercar Deck (Y = 13.0)
  const supercarDeckMat = new THREE.MeshStandardMaterial({ color: 0x07060a, roughness: 0.04, metalness: 0.96 });
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

  // 4. ARCHITECTURAL OBSIDIAN GLASS SKYLIGHT CEILING (Y = 22.0)
  const glassRoofMat = new THREE.MeshPhysicalMaterial({
    color: 0x0a0c10,
    transparent: true,
    opacity: 0.4,
    roughness: 0.08,
    transmission: 0.88,
    thickness: 0.5
  });
  const glassRoof = new THREE.Mesh(new THREE.PlaneGeometry(56, 48), glassRoofMat);
  glassRoof.rotation.x = Math.PI / 2;
  glassRoof.position.set(0, 22.0, 4);
  scene.add(glassRoof);

  // Roof Beam Support Grids
  [-15, 0, 15].forEach(x => {
    const roofBeam = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.6, 48), goldMat);
    roofBeam.position.set(x, 21.8, 4);
    scene.add(roofBeam);
  });

  // 5. STUDIO AUTOMOTIVE OVERHEAD LINEAR LIGHTBARS (High-End Automotive Studio Reflections)
  const lightBarMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
  [-10, -3.5, 3.5, 10].forEach(x => {
    const tube = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.1, 42), lightBarMat);
    tube.position.set(x, 21.75, 4);
    scene.add(tube);
  });

  // Enclosing Obsidian Walls
  const backWall = new THREE.Mesh(new THREE.PlaneGeometry(56, 22), wallMat);
  backWall.position.set(0, 11, -20);
  scene.add(backWall);

  const leftWall = new THREE.Mesh(new THREE.PlaneGeometry(44, 22), wallMat);
  leftWall.rotation.y = Math.PI / 2;
  leftWall.position.set(-26, 11, 0);
  scene.add(leftWall);

  const rightWall = new THREE.Mesh(new THREE.PlaneGeometry(44, 22), wallMat);
  rightWall.rotation.y = -Math.PI / 2;
  rightWall.position.set(26, 11, 0);
  scene.add(rightWall);

  // Structural Support Pillars
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

  const doorPanelMat = new THREE.MeshStandardMaterial({ color: 0x1b181e, roughness: 0.3, metalness: 0.8 });

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
  neonRings = [];

  showroomCars.forEach((car) => {
    const carGroup = new THREE.Group();
    carGroup.userData = { carData: car, bodyMeshes: [], headlights: [] };

    // Exhibition Turntable Platform
    const padMat = new THREE.MeshStandardMaterial({ color: 0x121016, metalness: 0.92, roughness: 0.12 });
    const pad = new THREE.Mesh(new THREE.CylinderGeometry(3.2, 3.4, 0.16, 40), padMat);
    pad.position.y = 0.08;
    carGroup.add(pad);

    // Beveled Brass Gold Rim on Platform
    const goldMat = new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.95, roughness: 0.15 });
    const padBrass = new THREE.Mesh(new THREE.TorusGeometry(3.3, 0.04, 16, 64), goldMat);
    padBrass.rotation.x = Math.PI / 2;
    padBrass.position.y = 0.16;
    carGroup.add(padBrass);

    // Dynamic Pulsing Neon Ring
    const ringColor = car.floorId === 0 ? 0x00d2ff : (car.floorId === 1 ? 0xe2b755 : 0xff0054);
    const padRingMat = new THREE.MeshBasicMaterial({
      color: ringColor,
      transparent: true,
      opacity: 0.8
    });
    const padRing = new THREE.Mesh(new THREE.TorusGeometry(3.38, 0.05, 16, 64), padRingMat);
    padRing.rotation.x = Math.PI / 2;
    padRing.position.y = 0.17;
    carGroup.add(padRing);
    neonRings.push(padRing);

    // Procedural Fallback Mesh while GLB loads
    const carBaseMesh = createProceduralCarMesh(car);
    carBaseMesh.position.y = 0.16;
    carGroup.add(carBaseMesh);

    // Dual Headlight VFX Spotlights (projecting forward)
    const hlLeft = new THREE.SpotLight(0xffffff, 0, 16, Math.PI / 7, 0.6, 1);
    hlLeft.position.set(-0.7, 0.65, 1.8);
    hlLeft.target.position.set(-0.7, 0.1, 8.0);
    carGroup.add(hlLeft);
    carGroup.add(hlLeft.target);

    const hlRight = new THREE.SpotLight(0xffffff, 0, 16, Math.PI / 7, 0.6, 1);
    hlRight.position.set(0.7, 0.65, 1.8);
    hlRight.target.position.set(0.7, 0.1, 8.0);
    carGroup.add(hlRight);
    carGroup.add(hlRight.target);

    carGroup.userData.headlights = [hlLeft, hlRight];

    // Load Physical 3D Model
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

      // Identify & Tag Paintable Body Meshes + Enhance PBR Materials
      model.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;

          if (child.material) {
            // Clone material so color modifications are isolated to this specific car
            child.material = child.material.clone();
            const matName = child.material.name || "";

            // Tag paintable body components
            const isBody = matName.includes("Body") ||
                           matName.includes("ToyCar") ||
                           matName.includes("CougarOne") ||
                           matName.includes("truck") ||
                           matName.includes("Material_27") ||
                           matName === "Leather_red";

            if (isBody) {
              child.userData.isCarBody = true;
              child.material.metalness = 0.88;
              child.material.roughness = 0.14;
              child.material.color.setHex(car.color);
              carGroup.userData.bodyMeshes.push(child);
            } else {
              child.material.metalness = 0.85;
              child.material.roughness = 0.2;
            }
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

// RAYCASTING ENGINE (Handles 3D Doors, Cars, and Staircases)
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

      // Staircase 1: Ground Floor <-> 1st Floor
      const intersectsStair1 = raycaster.intersectObjects(stairMesh1.children, true);
      if (intersectsStair1.length > 0) {
        if (currentRoomId === 2) enterRoom1Ground();
        else climbToRoom2();
        return;
      }

      // Staircase 2: 1st Floor <-> 2nd Floor
      const intersectsStair2 = raycaster.intersectObjects(stairMesh2.children, true);
      if (intersectsStair2.length > 0) {
        if (currentRoomId === 3) climbToRoom2();
        else climbToRoom3();
        return;
      }
    }
  });
}

// SCREEN NAVIGATION CONTROLS
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
    if (offset.length() < 55.0) {
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

  targetCameraPos.set(0, 1.65, 8.0);
  targetLookAt.set(0, 1.5, -4.5);

  updateCameraConstraints();
  updateActiveFloorBtn(1);
}

function climbToRoom2() {
  isPortalOpen = true;
  currentRoomId = 2;
  closeNFSInspector();

  targetCameraPos.set(14.0, 8.15, 11.0);
  targetLookAt.set(0, 7.8, 4.0);

  updateCameraConstraints();
  updateActiveFloorBtn(2);
}

function climbToRoom3() {
  isPortalOpen = true;
  currentRoomId = 3;
  closeNFSInspector();

  targetCameraPos.set(-14.0, 14.65, 18.0);
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

// ZOOM INSPECTION & PERFORMANCE METERS
function zoomInspectCarByIndex(index) {
  if (!isPortalOpen) isPortalOpen = true;

  activeInspectedIndex = (index + showroomCars.length) % showroomCars.length;
  const carData = showroomCars[activeInspectedIndex];

  // Auto-sync current floor indicator
  currentRoomId = carData.floorId + 1;
  updateActiveFloorBtn(currentRoomId);

  // Set camera to an optimal 3/4 heroic beauty perspective
  const [px, py, pz] = carData.pos;
  const [ox, oy, oz] = carData.cameraOffset || [-3.8, 1.4, 4.4];
  targetCameraPos.set(px + ox, py + oy, pz + oz);
  targetLookAt.set(px, py + 0.6, pz);

  // Update NFS Inspection Modal Header & Details
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

  // Sync Paint Color Swatches with Active Vehicle Color
  syncPaintSwatches(carData.color);

  // Sync Headlight and Turntable Buttons
  updateVFXButtonsUI();

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
  isTurntableRotating = false;
  updateVFXButtonsUI();
}

// REAL-TIME BESPOKE PAINT CUSTOMIZER
function setCarColor(hexColor, colorName, btnEl) {
  const carGroup = carMeshes[activeInspectedIndex];
  if (!carGroup) return;

  const carData = showroomCars[activeInspectedIndex];
  carData.color = hexColor;

  // Recolor all tagged body meshes for this vehicle
  if (carGroup.userData.bodyMeshes && carGroup.userData.bodyMeshes.length > 0) {
    carGroup.userData.bodyMeshes.forEach(mesh => {
      mesh.material.color.setHex(hexColor);
      mesh.material.needsUpdate = true;
    });
  }

  // Update tooltip and active class
  document.getElementById("nfs-active-color-name").textContent = colorName;
  document.querySelectorAll(".paint-swatch").forEach(btn => btn.classList.remove("active"));
  if (btnEl) btnEl.classList.add("active");
}

function syncPaintSwatches(activeHex) {
  const swatches = document.querySelectorAll(".paint-swatch");
  swatches.forEach(btn => {
    btn.classList.remove("active");
  });
  // Default to first swatch if not matched
  if (swatches[0]) swatches[0].classList.add("active");
}

// TOGGLE HEADLIGHTS VFX
function toggleHeadlights() {
  isHeadlightsOn = !isHeadlightsOn;
  const carGroup = carMeshes[activeInspectedIndex];
  if (carGroup && carGroup.userData.headlights) {
    carGroup.userData.headlights.forEach(hl => {
      hl.intensity = isHeadlightsOn ? 4.5 : 0;
    });
  }
  updateVFXButtonsUI();
}

// TOGGLE 360° TURNTABLE ROTATION
function toggleTurntable() {
  isTurntableRotating = !isTurntableRotating;
  updateVFXButtonsUI();
}

function updateVFXButtonsUI() {
  const btnHl = document.getElementById("btn-toggle-headlights");
  const lblHl = document.getElementById("lbl-headlights");
  if (btnHl && lblHl) {
    lblHl.textContent = isHeadlightsOn ? "ON" : "OFF";
    if (isHeadlightsOn) btnHl.classList.add("active");
    else btnHl.classList.remove("active");
  }

  const btnTt = document.getElementById("btn-toggle-turntable");
  const lblTt = document.getElementById("lbl-turntable");
  if (btnTt && lblTt) {
    lblTt.textContent = isTurntableRotating ? "ON" : "OFF";
    if (isTurntableRotating) btnTt.classList.add("active");
    else btnTt.classList.remove("active");
  }
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

// FLEET INVENTORY FILTER
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

    if (budgetVal === "under50") matchBudget = (cPrice < 5000000);
    if (budgetVal === "50to150") matchBudget = (cPrice >= 5000000 && cPrice <= 15000000);
    if (budgetVal === "above150") matchBudget = (cPrice > 15000000);

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

  const msg = encodeURIComponent(`Hi Aura Motors, my name is ${name} (${phone}). I would like to schedule a doorstep test drive for the ${car} in ${city}. Please confirm my appointment!`);
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
      btn.textContent = car.name.split(" ")[0] + " " + (car.name.split(" ")[1] || "");
      btn.onclick = () => zoomInspectCar(car);
      pillsContainer.appendChild(btn);
    });
  }

  const rngAmount = document.getElementById("rng-amount");
  const rngRate = document.getElementById("rng-rate");
  const rngTenure = document.getElementById("rng-tenure");

  function calcEMI() {
    if (!rngAmount || !rngRate || !rngTenure) return;
    const P = parseFloat(rngAmount.value);
    const r = parseFloat(rngRate.value) / 12 / 100;
    const n = parseFloat(rngTenure.value) * 12;

    document.getElementById("lbl-amount").textContent = `₹ ${(P / 100000).toFixed(1)} Lakhs`;
    document.getElementById("lbl-rate").textContent = `${rngRate.value}%`;
    document.getElementById("lbl-tenure").textContent = `${rngTenure.value} Years`;

    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    document.getElementById("emi-output").textContent = `₹ ${Math.round(emi).toLocaleString('en-IN')} / mo`;
  }

  if (rngAmount && rngRate && rngTenure) {
    [rngAmount, rngRate, rngTenure].forEach(el => el.addEventListener("input", calcEMI));
    calcEMI();
  }
});

function bookWhatsAppDrive() {
  const car = showroomCars[activeInspectedIndex] || showroomCars[0];
  const msg = encodeURIComponent(`Hi Aura Motors, I want to schedule a physical test drive for the ${car.name} (${car.price}). Please share available slots!`);
  window.open(`https://wa.me/?text=${msg}`, '_blank');
}

function bookWhatsAppEMI() {
  const amount = document.getElementById("lbl-amount").textContent;
  const emi = document.getElementById("emi-output").textContent;
  const msg = encodeURIComponent(`Hi Aura Motors, I am interested in financing a vehicle with Loan Amount ${amount} (Estimated EMI: ${emi}). Please share loan partners!`);
  window.open(`https://wa.me/?text=${msg}`, '_blank');
}
