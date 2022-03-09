apiclient=(function(){
    return{
        getBlueprintsByAuthor:function(author,callback){
            const date = $.get({
                url: "/blueprints/"+ author, contentType: "application/json"});
            date.then(function (json) {
                    console.log(json);
                    callback(null, json);
                });
        },

        getBlueprintsByNameAndAuthor:function(author,name,callback){
            const date = $.get({
                url: "/blueprints/"+ author + "/" + name, contentType: "application/json"});
            date.then(function (json) {
                console.log(json);
                callback(null, json);
            });
        }
    }
})();