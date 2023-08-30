import { PageWrapper } from "../../common/page-wrapper"
import { useState, useEffect } from 'react'
import { DetailsList, SelectionMode  } from "@fluentui/react"
import { Burger, BurgerData } from '../../common/types';
import { getBurgers } from '../../services/burgers';
import { AddModalButton } from "./add-modal";
import { createRenderEditButton } from "./edit-button";
import { createRenderDeleteButton } from "./delete-button";
import { createRenderColumn } from "./column";

export const Admin = () => {
    const [burgers, setBurgers] = useState<Burger[]>([]);
    const [editId, setEditId] = useState<string | null>(null);
    const [editFormData, setEditFormData] = useState<BurgerData>({ 
        name: '', ingredients: '', price:''
    });

    const enterEditMode = (id: string) => setEditId(id);
    const cancelEditMode = () => setEditId(null);

    const fetchBurgers = async () => {
        const data = await getBurgers()
        setBurgers(data);
    }

    const columns = [
        { key: 'name', name: 'Name', fieldName: 'name', minWidth: 200,
            onRender: createRenderColumn(editId, editFormData, setEditFormData) },
        { key: 'ingredients', name: 'Ingredients', fieldName: 'ingredients', minWidth: 200,
            onRender: createRenderColumn(editId, editFormData, setEditFormData) },
        { key: 'price', name: 'Price', fieldName: 'price', minWidth: 100,
            onRender: createRenderColumn(editId, editFormData, setEditFormData) },
        { key: 'edit', name: 'Edit', minWidth: 100, 
            onRender: createRenderEditButton(enterEditMode, editId, editFormData, setEditFormData, cancelEditMode, fetchBurgers) },
        { key: 'delete', name: 'Delete', minWidth: 100, 
            onRender: createRenderDeleteButton(fetchBurgers, editId, cancelEditMode) },
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