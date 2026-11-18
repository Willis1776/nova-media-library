const mix = require('laravel-mix')
const webpack = require('webpack')
const path = require('path')

class NovaExtension {
  name() {
    return 'nova-extension'
  }

  register(name) {
    this.name = name
  }

  webpackConfig(webpackConfig) {
    // Nova 4.x/5.x expose Vue and the Nova mixins as globals at runtime.
    webpackConfig.externals = {
      vue: 'Vue',
      'laravel-nova': 'LaravelNova',
    }

    webpackConfig.output = {
      uniqueName: this.name,
    }
  }
}

mix.extend('nova', new NovaExtension())
