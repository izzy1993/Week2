$.ajax({
      url: "https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://www.digg.com/rss/index.xml",

      dataType: "jsonp",

      fsuccess: function(data) {
        console.log(data);
        $.each(data.responseData.feed.entries, function () {
                 $( "#bbc" ).append('<li><a target="_blank" href="' + this['link'] + '">' + this['title'] +'</a><p>' + this['contentSnippet'] + '</p></li>');
        });
        

      }});