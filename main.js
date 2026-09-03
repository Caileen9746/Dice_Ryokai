const DiceBox = window["dice-box-threejs"];

const diceBox = new DiceBox("#dice-container", {
  assetPath: "./assets/",
  theme_material: "wood",
  theme_customColorset: {
    background: "#588BFC", //dé
    foreground: "#E6C13C", //chiffres
    //outline: "black",
    texture: "stars"
  },
  sounds: false,
  shadows: true,
  baseScale: 250
});

const pablo = new DiceBox("#dice-container", {
 assetPath: "./assets/",
  theme_material: "plastic",
  theme_customColorset: {
    background: "#588BFC", //dé
    foreground: "#E6C13C", //chiffres
    //outline: "black",
    texture: "none"
  },
  sounds: false,
  shadows: true,
  baseScale: 200
});

diceBox.initialize().then(() => {
  console.log("🎲 Initialisé !");
  diceBox.roll("1d100"); // CUGZBETWGBZIKIE
  pablo.roll("1d10"); // CUGZBETWGBZIKIE
});