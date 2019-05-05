import Link from 'next/link'; // next exports Link as it's own package
import NavStyles from './styles/NavStyles';

const Nav = () => (
  <NavStyles>
    {/* Rather than attach a href to the anchor tag, wrap the anchor tag in a Link tag. This will bind the link to HTML5 push state. */}
    <Link href="/items">
      <a>Shop</a>
    </Link>
    <Link href="/sell">
      <a>Sell</a>
    </Link>
    <Link href="/signup">
      <a>Signup</a>
    </Link>
    <Link href="/orders">
      <a>Orders</a>
    </Link>
    <Link href="/me">
      <a>Account</a>
    </Link>
  </NavStyles>
);

export default Nav;
