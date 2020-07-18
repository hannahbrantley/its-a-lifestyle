const Competition = require('../models/competition');

module.exports = {
    index,
    show,
    create,
    delete: deleteOne,
    update
  };
  
  async function index(req, res) {
    const competitions = await Competition.find({});
    res.status(200).json(competitions);
  }
  
  async function show(req, res) {
    const competition = await Competition.findById(req.params.id);
    res.status(200).json(competition);
  }
  
  async function create(req, res) {
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
  