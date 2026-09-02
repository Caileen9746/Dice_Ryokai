const DiceBox = window["dice-box-threejs"];

const diceBox = new DiceBox("#dice-container", {
  assetPath: "./assets/",   // dossier PARENT de sounds/ et textures/
  theme_texture: "cloudy",
  theme_material: "glass",   // astral fonctionne mieux avec "none" (voir texturelist.js)
  theme_colorset: "starynight",
  sounds: true,
  volume: 80,
  sound_dieMaterial: "plastic", // astral fonctionne mieux avec "none" (voir texturelist.js)
  shadows : true,
  baseScale : 400
});

diceBox.initialize().then(() => {
  console.log("🎲 Initialisé !");
  diceBox.roll("1d20");
});