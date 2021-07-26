import React from 'react';
import Header from './Containers/Header'
import Body from './Containers/Body'
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#212121'
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#333333',
    },
    secondary: {
      main: '#FFFFFF',
    },
    secondBar: {
      main: '#212121',
    },
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <ThemeProvider theme={theme}>
      <Header /> 
      <Body />
      
   </ThemeProvider>
    </div>
  );
}

export default App;
