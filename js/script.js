const thisPage = this;

thisPage.dom = {};
thisPage.dom.navList = document.querySelector(select.containerOf.navList);
thisPage.dom.managerContainer = document.querySelector(select.containerOf.manager);
thisPage.dom.navContainer = document.querySelector(select.containerOf.nav);
// console.log(thisPage.dom);

document.querySelector(select.button.hamburger).addEventListener('click', function (event) {
  event.preventDefault();
  toggleMenu();
});

function toggleMenu() {
  for (let element in thisPage.dom) {
    //console.log(thisPage.dom[element]);
    thisPage.dom[element].classList.toggle('nav-mobile');
    //console.log("Działam");
  }
};

const largeDevice = window.matchMedia("(min-width: 1200px)");

largeDevice.addListener(handleDeviceChange);

function handleDeviceChange(event) {
  console.log('DZIAŁA');
  if (!event.matches) {
    document.querySelector('.nav-main').classList.add('nav-mobile');
  }
}

handleDeviceChange(largeDevice);