function createIframe(src, type, email) {
    const iframe = document.createElement('iframe');
    if(type && email)
      iframe.src= `${src}/${type}/${email}`
	else
		iframe.src = src
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.frameBorder = '0';
    iframe.scrolling = 'no';
    iframe.style.cssText = 'min-width: 100%; height: 1290px;';

    // Append the iframe to the body or any other container
    document.getElementById('demo-creator').appendChild(iframe);
  }
  function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }

  // Example usage:
  const iframeSrc = "https://customgpt-hamza-9589769b2c8c.herokuapp.com"
  const iframeType = getQueryParam('type')
  const iframeEmail = getQueryParam('email')
  // Create and append the iframe with static values
  createIframe(iframeSrc, iframeType, iframeEmail);