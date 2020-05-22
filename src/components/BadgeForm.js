import React from 'react'

class BadgeForm extends React.Component{
    
    // handleChange = e =>{
    //     this.setState({
    //         [e.target.name]: e.target.value,
    //     })
    // }

    handleClick=(e)=>{
        console.log("Button has clicked");        
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Form has submitted");
        console.log(this.state);
    }
    render(){
        return(
            <div>
                <h1>New Attendant</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="firstName" value={this.props.formValue.firstName}></input>
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="lastName" value={this.props.formValue.lastName}></input>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="email" value={this.props.formValue.email}></input>
                    </div>
                    <div className="form-group">
                        <label>Job</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="job" value={this.props.formValue.job}></input>
                    </div>
                    <div className="form-group">
                        <label>Twitter</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="twitter" value={this.props.formValue.twitter}></input>
                    </div>
                    <button type="submit" onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }
}

export default BadgeForm