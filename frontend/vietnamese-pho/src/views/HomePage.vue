<template>
    <Navbar :title="title" :bgImgURL="bgImgURl" :btnTitle="btnTitle" />
    <Container />
    <Footer />
</template>

<script>
import "../assets/index.css";
import Container from "../components/container/Container.vue";
import Navbar from "../components/navbar/Navbar.vue";
import Footer from "../components/Footer.vue";
export default {
    data() {
        return {
            title: "Vietnamese Pho",
            bgImgURl: new URL(
                "../assets/images/Hero-Image-1.jpg",
                import.meta.url
            ).href,
            btnTitle: "MENU",
        };
    },
    name: "HomePage",
    components: { Navbar, Container, Footer },
};
</script>

<style>
.navbar::before {
    content: "";
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.512),
        transparent
    );
}
</style>
