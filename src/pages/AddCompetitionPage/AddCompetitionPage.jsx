import React, { Component } from 'react';
class AddCompetitionPage extends Component {

    state = {
      invalidForm: true,
      formData: {
          name: '',
          startDate: '',
          endDate: '',
          ante: '',
          penalty: '',
          daysPerWeek: '',
          participants: []
      },
    };
    formRef = React.createRef();
    handleCheck = e => {
        const participants = this.state.formData.participants;
        if (participants.includes(e.target.value)) {
            const idx = participants.indexOf(e.target.value)
            participants.splice(idx, 1)
        }
        this.state.formData.participants.push(e.target.value);
    }
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
        this.props.handleAddCompetition(this.state.formData);
    };
  
    render() {
      return (
        <>
        <h1>Create New Competitio new</h1>
        <h2>hello</h2>
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
            <div className="form-group">
                <label>Participants</label>
                {this.props.participants.map((participant, idx) => 
                    <div className={participant.name} key={participant._id}>
                        <input
                            type="checkbox"
                            className="form-control"
                            name="participants"
                            key={participant._id} 
                            value={participant._id}
                            onChange={this.handleCheck}
                            />
                        <label>{participant.name}</label>
                    </div>
                )}
            </div>
            <button
                type="submit"
                className="btn"
            >
                CREATE COMPETITION
            </button>
        </form>
    </>
      );
    }
  }
export default AddCompetitionPage;