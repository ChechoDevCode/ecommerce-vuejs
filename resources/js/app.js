import { createApp } from 'vue';
import Header from './components/Header.vue';
import BootstrapVueNext from 'bootstrap-vue-next';

// Importar estilos de Bootstrap y BootstrapVueNext
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Crear la aplicación Vue
const app = createApp({});

// Usar BootstrapVueNext
app.use(BootstrapVueNext);

// Registrar componentes
app.component('header-component', Header);

// Montar la aplicación
app.mount('#app');
