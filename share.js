shareButton = document.getElementById('shareButton');

shareButton.addEventListener('click' , event => {
    if(navigator.share){
        navigator.share({
            text: 'Look at what color I made :)',
            url: window.location.href
        }).then(() => {
            console.log('Thanks for sharing!');
        }).catch((err) => console.error(err));
    }else alert("The current browser does not support the share fuction. Please, manually share the link")
});