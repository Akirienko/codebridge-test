import styles from './ArticleList.module.scss';


import type { Article } from '../../types/types';
import ArticleCard from '../ArticleCard/ArticleCard';

interface ArticleListProps {
  articles: Article[];
  keywords?: string;
}


function ArticleList({ articles, keywords = '' }: ArticleListProps) {

  return (
    <div className={styles.cardsList}>
      {articles.map((value)=>(
        <ArticleCard key={value.id} infoCard={value} keywords={keywords} />
      ))}
    </div>
  )
}

export default ArticleList