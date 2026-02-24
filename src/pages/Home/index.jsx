import { Link } from 'react-router-dom';
import './index.scss';

export default function Home() {
  return (
    <div className="home">
      <h1>SCSS 基础语法练习</h1>
      <p className="subtitle">
        这个项目用于练习 SCSS 的常用语法特性
      </p>
      
      <div className="practice-list">
        <Link to="/01" className="practice-card">
          <h3>练习一：@for 循环</h3>
          <p>使用索引动态生成选择器和计算值</p>
          <ul>
            <li>动态生成 .i1 ~ .i6 选择器</li>
            <li>hover 效果随索引递增</li>
            <li>使用 list.nth() 取颜色</li>
          </ul>
        </Link>

        <Link to="/02" className="practice-card">
          <h3>练习二：@each 循环</h3>
          <p>遍历 Map 生成语义化样式类</p>
          <ul>
            <li>使用 Map 定义颜色配置</li>
            <li>生成 .item-green 等语义类名</li>
            <li>更适合配置驱动的场景</li>
          </ul>
        </Link>
      </div>
    </div>
  );
}
