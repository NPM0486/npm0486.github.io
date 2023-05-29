var r = document.querySelector(':root');

var theme = document.querySelectorAll('input[name="theme"]');
for(let i = 0; i < theme.length; i++)
{
    theme[i].addEventListener('click', function () {
    let value = document.querySelector('input[name="theme"]:checked').value;
    if (value == '1') {
        r.style.setProperty('--background', '#3a4764');
        r.style.setProperty('--keypad-background', '#232c43');
        r.style.setProperty('--display-background', '#182034');
        r.style.setProperty('--alt-font-color', '#fff');
        r.style.setProperty('--keys-background', '#eae3dc');
        r.style.setProperty('--font-color', '#444b5a');
        r.style.setProperty('--keypad-background', '#232c43');
        r.style.setProperty('--keys-shadow', '#b4a597');
        r.style.setProperty('--rem-keys-color', '#637097');
        r.style.setProperty('--rem-keys-shadow', '#404e72');
        r.style.setProperty('--equal-color', '#d03f2f');
        r.style.setProperty('--equal-shadow', '#93261a70');
        r.style.setProperty('--alt-alt-font-color', '#fff');
        r.style.setProperty('--equal-font-color', '#fff');
        r.style.setProperty('--toogle-background', '#232c43');
        r.style.setProperty('--toogle-circle', '#d03f2f');
        
    } else if (value == '2') {
        r.style.setProperty('--background', '#e6e6e6');
        r.style.setProperty('--keypad-background', '#d1cccc');
        r.style.setProperty('--display-background', '#ededed');
        r.style.setProperty('--alt-font-color', '#36362b');
        r.style.setProperty('--keys-background', '#e5e4e1');
        r.style.setProperty('--font-color', '#35352c');
        r.style.setProperty('--keys-shadow', '#a69d91');
        r.style.setProperty('--rem-keys-color', '#377f86');
        r.style.setProperty('--rem-keys-shadow', '#1b5f65');
        r.style.setProperty('--equal-color', '#ca5502');
        r.style.setProperty('--equal-shadow', '#893901');
        r.style.setProperty('--alt-alt-font-color', '#ffffff');
        r.style.setProperty('--equal-font-color', '#fff');
        r.style.setProperty('--toogle-background', 'hsl(0, 5%, 81%)');
        r.style.setProperty('--toogle-circle', 'hsl(25, 98%, 40%)');
    } else if (value == '3') {
        r.style.setProperty('--background', '#160628');
        r.style.setProperty('--keypad-background', '#1d0934');
        r.style.setProperty('--display-background', '#1d0934');
        r.style.setProperty('--alt-font-color', '#ffe53d');
        r.style.setProperty('--keys-background', '#341c4f');
        r.style.setProperty('--font-color', '#ffe53d');
        r.style.setProperty('--keys-shadow', '#871c9c');
        r.style.setProperty('--rem-keys-color', '#58077d');
        r.style.setProperty('--rem-keys-shadow', '#bc15f4');
        r.style.setProperty('--equal-color', '#00e0d1');
        r.style.setProperty('--equal-shadow', '#6cf9f2');
        r.style.setProperty('--alt-alt-font-color', '#ffffff');
        r.style.setProperty('--equal-font-color', '#1b2428');
        r.style.setProperty('--toogle-background', 'hsl(268, 71%, 12%)');
        r.style.setProperty('--toogle-circle', 'hsl(176, 100%, 44%)');
    }
});
}