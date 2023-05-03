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
        <td class="table-data">{{ item.title }}</td>
        <td class="table-id">{{ item.description }}</td>
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
  methods: {
    updateUser(id) {
      if (id) {
        this.$router.push(`/admin/theme/${id}`);
      }
    },
    deleteUser(id) {
      Swal.fire({
        title: "Tem certeza?",
        text: "Você deseja excluir este Tema?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sim",
        cancelButtonText: "Não",
      }).then((result) => {
        if (result.isConfirmed) {
          api
            .delete(`/themes/${id}`)
            .then((response) => {
              if (response.status === 200) {
                Swal.fire("Tema excluído com sucesso!", "", "success");
              }
            })
            .catch((error) => {
              console.log(error);
            });
          Swal.fire("Excluído!", "Tema deletado com sucesso !", "success");
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire("Cancelado", "Seu item não foi excluído.", "error");
        }
      });
    },
  },
};
</script>

<style scoped src="@/styles/components/DataTable.css"></style>
