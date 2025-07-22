import { Button, ChangeInputs, Title, Modal, CreateMetalModal } from "@/components";
import styles from "./page.module.scss";



export default function Admin() {
	return (
		<div className={styles.dashboard}>
			<Title className={styles.dashboard__title} tag="h1" color="black"> Админ панель</Title>
			<div className={styles.dashboard__buttons}>
				<Button variant="outline" as="link" href="admin/change-metals">Изменить цены металлов</Button>
			</div>
			<Button variant="outline" as="link" href="admin/articles">Изменить статьи</Button>
		</div>
	);
}
