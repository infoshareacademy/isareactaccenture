import type { ReactNode } from 'react';
import styled from 'styled-components';
import { Text } from '@fluentui/react';

const PageWrapperContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 15px;

`;const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;
`;

export const PageWrapper = ({ children, title }: { children: ReactNode, title: string }) => (
    <PageWrapperContainer>
        <TextContainer>
            <Text variant="xxLarge">{title}</Text>
        </TextContainer>
        {children}
    </PageWrapperContainer>
)