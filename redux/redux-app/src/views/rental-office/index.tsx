import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material"

export const RentalOffice = () => {
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
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Availability</TableCell>
                    </TableRow>
                </TableBody>
                </Table>
            </TableContainer>
            <form style={{ marginTop: '15px'}}>
                <Typography variant="h6">Add new item</Typography>
                <TextField label="New item" size="small" />
                <Button type="submit">Add</Button>
            </form>
        </>
    )
}