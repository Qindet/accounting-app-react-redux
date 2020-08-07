import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import MonetizationOn from '@material-ui/icons/MonetizationOn';
import MoneyOff from '@material-ui/icons/MoneyOff';
import DashboardIcon from '@material-ui/icons/Dashboard'
import {NavLink} from "react-router-dom";
import classes from './styles.css'

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

export default function MenuButtonUI() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                color="default"
                onClick={handleClick}
            >
                Open Menu
            </Button>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <NavLink to="/">
                    <StyledMenuItem>
                            <ListItemIcon>
                                    <DashboardIcon fontSize="small" />
                            </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </StyledMenuItem>
                </NavLink>

                <NavLink to="/income">
                    <StyledMenuItem >
                            <ListItemIcon>
                                <MonetizationOn fontSize="small" />
                            </ListItemIcon>
                        <ListItemText primary="Income" />
                    </StyledMenuItem>
                </NavLink>

                <NavLink to="/expense">
                    <StyledMenuItem>
                        <ListItemIcon>
                            <MoneyOff fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Expense" />
                    </StyledMenuItem>
                </NavLink>
            </StyledMenu>

        </div>
    );
}
