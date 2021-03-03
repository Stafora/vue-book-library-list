<template>
  <div id="app">
    
    <Header />

    <div class="section">
      <router-view/>
    </div>

    <Footer />

  </div>
</template>


<script>
  import Header from '@/components/Header'
  import Footer from '@/components/Footer'

  export default {
      name: 'App',
      components: {
          Header, Footer
      },
  }
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  body{
    margin: 0px;
    padding: 0px;
  }
  *{
    box-sizing: border-box;
  }
  .wrapper{
    width: 900px;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding: 0px 15px;
  }
  .section{
    padding: 60px 0px;

    @media(max-width: 1366px){
      padding: 40px 0px;
    }
    @media(max-width: 767px){
      padding: 20px 0px;
    }
  }
</style>
