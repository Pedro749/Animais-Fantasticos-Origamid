import TabNav from './modules/tabNav.js';
import Accordion from './modules/accordion.js';
import ScrollSuave from './modules/scroll-suave.js';
import AnimacaoScroll from './modules/scroll-animation.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import DropDownMenu from './modules/dropdown-menu.js';
import MenuMobile from './modules/menu-mobile.js';
import fetchAnimais from './modules/fetch-animais.js';
import Funcionamento from './modules/funcionamento.js';
import SlideNav from './modules/slide-nav.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tootip = new Tooltip('[data-tooltip]');
tootip.init();

const animacaoScroll = new AnimacaoScroll('[data-anime="scroll"]');
animacaoScroll.init();

const dropdownMenu = new DropDownMenu('[data-dropdown]');
dropdownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const funcionamento = new Funcionamento('[data-semana]');
funcionamento.init();

fetchAnimais('./animaisapi.json', '.numeros-grid');

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
slide.addControl('.custom-controls');
