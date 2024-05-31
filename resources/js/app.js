import { createApp } from 'vue';
import Navbar from './components/Navbar.vue';
import Carrousel from './components/Carrousel.vue';
import BootstrapVueNext from 'bootstrap-vue-next';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Importar estilos de Bootstrap y BootstrapVueNext
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';


// Crear la aplicación Vue
const app = createApp({});

// Usar BootstrapVueNext
app.use(BootstrapVueNext);

// Registrar componentes
app.component('navbar-component', Navbar);
app.component('carrousel-component', Carrousel);

// Montar la aplicación
app.mount('#app');
