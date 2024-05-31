import { createApp } from 'vue';
import Header from './components/Header.vue';
import Carrousel from './components/Carrousel.vue';
import BootstrapVueNext from 'bootstrap-vue-next';

// Importar estilos de Bootstrap y BootstrapVueNext
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';


// Crear la aplicación Vue
const app = createApp({});

// Usar BootstrapVueNext
app.use(BootstrapVueNext);

// Registrar componentes
app.component('header-component', Header);
app.component('carrousel-component', Carrousel);

// Montar la aplicación
app.mount('#app');
