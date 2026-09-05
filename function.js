//fungsi parameter yg lebih dari satu

function add (x,y) {
    const z = x + y 
    console.log (x + ' ditambah ' + y + ' sama dengan ' + z )
};

add(1,10)

//fungsi 

function bilangAnjay() {
    
    console.log('bilangAnjay');
};

bilangAnjay()

function bilangAnjay2(name) {
    
    console.log('bilangAnjay2' + name);
};

bilangAnjay2('jir')

//fungsi dalam if else

function nomeraja(number) {
    if (number > 0) {
        console.log('positif')

    } else if (number < 0) {
        console.log('Negatif')
    } else{
        console.log('Netral')
    }       
      
}

nomeraja()