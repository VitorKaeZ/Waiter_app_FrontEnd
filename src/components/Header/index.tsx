import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { HeaderContainer } from './styles'

export function Header() {
	return (
		<HeaderContainer>
			<div className="page-header">
				<img src="../src/assets/images/logo.svg" alt="" />
				<ul>
					<li>Cardápio</li>
					<li>Pedidos</li>
					<li>Cupons</li>
				</ul>
				<div className='login-btn'>
					<a href='https:/www.google.com.br'> <FontAwesomeIcon className='icon-btn' icon={faUser} /></a>
				</div>
			</div>
		</HeaderContainer>
	)
}
