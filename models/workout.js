const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  date: { 
      type: Date,
      default: function () {
        let today = new Date();
        return today;
      }
  },
  duration: Number,
  activity: String, 
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
},{
  timestamps: true
});

module.exports = mongoose.model('Workout', workoutSchema);