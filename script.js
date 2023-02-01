function ADD() {
    let popbox = document.getElementById("popbox");
    let box = document.getElementById("box");
    let nam = document.getElementById("name");
    box.style.display = "none";
    let name = document.getElementById("name").value;
    if (nam.value == '') {
        nam.style.border = "2px solid red";
    }
    else {
        popbox.style.display = "block";
      
    }
    box.style.display = "block";
    //    box.style.display="none";       

}

function addMore() {
    let nam = document.getElementById("name");
    let name = document.getElementById("name").value;
    if (nam.value == '') {
        nam.style.border = "2px solid red";
    }
    else {
        // name.style.border="2px solid green";
        // let popbox = document.getElementById("popbox");
        // popbox.style.visibility="visible";
        let password = document.getElementById('password').value;
        //   console.log(password);
       
        popbox.style.display = "none";
        let box = document.getElementById('box');
        let li = document.createElement('li');
       
        li.textContent = name;
        let a = document.createElement('a');
        a.textContent = "DELETE";
        // a.insertAdjacentHTML='<i class="fa fa-trash"></i>'
        // a.innerHTML='<i class="fa fa-trash"></i>';
        // a.textContent = `${'<i class="fa fa-trash"></i>'}`;
        
        a.setAttribute("data-password", password);
       a.onclick = "DEL()";
       
         a.addEventListener('click', function (e) {
           //  console.log(e)
             let box = document.getElementById('box');
             let del = document.getElementById('del');
             del.style.display = "block";
             let password = e.target.getAttribute("data-password")
             let password12 = document.getElementById('password1');
            
             let deleteBox = document.getElementById('deletebox');

             deleteBox.addEventListener('click', function(r){
                let password1 = document.getElementById('password1').value;
                if (password1 == password) {
                    box.removeChild(li);
                    del.style.display = "none";
                }
                else {
                     password12.style.borderColor="red";
                  //   console.log("password1 is " + password1);
                }
             })
        //      console.log(password1);
        //  console.log(password);
         //let passworde = document.getElementById('password');
      //  let pass = e.target.parentNode.password;
      //  let li = e.target.parentNode;

       // console.log(password);
       //  let pass = li.password;
      
              // console.log(pass);

         })

        li.appendChild(a);
        // a.onclick="Delete()";
        let pos = box.firstElementChild;
        if (box == null) {
            box.appendChild(li);
        }
        else {
            box.appendChild(li, pos);
        }
    }
    document.getElementById('name').value = "";
}

let back = document.getElementById('back');
let del = document.getElementById('del');
back.addEventListener('click',function(e){
    del.style.display = "none";                         
})
