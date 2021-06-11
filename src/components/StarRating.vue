<template>
    <div class="flex text-lg text-red-500 mb-7 sm:mb-10">
        <i class="fas fa-star" v-for="i in fullRate" :key="i" ></i>
        <i class="far fa-star" v-for="i in (5-fullRate)" :key="i+'e'"></i>
    </div>
</template>

<script>
export default {
    props: {
        rate: {
            type: Number,
            default: 0
        }
    },
    computed: {
        fullRate(){
            return Math.round(this.rate / 2);
        }
    }
}
</script>