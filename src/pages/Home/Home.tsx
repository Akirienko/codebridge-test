import { useEffect } from 'react';
import ArticleList from "../../components/ArticleList/ArticleList"
import {useArticlesStore} from '../../store/useArticlesStore'
import Loader from '../../components/Loader/Loader';

import styles from './Home.module.scss'

function Home() {
  const { articles, loading, fetchArticles } = useArticlesStore();

  useEffect(() => {
    if (articles.length === 0 && !loading) {
      fetchArticles();
    }
  }, []);

  return (

      <div className="main-container">
        <div className={styles['total-articles']}>
          <p>Results: {articles.length}</p>
        </div>

        {!loading ? <ArticleList articles={articles} /> : <Loader />}
      </div>

  )
}

export default Home