export default ({ Vue }) => {
  // Use a global mixin to inject component if frontmatter.monetization is present
  Vue.mixin({
    mounted() {
      const href = (this.$page && this.$page.frontmatter && this.$page.frontmatter.monetization) || MONETIZATION_ADDRESS;
      if (href) {
        // if (!document.querySelector('link[rel="monetization"]')) {
        const link = document.createElement("link");
        link.setAttribute("rel", "monetization");
        link.setAttribute("href", href);
        document.head.appendChild(link);
        // }
      }
    },
  });
};
