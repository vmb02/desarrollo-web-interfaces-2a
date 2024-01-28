$(document).ready(function() {
    
    let temaGuardado = localStorage.getItem('tema');
    //Si hay un tema guardado, lo aplico
    if (temaGuardado == 'tema-ocuro') {
        $('body').removeClass(':root').addClass('tema-oscuro');
        $('#theme').prop('checked', true);
    }

    // Escuchar el cambio en el estado del checkbox
    $('#theme').change(function() {
      if ($(this).is(':checked')) {
        // Si el checkbox está marcado, agrega la clase 'tema-oscuro' y elimina la clase 'tema-claro'
        localStorage.setItem('tema', 'tema-oscuro');
        $('body').removeClass(':root').addClass('tema-oscuro');
      } else {
        // Si el checkbox no está marcado, agrega la clase 'tema-claro' y elimina la clase 'tema-oscuro'
        localStorage.setItem('tema', ':root');
        $('body').removeClass('tema-oscuro').addClass(':root');
      }
    });
  });