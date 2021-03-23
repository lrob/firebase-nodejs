import React from "react";

import Login from "./Login";
import EmailRegister from "./EmailRegister";
import EmailLogin from "./EmailLogin";

export default function SuperLogin() {
    return(
        <div>
            <p>
                <Login />
            </p>
            <p>
                <EmailRegister />
            </p>
            <p>
                <EmailLogin />
            </p>
        </div>
    );
}