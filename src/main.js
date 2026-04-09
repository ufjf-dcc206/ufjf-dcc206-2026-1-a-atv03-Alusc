import './style.css'
import { setupCounter } from './counter.js'
import { setupRootApp } from './setupRootApp.js'

document.querySelector('#app').innerHTML = setupRootApp();



setupCounter(document.querySelector('#counter'))
