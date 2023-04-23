<template>

    <div>
        <vs-row align="center" justify="center">
<!--            <vs-col lg="8" xs="12">-->
<!--                <CoverContent/>-->
<!--            </vs-col>-->
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="4" xs="12">
              <UserCard/>
            </vs-col>
        </vs-row>
    </div>


</template>

<script>
import UserCard from "@/components/home/UserContent.vue";
// import CoverContent from "@/components/home/CoverContent.vue";

export default {
    name: "ContentHead",
    components: { UserCard}
}
</script>

<style>



</style>
