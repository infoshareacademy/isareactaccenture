import { PrimaryButton, DefaultButton } from "@fluentui/react"
import { Burger } from "../../../common/types"


export const createRenderEditButton = (
    enterEditMode: (id: string) => void,
    editId: string | null
) => {
    return (item: Burger) => {
        const handleEditClick = () => {
            enterEditMode(item.id)
        }

        const handleSaveClick = () => {
            console.log('save')
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