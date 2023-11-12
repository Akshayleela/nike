<!-- Different Ways TO Display the Data -->
1.innerHTML
> Writes data into a certain HTML element

2.document.write()
> It displays the data in the HTML output
3.window.alert()
> It displays the data in the alert box
4.console.log()
> It displays the data in the browser console

<!-- INput Statements -->
1. window.prompt()
> It will popup a box to take the input.
> Accept any type of data but saves as a 'STRING'
 <script>
  <!-- var lel=window.prompt();
            const Elem= document.getElementById('input');
            Elem.inputMode = lel -->
</script>

2. window.confirm()
> It can accept only two values through the buttons of dialog box : confirm(returns true) and cancel(returns false).
<script>
       var x=window.confirm();
            Element = document.getElementById('confirm')
            if(x==true){
                Element.innerHTML ='This is true!'
            }            
            else{
                Element.innerHTML ='This is false'
            }
</script>