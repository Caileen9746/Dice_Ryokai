const DiceBox = window["dice-box-threejs"];

const diceBox = new DiceBox("#dice-container", {
  assetPath: "./assets/",
  theme_material: "wood",
  theme_customColorset: {
    background: "#FAB45F", //dé
    foreground: "#3375FF", //chiffres
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