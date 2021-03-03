<template>
  <div class="wrapper">
    
      <h1>Каталог</h1>
      <CatalogList/>

  </div>
</template>

<script>
    import CatalogList from '@/components/catalog/CatalogList.vue'

    export default {
        name: 'Catalog',
        components: {
            CatalogList,
        },
        mounted() {
        }
    }
</script>

<style lang="scss">

</style>
