<template>
    <section class="catalog">
        <div class="wrapper">

            <h1>{{ item.name }}</h1>

            <div class="catalog-inner">

                <div class="catalog-inner__left">
                    <a :href="item.image.url" target="__blank" class="catalog-inner__image" v-if="item.image">
                        <img :src="item.image.url" alt="">
                    </a>

                    <div class="catalog-inner-gallery" v-if="item.gallery">
                        <a :href="img.url" class="catalog-inner-gallery__item" target="__blank" v-for="(img, index) in item.gallery" v-bind:key="index" :data-index="index">
                            <img :src="img.url" alt="">
                        </a>
                    </div>

                    <div class="catalog-inner__address" v-if="item.address">Адрес: {{ item.address.address }}</div>

                    <div class="catalog-inner__rayon" v-if="item.locale">Район: {{ item.locale.name }}</div>

                    <div class="catalog-inner-tags" v-if="item.tags">
                        <div class="catalog-inner__tags_title">Теги: </div>
                        <div class="catalog-inner-tags__item" v-for="(tag, index) in item.tags" v-bind:key="index">{{ tag.name }}</div>
                    </div>

                    <p v-for="(phone, index) in getContacts()" v-bind:key="index">Телефон: {{ phone.comment }} <a :href="'tel:'+phone.value">{{ phone.value | phone }}</a></p>               
                </div>

                <div class="catalog-inner__right">
                    <div class="catalog-inner__text" v-if="item.description_html" v-html="item.description_html"></div>
                </div>

            </div>

        </div>
    </section>
</template>

<script>
    import { Helper } from '@/helper/helper'
    import { JsonService } from '@/service/JsonService';

    export default {
        name: 'CatalogInner',
        /**
         * DATA
         */
        data(){
            return{
                id: this.$route.params.id,
                item: {},
                gallery: [],
            }
        },
        /**
         * MOUNTED
         */
        mounted() {
            let result = JsonService.getItem(this.id);
            if(result.length){
                this.item = result[0].data.general;
            } else {
                this.$router.push('/404')
            }
        },
        /**
         * METHODS
         */
        methods: {
            /** 
             * @return {String}
             */
            getContacts: function(){
                if(Helper.issetInObject(this.item, 'contacts.phones')){
                    return this.item.contacts.phones;
                }                
            }
        }
    }
</script>

<style lang="scss">
    .catalog-inner{
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: space-between;
        &__left{
            width: 46%;

            @media(max-width: 900px){
                width: 100%;
                margin-bottom: 15px;
            }
        }
        &__right{
            width: 46%;

            @media(max-width: 900px){
                width: 100%;
                margin-bottom: 15px;
            }
        }

        &__image{
            margin-bottom: 15px;

            img{
                max-width: 100%;
            }
        }
        &-gallery{
            display: flex;
            flex-wrap: wrap;
            padding: 15px 0px;
            border-top: 1px solid #eee;
            border-bottom: 1px solid #eee;
            margin-bottom: 15px;


            &__item{
                width: 32%;
                margin-right: 2%;
                display: flex;
                align-items: flex-start;

                &:nth-child(3n + 3){
                    margin-right: 0px;
                }
                img{
                    max-width: 100%;
                }
            }   
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
