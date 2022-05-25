import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router';
import CoinDetailTable from '../CoinDetailTable/CoinDetailTable'
import Placeholder from '../common/Placeholder';

const CoinDetail = () => {
    const [coin, setCoin] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect( () => {
        fetch(`https://api.coinstats.app/public/v1/coins?skip=0&limit=5&currency=EUR/`)
            .then( res => res.json())
            .then( res => {
                const filteredCoin = res.coins.filter(co => co.id === id)
                setCoin(filteredCoin)
                setLoading(false);
            })
    },[id])

    return (
        <div key={id} className="body">
            {
                loading
                ?
                <Placeholder />
                :
                <CoinDetailTable data={coin[0]} />
            }
        </div>
        
    )
}
export default CoinDetail;
