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

diceBox.initialize().then(() => {
  console.log("🎲 Initialisé !");
  diceBox.roll("1d100"); // CUGZBETWGBZIKIE
});