import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';
import Container from './UI/Container';

const Navbar = () => {
    return (
        <nav className={classes.navbar}>
            <Container>
                <Link to="/">Students</Link>
                <Link to="/student/add">Add</Link>
            </Container>
        </nav>
    )
}

export default Navbar