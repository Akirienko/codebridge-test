const getOrdinal = (day: number): string => {
  if (day > 3 && day < 21) return 'th';

  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.getDate();

  const year = date.getFullYear();

  const ordinal = getOrdinal(day);

  return `${month} ${day}${ordinal}, ${year}`;
};


interface TextPart {
  text: string;
  isHighlight: boolean;
}

export const highlightText = (text: string, keywords: string): TextPart[] => {
  if (!keywords || !keywords.trim()) {
    return [{ text, isHighlight: false }];
  }

  const words = keywords
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .filter(word => word.length > 0);

  if (words.length === 0) {
    return [{ text, isHighlight: false }];
  }

  const escapedWords = words.map(word =>
    word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  );
  const pattern = new RegExp(`(${escapedWords.join('|')})`, 'gi');


  const parts = text.split(pattern);

  return parts
    .filter(part => part.length > 0)
    .map(part => {
      const isMatch = words.some(word =>
        part.toLowerCase() === word.toLowerCase() ||
        part.toLowerCase().includes(word.toLowerCase())
      );

      return {
        text: part,
        isHighlight: isMatch
      };
    });
};
