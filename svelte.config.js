import adapter from "@sveltejs/adapter-node";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    // See https://svelte.dev/docs/kit/adapters for more information about adapters.
    adapter: adapter(),

    // See https://svelte.dev/docs/kit/configuration#env
    env: {
      privatePrefix: "KW_SECRET_",
      publicPrefix: "KW_PUBLIC_",
    },
  },
};

export default config;
