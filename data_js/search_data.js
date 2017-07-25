let owlDemo = document.getElementById('owl-demo');
let genreShow = document.getElementById('genreShow');
let imgloading = document.getElementById('imgloading');
let genreTitle = document.getElementById('genre_title');
let loading = document.getElementById('loading');
genreShow.innerHTML = '';
var haskey = window.location.search.substr(1).split('=')[1];
let genreValue = decodeURIComponent(haskey);
let str = 'top250';
var jsonp = fetch({
  type: 'jsonp',
  url: 'https://api.douban.com/v2/movie/search',
  data:{
    "q":"" +genreValue +""
  },
  timeout:10000
})
.init()
.then((data) => {
  console.log(data);
  genre(data,genreShow,data.subjects.length)
  fetch({
    type: 'jsonp',
    url: 'https://api.douban.com/v2/movie/top250',
    data:{
      "title":"top250",
      "start":0,
    },
    timeout:10000
  })
  .init()
  .then((data) => {
    //console.log(data);
    loading.style.display = 'none';
    drawingZxData1(data,owlDemo,data.subjects.length);

  })
})
function genre(data,ele,num) {
  genreTitle.innerHTML = `共找到${num}部电影 `;
  var str = '';
  for(var i=0;i<num;i++){
    str +=`<div class="col-md-2 w3l-movie-gride-agile requested-movies">
              <a href="single.html?id=${data.subjects[i].id}" class="hvr-sweep-to-bottom"><img src="${data.subjects[i].images.large}" title="Movies Pro" class="img-responsive" alt=" " style = "width:250px;height:280px;display:block">
                <div class="w3l-action-icon"><i class="fa fa-play-circle-o" aria-hidden="true"></i></div>
              </a>
                <div class="mid-1 agileits_w3layouts_mid_1_home">
                  <div class="w3l-movie-text">
                    <h6><a href="single.html?id=${data.subjects[i].id}">${data.subjects[i].title}</a></h6>
                  </div>
                  <div class="mid-2 agile_mid_2_home">
                    <p>${data.subjects[i].year}</p>
                    <div class="block-stars">
                      <ul class="w3l-ratings">
                        <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-star-half-o" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-star-o" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-star-o" aria-hidden="true"></i></a></li>
                      </ul>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                </div>
              <div class="ribben one">
                <p>NEW</p>
              </div>
          </div>`
  }
  str += `<div class="clearfix"></div>`;
  ele.innerHTML = str;
}
function drawingZxData1(data,ele,num) {
    var str = '';
    for(var i=0;i<num;i++){
      // console.log(data.subjects[i].images.large);
      // console.log(data.subjects[i].title);
      // console.log(data.subjects[i].year);
      // console.log(data.subjects.length);
      str += `<div class="item" style="width:230px;">
        <div class="w3l-movie-gride-agile w3l-movie-gride-slider ">
          <a href="single.html?id=${data.subjects[i].id}" class="hvr-sweep-to-bottom"><img src="${data.subjects[i].images.large}"  class="img-responsive" alt=" " style = "width:250px;height:280px;display:block" />
            <div class="w3l-action-icon"><i class="fa fa-play-circle-o" aria-hidden="true"></i></div>
          </a>
          <div class="mid-1 agileits_w3layouts_mid_1_home">
            <div class="w3l-movie-text">
              <h6><a href="single.html?id=${data.subjects[i].id}">${data.subjects[i].title}	</a></h6>
            </div>
            <div class="mid-2 agile_mid_2_home">
              <p>${data.subjects[i].year}</p>
              <div class="block-stars">
                <ul class="w3l-ratings">
                  <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-star-half-o" aria-hidden="true"></i></a></li>
                </ul>
              </div>
              <div class="clearfix"></div>
            </div>
          </div>
          <div class="ribben one">
            <p>NEW</p>
          </div>
        </div>
      </div>`;
    }
    ele.innerHTML = str;
    $('#owl-demo').owlCarousel({

		  autoPlay: 3000, //Set AutoPlay to 3 seconds
		  autoPlay : true,
		  navigation :true,

		  items : 5,
		  itemsDesktop : [640,4],
		  itemsDesktopSmall : [414,3]

		});
}
