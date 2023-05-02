<template>
  <div class="game">
    <div id="map" class="background">
      <svg
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
      >
        <rect
          x="0"
          y="0"
          width="700"
          height="160"
          style="fill: red; opacity: 0.5"
        ></rect>
        <rect
          x="0"
          y="0"
          width="160"
          height="800"
          style="fill: red; opacity: 0.5"
        ></rect>
        <rect
          x="670"
          y="0"
          width="160"
          height="800"
          style="fill: red; opacity: 0.5"
        ></rect>
        <rect
          x="100"
          y="550"
          width="180"
          height="300"
          style="fill: blue; opacity: 0.5"
        ></rect>
        <rect
          x="530"
          y="550"
          width="180"
          height="300"
          style="fill: blue; opacity: 0.5"
        ></rect>
      </svg>
    </div>
    <GameCharacter :position="position" />
  </div>
</template>

<script>
import GameCharacter from "@/components/Game/GameCharacter.vue";

export default {
  name: "GameMap",
  components: {
    GameCharacter,
  },
  data() {
    return {
      position: { x: 380, y: 660 },
    };
  },
  methods: {
    move(direction) {
      if (direction === "up") {
        this.position.y -= 10;
      } else if (direction === "down") {
        this.position.y += 10;
      } else if (direction === "left") {
        this.position.x -= 10;
      } else if (direction === "right") {
        this.position.x += 10;
      }
    },
    checkCollision() {},
  },
  mounted() {
    window.addEventListener("keydown", (event) => {
      if (event.key === "ArrowUp") {
        this.move("up");
      } else if (event.key === "ArrowDown") {
        this.move("down");
      } else if (event.key === "ArrowLeft") {
        this.move("left");
      } else if (event.key === "ArrowRight") {
        this.move("right");
      }

      this.checkCollision();
    });
  },
};
</script>

<style>
.game {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 800px;
  height: 800px;
  border: 14px solid rgba(61, 61, 61, 0.8);
  border-radius: 18px;
}

.background {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(@/assets/images/game/background.png);
  background-size: cover;
}
</style>
