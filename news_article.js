var xhr = new XMLHttpRequest();
var url = './news_article.json';
xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function(){
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('newsArticles')

   articles.forEach(article => {
    var articleDiv = document.createElement('div');
    articleDiv.classList.add('article');

    var title = document.createElement('h2');
    title.textContent = article.title;

    var articleDescription = document.createElement('p');
    articleDescription.textContent = article.description;

    var waysHeader = document.createElement('h3');
    waysHeader.textContent = "Ways to Achieve:";
    
    var waysList = document.createElement('ul');
    article.ways_to_achieve.forEach(function(way){
    var listItem = document.createElement('li');
    listItem.textContent = way;
    waysList.appendChild(listItem);
    });

    var benefitHeader = document.createElement('h3');
    benefitHeader.textContent = "Benefits:";

    var benefitList = document.createElement('ul');
    article.benefits.forEach(benefit => {
        var listItem = document.createElement('li');
        listItem.textContent = benefit;
        benefitList.appendChild(listItem);
    });

    articleDiv.appendChild(title);
    articleDiv.appendChild(articleDescription);
    articleDiv.appendChild(waysHeader)
    articleDiv.appendChild(waysList);
    articleDiv.appendChild(benefitHeader);
    articleDiv.appendChild(benefitList);

    articlesDiv.appendChild(articleDiv);


   });
}
xhr.send();