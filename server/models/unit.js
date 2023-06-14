const mongoose = require('mongoose')
const User = require('./user');
const announcementSchema = require('./announcement');
const attendanceSchema = require('./attendance');
const ProposalSchema = require('./proposal');

const unitSchema = new mongoose.Schema({
  name: String,
  ID: String,
  no_of_members: Number,
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
  attendance: { type: [attendanceSchema] }, // Embedding Attendance schema
  announcements:{type: [announcementSchema]}, // Embedding Announcement schema
  proposals: [ProposalSchema], // Embedding Proposal schema
  admin:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }
});
const Unit = mongoose.model('Unit', unitSchema);
module.exports = Unit
