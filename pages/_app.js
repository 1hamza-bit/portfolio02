import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Sidebar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
