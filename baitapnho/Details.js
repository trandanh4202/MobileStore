
// Đóng mở nút giỏ hàng
document.getElementById("showcart").style.display="none";
function showcart()
            {
              var x= document.getElementById("showcart")
              if(x.style.display=="block")
              {
                  x.style.display="none";
              }
              else
              {
                  x.style.display="block"; 
              }
          }




/*---------------------------SanPhamDetails------------------------------------*/
const Sanpham = JSON.parse(localStorage.getItem('danhsachsanpham'))
const currenIndex = localStorage.getItem('currentDetails')

//hàm nhấn img sẽ chuyển qua trang details.html
// var imgdetail = document.querySelectorAll(".imgsp");
// var divspdetails = document.getElementById("container_sanpham")
// console.log(divspdetails)
// imgdetail.forEach((button)=>{
//    button.addEventListener("click",()=>{
//       return  window.location.href='details.html'
//     })
// })

//hàm map lọc dữ liệu gán vào html
var Boxrenderdetail = document.getElementById("container_sanpham")
const itemsp = Sanpham[currenIndex]
var Renderdetail = `
     <div id="chitietsanpham">
        <div class="chitietsanpham_imgdiv">
        <img class="chitietsanpham_img" src=${itemsp.src} />
        </div>
        <div class="chitietsanpham_divphai">
            <p class="chitietsanpham_divphai_ten">${itemsp.name}</p>
            <p class="chitietsanpham_divphai_giacu">${itemsp.oldprice}</p>
            <p class="chitietsanpham_divphai_giamoi">${itemsp.newprice}</p>
            <div class="formbtn">
                <div class="formbtn_tren">
                    <button class="tren_64GB">${itemsp.Bonho1}</button>
                    <button class="tren_128GB">${itemsp.Bonho2}</button>
                    <button class="tren_256GB">${itemsp.Bonho3}</button>
                </div>
                <div class="formbtn_tren">
                    <button class="Maudo">${itemsp.Mausac1}</button>
                    <button class="Maugold">${itemsp.Mausac2}</button>
                    <button class="Mautrang">${itemsp.Mausac3}</button>
                    <button class="Mauxanh">${itemsp.Mausac4}</button>
                </div>
            </div>
            <ul class="forminfo">
                <li>${itemsp.Thongtin1}</li>
                <li>${itemsp.Thongtin2}</li>
                <li>${itemsp.Thongtin3}</li>
                <li>${itemsp.Thongtin4}</li>
            </ul>
            <p class="tinhtrang">Còn hàng</p>
            <div class="nutdathang">
                <input class="inputnutdathang" type="number" value="1" min="1">
                <button class="nutdathang_btn">THÊM VÀO GIỎ HÀNG</button>
            </div>
        </div>  
    </div> 
    `;
Boxrenderdetail.innerHTML=Renderdetail





