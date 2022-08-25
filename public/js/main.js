const numberInput = document.getElementById('num');
const textInput = document.getElementById('text-msg');
const sendBtn = document.getElementById('send-btn')

sendBtn.addEventListener('click', send,false);

async function send(){
    const number = numberInput.value;
    const text = textInput.value;

    const data = {
        number,
        text
    }
    const res = await fetch('/',{
        method: 'POST',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify(data),
    })

    const bla = await res.json();
    console.log(bla);
}


