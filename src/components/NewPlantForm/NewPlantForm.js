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
                    <input type='text' placeholder="name" value={this.state.newPlant.name} onChange={(event) => this.handleNameChange(event, 'name')} />
                    <input type='text' placeholder="kingdom" value={this.state.newPlant.kingdom} onChange={(event) => this.handleNameChange(event, 'kingdom')} />
                    <input type='text' placeholder="clade" value={this.state.newPlant.clade} onChange={(event) => this.handleNameChange(event, 'clade')} />
                    <input type='text' placeholder="order" value={this.state.newPlant.order} onChange={(event) => this.handleNameChange(event, 'order')} />
                    <input type='text' placeholder="family" value={this.state.newPlant.family} onChange={(event) => this.handleNameChange(event, 'family')} />
                    <input type='text' placeholder="subfamily" value={this.state.newPlant.subfamily} onChange={(event) => this.handleNameChange(event, 'subfamily')} />
                    <input type='text' placeholder="genus" value={this.state.newPlant.genus} onChange={(event) => this.handleNameChange(event, 'genus')} />

                    <input type='submit' value='Add New Plant' />
                </form>
            </div>
        );
    }
}


export default connect(mapStateToProps)(NewPlantForm);
