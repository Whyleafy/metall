import { Button, ChangeInputs, Title } from "@/components";
import styles from "./page.module.scss";


export default function Admin() {
  

  return (
    <div className={styles.dashboard}>
		<Title className={styles.dashboard__title} tag="h1" color="black"> Админ панель</Title>
      	<Button variant="outline" as="link" href="admin/change-metals">Изменить цены</Button>
      	<Button variant="outline">Создать металл</Button>
    </div>
  );
}
