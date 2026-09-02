const DiceBox = window["dice-box-threejs"];

const diceBox = new DiceBox("#dice-container", {
  assetPath: "./assets/",   // dossier PARENT de sounds/ et textures/
  //theme_texture: "astral",
  //theme_colorset: "coin_default",
  theme_material: "metal",   // astral fonctionne mieux avec "none" (voir texturelist.js)
  theme_customColorset: {
    background: "#9DE1FC",   // couleur du dé
    foreground: "#0D2157",   // couleur des chiffres
    outline: "black",         // couleur du contour (optionnel, peut être "none")
    texture: "cloudy"          // texture appliquée par-dessus
  },
  sounds: true,
  volume: 80,
  sound_dieMaterial: "plastic", // astral fonctionne mieux avec "none" (voir texturelist.js)
  shadows : true,
  baseScale : 100
});

diceBox.initialize().then(() => {
  console.log("🎲 Initialisé !");
  diceBox.roll("1d20");
});