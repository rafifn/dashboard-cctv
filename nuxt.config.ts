// https://nuxt.com/docs/api/configuration/nuxt-config
import eslint from 'vite-plugin-eslint2'

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  devServer: { host: '0.0.0.0' },
  app: {
    head: {
      htmlAttrs: {
        'data-bs-theme': 'dark',
      },
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css',
        },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css',
        },
        {
          rel: 'stylesheet',
          href: 'https://unpkg.com/video.js/dist/video-js.css',
        },
      ],
      script: [
        {
          src: 'https://kit.fontawesome.com/8c29040fef.js',
          crossorigin: 'anonymous',
        },
      ],
    },
  },
  modules: ['@nuxt/eslint', '@vee-validate/nuxt', '@nuxt/ui'],
  eslint: {
    checker: true,
    config: {
      stylistic: {
        indent: 2,
        quotes: 'single',
        semi: false,
      },
    },
  },
  css: ['~/assets/scss/styles.scss', '~/assets/app.min.css', '~/assets/vendor.min.css'],
  vite: {
    plugins: [eslint({ fix: true })],
    // Better support for Tauri CLI output
    clearScreen: false,
    // Enable environment variables
    // Additional environment variables can be found at
    // https://v2.tauri.app/reference/environment-variables/
    envPrefix: ['VITE_', 'TAURI_'],
    server: {
      // Tauri requires a consistent port
      strictPort: true,
      hmr: {
        // Use websocket for mobile hot reloading
        protocol: 'ws',
        // Make sure it's available on the network
        host: '0.0.0.0',
        // Use a specific port for hmr
        port: 5183,
      },
    },
  },
  runtimeConfig: {
    apiPartyEndpointsKorlantasUrl: '',
    apiPartyEndpointsKorlantasToken: '',
    apiPartyEndpointsDukcapilUrl: '',
    apiPartyEndpointsDukcapilToken: '',
    public: {
      apiBaseUrl: '',
      permissions: '',
      recordingBaseUrl: '',
      streamBaseUrl: '',
    },
  },
})
