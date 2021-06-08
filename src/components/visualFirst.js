import { Col, Row } from 'antd';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import apis from '../apis/apis';
import CodeBlock from '../codeBlock/codeBlock';
import LineChart from '../lineChart/lineChart';
import CloudRun from './cloudRun';
import FieldModelDataShow from './fieldModelDataShow';
import './visualFirst.css';

const EditCode = styled.div`
  width: 100%;
  height: 100%;
  .ace_editor.ace-monokai.ace_dark {
    width: 100% !important;
  }
  .ace_content {
    height: 100% !important;
  }
`;

function VisualFirst() {
  const [fieldModelData, setFieldModelData] = useState([]);
  console.log();
  useEffect(() => {
    apis.querySummary({ page: 0, size: 1 }).then(async res => {
      let total = await res.data.utData.totalElements;
      let resp = await apis.querySummary({ page: 0, size: total });
      setFieldModelData(resp.data.utData.content);
    });
  }, []);

  return (
    <div className="consent">
      <Row className="consent-row">
        <Col span={11}>
          <div className="consent-row-FieldModelDataShow">
            <div className="consent-col">
              <FieldModelDataShow />
            </div>
          </div>

          <div className="consent-row-LineChart">
            {fieldModelData.length !== 0 && (
              <div className="consent-col">
                <LineChart fieldModelData={fieldModelData} />
              </div>
            )}
          </div>
          <div className="consent-row-chart">
            <div className="consent-col"> </div>
            <CloudRun />
          </div>
        </Col>
        <Col span={1}>
          <div style={{ backgroundColor: '#bfbfbf' }}>{''}</div>
        </Col>
        <Col span={12}>
          <EditCode>
            <CodeBlock />
          </EditCode>
        </Col>
      </Row>
    </div>
  );
}
export default VisualFirst;
