
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {email: 'user1@yahoo.com', username: 'user1', password: '$2a$10$16HA89xoCCWDZ.Kfjes6vepMaZKYZ106z/b5CTXVnxtO/l8DvEMyi', fname: 'Gary', lname: 'luser1', bio: 'Seeking Adventure', age: 24, zipcode: '95011', img_url:"https://s3-eu-west-1.amazonaws.com/video.gallereplay.com/production/user_74/picture_17112016100959.jpg", seeking: "", gender:""},
        {email: 'user2@yahoo.com', username: 'user2', password: '$2a$10$16HA89xoCCWDZ.Kfjes6vepMaZKYZ106z/b5CTXVnxtO/l8DvEMyi', fname: 'fuser2', lname: 'luser2', bio: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.', age: 22, zipcode: '95012'},
        {email: 'user3@yahoo.com', username: 'user3', password: '$2a$10$16HA89xoCCWDZ.Kfjes6vepMaZKYZ106z/b5CTXVnxtO/l8DvEMyi', fname: 'fuser3', lname: 'luser3', bio: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.', age: 24, zipcode: '95013'},
        {email: 'user4@yahoo.com', username: 'user4', password: '$2a$10$16HA89xoCCWDZ.Kfjes6vepMaZKYZ106z/b5CTXVnxtO/l8DvEMyi', fname: 'fuser4', lname: 'luser4', bio: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.', age: 21, zipcode: '95014'},
        {email: 'user5@yahoo.com', username: 'user5', password: '$2a$10$16HA89xoCCWDZ.Kfjes6vepMaZKYZ106z/b5CTXVnxtO/l8DvEMyi', fname: 'fuser5', lname: 'luser5', bio: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.', age: 31, zipcode: '95015'},
        {email: 'user6@yahoo.com', username: 'user6', password: '$2a$10$16HA89xoCCWDZ.Kfjes6vepMaZKYZ106z/b5CTXVnxtO/l8DvEMyi', fname: 'fuser6', lname: 'luser6', bio: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.', age: 32, zipcode: '95016'}
      ]);
    });
};
