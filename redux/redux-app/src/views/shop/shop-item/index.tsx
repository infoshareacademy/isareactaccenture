import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { ShopProduct, createAddToCartAction, createRemoveFromCartAction } from "../../../state/shop-cart";
import { isProductInCartSelector } from "../../../state/shop-cart/selector";

export const ShopItem = ({ product }: { product: ShopProduct }) => {
    const dispatch = useDispatch();
    const isProductInCart = useSelector(isProductInCartSelector(product))

    const handleAddToCartClick = () => {
        dispatch(createAddToCartAction(product))
    }

    const handleRemoveFromCartClick = () => {
        dispatch(createRemoveFromCartAction(product.id))
    }

    return (
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
                {isProductInCart
                    ? <Button variant="contained" size="small" color="error" 
                        onClick={handleRemoveFromCartClick}>Remove from cart</Button>
                    : <Button variant="contained" size="small" 
                        onClick={handleAddToCartClick}>Add to cart</Button>
                }
            </CardActions>
        </Card>
    )
}