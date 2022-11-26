import { useEffect, useState } from 'react'
import { Order } from '../../types/Order'
import { OrdersBoard } from '../OrdersBoard'
import { OrderBoardContainer, OrderContainer } from './styles'


export function Orders() {

	const [ orders, setOrders ] = useState<Order[]>([])

	useEffect(() => {
		fetch('http://localhost:3001/orders', {
			method:'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		}).then((resp) => resp.json())
			.then((data) => {
				console.log(data)
				setOrders(data)
			})
			.catch((error) => console.error(error))
	},[])

	const waiting = orders.filter((order) => { if(order.status === 'WAITING')  return order })
	const production = orders.filter((order) => { if(order.status === 'IN_PRODUCTION')  return order })
	const done = orders.filter((order) => { if(order.status === 'DONE')  return order })

	return (
		<>
			<OrderContainer>
				<h1>Pedidos:</h1>
				<OrderBoardContainer>
					<OrdersBoard icon='⏲️' title='Fila de espera' orders={waiting}/>
					<OrdersBoard icon='👨‍🍳' title='Em preparação' orders={production}/>
					<OrdersBoard icon='✅' title='Pronto!' orders={done}/>
				</OrderBoardContainer>
			</OrderContainer>
		</>
	)
}
