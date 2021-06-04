import React from 'react';
import { Chart, Axis, Geom, Tooltip, Legend } from 'bizgoblin';

//react+G2   :https://bizcharts.net/product/bizgoblin/gallery
function LineChart() {
  const data = [
    {
      name: '领域数据表',
      月份: '审批流.',
      月均降雨量: 18.9,
    },
    {
      name: '领域数据表',
      月份: '用户中心.',
      月均降雨量: 28.8,
    },
    {
      name: '领域数据表',
      月份: '智能餐饮.',
      月均降雨量: 39.3,
    },
    {
      name: '领域数据表',
      月份: '综合测试.',
      月均降雨量: 81.4,
    },
    {
      name: '领域数据表',
      月份: '智能云锁.',
      月均降雨量: 47,
    },

    {
      name: '领域语言',
      月份: '审批流.',
      月均降雨量: 12.4,
    },
    {
      name: '领域语言',
      月份: '用户中心.',
      月均降雨量: 23.2,
    },
    {
      name: '领域语言',
      月份: '智能餐饮.',
      月均降雨量: 34.5,
    },
    {
      name: '领域语言',
      月份: '综合测试.',
      月均降雨量: 99.7,
    },
    {
      name: '领域语言',
      月份: '智能云锁.',
      月均降雨量: 52.6,
    },

    {
      name: '领域函数',
      月份: '审批流.',
      月均降雨量: 12.4,
    },
    {
      name: '领域函数',
      月份: '用户中心.',
      月均降雨量: 23.2,
    },
    {
      name: '领域函数',
      月份: '智能餐饮.',
      月均降雨量: 34.5,
    },
    {
      name: '领域函数',
      月份: '综合测试.',
      月均降雨量: 99.7,
    },
    {
      name: '领域函数',
      月份: '智能云锁.',
      月均降雨量: 52.6,
    },
  ];

  const defs = [
    {
      dataKey: 'year',
    },
    {
      dataKey: 'sales',
      tickCount: 5,
    },
  ];

  return (
    <div>
      <div style={{ fontSize: '900' }}>热门领域</div>
      <Chart
        width="50%"
        data={data}
        defs={defs}
        animate={{ type: 'scaley' }}
        pixelRatio={window.devicePixelRatio * 2}
      >
        <Axis dataKey="月份" />
        <Legend />
        <Tooltip />
        <Geom
          geom="interval"
          position="月份*月均降雨量"
          color="name"
          adjust={{ type: 'dodge', marginRatio: 0.05 }}
        />
      </Chart>
    </div>
  );
}
export default LineChart;
