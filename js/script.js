// nav start
const NavList = document.querySelectorAll('.navIcons li');

NavList.forEach((item) => {
  item.addEventListener('click', function () {
    NavList.forEach((deactive) => deactive.classList.remove('active'));
    this.classList.add('active');
  });
});
// nav end




let searchForm = document.querySelector('.searchForm');
searchForm.addEventListener('click' , (event)=>{
  searchForm.classList.add('FormExtend');
  event.stopPropagation();
})

document.querySelector('body').addEventListener('click' , ()=>{
  searchForm.classList.remove('FormExtend');

})