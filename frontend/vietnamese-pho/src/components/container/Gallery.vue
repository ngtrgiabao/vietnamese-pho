<template>
    <div>
        <div
            class="grid grid-cols-2 p-[15rem] animate__animated animate__bounceInLeft pt-[24rem]"
        >
            <div class="flex">
                <div class="flex flex-col items-center px-10">
                    <p class="text-3xl text-white font-bold bg-black p-16">
                        Stephen and Juliette Wall opened Pho in June 2005 after
                        they travelled to Vietnam and fell in love with the
                        food.
                    </p>
                </div>
            </div>
            <div
                class="border-8 w-96 h-96 transform rotate-12 relative -left-[20rem] -top-[21rem]"
            >
                <img
                    src="../../assets/images/VNY-1-800x800.jpg"
                    alt=""
                    class="object-cover"
                />
            </div>
        </div>
        <div
            class="grid grid-cols-2 px-[15rem] animate__animated animate__bounceInLeft pt-[5rem]"
        >
            <div>
                <div
                    class="border-8 w-96 h-96 transform rotate-6 relative -right-[52rem] -top-[21rem]"
                >
                    <img
                        src="../../assets/images/2-800x614.jpg"
                        alt=""
                        class="object-cover h-full"
                    />
                </div>
                <div
                    class="border-8 w-96 h-96 transform rotate-12 relative -right-[90rem] -top-[12rem]"
                >
                    <img
                        src="../../assets/images/3-700x800.jpg"
                        alt=""
                        class="object-cover h-full w-full"
                    />
                </div>
            </div>
            <div class="flex">
                <div class="flex flex-col items-center px-10">
                    <p class="text-3xl text-white font-bold bg-black p-16">
                        They made the decision to start a restaurant serving phở
                        while sat on high stools, slurping pho bo, in Ho Chi
                        Minh City.
                    </p>
                </div>
            </div>
        </div>
        <div
            class="grid grid-cols-2 p-[15rem] animate__animated animate__bounceInLeft pt-[5rem]"
        >
            <div class="flex">
                <div class="flex flex-col items-center px-10">
                    <p class="text-3xl text-white font-bold bg-black p-16">
                        17 years later, Pho is small group of restaurants dotted
                        around the country, serving great value, healthy
                        Vietnamese food that's cooked fresh in each kitchen
                        daily.
                    </p>
                </div>
            </div>
            <div>
                <div
                    class="border-8 w-96 h-96 transform rotate-12 relative -left-[20rem] -top-[21rem]"
                >
                    <img
                        src="../../assets/images/4.jpg"
                        alt=""
                        class="object-cover h-full"
                    />
                </div>
                <div
                    class="border-8 w-96 h-96 transform rotate-6 relative -left-[60rem] -top-[10rem]"
                >
                    <img
                        src="../../assets/images/202112_Pho_JanHot_Z6II_0231_SML-800x800.jpg"
                        alt=""
                        class="object-cover h-full"
                    />
                </div>
            </div>
        </div>

        <Cart />
    </div>
</template>

<script>
import Cart from "../Cart.vue";
export default {
    name: "Our Story",
    components: {
        Cart,
    },
};
</script>

<style>
.about {
    font-size: 5rem;
    font-weight: bold;
}
</style>
