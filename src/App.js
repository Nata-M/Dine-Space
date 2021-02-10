import React from 'react';
import './App.css';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import Reservation from './components/Reservation';


const theme = createMuiTheme({
  breakpoints: {
    values: {
      xxs: 0,
      xs: 480,
      sm: 700,
      md: 1100,
      lg: 1330,
      xl: 1920,
    },
  },
});



class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App" >
          <Reservation />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
