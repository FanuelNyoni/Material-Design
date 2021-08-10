import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import useStyles from '../styles';

const Navbar = () => {
    const classes = useStyles();
    return (
        <AppBar>
            <Toolbar>
                <Typography variant="h6">
                    WebSpot dev
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar
