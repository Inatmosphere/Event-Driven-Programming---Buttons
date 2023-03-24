/*Azumbra_Joshua --- (New currTime build, non freezing)*/

function whileloop() 
{   alert("Payload is away")
    var currTime = 10; 
    var i = 1; 


    while (i <12)   /*<--Due to the fact the "i" variable starts off as 1 and adds 1, to reach zero on a 10, there needs to be a buffer of 2*/
    { 
        setTimeout(function () { 
            document.getElementById("counttimeTimer").innerHTML = "Time until launch" + currTime; 
            currTime=currTime -1;
             }, 1000 * i); 
        i = i+1;
      
            }
            if (i >=12) /*if statement, inside the whileloop, detecting when i is greater or equal to 12, otherwise known as when currTime is 0 */
            {
                setTimeout(function () {        /**in order for this if statement to actuate properly with the existing variables, it needs to declare its own setTimeout function to not be actuated imediatly */
                    document.getElementById("counttimeTimer2").innerHTML = "Blastoff"; 
                    currTime=currTime -1;
                     }, 1000 * i); 
                i = i+1;
            } 
}

function currcancel() /*launch cancel function, works by directly opposing the whileloop function 1 to 1 */
{
    alert("launch canceled")
    var currTime2 = 10; /*now operates off of a different variable set to allow for a resume button*/
    var i2 = 1;
    var i = 1;
    var currTime = 10;

    while (i2 <12) 
    { 
        setTimeout(function () { 
            document.getElementById("counttimeTimer2").innerHTML = "Delay initiated" + currTime2; 
            currTime2=currTime2 -1;   /*now set 1 to 1 from previous currTime build*/
             }, 1000 * i2); 
        i2 = i2 +1; 
    }
    if (i2 <=12) /*if statement, inside the whileloop, detecting when i2 is less or equal to 12, otherwise known as when currTime is 0 */
            {
                setTimeout(function () {        /**in order for this if statement to actuate properly with the existing variables, it needs to declare its own setTimeout function to not be actuated imediatly */
                    document.getElementById("counttimeTimer2").innerHTML = "launch aborted" + i; 
                    currTime2=currTime2 -1;
                     }, 1000 * i2); 
                i2 = i2+1;
                i = i-1;
                currTime = currTime+2
            }


}
function currreup() /*resume function*/
{   alert("Payload is away")
    var currTime3 = 10; 
    var i3 = 1; 


    while (i3 <12)   /*<--Due to the fact the "i" variable starts off as 1 and adds 1, to reach zero on a 10, there needs to be a buffer of 2*/
    { 
        setTimeout(function () { 
            document.getElementById("counttimeTimer").innerHTML = "Time until launch" + currTime3; 
            currTime3=currTime3 -1;
             }, 1000 * i3); 
        i3 = i3+1;
      
            }
            if (i3 >=12) /*if statement, inside the whileloop, detecting when i is greater or equal to 12, otherwise known as when currTime is 0 */
            {
                setTimeout(function () {        /**in order for this if statement to actuate properly with the existing variables, it needs to declare its own setTimeout function to not be actuated imediatly */
                    document.getElementById("counttimeTimer2").innerHTML = "Blastoff"; 
                    currTime3=currTime3 -1;
                     }, 1000 * i3); 
                i3 = i3+1;
            } 
}