function createIframe(e,t,a){let r=document.createElement("iframe");t&&a?r.src=`${e}/${t}/${a}`:r.src=e,r.width="100%",r.height="100%",r.frameBorder="0",r.scrolling="no",r.style.cssText="min-width: 100%; height: 1290px;",document.getElementById("demo-creator").appendChild(r)}function getQueryParam(e){let t=new URLSearchParams(window.location.search);return t.get(e)}const iframeSrc="https://customgpt-hamza-9589769b2c8c.herokuapp.com",iframeType=getQueryParam("type"),iframeEmail=getQueryParam("email");createIframe("https://tools.customgpt.ai",iframeType,iframeEmail);
