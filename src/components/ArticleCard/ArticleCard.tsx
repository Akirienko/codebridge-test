import styles from './ArticleCard.module.scss';

import { useNavigate } from 'react-router-dom';
import type { Article } from '../../types/types';
import {formatDate, highlightText} from '../../utils/utils'

import {
  Card,
  CardContent,
  Button
} from '@mui/material';

import calendarImage from '../../assets/icons/calendar.png'


interface ArticleCardProps {
  infoCard: Article;
  keywords?: string;
}


function ArticleCard({infoCard, keywords = ''}: ArticleCardProps) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/article/${infoCard.id}`);
  };

  const truncatedSummary = infoCard.summary.length > 100
  ? infoCard.summary.slice(0, 100) + '...'
  : infoCard.summary;

  return (
    <Card className={styles.card} onClick={handleClick}>
      <img
        className={styles['card-main__image']}
        src={infoCard.image_url}
        alt={infoCard.title}
      />

      <CardContent sx={{ p: 3 }}>
        <div className={styles['card-date']}>
          <img src={calendarImage} alt="icon" />
          <p>{formatDate(infoCard.published_at)}</p>
        </div>

        <h3 className={styles['card-title']}>
          {highlightText(infoCard.title, keywords).map((part, index) =>
            part.isHighlight
              ? <mark key={index} className="highlight">{part.text}</mark>
              : <span key={index}>{part.text}</span>
          )}
        </h3>

        <p className={styles['card-summary']}>
          {highlightText(truncatedSummary, keywords).map((part, index) =>
            part.isHighlight
              ? <mark key={index} className="highlight">{part.text}</mark>
              : <span key={index}>{part.text}</span>
          )}
        </p>

        <div className={styles['card-button']}>
          <Button>Read more →</Button>
        </div>

      </CardContent>
    </Card>
  )
}

export default ArticleCard