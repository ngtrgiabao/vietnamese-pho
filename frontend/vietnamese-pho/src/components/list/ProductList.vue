<template>
    <div>
        <ul class="h-[30rem] overflow-y-auto snap-y">
            <li
                v-for="(product, index) in products"
                :key="product._id"
                class="snap-center grid grid-cols-3 mb-10 place-items-center border"
            >
                <div
                    class="flex items-center justify-between mx-5 px-10 pr-24 py-5 w-[23rem]"
                >
                    <router-link
                        :to="{
                            name: 'product.edit',
                            params: {
                                id: filteredProducts[index]._id,
                            },
                        }"
                    >
                        <i
                            class="fa-solid fa-pen-to-square text-2xl mr-10 hover:cursor-pointer hover:text-blue-600 text-blue-300 p-2"
                        ></i>
                    </router-link>
                    <span
                        class="text-2xl font-thin block-inline text-ellipsis overflow-hidden"
                        >{{ product.name }}</span
                    >
                </div>

                <!-- PRICE -->
                <div>
                    <span class="text-3xl mr-2 text-yellow-300">{{
                        product.price
                    }}</span>
                    <span class="text-2xl"> VND </span>
                </div>

                <!-- QUANTITY -->
                <span class="text-3xl text-red-300 font-bold">{{
                    product.quantity
                }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "ProductList",
    props: {
        products: { type: Array, default: [] },
        activeIndex: {
            type: Number,
            default: -1,
        },
    },
    data() {
        return {
            searchText: "",
        };
    },
    emits: ["update:activeIndex"],
    watch: {
        // Giám sát các thay đổi của biến searchText.
        // Bỏ chọn phần tử đang được chọn trong danh sách.
        searchText() {
            this.activeIndex = -1;
        },
    },
    methods: {
        updateActiveIndex(index) {
            this.$emit("update:activeIndex", index);
        },
    },
    computed: {
        productStrings() {
            return this.products.map((product) => {
                const { name, price, quantity } = product;
                return [name, price, quantity].join("");
            });
        },
        // Trả về các contact có chứa thông tin cần tìm kiếm.
        filteredProducts() {
            if (!this.searchText) return this.products;
            return this.products.filter((_product, index) =>
                this.productStrings[index].includes(this.searchText)
            );
        },
        activeProduct() {
            if (this.activeIndex < 0) return null;
            return this.filteredProducts[this.activeIndex];
        },
    },
};
</script>

<style></style>
