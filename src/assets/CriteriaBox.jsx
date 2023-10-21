import React from "react"
import { Typography, Box } from "@mui/material"
import memory from "./images/icon-memory.svg"
import reaction from "./images/icon-reaction.svg"
import verbal from "./images/icon-verbal.svg"
import visual from "./images/icon-visual.svg"

const CriteriaBox = ({ Title, Score }) => {
	let currentIcon = memory
	let currentBgColor = "rgba(255,246,245,255)"
	let currentFontColor = "rgba(206,85,94,255)"

	switch (Title.toLowerCase()) {
		case "memory":
			currentIcon = memory
			currentBgColor = "rgba(255,246,245,255)"
			currentFontColor = "rgba(237,184,78,255)"
			break
		case "reaction":
			currentIcon = reaction
			currentBgColor = "rgba(255,251,242,255)"
			currentFontColor = "rgba(206,85,94,255)"
			break
		case "verbal":
			currentIcon = verbal
			currentBgColor = "rgba(242,251,250,255)"
			currentFontColor = "rgba(55,183,150,255)"
			break
		case "visual":
			currentIcon = visual
			currentBgColor = "rgba(243,243,253,255)"
			currentFontColor = "rgba(100,97,178,255)"
			break
	}
	return (
		<Box display="flex" direction="row" alignItems={"center"} justifyContent={"space-between"} sx={{ borderRadius: 2, backgroundColor: currentBgColor, height: "45px", padding: "5px 10px 5px 10px", marginBottom: "10px" }}>
			<Box display="flex" direction="row">
				<Box component="img" src={currentIcon} height={"20px"} sx={{ marginRight: "10px" }} />
				<Typography sx={{ color: currentFontColor, fontWeight: 700 }}>{Title}</Typography>
			</Box>
			<Box display="flex" direction="row">
				<Typography sx={{ color: "rgba(56,61,80,255)", fontWeight: 800, marginRight: 1 }}>{Score}</Typography>
				<Typography sx={{ color: "rgba(166,161,168,255)", fontWeight: 800 }}>/ 100</Typography>
			</Box>
		</Box>
	)
}

export default CriteriaBox
