let arr = [
        {url:'https://staticdelivery.nexusmods.com/mods/2229/images/2506/2506-1582923006-1219278363.png'},
        {url:'https://i.ytimg.com/vi/rkA1Zs2gn5A/maxresdefault.jpg'},
        {url:'https://lh5.googleusercontent.com/proxy/WDibfLrddk2zME-3LOwnDQmvRqo-71GMb097GvOR8pNNybvplx-rQbltaUxsNinmBoc=w1200-h630-p-k-no-nu'},
        {url:'https://i.ytimg.com/vi/jIGJweoq7D4/maxresdefault.jpg'},
        {url:'https://swtorista.com/articles/wp-content/uploads/2020/05/swtor-hared-assassin.jpg'}
        
       ]
        const img = document.querySelector('.section img')
        const right = document.querySelector('.section .right')
        const left = document.querySelector('.section .left')
        
        var i = 0;
        function fun(){
            i++ ;
            if(i > 4){
                i = 1;
            }
            img.src = arr[i].url
         }
       setInterval(fun ,1000);