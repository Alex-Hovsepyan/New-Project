import './Header.scss'
import Home from '../Home/Home'
import Employee from '../Employee/Employee'
import Task from '../Task/Task'
import { Routes, Route, Link } from 'react-router-dom'

function Header() {
    return (
        <>
        <header>
            <div>
                <Link to='/'><h1>Home</h1></Link>
                <Link to='employee'><h1>Employees</h1></Link>
                <Link to='task'><h1>Tasks</h1></Link>
            </div>
        </header>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/employee' element={<Employee />}></Route>
            <Route path='/task' element={<Task />}></Route>
        </Routes>
        </>
    )
}

export default Header