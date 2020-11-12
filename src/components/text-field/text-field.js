import "./text-field.sass";

$(".text-field__input").mask("00.00.0000", {
  translation: { 0: { pattern: /[0-9*]/ } },
});
