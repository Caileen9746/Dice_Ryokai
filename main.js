const DiceBox = window["dice-box-threejs"];

const diceBox = new DiceBox("#dice-container", {
  assetPath: "./assets/",   // dossier PARENT de sounds/ et textures/
  theme_texture: "glitter",
  theme_material: "none",   // astral fonctionne mieux avec "none" (voir texturelist.js)
  theme_colorset: "blue",
  sounds: true,
  volume: 80
  sound_dieMaterial : "wood",  // astral fonctionne mieux avec "none" (voir texturelist.js)
});

diceBox.initialize().then(() => {
  console.log("🎲 Initialisé !");
  diceBox.roll("1d20");
});