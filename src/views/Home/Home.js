import React, {useEffect, useRef} from 'react';
import BotonLink from '../../components/common/BotonLink';

const Home = () => {
    // const referencias = []
    // const refe = useRef();

    // useEffect(()=>{
    //     console.log(refe.current.innerHTML)
    //     refe.current.style.color = 'red';
    // },[])
    
    //     const check = () => {
    //         const checked = refe.current.innerHTML > 0
    //         return checked;
    //     }
    // console.log(check())

    return (
        <div className='body'>
            <BotonLink link="/coins" value="Go to Currencys" variant="contained" color="success"/>
            {/* <p ref={refe} className="">1</p>
            <p ref={refe} className="">5</p>
            <p ref={refe} className={` ${ check() ? 'green' : 'red' } `}>4</p> */}
        </div>
    )
}

export default Home;