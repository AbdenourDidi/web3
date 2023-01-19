import { useContext, useEffect } from "react";

import { Layout, Menu } from "antd";

import ListChild from "components/ListChild/ListChild";

import Help from "components/Help/Help";

import Children from "components/Children/Children";
import { Context as WebContext } from "../../contexts/webAppContext";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useMatch,
} from "react-router-dom";

const { Header, Content } = Layout;

const Navigate = () => {
  const padding = {
    paddingRight: 5,
  };
  return (
    <div>
      <Link style={padding} to="children">
        Enfants
      </Link>
      <Link style={padding} to="help">
        Aide
      </Link>
    </div>
  );
};

const App = () => {
  const { childrens, initialLoadChild, initialLoadEvent, getChildWithEvents } =
    useContext(WebContext);

  useEffect(initialLoadChild, []);

  const match = useMatch("/children/:id");
  //const id = Number(match.params.id);
  //const children = getChildWithEvents(id);
  const children = null;

  return (
    <Layout className="layout">
      <Header>
        <Menu theme="dark" mode="horizontal" selectedKeys={[]}>
          <Navigate />
        </Menu>
      </Header>
      <Routes>
        <Route path="/children/:id" element={<Children />} />
        <Route path="/children" element={<ListChild childrens={childrens} />} />
        <Route path="/help" element={<Help />} />
      </Routes>
      <Content style={{ padding: "30px 50px" }}></Content>
    </Layout>
  );
};

export default App;
