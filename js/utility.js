function inputValue(elementId) {
    const inputValuElement=document.getElementById(elementId);
    const foodValuElementstring=inputValuElement.value;
    const foodValu=parseFloat(foodValuElementstring);
    inputValuElement.value='';
    return foodValu;
}

function textValue(elementId) {
    const textValueElement=document.getElementById(elementId);
    const textValueElementsting=textValueElement.innerText;
    const textValue=parseFloat(textValueElementsting);
    return textValue;
}

function setText(elementId, newAmount) {
    const previousText=document.getElementById(elementId,newAmount);
    previousText.innerText=newAmount
}
