const {onDocumentCreated}=require("firebase-functions/v2/firestore");
const admin=require("firebase-admin");

exports.notifyUser=onDocumentCreated("notifications/{id}", async e=>{
 const data=e.data.data();
 const user=await admin.firestore().doc(`users/${data.receiverId}`).get();
 const token=user.data()?.fcmToken;
 if(!token) return;

 await admin.messaging().send({
   token,
   notification:{
     title:"AllOneHub",
     body:`New ${data.type}`
   },
   data:{type:data.type}
 });
});