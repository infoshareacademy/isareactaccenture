import { Button, Icon, Dialog, DialogTitle, DialogContent, List, ListItemButton, ListItem, ListItemAvatar, ListItemText, Avatar, Badge } from "@mui/material"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { State } from "../../store";
import { createRemoveFromCartAction } from "../../state/shop-cart";

export const ShopCart = () => {
    const [isOpen, setIsOpen] = useState(false);
    const productsInCart = useSelector((state: State) => state.shopCart);
    const dispatch = useDispatch();

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);

    const handleRemoveClick = (productId: number) => {
        dispatch(createRemoveFromCartAction(productId))
    }

    const getTotalValue = () => {
        return productsInCart.map(p => p.price).reduce((acc, curr) => acc + curr, 0)
    }

    return <>
        <Button color="inherit" onClick={open}>
            <Badge badgeContent={productsInCart.length} color="success">
                <Icon>shopping_cart</Icon>
            </Badge>
        </Button>
        <Dialog onClose={close} open={isOpen} fullWidth>
            <DialogTitle>Shop cart</DialogTitle>
            <DialogContent>
                <List sx={{ pt: 0 }}>
                    {
                        productsInCart.map(product => (
                            <ListItem disableGutters>
                                <ListItemAvatar>
                                    <Avatar src={product.url} />
                                </ListItemAvatar>
                                <ListItemText primary={product.name} secondary={product.price} />
                                <ListItemButton sx={{ flexGrow: 0}} onClick={() => handleRemoveClick(product.id)}>
                                    <Icon>remove</Icon>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                    <ListItem disableGutters>
                        <ListItemText primary={`Sum: ${getTotalValue()}$`} />
                    </ListItem>
                </List>
            </DialogContent>
        </Dialog>
    </>
}