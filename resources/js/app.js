import { createApp } from 'vue';
import Header from './components/Header.vue';
import BootstrapVueNext from 'bootstrap-vue-next';

// Importar estilos de Bootstrap y BootstrapVueNext
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';

// Crear la aplicación Vue
const app = createApp({});

// Usar BootstrapVueNext
app.use(BootstrapVueNext);

// Registrar componentes
app.component('header-component', Header);

// Montar la aplicación
app.mount('#app');
