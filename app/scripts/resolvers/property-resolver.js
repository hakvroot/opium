/**
 * Created by dmitriy.ryajov on 7/17/15.
 */

import Resolver from './resolver';

export default class PropResolver extends Resolver {

    /**
     * Construct property resolver
     *
     * @param injector - Injector instance to be used
     * @param propName - Property name
     */
    constructor(injector, propName = '$inject') {
        super(injector);

        this.propName = propName;
    }

    /**
     * Resolve dependency names
     *
     * @param obj - Object to resolve property for
     * @returns {*}
     */
    resolve(obj) {
        if (!(this.propName in obj)) {
            console.info(`Undefined object or no injector property "${this.propName}" found!`);
            return;
        }

        return obj[this.propName];
    }
}
