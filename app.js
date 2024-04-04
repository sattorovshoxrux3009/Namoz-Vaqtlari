const time=document.querySelector('#time');
const date=document.querySelector('#date');
const area=document.querySelector('#area')
const select=document.querySelector('#select')
const angle=document.querySelector('#angle')
const areaText=document.querySelector('.climate')

//Times
const tong=document.getElementById('tong')
const quyosh=document.getElementById('quyosh')
const peshin=document.getElementById('peshin')
const asr=document.getElementById('asr')
const shom=document.getElementById('shom')
const xufton=document.getElementById('xufton')

const oylar=[
    'Yanvar',
    'Fevral',
    'Mart',
    'Aprel',
    'May',
    'Iyun',
    'Iyul',
    'Avgust',
    'Sentyabr',
    'Oktyabr',
    'Noyabr',
    'Dekabr'
]
const kunlar=[
    'Dushanba',
    'Seshanba',
    'Chorshanba',
    'Payshanba',
    'Juma',
    'Shanba',
    'Yakshanba'
]
setInterval(()=>{
    const data= new Date();
    const hour=data.getHours()>9 ? data.getHours()  : '0' + data.getHours()
    const minute=data.getMinutes()>9 ? data.getMinutes()  : '0' + data.getMinutes()
    const second=data.getSeconds()>9 ? data.getSeconds()  : '0' + data.getSeconds()
    time.textContent=`${hour}:${minute}:${second}`
    date.textContent=`${kunlar[data.getDay()-1]}, ${data.getDate()}-${oylar[data.getMonth()]}`
},1000)
select.addEventListener('change',()=>{
    const selectText=select.value;
    locations=selectText;
    areaText.textContent=selectText
    setTimes(selectText);
    locations=selectText;
    localStorage.setItem('locations',selectText)
})
const setTimes=(location) => {
   const data = getData(location).then((data)=>{
        asr.textContent=data.times.asr
        xufton.textContent=data.times.hufton
        peshin.textContent=data.times.peshin
        quyosh.textContent=data.times.quyosh
        tong.textContent=data.times.tong_saharlik
        shom.textContent=data.times.shom_iftor
   })
   const error = getData(location).catch((data)=>{
    alert('Error!')
   })
}
areaText.textContent=locations;
select.value=locations;
setTimes(select.value);
