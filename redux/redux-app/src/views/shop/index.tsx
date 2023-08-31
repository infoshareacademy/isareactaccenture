import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { ShopProduct, createAddToCartAction, createRemoveFromCartAction } from "../../state/shop-cart";
import { State } from "../../store";

const shopProducts: ShopProduct[] = Array(100).fill(0).map((_, i) => ({
    id: i + 1,
    name: `Product ${i+1}`,
    price: Math.floor(Math.random() * 100),
    url: Math.random() > 0.5 
        ? 'https://m.gadzetomania.pl/132-7e356be390a795196dedcabf7a8c.jpg'
        : 'https://lovebelfast.co.uk/wp-content/uploads/2013/09/article-0-1bc35314000005dc-674_634x565.jpg'
}))

export const Shop = () => {
    const productsInCart = useSelector((state: State) => state.shopCart);
    const dispatch = useDispatch();

    const handleAddToCartClick = (product: ShopProduct) => {
        dispatch(createAddToCartAction(product))
    }

    const handleRemoveFromCartClick = (productId: number) => {
        dispatch(createRemoveFromCartAction(productId))
    }

    const isProductInCart = (product: ShopProduct) => {
        return productsInCart.map(p => p.id).includes(product.id);
    }

    return <>
        <Typography variant="h2">Shop</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
            {
                shopProducts.map(product => (
                    <Card sx={{ width: 'calc(25% - 30px)', margin: '15px' }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={product.url}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {product.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {product.price} $
                            </Typography>
                        </CardContent>
                        <CardActions>
                            {isProductInCart(product)
                                ? <Button variant="contained" size="small" color="error" 
                                    onClick={() => handleRemoveFromCartClick(product.id)}>Remove from cart</Button>
                                : <Button variant="contained" size="small" 
                                    onClick={() => handleAddToCartClick(product)}>Add to cart</Button>
                            }
                        </CardActions>
                    </Card>
                ))
            }
        </Box>
    </>
}