var options = {
  valueNames: [ 'name', { attr: 'src', name: 'image'},'template_id', "preview_url", "restaurant", "store", "blog", "professional_services" , "community_education", "travel", "wedding", "event", "portfolio", "local_business", "cool_factor"],
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
  storeIsTrue(item) {
    return this.store === false || (this.store === true && item.values().store === "true");
  },
  portfolioIsTrue(item) {
      return this.portfolio === false || (this.portfolio === true && item.values().portfolio === "true");
  },
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


function getChecked(obj) {
  let checked = [];
  Object.entries(obj).forEach(x => {
    if (x[1] === true || x[1] === 'true') {
      checked.push(x[0]);
    }
  });
  return checked;
}

function checkCollections(itm) {
    let checkedFilter = getChecked(filterObject).filter(x => {
        if (x !== "portfolio" && x !== "store" && x !== "blog") {
            return x
        }
    });
    console.log(checkedFilter);
    let itemTrueValues = getChecked(itm.values()).filter(x => {
        if (x !== "portfolio" && x !== "store" && x !== "blog") {
            return x
        }
    });
    console.log(itemTrueValues);
    if (checkedFilter.length === 0) {
        return true
    } else {
        const match = checkedFilter.some(fltr=> itemTrueValues.includes(fltr))
        return match > 0 ? true : false;
    }
}

function filterTemplates() {
   console.log(filterObject, "filtering");
  templateList.filter(function(item) {
        
       if (
           filterObject.blogIsTrue(item) &&
           filterObject.portfolioIsTrue(item) &&
           filterObject.storeIsTrue(item) &&
           checkCollections(item)
       ) {
           console.log('passes if')
      return true;
    } else {
      return false;
    }
  });
  templateList.sort('cool_factor', { order: "asc" });
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




(function (document, window, undefined) {
    'use strict';
    if (data.device === "desktop") {
        var tooltip = document.querySelectorAll('.tooltip');
        [].forEach.call(tooltip, function(el) {
        // Create tooltip element
        var tooltipBox = document.createElement('div');
        var tooltipText = document.createElement('p');
        
        // Set tooltip text
        tooltipText.textContent = el.getAttribute('data-tooltip-text');
        tooltipText.classList.add('tooltip-text');
        tooltipBox.classList.add('tooltip-box');
        
        // Add tooltip to body on mouse over
        el.addEventListener('mouseover', function() {
            document.body.appendChild(tooltipBox);
            tooltipBox.appendChild(tooltipText);
        }, false);
        
        // Remove tooltip on mouseout
        el.addEventListener('mouseout', function() {
            document.body.removeChild(tooltipBox);
        }, false);
      
        // Attach the tooltip to the mouse cursor
        el.addEventListener('mousemove', function(e) {
            tooltipBox.style.top = (e.pageY + 20) + 'px';
            tooltipBox.style.left = (e.pageX + 20) + 'px';
            }, false);
        });
    }
})(document, window);
