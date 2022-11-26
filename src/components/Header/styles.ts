import styled from 'styled-components'

export const HeaderContainer = styled.header`
	background: #d73035;

	.page-header {
		display:flex;
		justify-content: space-between;
		align-items:center;
		gap: 50px;
		img {
			max-width: 200px;
		}
		ul{
			display:flex;
			justify-content: center;
			gap: 20px;
			margin-right:20px;
			li {
				list-style:none;
				color:#FFFFFF;
			}
		}
		.login-btn {
			margin-right: 20px;

			.icon-btn{
				color:#FFFFFF;
				min-width: 50px
			}
		}
	}
`

