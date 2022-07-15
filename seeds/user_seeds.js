const { User } = require('../models');

const userData = [
  {
    username: 'Joan of Arc',
    email: 'Iheartfrance@email.com',
    password: 'Orleans1429', 
  },
  {
    username: 'Ludwig Van Beethoven',
    email: 'musicalgenius1@emailcom',
    password: 'symphony#9',
  },
  {
    username: 'James Cook',
    email: 'navigatethis@email.com',
    password: 'Australia!',
  },
  {
    username: 'Charles Darwin',
    email: 'selectionrules@email.com',
    password: 'OntheOrigin1859',
  },
  {
    username: 'Marie Curie',
    email: 'radiumplutonium@email.com',
    password: 'yeahSorbonne',
  },
];

const seedUserData = () => User.bulkCreate(userData);

module.exports = seedUserData;
