import { IColumn, Text, TextField } from '@fluentui/react';
import { Burger, BurgerData } from "../../../common/types"
import { FormEvent } from 'react';

export const createRenderColumn = (
    editId: string | null,
    editFormData: BurgerData,
    setEditFormData: (formData: BurgerData) => void
) => {
    return (item: Burger, index?: number, column?: IColumn) => {
        const keyName = column?.fieldName as keyof BurgerData;

        const handleChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
            setEditFormData({
                ...editFormData,
                [keyName]: newValue
            })
        }

        if (editId === item.id) {
            return <TextField label={column?.name} value={editFormData[keyName]} onChange={handleChange} />
        }

        return <Text>{item[keyName]}</Text>
    }
}