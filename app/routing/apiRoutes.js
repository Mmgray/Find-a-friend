//Your apiRoutes.js file should contain two routes:



// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

var friendsData = require("../data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function(req, res) {
        var match = {
            name: "",
            photo: "",
            scoreDifference: Infinity
        };
        

    var userData = req.body;
    var userScores = userData.scores;

    var totalDifference;

    for (var i = 0; i < friendsData.length; i++) {
        var currentFriend = friends[i];
        totalDifference =0;

        console.log(currentFriend.name);

        for (var j = 0; j < currentFriend.scores.length; j++) {
            var currentFriendScore = currentFriend.scores[j];
            var curentUserScore = userScores[j];

            totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
        }
        if (totalDifference <= bestMatch.friendDifference) {
            bestMatch.name = currentFriend.name;
            bestMatch.photo = currentFriend.photo;
            bestMatch.scoreDifference = totalDifference;
        }
    }
    friends.push(userData);

    res.json(bestMatch);

});

};
