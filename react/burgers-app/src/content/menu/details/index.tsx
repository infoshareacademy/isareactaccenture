import { useState, useEffect } from 'react';
import { Persona, PersonaSize, Text, Spinner, SpinnerSize } from '@fluentui/react';
import { useParams } from 'react-router-dom';
import { PageWrapper } from '../../../common/page-wrapper';
import { BurgerData } from '../../../common/types';
import { getBurger } from '../../../services/burgers';


export const Details = () => {
    const params = useParams();
    const [burger, setBurger] = useState<BurgerData | null>(null);
    const [error, setError] = useState<unknown>(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetchBurger = async (burgerId: string) => {
        try {
            const data = await getBurger(burgerId)
            setBurger(data)
        } catch (err) {
            setError(err);
        } finally {
            setIsLoading(false)
        }
    }
 
    useEffect(() => {
        if (params.id) {
            fetchBurger(params.id)
        }
    }, [params.id]);

    if (error) {
        return <PageWrapper title="An error occurred">
            <Text variant="medium">Please refresh page.</Text>
        </PageWrapper>
    }

    if (isLoading || !burger) {
        return <PageWrapper title="Loading ...">
            <Spinner size={SpinnerSize.large}/>
        </PageWrapper>
    }

    return (
        <PageWrapper title={burger.name}>
            <Persona 
                imageUrl={burger.url || "https://cdn-icons-png.flaticon.com/512/3075/3075977.png"}
                size={PersonaSize.size120}
                hidePersonaDetails
            />
            <Text variant="large">{burger.ingredients}</Text>
            <Text variant="medium">{burger.price}</Text>
        </PageWrapper>
    )
}