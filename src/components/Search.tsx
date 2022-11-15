import React, { useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
  Configure
} from 'react-instantsearch-dom';
import 'instantsearch.css/themes/reset.css';
import 'instantsearch.css/themes/satellite.css';
import styles from './Search.module.css';

const APP_ID = process.env.NEXT_PUBLIC_ALGOLIA_APP_KEY || '';
const SEARCH_KEY = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY || '';
const INDEX_NAME = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME || '';

const algoliaSetitngs = {
  searchClient: algoliasearch(APP_ID, SEARCH_KEY),
  indexName: INDEX_NAME,
};

const Hit: React.FC<{ hit: any }> = ({ hit }) => {
  return (
    <Link href={hit.url}>
      <div className="hitName">
        <Highlight attribute="title" tagName="span" hit={hit} />
      </div>
    </Link>
  );
};

const SearchResult: React.FC = () => {
  return <Hits hitComponent={Hit} />;
};

const Search: React.FC = () => {
  const [suggestDisplay, toggleDisplay] = useState(false);

  return (
    <InstantSearch {...algoliaSetitngs}>
      <Configure hitsPerPage={5} />
      <div
        onFocus={() => toggleDisplay(true)}
        onBlur={() =>
          setTimeout(() => {
            toggleDisplay(false);
          }, 300)
        }
      >
        <SearchBox translations={{ placeholder: '記事を検索' }} />
      </div>
      <div className={styles.searchResultContainer}>
        <div className={classNames(styles.searchResult, { [styles.hidden]: !suggestDisplay })}>
          <SearchResult />
        </div>
      </div>
    </InstantSearch>
  );
};

export default Search;
