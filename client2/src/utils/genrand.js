// algorithm to shuffle array
function genrand(min , max){
    let arr=[]
    function random_number(min,max){
      const random_num= Math.floor(Math.random() * (max+1-min));
      return random_num
    }
    for(var i=1;i<max+1; i++){
        arr.splice(random_number(min, max) , 0, i)}
    return arr;
   }
   
export default genrand

