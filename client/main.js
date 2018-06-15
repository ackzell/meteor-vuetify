import { Meteor } from "meteor/meteor";
import { Vue } from "meteor/akryum:vue";

import App from '/imports/ui/App.vue';

Meteor.startup(() => {
  new Vue(App).$mount(document.body);
});
