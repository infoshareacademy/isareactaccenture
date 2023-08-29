import { useState, useEffect } from 'react'
import { DetailsList, SelectionMode  } from "@fluentui/react"
import { PageWrapper } from "../../common/page-wrapper"
import { Burger } from '../../common/types';
import { getBurgers } from '../../services/burgers';

const columns = [
    { key: 'name', name: 'Name', fieldName: 'name', minWidth: 200 },
    { key: 'ingredients', name: 'Ingredients', fieldName: 'ingredients', minWidth: 200 },
    { key: 'price', name: 'Price', fieldName: 'price', minWidth: 100 },
];

export const Menu = () => {
    const [burgers, setBurgers] = useState<Burger[]>([]);

    useEffect(() => {
        getBurgers().then(data => setBurgers(data));
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