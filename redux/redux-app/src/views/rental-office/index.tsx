import { Button, Icon, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material"
import { useSelector, useDispatch } from "react-redux"
import { useForm } from "react-hook-form"
import { State } from "../../store"
import { add, remove, rent, giveBack } from "../../state/rental-office/index-toolkit"

export const RentalOffice = () => {
    const { register, handleSubmit } = useForm({
        defaultValues: { name: '' }
    });
    const products = useSelector((state: State) => state.rentalOffice);
    const dispatch = useDispatch();

    const onSubmit = ({ name }: { name: string }) => {
        dispatch(add({ name, price: 10, isAvailable: true }))
    }

    const handleRemoveClick = (productName: string) => {
        dispatch(remove(productName))
    }

    const handleRentClick = (productName: string) => {
        dispatch(rent(productName))
    }

    const handleReturnClick = (productName: string) => {
        dispatch(giveBack(productName))
    }

    return (
        <>
            <Typography variant="h2">Rental office</Typography>
            <TableContainer component={Paper}>
                <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Availability</TableCell>
                        <TableCell sx={{ width: '100px'}} />
                        <TableCell sx={{ width: '100px'}} />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        products.map((product) => (
                            <TableRow key={product.name}>
                                <TableCell>{product.name}</TableCell>
                                <TableCell align="right">{product.price}</TableCell>
                                <TableCell align="right">
                                    {product.isAvailable 
                                        ? <Icon>check_circle</Icon> 
                                        : <Icon>block</Icon>}
                                </TableCell>
                                <TableCell>
                                    {product.isAvailable 
                                        ? <Button color="success" onClick={() => handleRentClick(product.name)}>Rent</Button>
                                        : <Button color="warning" onClick={() => handleReturnClick(product.name)}>Return</Button>}
                                </TableCell>
                                <TableCell>
                                    <Button color="error" onClick={() => handleRemoveClick(product.name)}>Remove</Button>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
                </Table>
            </TableContainer>
            <form style={{ marginTop: '15px'}} onSubmit={handleSubmit(onSubmit)}>
                <Typography variant="h6">Add new item</Typography>
                <TextField label="New item" size="small" {...register('name')} />
                <Button type="submit">Add</Button>
            </form>
        </>
    )
}