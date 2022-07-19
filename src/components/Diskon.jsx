import {Box} from "@mui/material";
import React from "react";

const Banner = () => {
    return (
        <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} mt={5}>
            <Box component={"img"} display={"flex"} src="../../rectangle-left.png" sx={{height: "100%"}} />
            <Box component={"img"} display={"flex"} src="../../banner.png" sx={{height: "100%"}} />
            <Box component={"img"} display={"flex"} src="../../rectangle-right.png" sx={{height: "100%"}} />
        </Box>
    );
};

export default Banner;
