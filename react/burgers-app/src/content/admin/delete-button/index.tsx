import { DefaultButton } from "@fluentui/react"
import { Burger } from "../../../common/types"
import { deleteBurger } from "../../../services/burgers"


export const createRenderDeleteButton = (
    refresh: () => void, 
    editId: string | null,
    cancelEditMode: () => void
) => (item: Burger) => {
    const handleDeleteClick = () => {
        deleteBurger(item.id)
            .then(() => refresh())
    }

    const handleCancelClick = () => {
        cancelEditMode();
    }

    if (editId === item.id) {
        return <DefaultButton 
            styles={{ root: { backgroundColor: 'grey'}}}
            onClick={handleCancelClick}
            >
                Cancel
        </DefaultButton>
    }

    return <DefaultButton onClick={handleDeleteClick}>Delete</DefaultButton>
}