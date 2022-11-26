export interface Order {
	_id: string;
	table: string;
	status: 'WAITING' | 'IN_PRODUCTION' | 'DONE';
	products: Array<{
		_id: string;
		quantity: number;
		product: Array<{
			name: string;
			description: string;
			imagePath: string;
			price: number;
			ingredients: Array<{
				name: [];
				icon: string;
			}>;
			category: string;
		}>;
	}>;
}
