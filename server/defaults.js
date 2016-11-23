if (Topics.find().count() === 0) {
    _.each(['General Discussion', 'Deck Ideas', 'Random Fandom'], function(topicName){
        Topics.insert({name: topicName});
    });
}
