function onlynumber(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    //var regex = /^[0-9.,]+$/;
    var regex = /^[0-9.]+$/;
    if( !regex.test(key) ) {
       theEvent.returnValue = false;
       if(theEvent.preventDefault) theEvent.preventDefault();
    }
 }

function exibirDuvidaDeDominio() {
    const a = document.querySelector('.iterrogacao-icon');
    a.style.opacity = '1'
}

function esconderDuvidaDeDominio() {
    const a = document.querySelector('.iterrogacao-icon');
    a.style.opacity = '0'
}