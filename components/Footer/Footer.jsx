import Link from 'next/link';
import { Layout,Space,Typography} from "antd";

const { Footer } = Layout;

export default function FooterComp() {
    return (
        <Footer style={{ textAlign: 'center' }}  className="footer">
            <Typography.Title  level={5} style={{color:'white',textAlign:'center'}}>
                Cryptoverse <br />
                All rights reserved
            </Typography.Title>
            <Space>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/exchanges">
                    <a>Exchanges</a>
                </Link>
                <Link href="/news">
                    <a>News</a>
                </Link>
            </Space>
        </Footer>
    )
}
