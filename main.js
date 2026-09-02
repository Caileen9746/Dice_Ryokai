const DiceBox = window["dice-box-threejs"];

const diceBox = new DiceBox("#dice-container", {
  assetPath: "./assets/",
  theme_material: "metal",
  theme_customColorset: {
    background: "#9DE1FC",
    foreground: "#0D2157",
    outline: "black",
    texture: "astral"
  },
  sounds: false,
  shadows: true,
  baseScale: 100
});

diceBox.initialize().then(() => {
  console.log("🎲 Initialisé !");
  diceBox.roll("1d20");
});