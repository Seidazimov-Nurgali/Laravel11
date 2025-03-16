<script setup>
import {useForm} from "@inertiajs/vue3";
import InputError from "@/Components/InputError.vue";
import {nextTick, ref, watch} from "vue";
import {Dropzone} from "dropzone";
import Modal from "@/Components/Modal.vue";
import TextInput from "@/Components/TextInput.vue";
import InputLabel from "@/Components/InputLabel.vue";
import Checkbox from "@/Components/Checkbox.vue";

const props = defineProps({
    categories: {
        type: Object,
        required: true
    },
    brands: {
        type: Object,
        required: true
    },
    product: {
        type: Object,
        required: true
    }
})

const form = useForm({
    id: props.product.id,
    title: props.product.title,
    brand_id: props.product.brand.id,
    category_id: props.product.category.id,
    price: props.product.price,
    quantity: props.product.quantity,
    description: props.product.description,
    isPublished: !!props.product.is_public,
    inStock: !!props.product.in_stock,
    isNew: !!props.product.is_new,
    isSale: !!props.product.is_sale,
    images: props.product.product_images,
    removedImageIds: [],
    _method: 'PATCH'
});

const editingProduct = ref(false)
const editProduct = () => {
    editingProduct.value = true;
}
const closeModal = () => {
    editingProduct.value = false;

    form.clearErrors();
    form.reset();
}
watch(editingProduct, (val) => {
    if (val) {
        nextTick(() => {
            initializeDropzone()
        })
    }
})
const dropRef = ref(null)
const dropzone = ref(null)
const initializeDropzone = () => {
    dropzone.value = new Dropzone(dropRef.value, {
        url: 'test',
        autoProcessQueue: false,
        addRemoveLinks: true
    })

    form.images.forEach(image => {
        let file = {id: image.id, name: image.name, size: image.size}
        dropzone.value.displayExistingFile(file, image.image_url, null, null)
    })

    dropzone.value.on("removedfile", (file) => {
        form.removedImageIds.push(file.id)
    })
}
const submit = () => {
    form.images = dropzone.value.getAcceptedFiles()
    form.post(route('admin.products.update', form.id), {
        onSuccess: () => closeModal(),
        onFinish: () => form.reset(),
    });
};

</script>

<template>
    <button
        @click="editProduct"
        class="block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
    >
        Edit
    </button>
    <Modal :show="editingProduct" @close="closeModal">
        <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Edit product</h2>
                <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <div class="sm:col-span-2">
                        <InputLabel value="Product Name" for="name" class="mb-2 text-gray-900 dark:text-white"/>

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
                        <InputLabel value="Brand" for="brand" class="mb-2 text-gray-900 dark:text-white"/>
                        <select
                            id="brand"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            v-model="form.brand_id"
                        >
                            <option v-for="brand in brands" :value="brand.id">{{ brand.title }}</option>
                            <option v-for="brand in brands" :value="brand.id"
                                    :selected="form.brand_id === brand.id">{{ brand.title }}
                            </option>
                        </select>

                        <InputError class="mt-2" :message="form.errors.brand_id"/>
                    </div>
                    <div class="w-full">
                        <InputLabel value="Price $" for="price" class="mb-2 text-gray-900 dark:text-white"/>

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
                        <InputLabel value="Category" for="category" class="mb-2 text-gray-900 dark:text-white"/>

                        <select
                            id="category"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            v-model="form.category_id"
                        >
                            <option v-for="cat in categories" :value="cat.id"
                                    :selected="form.category_id === cat.id">{{ cat.title }}
                            </option>
                        </select>

                        <InputError class="mt-2" :message="form.errors.category_id"/>
                    </div>
                    <div>
                        <InputLabel value="Quantity" for="quantity" class="mb-2 text-gray-900 dark:text-white"/>

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
                        <InputLabel value="Description" for="description"
                                    class="mb-2 text-gray-900 dark:text-white"/>

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
                            <Checkbox name="isNew" v-model:checked="form.isNew" class="sr-only peer"/>
                            <div
                                class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Is New?</span>
                        </label>
                    </div>
                    <div>
                        <label class="inline-flex items-center cursor-pointer">
                            <Checkbox name="isSale" v-model:checked="form.isSale" class="sr-only peer"/>
                            <div
                                class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Is Sale?</span>
                        </label>
                    </div>
                    <div ref="dropRef" class="dropzone">

                    </div>
                </div>
                <button
                    class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-yellow-700 rounded-lg focus:ring-4 focus:ring-yellow-200 dark:focus:ring-yellow-900 hover:bg-yellow-800"
                    @click="closeModal">
                    Cancel
                </button>
                <button
                    class="inline-flex items-center px-5 py-2.5 mt-4 ml-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                    :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing"
                    @click="submit"
                >
                    Update product
                </button>
            </div>
        </section>
    </Modal>
</template>
