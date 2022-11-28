import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../views/HomePage.vue";
import OurStory from "../views/OurStory.vue";
import Menu from "../views/Menu.vue";
import Product from "../views/Product.vue";
import ProductAdd from "../views/ProductAdd.vue";
import ProductEdit from "../views/ProductEdit.vue";
import Customer from "../views/Customer.vue";
import CustomerAdd from "../views/CustomerAdd.vue";
import CustomerEdit from "../views/CustomerEdit.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomePage,
    },
    {
        path: "/ourstory",
        name: "OurStory",
        component: OurStory,
    },

    {
        path: "/menu",
        name: "Menu",
        component: Menu,
    },
    {
        path: "/product",
        name: "Product",
        component: Product,
    },

    {
        path: "/productadd",
        name: "product.add",
        component: ProductAdd,
    },
    {
        path: "/productedit/:id",
        name: "product.edit",
        component: ProductEdit,
        props: true,
    },
    {
        path: "/customer",
        name: "Customer",
        component: Customer,
    },

    {
        path: "/customeradd",
        name: "customer.add",
        component: CustomerAdd,
    },
    {
        path: "/customeredit/:id",
        name: "customer.edit",
        component: CustomerEdit,
        props: true,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "Home",
        component: HomePage,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
