import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

// debug
// document.addEventListener('click', ({clientX, clientY}) => {
//   console.table({clientX, clientY});
// })
document.addEventListener('click', (e) => {
  // console.table(e);
  const {offsetX, offsetY} = e;
  console.table({offsetX, offsetY});
})

