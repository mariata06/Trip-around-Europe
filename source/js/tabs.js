var tabItem = function () {
  var tabMenu = document.querySelectorAll(".places__choice-country");
  var tabContent = document.querySelectorAll(".places__card");
  var tabName;
  var countryCards = document.querySelectorAll(".countries__item");

  tabMenu.forEach(function (item) {
    item.addEventListener('click', toggleTabItem)
  })

  countryCards.forEach(function (item) {
    item.addEventListener('click', toggleTabItem)
  })

  function toggleTabItem() {
    tabMenu.forEach(function (item) {
      item.classList.remove("places__choice-country--active")
    });
    this.classList.add("places__choice-country--active");
    tabName = this.getAttribute("data-tab-name");
    selectTabContent(tabName);
  }

  function selectTabContent(tabName) {
    tabContent.forEach(function (item) {
      if (item.classList.contains(tabName)) {
        item.classList.add("card--active")
      } else {
        item.classList.remove("card--active");
      }
    })
  }
};

tabItem();
