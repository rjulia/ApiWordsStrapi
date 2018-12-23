'use strict';

/**
 * Word.js controller
 *
 * @description: A set of functions called "actions" for managing `Word`.
 */

module.exports = {

  /**
   * Retrieve word records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.word.search(ctx.query);
    } else {
      return strapi.services.word.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a word record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.word.fetch(ctx.params);
  },

  /**
   * Count word records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.word.count(ctx.query);
  },

  /**
   * Create a/an word record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.word.add(ctx.request.body);
  },

  /**
   * Update a/an word record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.word.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an word record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.word.remove(ctx.params);
  }
};
