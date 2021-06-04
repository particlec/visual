import { Route } from 'react-router-dom';

function SideLayout(props) {
  const { component, layout: CustomizedLayout, path } = props;

  return (
    <Route path={path}>
      <CustomizedLayout component={component} />
    </Route>
  );
}
export default SideLayout;
