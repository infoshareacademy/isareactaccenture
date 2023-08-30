import { IColumn, Text } from '@fluentui/react';
import { Burger } from "../../../common/types"

export const createRenderColumn = (editId: string | null) => {
    return (item: Burger, index?: number, column?: IColumn) => {
        return <Text>{item[column.fieldName as string]}</Text>
    }
}