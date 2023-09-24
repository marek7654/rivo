import { useRouteError } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const ErrorPage = () => {
  const error = useRouteError();

  let title = 'An error occurred!';
  let message = 'Something went wrong :-(';

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = 'Not found!';
    message = 'Could not find resource or page.';
  }

  return (
    <>
      <Header />
      <main style={{ minHeight: `${window.innerHeight - 102}px` }}>
        <h1>{error.status}</h1>
        <p>{title}</p>
        <p>{message}</p>
      </main>
      <Footer />
    </>
  );
};

export default ErrorPage;
