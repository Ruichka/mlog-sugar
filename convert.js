function convertSugar(a) {
  if (a[a.length] != "\n") {a = a + "\n"}
  var b = a.split("\n")
  var f = []
  var o = 0
  for (var i=0;i<b.length;i++) {
    if (b[i][0] == "%") {
      var c = b[i].substr(1,b[i].length)
      var d = c.split("=")
      f.push({tag:d[0],value:d[1]})
      o++
    }
    if (b[i][0] == "*") {
      var c = b[i].split(" ")
      var d = c[0].substr(1,c[0].length)
      var e = i - o
      f.push({tag:d,value:e})
    }
  }
  for (var i=0;i<f.length;i++) {
    a = a.replaceAll("$" + f[i].tag + "\n",f[i].value + "\n")
    a = a.replaceAll("$" + f[i].tag + " ",f[i].value + " ")
    a = a.replace("%" + f[i].tag + "=" + f[i].value + "\n","")
    a = a.replace("*" + f[i].tag + " ","")
  }
  if (a[a.length-1] == "\n") {a = a.substr(0,a.length-1)}
  return a
}
