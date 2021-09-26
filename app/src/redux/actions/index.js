export const REQUEST_ARTICLES = 'REQUEST_ARTICLES';
export const REQUEST_ARTICLES_SUCCEED = 'REQUEST_ARTICLES_SUCCEED';

export const requestArticles = (apiUrl) => {
  return {
    type: REQUEST_ARTICLES,
    apiUrl:apiUrl
  }
};

export const requestArticlesSucceed = (body) => (
  {
    type: REQUEST_ARTICLES_SUCCEED,
    body: {
      articles: body.articles,
      pagination: body.pagination
    }
  }
);


