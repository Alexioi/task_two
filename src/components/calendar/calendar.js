import './calendar.css'

var currentTime = new Date();
var startDateFrom = new Date(currentTime.getFullYear(),currentTime.getMonth() -1,1);
var startDateTo = new Date(currentTime.getFullYear() +4,currentTime.getMonth() +2,0);

$('#dtpAir').datepicker({
	classes: 'vp-dtp'
	, minDate: startDateFrom
	, maxDate: startDateTo
	, onSelect: function(date) {
		console.log("Date selected: " + date);
		$( '.datepicker--custom *[vp-button = selected]' ).attr( 'vp-button', '' );
	}
});

var htmlCustomBtn = '<button vp-button>Custom</button>';
var htmlDtpCustomSection = '<div class="datepicker--custom">' + htmlCustomBtn +'</div>';
$( htmlDtpCustomSection ).insertAfter( '.datepicker--content' );

$( '.datepicker--custom *[vp-button]' ).on( 'click', function(){
	var btnText = $(this).text();
	$( '#dtpAir' ).val( btnText );
	$( '.-selected-' ).removeClass('-selected-');
	$(this).attr( 'vp-button', 'selected' );
});