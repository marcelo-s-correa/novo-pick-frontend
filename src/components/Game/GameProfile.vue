<template>
  <div class="profile">
    <p>{{ profile.name }}</p>
    <p class="username">{{ profile.username }}</p>
    <p class="email">{{ profile.email }}</p>
    <p class="birthdate"></p>
    <p v-if="profile.isAdmin" class="admin">Admin</p>
    <p>City: {{ profile.city }}</p>
    <p>State: {{ profile.state }}</p>
    <p>Points: {{ profile.points }}</p>
  </div>
</template>

<script>
export default {
  name: "GameProfile",
  data: () => {
    return {
      profile: JSON.parse(localStorage.getItem("auth")).auth.user,
    };
  },
};
</script>

<style scoped>
.profile {
  background-color: #f9f9f9;
  padding: 32px;
  border-radius: 12px;
  height: 80%;
  min-width: 400px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.username {
  font-weight: bold;
  color: #555;
}

.email {
  color: #888;
}

.birthdate {
  color: #999;
  margin-bottom: 5px;
}

.admin {
  color: red;
  font-weight: bold;
}

p {
  margin: 5px 0;
}

.created-at,
.updated-at {
  color: #777;
  font-size: 12px;
}
</style>
