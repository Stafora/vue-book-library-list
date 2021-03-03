<template>
    <footer class="footer">
        <div class="wrapper">
            © {{ getStartExampleProject }} - {{ getCurrentDate }}, Все права защищены!
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'Footer',
        data() {
            return {
                
            }
        },
        computed: {
            getStartExampleProject: function() {
                let date = new Date('02.03.2021');
                let options = {  year: 'numeric' };
                return new Intl.DateTimeFormat('ru-RU', options).format(date);
            },
            getCurrentDate: function() {
                let date = new Date();
                let options = {  year: 'numeric' };
                return new Intl.DateTimeFormat('ru-RU', options).format(date);
            }
        }
    }
</script>

<style lang="scss">
    .footer{
        background-color: #dfe3eb;
        text-align: center;
        padding: 40px 0px;
        color: #666;
        margin-top: auto;
    }
</style>