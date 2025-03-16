<script setup>
import {Link} from '@inertiajs/vue3';

defineProps({
    data: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <nav class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
         aria-label="Table navigation">
         <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
             Showing
             <span class="font-semibold text-gray-900 dark:text-white">{{ data.from }}-{{ data.to }}</span>
             of
             <span class="font-semibold text-gray-900 dark:text-white">{{ data.total }}</span>
         </span>
        <ul class="inline-flex items-stretch -space-x-px">
            <template v-for="link in data.links">
                <Link v-if="link.url"
                      :href="link.url"
                      :key="link.label"
                      v-html="link.label"
                      :class="link.active
                                    ? 'flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
                                    : 'flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'"
                />
            </template>
        </ul>
    </nav>
</template>
