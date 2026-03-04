import { NavLink, Outlet } from 'react-router-dom';
import './index.scss';

export default function Layout() {
  return (
    <div className="layout">
      {/* 顶部导航栏 */}
      <nav className="nav-bar">
        <div className="logo">SCSS 练习</div>
        <div className="nav-links">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            首页
          </NavLink>
          <NavLink 
            to="/01" 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            练习一
          </NavLink>
          <NavLink 
            to="/02" 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            练习二
          </NavLink>
          <NavLink 
            to="/03" 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            练习三
          </NavLink>
        </div>
      </nav>

      {/* 内容区域 - 子路由会渲染在这里 */}
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}
