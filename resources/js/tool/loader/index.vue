<template>
  <div class="mt-6 select-none text-center">

    <template v-if="!$parent.loading && $parent.items.total !== $parent.items.array.length">
      <button class="nml-btn nml-btn-primary mt-8"
              type="button"
              @click="$parent.loader">
        {{ __('More') }}
      </button>

      <div class="mt-2 text-sm text-gray-500 dark:text-gray-400" v-if="$parent.items.total">
        {{ __('Displayed') }} {{ $parent.items.array.length }} / {{ $parent.items.total }}
      </div>
    </template>

    <div class="fixed inset-0 z-50 bg-white/50 dark:bg-gray-900/50 loader" v-if="$parent.loading">
      <loading-view />
    </div>

  </div>
</template>

<script src="./script.js"></script>
