/**
 * Created by Kh Akash on 1/10/2017.
 */

/* ----------------- Start JS Document ----------------- */

/*---------------------------------------------------*/
/* For Background Video Player						 */
/*---------------------------------------------------*/
$(document).ready(function () {

    $(".player").mb_YTPlayer();

});


/*---------------------------------------------------*/
/* Preloader										 */
/*---------------------------------------------------*/

$(window).load(function(){
    $('.loader').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    $('body').delay(350);

});
