import { useState, useEffect } from 'react'
import { DetailsList, SelectionMode  } from "@fluentui/react"
import { PageWrapper } from "../../common/page-wrapper"

const columns = [
    { key: 'name', name: 'Name', fieldName: 'name', minWidth: 200 },
    { key: 'ingredients', name: 'Ingredients', fieldName: 'ingredients', minWidth: 200 },
    { key: 'price', name: 'Price', fieldName: 'price', minWidth: 100 },
];

export const Menu = () => {
    const [burgers, setBurgers] = useState<any>([]);

    useEffect(() => {
        fetch('https://rest-api-b6410.firebaseio.com/burgers.json')
            .then(r => r.json())
            .then(data => {
                const formattedData = Object.keys(data).map(key => ({ ...data[key], id: key }));
                setBurgers(formattedData);
            })
    }, []);

    return (
        <PageWrapper title="Menu">
            <DetailsList 
                columns={columns}
                items={burgers}
                selectionMode={SelectionMode.none}
                viewport={{ width: 500, height: 1000 }}
            />
        </PageWrapper>
    )
}