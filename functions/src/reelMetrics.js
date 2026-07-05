const {onDocumentCreated}=require("firebase-functions/v2/firestore");
const {getFirestore,FieldValue}=require("firebase-admin/firestore");
const db=getFirestore();

exports.onReelLike=onDocumentCreated("reels/{reelId}/likes/{userId}", async e=>{
 await db.doc(`reels/${e.params.reelId}`).update({likesCount:FieldValue.increment(1)});
});