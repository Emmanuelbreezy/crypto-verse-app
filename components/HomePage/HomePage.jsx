import Link from 'next/link';
import millify from 'millify';
import {Layout, Typography,Row,Col,Statistic } from "antd";
import {Cryptocurrencies,News } from '../../components';

const { Title }  = Typography;

import { useGetCryptosQuery } from "../../services/crypoApi";

export default function HomePage() {
    const { data, isFetching } = useGetCryptosQuery(10);
    const globalStats = data?.data?.stats;
        
    if(isFetching) return 'Loading..';

    if(!data) return (<Layout><h1>Data couldn&apos;t be fetch, Check your connection</h1></Layout>);


    return (
        <>
         <Title level="2" className="heading">Global Crypto Stats</Title>
         <Row>
             <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col>
             <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
             <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} /></Col>
             <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)} /></Col>
             <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} /></Col>
         </Row>
         <div className="home-heading-container">
             <Title level={2} className="home-title">Top 10 Cryptocurrencies in the World</Title>
             <Title level={3} className="show-more"><Link href="/cryptocurrencies"><a>Show More</a></Link></Title>
         </div>
         <Cryptocurrencies simiplifed />

         <div className="home-heading-container">
             <Title level={2} className="home-title">Latest Cryto News</Title>
             <Title level={3} className="show-more"><Link href="/news"><a>Show More</a></Link></Title>
         </div>
         <News simiplifed/>
        </>
    )
}

// export async function getServerSideProps(context){
    
    // const baseUrl = 'https://coinranking1.p.rapidapi.com';
    // const result = await fetch(baseUrl + `/coins?limit=${count}`,{
    //     method:'GET',
    //     headers:{
    //         'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    //         'x-rapidapi-key': 'ff5658a301msh7cffde7a7e5f683p1d4260jsnc1eff730cab0'
    //     }
    // });

    // console.log(result)
// }
