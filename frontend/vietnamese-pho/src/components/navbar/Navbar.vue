<template>
    <div
        class="navbar flex justify-center items-center relative before:absolute before:w-full before:h-72 before:top-0 before:left-0 before:-z-[1]"
    >
        <img
            :src="bgImgURL"
            alt=""
            class="fixed bg-black -z-[999] h-screen bottom-0 w-full object-cover"
        />
        <div class="w-full flex items-center flex-col relative h-screen z-[2]">
            <div
                class="flex justify-around w-full font-bold text-[1.8rem] fixed after:absolute after:w-full after:h-16 after:bg-black after:blur-xl after:top-0 after:-z-1 top-0 pt-5 animate__animated animate__fadeIn animate__fade-slow z-20"
            >
                <!-- LOGO -->
                <router-link to="/" class="z-10">
                    <img
                        src="../../assets/images/logo.svg"
                        alt=""
                        class="absolute z-9"
                    />
                </router-link>

                <!-- NAVBAR LIST -->
                <ul class="flex items-center h-[5rem] z-10">
                    <li class="mx-6">
                        <router-link
                            to="/menu"
                            class="p-1 text-white no-underline relative before:absolute before:left-0 before:-bottom-[2px] before:w-0 before:h-[0.3rem] before:bg-red-600"
                        >
                            MENU
                        </router-link>
                    </li>
                    <li class="mx-6">
                        <router-link
                            to="/ourstory"
                            class="p-1 text-white no-underline relative before:absolute before:left-0 before:-bottom-[2px] before:w-0 before:h-[0.3rem] before:bg-red-600"
                        >
                            VỀ CHÚNG TÔI
                        </router-link>
                    </li>
                    <li class="mx-6">
                        <router-link
                            to="/product"
                            class="p-1 text-white no-underline relative before:absolute before:left-0 before:-bottom-[2px] before:w-0 before:h-[0.3rem] before:bg-red-600"
                        >
                            THÊM SẢN PHẨM MỚI
                        </router-link>
                    </li>
                    <li class="mx-6">
                        <router-link
                            to="/customer"
                            class="p-1 text-white no-underline relative before:absolute before:left-0 before:-bottom-[2px] before:w-0 before:h-[0.3rem] before:bg-red-600"
                        >
                            THÊM ĐƠN HÀNG MỚI
                        </router-link>
                    </li>
                </ul>

                <div class="h-24 text-white rounded-md flex items-center z-10">
                    <div
                        class="w-32 h-full bg-red-600 hover:bg-black hover:cursor-pointer"
                        @click="handleSideNav"
                    >
                        <i
                            class="flex items-center justify-center fa-solid fa-bars w-full h-full text-4xl hover:scale-y-150 transition duration-100 ease-in"
                        ></i>
                    </div>
                </div>
            </div>

            <div
                class="flex flex-col justify-center items-center w-full h-full"
            >
                <div
                    class="w-2/3 p-10 text-[7rem] text-black text-center font-bold bg-white animate__animated animate__bounceInUp animate__delay-slow"
                >
                    <p>{{ title }}</p>
                </div>

                <ul
                    class="flex items-center h-[5rem] mt-12 animate__animated animate__fadeInUp .animate__fade-slow-1"
                >
                    <li class="text-center">
                        <router-link
                            to="/menu"
                            class="block w-72 text-white no-underline text-3xl font-bold p-10 cursor-pointer bg-red-600 m-[1px] rounded-md hover:bg-black"
                        >
                            {{ btnTitle }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>

        <Transition
            name="custom-classes"
            enter-active-class="animate__animated animate__fadeInLeft"
            leave-active-class="animate__animated animate__fadeOutLeft"
        >
            <SideNav v-if="isShow" />
        </Transition>
    </div>
</template>

<script>
import SideNav from "./SideNav.vue";

export default {
    name: "Navbar",
    data() {
        return {
            isShow: false,
        };
    },
    props: {
        title: String,
        bgImgURL: URL,
        btnTitle: String,
    },
    components: {
        SideNav,
    },
    methods: {
        handleSideNav() {
            this.isShow = !this.isShow;
        },
    },
};
</script>

<style>
ul li a::before {
    content: "";

    transition: all 0.25s ease;
}

ul li:hover a::before {
    width: 100%;

    background-color: red;
}

.animate__delay-slow {
    --animate-duration: 2s;
}

.animate__fade-slow {
    --animate-duration: 5s;
}

.animate__fade-slow-1 {
    --animation-duration: 4s;
}

.animate__fade-slow-2 {
    --animate-duration: 9s;
}

.animate__fade-slow-3 {
    --animate-duration: 12s;
}
</style>
