import React from 'react';
import styles from './HeroSection.module.scss';
import { Button, Title } from '@/components';

export const HeroSection = () => {
  return (
    <section className={styles.section} id="main">
      <div className={styles.section__container}>
        <h1 className={styles.section__container__title}>
          Сдавайте металл — зарабатывайте деньги!
        </h1>
        <p className={styles.section__container__paragraph}>
          Принимаем все виды металлолома по выгодным ценам. Быстрая оценка, честные весы, моментальная оплата.
        </p>
        <div className={styles.buttons}>
          <Button  variant="white" as="link" href="#prices">
            Узнать цены
          </Button>
          <Button  variant="red" as="link" href="#contacts">
            Связаться с нами
          </Button>
        </div>
      </div>
    </section>
  );
};
