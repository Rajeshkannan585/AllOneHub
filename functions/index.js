const admin = require("firebase-admin");
admin.initializeApp();

exports.postCounters = require("./src/postCounters");
exports.reelMetrics = require("./src/reelMetrics");
exports.pushNotifications = require("./src/pushNotifications");
exports.analyticsDashboard = require("./src/analyticsDashboard");
exports.adminActions = require("./src/adminActions");
exports.chatReceipts = require("./src/chatReceipts");
exports.storageCleanup = require("./src/storageCleanup");