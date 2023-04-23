<template>
    <vs-card type="3" class="card_center">
        <template #title>
            <h3>Pot with a plant</h3>
        </template>
        <template #text>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
        </template>
    </vs-card>

</template>

<script>
export default {
    name: "CoverContent"
}
</script>

<style>
.vs-card-content.type-3 .vs-card{
    max-width: 100%;
}
.vs-card-content.type-3 .vs-card .vs-card__img{
    max-height: 100%;
    min-height: 300px
}
</style>
