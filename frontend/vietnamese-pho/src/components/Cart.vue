<template>
    <div>
        <router-link
            to="/product"
            class="fixed text-red-100 text-4xl bottom-32 right-20 rounded-full bg-red-500 flex items-center justify-center w-[6rem] h-[6rem] hover:bg-black hover:text-white z-50"
        >
            <i class="fa-solid fa-cart-shopping"></i>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "Cart",
};
</script>

<style></style>
