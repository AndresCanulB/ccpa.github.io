
let marquee = document.querySelector(".main__marquee");
let group = document.querySelector(".marquee__group");
let copy = group.cloneNode(true);

copy.setAttribute("aria-hidden", "true");

marquee.appendChild(copy);
