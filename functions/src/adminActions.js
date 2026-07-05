const {onCall,HttpsError}=require("firebase-functions/v2/https");
const admin=require("firebase-admin");

exports.banUser=onCall(async req=>{
 if(req.auth?.token?.role!=="admin"){
   throw new HttpsError("permission-denied","Admin only");
 }

 await admin.firestore().doc(`users/${req.data.userId}`).update({
   status:"banned"
 });

 return {success:true};
});