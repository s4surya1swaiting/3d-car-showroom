// AURA MOTORS — 1ST-PERSON HUMAN EYE-LEVEL PORTAL SHOWROOM ENGINE (v14.0.0)

/**
 * FLEET ARCHITECTURE & 3D ASSET MAPPING
 * 10 Dedicated Vehicles placed across 3 Architectural Floors
 */
const showroomCars = [
  // GROUND FLOOR — SUVs & Off-Road (y = 0.4, Eye Level y = 1.65)
  {
    id: "scorpio",
    index: 0,
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
    pos: [-12, 0.4, -2],
    eyePos: [-12, 1.65, 3.5],
    rotY: Math.PI / 6,
    color: 0x1c222e,
    glb: "models/groundvehicle.glb",
    targetHeight: 1.85,
    stats: { speed: 82, accel: 78, power: 85, handling: 80 }
  },
  {
    id: "nexon",
    index: 1,
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
    pos: [-4, 0.4, -2],
    eyePos: [-4, 1.5, 3.5],
    rotY: Math.PI / 8,
    color: 0x00d2ff,
    glb: "models/ferrari.glb",
    targetHeight: 1.3,
    stats: { speed: 75, accel: 88, power: 76, handling: 84 }
  },
  {
    id: "thar",
    index: 2,
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
    pos: [4, 0.4, -2],
    eyePos: [4, 1.65, 3.5],
    rotY: -Math.PI / 8,
    color: 0xd9381e,
    glb: "models/buggy.glb",
    targetHeight: 1.7,
    stats: { speed: 70, accel: 72, power: 82, handling: 78 }
  },
  {
    id: "bolero",
    index: 3,
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
    pos: [12, 0.4, -2],
    eyePos: [12, 1.65, 3.5],
    rotY: -Math.PI / 6,
    color: 0x243329,
    glb: "models/truck.glb",
    targetHeight: 1.6,
    stats: { speed: 65, accel: 62, power: 74, handling: 70 }
  },

  // 1ST FLOOR — Executive Luxury Sedans (y = 6.0, Eye Level y = 7.65)
  {
    id: "merc",
    index: 4,
    floor: "1st Floor Mezzanine — Bay 5",
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
    pos: [-10, 6.0, 6],
    eyePos: [-10, 7.5, 11.5],
    rotY: Math.PI / 6,
    color: 0x09152a,
    glb: "models/toycar.glb",
    targetHeight: 1.35,
    stats: { speed: 92, accel: 90, power: 94, handling: 92 }
  },
  {
    id: "bmw",
    index: 5,
    floor: "1st Floor Mezzanine — Bay 6",
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
    pos: [0, 6.0, 6],
    eyePos: [0, 7.5, 11.5],
    rotY: 0,
    color: 0x730d17,
    glb: "models/toycar.glb",
    targetHeight: 1.35,
    stats: { speed: 90, accel: 88, power: 92, handling: 93 }
  },
  {
    id: "jeep",
    index: 6,
    floor: "1st Floor Mezzanine — Bay 7",
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
    pos: [10, 6.0, 6],
    eyePos: [10, 7.65, 11.5],
    rotY: -Math.PI / 6,
    color: 0xd4d8e0,
    glb: "models/groundvehicle.glb",
    targetHeight: 1.75,
    stats: { speed: 80, accel: 79, power: 83, handling: 82 }
  },

  // 2ND FLOOR — Supercar Deck (y = 12.0, Eye Level y = 13.65)
  {
    id: "audi",
    index: 7,
    floor: "2nd Floor Supercar Deck — Bay 8",
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
    pos: [-10, 12.0, 14],
    eyePos: [-10, 13.4, 19.5],
    rotY: Math.PI / 5,
    color: 0x181a20,
    glb: "models/ferrari.glb",
    targetHeight: 1.25,
    stats: { speed: 98, accel: 99, power: 97, handling: 96 }
  },
  {
    id: "porsche",
    index: 8,
    floor: "2nd Floor Supercar Deck — Bay 9",
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
    pos: [0, 12.0, 14],
    eyePos: [0, 13.4, 19.5],
    rotY: 0,
    color: 0xd90429,
    glb: "models/ferrari.glb",
    targetHeight: 1.25,
    stats: { speed: 99, accel: 98, power: 96, handling: 99 }
  },
  {
    id: "fortuner",
    index: 9,
    floor: "2nd Floor Supercar Deck — Bay 10",
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
    pos: [10, 12.0, 14],
    eyePos: [10, 13.65, 19.5],
    rotY: -Math.PI / 5,
    color: 0xf4f5f6,
    glb: "models/groundvehicle.glb",
    targetHeight: 1.85,
    stats: { speed: 84, accel: 80, power: 88, handling: 81 }
  }
];

// Global Engine Variables (First-Person Human Eye-Level Physics)
let scene, camera, renderer, controls;
// Default Eye-Level Camera standing in front of Grand Entrance Foyer Portal (Human Height y = 1.7)
let targetCameraPos = new THREE.Vector3(0, 1.7, 24);
let targetLookAt = new THREE.Vector3(0, 2.0, 0);
let currentLookAt = new THREE.Vector3(0, 2.0, 0);
let carMeshes = [];
let portalHotspots = [];
let activeInspectedIndex = 0;

function initShowroom3D() {
  const container = document.getElementById("showroom-canvas-target");
  if (!container) return;

  // 1. Scene Setup
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x06080e);
  scene.fog = new THREE.FogExp2(0x06080e, 0.008);

  // 2. Camera Setup (First Person Human Eye-Level FOV = 65)
  camera = new THREE.PerspectiveCamera(65, container.clientWidth / container.clientHeight, 0.1, 150);
  camera.position.set(0, 1.7, 24);

  // 3. Renderer Setup
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.35;
  renderer.outputEncoding = THREE.sRGBEncoding;
  container.appendChild(renderer.domElement);

  // 4. OrbitControls Setup (Free First Person Eye-Level Look & Orbit)
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.enablePan = true;
  controls.panSpeed = 0.8;
  controls.rotateSpeed = 0.6;
  controls.maxPolarAngle = Math.PI / 2 - 0.01; // Can't look below floor
  controls.minDistance = 1.2;
  controls.maxDistance = 45;
  controls.target.copy(currentLookAt);

  // 5. Studio & Interior Architectural Lighting Rig
  setupShowroomLighting();

  // 6. Build Physical Enclosed Showroom Building with Ceiling LED Panels & Grand Entrance Portal
  buildPBRArchitecturalBuilding();

  // 7. Load Vehicle Fleet
  loadReal3DCarFleet();

  // 8. 3D Interactive Hotspot Raycasting
  setupRaycasting(container);

  // Animation Loop with Smooth Camera Lerp & Hotspot Animation
  function animate() {
    requestAnimationFrame(animate);

    camera.position.lerp(targetCameraPos, 0.045);
    currentLookAt.lerp(targetLookAt, 0.045);
    controls.target.copy(currentLookAt);
    controls.update();

    // Pulse Interactive 3D Portal Ring Hotspots
    portalHotspots.forEach(ring => {
      ring.rotation.z += 0.01;
      const s = 1 + Math.sin(Date.now() * 0.003) * 0.08;
      ring.scale.set(s, s, s);
    });

    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener("resize", () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });
}

// Studio Lighting Rig
function setupShowroomLighting() {
  const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
  scene.add(ambientLight);

  const mainSun = new THREE.DirectionalLight(0xfff5e6, 2.5);
  mainSun.position.set(20, 36, 20);
  mainSun.castShadow = true;
  mainSun.shadow.mapSize.width = 2048;
  mainSun.shadow.mapSize.height = 2048;
  scene.add(mainSun);

  const cyanRim = new THREE.PointLight(0x00d2ff, 3.0, 60);
  cyanRim.position.set(-22, 10, -10);
  scene.add(cyanRim);

  const goldRim = new THREE.PointLight(0xe2b755, 3.0, 60);
  goldRim.position.set(22, 14, 10);
  scene.add(goldRim);

  // Dedicated Overhead Spotlights for every vehicle
  showroomCars.forEach((car) => {
    const [px, py, pz] = car.pos;
    const spot = new THREE.SpotLight(0xfffaee, 2.2, 18, Math.PI / 4, 0.5, 1);
    spot.position.set(px, py + 5.5, pz);
    spot.target.position.set(px, py, pz);
    scene.add(spot);
    scene.add(spot.target);
  });
}

// Architectural Showroom Enclosure Construction
function buildPBRArchitecturalBuilding() {
  portalHotspots = [];

  // Ground Floor (Polished Obsidian Marble Floor)
  const groundGeo = new THREE.PlaneGeometry(60, 60);
  const groundMat = new THREE.MeshStandardMaterial({ color: 0x0a0d14, roughness: 0.08, metalness: 0.92 });
  const ground = new THREE.Mesh(groundGeo, groundMat);
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);

  // Floor 1 — Executive Mezzanine Deck (y = 6.0)
  const floor1Geo = new THREE.BoxGeometry(50, 0.4, 26);
  const floor1Mat = new THREE.MeshStandardMaterial({ color: 0x121623, roughness: 0.12, metalness: 0.88 });
  const floor1 = new THREE.Mesh(floor1Geo, floor1Mat);
  floor1.position.set(0, 6.0, 6);
  floor1.receiveShadow = true;
  scene.add(floor1);

  // Floor 2 — Supercar Deck (y = 12.0)
  const floor2Geo = new THREE.BoxGeometry(50, 0.4, 26);
  const floor2Mat = new THREE.MeshStandardMaterial({ color: 0x161a2a, roughness: 0.12, metalness: 0.88 });
  const floor2 = new THREE.Mesh(floor2Geo, floor2Mat);
  floor2.position.set(0, 12.0, 14);
  floor2.receiveShadow = true;
  scene.add(floor2);

  // Architectural Back & Side Walls (Creates realistic room enclosure!)
  const wallMat = new THREE.MeshStandardMaterial({ color: 0x080b12, roughness: 0.4 });

  // Back Wall
  const backWall = new THREE.Mesh(new THREE.PlaneGeometry(54, 20), wallMat);
  backWall.position.set(0, 10, -20);
  scene.add(backWall);

  // Left & Right Walls
  const leftWall = new THREE.Mesh(new THREE.PlaneGeometry(40, 20), wallMat);
  leftWall.rotation.y = Math.PI / 2;
  leftWall.position.set(-25, 10, 0);
  scene.add(leftWall);

  const rightWall = new THREE.Mesh(new THREE.PlaneGeometry(40, 20), wallMat);
  rightWall.rotation.y = -Math.PI / 2;
  rightWall.position.set(25, 10, 0);
  scene.add(rightWall);

  // Grand Architectural Staircase 1 (Ground -> 1st Floor)
  const stepMat = new THREE.MeshStandardMaterial({ color: 0xe2b755, metalness: 0.9, roughness: 0.1 });
  for (let i = 0; i < 14; i++) {
    const step = new THREE.Mesh(new THREE.BoxGeometry(4.0, 0.42, 0.48), stepMat);
    step.position.set(19, (i + 0.5) * 0.42, -4 + i * 0.48);
    step.receiveShadow = true;
    scene.add(step);
  }

  // Grand Architectural Staircase 2 (1st Floor -> 2nd Floor)
  for (let i = 0; i < 14; i++) {
    const step = new THREE.Mesh(new THREE.BoxGeometry(4.0, 0.42, 0.48), stepMat);
    step.position.set(-19, 6.0 + (i + 0.5) * 0.42, 3 + i * 0.48);
    step.receiveShadow = true;
    scene.add(step);
  }

  // Grand Entrance Glass Portal Gate (z = 20)
  const portalArchMat = new THREE.MeshStandardMaterial({ color: 0xe2b755, metalness: 0.95, roughness: 0.05 });
  const portalArch = new THREE.Mesh(new THREE.BoxGeometry(10, 0.4, 1.2), portalArchMat);
  portalArch.position.set(0, 4.2, 20);
  scene.add(portalArch);

  [-4.8, 4.8].forEach(x => {
    const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 4.2, 24), portalArchMat);
    pillar.position.set(x, 2.1, 20);
    scene.add(pillar);
  });

  // Glowing 3D Portal Hotspot Ring at Grand Entrance
  const entryRingMat = new THREE.MeshBasicMaterial({ color: 0x00d2ff, side: THREE.DoubleSide });
  const entryRing = new THREE.Mesh(new THREE.TorusGeometry(1.8, 0.08, 16, 48), entryRingMat);
  entryRing.rotation.x = Math.PI / 2;
  entryRing.position.set(0, 0.1, 18);
  entryRing.userData = { isPortal: true, action: "enterAtrium" };
  scene.add(entryRing);
  portalHotspots.push(entryRing);
}

// Data-Driven Vehicle Asset Loader with Draco Support & Box3 Grounding
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

    // 1. Illuminated Circular Turntable Podium
    const padMat = new THREE.MeshStandardMaterial({ color: 0x181c28, metalness: 0.9, roughness: 0.15 });
    const pad = new THREE.Mesh(new THREE.CylinderGeometry(3.1, 3.3, 0.16, 36), padMat);
    pad.position.y = 0.08;
    pad.receiveShadow = true;
    carGroup.add(pad);

    const padRingMat = new THREE.MeshBasicMaterial({
      color: car.floorId === 0 ? 0x00d2ff : (car.floorId === 1 ? 0xe2b755 : 0xff0054)
    });
    const padRing = new THREE.Mesh(new THREE.TorusGeometry(3.15, 0.05, 16, 64), padRingMat);
    padRing.rotation.x = Math.PI / 2;
    padRing.position.y = 0.16;
    carGroup.add(padRing);
    portalHotspots.push(padRing);

    // 2. High-Detail Procedural Vehicle Mesh Base
    const carBaseMesh = createProceduralCarMesh(car);
    carBaseMesh.position.y = 0.16;
    carGroup.add(carBaseMesh);

    // 3. Load Actual 3D GLB Model Asset
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

// Generates an Aerodynamic Contoured Metallic Car Body Mesh
function createProceduralCarMesh(car) {
  const group = new THREE.Group();

  const bodyMat = new THREE.MeshStandardMaterial({
    color: car.color,
    metalness: 0.9,
    roughness: 0.15
  });

  const chassis = new THREE.Mesh(new THREE.BoxGeometry(2.15, 0.75, 4.35), bodyMat);
  chassis.position.y = 0.55;
  chassis.castShadow = true;
  group.add(chassis);

  const cabinMat = new THREE.MeshPhysicalMaterial({
    color: 0x111622,
    metalness: 0.9,
    roughness: 0.05,
    transparent: true,
    opacity: 0.85
  });
  const cabin = new THREE.Mesh(new THREE.BoxGeometry(1.88, 0.65, 2.2), cabinMat);
  cabin.position.set(0, 1.15, -0.2);
  cabin.castShadow = true;
  group.add(cabin);

  const lightMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
  [-0.75, 0.75].forEach(x => {
    const headlight = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.12, 0.1), lightMat);
    headlight.position.set(x, 0.6, 2.18);
    group.add(headlight);
  });

  const tailMat = new THREE.MeshBasicMaterial({ color: 0xff0033 });
  [-0.75, 0.75].forEach(x => {
    const taillight = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.12, 0.1), tailMat);
    taillight.position.set(x, 0.6, -2.18);
    group.add(taillight);
  });

  const tireMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.8 });
  const rimMat = new THREE.MeshStandardMaterial({ color: 0xe2b755, metalness: 0.95, roughness: 0.1 });
  const wheelGeo = new THREE.CylinderGeometry(0.42, 0.42, 0.3, 24);
  wheelGeo.rotateZ(Math.PI / 2);

  [[-1.0, 0.42, 1.3], [1.0, 0.42, 1.3], [-1.0, 0.42, -1.3], [1.0, 0.42, -1.3]].forEach(([wx, wy, wz]) => {
    const tire = new THREE.Mesh(wheelGeo, tireMat);
    tire.position.set(wx, wy, wz);
    tire.castShadow = true;

    const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.26, 0.31, 16), rimMat);
    rim.rotateZ(Math.PI / 2);
    rim.position.set(wx, wy, wz);

    group.add(tire);
    group.add(rim);
  });

  return group;
}

function setupRaycasting(container) {
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  container.addEventListener("click", (e) => {
    const rect = container.getBoundingClientRect();
    mouse.x = ((e.clientX - rect.left) / container.clientWidth) * 2 - 1;
    mouse.y = -((e.clientY - rect.top) / container.clientHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

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
  });
}

// FIRST-PERSON PORTAL TELEPORTATION & FLOOR ASCENSION
function enterShowroomFoyer() {
  closeNFSInspector();
  // Stand at Human Eye Height (y = 1.7m) outside Entrance Portal Gate
  targetCameraPos.set(0, 1.7, 24);
  targetLookAt.set(0, 1.8, 0);

  updateActiveFloorBtn(0);
}

function enterGroundFloorAtrium() {
  closeNFSInspector();
  // Stand inside Ground Floor Atrium at Human Eye Height (y = 1.65m)
  targetCameraPos.set(0, 1.65, 8.5);
  targetLookAt.set(0, 1.5, -2);

  updateActiveFloorBtn(1);
}

function switchFloor(floorNum) {
  closeNFSInspector();

  if (floorNum === 0) {
    enterGroundFloorAtrium();
  } else if (floorNum === 1) {
    // Stand on 1st Floor Mezzanine Deck at Human Eye Height (y = 7.65m)
    targetCameraPos.set(0, 7.65, 14.0);
    targetLookAt.set(0, 7.2, 6.0);
    updateActiveFloorBtn(2);
  } else if (floorNum === 2) {
    // Stand on 2nd Floor Supercar Deck at Human Eye Height (y = 13.65m)
    targetCameraPos.set(0, 13.65, 21.0);
    targetLookAt.set(0, 13.2, 14.0);
    updateActiveFloorBtn(3);
  }
}

function updateActiveFloorBtn(btnIdx) {
  document.querySelectorAll(".floor-btn").forEach((btn, idx) => {
    if (idx === btnIdx) btn.classList.add("active");
    else btn.classList.remove("active");
  });
}

// FIRST-PERSON EYE-LEVEL CAR INSPECTION
function zoomInspectCarByIndex(index) {
  activeInspectedIndex = (index + showroomCars.length) % showroomCars.length;
  const carData = showroomCars[activeInspectedIndex];

  // Camera glides directly to Human Eye-Level in front of the vehicle
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

// Commercial Inventory Filtering Engine
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
