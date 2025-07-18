import React from 'react';
import styles from './ContactSection.module.scss';
import { Button, Title } from '@/components';
import { Phone, Send } from 'lucide-react';

export const ContactSection = () => {
	return (
		<section className={styles.section} id="contacts">
			<Title tag='h2' color='white' className={styles.section__title}>Позвоните нам прямо сейчас</Title>
			<p className={styles.section__p}>Быстрая консультация и выезд курьера в удобное время</p>
			<div className={styles.callAction}>
				<div className={styles.callAction__call}>
					<Phone className={styles.callAction__call__phone} />
					<Title tag='h2' color='white' className={styles.callAction__call__number}>+7 (999) 123-45-67</Title>
				</div>
				<Button as="link" href='tel:+79991234567' variant='white' className={styles.callAction__button}>
					<Phone className={styles.buttonIcon}/>
					Позвонить
				</Button>
			</div>
			<div className={styles.socials}>
				<p className={styles.socials__p}>Или свяжитесь с нами в мессенджерах:</p>
				<div className={styles.socials__buttons}>
					<Button variant='green' className={styles.socials__button}>
						<img src="/whatsapp-logo.svg" className={styles.buttonIcon}/>
						WhatsApp
					</Button>
					<Button variant='blue' className={styles.socials__button}>
						<img src="/telegram-logo.svg" className={styles.buttonIcon}/> 
						Telegram
					</Button>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;