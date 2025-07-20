'use client';

import { useEffect, useState } from 'react';
import styles from './Calculator.module.scss';
import { Calculator as CalculatorIcon } from 'lucide-react';
import { Title } from '@/components';
import { Metal } from '@/types/metals';
import { getCategoriesWithMetals } from '@/app/actions/getCategoryWithMetals';

interface CategoryWithMetals {
    id: string;
    name: string;
    metals: Metal[];
}

export const Calculator = () => {
    const [selectedId, setSelectedId] = useState<string>('');
    const [weight, setWeight] = useState<string>('');
    const [categories, setCategories] = useState<CategoryWithMetals[]>([]);

    // Загружаем данные при монтировании компонента
    useEffect(() => {
        const loadData = async () => {
            const data = await getCategoriesWithMetals();
            setCategories(data);
        };

        loadData();
    }, []);

    // Все металлы из всех категорий
    const allMetals = categories.flatMap(category => category.metals);
    const selectedMetal = allMetals.find(metal => metal.id === selectedId);

    const result = selectedMetal?.cashPrice ? selectedMetal?.cashPrice * parseFloat(weight) : 0;

    return (
        <div className={styles.calculator}>
            <div className={styles.calculator__text}>
                <CalculatorIcon />
                <Title tag="h3" color="black">Расчет стоимости</Title>
            </div>

            <div>
                <label htmlFor="metal-select" className={styles.label}>
                    Вид металла
                </label>
                <select
                    id="metal-select"
                    className={styles.select}
                    value={selectedId}
                    onChange={(e) => setSelectedId(e.target.value)}
                >
                    <option value="">Выберите металл</option>
                    {categories.map((category) => (
                        <optgroup label={category.name} key={category.id}>
                            {category.metals.map((metal) => (
                                <option value={metal.id} key={metal.id}>
                                    {metal.name}
                                </option>
                            ))}
                        </optgroup>
                    ))}
                </select>
            </div>

            <div>
                <label htmlFor="weight" className={styles.label}>
                    Вес металла (кг)
                </label>
                <input
                    id="weight"
                    type="number"
                    placeholder="Введите вес"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className={styles.input}
                    min={0}
                />
            </div>

            {result > 0 && (
                <div className={styles.result}>
                    <p>Примерная стоимость:</p>
                    <p className={styles.result__price}>{result.toLocaleString()} ₽</p>
                    <p className={styles.result__note}>
                        * Окончательная цена определяется при осмотре
                    </p>
                </div>
            )}
        </div>
    );
};
