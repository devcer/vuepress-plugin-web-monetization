const path = require("path");

module.exports = (options = {}, context) => {
  return {
    define: {
      MONETIZATION_ADDRESS: options.address || null,
    },
    // Hook into the page data to optionally add frontmatter
    extendPageData($page) {
      // Optional: You can manipulate page data here if needed
      // This part is not required anymore since we’re injecting via enhanceApp
    },

    // Tell VuePress where the client-side app enhancement file is
    enhanceAppFiles: path.resolve(__dirname, "enhanceApp.js"),
  };
};
