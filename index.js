const functions = require("firebase-functions");

const app = require("express")();

const { getAllScreams, postOneScream, getScream, commentOnScream } = require('./handlers/screams');
const { signUp, login, uploadImage, addUserDetails, getAuthenticatedUser } = require("./handlers/users");

const FBAuth = require("./util/fbAuth");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

// Scream routes
app.get("/screams", getAllScreams);
app.post("/scream", FBAuth, postOneScream);
app.get("/scream/:screamId", getScream);

//TODO delete a scream
//TODO like a scream
//TODO unlike a scream
app.post("/scream/:screamId/comment", FBAuth, commentOnScream);

//Users routes
app.post("/signup", signUp);
app.post("/login", login);
app.post("/user/image", FBAuth, uploadImage);
app.post("/user", FBAuth, addUserDetails);
app.get("/user", FBAuth, getAuthenticatedUser);





exports.api = functions.https.onRequest(app);
