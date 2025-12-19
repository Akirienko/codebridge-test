import { useParams, useNavigate } from 'react-router-dom';
import { useArticlesStore } from '../../store/useArticlesStore';
import { useEffect } from 'react';
import styles from './Article.module.scss';
import Loader from '../../components/Loader/Loader';

function Article() {
  const { articles, loading, fetchArticles } = useArticlesStore();

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (articles.length === 0 && !loading) {
      fetchArticles();
    }
  }, [articles.length, fetchArticles]);

  const article = articles.find(a => a.id === Number(id));

  const handleBackClick = () => {
    navigate('/');
  };

  if (loading) {
    return <Loader />;
  }

  if (!article) {
    return <div className={styles['not-found']}>Статтю не знайдено</div>;
  }

  return (
    <div className={styles.article}>
      <img
        src={article.image_url}
        alt={article.title}
        className={styles['article-image']}
      />

      <div className="main-container">
        <div className={styles['article-content']}>
          <h1 className={styles['article-content__title']}>{article.title}</h1>
          <p className={styles['article-content__text']}>{article.summary}</p>
        </div>

        <button className={styles['button-home']} onClick={handleBackClick}>
          ← Back to homepage
        </button>
      </div>
    </div>
  );
}

export default Article;