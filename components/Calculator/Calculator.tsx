'use client';

import { useEffect, useState } from 'react';
import styles from './Calculator.module.scss';
import { Calculator as CalculatorIcon } from 'lucide-react';
import { Title } from '@/components';
import { Metal } from '@/types/metals';


export const Calculator = () => {
  const [selectedId, setSelectedId] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [metals, setMetals] = useState<Metal[]>([]);
  const selectedMetal = metals.find((m) => m.id === selectedId);

	
	useEffect(() => {
		const fetchmetals = async () => {
			try {
				const response = await fetch("api/metals");
				
				if (!response.ok) {
						throw new Error("Ошибка при получении данных");
				}
				const data = await response.json();
				setMetals(data);
			} catch (error) {
				console.log(error)
			}
		};
		fetchmetals();
	}, []);

  const result = selectedMetal?.cashPrice ? selectedMetal?.cashPrice * parseFloat(weight) : 0;

  return (
    <div className={styles.calculator}>
      <div className={styles.calculator__text}>
        <CalculatorIcon />
        <Title tag='h3' color='black'>Расчет стоимости</Title>
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
         {metals.map((metal) => (
			<option value={metal.id} key={metal.id}>{metal.name}</option>
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
