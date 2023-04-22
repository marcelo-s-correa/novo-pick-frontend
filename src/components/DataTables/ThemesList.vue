<template>
  <thead>
    <tr>
      <th>#</th>
      <th>Nome</th>
      <th>Dificuldade</th>
      <th>Editar</th>
      <th>Deletar</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item, index) in data" :key="index">
      <td>{{ item.id }}</td>
      <td>{{ item.nome }}</td>
      <td>{{ item.dificuldade }}</td>
      <td><i class="fa fa-pencil"></i></td>
      <td><i class="fa fa-trash"></i></td>
    </tr>
  </tbody>
</template>

<script>
export default {
  name: "ThemesList",
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
