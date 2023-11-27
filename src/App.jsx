import { Routes, Route } from 'react-router-dom'
import NavComponent from './components/NavComponent'
import FooterComponent from './components/FooterComponent'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import PpdbPage from './pages/PpdbPage'

function App() {
    return (
        <div>
            <NavComponent />
                <Routes>
                    <Route path='/' Component={HomePage} />
                    <Route path='/profile' Component={ProfilePage} />
                    <Route path='/ppdb' Component={PpdbPage} />
                </Routes>
            <FooterComponent />
        </div>
    )
}

export default App
