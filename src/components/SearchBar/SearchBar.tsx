import { useState } from 'react';
import MainInput from '../MainInput/MainInput';
import styles from './SearchBar.module.scss';

import SearchIcon from '../../assets/icons/search.png'

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchBar({value, onChange}: SearchBarProps) {

  return (
    <div className={styles.search}>
      <h5>Filter by keywords</h5>

      <MainInput
        value={value}
        onChange={onChange}
        placeholder="The most successful IT companies in 2020"
        customClass={styles['search-input']}
        icon={SearchIcon}
      />
    </div>
  );
}

export default SearchBar;