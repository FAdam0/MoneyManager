

function addStepData(){
    let date = document.querySelector('#dateField');
    let amount = document.querySelector('#stepField');
    let type = document.querySelector('#typeField')
    let tag = document.querySelector('#tagField')

    if (date.value == "" || amount.value == "" || amount.value == 0){
        showMessage('Nem adtál meg minden adatot!'); 
    }
    else
    {
                
            
                let newData = {
                    userID: loggedUser.ID, 	
                    date: date.value, 	
                    amount: amount.value,
                    type: type.value,
                    tag: tag.value,

                }
                axios.post(`${serverUrl}/items`, newData).then(()=>{
                    alert('Az adatok felvéve!');
                });
            
                
            

            amount.value = "";
            date.value = "";
      
    }

   
}

function setMaxDate(){
    let date = document.querySelector('#dateField');
    date.max =  new Date().toISOString().split("T")[0];
}

setTimeout(()=>{setMaxDate();
}, 500);
