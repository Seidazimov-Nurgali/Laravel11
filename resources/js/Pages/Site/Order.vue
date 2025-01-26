<script setup>
import SiteLayout from "@/Pages/Site/SiteLayout.vue";
import {Head, Link} from "@inertiajs/vue3";
defineProps({
    order: Object
})
defineOptions({
    layout: SiteLayout
})
</script>
<template>
    <Head title="Order"/>
    <div class="bg-white">
            <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
                    <div class="mx-auto max-w-2xl px-4 2xl:px-0">
                        <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl mb-2">Thanks for your order!</h2>
                        <p class="text-gray-500 dark:text-gray-400 mb-6 md:mb-8">Your order <a href="#" class="font-medium text-gray-900 dark:text-white hover:underline">#{{ order.id }}</a> will be processed within 24 hours during working days. We will notify you by email once your order has been shipped.</p>
                        <div class="space-y-4 sm:space-y-2 rounded-lg border border-gray-100 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800 mb-6 md:mb-8">
                            <dl class="sm:flex items-center justify-between gap-4">
                                <dt class="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">Date</dt>
                                <dd class="font-medium text-gray-900 dark:text-white sm:text-end">{{ new Date(order.created_at).toLocaleDateString() }}</dd>
                            </dl>
                            <dl class="sm:flex items-center justify-between gap-4">
                                <dt class="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">Payment Method</dt>
                                <dd class="font-medium text-gray-900 dark:text-white sm:text-end">JPMorgan monthly installments</dd>
                            </dl>
                            <dl class="sm:flex items-center justify-between gap-4">
                                <dt class="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">Name</dt>
                                <dd class="font-medium text-gray-900 dark:text-white sm:text-end">Flowbite Studios LLC</dd>
                            </dl>
                            <dl class="sm:flex items-center justify-between gap-4">
                                <dt class="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">Address</dt>
                                <dd class="font-medium text-gray-900 dark:text-white sm:text-end">34 Scott Street, San Francisco, California, USA</dd>
                            </dl>
                            <dl class="sm:flex items-center justify-between gap-4">
                                <dt class="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">Phone</dt>
                                <dd class="font-medium text-gray-900 dark:text-white sm:text-end">+(123) 456 7890</dd>
                            </dl>
                        </div>
                        <div class="flex items-center space-x-4">
                            <Link :href="route('dashboard')" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">To Dashboard</Link>
                            <Link :href="route('main')" class="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Return to shopping</Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
</template>
