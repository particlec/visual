import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;
const Sidebar = () => {
  return (
    <div style={{ height: '100%' }}>
      <Menu
        // defaultSelectedKeys={defaultSelectedKeys}
        // defaultOpenKeys={true}
        mode="inline"
        theme="dark"
      >
        <SubMenu key="A" title="首页">
          <Menu.Item key="A-1">
            <Link to="/fieldModel/home">可视化首页</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
};
export default Sidebar;
