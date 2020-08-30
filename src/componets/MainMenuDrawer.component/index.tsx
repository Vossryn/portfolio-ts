import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';

import useWindowDimensions from '../../helpers/WindowDimensions';

import "./styles.scss";

interface CustomRoute {
    Path: string;
    Name: string;
    Component?: React.FC;
}

interface Props {
    routes: CustomRoute[]
}

type Anchor = 'left' | 'bottom';

const MainMenuDrawer: React.FC<Props> = ({ routes }) => {
    const { width } = useWindowDimensions();
    const anchorPosition = (width > 767) ? 'left' : 'bottom';
    const [state, setState] = useState({
        left: false,
        bottom: false,
        currentMenu: 'home'
    });

    const toggleDrawer = (open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        if (
            event &&
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        if(open){
            setState({ ...state, [anchorPosition]: open });
        } else {
            setState({ ...state, [anchorPosition]: open });
        }
    };

    return (
        <div>
            <Button 
                className="Main-Menu-Button"
                onClick={toggleDrawer(true)}>
                <MenuIcon />   
            </Button>
            <SwipeableDrawer
                anchor={anchorPosition}
                open={state[anchorPosition]}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                <div
                    className={clsx('list', {
                        "fullList": anchorPosition === 'bottom',
                    })}
                    role="presentation"
                >
                    <List>
                        {routes.map((route, index) => (
                            <ListItem 
                                button 
                                key={index}
                                component={Link}
                                to={route.Path}
                                onClick={toggleDrawer(false)}
                            >
                                <ListItemIcon>
                                    <MailIcon />
                                </ListItemIcon>
                                <ListItemText primary={route.Name} />
                            </ListItem>
                        ))}
                    </List>
                </div>
            </SwipeableDrawer>
        </div>
    )
}

export default MainMenuDrawer;
