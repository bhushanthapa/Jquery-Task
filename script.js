$(document).ready(function() {
    
    // Jab dot pe click ho
    $('.dot').click(function() {
        
        // 1. Pata karo kaunse number ka dot click hua hai (0, 1, 2, 3)
        var n = $(this).index(); 
        
        // 2. Logic: Slide ko kitna upar bhejna hai? (Number * Height)
        var gap = -(n * 400); 

        // 3. Wrapper ki 'top' position change kardo
        $('.wrapper').css('top', gap + 'px');

        // 4. Dot color change
        $('.dot').removeClass('active');
        $(this).addClass('active');
    });
      //number remover from string
        myString = "--Hi,GoodMorning 12 James 43 bond 007 zero zero seve--";
        newString = myString.replace(/\d+/g, '');
        console.log(newString);
   

});