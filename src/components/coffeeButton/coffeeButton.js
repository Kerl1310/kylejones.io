import React from 'react';

class CoffeeButton extends React.Component {    
    render() {
        return (
            <div id="coffee-button-span">
                <a href="https://www.buymeacoffee.com/KyleJones">
                    <img width="192" height="60" src="https://img.buymeacoffee.com/button-api/?text=Buy a Coffee&emoji=☕&slug=KyleJones&button_colour=25313b&font_colour=ffffff&font_family=Poppins&outline_colour=ffffff&coffee_colour=FFDD00"/>
                </a>
            </div>
        );
    }
}

export default CoffeeButton;