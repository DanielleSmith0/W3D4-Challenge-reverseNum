const backwards = num => {
    while(num){
        let lastDigit = num % 10;
        console.log(lastDigit);
        num = (num - lastDigit)/10;
    }
}

backwards(43);