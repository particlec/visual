import React, { useEffect, useState } from 'react';
import { Chart, Axis, Geom, Tooltip, Legend } from 'bizgoblin';
import './lineChart.css';

//react+G2   :https://bizcharts.net/product/bizgoblin/gallery
function LineChart({ fieldModelData }) {
  console.log(fieldModelData);
  const [data, setData] = useState([]);
  const datass = [
    {
      name: '领域数据表',
      领域: '审批流.',
      个数: 18.9,
    },
    {
      name: '领域数据表',
      领域: '用户中心.',
      个数: 28.8,
    },
    {
      name: '领域数据表',
      领域: '智能餐饮.',
      个数: 39.3,
    },
    {
      name: '领域数据表',
      领域: '综合测试.',
      个数: 81.4,
    },
    {
      name: '领域数据表',
      领域: '智能云锁.',
      个数: 47,
    },

    {
      name: '领域语言',
      领域: '审批流.',
      个数: 12.4,
    },
    {
      name: '领域语言',
      领域: '用户中心.',
      个数: 23.2,
    },
    {
      name: '领域语言',
      领域: '智能餐饮.',
      个数: 34.5,
    },
    {
      name: '领域语言',
      领域: '综合测试.',
      个数: 99.7,
    },
    {
      name: '领域语言',
      领域: '智能云锁.',
      个数: 52.6,
    },

    {
      name: '领域函数',
      领域: '审批流.',
      个数: 12.4,
    },
    {
      name: '领域函数',
      领域: '用户中心.',
      个数: 23.2,
    },
    {
      name: '领域函数',
      领域: '智能餐饮.',
      个数: 34.5,
    },
    {
      name: '领域函数',
      领域: '综合测试.',
      个数: 99.7,
    },
    {
      name: '领域函数',
      领域: '智能云锁.',
      个数: 52.6,
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

  useEffect(() => {
    // let len = fieldModelData.length;
    // if (len > 5) {
    //   len = 5;
    // }
    console.log(fieldModelData);
    const arr = [];
    for (let i = 0; i < 5; i++) {
      const item = fieldModelData[i];
      console.log(item);
      arr.push({
        name: '领域数据表',
        领域: item['chName'],
        个数: item['dataTableCount'],
      });
      arr.push({
        name: '领域语言',
        领域: item['chName'],
        个数: item['glossaryCount'],
      });
      arr.push({
        name: '领域函数',
        领域: item['chName'],
        个数: item['functionCount'],
      });
    }
    console.log(arr);
    setData(arr);
  }, [fieldModelData]);

  return (
    <div>
      <div className="fieldFont">热门领域</div>
      <Chart
        width="70%"
        data={datass}
        defs={defs}
        animate={{ type: 'scaley' }}
        pixelRatio={window.devicePixelRatio * 2}
      >
        <Axis dataKey="领域" />
        <Legend />
        <Tooltip />
        <Geom
          geom="interval"
          position="领域*个数"
          color="name"
          adjust={{ type: 'dodge', marginRatio: 0.05 }}
        />
      </Chart>
    </div>
  );
}
export default LineChart;
