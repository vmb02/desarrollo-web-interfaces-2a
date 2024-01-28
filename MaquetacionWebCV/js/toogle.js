$(document).ready(function() {
    
    let tema = localStorage.getItem('tema');
    
    if (tema == 'tema-ocuro') {
        $('body').removeClass(':root').addClass('tema-oscuro');
        $('#theme').prop('checked', true);
    }

    $('#theme').change(function() {
      if ($(this).is(':checked')) {
        localStorage.setItem('tema', 'tema-oscuro');
        $('body').removeClass(':root').addClass('tema-oscuro');
      } else {
        localStorage.setItem('tema', ':root');
        $('body').removeClass('tema-oscuro').addClass(':root');
      }
    });
  });