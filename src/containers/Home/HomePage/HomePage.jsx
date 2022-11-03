import React from 'react';
import { Header } from '../../../Common/Header/Header';
import { Login } from '../../../Common/Login/Login';

class HomePage extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div className="bg-[#efffcf] h-screen">
                <Header />
                <Login />
            </div>
        );
    }
};

export default HomePage;