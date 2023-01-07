'use client';

import React, { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

const Search = () => {
  const router = useRouter();

  const [search, setSearch] = useState('');

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch('');

    router.push(`/search/${search}`);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        className="px-4"
        onChange={handleChangeInput}
        placeholder="Enter the Search term"
        type="text"
        value={search}
      />

      <button
        className="btn bg-pink-500 text-white font-bold py-2 px-4 rounded-lg"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
