import axios from 'axios';
const API_URL = 'http://localhost:8080/carcenter/';

class UserService{

  getMecanicos() {
    return axios.get(API_URL + 'mecanicos');
  }
  newMecanico(mecanico) {
    return axios.post(API_URL + 'mecanicos', {
      tipoDocumento: mecanico.tipoDocumento,
      documento:mecanico.documento,
      primerNombre:mecanico.primerNombre,
      segundoNombre:mecanico.segundoNombre,
      primerApellido:mecanico.primerApellido,
      segundoApellido:mecanico.segundoApellido,
      celular:mecanico.celular,
      direccion:mecanico.direccion,
      email:mecanico.email,
    })
  }

}

export default new UserService();

