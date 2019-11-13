import React from "react";

class Login extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <form action="">
                    <input type="text" placeholder="user name"/>
                    <input type="password" placeholder="password"/>
                    <a href="http://localhost:3000/user/1">Login</a>
                </form>
            </div>
        )
    }
}

export default Login;