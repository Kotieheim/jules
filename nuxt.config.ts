// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/colors.scss";',
        },
      },
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/eslint-module", "@nuxtjs/google-fonts", "@unocss/nuxt"],
  components: [
    {
      path: "~/components",
      extensions: [".vue"],
    },
  ],
});
