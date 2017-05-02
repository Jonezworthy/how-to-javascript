/*
                                                                                                                                                                                     
          JJJJJJJJJJJ                                                         SSSSSSSSSSSSSSS                                          iiii                              tttt          
          J:::::::::J                                                       SS:::::::::::::::S                                        i::::i                          ttt:::t          
          J:::::::::J                                                      S:::::SSSSSS::::::S                                         iiii                           t:::::t          
          JJ:::::::JJ                                                      S:::::S     SSSSSSS                                                                        t:::::t          
            J:::::J  aaaaaaaaaaaaavvvvvvv           vvvvvvvaaaaaaaaaaaaa   S:::::S                ccccccccccccccccrrrrr   rrrrrrrrr  iiiiiiippppp   ppppppppp   ttttttt:::::ttttttt    
            J:::::J  a::::::::::::av:::::v         v:::::v a::::::::::::a  S:::::S              cc:::::::::::::::cr::::rrr:::::::::r i:::::ip::::ppp:::::::::p  t:::::::::::::::::t    
            J:::::J  aaaaaaaaa:::::av:::::v       v:::::v  aaaaaaaaa:::::a  S::::SSSS          c:::::::::::::::::cr:::::::::::::::::r i::::ip:::::::::::::::::p t:::::::::::::::::t    
            J:::::j           a::::a v:::::v     v:::::v            a::::a   SS::::::SSSSS    c:::::::cccccc:::::crr::::::rrrrr::::::ri::::ipp::::::ppppp::::::ptttttt:::::::tttttt    
            J:::::J    aaaaaaa:::::a  v:::::v   v:::::v      aaaaaaa:::::a     SSS::::::::SS  c::::::c     ccccccc r:::::r     r:::::ri::::i p:::::p     p:::::p      t:::::t          
JJJJJJJ     J:::::J  aa::::::::::::a   v:::::v v:::::v     aa::::::::::::a        SSSSSS::::S c:::::c              r:::::r     rrrrrrri::::i p:::::p     p:::::p      t:::::t          
J:::::J     J:::::J a::::aaaa::::::a    v:::::v:::::v     a::::aaaa::::::a             S:::::Sc:::::c              r:::::r            i::::i p:::::p     p:::::p      t:::::t          
J::::::J   J::::::Ja::::a    a:::::a     v:::::::::v     a::::a    a:::::a             S:::::Sc::::::c     ccccccc r:::::r            i::::i p:::::p    p::::::p      t:::::t    tttttt
J:::::::JJJ:::::::Ja::::a    a:::::a      v:::::::v      a::::a    a:::::a SSSSSSS     S:::::Sc:::::::cccccc:::::c r:::::r           i::::::ip:::::ppppp:::::::p      t::::::tttt:::::t
 JJ:::::::::::::JJ a:::::aaaa::::::a       v:::::v       a:::::aaaa::::::a S::::::SSSSSS:::::S c:::::::::::::::::c r:::::r           i::::::ip::::::::::::::::p       tt::::::::::::::t
   JJ:::::::::JJ    a::::::::::aa:::a       v:::v         a::::::::::aa:::aS:::::::::::::::SS   cc:::::::::::::::c r:::::r           i::::::ip::::::::::::::pp          tt:::::::::::tt
     JJJJJJJJJ       aaaaaaaaaa  aaaa        vvv           aaaaaaaaaa  aaaa SSSSSSSSSSSSSSS       cccccccccccccccc rrrrrrr           iiiiiiiip::::::pppppppp              ttttttttttt  
                                                                                                                                             p:::::p                                   
                                                                                                                                             p:::::p                                   
                                                                                                                                            p:::::::p                                  
                                                                                                                                            p:::::::p                                  
                                                                                                                                            p:::::::p                                  
                                                                                                                                            ppppppppp                                  

 
 */

//// Getting started, basic syntax and language basics
//// How to do a condition

if (process) {
    ////True
}

if (process) {
    ////True
} else {
    ////False
}

if (process) {
    ////True
} else if (global) {
    ////True
} else {
    ////False
}
////Negation
if (!process){ //if process is falsy 
    
}
if (process.env.OS !== 'Windows_NT'){ //if not value (negation)
    
}

////Switches are useful ways of making conditional statements easier to read - only if it is not nested!
////Scenario - say we have a string, and we want to condition on the value of the string
var input = 'no';
switch (input) {
    case  'boo':
        console.log('booooooooooooooooooo');
        break;
    case 'no':
        console.log('no means no');
        break;
    case 'hi': //falls through, use this syntax to join 2 cases together
    case 'hello':
        console.log('hello again');
        break;
    default:
        console.log('unknown input');
        break;
}

////If you need to do a multiple variable switch, you can by switching on true
switch (true){
    case input === 'hello':
        
        break;
    case typeof input === 'object':
        console.log('Uh oh');
        break;
}

////Ternary operator / shorthand conditional declaration

var alternative = process.env.OS === 'Windows_NT' ? 'Windows machine' : 'Linux'; //Ternary

////^ This ^ is the same as the below
if (process.env.OS === 'Windows_NT'){
    alternative = 'Windows machine';
} else {
    alternative = 'Linux';
}

////Shorthand conditional declaration
var OS = process.env.OS || 'Linux'; //This means, the value on the left of the pipes is the preffered value, but if it is FALSY, 'Linux' is used
////This piping can be used as a coalesce like function
OS = process.env.OS || alternative || 'Linux';

//// Refer to variables.js for more info


