const txt = document.createElement('terminal');
const csl = document.getElementById('terminal');

const term = {
    log: (msg, type) => {
        if (type === 'date') {
            const text = document.createElement('a');
            const status = document.createElement('a');
            const sep = document.createElement('a');
            const sep2 = document.createElement('a');
            const br = document.createElement('br');

            sep.textContent = "  [ ";
            status.textContent = `${new Date(new Date().getTime())}`;
            sep2.textContent = " ]  ";
            text.textContent = msg;

            status.setAttribute('class', 'date');
            sep.setAttribute('class', 'separator');
            sep2.setAttribute('class', 'separator');

            txt.append(sep);
            txt.append(status);
            txt.append(sep2);
            txt.append(text);
            txt.append(br);
            csl.append(txt);
        };
        if (type === "green") {
            const color = document.createElement('a');
            const br = document.createElement('br');

            color.textContent = msg;
            color.setAttribute('class', 'green');

            txt.append(color);
            txt.append(br);
            csl.append(txt);
        };
        if (type === "yellow") {
            const color = document.createElement('a');
            const br = document.createElement('br');

            color.textContent = msg;
            color.setAttribute('class', 'yellow');

            txt.append(color);
            txt.append(br);
            csl.append(txt);
        };
        if (type === "red") {
            const color = document.createElement('a');
            const br = document.createElement('br');

            color.textContent = msg;
            color.setAttribute('class', 'red');

            txt.append(color);
            txt.append(br);
            csl.append(txt);
        };
        if (type === "blue") {
            const color = document.createElement('a');
            const br = document.createElement('br');

            color.textContent = msg;
            color.setAttribute('class', 'blue');

            txt.append(color);
            txt.append(br);
            csl.append(txt);
        };
    }
};
