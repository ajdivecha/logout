 $(document).ready(function() {

    console.log("JavaScript Up!");

    var config = {
    apiKey: "AIzaSyAKovIgnElTXfZog6-eGf7X3vU1I7go6yI",
    authDomain: "imagewordmatch.firebaseapp.com",
    databaseURL: "https://imagewordmatch.firebaseio.com",
    projectId: "imagewordmatch",
    storageBucket: "imagewordmatch.appspot.com",
    messagingSenderId: "621229379920"
    };
    firebase.initializeApp(config);

    var database = firebase.database();
    var user = firebase.auth().currentUser;
    var ref = database.ref('scores');
    // var provider = new firebase.auth.GoogleAuthProvider(); Logging NULL!
    // console.log(provider); Logging NULL!
    var displayName;
    var email;
    var emailVerified;
    var photoURL;
    var uid;
    var providerData;
    var userRef = firebase.database().ref('users/user');
    var userScoreRef = firebase.database().ref('users/user/score');

    // This is the stuff you're going to want to feed into $('ourIDs')
    // Using this function is like using document.on(Ready)...but for googleOAuth.
    // So do all your element population in the if (user) { } bit.
    // this might help https://firebase.google.com/docs/database/web/read-and-write#basic_write
    //
    firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        // ...
    } else {
        console.log("UUUUUHHHHHHH")
        }
    });




    var data = {
        name: user.displayName,
        score: 0
    }
    ref.push(data);



    // firebase.auth().onAuthStateChanged(function(user) {
    //     if (user) {
    //         uid = user.uid;
    //         console.log(user);
    //         console.log(user.displayName);
    //     } else {
    //         console.log("YUCKIE");
    //     }
    // });

    $('#addPoint').on('click' function() {
        userScoreRef.transaction(function(currentScore) {
            return currentScore + 1;
        })
    });

    userRef.transaction(function(currentData) {
        if (currentData === null) {
            return { userIdentity: uid };
        } else {
            console.log('User #' + uid + 'already exists!');
            return; // ABORT
        }
    });

    firebase.auth().signOut().then(function() {
        // sign-out successful
    }).catch(function(error) {
        // an error happened
    });

    signOut();

    $(".logoutButton").on("click", signOut);
});


// if (user != null) {
// user.providerData.forEach(function () {
//     console.log("Sign-in provider: " + provider.providerId);
//     console.log("  Provider-specific UID: " + provider.uid);
//     console.log("  Name: " + provider.displayName);
//     console.log("  Email: " + provider.email);
//     console.log("  Photo URL: " + provider.photoURL);
//     });
// };


// @Override
// public void onMatch_In_Guess_Array(View score)



// transction - update score

    // firebase.database().ref('/users/' + userId)
    //
    // var userId = firebase.auth().currentUser.uid;
    //
    // fbUsers.child(userId + "/points")
    //
    // fbUsers = new Firebase("https://enzocodes.github.io/AuthTests/loggedIn.html");

//Users
    //UID
        //score.

        // Sign out codeblock
        //
        // firebase.auth().signOut().then(function() {
        //   // Sign-out successful.
        // }).catch(function(error) {
        //   // An error happened.
        // });
