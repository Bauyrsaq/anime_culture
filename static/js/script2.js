function getGenres() {
    $(document).ready(function() {
        // AJAX-запрос к серверу для получения данных
        $.ajax({
            url: '/get_genres',
            type: 'GET',
            success: function(data) {
                // Обработка данных, например, вывод на консоль
                // console.log(data);

                const genres = document.querySelector(".genres__section-container");
                const ul = document.createElement("ul");
                ul.classList.add("anime__container-list");
                
                // Далее вы можете обработать данные так, как вам нужно
                // Например, заполнить элементы на странице данными
                for (const genre of data.genres) {
                    // console.log(genre.id, genre.genre);

                    const li = document.createElement("li");
                    li.classList.add("anime__container-item");
                    const a = document.createElement("a");
                    a.classList.add("anime__container-link");
                    a.href = "#";
                    a.innerHTML = genre.genre;
                
                    li.appendChild(a);
                    ul.appendChild(li);
                    // Добавьте ваш код для дальнейшей обработки данных
                }
                genres.appendChild(ul);
            },
            error: function(error) {
                console.error('Error fetching genres:', error);
            }
        });
    });
};

function getStyles() {
    $(document).ready(function() {
        // AJAX-запрос к серверу для получения данных
        $.ajax({
            url: '/get_styles',
            type: 'GET',
            success: function(data) {
                // Обработка данных, например, вывод на консоль
                // console.log(data);
                
                const styles = document.querySelector(".styles__section-container");
                const ul = document.createElement("ul");
                ul.classList.add("anime__container-cards");
                
                // Далее вы можете обработать данные так, как вам нужно
                // Например, заполнить элементы на странице данными
                for (const style of data.styles) {
                    // console.log(style.id, style.style); 
                    const li = document.createElement("li");
                    li.classList.add("anime__container-card");

                    const img = document.createElement("img");
                    img.src = `../static/assets/${style.style}.jpg`;
                    const p = document.createElement("p");
                    p.innerHTML = style.style;  
                    li.appendChild(img);
                    li.appendChild(p);
                    ul.appendChild(li);
                    // Добавьте ваш код для дальнейшей обработки данных
                }
                styles.appendChild(ul);
            },
          error: function(error) {
                console.error('Error fetching styles:', error);
          }
        });
    });
}

function getCommunities() {
    $(document).ready(function() {
        // AJAX-запрос к серверу для получения данных
        $.ajax({
            url: '/get_communities',
            type: 'GET',
            success: function(data) {
                // Обработка данных, например, вывод на консоль
                // console.log(data);
                
                const community = document.querySelector(".community__section-container");
                const ul = document.createElement("ul");
                ul.classList.add("community__container-list");
                
                // Далее вы можете обработать данные так, как вам нужно
                // Например, заполнить элементы на странице данными
                for (const community of data.communities) {
                    // console.log(community.id, community.name, community.platform, community.members);
                    const li = document.createElement("li");
                    li.classList.add("community__container-item");

                    const img = document.createElement("img");
                    img.src = `../static/assets/${community.id}_community.png`;
                    img.alt = `${community.name}`;
                    const button = document.createElement("button");
                    button.innerHTML = community.name;
                    const platform = document.createElement("p");
                    platform.innerHTML = community.platform;  
                    const members = document.createElement("p");
                    members.innerHTML = community.members;  
                    li.appendChild(img);
                    li.appendChild(button);
                    li.appendChild(platform);
                    li.appendChild(members);
                    ul.appendChild(li);
                    // Добавьте ваш код для дальнейшей обработки данных
                }
                community.appendChild(ul);
            },
            error: function(error) {
                console.error('Error fetching communities:', error);
            }
        });
    });
}

function getCosplays() {
    $(document).ready(function() {
        // AJAX-запрос к серверу для получения данных
        $.ajax({
            url: '/get_cosplays',
            type: 'GET',
            success: function(data) {
                // Обработка данных, например, вывод на консоль
                // console.log(data);
                
                const cosplays = document.querySelector(".cosplay__section-container");
                const ul = document.createElement("ul");
                ul.classList.add("cosplay__container-list");
                
                // Далее вы можете обработать данные так, как вам нужно
                // Например, заполнить элементы на странице данными
                for (const cosplay of data.cosplays) {
                    // console.log(cosplay.id, cosplay.name);
                    const li = document.createElement("li");
                    li.classList.add("cosplay__container-item");

                    const img = document.createElement("img");
                    img.src = `../static/assets/${cosplay.id}_cosplay.png`;
                    img.alt = cosplay.name;
                    const p = document.createElement("p");
                    p.innerHTML = cosplay.name;  
                    li.appendChild(img);
                    li.appendChild(p);
                    ul.appendChild(li);
                    // Добавьте ваш код для дальнейшей обработки данных
                }
                cosplays.appendChild(ul);
            },
            error: function(error) {
                console.error('Error fetching cosplays:', error);
            }
        });
    });
}

function getManga() {
    $(document).ready(function() {
        // AJAX-запрос к серверу для получения данных
        $.ajax({
            url: '/get_manga',
            type: 'GET',
            success: function(data) {
                // Обработка данных, например, вывод на консоль
                // console.log(data);
                
                const manga = document.querySelector(".manga__section-container");
                const ul = document.createElement("ul");
                ul.classList.add("section__container-list");
                
                // Далее вы можете обработать данные так, как вам нужно
                // Например, заполнить элементы на странице данными
                for (const mang of data.manga) {
                    // console.log(mang.id, mang.name, mang.rating, mang.publisher);
                    const li = document.createElement("li");
                    li.classList.add("section__container-item");

                    const img = document.createElement("img");
                    img.src = `../static/assets/${mang.id}_manga.png`;
                    img.alt = `${mang.name}`;
                    const name = document.createElement("p");
                    name.innerHTML = mang.name;
                    const rating = document.createElement("p");
                    rating.innerHTML = `Rating: ${mang.rating}`;  
                    const studio = document.createElement("p");
                    studio.innerHTML = `Studio: ${mang.publisher}`;  
                    li.appendChild(img);
                    li.appendChild(name);
                    li.appendChild(rating);
                    li.appendChild(studio);
                    ul.appendChild(li);
                    // Добавьте ваш код для дальнейшей обработки данных
                }
                manga.appendChild(ul);
            },
            error: function(error) {
                console.error('Error fetching manga:', error);
            }
        });
    });
}

function getAnime() {
    $(document).ready(function() {
        // AJAX-запрос к серверу для получения данных
        $.ajax({
            url: '/get_anime',
            type: 'GET',
            success: function(data) {
                // Обработка данных, например, вывод на консоль
                // console.log(data);
                
                const anime = document.querySelector(".anime__section-container");
                const ul = document.createElement("ul");
                ul.classList.add("section__container-list");
                
                // Далее вы можете обработать данные так, как вам нужно
                // Например, заполнить элементы на странице данными
                for (const anim of data.anime) {
                    // console.log(anim.id, anim.name, anim.rating, anim.publisher);
                    const li = document.createElement("li");
                    li.classList.add("section__container-item");

                    const img = document.createElement("img");
                    img.src = `../static/assets/${anim.id}_anime.png`;
                    img.alt = `${anim.name}`;
                    const name = document.createElement("p");
                    name.innerHTML = anim.name;
                    const rating = document.createElement("p");
                    rating.innerHTML = `Rating: ${anim.rating}`;  
                    const studio = document.createElement("p");
                    studio.innerHTML = `Studio: ${anim.publisher}`;  
                    li.appendChild(img);
                    li.appendChild(name);
                    li.appendChild(rating);
                    li.appendChild(studio);
                    ul.appendChild(li);
                    // Добавьте ваш код для дальнейшей обработки данных
                }
                anime.appendChild(ul);
            },
            error: function(error) {
                console.error('Error fetching anime:', error);
            }
        });
    });
}



getGenres();
getStyles();
getCommunities();
getCosplays();
getManga();
getAnime();

const title = document.querySelector(".title");
title.addEventListener('click', e => window.location.href = window.location.href = '/');