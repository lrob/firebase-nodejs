import React from "react";

export default class EmailLogin extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
        
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });

        // var partialState = {};
        // partialState[event.target.name] = event.target.value;
        // this.setState(partialState);

        //this.setState({email: event.target.value})        
    }
    
    handleSubmit(event) {
        event.preventDefault();
        alert('You have submitted the form with email ' + this.state.email + ' and pwd ' + this.state.password)
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
            <div>
                Create user
            </div>
            <div>
                <label for="user">Enter your email:</label>
                <input 
                    name="email"
                    type="email" 
                    placeholder="insert a valid email" 
                    required
                    value={this.state.email}
                    onChange={this.handleChange}
                />
            </div>
            <div>
                <label for="pwd">Enter your password</label>
                <input
                    name="password"
                    type="password"
                    placeholder="insert a password"
                    required
                    value={this.state.password}
                    onChange={this.handleChange}
                />
            </div>
            <div>
            <input type="submit" value="Subscribe!"/>
            </div>
        </form>
        )
    }
}

