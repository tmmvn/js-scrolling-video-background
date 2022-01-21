function videoScroller()
  {
    let lastScroll = 0
    const video = document.getElementById("bg-vid")
    video.currentTime = 0
    video.pause()
    window.addEventListener("scroll", function()
    {
      const video = document.getElementById("bg-vid")
      const framerate = 1 / 25
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop
      if (currentScroll > lastScroll)
        {
          video.currentTime += framerate
        }
      else
        {
          video.currentTime -= framerate
        }
      if (video.currentTime < 0)
        {
          video.currentTime = video.duration
        }
      if (video.currentTime > video.duration)
        {
          video.currentTime = 0
        }
      lastScroll = currentScroll
    }, false)
  }

window.addEventListener("load", videoScroller, false)
