'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {

  count(ctx) {
    if (ctx.query._q) {
      return strapi.services.apple.countSearch(ctx.query);
    }
    return strapi.services.apple.count(ctx.query);
  },
};
