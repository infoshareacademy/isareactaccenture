import { DetailsList, SelectionMode } from "@fluentui/react"
import { PageWrapper } from "../../common/page-wrapper"

const columns = [
    { key: 'name', name: 'Name', fieldName: 'name', minWidth: 100 },
    { key: 'ingredients', name: 'Ingredients', fieldName: 'ingredients', minWidth: 100 },
    { key: 'price', name: 'Price', fieldName: 'price', minWidth: 100 },
];

export const Menu = () => {
    const burgers = [
        {
            key: 'id_1',
            name: 'burger name',
            ingredients: 'ingredients',
            price: 30
        }
    ]

    return (
        <PageWrapper title="Menu">
            <DetailsList 
                columns={columns}
                items={burgers}
                selectionMode={SelectionMode.none}
            />
        </PageWrapper>
    )
}