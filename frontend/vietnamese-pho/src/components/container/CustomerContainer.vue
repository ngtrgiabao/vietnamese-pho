<template>
    <div
        class="text-red-500 mb-28 text-xl py-10 px-52 flex flex-col items-center"
    >
        <div class="grid auto-rows-auto p-8 bg-black mb-16">
            <div class="grid grid-cols-7">
                <span
                    class="font-bold mx-5 text-3xl mb-10 border-b-2 border-green-200 pb-5 text-center"
                    >STT</span
                >
                <span
                    class="font-bold mx-5 text-3xl mb-10 border-b-2 border-green-200 pb-5 text-center"
                    >Id</span
                >
                <span
                    class="font-bold mx-5 text-3xl mb-10 border-b-2 border-green-200 pb-5 text-center"
                    >Customers</span
                >
                <span
                    class="font-bold mx-5 text-3xl mb-10 border-b-2 border-green-200 pb-5 text-center"
                    >Address</span
                >
                <span
                    class="font-bold mx-5 text-3xl mb-10 border-b-2 border-green-200 pb-5 text-center"
                    >Phone</span
                >
                <span
                    class="font-bold mx-5 text-3xl mb-10 border-b-2 border-green-200 pb-5 text-center"
                    >Food</span
                >
                <span
                    class="font-bold mx-5 text-3xl mb-10 border-b-2 border-green-200 pb-5 text-center"
                    >Description</span
                >
            </div>
            <CustomerList
                v-if="filteredCustomerCount > 0"
                :customers="filteredCustomers"
                v-model:activeIndex="activeIndex"
            />

            <div
                v-else
                class="col-span-3 mb-10 w-full text-center text-white font-bold"
            >
                <span> Chưa có đơn hàng nào :( </span>
            </div>
        </div>

        <div class="flex">
            <button
                class="uppercase p-5 font-bold bg-red-500 rounded-2xl hover:bg-red-400 mr-10 text-white"
                @click="removeAllCustomers"
            >
                <i class="fas fa-trash mr-2" aria-hidden="true"></i> Xóa tất cả
            </button>
            <router-link
                to="/customeradd"
                class="uppercase p-5 font-bold bg-green-500 rounded-2xl hover:bg-green-400 text-white"
            >
                thêm đơn hàng mới
            </router-link>
        </div>
    </div>
</template>

<script>
import CustomerList from "../list/CustomerList.vue";
import CustomerServices from "../../services/customer.service";

export default {
    name: "CustomerContainer",
    data() {
        return {
            customers: [],
            activeIndex: -1,
            searchText: "",
            message: "",
        };
    },
    components: {
        CustomerList,
    },
    watch: {
        // Giám sát các thay đổi của biến searchText.
        // Bỏ chọn phần tử đang được chọn trong danh sách.
        searchText() {
            this.activeIndex = -1;
        },
    },
    methods: {
        async retrieveCustomers() {
            try {
                this.customers = await CustomerServices.getAll();
                console.log("success to get data customers");
            } catch (error) {
                console.log("failed to get data customers", error);
            }
        },
        refreshList() {
            this.retrieveCustomers();
            this.activeIndex = -1;
        },

        async removeAllCustomers() {
            if (confirm("Bạn muốn xóa tất cả Đơn hàng?")) {
                try {
                    await CustomerServices.deleteAll();
                    this.refreshList();
                } catch (error) {
                    console.log(error);
                }
            }
        },
    },
    computed: {
        customerStrings() {
            return this.customers.map((customer) => {
                const { name, address, phone, food } = customer;
                return [name, address, phone, food].join("");
            });
        },
        // Trả về các customers có chứa thông tin cần tìm kiếm.
        filteredCustomers() {
            if (!this.searchText) return this.customers;
            return this.customers.filter((_customer, index) =>
                this.customerStrings[index].includes(this.searchText)
            );
        },
        filteredCustomerCount() {
            return this.filteredCustomers.length;
        },
    },
    mounted() {
        this.refreshList();
    },
};
</script>

<style></style>
