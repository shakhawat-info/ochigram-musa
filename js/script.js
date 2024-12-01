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



// poster start

let postbtn = document.querySelector('.postbtn');
let postText = document.querySelector('#postText')
function post(){
  if(postText.value){
    postbtn.style.background = 'rgb(255, 4, 92)'
    postbtn.style.color = '#fff'
  }
  else{
    postbtn.style.background = 'rgba(101, 104, 108, 0.2)'
    postbtn.style.color = '#000'
  }
}



// poster end