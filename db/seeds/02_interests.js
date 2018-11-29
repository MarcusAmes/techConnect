
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('interests').del()
    .then(function () {
      // Inserts seed entries
      return knex('interests').insert([
        {interest: "Javascript", user_id: 1},
        {interest: "HTML", user_id: 2},
        {interest: "React", user_id: 3},
        {interest: "HTML", user_id: 4},
        {interest: "Javascript", user_id: 5},
        {interest: "React", user_id: 6},
        {interest: "Angular.js", user_id: 7},
        {interest: "Python", user_id: 8},
        {interest: "Ruby", user_id: 9},
        {interest: "Swift", user_id: 10}
      ]);
    });
};
