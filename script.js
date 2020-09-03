function getRandomSite(){
    for ( var c = 0; c < 5; c++){
        var result = '';
        var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < 6; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        url = "https://prntscr.com/" + result;
        window.open(url);
    };
}
