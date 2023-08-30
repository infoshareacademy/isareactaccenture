import { PrimaryButton, DefaultButton } from "@fluentui/react"
import { Burger, BurgerData } from "../../../common/types"
import { putBuger } from "../../../services/burgers"

export const createRenderEditButton = (
    enterEditMode: (id: string) => void,
    editId: string | null,
    editFormData: BurgerData,
    setEditFormData: (data: BurgerData) => void,
    cancelEditMode: () => void,
    refresh: () => void,
) => {
    return (item: Burger) => {
        const handleEditClick = () => {
            enterEditMode(item.id);
            const {id, ...rest} = item;
            setEditFormData(rest);
        }

        const handleSaveClick = () => {
            putBuger(item.id, editFormData).then(() => {
                cancelEditMode();
                refresh();
            })
        }

        if (editId === item.id) {
            return <DefaultButton 
                styles={{ root: { backgroundColor: 'green'}}}
                onClick={handleSaveClick}
                >
                    Save
            </DefaultButton>
        }

        return <PrimaryButton onClick={handleEditClick}>Edit</PrimaryButton>
    }
}