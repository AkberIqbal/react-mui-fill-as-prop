import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import purple from '@material-ui/core/colors/purple';

import Button from '@material-ui/core/Button';
import { DynamicFillCirle } from './svg';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: purple
  },
  typography: {
    useNextVariants: true
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <DynamicFillCirle mockColor="green" />
          <DynamicFillCirle mockColor="orange" />
          <DynamicFillCirle mockColor="red" />
        </MuiThemeProvider>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
