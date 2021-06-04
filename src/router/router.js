import CodeBlock from '../codeBlock/codeBlock';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import LayoutRoute from '../components/layoutRoute';
import Sidebar from '../components/sidebar';
import SidebarLayout from '../components/sidebarLayout';
import VisualFirst from '../components/visualFirst';

const { Header, Content, Footer, Sider } = Layout;

const AppRouter = () => {
  return (
    <HashRouter pathname="/home">
      <Switch>
        {/*// 函数组合*/}
        <LayoutRoute
          component={CodeBlock}
          layout={SidebarLayout}
          path="/codeBlock"
        />

        {/*//直接展示*/}
        <Route exact path="/App/Register">
          <Sidebar />
          />
        </Route>

        <Route exact path="/App">
          <CodeBlock />
        </Route>

        {/*简单组合*/}
        <Layout style={{ height: '120%' }}>
          <Sider>
            <Sidebar />
          </Sider>

          <Content>
            <Route path="/fieldModel/home">
              <VisualFirst />
              {/*<CodeBlock />*/}
            </Route>
          </Content>
        </Layout>

        {/*<LayoutRoute component={App} layout={SidebarLayout} path="/app" />*/}
      </Switch>
    </HashRouter>
  );
};
export default AppRouter;
