export const REQUEST_ARTICLES = 'REQUEST_ARTICLES';
export const REQUEST_ARTICLES_SUCCEED = 'REQUEST_ARTICLES_SUCCEED';
export const REQUEST_ARTICLE = 'REQUEST_ARTICLE';
export const REQUEST_ARTICLE_SUCCEED = 'REQUEST_ARTICLE_SUCCEED';

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

export const requestArticle = (apiUrl) => {
  return {
    type: REQUEST_ARTICLE,
    apiUrl:apiUrl
  }
};

export const requestArticleSucceed = (body) => (
  {
    type: REQUEST_ARTICLE_SUCCEED,
    body: body
  }
);


