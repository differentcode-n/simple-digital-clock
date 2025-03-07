function digitalClock()
{
    let dateObj = new Date()

    let curhours = dateObj.getHours()
    let curmin = dateObj.getMinutes()
    let cursec = dateObj.getSeconds()

    let selectedElem = document.getElementsByTagName('span')
    selectedElem[0].innerText = curhours;
    selectedElem[1].innerText = curmin;
    selectedElem[2].innerText = cursec;

    let curDate = dateObj.getDate()
    let curmon = dateObj.getMonth()+1
    let curYear = dateObj.getFullYear()

    selectedElem[3].innerText = curDate;
    selectedElem[4].innerText = curmon;
    selectedElem[5].innerText = curYear;

    let curday = dateObj.getDay()

    switch(curday)
    {
        case 4: curday="Tursday"
        break;
    }

}


