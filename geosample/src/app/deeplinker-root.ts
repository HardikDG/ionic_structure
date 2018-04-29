import { AboutPage } from './../pages/about/about';
import { ContactPage } from '../pages/contact/contact';


const deeplinks = {
    links: [
     { component: AboutPage, name: 'about', segment: 'about' },
     { component: ContactPage, name: 'contact', segment: 'contact' },
   ]
 }

export default deeplinks;