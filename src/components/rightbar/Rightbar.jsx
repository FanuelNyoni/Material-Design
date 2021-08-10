import { Container } from '@material-ui/core';
import React from 'react'
import useStyles from './styles'

const Rightbar = () => {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
        <div>
            Right Hello
        </div>
        </Container>
    )
}

export default Rightbar
