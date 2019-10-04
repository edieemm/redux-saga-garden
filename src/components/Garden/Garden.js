import React, { Component } from 'react';
import NewPlantForm from '../NewPlantForm/NewPlantForm';
import PlantList from '../PlantList/PlantList';


class Garden extends Component{
  seePlant = (id) => {
    this.props.history.push('/' + id)
  }
  render() {
    return (
      <div>
        <h2>This is the garden!</h2>
        <NewPlantForm />
        <PlantList seePlant={this.seePlant} />
      </div>
    )
  }
}


export default Garden;
