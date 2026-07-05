const { onDocumentCreated, onDocumentDeleted } = require("firebase-functions/v2/firestore");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");

const db = getFirestore();

exports.onMemberJoin = onDocumentCreated(
  "communities/{communityId}/members/{userId}",
  async (event) => {
    await db.doc(`communities/${event.params.communityId}`).update({
      membersCount: FieldValue.increment(1)
    });
  }
);

exports.onMemberLeave = onDocumentDeleted(
  "communities/{communityId}/members/{userId}",
  async (event) => {
    await db.doc(`communities/${event.params.communityId}`).update({
      membersCount: FieldValue.increment(-1)
    });
  }
);