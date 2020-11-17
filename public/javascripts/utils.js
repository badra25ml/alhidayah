/*========== Click Show Sub Menu ==========*/
 
$('#navbarSupportedContent a').on('click','.nav-plus',function(){
  console.log('test')
  if($(this).hasClass('nav-minus') == false){
      $(this).parent('a').parent('li').find('> ul').slideDown();
      $(this).addClass('nav-minus');
  }else{
      $(this).parent('a').parent('li').find('> ul').slideUp();
      $(this).removeClass('nav-minus');
  }
  return false;
});
