$('input#event:checkbox').change(function() {
  updateCheckbox("eventImg", "events_option", this.checked)
});

$('input#wedding:checkbox').change(function() {
  updateCheckbox("weddingImg", "wedding_option", this.checked)
});

$('input#travel:checkbox').change(function() {
  updateCheckbox("travelImg", "travel_option", this.checked)
});

$('input#community_education:checkbox').change(function() {
  updateCheckbox("community_educationImg", "community_education_option", this.checked)
});

$('input#local_business:checkbox').change(function() {
  updateCheckbox("local_businessImg", "local_business_option", this.checked)
});

$('input#professional_services:checkbox').change(function() {
  updateCheckbox("professional_servicesImg", "professional_services_option", this.checked)
});

$('input#restaurant:checkbox').change(function() {
  updateCheckbox("restaurantImg", "restaurant_option", this.checked)
});

$('input#store:checkbox').change(function() {
  updateCheckbox("storeImg", "store_option", this.checked)
});
$('input#search_filter:checkbox').change(function() {
  updateCheckbox("search_filterImg", "search_filter_option", this.checked)
});
$('input#blog:checkbox').change(function() {
  updateCheckbox("blogImg", "blog_option", this.checked)
});



$('input#top_rated:checkbox').change(function() {
  updateCheckbox("top_ratedImg", "top_rated_option", this.checked)
});
$('input#recently_added:checkbox').change(function() {
  updateCheckbox("recently_addedImg", "recently_added_option", this.checked)
});

function updateCheckbox(imageId, checkmarkId, checked) {
  if (checked) {
    let im = document.createElement('img');
    im.id = imageId;
    im.src = "https://irp.cdn-website.com/621ddc81/dms3rep/multi/noun_checkmark_1296066-2cafe7f3.svg";
    im.style.width = "30px";
    im.style.height = "30px";
    im.classList.add('fancyB');
    let mydiv = document.getElementById(checkmarkId);
    mydiv.style.border = '2px #B80084 solid';
    mydiv.style.color = "#B80084";
    mydiv.prepend(im);
  } else {
    let myobj = document.getElementById(imageId);
    myobj.remove();
    let mydiv = document.getElementById(checkmarkId);
    mydiv.style.border = '2px #E0E0E0 solid';
    mydiv.style.color = "#6D6D6D";
  }
}