import peerDepsExternal from "rollup-plugin-peer-deps-external";
import vue from "@vitejs/plugin-vue";

export default [
  {
    input: "src/index.js",
    output: [
      {
        format: "esm",
        file: "dist/index.mjs",
      },
      {
        format: "cjs",
        file: "dist/index.js",
      },
    ],
    plugins: [vue(), peerDepsExternal()],
  },
];
