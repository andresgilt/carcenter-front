<template>
  <div class="about">
    <div class="container-fluid margin">
      <Form>
        <div class="login-form ">
          <div class="elemento">
            <p>tipoDocumento:</p>
            <InputText name="nombre" id="Nombre" v-model="mecanico.tipoDocumento" type="text" required="required" />
          </div>
          <div class="elemento">
            <p>documento</p>
            <InputText name="nombre" id="Nombre" v-model="mecanico.documento" type="text" required />
          </div>
          <div class="elemento">
            <p>primerNombre</p>
            <InputText name="nombre" id="Nombre" v-model="mecanico.primerNombre" type="text" required />
          </div>
          <div class="elemento">
            <p>segundoNombre</p>
            <InputText name="nombre" id="Nombre" v-model="mecanico.segundoNombre" type="text" required />
          </div>
          <div class="elemento">
            <p>primerApellido</p>
            <InputText name="nombre" id="Nombre" v-model="mecanico.primerApellido" type="text" required />
          </div>
          <div class="elemento">
            <p>segundoApellido</p>
            <InputText name="nombre" id="Nombre" v-model="mecanico.segundoApellido" type="text" required />
          </div>
          <div class="elemento">
            <p>celular</p>
            <InputText name="nombre" id="Nombre" v-model="mecanico.celular" type="text" required />
          </div>
          <div class="elemento">
            <p>direccion</p>
            <InputText name="nombre" id="Nombre" v-model="mecanico.direccion" type="text" required />
          </div>
          <div class="elemento">
            <p>email</p>
            <InputText name="nombre" id="Nombre" v-model="mecanico.email" type="text" required />
          </div>
        </div>
        <div class="footer-login" style="padding-top: 10px">
          <Button label="Submit" @click="crearRegistro(mecanico)"/>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
import UserService from "../services/user.service";
export default {
  name: 'AboutView',
  data() {
    return {
      mecanico: {
        tipoDocumento: "",
        documento: "",
        primerNombre: "",
        segundoNombre: "",
        primerApellido: "",
        segundoApellido: "",
        celular: "",
        direccion: "",
        email: ""
      }
    }
  },
  methods: {
    crearRegistro(mecanico) {
      UserService.newMecanico(mecanico).then(
          (response) => {
            this.message = response.data;
            console.log(this.message)
          },
          (error) => {
            this.message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
          });
    }
  }
}

</script>
