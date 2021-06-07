import { Col, Row } from 'antd';
import styled from 'styled-components';
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
  return (
    <div className="consent">
      <Row className="consent-row">
        <Col span={14}>
          <div className="consent-row-FieldModelDataShow">
            <div className="consent-col">
              <FieldModelDataShow />
            </div>
          </div>

          <div className="consent-row-LineChart">
            <div className="consent-col">
              <LineChart />
            </div>
          </div>
          <div className="consent-row-chart">
            <div className="consent-col"> </div>
            <CloudRun />
          </div>
        </Col>

        <Col span={10}>
          <EditCode>
            <CodeBlock />
          </EditCode>
        </Col>
      </Row>
    </div>
  );
}
export default VisualFirst;
