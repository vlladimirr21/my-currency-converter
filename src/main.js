import App from './App.svelte'
import CurrencyConverter from './CurrencyConverter.svelte'
import './global.css'

const app = new App({
  target: document.body,
  props: {},
})

const currencyConverter = new CurrencyConverter({
  target: document.body,
  props: {},
})
