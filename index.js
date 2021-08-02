import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import purple from '@material-ui/core/colors/purple';

import Button from '@material-ui/core/Button';
import { DynamicFillCirle } from './svg';
import { DynamicFillCirleWithTicks } from './svgWithTick';

const theme = createTheme({
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
          <DynamicFillCirle mockColor="#008000" />
          <DynamicFillCirle mockColor="#ffa500" />
          <DynamicFillCirle mockColor="#e10012" />
          <hr />
          <DynamicFillCirleWithTicks mockColor="#008000" />
          <DynamicFillCirleWithTicks mockColor="#ffa500" />
          <DynamicFillCirleWithTicks mockColor="#e10012" />
        </MuiThemeProvider>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
