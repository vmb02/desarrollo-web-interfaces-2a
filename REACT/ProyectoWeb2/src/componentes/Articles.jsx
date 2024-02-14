import { useEffect, useState } from 'react'

export default function Articles() {
  const [articles, setArticles] = useState([]);

  const  getArticles = () =>{
      fetch("https://fakestoreapi.com/products/")
        .then(respuesta => respuesta.json())
        .then(resultado_final =>{
          setArticles(resultado_final.slice(0, 3));
        });
  }

  useEffect (()=>{
    getArticles();
  }, []);
  
  return (
    <section id="articles">
        <h2>Últimos artículos</h2>
        {articles  && articles.map((article) => (
          <article key={article.id}>
            <div className="datos">
              <span>Fecha: 01 de enero</span>
              <span>Categoría:{article.category}</span>
            </div>
            <h4>
              {article.title}
            </h4>
            <p>
              {article.description}
            </p>
          </article>
        ) )}
    </section>
  )
}