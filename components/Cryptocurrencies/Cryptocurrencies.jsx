import {useState,useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import millify from 'millify';
import { Card,Row,Col, Input } from "antd";

import { useGetCryptosQuery } from "../../services/crypoApi";


export default function Cryptocurrencies(props) {
    const count = props.simiplifed ? 10 : 100;
    const { data, isFetching } = useGetCryptosQuery(count);
    const [cryptos, setCryptos] =  useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        if(!isFetching){
            const allData = data?.data?.coins;
            if(allData){
                const filteredData = allData.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));
                setCryptos(filteredData);

            }
        
        }
    },[data,searchTerm])

   if(isFetching) return 'Loading...';

   if(!data?.data?.coins) return 'Unable to fetch data';

    return (
        <>
        {!props.simiplifed && (
         <div className="search-crypto">
             <Input placeholder="Search Cryptocurrency" onChange={(e) => setSearchTerm(e.target.value)}/>
         </div>
        )}
            <Row gutter={[32,32]} className="crypto-card-container">
                {cryptos?.map((currency) => (
                    <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
                        <Link href={`/crypto/${currency.id}`}>
                            <Card 
                                title={`${currency.rank}. ${currency.name}`}
                                extra={<Image className="cryto-image" width={'30%'} height={'30%'} src={currency.iconUrl} />}
                                hoverable
                            >
                                <p>Price: {millify(currency.price)}</p>
                                <p>MarketCap: {millify(currency.marketCap)}</p>
                                <p>Daily change: {millify(currency.change)}</p>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>

        </>
    )
}