import { Col, Row } from 'antd';
import CodeBlock from '../codeBlock/codeBlock';
import fieldModelDataShow from './fieldModelDataShow';

function VisualFirst() {
  return (
    <div style={{ backgroundColor: '#bfbfbf', height: '100%' }}>
      <Row style={{ height: '100%' }}>
        <Col span={14}>
          <div
            style={{
              backgroundColor: 'white',
              height: '150px',
              wight: '100%',
              margin: '15px',
            }}
          >
            <fieldModelDataShow />
          </div>

          <div
            style={{
              backgroundColor: 'white',
              height: '350px',
              wight: '100%',
              margin: '15px',
            }}
          >
            {' '}
          </div>
          <div
            style={{
              backgroundColor: 'white',
              height: '160px',
              wight: '100%',
              margin: '15px',
            }}
          >
            {' '}
          </div>
        </Col>

        <Col span={10}>
          <CodeBlock />
        </Col>
      </Row>
    </div>
  );
}
export default VisualFirst;
