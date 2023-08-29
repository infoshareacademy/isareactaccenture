import { PageWrapper } from "../../common/page-wrapper"
import { useState, useEffect } from 'react'
import { DetailsList, PrimaryButton, DefaultButton, SelectionMode  } from "@fluentui/react"
import { Burger } from '../../common/types';
import { deleteBurger, getBurgers } from '../../services/burgers';
import { AddModalButton } from "./add-modal";

const renderEditButton = () => <PrimaryButton>Edit</PrimaryButton>
const createRenderDeleteButton = (refresh: () => void) => (item: Burger) => {
    const removeBurger = () => {
        deleteBurger(item.id)
            .then(() => refresh())
    }

    return <DefaultButton onClick={removeBurger}>Delete</DefaultButton>
}


export const Admin = () => {
    const [burgers, setBurgers] = useState<Burger[]>([]);

    const fetchBurgers = async () => {
        const data = await getBurgers()
        setBurgers(data);
    }

    const columns = [
        { key: 'name', name: 'Name', fieldName: 'name', minWidth: 200 },
        { key: 'ingredients', name: 'Ingredients', fieldName: 'ingredients', minWidth: 200 },
        { key: 'price', name: 'Price', fieldName: 'price', minWidth: 100 },
        { key: 'edit', name: 'Edit', minWidth: 100, onRender: renderEditButton  },
        { key: 'delete', name: 'Delete', minWidth: 100, onRender: createRenderDeleteButton(fetchBurgers) },
    ]

    useEffect(() => {
        fetchBurgers();
    }, []);

    return (
        <PageWrapper title="Admin">
            <DetailsList 
                columns={columns}
                items={burgers}
                selectionMode={SelectionMode.none}
                viewport={{ width: 500, height: 1000 }}
            />
            <AddModalButton refresh={fetchBurgers} />
        </PageWrapper>
    )
}