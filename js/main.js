function insrt(num) {
	$('.calculator-input').val($('.calculator-input').val() + num);
}
function eql() {
	$('.calculator-input').val(eval($('.calculator-input').val()));
}
function c() {
	$('.calculator-input').val('');
}
function del() {
	value = $('.calculator-input').val();
	$('.calculator-input').val(value.substring(0, value.length - 1));
}