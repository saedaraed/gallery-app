import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Content, CardImage } from "./index";
import "./style.css";
export default function CustomizedCard(props) {
    console.log(props);
    return ( <
        Card className = "card" >
        <
        CardImage sx = {
            { width: "23%", borderRadius: "16px" } } >
        <
        CardMedia component = "img"
        height = "auto"
        image = { props.urls.small }
        alt = "green iguana" /
        >
        <
        Content className = "content" >
        <
        Typography className = "h5"
        gutterBottom variant = "h5"
        component = "div" > { " " } { props.user.name } { " " } <
        /Typography>{" "} <
        button className = "button"
        onClick = {
            () => window.open(props.urls.full) } >
        { " " }
        show full size { " " } <
        /button>{" "} <
        /Content>{" "} <
        /CardImage>{" "} <
        /Card>
    );
}