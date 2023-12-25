var svgCircle = document.querySelector('.circle svg circle');
  var numsDiv = document.getElementById('nums');

  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      var endPercent = data.percent || 0;
      animate(endPercent);
    })
    .catch(error => {
      console.error('Failed to fetch data:', error);
    });


  animate(45);

  function animate(endPercent) {
    var startPercent = parseInt(numsDiv.textContent) || 0;
    var duration = 2000;
    var startTime;

    function update(time) {
      if (!startTime) startTime = time;

      var progress = (time - startTime) / duration;
      if (progress > 1) progress = 1;

      var currentPercent = startPercent + (endPercent - startPercent) * progress;

      // Оновити текст в середині кола
      numsDiv.textContent = Math.round(currentPercent) + '%';

      // Оновити анімацію кола
      var circumference = 2 * Math.PI * 52;
      var dashOffset = circumference * (1 - currentPercent / 100);
      svgCircle.style.strokeDashoffset = dashOffset;

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }