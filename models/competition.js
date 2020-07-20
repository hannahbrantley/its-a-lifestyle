const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const competitionSchema = new Schema({
  name: String, 
  startDate: { 
      type: Date,
      default: function () {
        let today = new Date();
        return today;
      }
  },
  endDate: { 
    type: Date,
    default: function () {
      let today = new Date();
      return today;
    }
  },
  ante: Number, 
  penalty: Number,
  daysPerWeek: Number,
  participants: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
},{
  timestamps: true
});

module.exports = mongoose.model('Competition', competitionSchema);