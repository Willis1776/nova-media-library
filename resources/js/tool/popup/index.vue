<template>
  <div class="popup fixed inset-0 z-50 overflow-y-auto bg-gray-500/75 dark:bg-gray-900/75 px-4 py-16">
    <div class="absolute inset-0 z-20" @click="$parent.$parent.item = null"></div>

    <div class="relative z-30 mx-auto w-full max-w-xl rounded-lg bg-white dark:bg-gray-800 p-8 shadow-lg text-gray-900 dark:text-gray-100">

      <button type="button" class="nml-close select-none text-gray-400 hover:text-gray-600 dark:hover:text-gray-200" @click="$parent.$parent.item = null">&times;</button>

      <div class="flex border-b border-gray-100 dark:border-gray-700">
        <div class="w-1/4 py-4 font-bold text-gray-500 dark:text-gray-400">{{ __('ID') }}</div>
        <div class="w-3/4 py-4">{{ $parent.$parent.item.id }}</div>
      </div>

      <div class="flex border-b border-gray-100 dark:border-gray-700">
        <div class="w-1/4 py-4 font-bold text-gray-500 dark:text-gray-400">{{ __('Uploaded') }}</div>
        <div class="w-3/4 py-4">{{ $parent.$parent.item.created }}</div>
      </div>

      <div class="flex border-b border-gray-100 dark:border-gray-700">
        <div class="w-1/4 py-4 font-bold text-gray-500 dark:text-gray-400">{{ __('Type') }}</div>
        <div class="w-3/4 py-4">{{ $parent.$parent.item.type }}</div>
      </div>

      <div class="flex border-b border-gray-100 dark:border-gray-700">
        <div class="w-1/4 py-4 font-bold text-gray-500 dark:text-gray-400">{{ __('Size') }}</div>
        <div class="w-3/4 py-4">{{ $parent.$parent.item.options.size }}</div>
      </div>

      <div class="flex items-center border-b border-gray-100 dark:border-gray-700">
        <div class="w-1/4 py-4 font-bold text-gray-500 dark:text-gray-400">{{ __('Title') }}</div>
        <div class="w-3/4 py-4">
          <input class="form-control form-input form-control-bordered w-full" v-model="$parent.$parent.item.title">
        </div>
      </div>

      <div class="flex items-center border-b border-gray-100 dark:border-gray-700" v-if="$parent.$parent.config.can_private">
        <div class="w-1/4 py-4 font-bold text-gray-500 dark:text-gray-400">{{ __('Private') }}</div>
        <div class="w-3/4 py-4">
          <checkbox
            class="cursor-pointer"
            :checked="$parent.$parent.item.private"
            @click="onPrivate"
          />
        </div>
      </div>

      <div class="flex items-center border-b border-gray-100 dark:border-gray-700" v-if="`folders` === $parent.$parent.config.store">
        <div class="w-1/4 py-4 font-bold text-gray-500 dark:text-gray-400">{{ __('Move to folder') }}</div>
        <div class="w-3/4 py-4">
          <select v-model="folder" class="form-control form-input form-control-bordered form-select w-full cursor-pointer">
            <option :value="null"></option>
            <option
              v-for="key in folders"
              :value="key"
              :key="key">
              {{ key }}
            </option>
          </select>
        </div>
      </div>

      <div class="flex border-b border-gray-100 dark:border-gray-700">
        <div class="w-1/4 py-4 font-bold text-gray-500 dark:text-gray-400">{{ __('Url') }}</div>
        <div class="w-3/4 py-4">
          <div class="mb-2 break-all text-sm text-gray-500 dark:text-gray-400">{{ $parent.$parent.item.url }}</div>
          <a class="font-bold text-primary-500 hover:text-primary-400 no-underline" :href="$parent.$parent.item.url" target="_blank">{{ __('Open') }}</a>
          <button type="button" class="ml-4 font-bold text-primary-500 hover:text-primary-400 cursor-pointer"
                  v-clipboard:copy="$parent.$parent.item.url" v-clipboard:success="onCopy">{{ __('Copy') }}</button>
        </div>
      </div>

      <div class="flex mt-6">
        <button type="button" class="nml-btn nml-btn-primary mr-4" @click="update">
          {{ __('Update') }}
        </button>

        <button type="button" class="nml-btn nml-btn-secondary mr-4"
                @click="$parent.$parent.popup = 'crop'"
                v-if="$parent.$parent.config.front_crop && 'image' === $parent.$parent.item.options.mime">
          {{ __('Edit Image') }}
        </button>

        <button type="button" class="nml-btn nml-btn-danger ml-auto"
                @click="$parent.$parent.deleteFiles([$parent.$parent.item.id])">
          {{ __('Delete') }}
        </button>

      </div>

    </div>
  </div>
</template>

<script src="./script.js"></script>
