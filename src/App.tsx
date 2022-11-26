import { GlobalStyles } from './styles/GlobalStyles'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Orders } from './components/Orders'

export default function App() {
	return (
		<>
			<Header/>
			<GlobalStyles/>
			<div className='content'>
				<Orders/>
			</div>
			<Footer/>
		</>

	)
}
