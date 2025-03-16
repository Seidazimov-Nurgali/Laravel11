<script setup>
import ChatForm from "@/Pages/Site/Chat/ChatForm.vue";

defineProps({
    chats: {
        type: Array,
        required: true
    }
})
</script>
<template v-if="chats.length > 0">
    <template v-for="chat in chats" :key="chat.id">
        <article class="p-6 text-base bg-white rounded-lg dark:bg-gray-900">
            <footer class="flex justify-between items-center mb-2">
                <div class="flex items-center">
                    <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold"><img
                        class="mr-2 w-6 h-6 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                        alt="Michael Gough">{{ chat.user?.name }}</p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                        <time datetime="2022-02-08" title="February 8th, 2022">{{ chat.created_at }}</time>
                    </p>
                </div>
            </footer>
            <p class="text-gray-500 dark:text-gray-400">{{ chat.text }}</p>
            <div class="flex items-center mt-4 space-x-4">
                <ChatForm :parent_id="chat.id"/>
            </div>
        </article>
        <div v-if="chat.children?.length > 0" class="ml-6">
            <ChatList :chats="chat.children"/>
        </div>
    </template>
</template>
