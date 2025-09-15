'use client';

import {useFormStatus} from 'react-dom';

export const MealShareSubmit = () => {
    const {pending} = useFormStatus();
    return <button disabled={pending} type="submit">{pending ? '...Submitting' : 'Meal Share'}</button>;
}