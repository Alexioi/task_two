import "./date-dropdown.sass";
import './datapicker.sass'

// $(".js-date-dropdown__input").mask(
//   "ДД.ММ.ГГГГ", 
//   {'translation': {
//       Д: {pattern: /[0-9]/},
//       М: {pattern: /[0-9]/},
//       Г: {pattern: /[0-9]/}
//     }
//   }
// );

$(".js-date-dropdown__input").datepicker();