import React, { Component } from 'react';
import DatePicker from '../DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './Parameters.css';
import possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';

const style = {
  margin: 12,
};
const initialState =  {
  error: null,
    parameters: {
      salinity: '',
      nitrate: '',
      phosphate: '',
      alkalinity: '',
      calcium: '',
      magnesium: '',
    
    }
}
class Parameters extends Component {
  constructor(props) {
    super(props)
    this.state = initialState;
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }


handleSubmit = (event) => {
  event.preventDefault()
  console.log(this.state.parameters)
}
handleInputChange = (event, newValue) => {
  event.persist();
  this.setState((state) => state.parameters[event.target.name] = newValue);
}

render() {

  return (
    <div className='about'>
      <MuiThemeProvider>
        <DatePicker />
        <form onSubmit={this.handleSubmit} method="POST">
          <TextField
           floatingLabelText="Salinity"
            name='salinity'
            value={this.state.salinity}
            onChange={this.handleInputChange}
          /><br
          />
          <TextField
            floatingLabelText="Nitrate"
            name='nitrate'
            value={this.state.nitrate}
          onChange={this.handleInputChange}
          /><br
          />
          <TextField
            floatingLabelText="Phosphate"
            name='phosphate'
            value={this.state.phosphate}
          onChange={this.handleInputChange}
          /><br
          />
          <TextField
            floatingLabelText="Alkalinity"
            name='alkalinity'
            value={this.state.alkalinity}
          onChange={this.handleInputChange}
          /><br
          />
          <TextField
            floatingLabelText="Calcium"
            name='calcium'
            value={this.state.calcium}
          onChange={this.handleInputChange}
          /><br
          />
          <TextField
            floatingLabelText="Magnesium"
            name='magnesium'
            value={this.state.magnesium}
          onChange={this.handleInputChange}
          /><br
          />
          <RaisedButton label="Submit" primary={true} style={style} type='submit' />
        </form>
      </MuiThemeProvider>
    </div>
  );
 }
}
export default Parameters;