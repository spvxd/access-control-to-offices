import { Sidebar } from '../layout/Sidebar'
import { Outlet } from 'react-router-dom'
import { MainContainer } from '../styles/MainLayout.styled.ts'

const MainLayout = () => {
    return (
        <MainContainer>
            <Sidebar />
            <Outlet />
        </MainContainer>
    )
}

export { MainLayout };