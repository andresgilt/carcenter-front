<template>
  <nav>
    <router-link to="/">Listar Mecanico</router-link>|
    <router-link to="/about">Agregar Mecanico</router-link>
  </nav>
  <router-view/>
</template>

<script>

export default {
  name:'App',
};
</script>
