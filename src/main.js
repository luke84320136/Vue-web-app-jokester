import Vue from 'vue'
import App from './components/App.vue'
import store from './store' //不是打index.js，因自動預設檔為index.js

new Vue({
  el:'#app',
  store,
  render: h => h(App)
})
