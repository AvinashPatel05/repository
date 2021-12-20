<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Celcius to Fahrenhet</h2>

<p>Insert a number into one of the input fields below:</p>

<p><input id="c" onkeyup="convert('C')"> degrees Celsius</p>

<p><input id="f" onkeyup="convert('F')"> degrees Fahrenheit</p> 

<p>Note that the <b>Math.round()</b> method is used, so that the result will be returned as an integer.</p>

<script>
function convert(degree) {
  var x;
  if (degree == "C") {
    x = document.getElementById("c").value * 9 / 5 + 32;
    document.getElementById("f").value = Math.round(x);
  } else {
    x = (document.getElementById("f").value -32) * 5 / 9;
    document.getElementById("c").value = Math.round(x);
  }
}
</script>

</body>
</html>

