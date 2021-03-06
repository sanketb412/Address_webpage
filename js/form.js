window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
        name.addEventListener('input',function () {
            if (name.value.length == 0) {
                textError.textContent = "";
                return;
            }
            try {
                (new AddressBook()).name = name.value;
                textError.textContent = "";
            } catch (e) {
                textError.textContent = e;
            }
        });
    const phone = document.querySelector('#phone');
    const phoneError = document.querySelector('.phone-error');
            name.addEventListener('input',function () {
                if (phone.value.length == 0) {
                    phoneError.textContent = "";
                    return;
                }
                try {
                    (new AddressBook()).phoneNumber = phone.value;
                    phoneError.textContent = "";
                } catch (e) {
                    phoneError.textContent = e;
                }
            });
    const address = document.querySelector('#address');
    const addressError = document.querySelector('.address-error');
                name.addEventListener('input',function () {
                   if (address.value.length == 0) {
                        addressError.textContent = "";
                        return;
                    }
                    try {
                        (new AddressBook()).address = address.value;
                        addressError.textContent = "";
                    } catch (e) {
                        addressError.textContent = e;
                    }
                });
        
    });

    const save = () => {
        try{
            let addressBookData = createAddressBook();
            createAndUpdateStorage(addressBookData);
            window.location.replace('../pages/AddressHome.html');
            resetForm();
        }catch(e){
            return;
        }
    }
    
    const createAddressBook = ()=>{
        let addressBookData = new AddressBook();
        try{
            addressBookData._name=document.querySelector('#name').value;
        }catch(e){
            setTextValue('.text-error', e)
            throw e;
        }
        addressBookData._phoneNumber=document.querySelector('#phone').value;
        addressBookData._address=document.querySelector('#address').value;
        addressBookData._city=document.querySelector('#city').value;
        addressBookData._state=document.querySelector('#state').value;
        addressBookData._zip=document.querySelector('#zip').value;
        alert(addressBookData.toString());
        return addressBookData;
    }

    function createAndUpdateStorage (addressBookData){
        let contactList = JSON.parse(localStorage.getItem("ContactList"));
        if(contactList!=undefined){
            contactList.push(addressBookData);
        }else{
            contactList=[addressBookData];
        }
        alert(contactList.toString());
        localStorage.setItem("ContactList",JSON.stringify(contactList));
    }

    const resetForm = ()=>{
        document.querySelector("#name").value = "";
        document.querySelector('#phone').value = "";
        document.querySelector('#address').value= "";
        document.querySelector('#city').value = "Select City";
        document.querySelector('#state').value= "Select State";
        document.querySelector('#zip').value= "";
    }
    
    const cross = () => {
        window.location.replace('../pages/AddressHome.html');
    } 