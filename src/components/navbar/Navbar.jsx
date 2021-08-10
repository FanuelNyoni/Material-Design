import React, { useState } from "react";
import {
    AppBar,
    Avatar,
    Badge,
    InputBase,
    Toolbar,
    Typography,
} from "@material-ui/core";
import {
    Cancel,
    Mail,
    Notifications,
    Search,
    Settings,
} from "@material-ui/icons";
import useStyles from "./styles";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const classes = useStyles({ open });
    return (
        <AppBar className={classes.appbar}>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6" className={classes.logoLg}>
                    webSpot dev
                </Typography>
                <Typography variant="h6" className={classes.logoSm}>
                    webSpot
                </Typography>
                <div className={classes.search}>
                    <Search className={classes.searchIcon} />
                    <InputBase placeholder="search..." className={classes.Inputbase} />
                    <Cancel
                        className={classes.cancel}
                        onClick={() => setOpen(false)}
                    ></Cancel>
                </div>
                <div className={classes.settings}>
                    <Search
                        className={classes.setSearchIcon}
                        onClick={() => setOpen(true)}
                    />
                    <Badge className={classes.badge} variant="dot" color="primary">
                        <Mail />
                    </Badge>
                    <Badge className={classes.badge} variant="dot" color="primary">
                        <Notifications />
                    </Badge>
                    <Settings className={classes.settingsIcon} />
                    <Avatar alt="Cindy Baker" src="./images/avatar.png" />
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
