const { type } = require("express/lib/response");

function getStepdatas(){
    setTimeout(()=>{
        axios.get(`${serverUrl}/items/userID/eq/${loggedUser.ID}`).then(res => {
            let i = 0;
            let sum = 0;
            let tbody = document.querySelector('tbody');
            res.data.forEach(data => {
                let tr = document.createElement('tr');
                let td1 = document.createElement('td');
                let td2 = document.createElement('td');
                let td3 = document.createElement('td');
                td3.classList.add('text-end');

              
                i++;
                sum += data.amount;
                td1.innerText = i+'.';
                td2.innerText = data.date.toString().split("T")[0];
                td3.innerText = data.amount;
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                tbody.appendChild(tr);
            });
            let sumField = document.querySelector('#sumField');
            sumField.innerText = sum;
        });
    },100)
}