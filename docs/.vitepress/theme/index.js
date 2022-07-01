import DefaultTheme from "vitepress/theme";
import VWeed from "../../../src/";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(VWeed);
  },
};
