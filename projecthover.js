 $(document).ready(function() {
     
    $('.tythoughts').mouseenter(function() {
        $('.tythoughts').fadeTo('fast', 0.5);
        $('.tythoughtscap').fadeTo('fast', 1);
    });
     
      $('.tythoughts').mouseleave(function() {
        $('.tythoughts').fadeTo('fast', 1);
        $('.tythoughtscap').fadeTo('fast', 0);
        
});
     
     });

 $(document).ready(function() {
     
    $('.calcpic').mouseenter(function() {
        $('.calcpic').fadeTo('fast', 0.5);
        $('.calccap').fadeTo('fast', 1);
    });
     
      $('.calcpic').mouseleave(function() {
        $('.calcpic').fadeTo('fast', 1);
        $('.calccap').fadeTo('fast', 0);
        
});
     
     });