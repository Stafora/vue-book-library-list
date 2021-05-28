<template>
    <section class="catalog">

        <div class="sorting">
            <label class="sorting__label" for="filtername">Поиск по названию:</label>
            <input v-model="findName" class="sorting__input" placeholder="Введите название" type="text" />
        </div>

        <div class="sorting">
            <label class="sorting__label" for="filtername">Сортировать:</label>
            <select class="sorting__input" v-model="sorting">
                <option value="">Выберите сортировку</option>
                <option value="data.general.name">По Имени</option>
                <option value="data.general.address.address">По Адресу</option>
                <option value="data.general.locale.name">По Району</option>
            </select>
        </div>

        <div class="catalog-list">
            <CatalogItem 
                v-for="item in filteredItems"
                :key="item._id"
                :item="item.data.general"
            />
        </div>

    </section>
</template>

<script>
    import CatalogItem from '@/components/catalog/CatalogItem.vue'
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: 'CatalogList',
        /**
        * DATA
         */
        data(){
            return{
                findName: '',
                sorting: '',
                tag: '',
            }
        },
        /**
        * MOUNTED
         */
        mounted() {
            this.GET_CATALOG_API();
        },
        /**
        * COMPONENTS
         */
        components: {
            CatalogItem
        },
        /**
         * COMPUTED
         */
        computed: {
            ...mapGetters([
                'CATALOG'
            ]),
            /**
             * @return {Object}
             */
            filteredItems: function() {
                if(this.sorting){
                    this.CATALOG.sort(this.sortModified);
                }
                let filterByName = new RegExp(this.findName, 'i');
                return this.CATALOG.filter(function(item) {
                    return item.data.general.name.match(filterByName);
                });
            },
        },
        /**
         * METHODS
         */
        methods: {
            ...mapActions([
                'GET_CATALOG_API'
            ]),
            /**
             * @param {Object} itemA 
             * @param {Object} itemB
             */
            sortModified(itemA, itemB){
                let objectPath = this.sorting.split('.');
                for(let i=0; i < objectPath.length; i++){
                    itemA = itemA[objectPath[i]];
                }
                for(let i=0; i < objectPath.length; i++){
                    itemB = itemB[objectPath[i]];
                }
                if ( itemA < itemB ){
                    return -1;
                }
                if ( itemA > itemB ){
                    return 1;
                }
                return 0;
            }          
        }
    }
</script>

<style lang="scss">
    .catalog-list{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .sorting{
        margin-bottom: 15px;

        @media(max-width: 767px){
            display: flex;
            flex-direction: column;
        }

        &__label{
            @media(max-width: 767px){
                display: block;
                margin-bottom: 5px;
            }
        }
        &__input{
            border-radius: 10px;
            font-size: 14px;
            color: #212121;
            padding: 0px 15px;
            height: 30px;
            border: 1px solid #41579e;
            margin-left: 10px;
            outline: none;

            @media(max-width: 767px){
                margin-left: 0px;
            }
        }
    }
</style>
