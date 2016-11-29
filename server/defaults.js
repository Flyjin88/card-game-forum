if (Topics.find().count() === 0) {
    _.each(['General Discussion', 'Top-Tier Discussion', 'Deck Ideas','Random Fandom', 'Events', 'Banned List'], function(topicName){
        Topics.insert({name: topicName});
    });
}
