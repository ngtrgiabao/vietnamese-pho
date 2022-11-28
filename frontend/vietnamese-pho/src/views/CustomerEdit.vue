<template>
    <div
        class="p-32 h-screen bg-[url('../assets/images/background-2D2E30-1.jpg')] overflow-auto"
    >
        <router-link
            to="/customer"
            class="font-thin hover:underline duration-150 text-xl text-white mb-10 inline-block uppercase"
        >
            trở về trang trước
        </router-link>
        <CustomerForm
            :customer="customer"
            :title="title"
            @submit:customer="updateCustomer"
            @delete:customer="deleteCustomer"
        />
    </div>
</template>

<script>
import CustomerForm from "../components/form/CustomerForm.vue";
import CustomerServices from "../services/customer.service";

export default {
    name: "CustomerEdit",
    components: {
        CustomerForm,
    },
    props: {
        id: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            customer: null,
            message: "",
            title: "chỉnh sửa đơn hàng",
        };
    },
    methods: {
        async getCustomer(id) {
            try {
                this.customer = await CustomerServices.get(id);
            } catch (error) {
                console.log(error);
            }
        },
        async updateCustomer(data) {
            try {
                await CustomerServices.update(this.customer._id, data);
                this.message = "đơn hàng được cập nhật thành công";
                alert(this.message);
            } catch (error) {
                console.log(error);
                alert("đơn hàng cập nhật không thành công");
            }
        },
        async deleteCustomer() {
            if (confirm("Bạn muốn xóa đơn hàng này?")) {
                try {
                    await CustomerServices.delete(this.customer._id);
                    this.$router.push({ path: "/customer" });
                } catch (error) {
                    console.log(error);
                }
            }
        },
    },
    created() {
        this.getCustomer(this.id);
        this.message = "";
    },
};
</script>

<style></style>
