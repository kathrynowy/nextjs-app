import React from 'react';

import { TSearchResult, TSearchTermProps } from './types';

const search = async (searchTerm: string) => {
  const res = await fetch(
    `https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.API_KEY}`,
  );

  const data: TSearchResult = await res.json();

  return data;
};

const SearchResults = async ({ params: { searchTerm } }: TSearchTermProps) => {
  const searchResults = await search(searchTerm);

  return (
    <div>
      <div className="text-gray-500 text-sm">
        You searched for: {searchTerm}
      </div>

      <ol className="space-y-5 p-5">
        {searchResults?.organic_results?.map(result => {
          const { position, title, snippet } = result;

          return (
            <li className="list-decimal" key={position}>
              <p className="font-bold">{title}</p>

              <p>{snippet}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default SearchResults;
