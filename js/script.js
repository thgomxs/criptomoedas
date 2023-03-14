import ScrollSmooth from './modules/scroll-smooth.js';
import initAccordion from './modules/accordion.js';
import initScrollAnimation from './modules/scroll-animation.js';
import initTabNav from './modules/tabnav.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFetchCriptos from './modules/fetch-criptos.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';
import initFuncionamento from './modules/funcionamento.js';

const scrollSmooth = new ScrollSmooth('[data-menu="smooth"] a[href^="#"]');
scrollSmooth.init();

initTabNav();
initScrollAnimation();
initAccordion();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFetchCriptos();
initFetchBitcoin();
initFuncionamento();
