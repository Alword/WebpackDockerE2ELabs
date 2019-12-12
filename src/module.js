module.exports = {
    sayHello: function(){
        return "hello";
    },
    Request : function(){
        let url = "https://api.kanye.rest/";
        return fetch(url);
    }
}