import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import { Toolbar, InputBase, Paper, Box } from '@material-ui/core'
import '../Styles/hero.css'

export default function Splash() {
    return (
        <>

        <AppBar position="static">
            <Toolbar>

            </Toolbar>
        </AppBar>

        <div className="hero">
            <h1 className="hero-text">
                Hero Text Goes Here
            </h1>
            <Box width="25%" className="hero-input">
                <Paper>
                    <InputBase
                        fullWidth={true}
                        autoFocus={true}
                        placeholder="Enter your email here"
                    />
                </Paper>
            </Box>
        </div>

        </>
    )
}
