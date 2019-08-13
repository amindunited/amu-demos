import htm from 'htm';
import styles from './colour-demo.module.scss';
import htmRenderer from '~/htm-renderer';

const html = htm.bind(htmRenderer);

class ColourDemo extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback () {
    // const shadow = this.attachShadow({mode: 'open'});
    const styleEl = document.createElement('style');
    styleEl.innerHTML = styles;
    const colourGroups = {
      'Black and White': [
        'WHITE',
        'BLACK',
      ],
      'Greys': [
          'GREY_LIGHTEST',
          'GREY_LIGHT',
          'GREY',
          'GREY_DARK',
          'GREY_DARKEST',
        ],
        'Brand Primary': [
          'BRAND_PRIMARY_LIGHTEST',
          'BRAND_PRIMARY_LIGHT',
          'BRAND_PRIMARY',
          'BRAND_PRIMARY_DARK',
          'BRAND_PRIMARY_DARKEST',
        ],
        'Brand Secondary': [
          'BRAND_SECONDARY_LIGHTEST',
          'BRAND_SECONDARY_LIGHT',
          'BRAND_SECONDARY',
          'BRAND_SECONDARY_DARK',
          'BRAND_SECONDARY_DARKEST',
        ],
        'Brand Tertiary': [
          'BRAND_TERTIARY_LIGHTEST',
          'BRAND_TERTIARY_LIGHT',
          'BRAND_TERTIARY',
          'BRAND_TERTIARY_DARK',
          'BRAND_TERTIARY_DARKEST',
        ],
        'Brand Quaternary': [
          'BRAND_QUATERNARY_LIGHTEST',
          'BRAND_QUATERNARY_LIGHT',
          'BRAND_QUATERNARY',
          'BRAND_QUATERNARY_DARK',
          'BRAND_QUATERNARY_DARKEST',
        ]
    };

    const colours = [
      'SUCCESS_LIGHTEST',
      'SUCCESS_LIGHT',
      'SUCCESS',
      'SUCCESS_DARK',
      'SUCCESS_DARKEST',
      'INFO_LIGHTEST',
      'INFO_LIGHT',
      'INFO',
      'INFO_DARK',
      'INFO_DARKEST',
      'ERROR_LIGHTEST',
      'ERROR_LIGHT',
      'ERROR',
      'ERROR_DARK',
      'ERROR_DARKEST',
      'WARN_LIGHTEST',
      'WARN_LIGHT',
      'WARN',
      'WARN_DARK',
      'WARN_DARKEST',
      'PROMOTE',
      'PROMOTE_LIGHT',
      'PROMOTE_LIGHTEST',
      'PROMOTE_DARK',
      'PROMOTE_DARKEST',
      'AUX_RED',
      'AUX_GREEN',
      'AUX_BLUE',
      'AUX_ORANGE',
      'AUX_YELLOW',
      'AUX_PURPLE'
    ];

    const coloursList = (colours) => {
      const result = colours.map((colour) => {
        return `<li>${colour}</li>`;
      });
      console.log('result? ', result);
      return result;
    }

    this.appendChild(styleEl);
    const content = html`<div>
      ${Object.keys(colourGroups).reduce((htmlString, group) => {
        return htmlString + `
        <div class="colour-group">
          <div class="group-name">${group}</div>
          <ul>
          ${colourGroups[group].reduce((colourString, colour) => {
            return colourString + `<li><colour-swatch class="__var-${colour}" scss-var-name="$${colour}"></colour-swatch></li>` }, '')
          }
        </ul>
      </div>`
      }, '')}
    </div>`;

    this.appendChild(content);

  }
}

export default ColourDemo;
