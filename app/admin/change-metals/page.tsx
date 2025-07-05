import { ChangeInputs, Title } from "@/components";
import styles from './page.module.scss'
export default function ChangeMetals() {
	return (
		<div className={styles.container}>
			<Title tag="h2" color="black">Изменить цены существующих металлов</Title>
			<ChangeInputs />
		</div>
	)
}