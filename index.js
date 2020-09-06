const functions = require("firebase-functions");

const app = require("express")();

const { getAllScreams, postOneScream } = require('./handlers/screams');
const { signUp, login, uploadImage, addUserDetails } = require("./handlers/users");

const FBAuth = require("./util/fbAuth");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

// Scream routes
app.get("/screams", getAllScreams);
app.post("/scream", FBAuth, postOneScream);

//Users routes
app.post("/signup", signUp);
app.post("/login", login);
app.post("/user/image", FBAuth, uploadImage);
app.post("/user", FBAuth, addUserDetails);





exports.api = functions.https.onRequest(app);
