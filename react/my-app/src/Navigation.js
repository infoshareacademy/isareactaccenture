import { Pivot, PivotItem } from '@fluentui/react';


export const Navigation = () => {
    return (
        <Pivot>
            <PivotItem headerText="Home" />
            <PivotItem headerText="About me" />
            <PivotItem headerText="Forms" />
            <PivotItem headerText="Games" />
            <PivotItem headerText="Users" />
        </Pivot>
    )
}