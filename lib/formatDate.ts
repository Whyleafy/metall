export const formatDate = (date: string | Date) => {
	return new Intl.DateTimeFormat('ru-RU', {
		year: '2-digit',
		month: '2-digit',
		day: '2-digit',
	}).format(new Date(date));
};