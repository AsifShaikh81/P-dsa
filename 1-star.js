
//* outer loop is for row -> horizonatal
//* inner loop is colum -> vertical

//*square 
/* let n = 4
for (let i=0 ; i<n ;i++){
    for (let j =0 ; j<=n; j++){
        process.stdout.write("*") // this line printing horizontally/ row
    }
    console.log("")
} */

//*star pattern - right angel trai
/* let n =4
for (let i = 1; i <=n; i++) {
    for(let j=1 ; j<=i; j++){
         
        process.stdout.write("* ")

    }
    console.log("")
    
    
} */
//*number - right angel traingle
/* let m =4
for (let i = 1; i <=n; i++) {
    for(let j=1 ; j<=i; j++){
        // p.s.w -> do not print int, so concat with string -->" "
        process.stdout.write(j+" ")
        
    }
    console.log("")
    
    
} */

//* char - R A T
//String.fromCharCode(ascii) - to print ABCDE...
/* for (let i = 1; i <=5; i++) {
    let ascii = 65
    for(let j=1 ; j<=i; j++){
        process.stdout.write(String.fromCharCode(ascii)+" ")
        ascii++

    }
    console.log("")
    
    
} */

//* upside down R A T 
for (let i = 1; i <=5; i++) {
    for(let j=5 ; j>=i; j--){
        process.stdout.write("*")
        

    }
    console.log("")
    
    
}

//*mirror right angel traingle
let n= 5
for(let i = 1 ; i<=n; i++){
    // this loop for space
    for(let j = 1 ; j<=n-i; j++){
      process.stdout.write(" ")
    }
    // this loop is for star
    for(let j=1 ; j<=i;j++){
        process.stdout.write("*")
    }

    console.log("")
}