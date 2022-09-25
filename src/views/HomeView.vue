<template>
  <div class="home">
    <div class="container-fluid margin">
      <DataTable :value="mecanicos" :paginator="true" :rows="10">
        <Column :sortable="true" v-for="col of columns" :field="col.field" :header="col.header" :key="col.field"></Column>
      </DataTable>
    </div>
  </div>
</template>

<script>
import UserService from "../services/user.service";
export default {
  name: 'HomeView',
  data() {
    return {
      columns: null,
      mecanicos: ""
    }
  },
  methods:{
    getMecanicos(){
      return UserService.getMecanicos().then(
          (response) => {
          this.mecanicos = response.data
          }
      );
    }
  },
 created () {
    this.columns = [
      {field:'tipoDocumento', header:'tipoDocumento'},
      {field:'documento', header:'documento'},
      {field:'primerNombre', header:'primerNombre'},
      {field:'segundoNombre', header:'segundoNombre'},
      {field:'primerApellido', header:'primerApellido'},
      {field:'segundoApellido', header:'segundoApellido'},
      {field:'celular', header:'celular'},
      {field:'direccion', header:'direccion'},
      {field:'email', header:'email'},
    ];
    this.getMecanicos();

 }
}
</script>
