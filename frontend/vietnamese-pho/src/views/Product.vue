<template>
    <Navbar :bgImgURL="bgImgURl" :title="title" :btnTitle="btnTitle" />
    <ProductContainer />
    <Footer />
</template>

<script>
import Navbar from "../components/navbar/Navbar.vue";
import ProductContainer from "../components/container/ProductContainer.vue";
import Footer from "../components/Footer.vue";
export default {
    name: "Product",
    components: {
        Navbar,
        Footer,
        ProductContainer,
    },
    data() {
        return {
            bgImgURl: new URL(
                "../assets/images/background-2D2E30-1.jpg",
                import.meta.url
            ).href,
            title: "DANH SÁCH SẢN PHẨM",
            btnTitle: "HOME",
        };
    },
};
</script>

<style></style>
