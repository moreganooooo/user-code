$w.onReady(function () {
  // 1. Show the button after 23s (make sure it's hidden on load)
  setTimeout(() => {
    $w('#button1').show('fade', { duration: 1000 });
  }, 23000);

  // 2. On button click, fade out intro and fade in next content
  $w('#button1').onClick(() => {
    $w('#intro').hide('fade', { duration: 1000 })
      .then(() => {
        $w('#aftervideo').show('fade', { duration: 1000 });
      });
  });
});