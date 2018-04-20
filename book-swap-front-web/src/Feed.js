import React from 'react';
import BookCard from './BookCard';

export default class Feed extends React.Component {

    constructor (props) {
        super(props);
    }


    render() {
        return  <div>
                    <BookCard />
                    <BookCard />
                    <BookCard />
                </div>
    }
}