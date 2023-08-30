import { PrimaryButton, TextField } from "@fluentui/react"
import { useForm, Controller } from "react-hook-form"
import { PageWrapper } from "../../common/page-wrapper"
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from "react-router-dom"

export const Sign = () => {
    const navigate = useNavigate();
    const { control, handleSubmit } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const onSubmit = ({ email, password }: { email: string, password: string }) => {
        // --FIREBASE
        // koko@koko.pl koko123
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        // --FIREBASE
            .then(() => {
                navigate('/')
            })
    }

    return (
        <PageWrapper title="Sign in">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="email"
                    control={control}
                    render={({ field }) => <TextField label="Email" {...field} />}
                />
                <Controller
                    name="password"
                    control={control}
                    render={({ field }) => <TextField label="Password" type="password" {...field} />}
                />
                <br />
                <PrimaryButton type="submit" text="Log in" />
            </form>
        </PageWrapper>
    )    
}