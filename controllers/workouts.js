const Workout = require('../models/workout');

module.exports = {
    index,
    create,
    delete: deleteOne,
    update
  };
  
  async function index(req, res) {
    const workouts = await Workout.find({});
    res.status(200).json(workouts);
  }
  
  async function create(req, res) {
    req.body.user = req.user._id;
    const workout = await Workout.create(req.body);
    res.status(201).json(workout);
  }
  
  async function deleteOne(req, res) {
    const deletedWorkout = await Workout.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedWorkout);
  }
  
  async function update(req, res) {
    const updatedWorkout = await Workout.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updatedWorkout);
  }
  