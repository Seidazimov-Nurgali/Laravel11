<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import {Head, usePage} from '@inertiajs/vue3';
import ChatForm from "@/Pages/Site/Chat/ChatForm.vue";
import ChatList from "@/Pages/Site/Chat/ChatList.vue";
import {useToast} from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import {ref} from "vue";

const $toast = useToast();

const props = defineProps({
    chats: {
      type: Object,
    },
    status: {
        type: String,
    },
})

window.Echo.channel('chat-created')
    .listen('ChatCreated', (data) => {
        $toast.success(`Public notification: ${data.chat.text}`);
    })

const user = usePage().props.auth.user
// props.chats.data.forEach((chat) => {
//     if (chat.user.id === user.id) {
//         window.Echo.private(`chats.${chat.id}`)
//             .listen('ChatAnswered', (data) => {
//                 $toast.info(`Answered for you: ${data.text}`);
//             })
//     }
// })

const allUsers = ref('')
window.Echo.join('presence.1')
    .here((users) => {
        allUsers.value = users
    })
    .joining((user) => {
        allUsers.value.push(user)
    })
    .leaving((user) => {
        allUsers.value = allUsers.value.filter((u) => u.id !== user.id)
    })
    .error((error) => {
        console.error(error);
    })

</script>

<template>
    <Head title="Chats"/>

    <AuthenticatedLayout>
        <template #header>
            <h2
                class="text-xl font-semibold leading-tight text-gray-800"
            >
                Chats
            </h2>
        </template>

        <div class="py-12">
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div
                    class="overflow-hidden bg-white shadow-sm sm:rounded-lg"
                >
                    <div class="p-6 text-gray-900">
                        <section class="bg-white dark:bg-gray-900 py-8 lg:py-16 antialiased">
                            <div class="max-w-2xl mx-auto px-4">
                                <div v-if="status" class="mb-4 text-sm font-medium text-green-600">
                                    {{ status }}
                                </div>
                                <div class="flex justify-between items-center mb-3">
                                    <h2 class="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Discussion (20)</h2>
                                </div>
                                <div class="mb-6">
                                    <h3 class="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Active users:</h3>
                                    <p v-for="(user, index) in allUsers" :key="user.id">{{ index + 1 }}. {{ user.name }}</p>
                                </div>

                                <ChatForm :parent_id="null"/>

                                <ChatList :chats="chats.data"/>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
