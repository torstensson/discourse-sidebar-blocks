import { createWidget } from 'discourse/widgets/widget';
import { h } from 'virtual-dom';

createWidget('sidebar-custom-content', {
  tagName: 'div.sidebar-custom-content',

  html(attrs) {
    return h('div', {innerHTML: Discourse.SiteSettings.sidebar_custom_content});
  },
});

createWidget('sidebar-custom-content-2', {
  tagName: 'div.sidebar-custom-content',

  html(attrs) {
    return h('div', {innerHTML: Discourse.SiteSettings.sidebar_custom_content_2});
  },
});
