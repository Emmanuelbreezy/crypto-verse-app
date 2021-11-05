import Link from 'next/link';
import Image from 'next/image';
import { Layout, Menu,Typography,Avatar } from "antd";
import {HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined} from '@ant-design/icons';
import icon from '../../public/assets/images/cryptocurrency.png';

const { Sider } = Layout;

export default function NavigationBar(){
    return (
        <Layout>
            <Sider  className="nav--container"
                
                style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
                }}
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={broken => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
                >
                  <div className="logo--container">
                    <Avatar src={icon} />
                    <Typography.Title level={2} className="logo">
                        <Link href="/">
                            <a>Cryptoverse</a>
                        </Link>
                        </Typography.Title>
                  </div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<HomeOutlined />} >
                            <Link href="/"><a>Home</a></Link>
                        </Menu.Item>
                        <Menu.Item  key="2" icon={<FundOutlined />} >
                            <Link href="/cryptocurrencies"><a>Cryptocurrencies</a></Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<MoneyCollectOutlined />} >
                            <Link href="/exchanges"><a>Exchanges</a></Link>
                        </Menu.Item>
                        <Menu.Item key="4" icon={<BulbOutlined />} >
                            <Link href="/news"><a>News</a></Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
            </Layout>
    )
}
  