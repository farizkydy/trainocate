import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import Contact from '../components/Contact'
import NotFound from '../components/NotFound'
import Team from '../components/Team';
import DetailUser from '../components/DetailUser'
function AppRoutes() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<DetailUser />} />
      <Route path="/about" element={<About />}> 
        <Route path="team" element={<Team />} />
      </Route>
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
export default AppRoutes;