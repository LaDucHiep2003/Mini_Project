

<template>
    <div class="shadow-shadow-1 header">
        <div class="container mx-auto py-4 flex justify-between items-center ">
            <div>
                <img src="https://hocaz.vn/images/home/logo.svg" alt="">
            </div>
                <div class="flex gap-10 text-base font-semibold items-center">
                    <div class="block p-0">
                        <RouterLink :to="{ name : 'de-thi-dgnl'}">
                            <div class="p-3 flex nav  items-center">
                                <span class="transition-all duration-500">Đề thi ĐGNL</span>
                            </div>
                        </RouterLink>
                    </div>
                    <div class="block p-0 relative item-menu">
                        <RouterLink to="/">
                            <div class="p-3 flex nav  items-center">
                                <span class="transition-all duration-500">THCS</span>
                            </div>
                        </RouterLink>
                        <div class="w-[200px] bg-white absolute rounded shadow-shadow-1 z-[2] hidden navbar">
                            <div class="py-[10px] px-4 text-color-5 font-normal hover:bg-bg-1">Lớp 6</div>
                            <div class="py-[10px] px-4 text-color-5 font-normal hover:bg-bg-1">Lớp 7</div>
                            <div class="py-[10px] px-4 text-color-5 font-normal hover:bg-bg-1">Lớp 8</div>
                            <div class="py-[10px] px-4 text-color-5 font-normal hover:bg-bg-1">Lớp 9</div>
                        </div>
                    </div>
                    <div class="block p-0 relative item-menu">
                        <RouterLink to="/">
                            <div class="p-3 flex nav  items-center">
                                <span class="transition-all duration-500">THPT</span>
                            </div>
                        </RouterLink>
                        <div class="w-[200px] bg-white absolute rounded shadow-shadow-1 z-[2] hidden navbar">
                            <div class="py-[10px] px-4 text-color-5 font-normal hover:bg-bg-1">Lớp 10</div>
                            <div class="py-[10px] px-4 text-color-5 font-normal hover:bg-bg-1">Lớp 11</div>
                            <div class="py-[10px] px-4 text-color-5 font-normal hover:bg-bg-1">Lớp 12</div>
                        </div>
                    </div>
                    <div class="block p-0">
                        <RouterLink to="/">
                            <div class="p-3 flex nav  items-center">
                                <span class="transition-all duration-500">Tài lệu</span>
                            </div>
                        </RouterLink>
                    </div>
                    <button class="min-h-12 border border-color-2 text-color-2 font-semibold bg-white px-5 text-base 
                        rounded-lg hover:bg-color-2 hover:text-white transition-all duration-300">Đăng nhập</button>
                </div>
        </div>
    </div>
</template>