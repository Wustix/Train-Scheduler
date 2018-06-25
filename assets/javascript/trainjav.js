// $(document).ready(function () {

var config = {
    apiKey: "AIzaSyASPFDoIz5lFw4YbE9egZNWw3l3r5w7D7A",
    authDomain: "trainschedule-8e2ee.firebaseapp.com",
    databaseURL: "https://trainschedule-8e2ee.firebaseio.com",
    projectId: "trainschedule-8e2ee",
    storageBucket: "",
    messagingSenderId: "753309814253"
};

firebase.initializeApp(config);

var dataBase = firebase.database();

$("#sub-btn").on("click", function (event) {
    var trainName = $("#trainInput").val().trim();
    var trainDestination = $("#destinationInput").val().trim();
    var trainFirstTrain = $("#firstTrainInput").val().trim();
    var trainFrequency = $("#frequencyInput").val().trim();

    dataBase.ref().push({
        name: trainName,
        destination: trainDestination,
        first: trainFirstTrain,
        frequency: trainFrequency
    });

    $("#trainInput").val("");
    $("#destinationInput").val("");
    $("#firstTrainInput").val("");
    $("#frequencyInput").val("");

});

dataBase.ref().on("child_added", function (childSnapshot) {

    console.log(childSnapshot.val().name);
    console.log(childSnapshot.val().destination);
    console.log(childSnapshot.val().first);
    console.log(childSnapshot.val().frequency);

    $("#head-table>tbody").append("<tr><td>" + childSnapshot.val().name + "</td><td>" + childSnapshot.val().destination + "</td><td>" + childSnapshot.val().frequency + "</td><td>" + childSnapshot.val().first + "</td><td>");

}, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
});










































// }); 