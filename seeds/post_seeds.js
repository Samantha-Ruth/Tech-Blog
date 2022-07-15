const { Post } = require('../models');

const postData = [
  {
    title: 'The Voices in Your Head',
    post_url: 'www.joanofarc/hearingvoices.com',
    user_id: 1, 
  },
  {
    title: 'Pity, pity, too late',
    post_url: 'www.beethoven/toolittletoolate.com',
    user_id: 2,
  },
  {
    title: 'On Colonialism',
    post_url: 'www.jamescook/societymademedoit',
    user_id: 3,
  },
  {
    title: 'Single Origin',
    post_url: 'www.darwin/unitaryspeciesofsingleorigin.com',
    user_id: 4,
  },
  {
    title: 'Educated in Secret',
    post_url: 'www.mariecurie/flyinguniversity.com',
    user_id: 5, 
  },
];

const seedPostData = () => Post.bulkCreate(postData);

module.exports = seedPostData;
