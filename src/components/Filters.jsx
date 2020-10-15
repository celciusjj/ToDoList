import React from 'react';
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { fade, makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import { filterByText, filterByType } from "../actions/filtersActions"
import { useDispatch } from "react-redux"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(1),
            width: "auto",
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    inputRoot: {
        color: "inherit",
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "12ch",
            "&:focus": {
                width: "20ch",
            },
        },
    },
}));

const options = [
    "Sin filtro",
    "Completados",
    "Incompletos",
    "Eliminados",
];

const ITEM_HEIGHT = 48;

export function SelecFilter() {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const setFilterByType = (type) => dispatch(filterByType(type));

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (event) => {
        setFilterByType(event.target.getAttribute("value"));
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: "20ch",
                    },
                }}
            >
                {options.map((option) => (
                    <MenuItem key={option} value={option} onClick={handleClose}>
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    )
}

export function InputFilter() {
    const dispatch = useDispatch();

    const onChangeFilterText = (e) => {
        setFilterByText(e.target.value);
    }

    const setFilterByText = (text) => dispatch(filterByText(text));

    const classes = useStyles();
    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>

            <InputBase
                onChange={onChangeFilterText}
                placeholder="Filtrar…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
            />
        </div>
    )
}