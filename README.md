# Mindustry Logic Sugar

This is mlog extension that adds syntactic sugar.  
Script converts syntactic sugar into mlog code.  
It adds 3 macrooperators: `$`, `%` and `*`.  

## How to use

**If you want to just use it:** You can access online converter at http://mlog-sugar.ruika.repl.co/  
**If you want to include it in your project:** Include the `convertSugar(text)` function from `convert.js` file in your project.  

## Operators list

### Replacement ($)

This operator gets replaced with the substitution.  
**Syntax:** `$tag`  
**Example:**
```
%a=duo1
control shoot $a @thisx @thisy true
```
**Result:**
```
control shoot duo1 @thisx @thisy true
```

### Definition (%)

This operator replaces all `$tag` entries with `value`.  
**Syntax:** `%tag=value`  
**Example:**
```
%leader=foreshadow1
sensor shootx $leader @shootX
sensor shooty $leader @shootY
sensor shooting $leader @shooting
```
**Result:**
```
sensor shootx foreshadow1 @shootX
sensor shooty foreshadow1 @shootY
sensor shooting foreshadow1 @shooting
```

### Label (*)

This operator replaces all `$tag` entries with number of line which this operator is placed on.  
**Syntax:** `*tag`  
**Example:**
```
*a sensor enabled switch1 @enabled
jump $a equal enabled true
```
**Result:**
```
sensor enabled switch1 @enabled
jump 0 equal enabled true
```

## Warnings
Operators in this extension are highly sensitive. All operators must strictly follow the syntax, otherwise it might lead to errors.

<table>
  <tr>
    <th></th>
    <th>:heavy_check_mark: Correct</th>
    <th>:x: Incorrect</th>
  </tr>
  <tr>
    <td>Definition operator (%) must always be on a separate line.</td>
    <td>%a=8<br>op sub result $a 10</td>
    <td>%a=8 op sub result $a 10</td>
  </tr>
  <tr>
    <td>Definition operator (%) must have no spaces near "=" sign.</td>
    <td>%a="Hello world!"</td>
    <td>%a = "Hello world!"</td>
  </tr>
  <tr>
    <td>All tags must not have any spaces.</td>
    <td>%my_number=20<br>op div result $my_number 5</td>
    <td>%my number=20<br>op div result $my number 5</td>
  </tr>
  <tr>
    <td>Label operator (*) must always be at start of line.</td>
    <td>*label print "Hi!"</td>
    <td>print "Hi!" *label</td>
  </tr>
</table>
