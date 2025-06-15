 let ohh = document.querySelector(".div3").addEventListener("dblclick", (e) => {

       console..log("shivendra mauhariya");
       e.stopPropagation();
      });
      document.querySelector(".div1").addEventListener("dblclick", () => {
        alert("div1 clicked");
      });
      document.querySelector(".div2").addEventListener("dblclick", () => {
        alert("div 2 clickde");
      });
      