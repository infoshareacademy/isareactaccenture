import { AppBar, Button, Toolbar, Typography, Box } from "@mui/material";
import { Link, Route, Routes } from "react-router-dom";
import { Counter } from "./views/counter";
import { RentalOffice } from "./views/rental-office";
import { Shop } from "./views/shop";
import { ShopCart } from "./views/shop-cart";

function App() {
  return (
    <>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ marginRight: '15px' }}>
                        Redux App
                </Typography>
                <Box sx={{ flexGrow: 1}}>
                    <Button color="inherit" component={Link} to="/">Home</Button>
                    <Button color="inherit" component={Link} to="/counter">Counter</Button>
                    <Button color="inherit" component={Link} to="/rental-office">Rental office</Button>
                    <Button color="inherit" component={Link} to="/shop">Shop</Button>
                </Box>
                <ShopCart />
            </Toolbar>
        </AppBar>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '15px'}}>
            <Routes>
                <Route path="/" element={<Typography variant="h2">Redux jest super!</Typography>} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/rental-office" element={<RentalOffice />} />
                <Route path="/shop" element={<Shop />} />
            </Routes>
        </Box>
    </>
  );
}

export default App;
