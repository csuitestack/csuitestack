// Google Analytics injection script
(function() {
  // Create and inject gtag script
  var gtagScript = document.createElement('script');
  gtagScript.async = true;
  gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-JLSTC7K148';
  document.head.appendChild(gtagScript);

  // Create and inject gtag config
  var configScript = document.createElement('script');
  configScript.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-JLSTC7K148');
  `;
  document.head.appendChild(configScript);
})();
