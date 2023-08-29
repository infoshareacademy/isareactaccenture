import { useState } from 'react';
import {IconButton} from '@fluentui/react';
import { AddModal } from './main';
import styled from 'styled-components';

const ButtonContainer = styled.div`
    display: flex;
    width: 770px;
    padding: 15px;
    justify-content: flex-end;
`

export const AddModalButton = ({ refresh }: { refresh: () => void}) => {
    const [isHidden, setIsHidden] = useState(true);

    const open = () => setIsHidden(false);
    const close = () => setIsHidden(true);

    return (
        <ButtonContainer>
            <IconButton iconProps={{ iconName: "Add" }} onClick={open} />
            <AddModal isHidden={isHidden} onClose={close} refresh={refresh} />
        </ButtonContainer>
    )
}