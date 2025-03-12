import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'

export const SidebarContainer = styled.div`
    width: 20vw;
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.colors.totalDark};
    text-align: center;
`

export const SidebarHeader = styled.h1`
    font-size: 25px;
    padding: 20px;
`

export const SidebarItems = styled.div`
    display: flex;
    flex-direction: column;
`

export const SidebarItem = styled.div`
    color: ${(props) => props.theme.colors.textLight};
`

export const SidebarNavLink = styled(NavLink)`
    text-decoration: none;
    color: #fff;
    padding: 10px 15px;
    transition: background 0.3s ease;

    &.active {
        background: ${(props) => props.theme.colors.mainColor};
    }

    &:hover {
        background: rgba(108, 122, 224, 0.8);
        color: ${(props) => props.theme.colors.textDark};
    }
`

export const Logo = styled.img`
    width: 50%;
`