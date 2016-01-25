
(function($) {
  $.extend(Drupal.settings, {
    "basePath": "\/",
    "pathPrefix": "",
    "ajaxPageState": {
      "theme": "bartik",
      "theme_token": "2GhHrlTg32X3qFGk5S-OvauQVp0HVW7WkJh_fpjuF1c",
      "js": {
        "modules\/statistics\/statistics.js": 1,
        "misc\/jquery.js": 1,
        "misc\/jquery.once.js": 1,
        "misc\/drupal.js": 1,
        "sites\/all\/modules\/dhtml_menu\/dhtml_menu.js": 1
      },
      "css": {
        "modules\/system\/system.base.css": 1,
        "modules\/system\/system.menus.css": 1,
        "modules\/system\/system.messages.css": 1,
        "modules\/system\/system.theme.css": 1,
        "modules\/field\/theme\/field.css": 1,
        "modules\/node\/node.css": 1,
        "modules\/user\/user.css": 1,
        "sites\/all\/modules\/dhtml_menu\/dhtml_menu.css": 1,
        "sites\/all\/modules\/tagadelic\/tagadelic.css": 1,
        "themes\/bartik\/css\/layout.css": 1,
        "themes\/bartik\/css\/style.css": 1,
        "themes\/bartik\/css\/colors.css": 1,
        "themes\/bartik\/css\/print.css": 1,
        "themes\/bartik\/css\/ie.css": 1,
        "themes\/bartik\/css\/ie6.css": 1
      }
    },
    "dhtmlMenu": {
      "nav": "clone",
      "animation": {
        "effects": {
          "height": "height",
          "opacity": "opacity",
          "width": 0
        },
        "speed": "500"
      },
      "effects": {
        "siblings": "close-same-tree",
        "children": "none",
        "remember": "0"
      },
      "filter": {
        "type": null,
        "list": {
          "management": "management",
          "navigation": "navigation",
          "admin_menu": 0,
          "main-menu": 0,
          "menu-fossasia-agenda": 0,
          "menu-links": 0,
          "menu-our-friend": 0,
          "secondary-menu": 0,
          "user-menu": 0
        }
      }
    },
    "statistics": {
      "data": {
        "nid": "252"
      },
      "url": "\/?q=modules\/statistics\/statistics.php"
    }
  });

  // remove categories which don't have a project
  $('.project-category').each(function (){
    var $e = $(this);
    if($e.next().attr('tagName') != 'SPAN'){
      $e.remove();
    }
  });

})(jQuery);