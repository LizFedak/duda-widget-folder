var options = {
  valueNames: [ 'name', { attr: 'src', name: 'image'},'template_id', "preview_url", "restaurant", "store", "blog", "professional_services" , "community_education", "travel", "wedding", "event", "portfolio", "local_business"],
  item: `<li class="animal-card-list">
  <div class="animal-card">
   <div class="img-container"><img class="image" alt="template"></div>
    
    </div>
    <p class="template-name name"></p>
</li>`
};


var values = data.config.templates;
var templateList = new List('templates', options, values);

const filters = {
  clearAll() {
    var checkBoxes = document.querySelectorAll('input[type=checkbox]:checked');
    checkBoxes.forEach(x => x.checked = false);
    filterObject = filterMaker();
    templateList.filter();
  },
  makeItemTrue(key) {
    this[key] = true;
  },
  makeItemFalse(key) {
      this[key] = false;
  },
  blogIsTrue(item) {
    return this.blog === false || (this.blog === true && item.values().blog === "true");
  },
  restaurantIsTrue(item) {
    return this.restaurant === false || (this.restaurant === true && item.values().restaurant === "true");
  },

  storeIsTrue(item) {
    return this.store === false || (this.store === true && item.values().store === "true");
  },
  professional_servicesIsTrue(item) {
    return this.professional_services === false || (this.professional_services === true && item.values().professional_services === "true");
  },

  community_educationIsTrue(item) {
    return this.community_education === false || (this.community_education === true && item.values().community_education === "true");
  },
  travelIsTrue(item) {
    return this.travel === false || (this.travel === true && item.values().travel === "true");
  },
  weddingIsTrue(item) {
      return this.wedding === false || (this.wedding === true && item.values().wedding === "true");
  },
  eventIsTrue(item) {
      return this.event === false || (this.event === true && item.values().event === "true");
  },
  portfolioIsTrue(item) {
      return this.portfolio === false || (this.portfolio === true && item.values().portfolio === "true");
  },
  local_businessIsTrue(item) {
      return this.local_business === false || (this.local_business === true && item.values().local_business === "true");
  }
}
  


function filterMaker() {
  return Object.assign({
    restaurant: false,
    store: false,
    blog: false,

    professional_services: false,
    community_education: false,
    travel: false,
    wedding: false,
    event: false,
    portfolio: false,
    local_business: false
  }, filters);
}

let filterObject = filterMaker();

function filterTemplates() {
   console.log(filterObject, "filtering");
  templateList.filter(function(item) {
       if (
           filterObject.blogIsTrue(item) &&
           filterObject.restaurantIsTrue(item) &&
           filterObject.storeIsTrue(item) &&
           filterObject.professional_servicesIsTrue(item) &&
           filterObject.community_educationIsTrue(item) &&
           filterObject.travelIsTrue(item) &&
           filterObject.weddingIsTrue(item) &&
           filterObject.eventIsTrue(item) && 
           filterObject.portfolioIsTrue(item) &&
           filterObject.local_businessIsTrue(item)
       ) {
      return true;
    } else {
      return false;
    }
  });
}

filterTemplates();

function clearAll() {
  filterObject.clearAll();
}

$('input.blog:checkbox').change(function() {
  if (this.checked) {
    filterObject.makeItemTrue("blog");
  } else {
    filterObject.makeItemFalse("blog");
  }
    filterTemplates();
});

$('input.restaurant:checkbox').change(function() {
  if (this.checked) {
    filterObject.makeItemTrue("restaurant");
  } else {
    filterObject.makeItemFalse("restaurant");
  }
    filterTemplates();
});

$('input.store:checkbox').change(function() {
  if (this.checked) {
    filterObject.makeItemTrue("store");
  } else {
    filterObject.makeItemFalse("store");
  }
    filterTemplates();
});


$('input.professional_services:checkbox').change(function() {
if (this.checked) {
  filterObject.makeItemTrue("professional_services");
} else {
  filterObject.makeItemFalse("professional_services");
}
  filterTemplates();
});

$('input.community_education:checkbox').change(function() {
if (this.checked) {
  filterObject.makeItemTrue("community_education");
} else {
  filterObject.makeItemFalse("community_education");
}
  filterTemplates();
});



$('input.travel:checkbox').change(function() {
if (this.checked) {
  filterObject.makeItemTrue("travel");
} else {
  filterObject.makeItemFalse("travel");
}
  filterTemplates();
});



$('input.wedding:checkbox').change(function() {
if (this.checked) {
  filterObject.makeItemTrue("wedding");
} else {
  filterObject.makeItemFalse("wedding");
}
  filterTemplates();
});


$('input.event:checkbox').change(function() {
if (this.checked) {
  filterObject.makeItemTrue("event");
} else {
  filterObject.makeItemFalse("event");
}
  filterTemplates();
});



$('input.portfolio:checkbox').change(function() {
if (this.checked) {
  filterObject.makeItemTrue("portfolio");
} else {
  filterObject.makeItemFalse("portfolio");
}
  filterTemplates();
});


$('input.local_business:checkbox').change(function() {
    console.log("local");
if (this.checked) {
  filterObject.makeItemTrue("local_business");
} else {
  filterObject.makeItemFalse("local_business");
}
  filterTemplates();
});





$( "#clearAllTemplatesFilters" ).click(function() {
  clearAll();
});
