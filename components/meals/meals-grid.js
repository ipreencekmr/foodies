import MealItem from './meal-item';
import style from './meals-grid.module.css';

export const MealsGrid = ({meals}) => {
    return (
        <ul className={style.meals}>
            {
                meals.map((meal) => <li key={meal.id}><MealItem {...meal}></MealItem></li>)
            }
        </ul>
    )
};