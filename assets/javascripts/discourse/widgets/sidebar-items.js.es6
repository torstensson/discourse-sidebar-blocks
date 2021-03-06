import { createWidget } from 'discourse/widgets/widget';
import { h } from 'virtual-dom';

export default createWidget('sidebar-items', {
  tagName: 'div.sidebar-items',
  buildKey: () => 'sidebar-first',

  html(attrs, state) {
  	if (!Discourse.SiteSettings.sidebar_enable || this.site.mobileView)
  		return;

    var sidebarBlocks = Discourse.SiteSettings.sidebar_block_order.split("|");

    const result = [];
    var self = this;
    var thumbnails = false;

    sidebarBlocks.map(function(item) {

      switch(item) {
          case 'latest_replies':
              result.push(self.attach('sidebar-latest-replies'));
              break;
          case 'custom_html':
              result.push(self.attach('sidebar-custom-content'));
              break;
          case 'custom_html_2':
              result.push(self.attach('sidebar-custom-content-2'));
              break;          
          case 'leaderboard':
              result.push(self.attach('sidebar-leaderboard'));
              break;
          default:
            var props = {};
            props.thumbnails = item.includes(':thumbnails') ? true : false;

            // regex to find number of items requested
            var count = item.match(/(?:)[\d]+/g);
            if (count) {
              props.count = parseInt(count[0]);
            }

            var type = item.includes(':tag') ? 'tag': 'category';
            if (item.includes(':')) {
              item = item.split(":");
              props[type] = item[0];
            } else {
              props[type] = item;
            }

            result.push(self.attach('sidebar-category-posts', props));
      }

    });

    return result;
  },
});
