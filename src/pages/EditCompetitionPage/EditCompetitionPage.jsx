import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EditCompetitionPage extends Component {
  state = {
    invalidForm: false,
    // Refer to PuppyListItem to see how puppy is being passed via the <Link>
    formData: this.props.location.state.competition
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleUpdateCompetition(this.state.formData);
  };

  handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };

  render() {
    return (
      <>
        <h1>Edit Competition</h1>
        <form ref={this.formRef} onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label>Name</label>
                <input
                    className="form-control"
                    name="name"
                    value={this.state.formData.name}
                    onChange={this.handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label>Start Date</label>
                <input
                    type="date"
                    className="form-control"
                    name="startDate"
                    value={this.state.formData.startDate}
                    onChange={this.handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label>End Date</label>
                <input
                    type="date"
                    className="form-control"
                    name="endDate"
                    value={this.state.formData.endDate}
                    onChange={this.handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label>Ante</label>
                <input
                    className="form-control"
                    name="ante"
                    value={this.state.formData.ante}
                    onChange={this.handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label>Penalty</label>
                <input
                    className="form-control"
                    name="penalty"
                    value={this.state.formData.penalty}
                    onChange={this.handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label>Days per week</label>
                <input
                    className="form-control"
                    name="daysPerWeek"
                    value={this.state.formData.daysPerWeek}
                    onChange={this.handleChange}
                    required
                />
            </div>
          <button
            type="submit"
            className="btn btn-xs"
          >
            UPDATE COMPETITION
          </button>&nbsp;&nbsp;
          <Link to='/'>CANCEL</Link>
        </form>
      </>
    );
  }
}

export default EditCompetitionPage;