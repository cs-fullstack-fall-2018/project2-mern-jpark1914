var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Blogs = require('../model/blogSchema');


router.get('/all',(req,res) =>{
  Blogs.find()
      .then(blogEntries => res.json(blogEntries));
  //.then( () => res.send('Your get all request is working'));
});

router.post('/new', (req,res) =>{
  const newBlog = new Blogs({
      username: req.body.username,
      title: req.body.title,
      journalEntry: req.body.journalEntry,
  });

   newBlog.save()
       .then(() => res.send("POST request is okay from blogRoutes in routes/blogRoutes.js"));
    // This sends the text to your client once you finish saving.
    //.then(() => res.send("You have to call /api for this to work!"));

    // Uncomment this if you want to send the item you saved to your client once you finish saving.
    //.then(item => res.json({item}));
});

router.delete('/', (req, res) =>{
  console.log(req.body._id);
  Blogs.findByIdAndRemove(req.body._id, function (err) {
      if(err) {
        throw err;
      }
      res.json({result: 'DELETED'});
  })
})

module.exports = router;
