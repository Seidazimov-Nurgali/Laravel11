<script setup>
import AdminLayout from "@/Pages/Admin/Components/AdminLayout.vue";
import {Head, Link, router} from "@inertiajs/vue3";
import {defineOptions, onMounted, reactive, watch} from "vue";
import debounce from "lodash/debounce"
import Store from "@/Pages/Admin/Products/Store.vue";
import Pagination from "@/Pages/Admin/Components/Pagination.vue";
import Update from "@/Pages/Admin/Products/Update.vue";
import Dropdown from "@/Components/Dropdown.vue";
import DropdownLink from "@/Components/DropdownLink.vue";

defineOptions({
    layout: AdminLayout
})
// const products = usePage().props.products;
const props = defineProps({
    products: {
        type: Object,
        required: true
    },
    filters: Object,
    brands: Object,
    categories: Object
})

onMounted(() => {
    if (props.filters.sortBy === 'price') {
        props.filters.sortBy = props.filters.sortOrder === 'asc' ? 'price_asc' : 'price_desc'
    }
})

const filtersQuery = reactive({
    sortBy: props.filters.sortBy ?? 'title',
    search: props.filters.search ?? '',
    sortOrder: props.filters.sortOrder ?? 'asc'
})

watch(filtersQuery, debounce(function () {
    const data = {}

    if (filtersQuery.search) {
        data.search = filtersQuery.search
    }

    if (filtersQuery.sortBy === 'price_asc') {
        data.sortBy = 'price'
        data.sortOrder = 'asc'
    } else if (filtersQuery.sortBy === 'price_desc') {
        data.sortBy = 'price'
        data.sortOrder = 'desc'
    } else {
        data.sortBy = filtersQuery.sortBy
        data.sortOrder = 'asc'
    }

    router.get(route('admin.products.index'), data, {replace: true, preserveState: true})
}, 300))

const changePublish = (id, status) => {
    router.post(route('admin.changePublish', {id: id, status: status}))
}
</script>

<template>
    <Head title="Products"/>
    <section class="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
        <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
            <!-- Start coding here -->
            <div v-if="$page.props.flash.message" class="text-blue-600">
                {{ $page.props.flash.message }}
            </div>
            <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                <div
                    class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                    <div class="w-full md:w-1/2">
                        <div class="flex items-center">
                            <label for="simple-search" class="sr-only">Search</label>
                            <div class="relative w-full">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                         fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                </div>
                                <input v-model="filtersQuery.search" type="text" id="simple-search"
                                       class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                       placeholder="Search" required="">
                            </div>
                        </div>
                    </div>
                    <div
                        class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">

                        <Store :brands="brands" :categories="categories"/>

                        <div class="flex items-center space-x-3 w-full md:w-auto">
                            <select v-model="filtersQuery.sortBy" id="countries"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="title">Title</option>
                                <option value="price_asc">Price (asc)</option>
                                <option value="price_desc">Price (desc)</option>
                            </select>

                            <button id="filterDropdownButton" data-dropdown-toggle="filterDropdown"
                                    class="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                    type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                                     class="h-4 w-4 mr-2 text-gray-400" viewbox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd"
                                          d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                                          clip-rule="evenodd"/>
                                </svg>
                                Filter
                                <svg class="-mr-1 ml-1.5 w-5 h-5" fill="currentColor" viewbox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path clip-rule="evenodd" fill-rule="evenodd"
                                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
                                </svg>
                            </button>
                            <div id="filterDropdown"
                                 class="z-10 hidden w-48 p-3 bg-white rounded-lg shadow dark:bg-gray-700">
                                <h6 class="mb-3 text-sm font-medium text-gray-900 dark:text-white">Choose brand</h6>
                                <ul class="space-y-2 text-sm" aria-labelledby="filterDropdownButton">
                                    <li v-for="brand in brands" class="flex items-center">
                                        <input :id="`brand_${brand.id}`" type="checkbox" value=""
                                               class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                        <label :for="`brand_${brand.id}`"
                                               class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">{{ brand.title }} ({{ brand.products_count }})</label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-4 py-3">Product name</th>
                            <th scope="col" class="px-4 py-3">Category</th>
                            <th scope="col" class="px-4 py-3">Brand</th>
                            <th scope="col" class="px-4 py-3">Quantity</th>
                            <th scope="col" class="px-4 py-3">Price</th>
                            <th scope="col" class="px-4 py-3">InStock</th>
                            <th scope="col" class="px-4 py-3">IsPublished</th>
                            <th scope="col" class="px-4 py-3">
                                <span class="sr-only">Actions</span>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="product in products.data" :key="product.id" class="border-b dark:border-gray-700">
                            <th scope="row"
                                class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ product.title }}
                            </th>
                            <td class="px-4 py-3">{{ product.category.title }}</td>
                            <td class="px-4 py-3">{{ product.brand.title }}</td>
                            <td class="px-4 py-3">{{ product.quantity }}</td>
                            <td class="px-4 py-3">${{ product.price }}</td>
                            <td class="px-4 py-3">
                                <span v-if="product.in_stock"
                                      class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">In stock</span>
                                <span v-else
                                      class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">Out of stock</span>
                            </td>
                            <td class="px-4 py-3">
                                <button
                                    v-if="product.is_public"
                                    type="button"
                                    @click="changePublish(product.id, false)"
                                    class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                >
                                    Unpublish?
                                </button>
                                <button
                                    v-else
                                    type="button"
                                    @click="changePublish(product.id, true)"
                                    class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                >
                                    Publish?
                                </button>
                            </td>
                            <td class="px-4 py-3 flex items-center justify-end">
                                <Dropdown :width="'36'">
                                    <template #trigger>
                                        <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"/>
                                        </svg>
                                    </template>
                                    <template #content>
                                        <DropdownLink
                                            :href="route('admin.products.show', product.id)">
                                            Show
                                        </DropdownLink>

                                        <Update :brands="brands" :categories="categories" :product="product"/>

                                        <DropdownLink
                                            :href="route('admin.products.destroy', product)"
                                            method="delete"
                                            as="button"
                                        >
                                            Delete
                                        </DropdownLink>
                                    </template>
                                </Dropdown>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <Pagination :data="products.meta"/>

            </div>
        </div>
    </section>
</template>
