import React from "react";
import { withRouter } from "react-router-dom";
import { auth } from "./firebase";

class ResetPassword extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        };
        

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
        
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    
    async handleSubmit(event) {
        event.preventDefault();

        await auth.sendPasswordResetEmail(this.state.email).then(
            async (result) => {
                this.setState({
                  email: ""
                });
                alert("Check you email and follow the reset-password link")
                this.props.history.push("/login");
              },
              function (error) {
                alert(error)
              }
        );
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
            <div>
                <h3>Reset Password</h3>
            </div>
            <div>
                <label for="user">Enter your email: </label>
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
            <input type="submit" value="Subscribe!"/>
            </div>
        </form>
        )
    }
}

export default withRouter(ResetPassword);

