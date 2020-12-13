import "./calendar.scss";

$(".calendar").datepicker({
  minDate: new Date(),
  range: true,
  clearButton: true,
  prevHtml: '<span class="material-icons">arrow_back</span>',
  nextHtml: '<span class="material-icons">arrow_forward</span>',
  navTitles: {
    days: "MM yyyy",
    months: "yyyy",
    years: "yyyy1 - yyyy2",
  },
});
