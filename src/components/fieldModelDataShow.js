import React, { useState, useEffect } from 'react';
import apis from '../apis/apis';

function FieldModelDataShow() {
  const [briefInfo, setBriefInfo] = useState(false);

  useEffect(() => {
    apis
      .userGetDomainBriefInfo({
        // publishStatus: 1,
        fieldIdList: [186214],
      })
      .then(res => {
        console.log(res);
        setBriefInfo(res.data.utData);
      });
  }, []);

  return (
    <div className="block left" style={{ height: '100%', weight: '100%' }}>
      <h2
        className="title"
        style={{
          fontWeight: '600',
          fontSize: '18px',
          marginTop: '20px',
          // position: 'relative',
        }}
      >
        领域模型数据
      </h2>
      <div className="three-columns" style={{ display: 'flex' }}>
        <div
          className="item"
          style={{
            display: 'inline-block',
            margin: '20px',
            width: '30%',
            textAlign: 'center',
          }}
        >
          {/*<img src={require(`url(${imageUrl})`)} alt="" />*/}
          {/*{imageUrl}*/}
          <img
            src={require('../picture/function.png').default}
            height="30px"
            width="30px"
          />
          <div>
            <h3>{briefInfo?.functionCount ? briefInfo?.functionCount : 0}</h3>
            <span>领域函数</span>
          </div>
        </div>
        <div
          className="item"
          style={{
            display: 'inline-block',
            margin: '20px',
            width: '30%',
            textAlign: 'center',
          }}
        >
          <img
            src={require('../picture/language.png').default}
            alt=""
            height="30px"
            width="30px"
          />
          <div>
            <h3>{briefInfo?.glossaryCount ? briefInfo?.glossaryCount : 0}</h3>
            <span>领域语言</span>
          </div>
        </div>
        <div
          className="item"
          style={{
            display: 'inline-block',
            margin: '20px',
            width: '30%',
            textAlign: 'center',
          }}
        >
          <img
            src={require('../picture/dataSheet.png').default}
            alt=""
            height="30px"
            width="30px"
          />
          <div>
            <h3>{briefInfo?.glossaryCount ? briefInfo?.glossaryCount : 0}</h3>
            <span>领域数据表</span>
          </div>
        </div>
        {/*<div*/}
        {/*  className="item"*/}
        {/*  style={{ display: 'inline-block', margin: '20px' }}*/}
        {/*>*/}
        {/*  <img src={require('../picture/dataSheet.png').default} alt="" />*/}
        {/*  <div>*/}
        {/*    <h3>{briefInfo?.dataTableCount ? briefInfo?.glossaryCount : 0}</h3>*/}
        {/*    <span>领域数据表</span>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </div>
  );
}
export default FieldModelDataShow;
