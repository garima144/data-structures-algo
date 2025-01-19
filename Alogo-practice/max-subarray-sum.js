function maxsubarraysum(params,n) {
    let count = 0;
    for(let i=0; i<params.length; i++){
        for(let j=0; j<n; j++ ){
            count = count + params[i+j]
        }
    }
}