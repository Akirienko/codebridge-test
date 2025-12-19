import { useEffect } from 'react';
import ArticleList from "../../components/ArticleList/ArticleList"
import {useArticlesStore} from '../../store/useArticlesStore'
import Loader from '../../components/Loader/Loader';

function Home() {
  const articles = useArticlesStore(state => state.articles);
  const fetchArticles = useArticlesStore(state => state.fetchArticles);
  const loading = useArticlesStore(state => state.loading);

  useEffect(() => {
    fetchArticles();
  }, []);
  return (
    <>

      <div className="main-container">
        {!loading ? <ArticleList articles={articles} /> : <Loader />}
      </div>


    </>
  )
}

export default Home