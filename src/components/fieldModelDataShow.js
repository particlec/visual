function fieldModelDataShow() {
  return (
    <div className="block left" style={{ height: '100%', weight: '100%' }}>
      <h2 className="title">领域模型数据</h2>
      <div className="three-columns">
        <div
          className="item"
          style={{ display: 'inline-block', margin: '20px' }}
        >
          <img src={require('../picture/function.png')} alt="" />
          <div>
            <h3>392</h3>
            <span>领域函数</span>
          </div>
        </div>
        <div
          className="item"
          style={{ display: 'inline-block', margin: '20px' }}
        >
          <img src={require('../picture/language.png')} alt="" />
          <div>
            <h3>42</h3>
            <span>领域语言</span>
          </div>
        </div>
        <div
          className="item"
          style={{ display: 'inline-block', margin: '20px' }}
        >
          <img src={require('../picture/dataSheet.png')} alt="" />
          <div>
            <h3>499</h3>
            <span>领域数据表</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default fieldModelDataShow;
