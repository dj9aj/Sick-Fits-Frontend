import UpdateItem from '../components/UpdateItem';

const Sell = ({ query }) => (
  <div>
    {/* Pass item id that is exposed from query paramater via props */}
    <UpdateItem id={query.id} />
  </div>
);

export default Sell;
