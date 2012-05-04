// remap jQuery to $
(function($){})(window.jQuery);


/* trigger when page is ready */
$(document).ready(function (){

    $('form.search input').focus(function() {
        $(this).addClass('active');
        if (this.value == this.defaultValue){ 
            this.value = '';
        }
        if(this.value != this.defaultValue){
            this.select();
        }
    });
    
    $('form.search input').blur(function() {
        $(this).removeClass('active');
        if ($.trim(this.value) == ''){
            this.value = (this.defaultValue ? this.defaultValue : '');
        }
    });

});


/* optional triggers

$(window).load(function() {
	
});

$(window).resize(function() {
	
});

*/