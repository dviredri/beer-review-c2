function addBeer(name, category) {
  beers.push({
    name,
    category
  });

};

$('.btn').click(function() {

  addBeer($('.category-input').val(), $('.beer-input').val());
  updateBeers();
});

var beers = [];

function updateBeers() {
  $(".beers-list").empty()
  for (i = 0; i < beers.length; i++)
    $(".beers-list").append("<li>" + beers[i].name+" "+beers[i].category + '<input id="input'+i+'" type="number" />'+

    "</li>"+"<li>"+"This Beer rating is:"+ratings+"</li>"+'<li>'+'<button class="btnAddRating">submit Rating</button>'+'</li>');

}

var ratings="not rated"
$('.body').on('click', '.btnAddRating', function() {

  var a=
  console.log(a);
});
