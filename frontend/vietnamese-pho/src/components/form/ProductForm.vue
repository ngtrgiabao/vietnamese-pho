<template>
    <form
        @submit.prevent="submitProduct"
        class="my-20 flex flex-col items-center bg-white text-black p-10"
    >
        <span class="text-5xl font-bold uppercase text-red-500">{{
            title
        }}</span>
        <div class="w-full">
            <div class="my-10">
                <label
                    for="hoten"
                    class="uppercase flex-inline flex-col text-2xl font-bold hover:cursor-pointer text-red-500"
                    >tên sản phẩm</label
                >
                <input
                    required
                    id="hoten"
                    type="text"
                    class="border-b-2 border-red-100 w-full mt-5 focus:border-red-300 text-xl"
                    v-model="productLocal.name"
                />
            </div>

            <div class="my-10">
                <label
                    for="price"
                    class="uppercase flex-inline flex-col text-2xl font-bold hover:cursor-pointer text-red-500"
                    >giá</label
                >
                <input
                    required
                    id="price"
                    type="number"
                    class="border-b-2 border-red-100 w-full mt-5 focus:border-red-300 text-xl"
                    v-model="productLocal.price"
                />
            </div>
            <div class="my-10 flex flex-col">
                <label class="uppercase text-2xl font-bold text-red-500"
                    >số lượng</label
                >

                <input
                    id="soluong"
                    type="number"
                    class="border-b-2 border-red-100 w-full mt-5 focus:border-red-300 text-xl"
                    v-model="productLocal.quantity"
                />
            </div>
        </div>

        <div class="flex w-full">
            <button
                type="submit"
                class="uppercase bg-green-500 p-6 text-2xl font-bold text-center hover:bg-green-400 rounded-xl shadow-md shadow-green-300 transition-all duration-75 w-30 hover:scale-95 text-white mr-5"
            >
                xác nhận
            </button>
            <button
                type="reset"
                class="uppercase bg-red-500 p-6 text-2xl font-bold text-center hover:bg-red-400 rounded-xl shadow-md shadow-red-300 hover:scale-95 transition-all duration-75 w-30 text-white"
                v-if="productLocal._id"
                @click="deleteProduct"
            >
                Xóa
            </button>
        </div>
    </form>
</template>

<script>
export default {
    name: "ProductForm",
    emits: ["submit:product", "delete:product"],
    props: {
        product: {
            type: Object,
            required: true,
        },
        title: String,
    },
    data() {
        return {
            productLocal: this.product,
        };
    },
    methods: {
        submitProduct() {
            this.$emit("submit:product", this.productLocal);

            this.$router.push({
                path: "/product",
            });
        },
        deleteProduct() {
            this.$emit("delete:product", this.productLocal.id);
        },
    },
};
</script>

<style></style>
