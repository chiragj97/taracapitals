const router = require('express').Router();
const Story = require('../models/Story');

router.post('/add', (req, res) => {
  try {
    const body = req.body;
    const storyDetails = {
      title: body.title,
      description: body.description,
      user: body.user,
    };

    const story = new Story(storyDetails);
    story.save();
    res.json({ status: true, message: 'Story saved successfully !' });
  } catch (err) {
    console.log(err);
    res.json({ status: false, message: 'Could not save !' });
  }
});

router.get('/get', async (req, res) => {
  try {
    const stories = await Story.find({});
    res.json({ status: true, stories });
  } catch (err) {
    res.json({ status: false, message: 'Could not get stories' });
  }
});

module.exports = router;
