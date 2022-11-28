<template>
    <Navbar :bgImgURL="bgImgURl" :title="title" :btnTitle="btnTitle" />
    <CustomerContainer />
    <Footer />
</template>

<script>
import Navbar from "../components/navbar/Navbar.vue";
import CustomerContainer from "../components/container/CustomerContainer.vue";
import Footer from "../components/Footer.vue";
export default {
    name: "Customer",
    components: {
        Navbar,
        Footer,
        CustomerContainer,
    },
    data() {
        return {
            bgImgURl: new URL(
                "../assets/images/background-2D2E30-1.jpg",
                import.meta.url
            ).href,
            title: "DANH SÁCH ĐƠN HÀNG",
            btnTitle: "HOME",
        };
    },
};
</script>

<style></style>
