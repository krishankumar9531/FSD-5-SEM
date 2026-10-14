import './Header.css';
import { Link } from 'react-router-dom';

const Header = ({ cartCount }) => {
    return (
        <header className="site-header">
            <h1 className="site-header__title">E-commerce Webpage</h1>
            <nav className="site-header__nav" aria-label="Main navigation">
                <Link to="/">Home</Link>{' '}
                <Link to="/products">Product</Link>{' '}
                <Link to="/about">About</Link>{' '}
                <Link to="/cart">Cart ({cartCount})</Link>
            </nav>
        </header>
    )
}
export default Header
