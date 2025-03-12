import { NavLink } from 'react-router-dom'
import { SidebarContainer, SidebarHeader, SidebarItems, SidebarNavLink, Logo } from '../styles/Sidebar.styled.ts';
//import logo from '../img/logo.png'

const Sidebar = () => {

    return (
        <SidebarContainer>
            {/* <Logo src={logo}></Logo> */}
            <SidebarHeader>Меню</SidebarHeader>
            <SidebarItems>
                <SidebarNavLink to="/">Сотрудники</SidebarNavLink>
                <SidebarNavLink to="/cabinets">Кабинеты</SidebarNavLink>
                <SidebarNavLink to="/logs">Логи</SidebarNavLink>
            </SidebarItems>
        </SidebarContainer>
    )
}

export { Sidebar };