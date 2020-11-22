const Story = require('../models/story');
const User = require('../models/user');

function index(req, res) {
    User.findById(req.user._id, function(err, user) {
        let storyList = user.stories
        res.render('stories/index', {
            title: 'All Stories',
            user,
            storyList
        })
    })
}


function create(req, res) {
    User.findById(req.user._id, function(err, user) {
        const story = new Story(req.body);
        user.stories.push(story)
        user.save()
        console.log(story)
        console.log(req.user.stories)
        res.redirect('stories');
    }
    )}

function show(req, res) {
    User.findById(req.user._id, function(err, userData) {
        let userId = req.user._id
        let storyId = req.params.id
        User.find({ "_id" : userId },
        { stories: { $elemMatch: { _id: storyId } } }, function(err, storyData) {
            let storyId = req.params.id
            console.log('data from user model', userData)
            console.log('story data', storyData)
            res.render('stories/show', {
                storyData,
                userData,
                storyId
            })
        })
    })
}

function newStory(req, res) {
    res.render('stories/new', { title: 'Add Story' });
}

module.exports = {
    index,
    new: newStory,
    show,
    create
}