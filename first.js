function loadcoupons()
{
    document.getElementById("coupon").style.visibility='visible';
}
function closecoupon()
{
    document.getElementById("coupon").style.visibility='hidden';
}
function changeMode()
{
  let mybody=document.body;
  mybody.classList.toggle("mydark");
}