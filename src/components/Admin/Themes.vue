<template>
  <div class="list-content">
    <ThemesList v-bind:data="themesList" />
  </div>
</template>

<script>
import ThemesList from "@/components/DataTables/ThemesList.vue";

export default {
  name: "ThemesPage",
  components: {
    ThemesList,
  },
  data() {
    return {
      pageTitle: "Temas | Pick ",
      themesList: [
        {
          id: 1,
          titulo: "TEMA N°¹",
          descricao: "Este tema é facil",
          dificuldade: "Fácil",
        },
        {
          id: 2,
          titulo: "TEMA N°2",
          descricao: "Este tema é médio",
          dificuldade: "Médio",
        },
      ],
    };
  },
  mounted() {
    document.title = this.pageTitle;
  },
};
</script>

<style>
.list-content {
  padding: 64px;
}
</style>
