import { Button, Icon, Dialog, DialogTitle, DialogContent, List, ListItemButton, ListItem, ListItemAvatar, ListItemText, Avatar, Badge } from "@mui/material"
import { useState } from "react"
import { createRemoveFromCartAction } from "../../state/shop-cart";
import { shopCartLengthSeletor, shopCartSeletor, totalValueSelector } from "../../state/shop-cart/selector";
import { useAppSelector, useAppDispatch } from "../../hooks";

export const ShopCart = ()=> {
    const [isOpen, setIsOpen] = useState(false);
    const productsInCart = useAppSelector(shopCartSeletor);
    const productsCartLength = useAppSelector(shopCartLengthSeletor);
    const totalValue = useAppSelector(totalValueSelector);
    const dispatch = useAppDispatch();

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);

    const handleRemoveClick = (productId: number) => {
        dispatch(createRemoveFromCartAction(productId))
    }

    return <>
        <Button color="inherit" onClick={open}>
            <Badge badgeContent={productsCartLength} color="success">
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
                        <ListItemText primary={`Sum: ${totalValue}$`} />
                    </ListItem>
                </List>
            </DialogContent>
        </Dialog>
    </>
}