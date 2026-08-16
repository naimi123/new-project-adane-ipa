let cities = [
    {
        name :"الدار البيضاء",
        iso :"MA-CAS"
    },
    {
        name :"مراكش",
        iso :"MA-RAK"
    },
    {
        name :"الرباط",
        iso :"MA-RAB"
    },
    {
        name :"أكادير",
        iso : "MA-AGD"
    }
 ]
 for(city of cities){
    let contenet = `<option>${city.name}</option>`
    document.getElementById("select").innerHTML +=contenet;
 }
 function getplayer (value){
    let qery ={
    city : value,
    country:"MA"
 }
axios
  .get("https://api.aladhan.com/v1/timingsByCity", {
    params: qery 
  })
  .then((response) => {
    console.log(response.data.data.date.hijri.weekday.ar)
    const times = response.data.data.timings
    function gettime(id,tim){
    document.getElementById(id).innerHTML = tim
}
    gettime("time-makhribe",times.Maghrib)
    gettime("time-3asre",times.Asr)
    gettime("time-dohr",times.Dhuhr)
    gettime("time-sob7e",times.Sunrise)
    gettime("time-fajr",times.Fajr)
    gettime("time-icha",times.Isha)
    document.getElementById("title").innerHTML =`${response.data.data.date.readable}   ${response.data.data.date.hijri.weekday.ar}`
})
}
document.getElementById("select").addEventListener("change",function(){
    let citiname = ""
    for(key of cities){
        if(this.value ==key.name){
            citiname = key.iso
            document.getElementById("k1").innerHTML = this.value
        }
        getplayer(citiname)
    }
})
