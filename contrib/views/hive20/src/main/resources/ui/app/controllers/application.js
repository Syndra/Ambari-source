/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Ember from 'ember';
import ENV from 'ui/config/environment';

export default Ember.Controller.extend({
  serviceCheck: Ember.inject.service(),
  ldapAuth: Ember.inject.service(),

  languages: [
  	[language: 'English', code: 'en'],
  	[language: 'German', code: 'de'],
  	[language: 'Korean', code: 'kr']
  ],
  currentLanguage: {
    code: 'de'
  },

  serviceCheckCompleted: Ember.computed('serviceCheck.transitionToApplication', 'ldapAuth.passwordRequired', function() {
    if(this.get('ldapAuth.passwordRequired'))
      return false;
    return !ENV.APP.SHOULD_PERFORM_SERVICE_CHECK || this.get('serviceCheck.transitionToApplication');
  })
});
