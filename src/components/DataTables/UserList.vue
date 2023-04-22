<template>
  <thead>
    <tr>
      <th>#</th>
      <th>Nome completo</th>
      <th>Cidade</th>
      <th>Estado</th>
      <th>Pontuação</th>
      <th>Editar</th>
      <th>Deletar</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item, index) in data" :key="index">
      <td>{{ item.id }}</td>
      <td>{{ item.nome }}</td>
      <td>{{ item.cidade }}</td>
      <td>{{ item.estado }}</td>
      <td>{{ item.pontuacao }}</td>
      <td><i class="fa fa-pencil"></i></td>
      <td><i class="fa fa-trash"></i></td>
    </tr>
  </tbody>
</template>

<script>
export default {
  name: "UserList",
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  components: {},
  data() {
    return {};
  },
};
</script>

<style></style>
