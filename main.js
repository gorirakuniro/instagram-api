var request = new XMLHttpRequest();
    request.open('GET', 'https://graph.facebook.com/v10.0/17841439110025934/media?fields=id,media_type,media_url,thumbnail_url,permalink&access_token=EAAM070egLuEBAOLFASrnyvhUZAu9ImXNWzVHkRyhzGgCOvOG29tXwQa5BJOxSaVqcGP9I4P7j298TjIeRkcZCzIvNc0Qh8XWabrIjkb0TIdMQkXivScvk65VthXimheqpIS9TgAwzMJFeoJgvaMghvSwUkZCehQgGp69nWRmXjiSJrZAou3ahdLsmmnFS8MR4KTc28SYnR8gqk2nj3vAIPUOKbyOxxt9oreHzVbItZBCWciGynxaRylXQ6OpLMQoZD', true);
    request.responseType = 'json';
 
    request.onload = function () {
        var data = this.response;
        console.log(data.data[0].media_url);

        const images = document.getElementById('images')

        for (var i = 0; i < data.data.length; i++) {
            var image = data.data[i].media_url;
            var li = document.createElement('li')
            var img = document.createElement('img')
            li.appendChild(img)
            img.src = image;
            document.body.appendChild(li);
        }
    };

    request.send();


