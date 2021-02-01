
	$(function(){
	$('nav.mobile').click(function(){
		var listaMenu = $('nav.mobile ul');
		var icone = $('.botao-menu-mobile i');
		var icone = $('.botao-menu-mobile i');

		if (listaMenu.is(':hidden') == true) {
			
			icone.removeClass('fa-bars');
			icone.addClass('fa-times');
			listaMenu.fadeIn();
		} else {
			
			icone.removeClass('fa-times');
			icone.addClass('fa-bars');
			listaMenu.fadeOut();
		}
	})
})
