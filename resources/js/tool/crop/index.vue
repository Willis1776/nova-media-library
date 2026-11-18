<template>
  <div id="nml_cropper" class="popup fixed inset-0 z-50 overflow-y-auto bg-gray-500/75 dark:bg-gray-900/75 px-4 py-16">
    <div class="absolute inset-0 z-20" @click="$parent.$parent.popup = 'info'"></div>

    <div class="relative z-30 mx-auto w-full max-w-[1000px] overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-lg text-gray-900 dark:text-gray-100">

      <div><img :src="$parent.$parent.item.url +'?'+ Date.now()" id="cropper-img" /></div>


      <div class="flex border-b border-gray-100 dark:border-gray-700 leading-loose">
        <div class="py-2 px-4">{{ __('Width x Height') }}</div>
        <div class="ml-auto py-2 px-4 font-bold text-right">{{ info.width || 0 }} x {{ info.height || 0 }}</div>
      </div>

      <div class="flex items-center border-b border-gray-100 dark:border-gray-700 leading-loose">
        <div class="py-2 px-4">{{ __('Rotate') }}</div>
        <div class="ml-auto py-2 px-4 text-right">
          <input
            class="form-control form-input form-control-bordered w-24"
            type="number" min="0" max="360"
            v-model="info.rotate"
            @input="rotate"
          />
        </div>
      </div>


      <div class="flex py-4 px-4">
        <template v-if="info.width && info.height">
          <button type="button" class="nml-btn nml-btn-primary mr-4" @click="save(0)">
            {{ __('Save as new') }}
          </button>

          <button type="button" class="nml-btn nml-btn-primary mr-4" @click="save(1)">
            {{ __('Overwrite existing') }}
          </button>
        </template>

        <button type="button" class="nml-btn nml-btn-secondary ml-auto"
                @click="crop.clear().reset()">x1</button>
        <button type="button" class="nml-btn nml-btn-danger ml-4" @click="$parent.$parent.popup = 'info'">
          {{ __('Cancel') }}
        </button>
      </div>


    </div>

  </div>
</template>

<script src="./script.js"></script>
