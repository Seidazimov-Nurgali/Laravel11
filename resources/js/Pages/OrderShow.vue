<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import {computed, ref} from "vue";

const props = defineProps({
    order: Object
})

let vatPrice = ref(0)
let price = ref(0)

price.value = computed(() => props.order.products.reduce((acc, product) => acc + (product.pivot.quantity * product.pivot.product_price), 0))
vatPrice.value = computed(() => (Number(price.value.value) * 5) / 100)
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <template #header>
            <h2
                class="text-xl font-semibold leading-tight text-gray-800"
            >
                Dashboard
            </h2>
        </template>

        <div class="py-12">
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div
                    class="overflow-hidden bg-white shadow-sm sm:rounded-lg"
                >
                    <div class="p-6 text-gray-900">
                        <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
                            <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
                                <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Track the delivery of order #{{order.id}}</h2>

                                <div class="mt-6 sm:mt-8 lg:flex lg:gap-8">
                                    <div class="w-full divide-y divide-gray-200 overflow-hidden rounded-lg border border-gray-200 dark:divide-gray-700 dark:border-gray-700 lg:max-w-xl xl:max-w-2xl">

                                        <div v-for="product in order.products" class="space-y-4 p-6">
                                            <div class="flex items-center gap-6">
                                                <a href="#" class="h-14 w-14 shrink-0">
                                                    <img class="h-full w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-light.svg" alt="phone image" />
                                                    <img class="hidden h-full w-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-dark.svg" alt="phone image" />
                                                </a>

                                                <a href="#" class="min-w-0 flex-1 font-medium text-gray-900 hover:underline dark:text-white"> {{ product.title }} </a>
                                            </div>

                                            <div class="flex items-center justify-between gap-4">
                                                <p class="text-sm font-normal text-gray-500 dark:text-gray-400"><span class="font-medium text-gray-900 dark:text-white">Product ID:</span> {{ product.id }}</p>

                                                <div class="flex items-center justify-end gap-4">
                                                    <p class="text-base font-normal text-gray-900 dark:text-white">x{{product.pivot.quantity}}</p>

                                                    <p class="text-xl font-bold leading-tight text-gray-900 dark:text-white">${{product.pivot.quantity * product.pivot.product_price}}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="space-y-4 bg-gray-50 p-6 dark:bg-gray-800">
                                            <div class="space-y-2">
                                                <dl class="flex items-center justify-between gap-4">
                                                    <dt class="font-normal text-gray-500 dark:text-gray-400">Original price</dt>
                                                    <dd class="font-medium text-gray-900 dark:text-white">${{ price }}</dd>
                                                </dl>

                                                <dl class="flex items-center justify-between gap-4">
                                                    <dt class="font-normal text-gray-500 dark:text-gray-400">Savings</dt>
                                                    <dd class="text-base font-medium text-green-500">-$299.00</dd>
                                                </dl>

                                                <dl class="flex items-center justify-between gap-4">
                                                    <dt class="font-normal text-gray-500 dark:text-gray-400">Tax</dt>
                                                    <dd class="font-medium text-gray-900 dark:text-white">${{ vatPrice }}</dd>
                                                </dl>
                                            </div>

                                            <dl class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                                                <dt class="text-lg font-bold text-gray-900 dark:text-white">Total</dt>
                                                <dd class="text-lg font-bold text-gray-900 dark:text-white">${{ order.total_price }}</dd>
                                            </dl>
                                        </div>
                                    </div>

                                    <div class="mt-6 grow sm:mt-8 lg:mt-0">
                                        <div class="space-y-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                                            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Order history</h3>

                                            <ol class="relative ms-3 border-s border-gray-200 dark:border-gray-700">
                                                <li class="mb-10 ms-6">
              <span class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white dark:bg-gray-700 dark:ring-gray-800">
                <svg class="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"/>
                </svg>
              </span>
                                                    <h4 class="mb-0.5 text-base font-semibold text-gray-900 dark:text-white">Estimated delivery in 24 Nov 2023</h4>
                                                    <p class="text-sm font-normal text-gray-500 dark:text-gray-400">Products delivered</p>
                                                </li>

                                                <li class="mb-10 ms-6">
              <span class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white dark:bg-gray-700 dark:ring-gray-800">
                <svg class="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>
                </svg>
              </span>
                                                    <h4 class="mb-0.5 text-base font-semibold text-gray-900 dark:text-white">Today</h4>
                                                    <p class="text-sm font-normal text-gray-500 dark:text-gray-400">Products being delivered</p>
                                                </li>

                                                <li class="mb-10 ms-6 text-blue-700 dark:text-blue-500">
              <span class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-800">
                <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
                </svg>
              </span>
                                                    <h4 class="mb-0.5 font-semibold">19 Nov 2023, 10:47</h4>
                                                    <p class="text-sm">Payment accepted - VISA Credit Card</p>
                                                </li>

                                                <li class="ms-6 text-blue-700 dark:text-blue-500">
              <span class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-800">
                <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
                </svg>
              </span>
                                                    <div>
                                                        <h4 class="mb-0.5 font-semibold">19 Nov 2023, 10:45</h4>
                                                        <a href="#" class="text-sm font-medium hover:underline">Order placed - Receipt #647563</a>
                                                    </div>
                                                </li>
                                            </ol>

                                            <div class="gap-4 sm:flex sm:items-center">
                                                <button type="button" class="w-full rounded-lg  border border-gray-200 bg-white px-5  py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">Cancel the order</button>

                                                <a href="#" class="mt-4 flex w-full items-center justify-center rounded-lg bg-blue-700  px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:mt-0">Order details</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
