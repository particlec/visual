import { Layout } from 'antd';
import Sidebar from './sidebar';
import styled from 'styled-components';

const LayoutWrap = styled(Layout)`
  height: 100%;

  .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
  }
  .layout-has-sider {
    height: 100%;
  }

  .ant-layout-header {
    background-color: #fff;
  }

  .ant-layout-content {
    padding: 25px 0 0 25px;
    background-color: #e9f0fb;
    .inner {
      background-color: #fff;
      height: 100%;
      padding: 20px;
    }
  }
`;
const { Content, Header, Sider } = Layout;

const SidebarLayout = (component, matchProps) => {
  return (
    <LayoutWrap className={'ami'} Style={{ height: '100%' }}>
      <Sider>
        <div className="logo" />
        <Sidebar />
      </Sider>
      <Layout>
        <Header />
        <Content>
          <div className="inner">
            <component {...matchProps} />
          </div>
        </Content>
      </Layout>
      <Header />
    </LayoutWrap>
  );
};
export default SidebarLayout;
