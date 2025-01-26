<script setup>
import SiteLayout from "@/Pages/Site/SiteLayout.vue";
import {Head, Link, router} from "@inertiajs/vue3";
import Hero from "@/Pages/Site/Hero.vue";
import {reactive, watch} from "vue";

defineProps({
    products: {
        type: Object,
        required: true
    },
    categories: Object,
    brands: Object,
    prices: Object,
    selected: Object
})
defineOptions({
    layout: SiteLayout
})

const addToCart = (id) => {
    router.post(route('carts.store'), {product_id: id}, {
        preserveScroll: true
    })
}

const checks = reactive({
    brands: [],
    categories: [],
    prices: [],
})

watch(checks, () => {
    router.visit('/', {
        data: {
            'selected[brands]': checks.brands || [],
            'selected[categories]': checks.categories || [],
            'selected[prices]': checks.prices || [],
        },
        preserveScroll: true,
        preserveState: true
    })
})

</script>
<template>
    <Head title="Ecommerce"/>
    <Hero/>
    <section class="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12">
        <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
            <!-- Heading & Filters -->
            <div class="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
                <div>
                    <h2 class="mt-3 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Latest products
                        list</h2>
                    <div v-if="$page.props.flash.message" class="text-blue-600">
                        {{ $page.props.flash.message }}
                    </div>
                </div>
                <div class="flex items-center space-x-4">
                    <button data-modal-toggle="filterModal" data-modal-target="filterModal" type="button"
                            class="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto">
                        <svg class="-ms-0.5 me-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                             width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                                  d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z"/>
                        </svg>
                        Filters
                        <svg class="-me-0.5 ms-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                             width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="m19 9-7 7-7-7"/>
                        </svg>
                    </button>
                    <button id="sortDropdownButton1" data-dropdown-toggle="dropdownSort1" type="button"
                            class="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto">
                        <svg class="-ms-0.5 me-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                             width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M7 4v16M7 4l3 3M7 4 4 7m9-3h6l-6 6h6m-6.5 10 3.5-7 3.5 7M14 18h4"/>
                        </svg>
                        Sort
                        <svg class="-me-0.5 ms-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                             width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="m19 9-7 7-7-7"/>
                        </svg>
                    </button>
                    <div id="dropdownSort1"
                         class="z-50 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
                         data-popper-placement="bottom">
                        <ul class="p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400"
                            aria-labelledby="sortDropdownButton">
                            <li>
                                <a href="#"
                                   class="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                                    The most popular </a>
                            </li>
                            <li>
                                <a href="#"
                                   class="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                                    Newest </a>
                            </li>
                            <li>
                                <a href="#"
                                   class="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                                    Increasing price </a>
                            </li>
                            <li>
                                <a href="#"
                                   class="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                                    Decreasing price </a>
                            </li>
                            <li>
                                <a href="#"
                                   class="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                                    Discount % </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
                <div v-for="product in products" :key="product.id"
                     class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                    <div class="h-56 w-full">
                        <Link :href="route('admin.products.show', product.id)">
                            <img v-if="product.product_images.length === 0" class="mx-auto h-full dark:hidden"
                                 src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-light.svg" alt=""/>
                            <img v-else class="mx-auto h-full dark:hidden"
                                 :src="'/storage/' + product.product_images[0].image_path" alt=""/>
                        </Link>
                    </div>

                    <div class="pt-6">
                        <div class="mb-4 flex items-center justify-between gap-4">
                            <span
                                class="me-2 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300"> Up to 15% off </span>

                            <div class="flex items-center justify-end gap-1">
                                <button type="button" data-tooltip-target="tooltip-add-to-favorites-2"
                                        class="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                    <span class="sr-only"> Add to Favorites </span>
                                    <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                         fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                              stroke-width="2"
                                              d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"/>
                                    </svg>
                                </button>
                                <div id="tooltip-add-to-favorites-2" role="tooltip"
                                     class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                                     data-popper-placement="top">
                                    Add to favorites
                                    <div class="tooltip-arrow" data-popper-arrow=""></div>
                                </div>
                            </div>
                        </div>

                        <Link :href="route('admin.products.show', product.id)"
                              class="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">
                            {{ product.title }}
                        </Link>

                        <div class="mt-2 flex items-center gap-2">
                            <div class="flex items-center">
                                <svg class="h-4 w-4 text-yellow-400" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"/>
                                </svg>

                                <svg class="h-4 w-4 text-yellow-400" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"/>
                                </svg>
                            </div>

                            <p class="text-sm font-medium text-gray-900 dark:text-white">5</p>
                            <p class="text-sm font-medium text-gray-500 dark:text-gray-400">(1,233)</p>
                        </div>

                        <ul class="mt-2 flex items-center gap-4">
                            <li class="flex items-center gap-2">
                                <svg class="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                     viewBox="0 0 24 24">
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="m7.171 12.906-2.153 6.411 2.672-.89 1.568 2.34 1.825-5.183m5.73-2.678 2.154 6.411-2.673-.89-1.568 2.34-1.825-5.183M9.165 4.3c.58.068 1.153-.17 1.515-.628a1.681 1.681 0 0 1 2.64 0 1.68 1.68 0 0 0 1.515.628 1.681 1.681 0 0 1 1.866 1.866c-.068.58.17 1.154.628 1.516a1.681 1.681 0 0 1 0 2.639 1.682 1.682 0 0 0-.628 1.515 1.681 1.681 0 0 1-1.866 1.866 1.681 1.681 0 0 0-1.516.628 1.681 1.681 0 0 1-2.639 0 1.681 1.681 0 0 0-1.515-.628 1.681 1.681 0 0 1-1.867-1.866 1.681 1.681 0 0 0-.627-1.515 1.681 1.681 0 0 1 0-2.64c.458-.361.696-.935.627-1.515A1.681 1.681 0 0 1 9.165 4.3ZM14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                                    />
                                </svg>
                                <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
                                    {{ product.category.title }}</p>
                            </li>

                            <li class="flex items-center gap-2">
                                <svg class="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                                          d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
                                </svg>
                                <p class="text-sm font-medium text-gray-500 dark:text-gray-400">{{ product.brand.title }}</p>
                            </li>
                        </ul>

                        <div class="mt-4 flex items-center justify-between gap-4">
                            <p class="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
                                ${{ product.price }}</p>

                            <button @click="addToCart(product.id)" type="button"
                                    class="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4  focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg class="-ms-2 me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                     width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2"
                                          d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"/>
                                </svg>
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full text-center">
                <button type="button"
                        class="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
                    Show more
                </button>
            </div>

            <!-- Filter modal -->
            <form action="#" method="get" id="filterModal" tabindex="-1" aria-hidden="true" class="fixed left-0 right-0 top-0 z-50 hidden h-modal w-full overflow-y-auto overflow-x-hidden p-4 md:inset-0 md:h-full">
                <div class="relative h-full w-full max-w-xl md:h-auto">
                    <!-- Modal content -->
                    <div class="relative rounded-lg bg-white shadow dark:bg-gray-800">
                        <!-- Modal header -->
                        <div class="flex items-start justify-between rounded-t p-4 md:p-5">
                            <h3 class="text-lg font-normal text-gray-500 dark:text-gray-400">Filters</h3>
                            <button type="button" class="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="filterModal">
                                <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
                                </svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                        </div>
                        <!-- Modal body -->
                        <div class="px-4 md:px-5">
                            <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
                                <ul class="-mb-px flex flex-wrap text-center text-sm font-medium" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                                    <li class="mr-1" role="presentation">
                                        <button class="inline-block pb-2 pr-1" id="brand-tab" data-tabs-target="#brand" type="button" role="tab" aria-controls="profile" aria-selected="false">Filter</button>
                                    </li>
                                    <li class="mr-1" role="presentation">
                                        <button class="inline-block px-2 pb-2 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300" id="advanced-filers-tab" data-tabs-target="#advanced-filters" type="button" role="tab" aria-controls="advanced-filters" aria-selected="false">Advanced Filters</button>
                                    </li>
                                </ul>
                            </div>
                            <div id="myTabContent">
                                <div class="grid grid-cols-2 gap-4 md:grid-cols-3" id="brand" role="tabpanel" aria-labelledby="brand-tab">
                                    <div class="space-y-2">
                                        <h5 class="text-lg font-medium text-black dark:text-white">Brands</h5>
                                        <div v-for="(brand, index) in brands" :key="brand.id + '_brands'" class="flex items-center">
                                            <input type="checkbox"
                                                :id="'brand' + index"
                                                :value="brand.id"
                                                v-model="checks.brands"
                                                class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                            />

                                            <label :for="'brand' + index" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                {{ brand.title }} ({{ brand.products_count }})
                                            </label>
                                        </div>
                                    </div>

                                    <div class="space-y-2">
                                        <h5 class="text-lg font-medium text-black dark:text-white">Categories</h5>

                                        <div v-for="(category, index) in categories" :key="category.id + '_categories'" class="flex items-center">
                                            <input type="checkbox"
                                                   :id="'category' + index"
                                                   :value="category.id"
                                                   v-model="checks.categories"
                                                   class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                            />

                                            <label :for="'category' + index" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                {{ category.title }} ({{ category.products_count }})
                                            </label>
                                        </div>
                                    </div>

                                    <div class="space-y-2">
                                        <h5 class="text-lg font-medium text-black dark:text-white">Prices</h5>
                                        <div v-for="(price, index) in prices" :key="price.id + '_prices'" class="flex items-center">
                                            <input type="checkbox"
                                                   :id="'price' + index"
                                                   :value="price.id"
                                                   v-model="checks.prices"
                                                   class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                            />

                                            <label :for="'price' + index" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                {{ price.title }} ({{ price.products_count }})
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="space-y-4" id="advanced-filters" role="tabpanel" aria-labelledby="advanced-filters-tab">
                                <div>
                                    <h6 class="mb-2 text-sm font-medium text-black dark:text-white">Condition</h6>

                                    <ul class="flex w-full items-center rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
                                        <li class="w-full border-r border-gray-200 dark:border-gray-600">
                                            <div class="flex items-center pl-3">
                                                <input id="condition-all" type="radio" value="" name="list-radio" checked class="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-primary-600" />
                                                <label for="condition-all" class="ml-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300"> All </label>
                                            </div>
                                        </li>
                                        <li class="w-full border-r border-gray-200 dark:border-gray-600">
                                            <div class="flex items-center pl-3">
                                                <input id="condition-new" type="radio" value="" name="list-radio" class="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-primary-600" />
                                                <label for="condition-new" class="ml-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300"> In sale </label>
                                            </div>
                                        </li>
                                        <li class="w-full">
                                            <div class="flex items-center pl-3">
                                                <input id="condition-used" type="radio" value="" name="list-radio" class="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-primary-600" />
                                                <label for="condition-used" class="ml-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300"> Not in sale </label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <!-- Modal footer -->
                        <div class="flex items-center space-x-4 rounded-b p-4 dark:border-gray-600 md:p-5">
<!--                            <button type="submit" class="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:ring-blue-800">Show 50 results</button>-->
<!--                            <button type="reset" class="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">Reset</button>-->
<!--                    -->
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </section>
</template>
