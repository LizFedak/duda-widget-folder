const filters = {
  clearAll() {
    this.types = [];
    this.makes = [];
    this.makeConditionFalse();
    this.makeAvailabilityFalse();
    
    this.updateMaxPrice(1000000);
    var checkBoxes = document.querySelectorAll('input[type=checkbox]:checked');
    console.log(checkBoxes);
    checkBoxes.forEach(x => x.checked = false);
    
    
    $('#priceFilter option[value=100000]').attr('selected','selected');
    
    
    itemList.filter();
    console.log(filterObject);
  },