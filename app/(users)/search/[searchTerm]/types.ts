export type TSearchTermProps = {
  params: {
    searchTerm: string;
  };
};

export type TSearchResult = {
  organic_results: TOrganicResult[];
};

export type TOrganicResult = {
  position: number;
  title: string;
  link: string;
  thumbnail: string;
  snippet: string;
};
