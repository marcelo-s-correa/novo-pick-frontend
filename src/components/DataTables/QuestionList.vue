<template>
  <thead>
    <tr>
      <th>id</th>
      <th>nome completo</th>
      <th>cidade</th>
      <th>estado</th>
      <th>pontuação</th>
      <th>editar</th>
      <th>deletar</th>
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
  name: "QuestionList",
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
