import type { ReactNode, FC } from 'react';
import styled from 'styled-components';
import { Text } from '@fluentui/react';

const PageWrapperContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 15px;
`;

type Props = { 
    children: ReactNode, 
    title: string 
}

export const PageWrapper = ({ children, title }: Props) => (
    <PageWrapperContainer>
        <Text variant="xxLarge">{title}</Text>
        {children}
    </PageWrapperContainer>
)