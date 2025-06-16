
// //    chapter 01
                                                                                                                                               
                                         
// //    if (true) {
        
// //     let a = "kismat";
// // const b = "kharab";
// // var age = 16;                            
    
// // }
// // console.log(a)
// // console.log(b)
// // console.log(age)





// //  chapter 02


// // Primitive


// let a = "shivendra"
// let b = a;

//     console.log(b)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             


function startTest() {
  // Dummy values generate karenge
  const download = (Math.random() * 100 + 10).toFixed(2); // 10–110 Mbps
  const upload = (Math.random() * 50 + 5).toFixed(2); // 5–55 Mbps
  const ping = Math.floor(Math.random() * 100 + 10); // 10–110 ms

  document.getElementById("download").innerText = download;
  document.getElementById("upload").innerText = upload;
  document.getElementById("ping").innerText = ping;
}

