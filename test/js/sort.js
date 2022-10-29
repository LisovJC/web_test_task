var list = $(".block");
let arr = [...list];
var wrapper = $(".blocks-wrapper");
wrapper.html('');

Sorting(arr, list);

function Sorting(array, list)
{
  for(var i = 0; i < array.length; i++)
  {
   for(var j = 0; j < ( array.length - i -1 ); j++)
   {
     if(parseInt(array[j].innerHTML) > parseInt(array[j+1].innerHTML))
     {
       var temp = array[j];
       array[j] = array[j + 1];
       array[j+1] = temp;
     }
   }
 }
 arr = array;
 for (var i = 0; i < arr.length; i++)
 {
   wrapper.append(arr[i]);
 }
}
