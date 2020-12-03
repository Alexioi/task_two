import "normalize.css";

import "./main.scss";

import "jquery-mask-plugin";
import "air-datepicker";

function importAll(r) {
  r.keys().forEach(r);
}

importAll(require.context("./components", true, /\.js$/));
importAll(require.context("./pages", true, /\.js$/));
