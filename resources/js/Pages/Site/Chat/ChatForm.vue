<script setup>
import {useForm, usePage} from "@inertiajs/vue3";
import {ref} from "vue";

const props = defineProps({
    parent_id: {
        type: Number,
        default: null
    }
})

const form = useForm({
    text: '',
    parent_id: props.parent_id
})

const submit = () => {
    form.post(route('chats.store'), {
        onFinish: () => form.reset(),
    })
    form.reset()
}

const isTyping = ref(false)
const typingUser = ref(null)
const user = usePage().props.auth.user

window.Echo.private('chat-channel.1')
    .listenForWhisper('typing', (data) => {
        typingUser.value = data.username
        isTyping.value = true

        setTimeout(() => {
            isTyping.value = false
        }, 3000)
    })

const notifyTyping = () => {
    if (form.text.length > 0) {
        window.Echo.private('chat-channel.1')
            .whisper('typing', {
                username: user.name
            })
    }
}
</script>
<template>
    <form @submit.prevent="submit" class="mb-6">
        <div class="py-2" v-if="isTyping">
            <p>{{ typingUser }} печатает...</p>
        </div>

        <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <label for="comment" class="sr-only">Your comment</label>
            <textarea v-model="form.text" @input="notifyTyping" id="comment" rows="2"
                      class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                      placeholder="Write a comment..." required></textarea>
        </div>
        <button
            type="submit"
            class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
            :class="{ 'opacity-25': form.processing }"
            :disabled="form.processing">
            Send
        </button>
    </form>
</template>
