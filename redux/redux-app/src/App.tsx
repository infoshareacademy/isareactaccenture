import { AppBar, Button, Toolbar, Typography, Box } from "@mui/material";
import { Link, Route, Routes } from "react-router-dom";
import { Counter } from "./views/counter";

function App() {
  return (
    <>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ marginRight: '15px' }}>
                    Redux App
                </Typography>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/counter">Counter</Button>
            </Toolbar>
        </AppBar>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '15px'}}>
            <Routes>
                <Route path="/" element={<Typography variant="h2">Redux jest super!</Typography>} />
                <Route path="/counter" element={<Counter />} />
            </Routes>
        </Box>
    </>
  );
}

export default App;
