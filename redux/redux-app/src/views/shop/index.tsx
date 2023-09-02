import { Box, Typography } from "@mui/material";
import { ShopProduct } from "../../state/shop-cart";
import { ShopItem } from "./shop-item";

const shopProducts: ShopProduct[] = Array(100).fill(0).map((_, i) => ({
    id: i + 1,
    name: `Product ${i+1}`,
    price: Math.floor(Math.random() * 100),
    url: Math.random() > 0.5 
        ? 'https://m.gadzetomania.pl/132-7e356be390a795196dedcabf7a8c.jpg'
        : 'https://lovebelfast.co.uk/wp-content/uploads/2013/09/article-0-1bc35314000005dc-674_634x565.jpg'
}))

export const Shop = () => {
    return <>
        <Typography variant="h2">Shop</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
            {
                shopProducts.map(product => (
                    <ShopItem key={product.id} product={product} />
                ))
            }
        </Box>
    </>
}