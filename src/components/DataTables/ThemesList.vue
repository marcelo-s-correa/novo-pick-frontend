<template>
  <table>
    <thead>
      <tr>
        <th class="table-header">Id</th>
        <th class="table-header">Titulo</th>
        <th class="table-header">Descrição</th>
        <th class="table-header">Editar</th>
        <th class="table-header">Deletar</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in data" :key="index">
        <td class="table-id">{{ item.id }}</td>
        <td class="table-data">{{ item.titulo }}</td>
        <td class="table-id">{{ item.descricao }}</td>
        <td class="table-data"><i class="fa fa-pencil table-icon"></i></td>
        <td class="table-data"><i class="fa fa-trash table-icon"></i></td>
      </tr>
    </tbody>
  </table>
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

<style scoped src="@/styles/components/DataTable.css"></style>
