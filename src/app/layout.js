import './global.css'; 
import Navbar from './Components/Navbar';
export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <div className='container'>
        <header>
        <Navbar />
        </header>
        {children}
        </div>
        <footer>
           <p>&copy;  Cantor College. All rights reserved. {new Date().getFullYear()}</p>
        </footer>
      </body>
    </html>
  );
}