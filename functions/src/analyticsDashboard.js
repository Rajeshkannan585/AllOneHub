const {onSchedule}=require("firebase-functions/v2/scheduler");
const admin=require("firebase-admin");

exports.dailyAnalytics=onSchedule("every day 00:00", async ()=>{
 const db=admin.firestore();

 const [users,posts,reels]=await Promise.all([
  db.collection("users").count().get(),
  db.collection("posts").count().get(),
  db.collection("reels").count().get()
 ]);

 await db.collection("analytics").add({
  users:users.data().count,
  posts:posts.data().count,
  reels:reels.data().count,
  createdAt:admin.firestore.FieldValue.serverTimestamp()
 });
});