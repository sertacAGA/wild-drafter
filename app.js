
// =====================================================
// WILD RIFT ASSISTANT
// 142 CHAMPION DATABASE
// Main Pool + Counter Pick
// =====================================================

const LANES = [
  { id: "Baron", name: "Baron Koridoru" },
  { id: "Jungle", name: "Orman" },
  { id: "Mid", name: "Orta Koridor" },
  { id: "ADC", name: "Alt Koridor" },
  { id: "Support", name: "Destek" }
];

const CLASS_NAMES = {
  T: "Tank",
  F: "Dövüşçü",
  M: "Büyücü",
  A: "Suikastçı",
  R: "Nişancı",
  S: "Destek"
};

const STYLE_NAMES = {
  D: "Dayanıklı",
  H: "Yüksek hasar",
  V: "Hareketli",
  U: "Düellocu",
  G: "Takım savaşı",
  R: "Menzilli",
  B: "Ani hasar",
  C: "Kontrol",
  I: "İyileştirme"
};

const DAMAGE_NAMES = {
  P: "Fiziksel",
  M: "Büyü",
  X: "Karma"
};

// Kayıt biçimi:
// İsim | Koridorlar | Sınıflar | Hasar | Oyun tarzları
//
// Koridor:
// B = Baron, J = Jungle, M = Mid, A = ADC, S = Support
//
// Sınıf:
// T = Tank, F = Dövüşçü, M = Büyücü,
// A = Suikastçı, R = Nişancı, S = Destek
//
// Oyun tarzı:
// D = Dayanıklı, H = Yüksek hasar, V = Hareketli,
// U = Düellocu, G = Takım savaşı, R = Menzilli,
// B = Ani hasar, C = Kontrol, I = İyileştirme

const ROSTER = [
  ["Aatrox","B","F","P","DHUG"],
  ["Ahri","M","MA","M","VBRC"],
  ["Akali","BM","A","M","VHB"],
  ["Akshan","MA","RA","P","VHB"],
  ["Alistar","S","TS","M","DGC"],
  ["Ambessa","BJ","FA","P","VHUB"],
  ["Amumu","JS","T","M","DGC"],
  ["Annie","M","M","M","HBCG"],
  ["Ashe","AS","RS","P","RGC"],
  ["Aurelion Sol","M","M","M","RHG"],
  ["Aurora","BM","MA","M","VHB"],
  ["Bard","S","S","M","VCG"],
  ["Blitzcrank","S","TS","M","DGC"],
  ["Brand","MS","M","M","RHB"],
  ["Braum","S","TS","M","DGC"],
  ["Caitlyn","A","R","P","RH"],
  ["Camille","BJ","F","P","VHU"],
  ["Cho'Gath","B","TM","M","DHGC"],
  ["Corki","MA","RM","X","RHB"],
  ["Darius","B","F","P","DHU"],
  ["Diana","JM","FA","M","VHBG"],
  ["Dr. Mundo","BJ","TF","P","DHU"],
  ["Draven","A","R","P","RHU"],
  ["Ekko","JM","AM","M","VHB"],
  ["Evelynn","J","A","M","VB"],
  ["Ezreal","A","R","X","RVH"],
  ["Fiddlesticks","J","M","M","HBCG"],
  ["Fiora","B","F","P","VHU"],
  ["Fizz","M","A","M","VHB"],
  ["Galio","MS","TM","M","DGC"],
  ["Garen","B","TF","P","DHU"],
  ["Gnar","B","FR","X","DHUG"],
  ["Gragas","BJ","TFM","M","DGC"],
  ["Graves","J","R","P","DHU"],
  ["Gwen","BJ","F","M","DHU"],
  ["Hecarim","J","F","P","VHG"],
  ["Heimerdinger","BMS","M","M","RBC"],
  ["Hwei","M","M","M","RBCG"],
  ["Irelia","BM","F","P","VHU"],
  ["Janna","S","S","M","RGC"],
  ["Jarvan IV","J","F","P","DVG"],
  ["Jax","BJ","F","P","DHU"],
  ["Jayce","BM","FR","P","RHV"],
  ["Jhin","A","R","P","RHB"],
  ["Jinx","A","R","P","RHG"],
  ["K'Sante","B","TF","P","DUG"],
  ["Kai'Sa","A","RA","X","VHB"],
  ["Kalista","A","R","P","RVU"],
  ["Karma","MS","MS","M","RGC"],
  ["Kassadin","M","A","M","VHB"],
  ["Katarina","M","A","M","VHB"],
  ["Kayle","BM","FR","X","RHU"],
  ["Kayn","J","FA","P","VHU"],
  ["Kennen","BM","M","M","RBCG"],
  ["Kha'Zix","J","A","P","VHB"],
  ["Kindred","J","R","P","VHU"],
  ["Kog'Maw","A","R","X","RH"],
  ["Lee Sin","J","FA","P","VHU"],
  ["Leona","S","TS","M","DGC"],
  ["Lillia","J","FM","M","VHG"],
  ["Lissandra","M","M","M","BCG"],
  ["Lucian","A","R","P","VHB"],
  ["Lulu","S","MS","M","ICG"],
  ["Lux","MS","MS","M","RBC"],
  ["Malphite","BS","TM","M","DGC"],
  ["Maokai","BJS","T","M","DGC"],
  ["Master Yi","J","FA","P","VHU"],
  ["Mel","M","M","M","RHB"],
  ["Milio","S","S","M","RIG"],
  ["Miss Fortune","A","R","P","RHG"],
  ["Mordekaiser","BJ","FM","M","DHU"],
  ["Morgana","MS","MS","M","RCG"],
  ["Nami","S","MS","M","RIC"],
  ["Nasus","B","TF","P","DHU"],
  ["Nautilus","JS","TS","M","DGC"],
  ["Nidalee","J","AM","X","VHB"],
  ["Nilah","A","F","P","VHU"],
  ["Nocturne","J","FA","P","VHB"],
  ["Norra","MS","M","M","RBC"],
  ["Nunu & Willump","J","TF","M","DGC"],
  ["Olaf","BJ","F","P","DHU"],
  ["Orianna","M","M","M","RGC"],
  ["Ornn","B","T","M","DGC"],
  ["Pantheon","BJM","FA","P","VHB"],
  ["Poppy","BJS","TF","P","DGC"],
  ["Pyke","S","AS","P","VHB"],
  ["Rakan","S","FS","M","VGC"],
  ["Rammus","J","T","P","DGC"],
  ["Rek'Sai","J","FA","P","VHU"],
  ["Rell","S","TS","M","DGC"],
  ["Renekton","B","F","P","DHU"],
  ["Rengar","J","A","P","VHB"],
  ["Riven","B","F","P","VHU"],
  ["Rumble","BJ","FM","M","RHG"],
  ["Ryze","M","M","M","RHG"],
  ["Samira","A","RA","P","VHB"],
  ["Senna","AS","RS","P","RGC"],
  ["Seraphine","AS","MS","M","RIC"],
  ["Sett","B","TF","P","DHUG"],
  ["Shen","BS","T","P","DGC"],
  ["Shyvana","BJ","F","X","DHUG"],
  ["Singed","B","TF","M","DVG"],
  ["Sion","B","T","P","DGC"],
  ["Sivir","A","R","P","RHG"],
  ["Skarner","BJ","T","P","DGC"],
  ["Smolder","A","R","X","RHB"],
  ["Sona","S","S","M","RIG"],
  ["Soraka","S","S","M","RIG"],
  ["Swain","MS","FM","M","DGC"],
  ["Syndra","M","M","M","RHB"],
  ["Taliyah","JM","M","M","RBC"],
  ["Talon","JM","A","P","VHB"],
  ["Teemo","B","RM","M","RHB"],
  ["Thresh","S","TS","M","DGC"],
  ["Tristana","A","R","P","RHV"],
  ["Tryndamere","BJ","F","P","DHU"],
  ["Twisted Fate","M","MR","M","RBC"],
  ["Twitch","A","R","P","RHB"],
  ["Urgot","B","F","P","DHU"],
  ["Varus","A","R","X","RHB"],
  ["Vayne","A","R","P","VHU"],
  ["Veigar","M","M","M","RBC"],
  ["Vel'Koz","MS","M","M","RHB"],
  ["Vex","M","M","M","RBC"],
  ["Vi","J","F","P","VHC"],
  ["Viego","J","FA","P","VHU"],
  ["Viktor","M","M","M","RHG"],
  ["Vladimir","BM","M","M","DHB"],
  ["Volibear","BJ","TF","X","DHUG"],
  ["Warwick","BJ","F","P","DHU"],
  ["Wukong","BJ","F","P","VHG"],
  ["Xayah","A","R","P","RHG"],
  ["Xin Zhao","J","F","P","DHU"],
  ["Yasuo","BM","FA","P","VHU"],
  ["Yone","BM","FA","X","VHU"],
  ["Yunara","A","R","X","RHV"],
  ["Yuumi","S","S","M","RIG"],
  ["Zed","M","A","P","VHB"],
  ["Zeri","A","R","P","VHU"],
  ["Ziggs","MA","M","M","RHB"],
  ["Zilean","MS","MS","M","RCG"],
  ["Zoe","M","M","M","RHB"],
  ["Zyra","MS","M","M","RBC"]
];

// =====================================================
// DATA GENERATION
// =====================================================

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/'/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function decodeLanes(value) {
  const map = {
    B: "Baron",
    J: "Jungle",
    M: "Mid",
    A: "ADC",
    S: "Support"
  };

  return [...value].map(code => map[code]).filter(Boolean);
}

function decodeClasses(value) {
  return [...value].map(code => CLASS_NAMES[code]).filter(Boolean);
}

function decodeStyles(value) {
  return [...value].map(code => STYLE_NAMES[code]).filter(Boolean);
}

function createChampion(row) {
  const [name, laneCodes, classCodes, damageCode, styleCodes] = row;

  const classes = decodeClasses(classCodes);
  const styles = decodeStyles(styleCodes);

  const threats = [];

  if (damageCode === "P" || damageCode === "X") {
    threats.push("physical");
  }

  if (damageCode === "M" || damageCode === "X") {
    threats.push("magic");
  }

  if (styles.includes("İyileştirme")) {
    threats.push("sustain");
  }

  if (classes.includes("Tank")) {
    threats.push("tank");
  }

  if (styles.includes("Menzilli")) {
    threats.push("ranged");
  }

  return {
    id: slugify(name),
    name,
    lanes: decodeLanes(laneCodes),
    classes,
    styles,
    damage: DAMAGE_NAMES[damageCode],
    threats,
    goodAgainst: [],
    description: `${classes.join(" / ")} • ${DAMAGE_NAMES[damageCode]} hasarı`
  };
}

const CHAMPIONS = ROSTER.map(createChampion);

// Bazı şampiyonların iyileşme veya can yenileme mekanikleri
// rakip item değerlendirmesinde ayrıca dikkate alınır.
const SUSTAIN_CHAMPIONS = [
  "aatrox", "dr-mundo", "fiora", "gwen", "irelia",
  "kayn", "lee-sin", "master-yi", "nasus", "nilah",
  "olaf", "rengar", "renekton", "riven", "samira",
  "soraka", "swain", "vladimir", "warwick",
  "volibear", "yone", "yuumi"
];

SUSTAIN_CHAMPIONS.forEach(id => {
  const champ = CHAMPIONS.find(item => item.id === id);
  if (champ && !champ.threats.includes("sustain")) {
    champ.threats.push("sustain");
  }
});

// =====================================================
// APPLICATION STATE
// =====================================================

let poolLane = "Baron";
let counterLane = "Baron";
let selectedEnemy = null;
let selectedPhase = "blind";

let mainPool = loadPool();

let poolSelectedClasses = [];
let poolSelectedStyles = [];

// =====================================================
// STORAGE
// =====================================================

function loadPool() {
  try {
    const saved = JSON.parse(localStorage.getItem("wrMainPool")) || [];

    return saved.filter(item =>
      item &&
      typeof item.id === "string" &&
      typeof item.lane === "string" &&
      CHAMPIONS.some(champ => champ.id === item.id) &&
      LANES.some(lane => lane.id === item.lane)
    );
  } catch {
    return [];
  }
}

function savePool() {
  localStorage.setItem("wrMainPool", JSON.stringify(mainPool));
}

// =====================================================
// HELPERS
// =====================================================

function getChampion(id) {
  return CHAMPIONS.find(champ => champ.id === id);
}

function getLaneName(id) {
  return LANES.find(lane => lane.id === id)?.name || id;
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

function toggleSelection(array, value) {
  const index = array.indexOf(value);

  if (index >= 0) {
    array.splice(index, 1);
  } else {
    array.push(value);
  }
}

function renderLaneButtons(containerId, selectedLane, callback) {
  const container = document.getElementById(containerId);

  container.innerHTML = LANES.map(lane => `
    <button class="choice-button ${lane.id === selectedLane ? "selected" : ""}"
      data-lane="${lane.id}">
      ${lane.name}
    </button>
  `).join("");

  container.querySelectorAll("[data-lane]").forEach(button => {
    button.addEventListener("click", () => {
      callback(button.dataset.lane);
    });
  });
}

function renderChoiceButtons(containerId, values, selectedValues, callback) {
  const container = document.getElementById(containerId);

  container.innerHTML = values.map(value => `
    <button class="choice-button ${selectedValues.includes(value) ? "selected" : ""}"
      data-value="${escapeHTML(value)}">
      ${escapeHTML(value)}
    </button>
  `).join("");

  container.querySelectorAll("[data-value]").forEach(button => {
    button.addEventListener("click", () => {
      callback(button.dataset.value);
    });
  });
}

// =====================================================
// NAVIGATION
// =====================================================

document.querySelectorAll(".nav-button").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".nav-button").forEach(item => {
      item.classList.remove("active");
    });

    document.querySelectorAll(".page").forEach(page => {
      page.classList.remove("active");
    });

    button.classList.add("active");
    document.getElementById(button.dataset.page).classList.add("active");
  });
});

// =====================================================
// MAIN POOL
// =====================================================

function initPoolLaneButtons() {
  renderLaneButtons("poolLaneChoices", poolLane, lane => {
    poolLane = lane;
    initPoolLaneButtons();
    document.getElementById("poolRecommendations").classList.add("hidden");
  });
}

function handleClassSelection(value) {
  toggleSelection(poolSelectedClasses, value);

  renderChoiceButtons(
    "classChoices",
    Object.values(CLASS_NAMES),
    poolSelectedClasses,
    handleClassSelection
  );
}

function handleStyleSelection(value) {
  toggleSelection(poolSelectedStyles, value);

  renderChoiceButtons(
    "styleChoices",
    Object.values(STYLE_NAMES),
    poolSelectedStyles,
    handleStyleSelection
  );
}

function scorePoolChampion(champ) {
  let score = 0;

  if (champ.lanes.includes(poolLane)) {
    score += 5;
  }

  poolSelectedClasses.forEach(selected => {
    if (champ.classes.includes(selected)) score += 4;
  });

  poolSelectedStyles.forEach(selected => {
    if (champ.styles.includes(selected)) score += 3;
  });

  return score;
}

function getPoolRecommendations() {
  return CHAMPIONS
    .filter(champ => champ.lanes.includes(poolLane))
    .filter(champ => !mainPool.some(item =>
      item.id === champ.id && item.lane === poolLane
    ))
    .map(champ => ({
      champ,
      score: scorePoolChampion(champ)
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
}

function renderPoolRecommendations() {
  const results = getPoolRecommendations();

  const wrapper = document.getElementById("poolRecommendations");
  const list = document.getElementById("poolRecommendationList");

  wrapper.classList.remove("hidden");

  if (!results.length) {
    list.innerHTML = `
      <div class="empty-state">
        Bu koridorda eklenebilecek başka şampiyon bulunamadı.
      </div>
    `;
    return;
  }

  list.innerHTML = results.map(result => `
    <article class="champion-card">
      <h4>${escapeHTML(result.champ.name)}</h4>
      <div class="champion-meta">
        ${escapeHTML(result.champ.classes.join(" / "))}
      </div>
      <p>${escapeHTML(result.champ.description)}</p>
      <div class="score-line">Uygunluk puanı: ${result.score}</div>
      <button class="card-button" data-add-pool="${result.champ.id}">
        Main Havuzuma Ekle
      </button>
    </article>
  `).join("");

  list.querySelectorAll("[data-add-pool]").forEach(button => {
    button.addEventListener("click", () => {
      addToPool(button.dataset.addPool, poolLane);
    });
  });
}

function addToPool(championId, lane) {
  const exists = mainPool.some(item =>
    item.id === championId && item.lane === lane
  );

  if (exists) {
    alert("Bu şampiyon bu koridorda zaten havuzunda.");
    return;
  }

  mainPool.push({
    id: championId,
    lane
  });

  savePool();
  renderMainPool();
  renderPoolRecommendations();
}

function removeFromPool(championId, lane) {
  mainPool = mainPool.filter(item =>
    !(item.id === championId && item.lane === lane)
  );

  savePool();
  renderMainPool();
  renderPoolRecommendations();
}

function renderMainPool() {
  const container = document.getElementById("mainPoolList");

  if (!mainPool.length) {
    container.innerHTML = `
      <div class="empty-state">
        Henüz Main Pool oluşturmadın.
        Önerilerden şampiyon ekleyebilirsin.
      </div>
    `;
    return;
  }

  container.innerHTML = mainPool.map(item => {
    const champ = getChampion(item.id);

    if (!champ) return "";

    return `
      <div class="pool-entry">
        <div>
          <strong>${escapeHTML(champ.name)}</strong>
          <small>${escapeHTML(getLaneName(item.lane))}</small>
        </div>
        <button class="remove-button"
          data-remove-id="${item.id}"
          data-remove-lane="${item.lane}">
          Havuzdan Çıkar
        </button>
      </div>
    `;
  }).join("");

  container.querySelectorAll("[data-remove-id]").forEach(button => {
    button.addEventListener("click", () => {
      removeFromPool(
        button.dataset.removeId,
        button.dataset.removeLane
      );
    });
  });
}

document.getElementById("recommendButton").addEventListener("click", () => {
  renderPoolRecommendations();
});

document.getElementById("clearPoolButton").addEventListener("click", () => {
  if (!mainPool.length) return;

  if (confirm("Main havuzunun tamamını silmek istiyor musun?")) {
    mainPool = [];
    savePool();
    renderMainPool();
    renderPoolRecommendations();
  }
});

// =====================================================
// COUNTER PICK - LANE AND ENEMY
// =====================================================

function initCounterLaneButtons() {
  renderLaneButtons("counterLaneChoices", counterLane, lane => {
    counterLane = lane;
    selectedEnemy = null;

    document.getElementById("enemySearch").value = "";
    renderCounterLane();
  });
}

function renderCounterLane() {
  initCounterLaneButtons();
  renderEnemyList();
  updateSelectedEnemy();

  document.getElementById("counterResults").classList.add("hidden");
}

function renderEnemyList() {
  const search = document.getElementById("enemySearch").value
    .trim()
    .toLocaleLowerCase("tr");

  const enemies = CHAMPIONS
    .filter(champ => champ.lanes.includes(counterLane))
    .filter(champ => champ.id !== selectedEnemy?.id)
    .filter(champ =>
      champ.name.toLocaleLowerCase("tr").includes(search)
    )
    .sort((a, b) => a.name.localeCompare(b.name, "tr"));

  const container = document.getElementById("enemyChampionList");

  if (!enemies.length) {
    container.innerHTML = `
      <div class="muted">Bu koridorda aramana uygun şampiyon bulunamadı.</div>
    `;
    return;
  }

  container.innerHTML = enemies.map(champ => `
    <button class="enemy-option" data-enemy-id="${champ.id}">
      ${escapeHTML(champ.name)}
    </button>
  `).join("");

  container.querySelectorAll("[data-enemy-id]").forEach(button => {
    button.addEventListener("click", () => {
      selectedEnemy = getChampion(button.dataset.enemyId);
      updateSelectedEnemy();
      renderEnemyList();
      document.getElementById("counterResults").classList.add("hidden");
    });
  });
}

function updateSelectedEnemy() {
  const element = document.getElementById("selectedEnemy");

  if (!selectedEnemy) {
    element.textContent = "Henüz rakip seçilmedi.";
    return;
  }

  element.innerHTML = `
    Seçilen rakip:
    <strong>${escapeHTML(selectedEnemy.name)}</strong>
  `;
}

document.getElementById("enemySearch").addEventListener("input", renderEnemyList);

// =====================================================
// PICK PHASE
// =====================================================

document.querySelectorAll("[data-phase]").forEach(button => {
  button.addEventListener("click", () => {
    selectedPhase = button.dataset.phase;

    document.querySelectorAll("[data-phase]").forEach(item => {
      item.classList.remove("selected");
    });

    button.classList.add("selected");
  });
});

// =====================================================
// COUNTER SCORING
// =====================================================

// Şimdilik doğrulanmış birebir eşleşme verisi olmayan
// şampiyonlar için sahte counter puanı üretilmez.
// Bu puanlar koridor, rol ve seçim aşamasına göre
// genel tercih puanlarıdır.

function scoreCounterChampion(champ, enemy) {
  let score = 0;
  const reasons = [];

  if (champ.lanes.includes(counterLane)) {
    score += 5;
  }

  if (selectedPhase === "blind") {
    if (champ.styles.includes("Dayanıklı")) score += 2;
    if (champ.styles.includes("Takım savaşı")) score += 2;
    if (champ.styles.includes("Kontrol")) score += 1;
  }

  if (selectedPhase === "early") {
    if (champ.styles.includes("Dayanıklı")) score += 2;
    if (champ.styles.includes("Kontrol")) score += 2;
  }

  if (selectedPhase === "middle") {
    if (champ.styles.includes("Takım savaşı")) score += 2;
    if (champ.styles.includes("Kontrol")) score += 2;
  }

  if (selectedPhase === "late") {
    if (champ.styles.includes("Düellocu")) score += 2;
    if (champ.styles.includes("Ani hasar")) score += 1;
  }

  if (champ.classes.includes("Tank") && enemy.classes.includes("Suikastçı")) {
    score += 1;
  }

  if (champ.styles.includes("Kontrol") && enemy.styles.includes("Hareketli")) {
    score += 1;
  }

  if (champ.styles.includes("Dayanıklı") && enemy.styles.includes("Yüksek hasar")) {
    score += 1;
  }

  return {
    score,
    reasons,
    matchDataAvailable: champ.goodAgainst.includes(enemy.id)
  };
}

function getCounterCandidates() {
  return CHAMPIONS
    .filter(champ => champ.lanes.includes(counterLane))
    .filter(champ => champ.id !== selectedEnemy.id)
    .map(champ => {
      const result = scoreCounterChampion(champ, selectedEnemy);

      return {
        champ,
        score: result.score,
        reasons: result.reasons,
        matchDataAvailable: result.matchDataAvailable
      };
    })
    .sort((a, b) => b.score - a.score);
}

function getMainPoolCandidate(candidates) {
  const mainIds = mainPool
    .filter(item => item.lane === counterLane)
    .map(item => item.id);

  if (!mainIds.length) return null;

  const mainCandidates = candidates
    .filter(item => mainIds.includes(item.champ.id))
    .map(item => ({
      ...item,
      score: item.score + 2
    }))
    .sort((a, b) => b.score - a.score);

  return mainCandidates[0] || null;
}

// =====================================================
// COUNTER RESULT DISPLAY
// =====================================================

function createCounterCard(candidate, isMain = false) {
  const champ = candidate.champ;

  const matchText = candidate.matchDataAvailable
    ? "Eşleşme verisi mevcut"
    : "Birebir eşleşme verisi henüz yok";

  return `
    <article class="champion-card ${isMain ? "main-pick-card" : ""}">
      <h4>${escapeHTML(champ.name)}</h4>
      <div class="champion-meta">
        ${escapeHTML(champ.classes.join(" / "))}
      </div>
      <p>${escapeHTML(champ.description)}</p>
      <div class="score-line">Genel uyum puanı: ${candidate.score}</div>
      <p>${matchText}</p>
      <button class="card-button" data-select-champ="${champ.id}">
        Bu Şampiyonu Seç
      </button>
    </article>
  `;
}

function showCounterResults() {
  const error = document.getElementById("counterError");
  error.textContent = "";

  if (!selectedEnemy) {
    error.textContent = "Önce rakip şampiyonu seçmelisin.";
    return;
  }

  const candidates = getCounterCandidates();
  const mainCandidate = getMainPoolCandidate(candidates);

  const mainResult = document.getElementById("mainCounterResult");
  const alternativesResult = document.getElementById("alternativeCounterResults");

  if (mainCandidate) {
    mainResult.innerHTML = createCounterCard(mainCandidate, true);
  } else {
    mainResult.innerHTML = `
      <div class="empty-state">
        Bu koridorda Main Pool şampiyonun bulunmuyor.
        Alternatif önerilerden birini değerlendirebilirsin.
      </div>
    `;
  }

  const mainId = mainCandidate?.champ.id;

  const alternatives = candidates
    .filter(item => item.champ.id !== mainId)
    .filter(item => !mainPool.some(main =>
      main.id === item.champ.id && main.lane === counterLane
    ))
    .slice(0, 3);

  if (!alternatives.length) {
    alternativesResult.innerHTML = `
      <div class="empty-state">
        Bu koridorda yeterli alternatif bulunamadı.
      </div>
    `;
  } else {
    alternativesResult.innerHTML = alternatives
      .map(item => createCounterCard(item))
      .join("");
  }

  document.getElementById("counterResults").classList.remove("hidden");

  document.getElementById("chosenChampionInfo").textContent =
    "Item önerilerini görmek için yukarıdaki şampiyonlardan birini seç.";

  document.getElementById("itemRecommendations").innerHTML = "";

  bindChampionSelection();
}

function bindChampionSelection() {
  document.querySelectorAll("[data-select-champ]").forEach(button => {
    button.addEventListener("click", () => {
      const champ = getChampion(button.dataset.selectChamp);

      if (champ) {
        showItemRecommendations(champ);
      }
    });
  });
}

document.getElementById("counterButton").addEventListener("click", showCounterResults);

// =====================================================
// ITEM RECOMMENDATIONS
// =====================================================

function getCoreItemDirections(champ) {
  if (champ.classes.includes("Nişancı")) {
    return [
      "Saldırı gücü veya kritik odaklı eşya",
      "Saldırı hızı ihtiyacına uygun eşya",
      "Duruma göre zırh delme veya savunma"
    ];
  }

  if (champ.classes.includes("Suikastçı")) {
    return [
      "Hasar türüne uygun delme eşyası",
      "Ani hasarı destekleyen eşya",
      "Duruma göre savunma veya hareketlilik"
    ];
  }

  if (champ.classes.includes("Büyücü")) {
    return [
      "Yetenek gücü odaklı eşya",
      "Büyü nüfuzu",
      "Mana veya bekleme süresi ihtiyacına uygun eşya"
    ];
  }

  if (champ.classes.includes("Tank")) {
    return [
      "Can ve dayanıklılık sağlayan eşya",
      "Rakibin hasar türüne uygun savunma",
      "Takım savaşında dayanıklılık sağlayan eşya"
    ];
  }

  if (champ.classes.includes("Destek")) {
    return [
      "Destek rolüne uygun ekonomi eşyası",
      "Takımını korumaya yönelik eşya",
      "Rakip takımın tehditlerine göre savunma"
    ];
  }

  return [
    "Şampiyonun hasar türüne uygun temel eşya",
    "Saldırı veya yetenek gücü odaklı eşya",
    "Duruma göre savunma eşyası"
  ];
}

function getSituationalItems(enemy) {
  const suggestions = [];

  if (enemy.threats.includes("sustain")) {
    suggestions.push({
      name: "İyileştirme azaltma",
      reason: "Rakibin iyileşme ve can yenileme etkilerine karşı."
    });
  }

  if (enemy.threats.includes("physical")) {
    suggestions.push({
      name: "Zırh / fiziksel hasar azaltma",
      reason: "Rakibin fiziksel hasarına karşı savunma için."
    });
  }

  if (enemy.threats.includes("magic")) {
    suggestions.push({
      name: "Büyü direnci",
      reason: "Rakibin büyü hasarına karşı savunma için."
    });
  }

  if (enemy.threats.includes("tank")) {
    suggestions.push({
      name: "Tanklara karşı hasar",
      reason: "Yüksek can ve dayanıklılığa sahip rakiplere karşı."
    });
  }

  if (enemy.threats.includes("ranged")) {
    suggestions.push({
      name: "Menzilli rakibe karşı savunma",
      reason: "Uzak mesafeden gelen sürekli hasara karşı."
    });
  }

  return suggestions;
}

function showItemRecommendations(champ) {
  const info = document.getElementById("chosenChampionInfo");
  const output = document.getElementById("itemRecommendations");

  info.innerHTML = `
    <strong>${escapeHTML(champ.name)}</strong>
    <span> — ${escapeHTML(getLaneName(counterLane))}</span>
    <p class="muted">Rakip: ${escapeHTML(selectedEnemy.name)}</p>
  `;

  const coreItems = getCoreItemDirections(champ);
  const situationalItems = getSituationalItems(selectedEnemy);

  output.innerHTML = `
    <div class="item-block">
      <h4>Temel Item Yönü</h4>
      <div class="item-list">
        ${coreItems.map(item => `
          <span class="item-tag">${escapeHTML(item)}</span>
        `).join("")}
      </div>
      <p class="item-note">
        Bunlar sabit bir altılı dizilim değil, şampiyonun rolüne göre
        değerlendirilmesi gereken item yönlendirmeleridir.
      </p>
    </div>

    <div class="item-block">
      <h4>Rakibe Karşı Durumsal Item'ler</h4>
      ${
        situationalItems.length
          ? `
            <div class="item-list">
              ${situationalItems.map(item => `
                <span class="item-tag">${escapeHTML(item.name)}</span>
              `).join("")}
            </div>
            ${situationalItems.map(item => `
              <p class="item-note">${escapeHTML(item.reason)}</p>
            `).join("")}
          `
          : `
            <p class="muted">
              Bu rakip için tanımlanmış özel bir durumsal item ihtiyacı bulunmuyor.
            </p>
          `
      }
    </div>
  `;
}

// =====================================================
// INITIALIZE
// =====================================================

function initializeApp() {
  initPoolLaneButtons();

  renderChoiceButtons(
    "classChoices",
    Object.values(CLASS_NAMES),
    poolSelectedClasses,
    handleClassSelection
  );

  renderChoiceButtons(
    "styleChoices",
    Object.values(STYLE_NAMES),
    poolSelectedStyles,
    handleStyleSelection
  );

  renderMainPool();

  initCounterLaneButtons();
  renderEnemyList();

  console.log("Wild Rift şampiyon sayısı:", CHAMPIONS.length);
}

initializeApp();
