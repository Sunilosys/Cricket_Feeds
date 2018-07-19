'use strict';

var config = {
    // TODO Add Application ID
    appId : 'amzn1.ask.skill.4fac1b92-416b-49b5-9681-fa1ca0c8aa24',
    // TODO Add an appropriate welcome message.
    welcome_message : 'Welcome to Cricket Feeds.',

    number_feeds_per_prompt : 3,
    speak_only_feed_title : false,
    display_only_title_in_card : true,

    // TODO Add the category name (to feed name) and the corresponding URL
    feeds : {
        'Global' : 'http://www.espncricinfo.com/rss/content/story/feeds/0.xml',
        'Australia' : 'http://www.espncricinfo.com/rss/content/story/feeds/2.xml',
        'Bangladesh' : 'http://www.espncricinfo.com/rss/content/story/feeds/25.xml',
        'England' : 'http://www.espncricinfo.com/rss/content/story/feeds/1.xml',
        'India' : 'http://www.espncricinfo.com/rss/content/story/feeds/6.xml',
        'New Zealand' : 'http://www.espncricinfo.com/rss/content/story/feeds/5.xml',
        'Pakistan' : 'http://www.espncricinfo.com/rss/content/story/feeds/7.xml',
        'South Africa' : 'http://www.espncricinfo.com/rss/content/story/feeds/3.xml',
        'Sri lanka' : 'http://www.espncricinfo.com/rss/content/story/feeds/8.xml',
        'West Indies' : 'http://www.espncricinfo.com/rss/content/story/feeds/4.xml',
        'Zimbabwe' : 'http://www.espncricinfo.com/rss/content/story/feeds/9.xml',
        
    },

    speech_style_for_numbering_feeds : 'Item',

    // TODO Add the s3 Bucket Name, dynamoDB Table Name and Region
    s3BucketName : 'my-cricket-feed-alexa-skill',
    dynamoDBTableName : 'MyCricketFeedSkillTable',
    dynamoDBRegion : 'US East (N. Virginia)'
};

module.exports = config;