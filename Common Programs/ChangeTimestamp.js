// Vid #4 Ques #3 Interviewnest mock interview


let time = "09:03PM"

if(time.endsWith("PM")){
    let hour = Number(time.slice(0,2)) + 12;
    console.log(hour + time.slice(2,5));
}