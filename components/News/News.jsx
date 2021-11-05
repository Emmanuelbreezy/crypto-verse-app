import {useState} from 'react';
import Image from 'next/image';
import { Select, Typography, Row, Col, Card} from 'antd';
import moment from 'moment';

import { useGetCryptosNewsQuery } from '../../services/crypoNewsApi';

const { Text, Title} = Typography;
const {Option } = Select;



export default function News({simplified}) {
    const { data } = useGetCryptosNewsQuery({
        newsCategory: 'Cryptocurrency',
        count: simplified ? 6 : 12
    });

    if(!data?.value) return 'Loading...';


    const demoImage = 'http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg';

    return (
        <Row gutter={[24,24]}>
           {data?.value.map((news,i)  => (
               <Col xs={24} sm={12} lg={8} key={i} style={{padding:"0.5rem"}}>
                    <a href={news.url} target="_blank"><Card hoverable 
                       cover={<Image  src={news?.image?.thumbnail?.contentUrl || demoImage} width="400px" height="250px" />}
                     >
                           <div className="ncontainer">
                              
                               <Title level={4}>
                                   {news.name.length > 50 
                                   ? `${news.name.substring(0,50)}...`
                                   : news.name
                            }
                               </Title>
                           </div>
                           <p>
                               {news.description.length > 50 
                                   ? `${news.description.substring(0,50)}...`
                                   : news.description
                            }
                           </p>
                           <div className="provider-container">
                                 <div className="provider-sub">
                                     <Image src={news?.provider[0].image?.thumbnail?.contentUrl || demoImage} width="30%"  height="30%" />
                                     <Text className="provider-name">{news.provider[0]?.name}</Text>
                                 </div>
                                     <Text>{moment(news.datePublished).startOf('ss').fromNow(true)}</Text>
                           </div>
                   </Card>
                       </a>
               </Col>
           ))}
        </Row>
    )
}
