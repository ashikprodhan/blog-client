import React from 'react';
import SideBar from '../SideBar/SideBar';

const DashBoard = () => {
    return (
        <div>
        <div className="row">
            <div className="col-md-3">
                <SideBar></SideBar>
            </div>
            <div className="col-md-9">
                <h2>Explore about Dashboard</h2>
            </div>
        </div>
    </div>
    );
};

export default DashBoard;