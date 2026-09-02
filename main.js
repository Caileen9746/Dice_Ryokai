const DiceBox = window["dice-box-threejs"];

const diceBox = new DiceBox("#dice-container", {
  assetPath: "./assets/",   // dossier PARENT de sounds/ et textures/
  theme_texture: "water",
  theme_material: "metal",   // astral fonctionne mieux avec "none" (voir texturelist.js)
  theme_colorset: "water",
  sounds: true,
  volume: 80
});

diceBox.initialize().then(() => {
  console.log("🎲 Initialisé !");
  diceBox.roll("1d20");
});