<template>
    <router-link :to="'/catalog/'+item.id" class="catalog-item">
        <div class="catalog-item__title">{{ item.name }}</div>
        <div class="catalog-item__address">Адрес: {{ item.address.address }}</div>
        <div class="catalog-item__rayon">Район: {{ item.locale.name }}</div>

        <div class="catalog-item-tags" v-if="item.tags">
            <div class="catalog-item__tags_title">Теги: </div>
            <div class="catalog-item-tags__item" v-for="(tag, index) in item.tags" v-bind:key="index">{{ tag.name }}</div>
        </div>
    </router-link>
</template>

<script>
    export default {
        name: 'CatalogItem',
        props: {
            item: {
                type: Object,
            }
        },
    }
</script>

<style lang="scss">
    .catalog-item{
        width: 48%;
        text-align: left;
        background-color: #f6f8fa;
        padding: 20px;
        margin-bottom: 20px;
        text-decoration: none;
        color: #212121;

        @media(max-width: 900px){
            width: 100%;
        }

        &__title{
            font-size: 16px;
            margin-bottom: 10px;
            color: #41579e;
            font-weight: 700;
        }
        &__address{
            font-size: 14px;
            margin-bottom: 5px;
        }
        &__rayon{
            font-size: 14px;
            margin-bottom: 5px;
        }
        &__tags_title{
            font-size: 12px;
            margin-top: 3px;
            margin-right: 10px;;
        }
        &-tags{
            display: flex;
            flex-wrap: wrap;
            padding: 0px;
            margin: 0px;
            width: calc(100% - 40px);
            margin-top: 10px;
            
            &__item{
                height: 20px;
                display: flex;
                align-items: center;
                padding: 4px 10px;
                background: #41579e;
                font-size: 12px;
                color: #fff;
                margin-right: 5px;
                margin-bottom: 5px;
            }
        }
    }
</style>