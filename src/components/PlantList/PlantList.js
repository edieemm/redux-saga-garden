import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';


class PlantList extends Component {
    componentDidMount() {
        this.getPlant();
    }

    getPlant = () => {
        this.props.dispatch({ type: 'GET_PLANT' })
    }

    deletePlant = (id) => {
        this.props.dispatch({ type: 'DELETE_PLANT', payload: id })
    }

    seePlant = (id) => {
        this.props.history.push('/plant/' + id)
    }

    render() {
        return (
            <Router>
                <h3>This is the plant list</h3>
                {this.props.reduxState.plantList.map((plant) => 
                    <li key={plant.id}>{plant.name}
                    <button onClick={() => this.seePlant(plant.id)}>info</button>
                    <button onClick={() => this.deletePlant(plant.id)}>delete</button></li>
                )}
            </Router>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(PlantList);
