const feedInstaContent = $('#feed-insta');
const itemFeed = '<div class="col-4 feed-insta-item"><img class="img-fluid" src=":url:" alt=""></div>';
const captionFeed = '<div class="caption-feed">'+
                        ':desc:'+
                        '<div class="caption-feed-likes"><i class="fa fa-heart text-danger"></i>:likes:</div>'+
                        '<div class="caption-feed-link"><a href="https://www.instagram.com/p/:code:" target="_blank"><i class="fa fa-share"></i></a></div>'+
                     '</div>';

$(function() {
  $.ajax({
    method: 'POST',
    url: '../../controller/scrapInstagram.php',
    success: function (data) {
      var feed = JSON.parse(data);
      insertFeedToDOM(feed);
    }
  })
});


function insertFeedToDOM(feed) {
  for (var i = 0; i < feed.length; i++) {
    var media = feed[i];
    var item = itemFeed
      .replace(':url:', media.display_src);
    var $item = $(item);
    feedInstaContent.append($item.show());
    var caption = captionFeed
      .replace(':desc:', media.caption)
      .replace(':likes:', media.likes.count)
      .replace(':code:', media.code);
    var $caption = $(caption);
    interactFeed($item,$caption);
  }
}

function interactFeed(o, $cap) {
  o.click(function () {
    if ($(this).hasClass('col-4')) {
      $('.feed-insta-item').hide();
      $(this).show().delay(1500).removeClass('col-4 feed-insta-item')
             .addClass('col-12 feed-insta-item')
             .append($cap.fadeIn());
      $('#feed-insta').highlight(/\B#\w+/);
    } else {
      $(this).removeClass('col-12 feed-insta-item');
      $(this).addClass('col-4 feed-insta-item');
      $('.feed-insta-item').delay(500).fadeIn(600);
      $(this).remove($cap.hide());
      $('#feed-insta').highlight(/\B#\w+/);
    }
  })
}

//Get type of variable
var toType = function(obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
