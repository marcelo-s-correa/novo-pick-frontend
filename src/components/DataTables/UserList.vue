<template>
  <table>
    <thead>
      <tr>
        <th class="table-header">Id</th>
        <th class="table-header">Nome Completo</th>
        <th class="table-header">Nome de usuário</th>
        <th class="table-header">Data de nascimento</th>
        <th class="table-header">Cidade</th>
        <th class="table-header">Estado</th>
        <th class="table-header">Administrador</th>
        <th class="table-header">Pontuação</th>

        <th class="table-header">Editar</th>
        <th class="table-header">Deletar</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in data" :key="index">
        <td class="table-id">{{ item.id }}</td>
        <td class="table-data">{{ item.name }}</td>
        <td class="table-id">{{ item.username }}</td>
        <td class="table-data">{{ item.birthdate }}</td>

        <td class="table-data">{{ item.city }}</td>
        <td class="table-id">{{ item.state }}</td>
        <td class="table-id">{{ item.isAdmin }}</td>
        <td class="table-id">{{ item.points }}</td>
        <td class="table-data"><i class="fa fa-pencil table-icon"></i></td>
        <td class="table-data"><i class="fa fa-trash table-icon"></i></td>
      </tr>
    </tbody>
  </table>
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

<style scoped src="@/styles/components/DataTable.css"></style>
