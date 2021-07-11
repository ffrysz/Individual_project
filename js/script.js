const thisPage = this;

thisPage.dom = {};
thisPage.dom.navList = document.querySelector(select.containerOf.navList);
thisPage.dom.managerContainer = document.querySelector(select.containerOf.manager);
thisPage.dom.navContainer = document.querySelector(select.containerOf.nav);
thisPage.dom.navHeaderMobile = document.querySelector(select.containerOf.navHeaderMobile);

document.querySelector(select.button.hamburger).addEventListener('click', function (event) {
  event.preventDefault();
  toggleMenu();
});

function toggleMenu() {
  for (let element in thisPage.dom) {
    thisPage.dom[element].classList.toggle('nav-mobile');
  }
};

const largeDevice = window.matchMedia("(min-width: 1200px)");

largeDevice.onchange = handleDeviceChange;

function handleDeviceChange(event) {
  if (!event.matches) {
    for (let element in thisPage.dom) {
      thisPage.dom[element].classList.add('nav-mobile');
    }
  }
  if (event.matches) {
    for (let element in thisPage.dom) {
      thisPage.dom[element].classList.remove('nav-mobile');
    }
  }
};

handleDeviceChange(largeDevice);

function closeModal() {
  document.getElementById('overlay').classList.remove('show');
}

document.querySelectorAll('#overlay .js--close-modal').forEach(function (btn) {
  btn.addEventListener('click', function (event) {
    event.preventDefault();
    closeModal();
  })
});

document.querySelector('#overlay').addEventListener('click', function (event) {
  if (event.target === this) {
    closeModal();
  }
});

document.addEventListener('keyup', function (event) {
  if (event.keyCode === 27) {
    closeModal();
  }
});

const ctx = document.getElementById('myChart').getContext('2d');

const chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
    datasets: [{
      label: "Signups",
      backgroundColor: '#8DBEC8',
      borderColor: '#8DBEC8',
      data: [52, 51, 41, 94, 26, 6, 72, 9, 21, 88],
    },
    {
      label: "FTD",
      backgroundColor: '#F29E4E',
      borderColor: '#F29E4E',
      data: [6, 72, 1, 0, 47, 11, 50, 44, 63, 76],
    },
    {
      label: "Earned",
      backgroundColor: '#71B374',
      borderColor: '#71B374',
      data: [59, 49, 68, 90, 67, 41, 13, 38, 48, 48],
      hidden: true,
    }]
  },
  options: {
    plugins: {
      legend: {
        labels: {
          boxWidth: 30,
          boxHeight: 25,
          padding: 20,
          usePointStyle: true,
          pointStyle: 'circle',
        },
      },
    },
  },
});
