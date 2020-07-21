const Competition = require('../models/competition');
const User = require('../models/user');

module.exports = {
    index,
    create,
    delete: deleteOne,
    update
  };
  
  async function index(req, res) {
    const competitions = await Competition.find({});
    res.status(200).json(competitions);
  }
  
  // async function show(id) {
  //   const competition = await Competition.findById(id).exec();
  //   console.log(competition)
  //   // const participants = competition.participants.map(participant => 
  //   //     User.findById(participant)
  //   //   );

  //   // Competition.
  //   // findOne({ _id: id }).
  //   // populate('participants').
  //   // exec(function (err, competition) {
  //   //   if (err) return console.log('we got a frickin error');
  //   //   console.log('The participants are ', competition.participants) 
  //   // });

  //   console.log('are we getting down here');
  // }

  async function create(req, res) {
    req.body.owner = req.user;
    const type = typeof(req.body.participants[0])
    console.log(type);

    thisParticipant = await User.findById(req.body.participants[0]).exec()
    console.log('thisParticipant:', thisParticipant);

    console.log(typeof(req.body.owner))
    console.log('participants: ', req.body.participants[1], type);
    const competition = await Competition.create(req.body);
    res.status(201).json(competition);
  }
  
  async function deleteOne(req, res) {
    const deletedCompetition = await Competition.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedCompetition);
  }
  
  async function update(req, res) {
    const updatedCompetition = await Competition.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updatedCompetition);
  }