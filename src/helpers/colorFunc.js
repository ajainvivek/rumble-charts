import _ from 'lodash';
import d3 from 'd3';

export default function colorFunc(colors) {
    if (_.isFunction(colors)) {
        return colors;
    } else if (_.isEmpty(colors)) {
        return d3.scale.category20();
    } else if (_.isString(colors)) {
        return d3.scale[colors]();
    } else {
        return d3.scale.ordinal().range(colors);
    }
}
