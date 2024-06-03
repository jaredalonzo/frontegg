import React from 'react';
import { useAuthUser, useTenantsState, useAuthActions, AdminPortal } from '@frontegg/react'
import { useHistory } from "react-router-dom";

function App() {
    const tenantsState = useTenantsState();
    const history = useHistory();
    const user = useAuthUser();
    const { requestAuthorize } = useAuthActions();
    // const { user, isAuthenticated } = useAuth(); // Use this to avoid redirect to /account/login

    const logout = () => {
       history.push('/account/logout');
    }

    const admin = () => {
        AdminPortal.show();
    }

    return (
        <div className='App'>
            <div>
                <img src={user?.profilePictureUrl} alt={user?.name}/>
            </div>
            <div>
                <span>Logged in as: {user?.name}</span>
            </div>
            <div>
                <button onClick={() => alert(user.accessToken)}>What is my access token?</button>
            </div>
            <div>
                <button onClick={() => alert(JSON.stringify(tenantsState.tenants))}>Show my tenants</button>
            </div>
            <div>
                <button onClick={() => requestAuthorize()}>Refresh my authentication</button>
            </div>
            <div>
                <button onClick={() => admin()}>Settings</button>
            </div>
            <div>
                <button onClick={() => logout()}>Logout</button>
            </div>
        </div>
    );
}

export default App;
