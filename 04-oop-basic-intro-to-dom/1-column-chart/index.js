export default class ColumnChart {
  chartHeight = 50;

  constructor({ label = '', value = '', link = '', formatHeading = value => value, data = [] } = {}) {
    this.data = data;
    this.label = label;
    this.value = formatHeading(value);
    this.link = link;

    this.render(this.data);
  }

  render(data) {
    const element = document.createElement('div');

    let elementBody = null;
    element.classList.add('column-chart');
    element.style.setProperty('--chart-height', '50');

    if (data && data.length > 0) {
      const columnsHeight = this.countColumnHeight(data);

      const chartColumns = columnsHeight.map(column => `<div style="--value: ${column.value}" data-tooltip="${column.percent}"></div>`).join('');

      elementBody =
      `
      <div class="column-chart__title">
        ${this.label}
        <a href="${this.link}" class="column-chart__link">View all</a>
      </div>
      <div class="column-chart__container">
        <div data-element="header" class="column-chart__header">${this.value}</div>
        <div data-element="body" class="column-chart__chart">
          ${chartColumns}
        </div>
      </div>
      `;
    } else {
      element.classList.add('column-chart_loading');

      elementBody =
      `
      <div class="column-chart__title">
        ${this.label}
        <a class="column-chart__link" href="${this.link}">View all</a>
      </div>
      <div class="column-chart__container">
        <div data-element="header" class="column-chart__header">
          ${this.value}
        </div>
        <div data-element="body" class="column-chart__chart">

        </div>
      </div>
      `;
    }

    element.innerHTML = elementBody;

    this.element = element;
  }

  update(newData) {
    this.render(newData);
  }

  remove() {
    this.element = null;
  }

  destroy() {
    this.element = null;
  }

  countColumnHeight(data) {
    const maxValue = Math.max(...data);
    const scale = 50 / maxValue;

    return data.map(item => {
      return {
        percent: (item / maxValue * 100).toFixed(0) + '%',
        value: String(Math.floor(item * scale))
      };
    });
  }
}
