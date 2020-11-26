const admin = require("firebase-admin");

const serviceAccount = require("./vue-movie-app-a5e5a-firebase-adminsdk-eiw8y-5652350f7b.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://vue-movie-app-a5e5a.firebaseio.com"
});

const firestore = admin.firestore()
const movies = require("./movie-list.json")


const db = firestore.collection('movies')

movies.map(async movie =>{
	try {
		await db.add(movie)
	} catch(e){
		console.log(e)
	}
})