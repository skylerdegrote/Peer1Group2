// step 1
var value = 85;

//step 2
if (value >= 86) {
	value += 62;
} else {
	value -= 45;
};
console.log(value);
//step 3
value+="22";
console.log(value);
//step 4
var array= [];

for (var i=0; i<value.length; i++) {
	array[i]=value.charAt(i);
}
console.log(array);
console.log(value);

//step 5

array.pop();
array.shift();

console.log(array);

//step 6
var reverse="";
for (i=array.length-1; i>=0; i--){
	reverse=reverse+array[i];
}
console.log(reverse);

//step 7

value=parseInt(value);
reverse=parseInt(reverse);
console.log(value);
console.log(reverse);

//step 8

value=value+reverse;
console.log(value);

//step 9

if (value>4040) {

	value=2;

}else if(value == 60){

	value=98;

}else{
	value=1;

};
console.log(value);

//step 10
i=11;
while(i>0){

	i--;
	value++;
	console.log(i);
}

//step 11
console.log(value);

function something(val){	
	val=val.toString();
	if(val.length>1){
		
		val=val.slice(1);
		
	//}else{
	//	val.toString();
	}
	//value=val;
	return val;
	
};
//step 12
value=something(value);


console.log(value);
