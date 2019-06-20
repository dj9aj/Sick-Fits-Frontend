import Link from 'next/link';
import NavStyles from './styles/NavStyles';
import User from './User';

const Nav = () => (
  <User>
    {/* The data returned is a result of the CURRENT_USER_QUERY */}
    {({ data: { me } }) => (
      <NavStyles>
        {/* Rather than attach a href to the anchor tag, wrap the anchor tag in a Link tag. This will bind the link to HTML5 push state. */}
        <Link href="/items">
          <a>Shop</a>
        </Link>
        {me && (
          <>
            <Link href="/sell">
              <a>Sell</a>
            </Link>
            <Link href="/orders">
              <a>Orders</a>
            </Link>
            <Link href="/me">
              <a>Account</a>
            </Link>
          </>
        )}
        {!me && (
          <Link href="/signup">
            <a>Sign In</a>
          </Link>

        )}
      </NavStyles>
    )}
  </User>
);

export default Nav;
