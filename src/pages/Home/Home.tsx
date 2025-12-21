import { useEffect, useState } from 'react';
import ArticleList from "../../components/ArticleList/ArticleList"
import {useArticlesStore} from '../../store/useArticlesStore'
import Loader from '../../components/Loader/Loader';

import styles from './Home.module.scss'
import SearchBar from '../../components/SearchBar/SearchBar';
import { useSearch } from '../../hooks/useSearch';

function Home() {
  const ITEMS_PER_PAGE = 6;

  const { articles, loading, fetchArticles } = useArticlesStore();
  const [searchValue, setSearchValue] = useState('');
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  useEffect(() => {
    if (articles.length === 0 && !loading) {
      fetchArticles();
    }
  }, []);

  const filteredArticles = useSearch(articles, searchValue);
  const displayedArticles = filteredArticles.slice(0, visibleCount);

  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [searchValue]);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + ITEMS_PER_PAGE);
  };

  return (

      <div className="main-container">
        <SearchBar
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />

        <div className={styles['total-articles']}>
          <p>Results: {filteredArticles.length}</p>
        </div>

        {loading ? (
          <Loader />
        ) : (
          <>
            <ArticleList articles={displayedArticles} keywords={searchValue} />

            {visibleCount < filteredArticles.length && (
              <button className={styles.loadMore} onClick={handleLoadMore}>
                Load More
              </button>
            )}
          </>
        )}
      </div>

  )
}

export default Home