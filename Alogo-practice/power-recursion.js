function power(base, expo){
    if(expo==1) return base;
    return base * power(base,expo-1)
}

power(2,4)
power(5,2)