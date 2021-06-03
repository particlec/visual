import CodeBlock from '../codeBlock/codeBlock';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Layout, Menu } from 'antd';

const { Header, Content, Sider, Footer } = Layout;

const AppRouter = () => {
  return (

      <HashRouter>
        <Switch>

          <LayoutRoute
              component={CodeBlock}
              layout={SidebarLayout}
              path="/manager/word_rule_config"
          />


          <LayoutRoute
              component={ChineseSentenceRuleConfigDetail}
              layout={SidebarLayout}
              path="/manager/cn_sentence_rule_config/detail"
          />
        </Switch>
      </HashRouter>













    <HashRouter pathname="/home">
      <Layout>
        <Header></Header>
        <Sider>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">Option 1</Menu.Item>
          </Menu>
        </Sider>

        <Content>
          <Switch>
            <Route path="/codeBlock">
              <CodeBlock />
            </Route>
            <Redirect to="/codeBlock" />
          </Switch>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </HashRouter>
  );
};
export default AppRouter;
