import { useEffect, useState } from 'react';
import ArticleList from "../../components/ArticleList/ArticleList"
import {useArticlesStore} from '../../store/useArticlesStore'
import Loader from '../../components/Loader/Loader';

import styles from './Home.module.scss'
import SearchBar from '../../components/SearchBar/SearchBar';
import { useSearch } from '../../hooks/useSearch';

function Home() {
  const { articles, loading, fetchArticles } = useArticlesStore();
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    if (articles.length === 0 && !loading) {
      fetchArticles();
    }
  }, []);

  const filteredArticles = useSearch(articles, searchValue)

  return (

      <div className="main-container">

        {searchValue}

        <SearchBar
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />

        <div className={styles['total-articles']}>
          <p>Results: {filteredArticles.length}</p>
        </div>

        {!loading ? <ArticleList articles={filteredArticles} keywords={searchValue} /> : <Loader />}
      </div>

  )
}

export default Home