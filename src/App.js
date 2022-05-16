import SearchAppBar from "./components/navbar/Navbar";
import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
// import { CardActionArea } from "@mui/material";
import CustomizedCard from "../src/components/customizedCard/Card";
import { createApi } from "unsplash-js";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const api = createApi({
    accessKey: "r6c2slsyM0bVabYqQ5e1G5-2_jQlkpfbyUhds4KUtQw",
});

const App = function(props) {
    const [data, setPhotosResponse] = useState(null);
    const [pageNumber, setPageNumber] = useState(0);
    const [searchValue, setSearchValue] = useState("");
    const [loading, setLoading] = useState(true);

    const handlePageChange = (e, pageNum) => {
        setPageNumber(pageNum);
    };
    useEffect(() => {
        api.search
            .getPhotos({
                query: searchValue || "random",
                orientation: "landscape",
                color: "white",
                page: pageNumber,
                perPage: 28,
            })
            .then((result) => {
                setPhotosResponse(result);
                setLoading(false);
            })
            .catch(() => {
                console.log("something went wrong!");
                setLoading(false);
            });
        window.scrollTo(0, 0);
    }, [pageNumber, searchValue]);

    return ( <
        >
        <
        SearchAppBar searchValue = { searchValue }
        setSearchValue = { setSearchValue }
        />{" "} <
        Container maxWidth = "lg"
        sx = {
            { paddingBottom: "50px" } } > { " " } {
            loading ? (
                "loading"
            ) : ( <
                Box sx = {
                    {
                        display: "flex",
                        flexDirection: `${
                data.response.results.length ? "column" : "row"
              }`,

                        overflow: "hidden",
                        gap: 2,
                        flexWrap: "wrap",
                        maxHeight: "200vh",

                        // overflow: "scroll",
                        justifyContent: "start",
                        alignItem: "center",
                        marginTop: "50px",
                        padding: " 50px 0px",
                    }
                } >
                { " " } {
                    data.response.results.map((item) => ( <
                        CustomizedCard key = { item.id } {...item }
                        />
                    ))
                } { " " } <
                /Box>
            )
        } { " " } <
        Stack spacing = { 2 }
        sx = {
            {} } > { " " } {
            !loading && ( <
                Pagination count = { data.response.total_pages }
                variant = "outlined"
                shape = "rounded"
                sx = {
                    {
                        margin: "0 auto",
                    }
                }
                onChange = { handlePageChange }
                />
            )
        } { " " } <
        /Stack>{" "} <
        /Container>{" "} <
        />
    );
};

export default App;