$('document').ready(function () {
	$('.cart').click(function () {
		let url = $(this).attr('data-src');
		$('#img').attr('src', url);
		$('#popup').show();
		$('.layout').show();
	});
	$('.close').click(function () {
		let url = $(this).attr('data-src');
		$('#img').attr('src', url);
		$('#popup').hide();
		$('.layout').hide();
	});
});