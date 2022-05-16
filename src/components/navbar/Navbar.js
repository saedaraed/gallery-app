import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Container from "@mui/material/Container";

import PhotoCameraBackIcon from "@mui/icons-material/PhotoCameraBack";
const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
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

export default function SearchAppBar(props) {
    const handleChange = (e) => {
        props.setSearchValue(e.target.value);
    };
    return ( <
        Box sx = {
            { flexGrow: 1 } } >
        <
        AppBar position = "static"
        sx = {
            {
                backgroundColor: "rgb(75, 44, 44)",
                padding: "0px 100px",
                position: "fixed",
                zIndex: "100",
                top: 0,
            }
        } >
        <
        Toolbar >
        <
        IconButton size = "large"
        edge = "start"
        color = "inherit"
        sx = {
            { mr: 0 } } >
        <
        PhotoCameraBackIcon / > { " " } <
        /IconButton>{" "} <
        Typography variant = "h5"
        noWrap component = "div"
        sx = {
            { flexGrow: 1, display: { xs: "none", sm: "block" } } } >
        Pinterest { " " } <
        /Typography>{" "} <
        Search sx = {
            {} } >
        <
        SearchIconWrapper >
        <
        SearchIcon / >
        <
        /SearchIconWrapper>{" "} <
        StyledInputBase placeholder = "Search…"
        inputProps = {
            { "aria-label": "search" } }
        onChange = { handleChange }
        value = { props.searchValue }
        onKeyPress = {
            (e) => {
                if (e.key == "Enter") props.handlSearch();
            }
        }
        />{" "} <
        /Search>{" "} <
        /Toolbar>{" "} <
        /AppBar>{" "} <
        /Box>
    );
}