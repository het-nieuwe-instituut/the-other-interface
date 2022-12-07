import updateTriplyLabels from "./update-triply-labels";

export default {
  // every sunday at 5am
  // "0 0 5 * * 0": ({ strapi }) => updateTriplyLabels(strapi),
  "0 03 14 * * *": ({ strapi }) => updateTriplyLabels(strapi),
};
