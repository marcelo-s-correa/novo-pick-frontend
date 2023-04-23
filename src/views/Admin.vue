<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.route">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Administração | Pick</v-toolbar-title>
    </v-app-bar>

    <v-content
      app
      :style="{
        marginTop: '64px',
        marginLeft: drawer ? '255px' : '0px',
        flex: 1,
      }"
    >
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "AppAdmin",
  data() {
    return {
      drawer: false,
      items: [
        { title: "Dashboard", icon: "mdi-home", route: "/admin" },
        { title: "Usuários", icon: "mdi-home", route: "/admin/users" },
        { title: "Temas", icon: "mdi-cart", route: "/admin/themes/" },
        { title: "Perguntas", icon: "mdi-email", route: "/admin/questions" },
      ],
    };
  },
};
</script>
