import Link from 'next/link';
import style from './page.module.css';
import { MealsGrid } from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';
import { Suspense } from 'react';

const Meals = async () => {
    const meals = await getMeals();
    return <MealsGrid meals={meals}></MealsGrid>
}

export default function MealsComponent() {
    return (
        <>
            <header className={style.header}>
                <h1>Delicious meals prepared <span className={style.highlight}>by you</span></h1>
                <p>
                    Choose your favourite recipe and cook it yourself. It is easy and fun.
                </p>
                <p className={style.cta}>
                    <Link href="/meals/share">
                        Share your favourite recipe
                    </Link>
                </p>
            </header>
            <main className={style.main}>
                <Suspense fallback={<p className={style.loading}>Fetching meals...</p>}>
                <Meals></Meals>
                </Suspense>
            </main>
        </>
    )
}