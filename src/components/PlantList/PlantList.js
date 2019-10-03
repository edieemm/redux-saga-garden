import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState,
});

class PlantList extends Component {
    componentDidMount() {
        // use component did mount to dispatch an action to request the plantList from the API
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

export default connect(mapStateToProps)(PlantList);
