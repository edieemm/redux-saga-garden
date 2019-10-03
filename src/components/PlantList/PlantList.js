import React, { Component } from 'react';
import { connect } from 'react-redux';


class PlantList extends Component {
    componentDidMount() {
        // use component did mount to dispatch an action to request the plantList from the API
        this.getPlant();
    }

    getPlant = () => {
        this.props.dispatch({ type: 'GET_PLANT' })
    }

    render() {
        return (
            <div>
                <h3>This is the plant list</h3>
                {this.props.reduxState.plantList.map((plant) => 
                    <li>{plant.name}</li>
                )}
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(PlantList);
