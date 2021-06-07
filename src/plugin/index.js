import stToast from './toast.vue'
import stPanel from './panel.vue'
import stSailItem from './stSailItem.vue'

let test = {}
test.install = function (Vue) {
  Vue.prototype.$msg = '@ Copyright 2004-2016 Starnet Telecom std.'
  Vue.prototype.$myMethod = function (arr) {
    return console.log(arr);
  }
  Vue.component(stPanel.name, stPanel) // stPanel.name 组件的name属性
  Vue.component(stToast.name, stToast) // stPanel.name 组件的name属性
  Vue.component(stSailItem.name, stSailItem) //stSailItem.name 组件的name属性
}
export default test