import React from 'react';
import { Menu } from 'antd';
import { PieChartOutlined, DesktopOutlined,} from '@ant-design/icons';
import { Link, useLocation  } from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';

function LeftNav() {
  let location: any = useLocation().pathname
  if(location === '/') {
    location = '/one'
  }
  // console.log(location)
  return (
    <div className="left-nav">
        <Menu
          defaultSelectedKeys={location}
          mode="inline"
          theme="dark"
        >
          <Menu.Item key="/one" icon={<PieChartOutlined />}>
            <Link to="/one">Learning One</Link>
          </Menu.Item>
          <Menu.Item key="/two" icon={<DesktopOutlined />}>
            <Link to="/two">Learning Two</Link>
          </Menu.Item>
          <Menu.Item key="/three" icon={<DesktopOutlined />}>
            <Link to="/three">Learning Three</Link>
          </Menu.Item>
          <Menu.Item key="/four" icon={<DesktopOutlined />}>
            <Link to="/four">Learning Four</Link>
          </Menu.Item>
          <Menu.Item key="/five" icon={<DesktopOutlined />}>
            <Link to="/five">Learning Five</Link>
          </Menu.Item>
          <Menu.Item key="/six" icon={<DesktopOutlined />}>
            <Link to="/six">Learning Six</Link>
          </Menu.Item>
        </Menu>
    </div>
  );
}

export default LeftNav;
