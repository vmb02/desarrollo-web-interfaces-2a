document.addEventListener("DOMContentLoaded", (event) =>{
    //    en el iframe le elimino la parte de estilos que me traigo al copiar el enlace de maps
    //    y le añado a conveniencia frameborder="0" scrolling="no" marginheiht="0" marginwidth="0"
    
    // genero un efecto de carga mediante un TimeOut 
    setTimeout(() =>{
       document.querySelector("#load-iframe-map").innerHTML=`
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3201.345917479334!2d-4.695803710980997!3d36.64212800516423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72e7014fe8afc1%3A0x3f56be321ea7f782!2sC.%20Convento%2C%2027%2C%2029120%20Alhaur%C3%ADn%20el%20Grande%2C%20M%C3%A1laga!5e0!3m2!1ses!2ses!4v1706383585856!5m2!1ses!2ses" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>    `; 
    }, 500);
    
});