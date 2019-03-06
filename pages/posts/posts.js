var postsData = require('../../data/posts-data.js')
Page({
    data: {
    },

    onLoad: function(options) {
        console.log(postsData.postList),
        this.setData({
            posts_key:postsData.postList
        });
    }
})
