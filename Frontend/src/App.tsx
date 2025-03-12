import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/Theme.ts';
import { GlobalStyles } from "./styles/GlobalStyles.ts";
import { MainLayout } from './layout/MainLayout'
import { Employees } from './pages/Employees'
import { Cabinets } from './pages/Cabinets'
import { CreateEmployee } from './pages/CreateEmployee.jsx';
import { UpdateEmployee } from './pages/UpdateEmployee.jsx';
import { CreateCabinet } from './pages/CreateCabinet.jsx';
import { Logs } from './pages/Logs.jsx'
import { ChoiceCabinets } from './pages/ChoiceCabinets.tsx';

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <Router>
                    <Routes>
                        <Route element={<MainLayout />}>
                            <Route path="/" element={<Employees />} />
                            <Route path="/cabinets" element={<Cabinets />} />
                            <Route path="/create-employee" element={<CreateEmployee />} />
                            <Route path="/update-employee" element={<UpdateEmployee />} />
                            <Route path="/create-cabinet" element={<CreateCabinet />} />
                            <Route path="/choice-cabinets" element={<ChoiceCabinets />} />
                            <Route path="/logs" element={<Logs />} />
                        </Route>
                    </Routes>
                </Router>
            </ThemeProvider>
        </>
    )
}

export default App
