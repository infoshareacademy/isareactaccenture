import type { ReactNode } from 'react';
import styled from 'styled-components';
import { Text } from '@fluentui/react';

const PageWrapperContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 15px;
`;

export const PageWrapper = ({ children, title }: { children: ReactNode, title: string }) => (
    <PageWrapperContainer>
        <Text variant="xxLarge">{title}</Text>
        {children}
    </PageWrapperContainer>
)