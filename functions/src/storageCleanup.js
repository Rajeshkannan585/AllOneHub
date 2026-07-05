const {onSchedule}=require("firebase-functions/v2/scheduler");
const admin=require("firebase-admin");

exports.cleanup=onSchedule("every 24 hours", async ()=>{
 // Remove orphaned Storage files here.
 return;
});