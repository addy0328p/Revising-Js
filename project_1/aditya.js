const but=document.querySelectorAll('.button');
const bod=document.querySelector('body');
but.forEach(function(button)
{
    button.addEventListener('click',function(e)
{
    console.log(e.taget)
    if(e.target.id=='grey')
        bod.style.backgroundColor=e.target.id;
    if (e.target.id === 'white') {
        bod.style.backgroundColor = e.target.id;
      }
      if (e.target.id === 'blue') {
        bod.style.backgroundColor = e.target.id;
      }
      if (e.target.id === 'yellow') {
        bod.style.backgroundColor = e.target.id;
      }
      if (e.target.id === 'orange') {
        bod.style.backgroundColor = e.target.id;
      
      }});
});