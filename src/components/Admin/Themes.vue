<template>
  <div class="list-content">
    <ThemesList v-bind:data="themesList" />
  </div>
</template>

<script>
import ThemesList from "@/components/DataTables/ThemesList.vue";
import api from "@/services/api";

export default {
  name: "ThemesPage",
  components: {
    ThemesList,
  },
  data() {
    return {
      pageTitle: "Temas | Pick ",
      themesList: null,
    };
  },
  methods: {
    async getThemes() {
      const response = await api.get("/themes");
      this.themesList = response.data;
    },
  },
  mounted() {
    this.getThemes();
    document.title = this.pageTitle;
  },
};
</script>

<style>
.list-content {
  padding: 64px;
}
</style>
