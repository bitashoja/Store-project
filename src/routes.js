import AboutUs from './pages/AboutUs/AboutUs';
import ContactUs from './pages/ContactUs/ContactUs';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Portfolios from './components/portfolios/Portfolios';

const route = [
    {path:"/" , element: < Home/>},
    {path:"/AboutUs" , element : <AboutUs />},
    {path : '/ContactUs' , element : <ContactUs />},
    {path : '/Services' , element : < Services />},
    {path : '/Portfolios' , element : < Portfolios />}
];
export default route;