const {onDocumentCreated,onDocumentDeleted}=require("firebase-functions/v2/firestore");
const {getFirestore,FieldValue}=require("firebase-admin/firestore");
const db=getFirestore();

exports.onLikeCreate=onDocumentCreated("posts/{postId}/likes/{userId}", async e=>{
 await db.doc(`posts/${e.params.postId}`).update({likesCount:FieldValue.increment(1)});
});

exports.onLikeDelete=onDocumentDeleted("posts/{postId}/likes/{userId}", async e=>{
 await db.doc(`posts/${e.params.postId}`).update({likesCount:FieldValue.increment(-1)});
});