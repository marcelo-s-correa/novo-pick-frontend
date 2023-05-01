<template>
  <div class="game">
    <div class="background"></div>
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
      position: { x: 0, y: 0 },
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
    checkCollision() {
      if (this.position.x < 0) {
        this.position.x = 0;
      } else if (this.position.x > 100) {
        this.position.x = 100;
      }
      if (this.position.y < 0) {
        this.position.y = 0;
      } else if (this.position.y > 100) {
        this.position.y = 100;
      }
    },
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
  position: relative;
  width: 800px;
  height: 600px;
}

.background {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(@/assets/images/game/background.jpeg);
  background-size: cover;
}
</style>
