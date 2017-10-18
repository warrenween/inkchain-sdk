/**
 * Copyright 2017 IBM All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

// This is an end-to-end test that focuses on exercising all parts of the fabric APIs
// in a happy-path scenario
'use strict';

var utils = require('fabric-client/lib/utils.js');
var logger = utils.getLogger('E2E install-chaincode');

var tape = require('tape');
var _test = require('tape-promise');
var test = _test(tape);

var testUtil = require('../utils/unit/util.js');

var inkUtils = require('./../InkUtils.js');

const TOKEN_CHAINCODE_PATH = 'github.com/token';
const TOKEN_CHAINCODE_ID = 'token';
const TOKEN_VERSION = 'v0';

var sleep = require('sleep');

test('\n\n***** inkchain flow: chaincode install *****\n\n', (t) => {
    testUtil.setupChaincodeDeploy();

    inkUtils.instantiateChaincode('org1', TOKEN_CHAINCODE_ID, TOKEN_CHAINCODE_PATH, TOKEN_VERSION, false, t)
        .then((result) => {
            if(result){
                t.pass('Successfully instantiated chaincode on the channel');

                return inkUtils.sleep(5000);
            }
            else {
                t.fail('Failed to instantiate chaincode ');
                t.end();
            }
        }, (err) => {
            t.fail('Failed to instantiate chaincode on the channel. ' + err.stack ? err.stack : err);
            t.end();
        }).then(() => {
        logger.debug('Successfully slept 5s to wait for chaincode instantiate to be completed and committed in all peers');
        t.end();
    }).catch((err) => {
        t.fail('Test failed due to unexpected reasons. ' + err.stack ? err.stack : err);
        t.end();
    });
});
