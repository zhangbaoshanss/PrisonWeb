<template>
  <div id="app">
    <Heade></Heade>
    <Col1Row1></Col1Row1>
    <Col1Row2></Col1Row2>
    <Col2Row1></Col2Row1>
    <Col2Row2></Col2Row2>
    <Col3Row1></Col3Row1>
    <Col3Row2></Col3Row2>
  </div>
</template>

<script>
import Heade from './components/HomePage/Heade.vue'
import Col1Row1 from './components/HomePage/Col1Row1.vue'
import Col1Row2 from './components/HomePage/Col1Row2.vue'
import Col2Row1 from './components/HomePage/Col2Row1.vue'
import Col2Row2 from './components/HomePage/Col2Row2.vue'
import Col3Row1 from './components/HomePage/Col3Row1.vue'
import Col3Row2 from './components/HomePage/Col3Row2.vue'
export default {
  name: 'App',
  components: {
    Heade,
    Col1Row1,
    Col1Row2,
    Col2Row1,
    Col2Row2,
    Col3Row1,
    Col3Row2
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;
  justify-items: space-between;
  align-content: start;
  width: 100vw;
  height: 100vh;
  max-width: 110vw;
  overflow: hidden;
  /* flex-wrap: wrap; */
}
</style>
