module.exports = {
  async up(knex) {
    return knex.transaction(async trx => {
      try {
      } catch (error) {
        console.log('MIGRATION FAILED')
        console.error(error)
        throw error
      }
    })
  },

  async down(knex) {},
}
