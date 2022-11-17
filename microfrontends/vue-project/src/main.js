import App from './App.ce.vue'


import { defineCustomElement } from 'vue'

const MyVueElement = defineCustomElement(App)

customElements.define('my-vue-element', MyVueElement)
