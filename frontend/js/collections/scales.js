/**
 *  Copyright 2012, Entwine GmbH, Switzerland
 *  Licensed under the Educational Community License, Version 2.0
 *  (the "License"); you may not use this file except in compliance
 *  with the License. You may obtain a copy of the License at
 *
 *  http://www.osedu.org/licenses/ECL-2.0
 *
 *  Unless required by applicable law or agreed to in writing,
 *  software distributed under the License is distributed on an "AS IS"
 *  BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 *  or implied. See the License for the specific language governing
 *  permissions and limitations under the License.
 *
 */

/**
 * A module representing a scales collection
 * @module collections-scales
 * @requires jquery
 * @requires underscore
 * @requires models-scale
 * @requires backbone
 */
define(["jquery",
        "underscore",
        "models/scale",
        "backbone"],

    function ($, _, Scale, Backbone) {

        "use strict";

        /**
         * @constructor
         * @see {@link http://www.backbonejs.org/#Collection}
         * @augments module:Backbone.Collection
         * @memberOf module:collections-scales
         * @alias module:collections-scales.Scales
         */
        var Scales = Backbone.Collection.extend({

            /**
             * Model of the instances contained in this collection
             * @alias module:collections-scales.Scales#initialize
             */
            model: Scale,

            /**
             * constructor
             * @alias module:collections-scales.Scales#initialize
             */
            initialize: function (models, video) {
                this.video = video;
            },

            /**
             * Parse the given data
             * @alias module:collections-scales.Scales#parse
             * @param  {object} data Object or array containing the data to parse.
             * @return {object}      the part of the given data related to the scales
             */
            parse: function (data) {
                if (data.scales && _.isArray(data.scales)) {
                    return data.scales;
                } else if (_.isArray(data)) {
                    return data;
                } else {
                    return null;
                }
            },

            /**
             * Get the url for this collection
             * @alias module:collections-scales.Scales#url
             * @return {String} The url of this collection
             */
            url: function () {
                return (this.video ? _.result(this.video, "url") : "") + "/scales";
            }
        });

        return Scales;
    }
);
