
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {email: 'user1@yahoo.com', username: 'user1', password: 'user1', fname: 'fuser1', lname: 'luser1', bio: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.', age: 19, zipcode: '95011'},
        {email: 'user2@yahoo.com', username: 'user2', password: 'user2', fname: 'fuser2', lname: 'luser2', bio: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.', age: 22, zipcode: '95012'},
        {email: 'user3@yahoo.com', username: 'user3', password: 'user3', fname: 'fuser3', lname: 'luser3', bio: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.', age: 24, zipcode: '95013'},
        {email: 'user4@yahoo.com', username: 'user4', password: 'user4', fname: 'fuser4', lname: 'luser4', bio: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.', age: 21, zipcode: '95014'},
        {email: 'user5@yahoo.com', username: 'user5', password: 'user5', fname: 'fuser5', lname: 'luser5', bio: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.', age: 31, zipcode: '95015'},
        {email: 'user6@yahoo.com', username: 'user6', password: 'user6', fname: 'fuser6', lname: 'luser6', bio: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.', age: 32, zipcode: '95016'}
      ]);
    });
};
