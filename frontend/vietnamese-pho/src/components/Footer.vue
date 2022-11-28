<template>
    <div class="pb-20 animate__animated animate__fadeInUp">
        <div class="bg-teal-300 mx-60 p-20 grid grid-cols-2">
            <form class="flex">
                <div class="mr-10">
                    <img
                        src="../assets/images/notepad.png"
                        alt=""
                        class="w-62"
                    />
                </div>
                <div
                    class="p-8 pt-0 border border-transparent border-r-2 border-r-red-600 min-h-fit"
                >
                    <div>
                        <span class="uppercase text-5xl font-bold"
                            >news and offers</span
                        >
                    </div>
                    <div class="flex my-10">
                        <input
                            type="text"
                            placeholder="Email"
                            class="w-full text-3xl p-2 mr-10"
                        />
                        <button
                            type="submit"
                            class="text-2xl p-3 bg-red-500 text-white font-bold rounded-md hover:bg-red-400"
                        >
                            Submit
                        </button>
                    </div>
                    <div class="flex items-center">
                        <input type="checkbox" name="" id="" />
                        <p class="ml-5 text-lg">
                            By signing up you are agreeing to receive marketing
                            updates from Pho. You can find more information in
                            our
                            <a
                                href=""
                                class="font-bold text-red-500 hover:underline"
                            >
                                Privacy Policy
                            </a>
                        </p>
                    </div>
                </div>
            </form>
            <div class="p-20 pt-0">
                <div class="mb-7">
                    <span class="uppercase text-5xl font-bold">get social</span>
                </div>
                <div>
                    <ul class="flex">
                        <li>
                            <a
                                href=""
                                class="text-5xl w-[2rem] h-[2rem] p-16 flex justify-center items-center bg-white rounded-full hover:bg-black hover:text-white"
                                ><i class="fa-brands fa-facebook"></i
                            ></a>
                        </li>
                        <li>
                            <a
                                href=""
                                class="text-5xl w-[2rem] h-[2rem] p-16 flex justify-center items-center bg-white rounded-full ml-10 hover:bg-black hover:text-white"
                                ><i class="fa-brands fa-instagram"></i
                            ></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div></div>
    </div>
</template>

<script>
export default {
    name: "Footer",
};
</script>

<style></style>
