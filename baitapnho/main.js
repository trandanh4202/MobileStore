
// Phần Mảng và Render Sản Phẩm
const Sanpham =[
  {
    name: 'Điện thoại iPhone 12 Pro Max 128GB',
    oldprice: '33.990.000',
    newprice: '31.990.000',
    src: "./photos/dienthoai1.jpg",
    button: 'THÊM VÀO GIỎ HÀNG',
    Bonho1:'64GB',
    Bonho2:'128GB',
    Bonho3:' 256GB',
    Mausac1:'MÀU ĐỎ',
    Mausac2:'MÀU GOLD',
    Mausac3:'MÀU TRẮNG',
    Mausac4:'MÀU XANH',
    Thongtin1:'iPhone 12 Pro Max 128 GB một siêu phẩm smartphone đến từ Apple.',
    Thongtin2:'Thay đổi thiết kế mới sau 6 năm.',
    Thongtin3:'Theo chu kỳ cứ mỗi 3 năm thì iPhone lại thay đổi thiết kế và 2020 là năm đánh dấu cột mốc quan trong này.',
    Thongtin4:'iPhone 12 Pro Max sở hữu diện mạo mới mới với khung viền được vát thẳng và mạnh mẽ như trên iPad Pro 2020.'
  },
  {
    name: 'Điện thoại Samsung Galaxy Z Fold3 5G 512GB',
    oldprice: '47.990.000',
    newprice: '45.990.000',
    src: "./photos/samsung1.jpg",
    button: 'THÊM VÀO GIỎ HÀNG',
    Bonho1:'64GB',
    Bonho2:'128GB',
    Bonho3:' 256GB',
    Mausac1:'MÀU ĐỎ',
    Mausac2:'MÀU GOLD',
    Mausac3:'MÀU TRẮNG',
    Mausac4:'MÀU XANH',
    Thongtin1:'Galaxy Z Fold3 5G đánh dấu bước tiến mới của Samsung',
    Thongtin2:'Ở phân khúc điện thoại gập cao cấp khi được cải tiến về độ bền cùng những nâng cấp đáng giá về cấu hình hiệu năng',
    Thongtin3:'Theo chu kỳ cứ mỗi 3 năm thì iPhone lại thay đổi thiết kế và 2020 là năm đánh dấu cột mốc quan trong này.',
    Thongtin4:'Samsung Galaxy Z Fold3 5G hẹn sẽ mang đến trải nghiệm sử dụng đột phá cho người dùng.'
  },
  {
      name: 'Máy tính bảng Samsung Galaxy Tab S7 FE 4G',
      oldprice: '18.990.000',
      newprice: '14.990.000',
      src: "./photos/ipad-ss1.jpg",
      button: 'THÊM VÀO GIỎ HÀNG',
      Bonho1:'64GB',
        Bonho2:'128GB',
        Bonho3:' 256GB',
        Mausac1:'MÀU ĐỎ',
        Mausac2:'MÀU GOLD',
        Mausac3:'MÀU TRẮNG',
        Mausac4:'MÀU XANH',
        Thongtin1:'iPhone 12 Pro Max 128 GB một siêu phẩm smartphone đến từ Apple.',
        Thongtin2:'Thay đổi thiết kế mới sau 6 năm.',
        Thongtin3:'Theo chu kỳ cứ mỗi 3 năm thì iPhone lại thay đổi thiết kế và 2020 là năm đánh dấu cột mốc quan trong này.',
        Thongtin4:'iPhone 12 Pro Max sở hữu diện mạo mới mới với khung viền được vát thẳng và mạnh mẽ như trên iPad Pro 2020.'
  },
  {
      name: 'Máy tính bảng Huawei MatePad 11',
      oldprice: '17.990.000',
      newprice: '14.990.000',
      src: "./photos/table-huawei1.jpg",
      button: 'THÊM VÀO GIỎ HÀNG',
      Bonho1:'64GB',
    Bonho2:'128GB',
    Bonho3:' 256GB',
    Mausac1:'MÀU ĐỎ',
    Mausac2:'MÀU GOLD',
    Mausac3:'MÀU TRẮNG',
    Mausac4:'MÀU XANH',
    Thongtin1:'Galaxy Tab S7 FE sẽ khiến bạn choáng ngợp với dụng lượng pin cực khủng 10090 mAh đảm bảo cho cường độ làm việc, giải trí liên tục trong nhiều giờ liền.',
    Thongtin2:'Thay đổi thiết kế mới sau 6 năm.',
    Thongtin3:'Với dung lượng lớn này giúp cho Galaxy Tab S7 FE có thể dùng lên tới 12 giờ lướt web với mạng LTE và 13 giờ xem video trực tuyến qua wifi.',
    Thongtin4:'Galaxy Tab S7 FE có một phiên bản màn hình duy nhất với kích thước lớn 12.4 inch.'
  },
  {
      name: 'Polymer 10.000 mAh Type C Energizer UE10054BK',
      oldprice: '2.520.000',
      newprice: '1.520.000',
      src: "./photos/sac1.jpg",
      button: 'THÊM VÀO GIỎ HÀNG',
      Bonho1:'64GB',
    Bonho2:'128GB',
    Bonho3:' 256GB',
    Mausac1:'MÀU ĐỎ',
    Mausac2:'MÀU GOLD',
    Mausac3:'MÀU TRẮNG',
    Mausac4:'MÀU XANH',
    Thongtin1:'Thiết kế gọn nhẹ với độ dày 16 mm, thiết kế cạnh bo tròn mềm mại.',
    Thongtin2:'Sạc được nhiều thiết bị với dung lượng 10.000 mAh.',
    Thongtin3:'Tích hợp 2 cổng USB sạc 2 thiết bị cùng lúc. Theo chu kỳ cứ mỗi 3 năm thì iPhone lại thay đổi thiết kế và 2020 là năm đánh dấu cột mốc quan trong này.',
    Thongtin4:'2 cổng Input: Micro USB và USB-C.'
  },
  {
      name: 'Polymer 10.000 mAh Type C Xmobile PJ JP190ST',
      oldprice: '2.455.000',
      newprice: '1.455.000',
      src: "./photos/sac3.jpg",
      button: 'THÊM VÀO GIỎ HÀNG',
      Bonho1:'64GB',
    Bonho2:'128GB',
    Bonho3:' 256GB',
    Mausac1:'MÀU ĐỎ',
    Mausac2:'MÀU GOLD',
    Mausac3:'MÀU TRẮNG',
    Mausac4:'MÀU XANH',
    Thongtin1:'iPhone 12 Pro Max 128 GB một siêu phẩm smartphone đến từ Apple.',
    Thongtin2:'Thay đổi thiết kế mới sau 6 năm.',
    Thongtin3:'Theo chu kỳ cứ mỗi 3 năm thì iPhone lại thay đổi thiết kế và 2020 là năm đánh dấu cột mốc quan trong này.',
    Thongtin4:'iPhone 12 Pro Max sở hữu diện mạo mới mới với khung viền được vát thẳng và mạnh mẽ như trên iPad Pro 2020.'
  },
  {
      name: 'iPhone XS Max 64GB Cũ',
      oldprice: '14.290.000',
      newprice: '13.290.000',
      src: "./photos/maycu1.jpg",
      button: 'THÊM VÀO GIỎ HÀNG',
      Bonho1:'64GB',
    Bonho2:'128GB',
    Bonho3:' 256GB',
    Mausac1:'MÀU ĐỎ',
    Mausac2:'MÀU GOLD',
    Mausac3:'MÀU TRẮNG',
    Mausac4:'MÀU XANH',
    Thongtin1:'Pin sạc dự phòng Polymer 10.000mAh Type C Xmobile PJ JP190ST xanh có kích thước gọn gàng cùng màu sắc đẹp mắt, dễ dàng mang theo đến nhiều nơi và sử dụng khi cần.',
    Thongtin2:'Thay đổi thiết kế mới sau 6 năm.',
    Thongtin3:'Pin dự phòng Xmobile PJ JP190ST có 3 nguồn ra, gồm 2 cổng USB và 1 cổng USB Type-C đạt công suất 5V - 2.4A.',
    Thongtin4:'Thiết kế nhỏ gọn, đẹp mắt.'
  },
  {
      name: 'iPhone 8 Plus 64GB cũ',
      oldprice: '19.000.000',
      newprice: '18.000.000',
      src: "./photos/maycu2.jpg",
      button: 'THÊM VÀO GIỎ HÀNG',
      Bonho1:'64GB',
    Bonho2:'128GB',
    Bonho3:' 256GB',
    Mausac1:'MÀU ĐỎ',
    Mausac2:'MÀU GOLD',
    Mausac3:'MÀU TRẮNG',
    Mausac4:'MÀU XANH',
    Thongtin1:'iPhone 12 Pro Max 128 GB một siêu phẩm smartphone đến từ Apple.',
    Thongtin2:'Thay đổi thiết kế mới sau 6 năm.',
    Thongtin3:'Theo chu kỳ cứ mỗi 3 năm thì iPhone lại thay đổi thiết kế và 2020 là năm đánh dấu cột mốc quan trong này.',
    Thongtin4:'iPhone 12 Pro Max sở hữu diện mạo mới mới với khung viền được vát thẳng và mạnh mẽ như trên iPad Pro 2020.'
  },
  {
    name: 'iPhone 12 Pro Max 64GB LIKE NEW',
    oldprice: '39.000.000',
    newprice: '28.000.000',
    src: "./photos/iphone22.jpg",
    button: 'THÊM VÀO GIỎ HÀNG',
    Bonho1:'64GB',
    Bonho2:'128GB',
    Bonho3:' 256GB',
    Mausac1:'MÀU ĐỎ',
    Mausac2:'MÀU GOLD',
    Mausac3:'MÀU TRẮNG',
    Mausac4:'MÀU XANH',
    Thongtin1:'iPhone 12 Pro Max 128 GB một siêu phẩm smartphone đến từ Apple.',
    Thongtin2:'Thay đổi thiết kế mới sau 6 năm.',
    Thongtin3:'Theo chu kỳ cứ mỗi 3 năm thì iPhone lại thay đổi thiết kế và 2020 là năm đánh dấu cột mốc quan trong này.',
    Thongtin4:'iPhone 12 Pro Max sở hữu diện mạo mới mới với khung viền được vát thẳng và mạnh mẽ như trên iPad Pro 2020.'
}, {
    name: 'Samsung S21 64GB LIKE NEW',
    oldprice: '29.000.000',
    newprice: '17.000.000',
    src: "./photos/samsung4.jpg",
    button: 'THÊM VÀO GIỎ HÀNG',
    Bonho1:'64GB',
    Bonho2:'128GB',
    Bonho3:' 256GB',
    Mausac1:'MÀU ĐỎ',
    Mausac2:'MÀU GOLD',
    Mausac3:'MÀU TRẮNG',
    Mausac4:'MÀU XANH',
    Thongtin1:'iPhone 12 Pro Max 128 GB một siêu phẩm smartphone đến từ Apple.',
    Thongtin2:'Thay đổi thiết kế mới sau 6 năm.',
    Thongtin3:'Theo chu kỳ cứ mỗi 3 năm thì iPhone lại thay đổi thiết kế và 2020 là năm đánh dấu cột mốc quan trong này.',
    Thongtin4:'iPhone 12 Pro Max sở hữu diện mạo mới mới với khung viền được vát thẳng và mạnh mẽ như trên iPad Pro 2020.'
}, {
    name: 'Samsung A71 64GB cũ',
    oldprice: '9.000.000',
    newprice: '8.000.000',
    src: "./photos/samsung2.jpg",
    button: 'THÊM VÀO GIỎ HÀNG',
    Bonho1:'64GB',
    Bonho2:'128GB',
    Bonho3:' 256GB',
    Mausac1:'MÀU ĐỎ',
    Mausac2:'MÀU GOLD',
    Mausac3:'MÀU TRẮNG',
    Mausac4:'MÀU XANH',
    Thongtin1:'iPhone 12 Pro Max 128 GB một siêu phẩm smartphone đến từ Apple.',
    Thongtin2:'Thay đổi thiết kế mới sau 6 năm.',
    Thongtin3:'Theo chu kỳ cứ mỗi 3 năm thì iPhone lại thay đổi thiết kế và 2020 là năm đánh dấu cột mốc quan trong này.',
    Thongtin4:'iPhone 12 Pro Max sở hữu diện mạo mới mới với khung viền được vát thẳng và mạnh mẽ như trên iPad Pro 2020.'
}, {
    name: 'Samsung A52 64GB cũ',
    oldprice: '11.000.000',
    newprice: '10.000.000',
    src: "./photos/samsung3.jpg",
    button: 'THÊM VÀO GIỎ HÀNG',
    Bonho1:'64GB',
    Bonho2:'128GB',
    Bonho3:' 256GB',
    Mausac1:'MÀU ĐỎ',
    Mausac2:'MÀU GOLD',
    Mausac3:'MÀU TRẮNG',
    Mausac4:'MÀU XANH',
    Thongtin1:'iPhone 12 Pro Max 128 GB một siêu phẩm smartphone đến từ Apple.',
    Thongtin2:'Thay đổi thiết kế mới sau 6 năm.',
    Thongtin3:'Theo chu kỳ cứ mỗi 3 năm thì iPhone lại thay đổi thiết kế và 2020 là năm đánh dấu cột mốc quan trong này.',
    Thongtin4:'iPhone 12 Pro Max sở hữu diện mạo mới mới với khung viền được vát thẳng và mạnh mẽ như trên iPad Pro 2020.'
},
]

localStorage.setItem('danhsachsanpham', JSON.stringify(Sanpham))


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

//Khi Nhấn chữ giỏ hàng
var Nutgiohang= document.querySelector(".header2giohangitem")
Nutgiohang.addEventListener("click",()=>{
    showcart()
})

//hàm đếm số lượng sản phẩm đã đặt
function showcountsp() {
    var cartItem = document.querySelectorAll("tbody tr")
    document.getElementById("countsp").innerHTML = cartItem.length;
    document.getElementById("countspa").innerHTML = cartItem.length;
}
     
//Khi nhấn img sẽ chuyển trang
window.getDetail = (index) => {
    localStorage.setItem('currentDetails', index)
    console.log(index);
    return  window.location.href='Details.html'
}

//Render Sản phẩm
var Boxrender = document.getElementById("wrappersanpham")
var Render = Sanpham.map((item, index)=>{
  return`
      <div class="sanpham" key=${index} >
          <img class="imgsp" src=${item.src} onclick="getDetail(${index})" />
          <h2 class="sph2">${item.name}</h2>
          <div class="forminputprice">
            <h2 class="sph2priceold"><span>${item.oldprice}</span></h2> 
            <h2 class="sph2price"><span>${item.newprice}</span></h2> 
            
          </div>
          <button class="spbtn" >${item.button}</button>
      </div>
    `})
    
    Boxrender.innerHTML=Render.join('');

//Hàm Lấy Sản Phẩm Đưa Vào Giỏ Hàng
    const btn = document.querySelectorAll(".spbtn")
    var giohang= document.querySelector(".giohang")
    btn.forEach((button,index)=>
    {
        button.addEventListener("click",(e)=>{
            var btnItem=e.target
            var product = btnItem.parentElement
            var productImg= product.querySelector(".imgsp").src
            var productName=product.querySelector(".sph2").innerText
            var productPrice=product.querySelector(".sph2price").innerText
            
            //tạo hàm chứa sản phẩm
            addcart(productImg,productName,productPrice)
           
             //đưa lên localstorage
             
           
            showcountsp() 
        })
    })


//hàm xử lý thêm sản phẩm vào giỏ
    function addcart(productImg,productName,productPrice){
            var addtr = document.createElement("tr")
            var cartItem = document.querySelectorAll("tbody tr")
            for(var i = 0; i < cartItem.length;i++){
                var productT = document.querySelectorAll(".title")
                if(productT[i].innerHTML == productName)
                {
                    alert('Sản phẩm của bạn đã có trong giỏ hàng')
                    return
                }
            }
            var trcontent = '<tr id="sptrr"><td style="display:flex; margin: auto;"><img style=" width:70px" box-sizing:boder-box src="'+productImg+'"><div style="text-align:center; margin:auto" class="title">'+productName+'</div></td><td style="margin: auto";><p><span>'+productPrice+'</span><sup>đ</sup></p></td><td style="max-width: 20px;" ><input style="max-width: 40%;border-radius: 5px;border: 1px solid #c7c7c7;" type="number" value="1" min="1"></td><td style="cursor: pointer; " class="tddelete">xóa</td></tr>'
            addtr.innerHTML=trcontent
            var cartTable = document.querySelector("tbody")
            cartTable.append(addtr)
            // console.log(trcontent)

              
            
           
            // console.log(giohang)
            
            // var Manggiohang = document.querySelector(trcontent)
            
            
          
            carttotal()
            deleteCart()
    }


// Total
    function carttotal(){
        var cartItem = document.querySelectorAll("tbody tr")
        var totalC = 0;
        for(var i = 0; i < cartItem.length;i++){
            var inputValue = cartItem[i].querySelector("input").value;
            var productPrice = cartItem[i].querySelector("span").innerHTML;
            totalA  = parseFloat(inputValue)*parseFloat(productPrice) *1000 *1000
            totalC = totalC + totalA
            // totalD=totalC.toLocaleString('de-DE')
            // console.log(totalC)
        }
        var cartTotalA= document.querySelector(".price-total span")
        cartTotalA.innerHTML= totalC.toLocaleString('de-DE')
        inputchange()
    }

//Hàm Xóa
    function deleteCart(){
        var cartItem = document.querySelectorAll("tbody tr")
        for(var i = 0; i < cartItem.length;i++){
            var productT = document.querySelectorAll(".tddelete")
            productT[i].addEventListener("click", e=>{
                var cartDelete = e.target
                var cartItemR=cartDelete.parentElement
                cartItemR.remove()
                carttotal()
            })
        }
    }
   
//Xóa Tất cả
    function Xoatatca(){
        var cartItem = document.querySelectorAll("tbody tr")
        var productB = document.getElementById("xoatatca")
            productB.addEventListener("click", (e)=>{
                cartItem.innerHTML=('')
                carttotal()
            })
        }
//Hàm thay đổi số lượng
    function inputchange(){
        var cartItem = document.querySelectorAll("tbody tr")
        for(var i = 0; i < cartItem.length;i++){
            var inputValue = cartItem[i].querySelector("input")
           inputValue.addEventListener("change", ()=>{
            carttotal()
           })
        }
    }
 



// MOBILE
var mobileNav = document.getElementById("header2navmobile")
function shownav(){
  
    if(mobileNav.style.display=="block")
    {
        mobileNav.style.display="none";
    }
    else
    {
        mobileNav.style.display="block"; 
    }
}



/*---------------Imgbtn----------------------*/
// const imgSP = document.querySelectorAll('.imgsp')
// imgSP.addEventListener('click', (e)=>{
//     console.log(e.target.getAttribute('idsanpham'));
// })



/*---------------------------CART---------------------------*/
//Trang Thanh toán cart.html

// showgiohang_trangthanhtoan();









































    

// const Course = Sanpham.map( (props,index) =>{
//   return (
//   <div className="sanpham" key={index}>
//       <div><img className="imgsp" src ={props.src} /></div>
//       <h2 className="sph2">{props.name}</h2>
//       <div className="forminputprice">
//       <h2 className="sph2price">$<span>{props.newprice}</span></h2> 
//       <input className="inputNumber" type="number" placeholder="1" name="soluong" min="1" max="10" onChange={(e)=> props.soluong = e.target.value} ></input>
//       </div>
     
//       <button className="spbtn" onClick={()=>themvaogiohang(props)}>{props.button}</button>
     
//   </div>
//   )
// })

// function App(){
//   return( 
//             <div id="wrappersanpham">
//               {Course}
//             </div>
//         )
// }

// ReactDOM.render(<App />,document.getElementById('root'));



// //Phần Hàm Xử Lý

// //Lấy id của icon giỏ hàng
// document.getElementById("showcart").style.display="none";
// var giohang = new Array();


// //Sự kiện nút button đặt hàng
// function themvaogiohang(x) {
//           //Kiểm tra giỏ hàng
//           if(giohang.some((item)=> item.name===x.name)){
//             x.soluong += props.soluong;
//           } 
//           else{
//             x.soluong=1;
//           }
//           giohang.push(x);
//           showcountsp();

//             //lưu giỏ hàng lên session --> biến lưu tạm 
//             sessionStorage.setItem("giohang",JSON.stringify(giohang));

//         }
      

// //hàm đếm số lượng sản phẩm đã đặt
// function showcountsp() {
//             document.getElementById("countsp").innerHTML = giohang.length;
//         }

// //viết sự kiện hiện tắt mở nút giỏ hàng
// function showcart()
//         {
//           var x= document.getElementById("showcart")
//           if(x.style.display=="block")
//           {
//               x.style.display="none";
//           }
//           else
//           {
//               x.style.display="block"; 
//           }
//           showmycart();
//       }

// //Hàm lấy dữ liêu truyền vào icon giỏ hàng
// function showmycart()
// {
//      var ttgh = "";
//      let tong = 0;
//       for(let i = 0; i<giohang.length;i++)
//        {
//           var tt=parseFloat(giohang[i].soluong)*parseFloat(giohang[i].newprice);
//           tong += tt;
//           ttgh+='<tr>'+
//                   '<td>'+(i+1)+'</td>' +
//                   '<td><img src="'+giohang[i].src+'" alt=""></td>' +
//                   '<td>'+giohang[i].name+'</td>'+
//                   '<td>'+giohang[i].newprice+'</td>'+
//                   '<td>'+giohang[i].soluong+'</td>'+
//                   '<td>'+
//                     ' <div>'+('$')+tt+'</div>' +
//                   '</td>'+
//                   '<td>'+
//                     '<button onclick="xoasp(this)">Xóa</button>' +
//                   '</td>'+
//                 '</tr>';
//        }
//           ttgh+='<tr>'+
//                   '<th colspan="6">Tổng đơn hàng</th>' +
//                     '<th>'+
//                       ' <div>'+('$')+tong+'</div>' +
//                     '</th>'+
//                 '</tr>';
//           document.getElementById("mycart").innerHTML=ttgh;      
// }
// // showgiohang_trangthanhtoan();


// //xóa sản phẩm
// function xoasp(x){
//   //xóa tr
//   // var tr= x.parentElement.parentElement;
//   // var tensp= tr.children[2].innerText;
//   // tr.remove();
//   // //xóa mảng
//   // for(var i = 0;i <giohang.length;i++)
//   // {
//   //   if(giohang[i][2]==tensp)
//   //   {
//   //     giohang.splice(i,1);
//   //   }
//   // }
//   // showmycart()
//   // showcountsp();

//   //xóa tr
//   // var tr= x.Sanpham.;
//   // var tensp= tr.name.innerText;
//   // tr.remove();
//   // //xóa mảng
//   // for(var i = 0;i <giohang.length;i++)
//   // {
//   //   if(giohang[i].name==tensp)
//   //   {
//   //     giohang.splice(i,1);
//   //   }
//   // }
//   // showmycart()
//   // showcountsp();
// }

// //xóa tất cả sản phẩm giỏ hàng
// function Xoatatca(){
//   giohang = [];
//   showmycart();
//   showcountsp();
// }

// //Trang Thanh toán cart.html
// function showgiohang_trangthanhtoan(){
//         var gh = sessionStorage.getItem("giohang");
//         var giohang = JSON.parse(gh);
//         var ttgh = "";
//         var tong = 0;
//         for(let i = 0; i<giohang.length;i++)
//         {
//           var tt=parseFloat(giohang[i].soluong)*parseFloat(giohang[i].newprice);
//           tong += tt;
//           ttgh+='<tr>'+
//                   '<td>'+(i+1)+'</td>' +
//                   '<td><img src="'+giohang[i].src+'" alt=""></td>' +
//                   '<td>'+giohang[i].name+'</td>'+
//                   '<td>'+giohang[i].newprice+'</td>'+
//                   '<td>'+giohang[i].soluong+'</td>'+
//                   '<td>'+
//                     ' <div>'+tt+'</div>' +
//                     '</td>'+
//                   '</tr>';
//         }
//           ttgh+='<tr>'+
//                     '<th colspan="5">Tổng đơn hàng</th>' +
//                     '<th>'+
//                       ' <div>'+tong+'</div>' +
//                     '</th>'+
//                 '</tr>';
//               document.getElementById("mycart").innerHTML = ttgh;      
// }
// // showgiohang_trangthanhtoan();


// // nút đặt hàng
// // function dongydathang(){
// //       var ttnh = document.getElementById("thongtinnhanhang").children;
// //       var hoten= ttnh[0].children[1].children[0].value;
// //       var diachi= ttnh[1].children[1].children[0].value;
// //       var dienthoai= ttnh[2].children[1].children[0].value;
// //       var email= ttnh[3].children[1].children[0].value;
      
// //       var nguoinhan= new Array(hoten,diachi,diachi,email);
// //       console.log(nguoinhan);
// //       sessionStorage.setItem("nguoinhan",JSON.stringify(nguoinhan));
// //       window.location.assign("donhang.html");
// // }


// //Trang Hóa đơn
// function showthongtinnguoinhan(){
//       var nguoinhan = sessionStorage.getItem("nguoinhan");
//       var thongtin = JSON.parse(nguoinhan);
//       var tt =' <tr>'+
//       '<td width="20%">Họ tên</td>'+
//       '<td>'+thongtin[0]+'</td>'+
//     '</tr>'+
//     '<tr>'+
//       '<td>Địa chỉ</td>'+
//       '<td>'+thongtin[1]+'</td>'+
//     '</tr>'+
//     '<tr>'+
//       '<td>Điện thoại</td>'+
//       '<td>'+thongtin[2]+'</td>'+
//     '</tr>'+
//     '<tr>'+
//       '<td>Email</td>'+
//       '<td>'+thongtin[3]+'</td>'+
//     '</tr>';
//     document.getElementById("thongtinnhanhang").innerHTML = tt;
//     }




