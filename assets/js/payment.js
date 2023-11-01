$(document).ready(function(){
    $('input[type="radio"]').click(function(e){
       let  pay = $('input[name="payment"]:checked').val()
        if(pay == 'qrcode'){
            $('#paymentButton').attr('href', './qrcode.html')
        }else if(pay == 'payu'){
            $('#paymentButton').attr('href', 'https://payumoney.com')
        }
    });
});
