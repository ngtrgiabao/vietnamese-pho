<template>
    <div
        class="text-white mb-28 text-xl py-10 px-72 flex flex-col items-center"
    >
        <div class="grid auto-rows-auto pb-0 p-10 bg-black mb-16">
            <div class="grid grid-cols-3">
                <span
                    class="font-bold mx-5 text-3xl mb-10 border-b-2 border-red-500 pb-5 text-center"
                    >Products</span
                >
                <span
                    class="font-bold mx-5 text-3xl mb-10 border-b-2 border-red-500 pb-5 text-center"
                    >Price</span
                >
                <span
                    class="font-bold mx-5 text-3xl mb-10 border-b-2 border-red-500 pb-5 text-center"
                    >Quantity</span
                >
            </div>
            <ProductList
                v-if="filteredProductsCount > 0"
                :products="filteredProducts"
                v-model:activeIndex="activeIndex"
            />

            <div v-else class="col-span-3 mb-10 w-full text-center">
                <span> Chưa có sản phẩm nào :( </span>
            </div>
        </div>

        <div>
            <button
                class="uppercase p-5 font-bold bg-red-500 rounded-2xl hover:bg-red-400 mr-10"
                @click="removeAllProducts"
            >
                <i class="fas fa-trash mr-2" aria-hidden="true"></i> Xóa tất cả
            </button>
            <router-link
                to="/productadd"
                class="uppercase p-5 font-bold bg-green-500 rounded-2xl hover:bg-green-400"
            >
                thêm sản phẩm mới
            </router-link>
        </div>
    </div>
</template>

<script>
import ProductList from "../list/ProductList.vue";
import ProductServices from "../../services/product.service";

export default {
    name: "ProductContainer",
    data() {
        return {
            products: [],
            activeIndex: -1,
            searchText: "",
            message: "",
        };
    },
    components: {
        ProductList,
    },
    watch: {
        // Giám sát các thay đổi của biến searchText.
        // Bỏ chọn phần tử đang được chọn trong danh sách.
        searchText() {
            this.activeIndex = -1;
        },
    },
    methods: {
        async retrieveProducts() {
            try {
                this.products = await ProductServices.getAll();
                console.log("success to get data products");
            } catch (error) {
                console.log("failed to get data products", error);
            }
        },
        refreshList() {
            this.retrieveProducts();
            this.activeIndex = -1;
        },
        async removeAllProducts() {
            if (confirm("Bạn muốn xóa tất cả Sản phẩm?")) {
                try {
                    await ProductServices.deleteAll();
                    this.refreshList();
                } catch (error) {
                    console.log(error);
                }
            }
        },
    },
    computed: {
        productStrings() {
            return this.products.map((product) => {
                const { name, price, quantity } = product;
                return [name, price, quantity].join("");
            });
        },
        // Trả về các products có chứa thông tin cần tìm kiếm.
        filteredProducts() {
            if (!this.searchText) return this.products;
            return this.products.filter((_product, index) =>
                this.productStrings[index].includes(this.searchText)
            );
        },
        filteredProductsCount() {
            return this.filteredProducts.length;
        },
    },
    mounted() {
        this.refreshList();
    },
};
</script>

<style></style>
