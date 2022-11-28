<template>
    <div
        class="p-32 h-screen bg-[url('../assets/images/background-2D2E30-1.jpg')] overflow-auto"
    >
        <router-link
            to="/customer"
            class="font-thin hover:underline duration-150 text-xl text-white mb-10 inline-block uppercase"
        >
            trở về trang trước</router-link
        >
        <CustomerForm
            :customer="customer"
            @submit:customer="createdCustomer"
            :title="title"
        />
    </div>
</template>

<script>
import CustomerForm from "../components/form/CustomerForm.vue";
import CustomerServices from "../services/customer.service";

export default {
    name: "CustomerAdd",
    components: {
        CustomerForm,
    },
    data() {
        return {
            customer: {
                name: "",
                address: "",
                phone: "",
                food: "",
                desc: "",
            },
            message: "",
            title: "thông tin đơn hàng",
        };
    },
    methods: {
        async createdCustomer(data) {
            try {
                await CustomerServices.create(data);
                this.message = "Đã tạo đơn hàng thành công";
                alert(this.message);
            } catch (error) {
                console.log(error);
                alert("Thêm đơn hàng k thành công");
            }
        },
    },
};
</script>
<style></style>
