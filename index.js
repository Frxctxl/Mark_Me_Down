let info = ['Title,', 'Description', 'Installation Process', 'Usage', 'Contributers', 'Testing Process', 'Your Contact Information'];

function acceptInfo(index) {
  if (index == 5) {
    process.exit();
  }
  console.log(`
Please Enter the ${info[index]}
`);
  acceptInfo(++index);
}
function init() {
  console.log(`
---------------------------
  Welcome To Mark Me Down!
---------------------------
`);
  acceptInfo(0);
}

init();
