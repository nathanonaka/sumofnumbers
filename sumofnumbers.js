
var test = [1, 2, 3, 4];
function sumFor(nums)
{
  var total = 0;
  for(var num of nums)
  {
    total += num;
  }
  return total;
}

function sumTheSimpleWay(nums)
{
  return _.reduce(nums, function(memo, num) {return memo + num}, 0);
}
console.log(sumTheSimpleWay(test));
