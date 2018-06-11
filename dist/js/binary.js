$(document).ready(function () {
    new Vue({
        el: "#app",
        data: function () {
            return {
                csv: null,
                selected: null,
                settings: {
                    strokeColor: "#29B5FF",
                    width: 100
                }
            };
        },
        mounted: function () {
            var that = this;
            d3.csv("../js/tree-data.csv",
                function (error, data) {
                    if (error) throw error;
                    that.csv = data;
                }
            );
        },
        computed: {
            root: function () {
                if (this.csv) {
                    var root = d3.stratify()
                        .id(function (d) { return d.node; })
                        .parentId(function (d) { return d.parent; })
                        (this.csv);
                    return this.tree(root);
                }
            },
            tree: function () {
                return d3
                    .tree()
                    .size([700, this.settings.width - 400]);
            },
            nodes: function () {
                var that = this;
                if (this.root) {
                    return this.root.descendants().map(function (d) {
                        let x = (100 + d.x) + "px";
                        let y = parseInt(-1 * d.y + 30) + "px";
                        return {
                            id: d.id,
                            r: 2.5,
                            text: d.id,
                            style: {
                                transform: "translate(" + x + "," + y + ")"
                            },
                            textpos: {
                                x: d.children ? -8 : 8,
                                y: 3
                            },
                            textStyle: {
                                textAnchor: d.children ? "end" : "start"
                            }
                        };
                    });
                }
            },
            links: function () {
                let that = this;
                if (this.root) {
                    return this.root.descendants().slice(1).map(function (d) {
                        let x = d.x + 100, parent_x = d.parent.x + 100;
                        let y = parseInt(-1 * d.y + 30);
                        let parent_y = parseInt(-1 * d.parent.y + 30);
                        return {
                            id: d.id,
                            d: "M" + x + "," + y + "L" + parent_x + "," + parent_y,
                            style: {
                                stroke: that.settings.strokeColor
                            }
                        };
                    });
                }
            }

        },
        methods: {
            select: function (index, node) {
                this.selected = index;
            }
        }
    });
});