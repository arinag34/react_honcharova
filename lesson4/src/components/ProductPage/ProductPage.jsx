import { useCallback, useMemo } from 'react';
import ShippingForm from './ShippingForm';

const PRODUCT_ID = 123;

// const [state, setState] = useState(initalState)
// useEffect(() => {}, [])
// useLayoutEffect(() => {}, [])
// useCallback(() => {}, [])
// useMemo(() => {}, [])

export default function ProductPage({ productId, referrer, theme }) {
  // const handleSubmit = useCallback((orderDetails) => {
  //   post('/product/' + productId + '/buy', {
  //     referrer,
  //     orderDetails,
  //   });
  // }, [productId, referrer]);

  const handleSubmit = useCallback((orderDetails) => {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
    return 'Thank you for your purchase!'
  }, [productId, referrer]);

  // const handleSubmit = useMemo(() => {
  //   return (orderDetails) => {
  //     post('/product/' + productId + '/buy', {
  //       referrer,
  //       orderDetails,
  //     });
  //     return 'Thank you for your purchase!'
  //   }
  // }, [productId, referrer]);

  return (
    <div className={theme}>
      <h1>Header of Product Page</h1>
      <ShippingForm onSubmit={handleSubmit} />
    </div>
  );
}

function post(url, data) {
  // Imagine this sends a request...
  console.log('POST /' + url);
  console.log(data);
}
