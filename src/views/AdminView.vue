<template>
    <div >
        <vs-row align="center" justify="center">
            <vs-col w="8">
                <div style="
                border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.09);

">
                    <vs-row>
                        <vs-col w="2">
                            <div style="border-right: 2px solid #EEF2F5;padding: 10px">
                                <vs-button
                                    flat
                                    success
                                    :active="active == 0"
                                    @click="goPage('/admin/user/center');active=0"
                                >
                                    个人中心
                                </vs-button>
                                <vs-button
                                    flat
                                    success
                                    :active="active == 1"
                                    @click="goPage('/admin/edit/article');active=1"

                                >
                                    创作文章
                                </vs-button>

                                <vs-button
                                    flat
                                    success
                                    :active="active == 2"
                                    @click="goPage('/admin/manage/article');active=2"
                                >
                                    文章管理
                                </vs-button>
                                <vs-button
                                    flat
                                    :active="active == 3"
                                    success
                                    @click="goPage('/admin/manage/picture');active=3"
                                >
                                    图库管理
                                </vs-button>
                            </div>
                        </vs-col>
                        <vs-col w="10">
                            <div style="padding: 20px">
                                <router-view/>
                            </div>
                        </vs-col>
                    </vs-row>

                </div>
            </vs-col>

        </vs-row>
    </div>
</template>

<script>
export default {
    name: "AdminView",
    data(){
        return{
            active:0,
            LocalRoute:this.$route
        }
    },
    methods:{
        goPage(page_path){
            this.$router.push(page_path)

        }
    }
}
</script>

<style scoped>

</style>
