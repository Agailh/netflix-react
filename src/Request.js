const key = '66c8e19ae0ec97513a5271fe9375c38c'

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-USpage=1&include_adult=false`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-USpage=1&include_adult=false`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-USpage=2&include_adult=false`,
    requestHorror: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&with_genres=27&page=1&include_adult=false`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-USpage=1&include_adult=false`,
    
    
};

export default requests