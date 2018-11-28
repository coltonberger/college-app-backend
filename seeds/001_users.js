
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, firstName: 'Colton', lastName: 'Berger', email: 'colton@gmail.com', password: '1234567890', ambassedor: 't'},
        {id: 2, firstName: 'Max', lastName: 'Berger', email: 'max@gmail.com', password: '1234567890', ambassedor: 'f'},
        {id: 3, firstName: 'Joey', lastName: 'Berger', email: 'joey@gmail.com', password: '1234567890', ambassedor: 'f'}
      ]);
    });
};
