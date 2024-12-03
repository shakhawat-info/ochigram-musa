// nav start
const NavList = document.querySelectorAll('.navIcons li');

NavList.forEach((item) => {
  item.addEventListener('click', function () {
    NavList.forEach((deactive) => deactive.classList.remove('active'));
    this.classList.add('active');
  });
});
// nav end

// search box start
let searchForm = document.querySelector('.searchForm');
let logo = document.querySelector('.logo');
let foot = document.querySelector('#foot');
searchForm.addEventListener('click' , (event)=>{
  searchForm.classList.add('FormExtend');
  logo.style.display = 'none'
  event.stopPropagation();
  foot.stopPropagation();
})

document.querySelector('body').addEventListener('click' , ()=>{
  searchForm.classList.remove('FormExtend');
  logo.style.display = 'inline-block'
  
})

// search box end


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


let postoptions = document.querySelector('.postoptions');
function postoptionshow(){
  postoptions.style.right = '0' 
}
function postoptionclose(){
  postoptions.style.right = '-300px' 
}



let plusPost = document.querySelector('.plusPost');
let poster = document.querySelector('#poster');
let posterClose = document.querySelector('.posterClose');

plusPost.addEventListener('click' , ()=>{
  poster.classList.add('showPoster');
})
posterClose.addEventListener('click' , ()=>{
  poster.classList.remove('showPoster');
})

// poster end