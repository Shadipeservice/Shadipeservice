
function waLink(message){
  const phone = "919630609127";
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
document.querySelectorAll("[data-wa]").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const message = btn.dataset.wa || "नमस्ते, मुझे Shadi Pe Service की मशीनों की जानकारी और उपलब्धता चाहिए।";
    window.open(waLink(message), "_blank");
  });
});
const qr = document.getElementById("catalogQr");
if(qr){
  const url = window.location.href.split("#")[0];
  qr.src = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(url)}`;
}
