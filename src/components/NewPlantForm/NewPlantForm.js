import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState,
});

class NewPlantForm extends Component {
    state = {
        newPlant: {
            id: 4,
            name: ''
        }
    }

    handleNameChange = event => {
        console.log('event happended')
        this.setState({
            newPlant: {
                ...this.state.newPlant,
                name: event.target.value,
            }
        });
    }

    addNewPlant = event => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_PLANT', payload: this.state.newPlant })
        this.setState({
            newPlant: {
                id: this.state.newPlant.id + 1,
                name: '',
            }
        });
    }

    render() {
        return (
            <div>
                <h3>This is the form</h3>

                <pre>{JSON.stringify(this.state)}</pre>
                <form onSubmit={this.addNewPlant}>
                    <input type='text' placeholder="name" value={this.state.newPlant.name} onChange={this.handleNameChange} />
                    <input type='text' placeholder="kingdom" value={this.state.newPlant.kingdom} onChange={this.handleNameChange} />
                    <input type='text' placeholder="clade" value={this.state.newPlant.clade} onChange={this.handleNameChange} />
                    <input type='text' placeholder="order" value={this.state.newPlant.order} onChange={this.handleNameChange} />
                    <input type='text' placeholder="family" value={this.state.newPlant.family} onChange={this.handleNameChange} />
                    <input type='text' placeholder="subfamily" value={this.state.newPlant.subfamily} onChange={this.handleNameChange} />
                    <input type='text' placeholder="genus" value={this.state.newPlant.genus} onChange={this.handleNameChange} />

                    <input type='submit' value='Add New Plant' />
                </form>
            </div>
        );
    }
}


export default connect(mapStateToProps)(NewPlantForm);
