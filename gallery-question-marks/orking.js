$("input[type='checkbox']").change(function() {
  let img = `${this.id}Img`;
  let option = `${this.id}_option`;
  updateCheckbox(img, option, this.checked);
  if (this.checked) {
      console.log(this);
      filterObject.makeItemTrue(this.id);
  } else {
       filterObject.makeItemFalse(this.id);
  }
  console.log(filterObject);
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

function clearAll() {
  filterObject.clearAll();
}

var options = {
valueNames: [ 'name', { attr: 'src', name: 'image'},'template_id', "preview_url", "restaurant", "store", "blog", "professional_services" , "community", "travel", "wedding", "event", "local_business", "top_rated", "recently_added", "search_filter", "date_added_sort"],
item: `<li class="template-card-li">
<div class="template-card">
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
      checkBoxes.forEach(x => {
          console.log(x);
          let img = `${x.id}Img`;
          let option = `${x.id}_option`;
          console.log(img, option);
          updateCheckbox(img, option, false);
          x.checked = false;
      });
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
  searchFilterIsTrue(item) {
      return this.search_filter === false || (this.search_filter === true && item.values().search_filter === "true");
  },
  recentlyAddedIsTrue(item) {
      return this.recently_added === false || (this.recently_added === true && item.values().recently_added === "true");
  },
  topRatedIsTrue(item) {
      return this.top_rated === false || (this.top_rated === true && item.values().top_rated === "true");
  },
}

function filterMaker() {
  return Object.assign({
      restaurant: false,
      store: false,
      blog: false,
      professional_services: false,
      community: false,
      travel: false,
      wedding: false,
      event: false,
      local_business: false,
      top_rated: false,
      recently_added: false,
      search_filter: false,
}, filters);
}

let filterObject = filterMaker();



$( "#clearAll" ).click(function() {
clearAll();
});



//  CHECK ALL BELOW

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
      if (x !== "search_filter" && x !== "store" && x !== "blog" && x !== "recently_added" && x !== "top_rated") {
          return x
      }
  });
  console.log(checkedFilter);
  let itemTrueValues = getChecked(itm.values()).filter(x => {
      if (x !== "search_filter" && x !== "store" && x !== "blog" && x !== "recently_added" && x !== "top_rated") {
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
         filterObject.storeIsTrue(item) &&
         filterObject.recentlyAddedIsTrue(item) &&
         filterObject.topRatedIsTrue(item) &&
         filterObject.searchFilterIsTrue(item) &&
         checkCollections(item)
     ) {
         console.log('passes if')
    return true;
  } else {
    return false;
  }
});
templateList.sort('date_added_sort', { order: "asc" });
}