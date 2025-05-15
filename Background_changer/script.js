const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    switch (e.target.id) {
      case 'grey':
        body.style.background = e.target.id;
      case 'white':
        body.style.background = e.target.id;
      case 'blue':
        body.style.background = e.target.id;
      case 'yellow':
        body.style.background = e.target.id;
    }
  });

  // button.addEventListener('click', function (e) {
  //   if (e.target.id === 'grey') {
  //     body.style.background = e.target.id;
  //   }
  //   if (e.target.id === 'white') {
  //     body.style.background = e.target.id;
  //   }
  //   if (e.target.id === 'yellow') {
  //     body.style.background = e.target.id;
  //   }
  //   if (e.target.id === 'blue') {
  //     body.style.background = e.target.id;
  //   }
});
