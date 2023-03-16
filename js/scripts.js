$(document).ready(function() {
  // Controla cliques no botão
  let displayChange = Boolean

  $('#btn').click(() => {
    if (displayChange) {
      $('.result').css('display', 'flex')
      displayChange = false
    } else {
      $('.result').css('display', 'none')
      displayChange = true
    }
  })
})
