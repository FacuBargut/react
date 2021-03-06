import React from 'react';
import './styles/BadgeNew.css';
import header from '../images/img.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends React.Component{
    state = {
        form:{
            firstName:'',
            lastName:'',
            email:'',
            job:'',
            twitter:''
        },
    }

    handleChange = e => {
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }
    
    render(){
        return(
            <React.Fragment>
                
                <div className="BadgeNew__hero  ">
                    <img className="img-fluid" src={header} alt="logo"></img>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                    firstName={this.state.form.firstName}
                                    lastName={this.state.form.lastName}
                                    twitter={this.state.form.twitter}
                                    jobTitle={this.state.form.job}
                                    email={this.state.form.email}
                                    avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm
                                onChange={this.handleChange}
                                formValue={this.state.form}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
            
        
    }
}

export default BadgeNew