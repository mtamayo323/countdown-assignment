function countDown(num) {
  let timer = setInterval(function() {
    num--;
    if (num <= 0) {
      clearInterval(timer)
      console.log('DONE!')
    } else {
      console.log(num)
    }
  })
}