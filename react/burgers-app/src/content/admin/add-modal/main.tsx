import { Dialog, DialogFooter, DialogContent, PrimaryButton, DefaultButton, TextField } from '@fluentui/react';
import { useForm, Controller } from 'react-hook-form';
import { BurgerData } from '../../../common/types';
import { postBurger } from '../../../services/burgers';

const formFields: { name:'name' | 'ingredients' | 'price' | 'url', label: string }[] = [
    { name: 'name', label: 'Name' },
    { name: 'ingredients', label: 'Ingredients' },
    { name: 'price', label: 'Price' },
    { name: 'url', label: 'Url' },
]

export const AddModal = ({ isHidden, onClose, refresh }: { isHidden: boolean, onClose: () => void, refresh: () => void}) => {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            name: '',
            ingredients: '',
            price: '',
            url: ''
        }
    });

    const onSubmit = (data: BurgerData) => {
        postBurger(data)
            .then(() => {
                onClose();
                refresh();
            })
    };


    return (
        <Dialog
            hidden={isHidden}
            onDismiss={onClose}
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <DialogContent title="Add burger">
                    {formFields.map((formField) => (
                        <Controller
                            key={formField.name}
                            name={formField.name}
                            control={control}
                            render={({ field }) => <TextField label={formField.label} {...field} />}
                        />
                    ))}
                </DialogContent>
                <DialogFooter>
                    <PrimaryButton text="Add" type="submit" />
                    <DefaultButton text="Close" onClick={onClose} />
                </DialogFooter>
            </form>
        </Dialog>
    )
}