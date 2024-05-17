const popupContainerStyle = {
    position: 'absolute',
    top: '0',
    zIndex: '9999',
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    width: 'fit-content',
    maxWidth: '300px',
    height: 'fit-content',
    boxShadow: '0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05)',
    borderRadius: '10px',
    left: '40%',
    transform: 'translateX(-50%)',
    padding: '10px',
}

const popupMessageStyle = {
    margin: '0 0 0 30px',
    fontFamily: 'Helvetica, sans-serif',
    maxWidth: '290px',
    lineBreak: 'anywhere',
    color: '#363636'
}

const svgStyle = {
    width: '16px',
    height: '16px',
    position: 'absolute',
    left: '12px',
    opacity: '0'
}

const errorSvgCode = `<svg id="Capa_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" xml:space="preserve" width="800px" height="800px" fill="#000000">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <circle style="fill:#e82b11;" cx="25" cy="25" r="25"/> <polyline style="fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" points="16,34 25,25 34,16 "/> <polyline style="fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" points="16,16 25,25 34,34 "/> </g>

</svg>`

const validSvgCode = `<svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" xml:space="preserve" width="800px" height="800px" fill="#000000">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <circle style="fill:#25ad34;" cx="25" cy="25" r="25"/> <polyline style="fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" points=" 38,15 22,33 12,25 "/> </g>

</svg>`

const warningSvgCode = `<svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" xml:space="preserve" width="800px" height="800px" fill="#000000">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <circle style="fill:#ffd11a;" cx="25" cy="25" r="25"/> <line style="fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" x1="25" y1="10" x2="25" y2="32"/> <line style="fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" x1="25" y1="37" x2="25" y2="39"/> </g>

</svg>`

function createSvg(svgCode) {
    return new DOMParser().parseFromString(svgCode, 'image/svg+xml').documentElement;
}

const validSvg = createSvg(validSvgCode);

const errorSvg = createSvg(errorSvgCode);

const warningSvg = createSvg(warningSvgCode);




class Popup {


    applyStyle(element, style) {
        Object.assign(element.style, style);
    }


    createPopup(content, duration, svg, containerStyle, messageStyle) {
        containerStyle = {...popupContainerStyle, ...containerStyle}
        messageStyle = {...popupMessageStyle, ...messageStyle}

        let popupContainer = document.createElement('div');
        let message = document.createElement('p');

        this.applyStyle(svg, svgStyle);
        this.applyStyle(popupContainer, containerStyle);
        this.applyStyle(message, messageStyle);

        message.textContent = content;

        popupContainer.appendChild(svg)
        popupContainer.appendChild(message);
        window.document.body.appendChild(popupContainer);

        this.animateContainerBounceIn(popupContainer, svg, popup);

        setTimeout(() => {
            this.animateContainerBounceOut(popupContainer);
        }, duration);
    }

    message(content, duration, containerStyle, messageStyle) {
        this.createPopup(content, duration, validSvg, containerStyle, messageStyle);
    }

    error(content, duration, containerStyle, messageStyle) {
        this.createPopup(content, duration, errorSvg, containerStyle, messageStyle);
    }

    warn(content, duration, containerStyle, messageStyle) {
        this.createPopup(content, duration, warningSvg, containerStyle, messageStyle);
    }

    custom(content, duration, svgCode, containerStyle, messageStyle) {
        let svg = createSvg(svgCode);
        this.createPopup(content, duration, svg, containerStyle, messageStyle);
    }


    animateBounceIn(element) {
        let scale = 0.1;

        function step() {
            if (scale >= 1) {
                cancelAnimationFrame(animation);
                return;
            }

            scale += 0.05; // Augmentation progressive de l'échelle
            element.style.opacity = scale;
            element.style.transform = `scale(${scale})`;
            animation = requestAnimationFrame(step);
        }

        let animation = requestAnimationFrame(step);
    }

    animateContainerBounceIn(element, svg, popup) {
        let scale = -100;

        function step() {
            if (scale >= 1) {
                cancelAnimationFrame(animation);
                popup.animateBounceIn(svg);
                return;
            }

            scale += 5; // Augmentation progressive de l'échelle
            element.style.transform = `translateY(${scale}px)`;
            animation = requestAnimationFrame(step);
        }

        let animation = requestAnimationFrame(step);


    }

    animateContainerBounceOut(element) {
        let scale = 1;

        function step() {
            if (scale <= -100) {
                cancelAnimationFrame(animation);
                element.remove();
                return;
            }

            scale -= 5; // Augmentation progressive de l'échelle
            element.style.transform = `translateY(${scale}px)`;
            animation = requestAnimationFrame(step);
        }

        let animation = requestAnimationFrame(step);
    }

}