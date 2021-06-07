<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
    <ul>
      <button @click="callFunc"> toast </button>
      <button @click="showKeyBoard()"> key board </button>
    </ul>
    <ul>
      <st-panel ref='panel' :class='{showBoard : isKeyBoard}'></st-panel>
      <st-toast ref='toast'></st-toast>
    </ul>

    <stSailItem :info='info'></stSailItem>
  </div>
</template>

<script>
export default {
  name: 'stTest',
  props: {
    msg: String
  },
  data(){
    return {
      isKeyBoard:false,
      info:{img:"https://www.apple.com/v/mac/home/be/images/overview/compare/compare_mbp16__fykfvftfaeuu_small_2x.png", 
        title:'macbook', 
        subtitle:'14400元起',
      },
    }
  },
  created(){
    console.log(this.$myMethod([1,2,6]));
  },
  methods:{
    callFunc(){
      this.$nextTick(()=>{
        this.$refs.toast.toastPlugin('触发事件toast', 2500);
      })
    },
    showKeyBoard(){
      this.$nextTick(()=>{
        this.isKeyBoard = !this.isKeyBoard;
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.showBoard{
  display: none;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
