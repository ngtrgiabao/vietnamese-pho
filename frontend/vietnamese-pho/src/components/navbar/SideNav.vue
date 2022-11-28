<template>
    <div
        class="fixed bg-red-500 z-50 w-[40rem] h-full flex flex-col animate__animated left-0 shadow-2xl"
    >
        <div class="text-5xl">
            <img
                src="../../assets/images/nav-background.jpg"
                alt=""
                class="h-72 w-full object-cover"
            />
        </div>
        <div class="flex flex-col justify-between h-full">
            <div class="p-10">
                <ul
                    class="text-5xl font-bold text-white h-[24rem] flex flex-col justify-between"
                >
                    <li>
                        <router-link
                            to="/menu"
                            class="p-3 block hover:pl-10 transition-all duration-150 hover:text-black"
                            >MENU</router-link
                        >
                    </li>
                    <li>
                        <router-link
                            to="/ourstory"
                            class="p-3 block hover:pl-10 transition-all duration-150 hover:text-black"
                        >
                            VỀ CHÚNG TÔI
                        </router-link>
                    </li>
                    <li>
                        <router-link
                            to="/product"
                            class="p-3 block hover:pl-10 transition-all duration-150 hover:text-black"
                        >
                            THÊM SẢN PHẨM MỚI
                        </router-link>
                    </li>
                    <li>
                        <router-link
                            to="/customer"
                            class="p-3 block hover:pl-10 transition-all duration-150 hover:text-black"
                        >
                            THÊM ĐƠN HÀNG MỚI
                        </router-link>
                    </li>
                </ul>
            </div>

            <div class="p-10">
                <div class="flex my-10">
                    <a
                        href=""
                        class="text-5xl w-[2rem] h-[2rem] p-12 flex justify-center items-center bg-white rounded-full hover:bg-black hover:text-white transition-all duration-150"
                        ><i class="fa-brands fa-facebook"></i
                    ></a>
                    <a
                        href=""
                        class="text-5xl w-[2rem] h-[2rem] p-12 flex justify-center items-center bg-white rounded-full ml-10 hover:bg-black hover:text-white transition-all duration-150"
                        ><i class="fa-brands fa-instagram"></i
                    ></a>
                </div>
                <div class="text-white">
                    <a
                        href="https://github.com/ngtrgiabaoB2012063"
                        class="hover:text-black transition-all duration-150"
                        >Website by Nguyen Tran Gia Bao</a
                    >
                    <p>© Copyright Pho 2022.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SideNav",
};
</script>

<style></style>
