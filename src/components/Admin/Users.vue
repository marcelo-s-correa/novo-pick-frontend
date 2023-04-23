<template>
  <div class="list-content">
    <UsersList v-bind:data="userList" />
  </div>
</template>

<script>
import UsersList from "@/components/DataTables/UserList.vue";

export default {
  name: "ThemesPage",
  components: {
    UsersList,
  },
  data() {
    return {
      pageTitle: "Usuários | Pick ",
      userList: [
        {
          id: 1,
          nome: "Marcelo S. Corrêa",
          username: "marcelo",
          nascimento: "03/01/2001",
          genero: "Masculino",
          cidade: "Volta Redonda",
          estado: "RJ",
          isAdmin: true,
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
