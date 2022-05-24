import React from 'react';
import Boton from '../../components/common/Boton';

const Home = () => {
    return (
        <div className='body'>
            <Boton link="/coins" value="Go to Currencys" />
        </div>
    )
}

export default Home;