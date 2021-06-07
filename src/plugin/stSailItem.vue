<template>
  <div class="st-sail-item">
    <div class="imgbox">
      <img :src="info.img">
    </div>
    <p class="title">{{info.title}}</p>
    <p class="subtitle">{{info.subtitle}}</p>
  </div>
</template>

<script>
export default {
  name: 'stSailItem',
  props: {
    info: Object,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.st-sail-item{
  width: 3.5rem;
  height: 4.5rem;
  margin-left: .25rem;
  background-color: #EEEEEE;
}
.imgbox{
  width: 100%;
  height: 3.5rem;
  overflow: hidden;
}
.imgbox img{
  width: 100%;
}
p{
  padding-left: .2rem;
}
.title{
  width: 100%;
  text-align: left;
}
.subtitle{
  width: 100%;
  text-align: left;
}
</style>
