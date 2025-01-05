



const circle = document.getElementById('circle');


setTimeout(function() {
    
    circle.style.backgroundColor = 'yellow ';
}, 2000); 




function light() {
    document.getElementById('mode').style.background="linear-gradient( to right,rgb(82, 141, 209),rgb(179, 37, 54))";
    
    
}
function dark() {
    document.getElementById('mode').style.background="linear-gradient( to right,rgb(110, 236, 215),rgb(226, 149, 222))";
    
    
}

var z
    
    function change() {
        z = document.getElementById('img').style.background=" url('tree.jpeg') "; 
        z= document.getElementById('img').style.backgroundImage=" "
    }
        
        let texts = {
                    heading: "Web Designer Web Devloper",
                    intro: "Anas shah", 
                    detail: "hi! I an Anas shah, Frontend Web Devloper.I love codeing "
                };
                
                let indexes = {
                    heading: 0,
                    intro: 0,
                    detail: 0
                };
                
                const speed = 50;
            
                function typeText(element, text, property) {
                    if (indexes[property] < text.length) {
                        element.textContent += text.charAt(indexes[property]);
                        indexes[property]++;
                        setTimeout(() => typeText(element, text, property), speed);
                    }
                }
            
                window.onload = function() {
                    const introSpan = document.querySelector('.intro span');
                    const heading = document.querySelector('.detail');
                    const detail = document.querySelector('.detail-2');
                    
                    introSpan.textContent = '';
                    heading.textContent = '';
                    detail.textContent = '';
                    
                    setTimeout(() => typeText(introSpan, texts.intro, 'intro'), 0);
                    setTimeout(() => typeText(heading, texts.heading, 'heading'), 1000);
                    setTimeout(() => typeText(detail, texts.detail, 'detail'), 2500);
                }
