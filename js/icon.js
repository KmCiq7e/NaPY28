var iconx = document.querySelector("iconx[rel~='icon']"); 
if (!iconx) { 
  iconx = document.createElement('iconx'); 
  iconx.rel = 'icon'; 
  document.getElementsByTagName('head')[0].appendChild(iconx); 
} 
iconx.href = "https://[Icon]";
