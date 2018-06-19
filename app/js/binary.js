

$(document).ready(function () {



    var my_chart = new Treant({
        chart: {
            container: "#tree-simple",
            connectors: {
                type: "straight",
                style: {
                    stroke: "#304FFE"
                }
            },
            levelSeparation: 50,
            siblingSeparation: 50
        },

        nodeStructure: {
            text: {

            },
            innerHTML: '<div class="tree__parent js-tree__parent">\n' +
            '                        <div class="tree-aside tree-aside_left">\n' +
            '                            <p class="tree-aside__title">Left</p>\n' +
            '                            <p class="tree-aside__text">34 member</p>\n' +
            '                            <div class="tree-aside__text">456,456 USD</div>\n' +
            '                        </div>\n' +
            '<div class="tree__item">\n' +
            '                        <div class="tree__header">\n' +
            '                            <div class="affiliate-table__logo affiliate-table__logo_blue tree__logo">\n' +
            '                                <span>CL</span>\n' +
            '                            </div>\n' +
            '                            <span class="tree__text">Cryptoconsulting</span>\n' +
            '                        </div>\n' +
            '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
            '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
            '                                <div class="tree__header-container">\n' +
            '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
            '                                        <span>LL</span>\n' +
            '                                    </div>\n' +
            '                                    <span class="tree__user">John Doe</span>\n' +
            '                                </div>\n' +
            '                                <div class="tree__info">\n' +
            '                                    Information\n' +
            '                                </div>\n' +
            '                            </div>\n' +
            '                            <div class="user-notify-list__item">\n' +
            '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
            '\t\t\t\t\t\t\t\t</span>\n' +
            '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
            '                                <span class="tree__value">Salpool</span>\n' +
            '                            </div>\n' +
            '                            <div class="user-notify-list__item">\n' +
            '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
            '                                </span>\n' +
            '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
            '                                <span class="tree__value">Cryptoconsulting</span>\n' +
            '                            </div>\n' +
            '                            <div class="user-notify-list__item">\n' +
            '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
            '                                </span>\n' +
            '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
            '                                <span class="tree__value">04.01.18</span>\n' +
            '                            </div>\n' +
            '                            <div class="user-notify-list__item">\n' +
            '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
            '\t\t\t\t\t\t\t\t</span>\n' +
            '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
            '                                <span class="tree__value">11:15:52</span>\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                    </div>' +
            '                        <div class="tree-aside tree-aside_right">\n' +
            '                            <p class="tree-aside__title">Right</p>\n' +
            '                            <p class="tree-aside__text">47 member</p>\n' +
            '                            <div class="tree-aside__text">65,32 USD</div>\n' +
            '                        </div>\n' +
            '                    </div>',
            children: [
                {
                    innerHTML: '<div class="tree__item">\n' +
                    '                        <div class="tree__header">\n' +
                    '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                    '                                <span>CL</span>\n' +
                    '                            </div>\n' +
                    '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                    '                        </div>\n' +
                    '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                    '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                    '                                <div class="tree__header-container">\n' +
                    '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                    '                                        <span>LL</span>\n' +
                    '                                    </div>\n' +
                    '                                    <span class="tree__user">John Doe</span>\n' +
                    '                                </div>\n' +
                    '                                <div class="tree__info">\n' +
                    '                                    Information\n' +
                    '                                </div>\n' +
                    '                            </div>\n' +
                    '                            <div class="user-notify-list__item">\n' +
                    '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                    '\t\t\t\t\t\t\t\t</span>\n' +
                    '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                    '                                <span class="tree__value">Salpool</span>\n' +
                    '                            </div>\n' +
                    '                            <div class="user-notify-list__item">\n' +
                    '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                    '                                </span>\n' +
                    '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                    '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                    '                            </div>\n' +
                    '                            <div class="user-notify-list__item">\n' +
                    '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                    '                                </span>\n' +
                    '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                    '                                <span class="tree__value">04.01.18</span>\n' +
                    '                            </div>\n' +
                    '                            <div class="user-notify-list__item">\n' +
                    '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                    '\t\t\t\t\t\t\t\t</span>\n' +
                    '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                    '                                <span class="tree__value">11:15:52</span>\n' +
                    '                            </div>\n' +
                    '                        </div>\n' +
                    '                    </div>',
                    children: [
                        {
                            innerHTML: '<div class="tree__item">\n' +
                            '                        <div class="tree__header">\n' +
                            '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                            '                                <span>CL</span>\n' +
                            '                            </div>\n' +
                            '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                            '                        </div>\n' +
                            '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                            '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                            '                                <div class="tree__header-container">\n' +
                            '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                            '                                        <span>LL</span>\n' +
                            '                                    </div>\n' +
                            '                                    <span class="tree__user">John Doe</span>\n' +
                            '                                </div>\n' +
                            '                                <div class="tree__info">\n' +
                            '                                    Information\n' +
                            '                                </div>\n' +
                            '                            </div>\n' +
                            '                            <div class="user-notify-list__item">\n' +
                            '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                            '\t\t\t\t\t\t\t\t</span>\n' +
                            '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                            '                                <span class="tree__value">Salpool</span>\n' +
                            '                            </div>\n' +
                            '                            <div class="user-notify-list__item">\n' +
                            '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                            '                                </span>\n' +
                            '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                            '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                            '                            </div>\n' +
                            '                            <div class="user-notify-list__item">\n' +
                            '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                            '                                </span>\n' +
                            '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                            '                                <span class="tree__value">04.01.18</span>\n' +
                            '                            </div>\n' +
                            '                            <div class="user-notify-list__item">\n' +
                            '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                            '\t\t\t\t\t\t\t\t</span>\n' +
                            '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                            '                                <span class="tree__value">11:15:52</span>\n' +
                            '                            </div>\n' +
                            '                        </div>\n' +
                            '                    </div>',
                            children: [
                                {
                                    innerHTML: '<div class="tree__item">\n' +
                                    '                        <div class="tree__header">\n' +
                                    '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                    '                                <span>CL</span>\n' +
                                    '                            </div>\n' +
                                    '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                    '                        </div>\n' +
                                    '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                                    '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                    '                                <div class="tree__header-container">\n' +
                                    '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                    '                                        <span>LL</span>\n' +
                                    '                                    </div>\n' +
                                    '                                    <span class="tree__user">John Doe</span>\n' +
                                    '                                </div>\n' +
                                    '                                <div class="tree__info">\n' +
                                    '                                    Information\n' +
                                    '                                </div>\n' +
                                    '                            </div>\n' +
                                    '                            <div class="user-notify-list__item">\n' +
                                    '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                    '\t\t\t\t\t\t\t\t</span>\n' +
                                    '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                    '                                <span class="tree__value">Salpool</span>\n' +
                                    '                            </div>\n' +
                                    '                            <div class="user-notify-list__item">\n' +
                                    '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                    '                                </span>\n' +
                                    '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                    '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                    '                            </div>\n' +
                                    '                            <div class="user-notify-list__item">\n' +
                                    '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                    '                                </span>\n' +
                                    '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                    '                                <span class="tree__value">04.01.18</span>\n' +
                                    '                            </div>\n' +
                                    '                            <div class="user-notify-list__item">\n' +
                                    '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                    '\t\t\t\t\t\t\t\t</span>\n' +
                                    '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                    '                                <span class="tree__value">11:15:52</span>\n' +
                                    '                            </div>\n' +
                                    '                        </div>\n' +
                                    '                    </div>',
                                },
                                {
                                    innerHTML: '<div class="tree__item">\n' +
                                    '                        <div class="tree__header">\n' +
                                    '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                    '                                <span>CL</span>\n' +
                                    '                            </div>\n' +
                                    '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                    '                        </div>\n' +
                                    '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                                    '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                    '                                <div class="tree__header-container">\n' +
                                    '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                    '                                        <span>LL</span>\n' +
                                    '                                    </div>\n' +
                                    '                                    <span class="tree__user">John Doe</span>\n' +
                                    '                                </div>\n' +
                                    '                                <div class="tree__info">\n' +
                                    '                                    Information\n' +
                                    '                                </div>\n' +
                                    '                            </div>\n' +
                                    '                            <div class="user-notify-list__item">\n' +
                                    '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                    '\t\t\t\t\t\t\t\t</span>\n' +
                                    '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                    '                                <span class="tree__value">Salpool</span>\n' +
                                    '                            </div>\n' +
                                    '                            <div class="user-notify-list__item">\n' +
                                    '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                    '                                </span>\n' +
                                    '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                    '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                    '                            </div>\n' +
                                    '                            <div class="user-notify-list__item">\n' +
                                    '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                    '                                </span>\n' +
                                    '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                    '                                <span class="tree__value">04.01.18</span>\n' +
                                    '                            </div>\n' +
                                    '                            <div class="user-notify-list__item">\n' +
                                    '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                    '\t\t\t\t\t\t\t\t</span>\n' +
                                    '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                    '                                <span class="tree__value">11:15:52</span>\n' +
                                    '                            </div>\n' +
                                    '                        </div>\n' +
                                    '                    </div>',
                                }
                            ]
                        },
                        {
                            innerHTML: '<div class="tree__item">\n' +
                            '                        <div class="tree__header">\n' +
                            '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                            '                                <span>CL</span>\n' +
                            '                            </div>\n' +
                            '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                            '                        </div>\n' +
                            '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                            '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                            '                                <div class="tree__header-container">\n' +
                            '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                            '                                        <span>LL</span>\n' +
                            '                                    </div>\n' +
                            '                                    <span class="tree__user">John Doe</span>\n' +
                            '                                </div>\n' +
                            '                                <div class="tree__info">\n' +
                            '                                    Information\n' +
                            '                                </div>\n' +
                            '                            </div>\n' +
                            '                            <div class="user-notify-list__item">\n' +
                            '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                            '\t\t\t\t\t\t\t\t</span>\n' +
                            '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                            '                                <span class="tree__value">Salpool</span>\n' +
                            '                            </div>\n' +
                            '                            <div class="user-notify-list__item">\n' +
                            '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                            '                                </span>\n' +
                            '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                            '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                            '                            </div>\n' +
                            '                            <div class="user-notify-list__item">\n' +
                            '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                            '                                </span>\n' +
                            '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                            '                                <span class="tree__value">04.01.18</span>\n' +
                            '                            </div>\n' +
                            '                            <div class="user-notify-list__item">\n' +
                            '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                            '\t\t\t\t\t\t\t\t</span>\n' +
                            '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                            '                                <span class="tree__value">11:15:52</span>\n' +
                            '                            </div>\n' +
                            '                        </div>\n' +
                            '                    </div>',
                            children: [
                                {
                                    innerHTML: '<div class="tree__item">\n' +
                                    '                        <div class="tree__header">\n' +
                                    '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                    '                                <span>CL</span>\n' +
                                    '                            </div>\n' +
                                    '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                    '                        </div>\n' +
                                    '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                                    '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                    '                                <div class="tree__header-container">\n' +
                                    '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                    '                                        <span>LL</span>\n' +
                                    '                                    </div>\n' +
                                    '                                    <span class="tree__user">John Doe</span>\n' +
                                    '                                </div>\n' +
                                    '                                <div class="tree__info">\n' +
                                    '                                    Information\n' +
                                    '                                </div>\n' +
                                    '                            </div>\n' +
                                    '                            <div class="user-notify-list__item">\n' +
                                    '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                    '\t\t\t\t\t\t\t\t</span>\n' +
                                    '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                    '                                <span class="tree__value">Salpool</span>\n' +
                                    '                            </div>\n' +
                                    '                            <div class="user-notify-list__item">\n' +
                                    '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                    '                                </span>\n' +
                                    '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                    '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                    '                            </div>\n' +
                                    '                            <div class="user-notify-list__item">\n' +
                                    '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                    '                                </span>\n' +
                                    '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                    '                                <span class="tree__value">04.01.18</span>\n' +
                                    '                            </div>\n' +
                                    '                            <div class="user-notify-list__item">\n' +
                                    '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                    '\t\t\t\t\t\t\t\t</span>\n' +
                                    '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                    '                                <span class="tree__value">11:15:52</span>\n' +
                                    '                            </div>\n' +
                                    '                        </div>\n' +
                                    '                    </div>',
                                },
                                {
                                    innerHTML: '<div class="tree__item">\n' +
                                    '                        <div class="tree__header">\n' +
                                    '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                    '                                <span>CL</span>\n' +
                                    '                            </div>\n' +
                                    '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                    '                        </div>\n' +
                                    '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                                    '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                    '                                <div class="tree__header-container">\n' +
                                    '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                    '                                        <span>LL</span>\n' +
                                    '                                    </div>\n' +
                                    '                                    <span class="tree__user">John Doe</span>\n' +
                                    '                                </div>\n' +
                                    '                                <div class="tree__info">\n' +
                                    '                                    Information\n' +
                                    '                                </div>\n' +
                                    '                            </div>\n' +
                                    '                            <div class="user-notify-list__item">\n' +
                                    '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                    '\t\t\t\t\t\t\t\t</span>\n' +
                                    '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                    '                                <span class="tree__value">Salpool</span>\n' +
                                    '                            </div>\n' +
                                    '                            <div class="user-notify-list__item">\n' +
                                    '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                    '                                </span>\n' +
                                    '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                    '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                    '                            </div>\n' +
                                    '                            <div class="user-notify-list__item">\n' +
                                    '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                    '                                </span>\n' +
                                    '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                    '                                <span class="tree__value">04.01.18</span>\n' +
                                    '                            </div>\n' +
                                    '                            <div class="user-notify-list__item">\n' +
                                    '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                    '\t\t\t\t\t\t\t\t</span>\n' +
                                    '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                    '                                <span class="tree__value">11:15:52</span>\n' +
                                    '                            </div>\n' +
                                    '                        </div>\n' +
                                    '                    </div>',

                                }
                            ]
                        }
                    ]
                },
                {
                    innerHTML: '<div class="tree__item">\n' +
                    '                        <div class="tree__header">\n' +
                    '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                    '                                <span>CL</span>\n' +
                    '                            </div>\n' +
                    '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                    '                        </div>\n' +
                    '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                    '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                    '                                <div class="tree__header-container">\n' +
                    '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                    '                                        <span>LL</span>\n' +
                    '                                    </div>\n' +
                    '                                    <span class="tree__user">John Doe</span>\n' +
                    '                                </div>\n' +
                    '                                <div class="tree__info">\n' +
                    '                                    Information\n' +
                    '                                </div>\n' +
                    '                            </div>\n' +
                    '                            <div class="user-notify-list__item">\n' +
                    '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                    '\t\t\t\t\t\t\t\t</span>\n' +
                    '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                    '                                <span class="tree__value">Salpool</span>\n' +
                    '                            </div>\n' +
                    '                            <div class="user-notify-list__item">\n' +
                    '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                    '                                </span>\n' +
                    '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                    '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                    '                            </div>\n' +
                    '                            <div class="user-notify-list__item">\n' +
                    '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                    '                                </span>\n' +
                    '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                    '                                <span class="tree__value">04.01.18</span>\n' +
                    '                            </div>\n' +
                    '                            <div class="user-notify-list__item">\n' +
                    '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                    '\t\t\t\t\t\t\t\t</span>\n' +
                    '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                    '                                <span class="tree__value">11:15:52</span>\n' +
                    '                            </div>\n' +
                    '                        </div>\n' +
                    '                    </div>',

                    children: [
                        {
                            innerHTML: '<div class="tree__item">\n' +
                            '                        <div class="tree__header">\n' +
                            '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                            '                                <span>CL</span>\n' +
                            '                            </div>\n' +
                            '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                            '                        </div>\n' +
                            '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                            '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                            '                                <div class="tree__header-container">\n' +
                            '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                            '                                        <span>LL</span>\n' +
                            '                                    </div>\n' +
                            '                                    <span class="tree__user">John Doe</span>\n' +
                            '                                </div>\n' +
                            '                                <div class="tree__info">\n' +
                            '                                    Information\n' +
                            '                                </div>\n' +
                            '                            </div>\n' +
                            '                            <div class="user-notify-list__item">\n' +
                            '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                            '\t\t\t\t\t\t\t\t</span>\n' +
                            '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                            '                                <span class="tree__value">Salpool</span>\n' +
                            '                            </div>\n' +
                            '                            <div class="user-notify-list__item">\n' +
                            '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                            '                                </span>\n' +
                            '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                            '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                            '                            </div>\n' +
                            '                            <div class="user-notify-list__item">\n' +
                            '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                            '                                </span>\n' +
                            '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                            '                                <span class="tree__value">04.01.18</span>\n' +
                            '                            </div>\n' +
                            '                            <div class="user-notify-list__item">\n' +
                            '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                            '\t\t\t\t\t\t\t\t</span>\n' +
                            '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                            '                                <span class="tree__value">11:15:52</span>\n' +
                            '                            </div>\n' +
                            '                        </div>\n' +
                            '                    </div>',
                            children: [
                                {
                                    innerHTML: '<div class="tree__item">\n' +
                                    '                        <div class="tree__header">\n' +
                                    '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                    '                                <span>CL</span>\n' +
                                    '                            </div>\n' +
                                    '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                    '                        </div>\n' +
                                    '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                                    '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                    '                                <div class="tree__header-container">\n' +
                                    '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                    '                                        <span>LL</span>\n' +
                                    '                                    </div>\n' +
                                    '                                    <span class="tree__user">John Doe</span>\n' +
                                    '                                </div>\n' +
                                    '                                <div class="tree__info">\n' +
                                    '                                    Information\n' +
                                    '                                </div>\n' +
                                    '                            </div>\n' +
                                    '                            <div class="user-notify-list__item">\n' +
                                    '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                    '\t\t\t\t\t\t\t\t</span>\n' +
                                    '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                    '                                <span class="tree__value">Salpool</span>\n' +
                                    '                            </div>\n' +
                                    '                            <div class="user-notify-list__item">\n' +
                                    '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                    '                                </span>\n' +
                                    '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                    '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                    '                            </div>\n' +
                                    '                            <div class="user-notify-list__item">\n' +
                                    '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                    '                                </span>\n' +
                                    '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                    '                                <span class="tree__value">04.01.18</span>\n' +
                                    '                            </div>\n' +
                                    '                            <div class="user-notify-list__item">\n' +
                                    '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                    '\t\t\t\t\t\t\t\t</span>\n' +
                                    '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                    '                                <span class="tree__value">11:15:52</span>\n' +
                                    '                            </div>\n' +
                                    '                        </div>\n' +
                                    '                    </div>',
                                },
                                {
                                    innerHTML: '<div class="tree__item">\n' +
                                    '                        <div class="tree__header">\n' +
                                    '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                    '                                <span>CL</span>\n' +
                                    '                            </div>\n' +
                                    '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                    '                        </div>\n' +
                                    '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                                    '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                    '                                <div class="tree__header-container">\n' +
                                    '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                    '                                        <span>LL</span>\n' +
                                    '                                    </div>\n' +
                                    '                                    <span class="tree__user">John Doe</span>\n' +
                                    '                                </div>\n' +
                                    '                                <div class="tree__info">\n' +
                                    '                                    Information\n' +
                                    '                                </div>\n' +
                                    '                            </div>\n' +
                                    '                            <div class="user-notify-list__item">\n' +
                                    '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                    '\t\t\t\t\t\t\t\t</span>\n' +
                                    '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                    '                                <span class="tree__value">Salpool</span>\n' +
                                    '                            </div>\n' +
                                    '                            <div class="user-notify-list__item">\n' +
                                    '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                    '                                </span>\n' +
                                    '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                    '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                    '                            </div>\n' +
                                    '                            <div class="user-notify-list__item">\n' +
                                    '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                    '                                </span>\n' +
                                    '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                    '                                <span class="tree__value">04.01.18</span>\n' +
                                    '                            </div>\n' +
                                    '                            <div class="user-notify-list__item">\n' +
                                    '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                    '\t\t\t\t\t\t\t\t</span>\n' +
                                    '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                    '                                <span class="tree__value">11:15:52</span>\n' +
                                    '                            </div>\n' +
                                    '                        </div>\n' +
                                    '                    </div>',
                                }
                            ]
                        },
                        {
                            innerHTML: '<div class="tree__item">\n' +
                            '                        <div class="tree__header">\n' +
                            '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                            '                                <span>CL</span>\n' +
                            '                            </div>\n' +
                            '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                            '                        </div>\n' +
                            '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                            '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                            '                                <div class="tree__header-container">\n' +
                            '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                            '                                        <span>LL</span>\n' +
                            '                                    </div>\n' +
                            '                                    <span class="tree__user">John Doe</span>\n' +
                            '                                </div>\n' +
                            '                                <div class="tree__info">\n' +
                            '                                    Information\n' +
                            '                                </div>\n' +
                            '                            </div>\n' +
                            '                            <div class="user-notify-list__item">\n' +
                            '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                            '\t\t\t\t\t\t\t\t</span>\n' +
                            '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                            '                                <span class="tree__value">Salpool</span>\n' +
                            '                            </div>\n' +
                            '                            <div class="user-notify-list__item">\n' +
                            '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                            '                                </span>\n' +
                            '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                            '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                            '                            </div>\n' +
                            '                            <div class="user-notify-list__item">\n' +
                            '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                            '                                </span>\n' +
                            '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                            '                                <span class="tree__value">04.01.18</span>\n' +
                            '                            </div>\n' +
                            '                            <div class="user-notify-list__item">\n' +
                            '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                            '\t\t\t\t\t\t\t\t</span>\n' +
                            '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                            '                                <span class="tree__value">11:15:52</span>\n' +
                            '                            </div>\n' +
                            '                        </div>\n' +
                            '                    </div>',
                            children: [
                                {
                                    innerHTML: '<div class="tree__item">\n' +
                                    '                        <div class="tree__header">\n' +
                                    '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                    '                                <span>CL</span>\n' +
                                    '                            </div>\n' +
                                    '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                    '                        </div>\n' +
                                    '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                                    '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                    '                                <div class="tree__header-container">\n' +
                                    '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                    '                                        <span>LL</span>\n' +
                                    '                                    </div>\n' +
                                    '                                    <span class="tree__user">John Doe</span>\n' +
                                    '                                </div>\n' +
                                    '                                <div class="tree__info">\n' +
                                    '                                    Information\n' +
                                    '                                </div>\n' +
                                    '                            </div>\n' +
                                    '                            <div class="user-notify-list__item">\n' +
                                    '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                    '\t\t\t\t\t\t\t\t</span>\n' +
                                    '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                    '                                <span class="tree__value">Salpool</span>\n' +
                                    '                            </div>\n' +
                                    '                            <div class="user-notify-list__item">\n' +
                                    '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                    '                                </span>\n' +
                                    '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                    '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                    '                            </div>\n' +
                                    '                            <div class="user-notify-list__item">\n' +
                                    '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                    '                                </span>\n' +
                                    '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                    '                                <span class="tree__value">04.01.18</span>\n' +
                                    '                            </div>\n' +
                                    '                            <div class="user-notify-list__item">\n' +
                                    '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                    '\t\t\t\t\t\t\t\t</span>\n' +
                                    '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                    '                                <span class="tree__value">11:15:52</span>\n' +
                                    '                            </div>\n' +
                                    '                        </div>\n' +
                                    '                    </div>',
                                },
                                {
                                    innerHTML: '<div class="tree__item">\n' +
                                    '                        <div class="tree__header">\n' +
                                    '                            <div class="affiliate-table__logo affiliate-table__logo_black tree__logo">\n' +
                                    '                                <span>CL</span>\n' +
                                    '                            </div>\n' +
                                    '                            <span class="tree__text">Cryptoconsulting</span>\n' +
                                    '                        </div>\n' +
                                    '                        <div class="user-notify-list tree__list js-tree-list" style="display: none">\n' +
                                    '                            <div class="user-notify-list__title tree__header-wrapper">\n' +
                                    '                                <div class="tree__header-container">\n' +
                                    '                                    <div class="affiliate-table__logo tree__user-logo affiliate-table__logo_blue">\n' +
                                    '                                        <span>LL</span>\n' +
                                    '                                    </div>\n' +
                                    '                                    <span class="tree__user">John Doe</span>\n' +
                                    '                                </div>\n' +
                                    '                                <div class="tree__info">\n' +
                                    '                                    Information\n' +
                                    '                                </div>\n' +
                                    '                            </div>\n' +
                                    '                            <div class="user-notify-list__item">\n' +
                                    '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__human">\n' +
                                    '\t\t\t\t\t\t\t\t</span>\n' +
                                    '                                <span class="user-notify-list__text tree__sub">Name</span>\n' +
                                    '                                <span class="tree__value">Salpool</span>\n' +
                                    '                            </div>\n' +
                                    '                            <div class="user-notify-list__item">\n' +
                                    '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__mail">\n' +
                                    '                                </span>\n' +
                                    '                                <span class="user-notify-list__text tree__sub">Sponsor</span>\n' +
                                    '                                <span class="tree__value">Cryptoconsulting</span>\n' +
                                    '                            </div>\n' +
                                    '                            <div class="user-notify-list__item">\n' +
                                    '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__date">\n' +
                                    '                                </span>\n' +
                                    '                                <span class="user-notify-list__text tree__sub">Date</span>\n' +
                                    '                                <span class="tree__value">04.01.18</span>\n' +
                                    '                            </div>\n' +
                                    '                            <div class="user-notify-list__item">\n' +
                                    '\t\t\t\t\t\t\t\t<span class="user-notify-list__icon tree__icon tree__time">\n' +
                                    '\t\t\t\t\t\t\t\t</span>\n' +
                                    '                                <span class="user-notify-list__text tree__sub">Time</span>\n' +
                                    '                                <span class="tree__value">11:15:52</span>\n' +
                                    '                            </div>\n' +
                                    '                        </div>\n' +
                                    '                    </div>',
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    });




});