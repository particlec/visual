import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;
const Sidebar = () => {
  return (
    <Menu>
      <SubMenu key="A" title="规则配置">
        <Menu.Item key="A-1">
          <Link to="/manager/word_rule_config">词规则配置</Link>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
};
