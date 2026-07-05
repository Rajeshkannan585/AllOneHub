const {onDocumentUpdated}=require("firebase-functions/v2/firestore");

exports.onReadReceipt=onDocumentUpdated(
 "chats/{chatId}/messages/{messageId}",
 async ()=>{ return; }
);