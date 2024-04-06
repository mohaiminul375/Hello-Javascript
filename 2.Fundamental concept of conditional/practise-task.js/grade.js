let mark =77;

if (mark >= 0 && mark <= 100) {
    if(mark >= 90 && mark <=100){
     console.log('your grade is A')
    }
    else if(mark >= 80 && mark <= 89){
        console.log('your grade is B')
    }
    else if(mark >= 70 && mark <= 79){
        console.log('your grade is c')
    }
    else if(mark >= 60 && mark <= 69){
        console.log('your grade is D')
    }
    else if(mark >= 0 && mark <= 59){
        console.log('your grade is F')
    }
}

else{
    console.log('please input a valid number')
}
