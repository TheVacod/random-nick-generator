// VARS
var btnGenerate = document.querySelector('#btnGenerate');
var result = document.querySelector('#result');
var miktar = document.querySelector('#miktar');

var ck = document.querySelector('#ck');
var ck2 = document.querySelector('#ck2');
var ck3 = document.querySelector('#ck3');


class passwordGenerator {
    createRandomPassword(){
        // Random Numbers
        var numbers = ['',1,2,'',3,4,5,6,'',7,8,9,0,''];
        var randomNum = Math.floor(Math.random() * 14);
        var randomNum2 = Math.floor(Math.random() * 14);
        var number = numbers[randomNum];
        var number2 = numbers[randomNum2];
        var randomNum3 = Math.floor(Math.random() * 14);
        var randomNum4 = Math.floor(Math.random() * 14);
        var number3 = numbers[randomNum3];
        var number4 = numbers[randomNum4];

        // Number Password
        var randomNumberPassword = [0,1,2,3,4,5,6,7,8,9];
        

        function randomNumPass(dizi){
            var randomNumberPasswordSec = Math.floor(Math.random() *10);
            var secildiNum = dizi[randomNumberPasswordSec];
            return `${secildiNum}`;
        }

        // Buyuk Harfler
        
        // Random Sesli Harf
        const Bsesli = ['A','E','I','O','U','A','E','I','O','U'];
        var BsRandom = Math.floor(Math.random() * 10);
        var BsRandom2 = Math.floor(Math.random() * 10);
        var BsRandom3 = Math.floor(Math.random() * 10);
        var BsRandom4 = Math.floor(Math.random() * 10);
        var BsRandom5 = Math.floor(Math.random() * 10);
        
        // Random Sessiz Harf
        const Bsessiz = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T' ,'Q', 'V', 'Y', 'Z'];
        var BszRandom = Math.floor(Math.random() * 19);
        var BszRandom2 = Math.floor(Math.random() * 19);
        var BszRandom3 = Math.floor(Math.random() * 19);
        var BszRandom4 = Math.floor(Math.random() * 19);
        var BszRandom5 = Math.floor(Math.random() * 19);

        // Kucuk Harfler

        // Random Sesli Harf
        const sesli = ['a','e','ı','i','o','u','a','e','ı','i','o','u'];
        var sRandom = Math.floor(Math.random() * 12);
        var sRandom2 = Math.floor(Math.random() * 12);
        var sRandom3 = Math.floor(Math.random() * 12);
        var sRandom4 = Math.floor(Math.random() * 12);
        var sRandom5 = Math.floor(Math.random() * 12);
        
        // Random Sessiz Harf
        const sessiz = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't' ,'q', 'v', 'y', 'z'];
        var szRandom = Math.floor(Math.random() * 19);
        var szRandom2 = Math.floor(Math.random() * 19);
        var szRandom3 = Math.floor(Math.random() * 19);
        var szRandom4 = Math.floor(Math.random() * 19);
        var szRandom5 = Math.floor(Math.random() * 19);

        // Birlestirme
        var types = [
            // 6 Haneli
            sesli[sRandom]+sessiz[szRandom]+sesli[sRandom2]+sessiz[szRandom2]+sesli[sRandom3]+sessiz[szRandom3],
            sesli[sRandom]+sessiz[szRandom]+sesli[sRandom2]+sessiz[szRandom2]+sesli[sRandom3]+sesli[sRandom4],
            sessiz[szRandom4]+sessiz[szRandom]+sesli[sRandom2]+sessiz[szRandom2]+sesli[sRandom3]+sessiz[szRandom3],
            sessiz[szRandom]+sesli[sRandom]+sessiz[szRandom2]+sesli[sRandom2]+sessiz[szRandom3]+sesli[sRandom3],
            sessiz[szRandom]+sesli[sRandom]+sessiz[szRandom2]+sessiz[szRandom3]+sesli[sRandom2]+sessiz[szRandom4],
            // 8 Haneli
            sessiz[szRandom]+sesli[sRandom]+sessiz[szRandom2]+sesli[sRandom2]+sessiz[szRandom3]+sesli[sRandom3]+sessiz[szRandom4]+sesli[sRandom4],
            sesli[sRandom]+sessiz[szRandom]+sesli[sRandom2]+sessiz[szRandom2]+sesli[sRandom3]+sessiz[szRandom3]+sesli[sRandom4]+sessiz[szRandom4]
        ];
        var randomTypes = Math.floor(Math.random()*7);

        // Birlestirme 2
        var types2 = [
            // 6 Haneli
            Bsesli[BsRandom]+Bsessiz[BszRandom]+Bsesli[BsRandom2]+Bsessiz[BszRandom2]+Bsesli[BsRandom3]+Bsessiz[BszRandom3],
            Bsesli[BsRandom]+Bsessiz[BszRandom]+Bsesli[BsRandom2]+Bsessiz[BszRandom2]+Bsesli[BsRandom3]+Bsesli[BsRandom4],
            Bsessiz[BszRandom4]+Bsessiz[BszRandom]+Bsesli[BsRandom2]+Bsessiz[BszRandom2]+Bsesli[BsRandom3]+Bsessiz[BszRandom3],
            Bsessiz[BszRandom]+Bsesli[BsRandom]+Bsessiz[BszRandom2]+Bsesli[BsRandom2]+Bsessiz[BszRandom3]+Bsesli[BsRandom3],
            Bsessiz[BszRandom]+Bsesli[BsRandom]+Bsessiz[BszRandom2]+Bsessiz[BszRandom3]+Bsesli[BsRandom2]+Bsessiz[BszRandom4],
            // 8 Haneli
            Bsessiz[BszRandom]+Bsesli[BsRandom]+Bsessiz[BszRandom2]+Bsesli[BsRandom2]+Bsessiz[BszRandom3]+Bsesli[BsRandom3]+Bsessiz[BszRandom4]+Bsesli[BsRandom4],
            Bsesli[BsRandom]+Bsessiz[BszRandom]+Bsesli[BsRandom2]+Bsessiz[BszRandom2]+Bsesli[BsRandom3]+Bsessiz[BszRandom3]+Bsesli[BsRandom4]+Bsessiz[BszRandom4]
        ];
        var randomTypes2 = Math.floor(Math.random()*7);

        // Birlestirme 3
        var types3 = [
            // 6 Haneli
            Bsesli[BsRandom]+sessiz[szRandom]+Bsesli[BsRandom2]+sessiz[szRandom2]+sesli[sRandom3]+Bsessiz[BszRandom3],
            sesli[sRandom]+Bsessiz[BszRandom]+Bsesli[BsRandom2]+sessiz[szRandom2]+Bsesli[BsRandom3]+sesli[sRandom4],
            Bsessiz[BszRandom4]+sessiz[szRandom]+sesli[sRandom2]+Bsessiz[BszRandom2]+sesli[sRandom3]+Bsessiz[BszRandom3],
            sessiz[szRandom]+Bsesli[BsRandom]+Bsessiz[BszRandom2]+sesli[sRandom2]+Bsessiz[BszRandom3]+Bsesli[BsRandom3],
            Bsessiz[BszRandom]+Bsesli[BsRandom]+sessiz[szRandom2]+sessiz[szRandom3]+Bsesli[BsRandom2]+sessiz[szRandom4],
            // 8 Haneli
            sessiz[szRandom]+Bsesli[BsRandom]+sessiz[szRandom2]+Bsesli[BsRandom2]+sessiz[szRandom3]+Bsesli[BsRandom3]+Bsessiz[BszRandom4]+sesli[sRandom4],
            Bsesli[BsRandom]+sessiz[szRandom]+Bsesli[BsRandom2]+sessiz[szRandom2]+Bsesli[BsRandom3]+sessiz[szRandom3]+sesli[sRandom4]+Bsessiz[BszRandom4]
        ];
        var randomTypes3 = Math.floor(Math.random()*7);

        

        function calistir(){
            if(ck.checked === true){
                if(ck2.checked===true){
                    if(ck3.checked===true){
                        var sonuc = number+number2+types3[randomTypes3];
                        var sonuc2 = types3[randomTypes3]+number+number2;
                        var sonuc3 = number+number2+types3[randomTypes3]+number3+number4;
                        
                        var sonucList = [sonuc, sonuc2, sonuc3];
                        var sonucListSec = Math.floor(Math.random() *3);
                        return sonucList[sonucListSec];
                    }else{
                        var sonuc = number+number2+types2[randomTypes2];
                        var sonuc2 = types2[randomTypes2]+number+number2;
                        var sonuc3 = number+number2+types2[randomTypes2]+number3+number4;
                        
                        var sonucList = [sonuc, sonuc2, sonuc3];
                        var sonucListSec = Math.floor(Math.random() *3);
                        return sonucList[sonucListSec];
                    }
                }else if(ck3.checked === true){
                        var sonuc = number+number2+types[randomTypes];
                        var sonuc2 = types[randomTypes]+number+number2;
                        var sonuc3 = number+number2+types[randomTypes]+number3+number4;
                        
                        var sonucList = [sonuc, sonuc2, sonuc3];
                        var sonucListSec = Math.floor(Math.random() *3);
                        return sonucList[sonucListSec];
                }else{
                    var sonucList = [randomNumPass(randomNumberPassword)+randomNumPass(randomNumberPassword)+randomNumPass(randomNumberPassword)+randomNumPass(randomNumberPassword)+randomNumPass(randomNumberPassword)+randomNumPass(randomNumberPassword),randomNumPass(randomNumberPassword)+randomNumPass(randomNumberPassword)+randomNumPass(randomNumberPassword)+randomNumPass(randomNumberPassword)+randomNumPass(randomNumberPassword)+randomNumPass(randomNumberPassword)+randomNumPass(randomNumberPassword)+randomNumPass(randomNumberPassword)];
                    var sonucListSec = Math.floor(Math.random() * 2);
                    return sonucList[sonucListSec];
                }
            }else if(ck2.checked === true){
                if(ck3.checked===true){
                    var sonuc = types3[randomTypes3]
                    return sonuc;
                }else if(ck.checked===true){
                    var sonuc = number+number2+types[randomTypes];
                    var sonuc2 = types[randomTypes]+number+number2;
                    var sonuc3 = number+number2+types[randomTypes]+number3+number4;
                    
                    var sonucList = [sonuc, sonuc2, sonuc3];
                    var sonucListSec = Math.floor(Math.random() *3);
                    return sonucList[sonucListSec];
                }else {
                    var sonuc = types2[randomTypes2];
                    return sonuc;
                }
                
            }else if(ck3.checked === true){
                if(ck2.checked === true){
                    var sonuc = types3[randomTypes3]
                    return sonuc;
                }else if(ck.checked === true){
                    var sonuc = number+number2+types[randomTypes];
                    var sonuc2 = types[randomTypes]+number+number2;
                    var sonuc3 = number+number2+types[randomTypes]+number3+number4;
                    
                    var sonucList = [sonuc, sonuc2, sonuc3];
                    var sonucListSec = Math.floor(Math.random() *3);
                    return sonucList[sonucListSec];
                }else {
                    var sonuc = types[randomTypes];
                    return sonuc;
                }                
            }
            
        };
        

        return calistir();
       
    }

    addRandom(id,a){
        result.innerHTML += `
            <div class="card mt-3">
                <div class="card-body">
                    ${id} Random Password= ${a}
                </div>
            </div>
        `;
    }
}




btnGenerate.addEventListener('click',function(e){

    if(ck.checked != '' || ck2.checked != '' || ck3.checked != ''){
        if(miktar.value!=''){
            var i=0;
            while(i<miktar.value){
                var password = new passwordGenerator();
                password.addRandom(result.children.length+1+'-',password.createRandomPassword());
            i++
            }
        }else{
            var password = new passwordGenerator();
            password.addRandom('=>',password.createRandomPassword());
        }
    }else{
        
            alert('hata');
            // Hata
        
    }
        

    e.preventDefault();

});