import { createToastInterface } from "vue-toastification";

export default function (ctx, inject) {
  const toast = createToastInterface({"cssFile":"\u002Fhome\u002Ffluxod\u002FCheikh_projects\u002Freps_dev\u002Fclient\u002Fnode_modules\u002Fvue-toastification\u002Fdist\u002Findex.css"});
  inject('toast', toast);
}
