// AURA MOTORS — HYPER-PREMIUM COMMERCIAL 3D AUTOMOTIVE SHOWROOM & INSPECTION ENGINE (v11.0.0)

/**
 * FLEET ARCHITECTURE & 3D ASSET MAPPING
 * 10 Dedicated Vehicles mapped to distinct high-detail 3D GLBs, floor coordinates, & NFS specs.
 */
const showroomCars = [
  // GROUND FLOOR — SUVs & Off-Road (Floor Height y = 0.4)
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
    pos: [-12, 0.4, -4],
    rotY: Math.PI / 5,
    color: 0x1c222e,
    glb: "models/groundvehicle.glb",
    targetHeight: 1.85,
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
    pos: [-4, 0.4, -4],
    rotY: Math.PI / 6,
    color: 0x00d2ff,
    glb: "models/ferrari.glb",
    targetHeight: 1.3,
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
    pos: [4, 0.4, -4],
    rotY: -Math.PI / 6,
    color: 0xd9381e,
    glb: "models/buggy.glb",
    targetHeight: 1.7,
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
    pos: [12, 0.4, -4],
    rotY: -Math.PI / 5,
    color: 0x243329,
    glb: "models/truck.glb",
    targetHeight: 1.6,
    stats: { speed: 65, accel: 62, power: 74, handling: 70 }
  },

  // 1ST FLOOR — Executive Luxury Sedans (Floor Height y = 5.4)
  {
    id: "merc",
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
    pos: [-10, 5.4, 6],
    rotY: Math.PI / 6,
    color: 0x09152a,
    glb: "models/toycar.glb",
    targetHeight: 1.35,
    stats: { speed: 92, accel: 90, power: 94, handling: 92 }
  },
  {
    id: "bmw",
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
    pos: [0, 5.4, 6],
    rotY: 0,
    color: 0x730d17,
    glb: "models/toycar.glb",
    targetHeight: 1.35,
    stats: { speed: 90, accel: 88, power: 92, handling: 93 }
  },
  {
    id: "jeep",
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
    pos: [10, 5.4, 6],
    rotY: -Math.PI / 6,
    color: 0xd4d8e0,
    glb: "models/groundvehicle.glb",
    targetHeight: 1.75,
    stats: { speed: 80, accel: 79, power: 83, handling: 82 }
  },

  // 2ND FLOOR — Supercar Deck (Floor Height y = 10.4)
  {
    id: "audi",
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
    pos: [-10, 10.4, 12],
    rotY: Math.PI / 5,
    color: 0x181a20,
    glb: "models/ferrari.glb",
    targetHeight: 1.25,
    stats: { speed: 98, accel: 99, power: 97, handling: 96 }
  },
  {
    id: "porsche",
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
    pos: [0, 10.4, 12],
    rotY: 0,
    color: 0xd90429,
    glb: "models/ferrari.glb",
    targetHeight: 1.25,
    stats: { speed: 99, accel: 98, power: 96, handling: 99 }
  },
  {
    id: "fortuner",
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
    pos: [10, 10.4, 12],
    rotY: -Math.PI / 5,
    color: 0xf4f5f6,
    glb: "models/groundvehicle.glb",
    targetHeight: 1.85,
    stats: { speed: 84, accel: 80, power: 88, handling: 81 }
  }
];

// Global Engine Variables
let scene, camera, renderer, controls;
let targetCameraPos = new THREE.Vector3(0, 5.2, 25);
let targetLookAt = new THREE.Vector3(0, 2.5, -4);
let currentLookAt = new THREE.Vector3(0, 2.5, -4);
let carMeshes = [];
let rotatingPodiums = [];
let activeInspectedCar = null;

function initShowroom3D() {
  const container = document.getElementById("showroom-canvas-target");
  if (!container) return;

  // 1. Scene Setup (Ultra-Clean Luxury Dark Studio)
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x06080e);
  scene.fog = new THREE.FogExp2(0x06080e, 0.008);

  // 2. Camera Setup (Wide Angle for Panoramic Viewing)
  camera = new THREE.PerspectiveCamera(46, container.clientWidth / container.clientHeight, 0.1, 180);
  camera.position.set(0, 5.2, 25);

  // 3. Renderer Setup
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.3;
  renderer.outputEncoding = THREE.sRGBEncoding;
  container.appendChild(renderer.domElement);

  // 4. OrbitControls Setup
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.04;
  controls.maxPolarAngle = Math.PI / 2 - 0.01;
  controls.minDistance = 2.5;
  controls.maxDistance = 50;
  controls.target.copy(currentLookAt);

  // 5. Studio Lighting Rig & Spotlights
  setupShowroomLighting();

  // 6. Build Physical 3-Story Luxury Architectural Showroom
  buildPBRArchitecturalBuilding();

  // 7. Load Vehicle Fleet with Draco Decoder & Auto-Centering Engine
  loadReal3DCarFleet();

  // 8. Raycasting Setup
  setupRaycasting(container);

  // Animation Loop with Silky-Smooth Camera Lerp & Podiums Rotation
  function animate() {
    requestAnimationFrame(animate);

    camera.position.lerp(targetCameraPos, 0.045);
    currentLookAt.lerp(targetLookAt, 0.045);
    controls.target.copy(currentLookAt);
    controls.update();

    rotatingPodiums.forEach(ring => {
      ring.rotation.z += 0.005;
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

// Studio Lighting Rig with Overhead Spotlights above Every Podium
function setupShowroomLighting() {
  const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
  scene.add(ambientLight);

  const mainSun = new THREE.DirectionalLight(0xfff5e6, 2.5);
  mainSun.position.set(20, 36, 20);
  mainSun.castShadow = true;
  mainSun.shadow.mapSize.width = 2048;
  mainSun.shadow.mapSize.height = 2048;
  scene.add(mainSun);

  const cyanRim = new THREE.PointLight(0x00d2ff, 2.8, 60);
  cyanRim.position.set(-22, 12, -12);
  scene.add(cyanRim);

  const goldRim = new THREE.PointLight(0xe2b755, 2.8, 60);
  goldRim.position.set(22, 16, 12);
  scene.add(goldRim);

  // Dedicated Overhead Spotlights for Each Bay
  showroomCars.forEach((car) => {
    const [px, py, pz] = car.pos;
    const spot = new THREE.SpotLight(0xfffaee, 2.0, 18, Math.PI / 4, 0.5, 1);
    spot.position.set(px, py + 7.0, pz);
    spot.target.position.set(px, py, pz);
    scene.add(spot);
    scene.add(spot.target);
  });
}

// Physical 3-Story Luxury Architectural Showroom Construction
function buildPBRArchitecturalBuilding() {
  // Ground Floor (Polished Obsidian Marble Floor)
  const groundGeo = new THREE.PlaneGeometry(54, 54);
  const groundMat = new THREE.MeshStandardMaterial({
    color: 0x0c0f17,
    roughness: 0.08,
    metalness: 0.92
  });
  const ground = new THREE.Mesh(groundGeo, groundMat);
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);

  // Floor 1 — Executive Mezzanine Deck (y = 5.0)
  const floor1Geo = new THREE.BoxGeometry(46, 0.4, 28);
  const floor1Mat = new THREE.MeshStandardMaterial({ color: 0x121623, roughness: 0.12, metalness: 0.88 });
  const floor1 = new THREE.Mesh(floor1Geo, floor1Mat);
  floor1.position.set(0, 5.0, 6);
  floor1.receiveShadow = true;
  scene.add(floor1);

  // Floor 2 — Supercar Deck (y = 10.0)
  const floor2Geo = new THREE.BoxGeometry(46, 0.4, 28);
  const floor2Mat = new THREE.MeshStandardMaterial({ color: 0x161a2a, roughness: 0.12, metalness: 0.88 });
  const floor2 = new THREE.Mesh(floor2Geo, floor2Mat);
  floor2.position.set(0, 10.0, 12);
  floor2.receiveShadow = true;
  scene.add(floor2);

  // Brushed Titanium Structural Columns
  const colGeo = new THREE.CylinderGeometry(0.48, 0.48, 10.0, 24);
  const colMat = new THREE.MeshStandardMaterial({ color: 0x0a0c14, metalness: 0.95, roughness: 0.05 });
  [[-21, -4], [21, -4], [-21, 18], [21, 18]].forEach(([cx, cz]) => {
    const col = new THREE.Mesh(colGeo, colMat);
    col.position.set(cx, 5.0, cz);
    scene.add(col);
  });

  // Grand Architectural Staircases & Gold Handrails
  const stepMat = new THREE.MeshStandardMaterial({ color: 0xe2b755, metalness: 0.9, roughness: 0.1 });
  for (let i = 0; i < 12; i++) {
    const step = new THREE.Mesh(new THREE.BoxGeometry(4.0, 0.42, 0.48), stepMat);
    step.position.set(19, (i + 0.5) * 0.42, -4 + i * 0.48);
    step.receiveShadow = true;
    scene.add(step);
  }
  for (let i = 0; i < 12; i++) {
    const step = new THREE.Mesh(new THREE.BoxGeometry(4.0, 0.42, 0.48), stepMat);
    step.position.set(-19, 5.0 + (i + 0.5) * 0.42, 2 + i * 0.48);
    step.receiveShadow = true;
    scene.add(step);
  }

  // Frameless Glass Facade
  const glassMat = new THREE.MeshPhysicalMaterial({ color: 0x88ccff, transparent: true, opacity: 0.15, transmission: 0.94 });
  const glassWall = new THREE.Mesh(new THREE.PlaneGeometry(50, 16), glassMat);
  glassWall.position.set(0, 8, -24);
  scene.add(glassWall);
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
  rotatingPodiums = [];

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
    rotatingPodiums.push(padRing);

    // 2. High-Detail Procedural Vehicle Mesh Base (Guarantees Podium is Never Empty)
    const carBaseMesh = createProceduralCarMesh(car);
    carBaseMesh.position.y = 0.16;
    carGroup.add(carBaseMesh);

    // 3. Load Actual 3D GLB Model Asset with Draco Support & Box3 Grounding
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

      // Replace Base Mesh with Loaded GLB Model
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

// Generates an Aerodynamic Contoured Metallic Car Body Mesh (Fallback & Baseline)
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
    const intersects = raycaster.intersectObjects(carMeshes, true);
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
}

// Floor Ascension Controls & Elevator Animation (Silky-Smooth Camera Lerp)
function switchFloor(floorNum) {
  closeNFSInspector();

  if (floorNum === 0) {
    targetCameraPos.set(0, 5.2, 25);
    targetLookAt.set(0, 2.5, -4);
  } else if (floorNum === 1) {
    targetCameraPos.set(0, 10.2, 27);
    targetLookAt.set(0, 7.5, 6);
  } else if (floorNum === 2) {
    targetCameraPos.set(0, 15.2, 33);
    targetLookAt.set(0, 12.5, 12);
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

// Zoom-In & Launch Need For Speed (NFS) Spec Inspection Screen
function zoomInspectCar(carData) {
  activeInspectedCar = carData;

  const [px, py, pz] = carData.pos;
  targetCameraPos.set(px, py + 1.8, pz + 4.8);
  targetLookAt.set(px, py + 0.9, pz);

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
