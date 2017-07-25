let SyMoive = document.getElementById('Sy_moive');
let DzMovie = document.getElementById('Dz_movie');
let RmMovie = document.getElementById('Rm_movie');
let top50 = document.getElementById('top50');
let usaMovie = document.getElementById('usa_movie');
let owlDemo = document.getElementById('owl-demo');
let loading = document.getElementById('loading');
console.log(SyMoive);
var jsonp = fetch({
  type: 'jsonp',
  url: 'https://api.douban.com/v2/movie/coming_soon',
  data:{
    "title":"即将上映的电影",
    "start":0,
  },
  timeout:10000
})
.init()
.then((data) => {
  //drawingZxData(data,owlDemo,6)
  drawingData(data,SyMoive,6);
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
    drawingData(data,DzMovie,6);
    drawingData(data,top50,6);
    drawingZxData(data,owlDemo,data.subjects.length)
    fetch({
      type: 'jsonp',
      url: 'https://api.douban.com/v2/movie/us_box',
      data:{
        "title":"豆瓣电影北美票房榜",
        "start":0,
      },
      timeout:10000
    })
    .init()
    .then((data) => {
      loading.style.display = 'none';
      drawingDataP(data,RmMovie,6);
      drawingDataPX(data,usaMovie,10)
      //console.log(data.subjects[0].subject.images);
      //console.log(data);
    })
  })
})
console.log(jsonp);
function drawingData(data,ele,num) {
    var str = '';
    for(var i=0;i<num;i++){
      // console.log(data.subjects[i].subject.images.large);
      // console.log(data.subjects[i].title);
      // console.log(data.subjects[i].year);
      // console.log(data.subjects.length);
      str += `<div class="w3l-movie-gride-agile">
        <a href="single.html?id=${data.subjects[i].id}" class="hvr-sweep-to-bottom"><img src="${data.subjects[i].images.large}" style = "width:250px;height:280px;display:block" class="img-responsive" alt=" ">
          <div class="w3l-action-icon"><i class="fa fa-play-circle-o" aria-hidden="true"></i></div>
        </a>
        <div class="mid-1 agileits_w3layouts_mid_1_home">
          <div class="w3l-movie-text">
            <h6><a href="single.html" style="white-space:nowrap;text-overflow:ellipsis">${data.subjects[i].title}</a></h6>
          </div>
          <div class="mid-2 agile_mid_2_home">
            <p>${data.subjects[i].year}</p>
            <div class="block-stars">
              <ul class="w3l-ratings">
                <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-star-o" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-star-o" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-star-o" aria-hidden="true"></i></a></li>
              </ul>
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
        <div class="ribben">
          <p>NEW</p>
        </div>
      </div>`
    }
    ele.innerHTML = str;
}

function drawingDataP(data,ele,num) {
    var str = '';
    for(var i=0;i<num;i++){
      // console.log(data.subjects[i].images.large);
      // console.log(data.subjects[i].title);
      // console.log(data.subjects[i].year);
      // console.log(data.subjects.length);
      str += `<div class="w3l-movie-gride-agile">
        <a href="single.html?id=${data.subjects[i].subject.id}" class="hvr-sweep-to-bottom"><img src="${data.subjects[i].subject.images.large}" style = "width:250px;height:280px;display:block" class="img-responsive" alt=" ">
          <div class="w3l-action-icon"><i class="fa fa-play-circle-o" aria-hidden="true"></i></div>
        </a>
        <div class="mid-1 agileits_w3layouts_mid_1_home">
          <div class="w3l-movie-text">
            <h6><a href="single.html?id=${data.subjects[i].subject.id}">${data.subjects[i].subject.title}</a></h6>
          </div>
          <div class="mid-2 agile_mid_2_home">
            <p>${data.subjects[i].subject.year}</p>
            <div class="block-stars">
              <ul class="w3l-ratings">
                <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-star-o" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-star-o" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-star-o" aria-hidden="true"></i></a></li>
              </ul>
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
        <div class="ribben">
          <p>NEW</p>
        </div>
      </div>`
    }
    ele.innerHTML = str;
}
function drawingDataPX(data,ele,num) {
    var str = '';
    for(var i=0;i<num;i++){
      // console.log(data.subjects[i].images.large);
      // console.log(data.subjects[i].title);
      // console.log(data.subjects[i].year);
      // console.log(data.subjects.length);
      str += `<div class="col-md-2 w3l-movie-gride-agile requested-movies">
              <a href="single.html?id=${data.subjects[i].subject.id}" class="hvr-sweep-to-bottom"><img src="${data.subjects[i].subject.images.large}" title="Movies Pro" class="img-responsive" style = "width:250px;height:280px;display:block" alt=" ">
                <div class="w3l-action-icon"><i class="fa fa-play-circle-o" aria-hidden="true"></i></div>
              </a>
                <div class="mid-1 agileits_w3layouts_mid_1_home">
                  <div class="w3l-movie-text">
                    <h6><a href="single.html?id=${data.subjects[i].subject.id}">${data.subjects[i].subject.title}</a></h6>
                  </div>
                  <div class="mid-2 agile_mid_2_home">
                    <p>${data.subjects[i].subject.year}</p>
                    <div class="block-stars">
                      <ul class="w3l-ratings">
                        <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-star-o" aria-hidden="true"></i></a></li>
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

    ele.innerHTML = str;
}
function drawingZxData(data,ele,num) {
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
    // str +=`<div class="clearfix"></div>`;
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
