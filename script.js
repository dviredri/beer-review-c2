function addBeer(name, category, rating) {
  beers.push({
    name,
    category,
    rating
  });

};

$('.btn').click(function() {

  addBeer($('.category-input').val(), $('.beer-input').val(), $('.rating-input').val());
  $('.category-input').val("");
  $('.beer-input').val("");
  $('.rating-input').val("");
  updateBeers();
});

var beers = [];

function updateBeers() {
  $(".beers-list").empty()
  for (i = 0; i < beers.length; i++)
    $(".beers-list").append("<li>" + beers[i].name+" "+beers[i].category+"     This Beer rating is:"+ beers[i].rating + '</li>');

}
