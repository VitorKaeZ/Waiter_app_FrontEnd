import { useState } from 'react'
import { Order } from '../../types/Order'
import { OrderModal } from '../OrderModal'
import { Board, OrdersContainer } from './styles'

interface OrdersBoardProps {
	icon: string;
	title: string;
	orders: Order[];
}

export function OrdersBoard({ icon, title, orders }: OrdersBoardProps) {
	const [isModalVisible, setIsModalVisible] = useState(false)
	const [selectedOrder, setSelectedOrder] = useState<null | Order>(null)

	function handleOpenOrderModal(order: Order) {
		setIsModalVisible(true)
		setSelectedOrder(order)
	}

	function handleCloseOrderModal() {
		setIsModalVisible(false)
		setSelectedOrder(null)
	}
	return (
		<Board>
			<OrderModal
				visible={isModalVisible}
				order={selectedOrder}
				onClose={handleCloseOrderModal}
			/>
			<div className='header-board'>
				<span>{icon}</span>
				<strong>{title}</strong>
				<span>({orders.length})</span>
			</div>
			{orders.length > 0 && (
				<OrdersContainer>
					{
						orders.map((order) =>
							(
								<button type='button' key={order._id} onClick={() => handleOpenOrderModal(order)}>
									<strong>Mesa {order.table}</strong>
									<span>{order.products.length} itens</span>
								</button>
							)
						)
					}

				</OrdersContainer>
			)}
		</Board>
	)
}
