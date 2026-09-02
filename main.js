const DiceBox = window["dice-box-threejs"];

const diceBox = new DiceBox("#dice-container", {
  assetPath: "./assets/",
  theme_material: "none",
  theme_customColorset: {
    background: "#7B9AED", //dé
    foreground: "#0D2157", //chiffres
    //outline: "black",
    texture: "wood"
  },
  sounds: false,
  shadows: true,
  baseScale: 100
});

diceBox.initialize().then(() => {
  console.log("🎲 Initialisé !");
  diceBox.roll("1d20");
});