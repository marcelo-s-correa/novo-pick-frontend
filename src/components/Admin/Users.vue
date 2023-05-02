<template>
  <div class="list-content">
    <v-btn class="add-new" color="primary" @click="navNewUser">
      Adicionar Usuário
    </v-btn>
    <UsersList v-bind:data="userList" />
  </div>
</template>

<script>
import UsersList from "@/components/DataTables/UserList.vue";
import api from "@/services/api";

export default {
  name: "ThemesPage",
  components: {
    UsersList,
  },
  data() {
    return {
      pageTitle: "Usuários | Pick ",
      userList: null,
    };
  },
  methods: {
    async getUsers() {
      const response = await api.get("/users");
      this.userList = response.data;
    },
    navNewUser() {
      this.$router.push("/admin/user");
    },
  },
  mounted() {
    document.title = this.pageTitle;
    this.getUsers();
  },
};
</script>

<style>
.list-content {
  padding: 64px;
}
</style>
