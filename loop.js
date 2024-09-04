const phone = {
    brand: 'samsung',
    price: 25000,
    isNew: true,
    camera: '13mp'
}


for(let prop in phone){
    console.log(prop);
    console.log(phone[prop]);
}