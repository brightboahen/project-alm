import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import {
    createStyles,
    //jssPreset,
    makeStyles,
    //StylesProvider,
    ThemeProvider,
    createMuiTheme
} from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import Routes from 'routes';
import Auth from 'components/Auth';

const useStyles = makeStyles(() =>
    createStyles({
        '@global': {
            '*': {
                boxSizing: 'border-box',
                margin: 0,
                padding: 0
            },
            html: {
                '-webkit-font-smoothing': 'antialiased',
                '-moz-osx-font-smoothing': 'grayscale',
                height: '100%',
                width: '100%'
            },
            body: {
                height: '100%',
                width: '100%'
            },
            '#root': {
                height: '100%',
                width: '100%'
            }
        }
    })
);

const App = () => {
    useStyles();
    return (
        <ThemeProvider theme={createMuiTheme({})}>
            <MuiPickersUtilsProvider utils={MomentUtils}>
                <SnackbarProvider maxSnack={1}>
                    <Router>
                        <Auth>
                            <Routes />
                        </Auth>
                    </Router>
                </SnackbarProvider>
            </MuiPickersUtilsProvider>
        </ThemeProvider>
    );
};

export default App;
