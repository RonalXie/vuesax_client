<template>
    <div class="home">
        <vs-row>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" lg="12" sm="12" xs="12">
                <ContentHead/>
            </vs-col>
        </vs-row>
        <hr/>
        <div>
            <vs-row>
                <vs-col :key="index" v-for="index in 10" vs-type="flex" vs-justify="center" vs-align="center" lg="4"
                        sm="6" xs="12">
                    <ArticleCard/>
                </vs-col>
            </vs-row>
        </div>
        <div class="page_line">
            <div class="center con-pagination">
                <vs-pagination  v-model="page" :length="100" />
            </div>
        </div>
        <hr/>
    </div>
</template>

<script>


import ContentHead from "@/components/home/ContentHead.vue";
import ArticleCard from "@/components/home/ArticleCard.vue";

export default {
    name: 'HomeView',
    components: {
        ArticleCard,
        ContentHead

    },
    data(){
        return{
            page:1
        }
    }
}
</script>

<style>

</style>
