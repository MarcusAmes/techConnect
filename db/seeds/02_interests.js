
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('interests').del()
    .then(function () {
      // Inserts seed entries
      return knex('interests').insert([
        {interest: "Javascript", user_id: 1},
        {interest: "Javascript", user_id: 2},
        {interest: "Javascript", user_id: 6},
        {interest: "Javascript", user_id: 9},
        {interest: "Javascript", user_id: 5},
        {interest: "Javascript", user_id: 12},
        {interest: "HTML", user_id: 1},
        {interest: "HTML", user_id: 2},
        {interest: "HTML", user_id: 7},
        {interest: "HTML", user_id: 8},
        {interest: "HTML", user_id: 5},
        {interest: "HTML", user_id: 12},
        {interest: "HTML", user_id: 13},
        {interest: "React", user_id: 3},
        {interest: "React", user_id: 2},
        {interest: "React", user_id: 1},
        {interest: "React", user_id: 8},
        {interest: "React", user_id: 12},
        {interest: "React", user_id: 7},
        {interest: "React", user_id: 9},
        {interest: "React", user_id: 5},
        {interest: "HTML", user_id: 4},
        {interest: "Javascript", user_id: 5},
        {interest: "React", user_id: 6},
        {interest: "Angular.js", user_id: 7},
        {interest: "Python", user_id: 8},
        {interest: "Ruby", user_id: 9},
        {interest: "Swift", user_id: 10},
        {interest: "C++", user_id: 11},
        {interest: "Vue.js", user_id: 12},
        {interest: "Vue.js", user_id: 10},
        {interest: "Vue.js", user_id: 7},
        {interest: "Vue.js", user_id: 8},
        {interest: "CSS", user_id: 13},
        {interest: "Javascript", user_id: 14},
        {interest: "Python", user_id: 15},
        {interest: "Python", user_id: 4},
        {interest: "Python", user_id: 3},
        {interest: "Python", user_id: 11},
        {interest: "Python", user_id: 6},
      ]);
    });
};
