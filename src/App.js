import FavouriteTable from './components/FavouriteTable'
import { Layout } from 'antd';
import axios from 'axios'
import './app.css'
import DetailTable from './components/DetailTable';

const { Content, Footer } = Layout;
axios.defaults.baseURL = 'https://swapi.dev/api';
function App() {
  return (
    <div className="App">
      <Layout className='warp'>
        <Content >
          <div className="site-layout-background">
            <FavouriteTable title='People Table' />
            <DetailTable />
          </div>
        </Content>
        <Footer>INTERVIEW CASE FOR FRONTEND POSITION</Footer>
      </Layout>
    </div>
  );
}

export default App;
