<template>
    <div
        class="p-32 h-screen bg-[url('../assets/images/background-2D2E30-1.jpg')]"
    >
        <router-link
            to="/product"
            class="font-thin hover:underline duration-150 text-xl text-white mb-10 inline-block uppercase"
        >
            trở về trang trước</router-link
        >
        <ProductForm
            :product="product"
            @submit:product="createdProduct"
            :title="title"
        />
    </div>
</template>

<script>
import ProductForm from "../components/form/ProductForm.vue";
import ProductServices from "../services/product.service";

export default {
    name: "ProductAdd",
    components: {
        ProductForm,
    },
    data() {
        return {
            product: {
                name: "",
                price: "",
                quantity: "",
            },
            message: "",
            title: "thông tin sản phẩm",
        };
    },
    methods: {
        async createdProduct(data) {
            try {
                await ProductServices.create(data);
                this.message = "Đã tạo sản phẩm thành công";
                alert(this.message);
            } catch (error) {
                console.log(error);
                alert("Thêm sản phẩm k thành công");
            }
        },
    },
};
</script>
<style></style>
