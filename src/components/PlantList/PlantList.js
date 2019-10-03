import React, { Component } from 'react';
import { connect } from 'react-redux';


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

    render() {
        return (
            <div>
                <h3>This is the plant list</h3>
                {this.props.reduxState.plantList.map((plant) => 
                    <li key={plant.id}>{plant.name}<button onClick={() => this.deletePlant(plant.id)}>delete</button></li>
                )}
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(PlantList);
