(funtion() {
    var $imgs= $('#gallery img');
    var $buttons = $('#butoons');
    var tagged = {};
    $imgs.each(function() {
        var img=this;
        var tags= $(this).data
('tags');
if (tags) {
    tags.split(',').forEach(funtion(tagName) {
        if (tagged[tagName]== null) {
            tagged[tagName] = [];
        }
        tagged[tagName].push(img);
    });
}    });
$('<button/> , {
    text: 'Show All',
    class: 'active',
    click : function() {
        $(this)
        .addClass=('active')
        .siblings()
        .removeClass('active');
        $imgs.show();
    }
}).appendTo($buttons);
$each(tagged,function(tagName) {
    $('<button/>', {
        text:tagName + '('+ tagged[tagname].lenght +')',
        click:function() {
            $(this)
            .addClass('active')
            .sibling()
            .removeClass('active');
            $imgs
            .hide()
            .filter(tagged[tagName])
            .show();
        }
    }).appendTo($butoons);
})
} )