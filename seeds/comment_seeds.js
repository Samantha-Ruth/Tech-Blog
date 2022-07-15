const { Comment } = require('../models');

const commentData = [
  {
    comment_text: 'Interesting!',
    user_id: 2,
    post_id: 1, 
  },
  {
    title: 'I totally agree',
    user_id: 5,
    post_id: 2, 
  },
  {
    title: 'Not sure about this one... ',
    user_id: 4,
    post_id: 3, 
  },
  {
    title: 'No way, I do not believe it.',
    user_id: 3,
    post_id: 4, 
  },
  {
    title: 'You go girl!',
    user_id: 1,
    post_id: 5,
  },
];

const seedCommentData = () => Comment.bulkCreate(commentData);

module.exports = seedCommentData;
