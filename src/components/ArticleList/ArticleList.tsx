import styles from './ArticleList.module.scss';


import type { Article } from '../../types/types';
import ArticleCard from '../ArticleCard/ArticleCard';

interface ArticleListProps {
  articles: Article[];
}


function ArticleList({ articles }: ArticleListProps) {

  return (
    <div className={styles.cardsList}>
      {articles.map((value)=>(
        <ArticleCard key={value.id} infoCard={value} />
      ))}
    </div>
  )
}

export default ArticleList