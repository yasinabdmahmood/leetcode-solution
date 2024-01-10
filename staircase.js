var climbStairs = function(n) {
    const memo = {};
    let counter = 0;
    const outer = (x) => {
        if(memo[x]){
            counter+=memo[x];
            return memo[x];
        }
        const p1 = oneStep(x);
        const p2 = twoStep(x);
        memo[x] = p1+p2;
    }
    const oneStep = (s) => {
        if(s == 1){
            counter++;
            return 1;
        } 
        return outer(s-1);
    }

    const twoStep = (y) => {
        if(y == 2){
            counter++;
            return true;
        }
        if(y > 2){return outer(y-2);}
        return 0;
    } 
    outer(n);
    return counter;   
};
console.log(climbStairs(4));