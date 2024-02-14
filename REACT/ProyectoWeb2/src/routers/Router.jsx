import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../componentes/Header';
import Articles from '../componentes/Articles';
import Footer from '../componentes/Footer';
import Banner from '../componentes/Banner';
import Tarjetas from '../componentes/Tarjetas';
import BarraLateral from '../componentes/BarraLateral';
import Blog from '../componentes/Blog';
import Formacion from '../componentes/Formacion';
import Contacto from '../componentes/Contacto';

export default function Router() {
  return (
    <>
     <BrowserRouter>
      <Header />
      <main className='wrap'>
        <section id = "info">
          <Banner />
          <Tarjetas />
        </section>
        <div id="flex-main">
          <BarraLateral />
          <Routes>
            <Route path="/" element={<Articles />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/formacion" element={<Formacion />}></Route>
            <Route path="/contacto" element={<Contacto />}></Route>
            <Route path="*" element={(
              <>
                <h1>Error 404</h1>
                <p>Esta página no existe</p>
              </>
            )} />
          </Routes>
          </div>
      </main>
      <Footer />
    </BrowserRouter>
    </>
  )
}
