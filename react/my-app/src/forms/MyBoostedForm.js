import { useForm } from 'react-hook-form';

export const MyBoostedForm = () => {
    const { register, handleSubmit } = useForm({
        defaultValues: {
            name: '',
            age: '',
            gender: 'facetka',
            comment: ''
        }
    });

    const onSubmit = async (data) => {
        alert(JSON.stringify(data, null, 2))
    }

    return <form onSubmit={handleSubmit(onSubmit)}>
        <label>Imię</label>
        <input type="text" {...register('name')} />
        <label>Wiek</label>
        <input type="number" {...register('age')} />
        <label>Płeć</label>
        <select name="gender" {...register('gender')}>
            <option value="facet">Męzczyzna</option>
            <option value="kobitka">Kobieta</option>
            <option value="facetka">Pani w szkole</option>
        </select>
        <label>Komentarz</label>
        <textarea name="comment" {...register('comment')} />
        <input type="submit" value="Kliknij mnie najlepiej" />
    </form>
}