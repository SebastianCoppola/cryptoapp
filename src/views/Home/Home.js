import React, {useEffect, useRef} from 'react';
import BotonLink from '../../components/common/BotonLink';

const Home = () => {

    return (
        <div className='body'>
            <BotonLink link="/coins" value="Go to Currencys" variant="contained" color="success"/>
        </div>
    )
}

export default Home;