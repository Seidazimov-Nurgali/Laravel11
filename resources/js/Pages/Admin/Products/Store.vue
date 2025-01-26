<script setup>
import {nextTick, onMounted, ref, watch} from "vue";
import Modal from "@/Components/Modal.vue";
import {useForm} from "@inertiajs/vue3";
import {Dropzone} from "dropzone";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import TextInput from "@/Components/TextInput.vue";
import Checkbox from "@/Components/Checkbox.vue";

defineProps({
    categories: {
        type: Object,
        required: true
    },
    brands: {
        type: Object,
        required: true
    }
})

const creatingProduct = ref(false)

const form = useForm({
    title: '',
    brand_id: '',
    category_id: '',
    price: '',
    quantity: '',
    description: '',
    isPublished: true,
    inStock: true,
    isNew: true,
    isSale: false,
    images: []
})

watch(creatingProduct, (val) => {
    if (val){
        nextTick(() => {
            initializeDropzone()
        })
    }
})

// Dropzone.autoDiscover = false;
const dropRef = ref(null)
const dropzone = ref(null)
const initializeDropzone = () => {
    if (dropRef.value !== null) {
        dropzone.value = new Dropzone(dropRef.value, {
            url: 'test',
            autoProcessQueue: false,
            addRemoveLinks: true
        })
    }
}

const createProduct = () => {
    creatingProduct.value = true;
}

const closeModal = () => {
    creatingProduct.value = false;

    form.clearErrors();
    form.reset();
}

const submit = () => {
    form.images = dropzone.value.getAcceptedFiles()
    if (form.images.length > 0) {
        form.post(route('admin.products.store'), {
            onSuccess: () => closeModal(),
            onFinish: () => form.reset(),
        });
    }
}
</script>

<template>
    <button @click="createProduct"
            class="flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        <svg class="h-3.5 w-3.5 mr-2" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
             aria-hidden="true">
            <path clip-rule="evenodd" fill-rule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"/>
        </svg>
        Add product
    </button>
    <Modal :show="creatingProduct" @close="closeModal">
        <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new product</h2>
                <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <div class="sm:col-span-2">
                        <InputLabel value="Product Name" for="name" class="mb-2 text-gray-900 dark:text-white" />

                        <TextInput
                            id="name"
                            type="text"
                            class="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            v-model="form.title"
                            placeholder="Type product name"
                        />

                        <InputError class="mt-2" :message="form.errors.title"/>
                    </div>
                    <div>
                        <InputLabel value="Brand" for="brand" class="mb-2 text-gray-900 dark:text-white" />

                        <select
                            id="brand"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            v-model="form.brand_id"
                        >
                            <option v-for="brand in brands" :value="brand.id">{{ brand.title }}</option>
                        </select>

                        <InputError class="mt-2" :message="form.errors.brand_id" />
                    </div>
                    <div class="w-full">
                        <InputLabel value="Price $" for="price" class="mb-2 text-gray-900 dark:text-white" />

                        <TextInput
                            id="price"
                            type="number"
                            class="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            v-model="form.price"
                            placeholder="0"
                        />

                        <InputError class="mt-2" :message="form.errors.price"/>
                    </div>
                    <div>
                        <InputLabel value="Category" for="category" class="mb-2 text-gray-900 dark:text-white" />

                        <select
                            id="category"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            v-model="form.category_id"
                        >
                            <option v-for="cat in categories" :value="cat.id">{{ cat.title }}</option>
                        </select>

                        <InputError class="mt-2" :message="form.errors.category_id" />
                    </div>
                    <div>
                        <InputLabel value="Quantity" for="quantity" class="mb-2 text-gray-900 dark:text-white" />

                        <TextInput
                            id="quantity"
                            type="number"
                            class="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            v-model="form.quantity"
                            placeholder="0"
                        />

                        <InputError class="mt-2" :message="form.errors.quantity"/>
                    </div>
                    <div>
                        <label class="inline-flex items-center cursor-pointer">
                            <Checkbox name="isPublished" v-model:checked="form.isPublished"/>
                            <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Publish?</span>
                        </label>
                    </div>
                    <div>
                        <label class="inline-flex items-center cursor-pointer">
                            <Checkbox name="inStock" v-model:checked="form.inStock" class="sr-only peer"/>
                            <div
                                class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">In Stock?</span>
                        </label>
                    </div>
                    <div class="sm:col-span-2">
                        <InputLabel value="Description" for="description" class="mb-2 text-gray-900 dark:text-white" />

                        <textarea
                            id="description"
                            rows="8"
                            v-model="form.description"
                            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Your description here"
                        ></textarea>

                        <InputError class="mt-2" :message="form.errors.description"/>
                    </div>
                    <div>
                        <label class="inline-flex items-center cursor-pointer">
                            <Checkbox name="isSale" v-model:checked="form.isSale" class="sr-only peer"/>
                            <div
                                class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Is Sale?</span>
                        </label>
                    </div>
                    <div>
                        <label class="inline-flex items-center cursor-pointer">
                            <Checkbox name="isNew" v-model:checked="form.isNew" class="sr-only peer"/>
                            <div
                                class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Is New?</span>
                        </label>
                    </div>

                    <div class="flex items-center justify-center w-full">
                        <label for="dropzone-file"
                               class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2"
                                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                </svg>
                                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span>
                                    or drag and drop</p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX.
                                    800x400px)</p>
                            </div>
                            <input ref="dropRef" id="dropzone-file" type="file" class="hidden"/>
                        </label>
                    </div>
                </div>
                <button class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-yellow-700 rounded-lg focus:ring-4 focus:ring-yellow-200 dark:focus:ring-yellow-900 hover:bg-yellow-800"
                        @click="closeModal">
                    Cancel
                </button>
                <button
                    class="inline-flex items-center px-5 py-2.5 mt-4 ml-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                    :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing"
                    @click="submit"
                >
                    Add product
                </button>
            </div>
        </section>
    </Modal>
</template>
