import React, { Component } from 'react';
class AddWorkoutPage extends Component {

    state = {
      invalidForm: true,
      formData: {
          date: '',
          duration: '',
          activitiy: ''
      },
    };
    formRef = React.createRef();
    handleChange = e => {
        const formData = {
            ...this.state.formData, 
            [e.target.name]: e.target.value
        };
  
        this.setState({
          formData,
          invalidForm: !this.formRef.current.checkValidity()
        });
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddWorkout(this.state.formData);
    };
  
    render() {
      return (
        <>
        <h1>Add a Workout</h1>
        <form ref={this.formRef} onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label>Date</label>
                <input
                    type="date" 
                    className="form-control"
                    name="date"
                    value={this.state.formData.date}
                    onChange={this.handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label>Duration</label>
                <input
                    type="text"
                    className="form-control"
                    name="duration"
                    value={this.state.formData.duration}
                    onChange={this.handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label>Activity</label>
                <input
                    type="text"
                    className="form-control"
                    name="activity"
                    value={this.state.formData.activity}
                    onChange={this.handleChange}
                    required
                />
            </div>
            <button
                type="submit"
                className="btn"
            >
                ADD WORKOUT
            </button>
        </form>
    </>
      );
    }
  }
export default AddWorkoutPage;