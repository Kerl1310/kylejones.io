import React, { Component } from 'react';
import '../i18n';
import { withTranslation } from 'react-i18next';

class CoffeeButton extends Component {
    render() {
        const { t } = this.props;
        const text = t("coffeeButtonText");
        const source = `https://img.buymeacoffee.com/button-api/?text=${text}&emoji=☕&slug=KyleJones&button_colour=25313b&font_colour=ffffff&font_family=Poppins&outline_colour=ffffff&coffee_colour=FFDD00`
        return (
            <div id="coffee-button-span">
                <a href="https://www.buymeacoffee.com/KyleJones">
                    <img src={source} alt="" width="192" height="60"/>
                </a>
            </div>
        );
    }
}

export default withTranslation()(CoffeeButton);