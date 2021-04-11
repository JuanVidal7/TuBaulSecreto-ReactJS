import React from 'react';

export default class ItemListContainer extends React.Component {
    state = {
        hour: null,
        username: 'Juan!'
    }

    componentDidMount() {
        this.getHour()
    }

    getHour = () => {
        const date = new Date();
        const hour = date.getHours()
        this.setState({
            hour
        });
    }

    render() {
        const { hour, username } = this.state;
        return (
            <h2 style={{marginTop: '50px'}}>{hour < 12 ? `¡Buenos días ${username}` : `Buenas tardes ${username}`}</h2>
        );
    }

}