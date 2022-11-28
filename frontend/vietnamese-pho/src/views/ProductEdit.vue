<template>
    <div
        class="p-32 h-screen bg-[url('../assets/images/background-2D2E30-1.jpg')]"
    >
        <router-link
            to="/product"
            class="font-thin hover:underline duration-150 text-xl text-white mb-10 inline-block uppercase"
        >
            trở về trang trước
        </router-link>
        <ProductForm
            :product="product"
            :title="title"
            @submit:product="updateProduct"
            @delete:product="deleteProduct"
        />
    </div>
</template>

<script>
import ProductForm from "../components/form/ProductForm.vue";
import ProductServices from "../services/product.service";

export default {
    name: "ProductEdit",
    components: {
        ProductForm,
    },
    props: {
        id: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            product: null,
            message: "",
            title: "chỉnh sửa sản phẩm",
        };
    },
    methods: {
        async getProduct(id) {
            try {
                this.product = await ProductServices.get(id);
            } catch (error) {
                console.log(error);
            }
        },
        async updateProduct(data) {
            try {
                await ProductServices.update(this.product._id, data);
                this.message = "sản phẩm được cập nhật thành công";
                alert(this.message);
            } catch (error) {
                console.log(error);
                alert("sản phẩm cập nhật không thành công");
            }
        },
        async deleteProduct() {
            if (confirm("Bạn muốn xóa sản phẩm này?")) {
                try {
                    await ProductServices.delete(this.product._id);
                    this.$router.push({ path: "/product" });
                } catch (error) {
                    console.log(error);
                }
            }
        },
    },
    created() {
        this.getProduct(this.id);
        this.message = "";
    },
};
</script>

<style></style>
