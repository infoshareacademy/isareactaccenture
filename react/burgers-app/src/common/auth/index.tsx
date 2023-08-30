import { ReactNode } from "react";
import { useUserContext } from "../../controllers/user-context"
import { PageWrapper } from "../page-wrapper";
import { Text } from '@fluentui/react';
import { Link } from "react-router-dom";

export const Auth = ({ children }: { children: ReactNode }) => {
    const user = useUserContext();

    return user 
        ? <>{children}</>
        : <PageWrapper title="Unauthorized">
            <Text>Please <Link to="/sign">sign in</Link> to see a content!</Text>
        </PageWrapper>
}