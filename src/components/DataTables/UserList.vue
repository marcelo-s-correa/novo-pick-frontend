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
        <td class="table-data">
          <v-btn @click="updateUser(item.id)" type="button" color="blue"
            >Editar</v-btn
          >
        </td>
        <td class="table-data">
          <v-btn @click="deleteUser(item.id)" type="button" color="red"
            >Deletar</v-btn
          >
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import api from "@/services/api";
import Swal from "sweetalert2";

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
  methods: {
    updateUser(id) {
      if (id) {
        this.$router.push(`/admin/user/${id}`);
      }
    },
    deleteUser(id) {
      Swal.fire({
        title: "Tem certeza?",
        text: "Você deseja excluir este usuário?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sim",
        cancelButtonText: "Não",
      }).then((result) => {
        if (result.isConfirmed) {
          api
            .delete(`/users/${id}`)
            .then((response) => {
              if (response.status === 200) {
                Swal.fire("Usuário excluído com sucesso!", "", "success");
              }
            })
            .catch((error) => {
              console.log(error);
            });
          Swal.fire("Excluído!", "Usuário deletado com sucesso !", "success");
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire("Cancelado", "Seu item não foi excluído.", "error");
        }
      });
      this.$forceUpdate();
    },
  },
};
</script>

<style scoped src="@/styles/components/DataTable.css"></style>
