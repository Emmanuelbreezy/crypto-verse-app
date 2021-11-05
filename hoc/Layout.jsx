import { Layout} from "antd";
import {NavigationBar,FooterComp} from '../components';


const {Content } = Layout;

export default function LayoutHoc(props) {

    return (
        <Layout>
           <div className="nav">
               <NavigationBar />
            </div> 
            <Layout className="site-layout" style={{ marginLeft: 200 }}>
                    <Content style={{ padding: '24px 25px 0', overflow: 'initial', background:'white' }}>
                        <div className="site-layout-background">
                        {props.children}
                        </div>
                    </Content>
                <div>
                    <FooterComp />
                </div>
            </Layout>
      </Layout>
    );
    
}