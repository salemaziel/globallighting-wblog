import React from 'react';
import NewsLetter from '../components/HomePageComponents/NewsLetter';
import Donations from '../components/Donations';
//import Layout from '../components/layout';
import LayoutDonate from '../components/layoutdonate';

//import '../css/donate.css';

const DonatePage = () => (
        <LayoutDonate>
               <Donations />
            {/**<NewsLetter />**/}
        </LayoutDonate>   
)

export default DonatePage
