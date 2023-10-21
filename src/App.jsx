import React from "react"
import { Grid, Button, Container, Box, Stack, Typography, CssBaseline } from "@mui/material"
import { createTheme, ThemeProvider } from "@mui/material"
import { shadows } from "@mui/system"

import CriteriaBox from "./assets/CriteriaBox"

// const CriteriaBox = styled(Box)({
// 	display: "flex",
// 	direction: "row",
// 	alignItems: "center",
// 	justifyContent: "space-between",
// 	sx: { borderRadius: 2, backgroundColor: "hsl(221, 100%, 96%)", height: "45px", padding: "5px 10px px 10px" },
// })

const theme = createTheme({
	palette: {
		background: { default: "rgba(255,255,255,255)" },
	},
	typography: {
		fontFamily: ["Hanken Grotesk"].join(","),
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 375,
			md: 600,
			lg: 1440,
		},
	},
})

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Grid container direction="column" xs={12} minWidth="375px">
				<Grid item sx={{ marginTop: { sm: "0px", md: "150px" } }} />
				<Grid container item alignContent={"center"} justifyContent={"center"}>
					<Grid borderRadius={10} container direction="row" boxShadow={20} sx={{ width: { sm: "100%", md: "700px" }, height: { xs: "850px", sm: "850px", md: "500px" } }}>
						<Grid
							container
							sm={12}
							md={6}
							direction="row"
							justifyContent="space-between"
							alignItems="center"
							sx={{
								color: "hsl(0, 0%, 100%)",
								borderRadius: 10,
								borderTopLeftRadius: { xs: 0, sm: 0, md: 40 },
								borderTopRightRadius: { xs: 0, sm: 0, md: 40 },
								backgroundImage: "linear-gradient(hsl(252, 100%, 67%), hsl(241, 81%, 54%))",
								padding: { xs: "10px 20px 10px 20px", sm: "10px 20px 10px 20px", md: "40px 20px 40px 20px" },
							}}
						>
							<Grid item xs={12} alignContent="center" justifyContent="center">
								<Typography variant="h5" align="center" sx={{ color: "rgba(212,202,255,255)", fontWeight: "700" }}>
									Your Result
								</Typography>
							</Grid>
							<Grid container justifyContent="center" xs={12}>
								<Box display="flex" flexDirection="column" alignContent="center" justifyContent="center" sx={{ backgroundImage: "linear-gradient(hsla(256, 72%, 46%, 1), hsla(241, 72%, 46%, 0))", borderRadius: "50%", height: "200px", width: "200px" }}>
									<Typography variant="h2" align="center" sx={{ fontWeight: "800" }}>
										76
									</Typography>
									<Typography variant="body" align="center" sx={{ color: "rgba(212,202,255,255)", fontWeight: 500 }}>
										of 100
									</Typography>
								</Box>
							</Grid>
							<Grid item xs={12} alignContent="center" justifyContent="center" sx={{ padding: "0 20px 0 20px" }}>
								<Stack>
									<Typography variant="h4" align="center" sx={{ fontWeight: "500", marginBottom: { md: "10px" } }}>
										Great
									</Typography>
									<Typography variant="body" align="center" sx={{ color: "rgba(212,202,255,255)" }}>
										You scored higher than 65% of the people who have taken these tests.
									</Typography>
								</Stack>
							</Grid>
						</Grid>
						<Grid container sm={12} md={6} direction="column" justifyContent="space-between" item sx={{ padding: { xs: "10px 40px 30px 40px", sm: "20px 40px 30px 40px", md: "60px 40px 60px 40px" } }}>
							<Typography variant="h5" sx={{ color: "rgba(47,52,72,255)", fontWeight: 800 }}>
								Summary
							</Typography>
							<CriteriaBox Title="Reaction" Score="80" />
							<CriteriaBox Title="Memory" Score="92" />
							<CriteriaBox Title="Verbal" Score="61" />
							<CriteriaBox Title="Visual" Score="72" />
							<Button variant="contained" sx={{ textTransform: "none", fontWeight: 600, borderRadius: 50, width: "100%", height: "50px", backgroundColor: "rgba(48,59,89,255)", "&:hover": { backgroundColor: "rgba(83,58,246,255)" } }}>
								Continue
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</ThemeProvider>
	)
}

export default App
