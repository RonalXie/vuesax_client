<template>
    <div class="center examplex">
        <vs-navbar shadow-scroll center-collapsed fixed v-model="active">
            <template #left>
                <!--        <img src="@/assets/logo2.png" alt="">-->
                <h3>RonalXie' Blog</h3>
            </template>
            <vs-navbar-item :active="active == 'guide'" id="guide">
                Home
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'docs'" id="docs">
                Documents
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'components'" id="components">
                图库
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'license'" id="license">
                license
            </vs-navbar-item>
            <template #right>
                <vs-input placeholder="Search" type="search">
                    <template #icon>
                        <i class='bx bx-search' ></i>
                    </template>
                </vs-input>


                <LoginCard/>
<!--                <vs-avatar circle>-->
<!--                    <img src="https://vuesax.com/avatars/avatar-1.png" alt="">-->
<!--                </vs-avatar>-->
            </template>
        </vs-navbar>
    </div>
</template>
<script>
import LoginCard from "@/components/navbar/LoginCard.vue";

export default {
    components: {LoginCard},
    data: () => ({
        active: 'guide'
    })
}
</script>

