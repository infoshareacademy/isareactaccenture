import { Text } from "@fluentui/react"
import { PageWrapper } from "../../common/page-wrapper"
import { useUserContext } from "../../controllers/user-context"

export const Home = () => {
    const user = useUserContext();

    return (
        <PageWrapper title="Welcome to our burger restaurant!">
            {user ? <Text>Hello {user?.email}!</Text> : <Text>Hello stranged!</Text>}
        </PageWrapper>
    )
}