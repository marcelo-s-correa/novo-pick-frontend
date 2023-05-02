<template>
  <div
    class="character"
    :style="{ top: position.y + 'px', left: position.x + 'px' }"
  >
    <img src="@/assets/images/game/character.png" alt="Character" />
  </div>
</template>

<script>
export default {
  name: "GameCharacter",
  props: ["position"],
};
</script>

<style>
.character {
  position: absolute;
  width: 60px;
  height: 80px;
}

.character img {
  width: 100%;
  height: 100%;
}
</style>
