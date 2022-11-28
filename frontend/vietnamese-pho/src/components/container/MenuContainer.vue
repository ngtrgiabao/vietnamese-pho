<template>
    <div
        class="my-20 mb-[40rem] relative h-screen flex justify-between px-[10rem] py-10"
    >
        <div class="overflow-hidden w-[52rem] h-[57rem] relative mr-40">
            <img
                src="../../assets/images/Pho_Angel_04_05_2018_LRG-48.jpg"
                alt=""
                class="border-[2rem] border-white w-full"
            />
            <div
                class="absolute w-full h-full top-0 p-20 flex flex-col items-center before:bg-gradient-to-b before:from-transparent before:to-zinc-800 before:absolute before:w-[30rem] before:h-[46.3rem] before:top-0"
            >
                <div
                    class="bg-white w-full py-2 flex justify-center items-center text-black font-bold text-3xl mb-20 z-[1]"
                >
                    <span> STARTERS </span>
                </div>
                <div>
                    <p
                        class="text-2xl text-center text-white font-bold drop-shadow-2xl"
                    >
                        Dipping, rolling and sharing are what our starters and
                        sides were made for. We make everything fresh in-house,
                        from our summer and spring rolls to our pork and
                        lemongrass meatballs. All come with their own sauces,
                        but you can also try them with our delicious table
                        condiments: homemade chilli paste, garlic vinegar,
                        sriracha or fish sauce.
                    </p>
                </div>
            </div>
        </div>

        <!-- MENU -->
        <div
            class="grid grid-cols-2 w-full grid-rows-3 bg-white h-[90rem] p-10 gap-10 overflow-auto"
        >
            <div class="border-b-2 flex flex-col items-center">
                <span class="text-red-500 font-bold text-5xl mb-7 mt-20"
                    >Phở Đặc Biệt</span
                >
                <p class="block text-2xl w-[28rem]">
                    Wok-fried noodles with all the trimmings, topped with
                    chicken
                </p>
                <span class="text-3xl font-bold text-red-500 mt-10 mb-5"
                    >75.000 VND</span
                >
            </div>

            <div class="border-b-2 flex flex-col items-center">
                <span class="text-red-500 font-bold text-5xl mb-7 mt-20"
                    >Phở Gà</span
                >
                <p class="block text-2xl w-[28rem]">
                    Wok-fried noodles with all the trimmings, topped with
                    chicken
                </p>
                <span class="text-3xl font-bold text-red-500 mt-10 mb-5"
                    >45.000 VND</span
                >
            </div>

            <div class="border-b-2 flex flex-col items-center">
                <span class="text-red-500 font-bold text-5xl mb-7 mt-20"
                    >Phở Bò</span
                >
                <p class="block text-2xl w-[28rem]">
                    Wok-fried noodles with all the trimmings, topped with
                    chicken
                </p>
                <span class="text-3xl font-bold text-red-500 mt-10 mb-5"
                    >45.000 VND</span
                >
            </div>

            <div class="border-b-2 flex flex-col items-center">
                <span class="text-red-500 font-bold text-5xl mb-7 mt-20"
                    >Phở Hải Sản</span
                >
                <p class="block text-2xl w-[28rem]">
                    Wok-fried noodles with all the trimmings, topped with
                    chicken
                </p>
                <span class="text-3xl font-bold text-red-500 mt-10 mb-5"
                    >45.000 VND</span
                >
            </div>

            <div class="border-b-2 flex flex-col items-center">
                <span class="text-red-500 font-bold text-5xl mb-7 mt-20"
                    >Phở Chay</span
                >
                <p class="block text-2xl w-[28rem]">
                    Wok-fried noodles with all the trimmings, topped with
                    chicken
                </p>
                <span class="text-3xl font-bold text-red-500 mt-10 mb-5"
                    >45.000 VND</span
                >
            </div>
        </div>

        <!-- CART -->
        <Cart />
    </div>
</template>

<script>
import Cart from "../Cart.vue";
export default {
    name: "MenuContainer",
    components: {
        Cart,
    },
};
</script>

<style></style>
