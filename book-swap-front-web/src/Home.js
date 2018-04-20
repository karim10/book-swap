import React from 'react';
import NavBar from './NavBar';
import Feed from './Feed';


export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return  <div>
                <NavBar/>
                <div className="feed-wrapper">
                <Feed />
                </div>
                </div>
    }
}