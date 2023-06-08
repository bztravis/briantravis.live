import BezierEasing from 'bezier-easing'

const staleSession = sessionStorage.getItem("present");
if (!staleSession) {
  sessionStorage.setItem("present", true)
  setTimeout(() => { window.requestAnimationFrame(step); }, 1000)
  setTimeout(() => { element.style.scrollSnapType = 'y mandatory' }, 3400)
}

const easeIn = BezierEasing(0.2, 0, 0.4, 1)
const fallingEase = BezierEasing(.41, .01, .63, .25)
const bounceEase = BezierEasing(.37, .97, .87, 1)


const element = document.getElementById("contentContainer");
let start, previousTimeStamp;

function step(timeStamp) {
  if (start === undefined) {
    start = timeStamp;
  }
  const elapsed = timeStamp - start;

  if (previousTimeStamp !== timeStamp) {
    if (elapsed < 1500) {
      const count = easeIn(elapsed / 1500) * 100
      // console.log(count)
      element.style.scrollSnapType = 'none';
      element.scrollTop = count;
    }
    else if (elapsed < 1700) {
      const count = fallingEase((1700 - elapsed) / 200) * 100
      // console.log('first', count)
      element.style.scrollSnapType = 'none';
      element.scrollTop = count;
    }
    else if (elapsed < 2000) {
      const count = bounceEase((elapsed - 1700) / 300) * 20
      // console.log('second', count)
      element.style.scrollSnapType = 'none';
      element.scrollTop = count;
    }
    else if (elapsed < 2300) {
      const count = bounceEase((2300 - elapsed) / 300) * 20
      // console.log('third', count)
      element.style.scrollSnapType = 'none';
      element.scrollTop = count;
    }
  }

  if (elapsed < 2300) {
    // Stop the animation after 2 seconds
    previousTimeStamp = timeStamp;
    window.requestAnimationFrame(step);
  }
}



