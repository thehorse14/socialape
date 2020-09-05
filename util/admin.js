const admin = require("firebase-admin");
const serviceAccount = require("../../service-account");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://social-5f7d3.firebaseio.com",
    storageBucket: "social-5f7d3.appspot.com",
});

const db = admin.firestore();

module.exports = {admin, db};