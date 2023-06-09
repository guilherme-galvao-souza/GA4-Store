export default function initCarrousel(){
  $(".container-banners").slick({
    nextArrow:'.arrow-next',
    prevArrow:'.arrow-prev',
    autoplay: true,
    speed:1000
  })
  $('.card-products').slick({
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 2,
    prevArrow:'.card-prev',
    nextArrow:'.card-next'
  });
}
