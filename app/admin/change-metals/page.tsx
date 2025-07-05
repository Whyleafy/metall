import { Button, ChangeInputs, Title } from "@/components";
import styles from './page.module.scss'
export default function ChangeMetals() {
	return (
		<div className={styles.container}>
			<Button className={styles.container__button} variant="outline" as="link" href="/admin"> {`<`} Назад</Button>
			<div>
				<div className={styles.container__backup}>
					<Title tag="h2" color="black">Изменить цены существующих металлов</Title>
					<ChangeInputs />
				</div>
			</div>
		</div>
	)
}