<template>
    <Navbar :title="title" :bgImgURL="bgImgURl" :btnTitle="btnTitle" />
    <Gallery />
    <Footer />
</template>

<script>
import "../assets/index.css";
import Navbar from "../components/navbar/Navbar.vue";
import Footer from "../components/Footer.vue";
import Gallery from "../components/container/Gallery.vue";
export default {
    name: "HomePage",
    components: { Navbar, Footer, Gallery },
    data() {
        return {
            title: "Our Story",
            bgImgURl: new URL(
                "../assets/images/Nutrition-Single-Background.jpg",
                import.meta.url
            ).href,
            btnTitle: "HOME",
        };
    },
};
</script>

<style>
.about {
    font-size: 5rem;
    font-weight: bold;
}
</style>
