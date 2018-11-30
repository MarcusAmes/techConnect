
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('connections').del()
    .then(function () {
      // Inserts seed entries
      return knex('connections').insert([
        {match_one_user_id: 1, match_two_user_id: 5, connected: true},
        {match_one_user_id: 2, match_two_user_id: 6, connected: true},
        {match_one_user_id: 3, match_two_user_id: 6, connected: true},
        {match_one_user_id: 1, match_two_user_id: 6, connected: true},
        {match_one_user_id: 8, match_two_user_id: 3, connected: false},
        {match_one_user_id: 9, match_two_user_id: 3, connected: false},
        {match_one_user_id: 12, match_two_user_id: 3, connected: false},
      ]);
    });
};
