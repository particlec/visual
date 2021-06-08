import React, { useEffect, useState } from 'react';
import { Chart, Line, Point, Tooltip, Legend } from 'bizcharts';
import axios from 'axios';
import apis from '../apis/apis';
function CloudRun() {
  const [res, setRes] = useState(false);
  const data02 = [
    { year: '1951 年', total: 30 },
    { year: '1952 年', total: 52 },
    { year: '1956 年', total: 61 },
    { year: '1957 年', total: 45 },
    { year: '1958 年', total: 48 },
    { year: '1959 年', total: 38 },
    { year: '1960 年', total: 38 },
    { year: '1962 年', total: 38 },
  ];

  function dealRes(res) {
    for (let i = 0; i < res?.length; i++) {
      res[i]['year'] = new Date(res[i].time).getHours();
    }
    return res;
  }

  useEffect(() => {
    //获取当前时间戳
    let endTime = new Date().valueOf();
    //获取24小时之前的 时间戳
    let startTime = endTime - 24 * 60 * 60 * 1000;
    apis
      .getInstanceRunStatisic({ startTime, endTime, span: 60 })
      .then(res => {
        console.log(dealRes(res.data.utData));
        setRes(dealRes(res.data.utData));
      })
      .catch();
  }, []);

  return (
    <div>
      <h2 className="title" style={{ fontWeight: '700', fontSize: '16px' }}>
        云执行<span className="small">（次）</span>
        <span className="more small">（日访问量）</span>
      </h2>
      <Chart
        // scale={scale}
        padding={[30, 20, 60, 40]}
        autoFit
        height={150}
        data={data02}
        interactions={['element-active']}
      >
        <Point
          position="year*total"
          // color="city"
          shape="circle"
        />
        <Line
          shape="smooth"
          position="year*total"
          // color="city"
          label="0"
        />
        <Tooltip shared showCrosshairs />
        <Legend
          background={{
            padding: [5, 100, 5, 36],
            style: {
              fill: '#eaeaea',
              stroke: '#fff',
            },
          }}
        />
      </Chart>
    </div>
  );
}
export default CloudRun;
