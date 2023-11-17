

function kivonasegyenleg(){
    let date = document.querySelector('#dateField');
    let amount = document.querySelector('#stepField');

    if (date.value == "" || amount.value == "" || amount.value == 0){
        showMessage('Nem adtál meg minden adatot!'); 
    }
    else
    {
        axios.get(`${serverUrl}/items/userID/eq/${loggedUser.ID}`).then(res =>{
            let upd = false;
            let updID = -1;
     
            res.data.forEach(item => {
                if (item.date.toString().split("T")[0] === date.value.toString()){
                    upd = true;
                    updID = item.ID;
                    return;
                }
            });
          
            if (upd){

                let updData = {
                    amount: amount.value 	
                }

                axios.patch(`${serverUrl}/items/ID/eq/${updID}`, updData).then(()=>{

                    alert('Az egyenéeg módósúlt');
                });
                
            }
            else
            {
                let newData = {
                    userID: loggedUser.ID, 	
                    date: date.value, 	
                    amount: amount.value 	
                }
            
                axios.post(`${serverUrl}/items`, newData).then(()=>{
                    alert('Az egyenleg módósult!');
                });
            }

            amount.value = "";
            date.value = "";
        });
    }

   
}

function setMaxDate(){
    let date = document.querySelector('#dateField');
    date.max =  new Date().toISOString().split("T")[0];
}

setTimeout(()=>{setMaxDate();
}, 500);
