import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Details extends Component {
    componentDidMount = () => {
        this.props.dispatch({ type: 'GET_PLANT' })
    }

    render() {
        return (
            <div>
                {this.props.reduxState.plantList.map(plant => {
                    if (plant.id == this.props.match.params.id) {
                        return <div>
                            <h3>{plant.name}</h3>
                            <p>{plant.kingdom}</p>
                            <p>{plant.clade}</p>
                            <p>{plant.order}</p>
                            <p>{plant.family}</p>
                            <p>{plant.subfamily}</p>
                            <p>{plant.genus}</p>
                        </div>
                    }
                }) }
                <Link to='/'><button>Back</button></Link>
                
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});
export default connect(mapStateToProps)(Details);
