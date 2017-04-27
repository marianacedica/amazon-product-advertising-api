var express = require('express');
var _ = require('lodash');
var Client = require('./src/client');
var config = require('./src/config');

var PORT = process.env.PORT || 3000;
var app = express();
var usrConfig = config.getConfig();

// get from DB
if (usrConfig.sandbox) {
    usrConfig.region = 'na';
    usrConfig.refreshToken = 'Atzr|IwEBIDBNksIx9-RFqasKapmAlzIg-VjCraWKM5kaP7FSJz5ec_g5uRjpKfdEe1mJsws24zhrMcH3f8pd00xPbPViUY4mENTyDziztjQ_xGyP-rsFd_MhlU6sgOVya4RwpFVwg1J4i86Sr3Li-ljQFhAi6fVE5Kf0Q9UQaoK9AXu5HQqv8ZywRMtTbauQQmaOECex8u8Wkrrz2bt8HFNXitvPBPZJEt2R1fbiV2W_e3IGG6fncJErWmZAeWwrPrVk4AQu1cdaY81U7wwbLvDhbuOvv3ZkKpAgUNmimErkGajVdMefa27QzuqV-yInRNfQFIi525wXi_mAJQLEd3ftsKgTp-rVX7AGh9ixdIoRaN24zzaohwu860ejxXrLvoEf0oWB3JaY_QP7iE-7KGR4UjKSgzQqddcHD3R4a4DpsZxEihegYetOUjDn-lV8lOnnx5OdGKDrQ5gMDjOZKV6R8B0kVb8ehe8IFudd6B21e35Bwo1yZ0epjS3wjMgSCyqPvhvHgujrUpvJF0XrdqO_roCEqP-pVAR1JdqeE8_teAiwXe5lj1b92A4aFq4AlCwPyC-lJRW896yTr6CCCxrDQMaleEdTvdGQ_rb0VvzI7Ggf03Knfw';
    usrConfig.accessToken = '';
    usrConfig.profileId = '164447190389066';
} else {
     usrConfig.region = 'na';
    usrConfig.refreshToken = 'Atzr|IwEBIDBNksIx9-RFqasKapmAlzIg-VjCraWKM5kaP7FSJz5ec_g5uRjpKfdEe1mJsws24zhrMcH3f8pd00xPbPViUY4mENTyDziztjQ_xGyP-rsFd_MhlU6sgOVya4RwpFVwg1J4i86Sr3Li-ljQFhAi6fVE5Kf0Q9UQaoK9AXu5HQqv8ZywRMtTbauQQmaOECex8u8Wkrrz2bt8HFNXitvPBPZJEt2R1fbiV2W_e3IGG6fncJErWmZAeWwrPrVk4AQu1cdaY81U7wwbLvDhbuOvv3ZkKpAgUNmimErkGajVdMefa27QzuqV-yInRNfQFIi525wXi_mAJQLEd3ftsKgTp-rVX7AGh9ixdIoRaN24zzaohwu860ejxXrLvoEf0oWB3JaY_QP7iE-7KGR4UjKSgzQqddcHD3R4a4DpsZxEihegYetOUjDn-lV8lOnnx5OdGKDrQ5gMDjOZKV6R8B0kVb8ehe8IFudd6B21e35Bwo1yZ0epjS3wjMgSCyqPvhvHgujrUpvJF0XrdqO_roCEqP-pVAR1JdqeE8_teAiwXe5lj1b92A4aFq4AlCwPyC-lJRW896yTr6CCCxrDQMaleEdTvdGQ_rb0VvzI7Ggf03Knfw';
    usrConfig.accessToken = '';
    usrConfig.profileId = '2314603341970157';
}



var client = new Client(usrConfig);

/**
 * CAMPAIGN MANAGER
 */
/** Returned object 
[
  {
    "code": "SUCCESS",
    "campaignId": 210894557191929
  }
]
*/
app.post('/campaigns', function (req, res) {
    var campaign = [{
        name: 'Holiday',
        state: 'enabled',
        startDate: '20170425',
        campaignType: 'sponsoredProducts',
        targetingType: 'manual',
        dailyBudget: 1
    }];
    client.createCampaigns(campaign, function (error, result) {
        if (!_.isEmpty(error)) {
            res.status(error.statusCode);
            res.send(error);
        } else {
            res.send(result);
        }

    });
});

app.put('/campaigns', function (req, res) {
    var campaigns = [{
        campaignId: 11388273803182,
        name: 'Campaign 9',
        state: 'enabled',
        startDate: '20170420',
        campaignType: 'sponsoredProducts',
        targetingType: 'manual',
        dailyBudget: 1
    },
    {
        campaignId: 127135937647154,
        name: 'Campaign 8 - Demo update campaign',
        state: 'enabled',
        startDate: '20170420',
        campaignType: 'sponsoredProducts',
        targetingType: 'manual',
        dailyBudget: 1
    }];
    client.updateCampaigns(campaigns, function (error, result) {
        if (!_.isEmpty(error)) {
            res.status(error.statusCode);
            res.send(error);
        } else {
            res.send(result);
        }
    });
});

app.get('/campaigns', function (req, res) {
    var queryParams = {
        startIndex: 0,
        count: 4,
        stateFilter: ''
    }
    client.listCampaigns('', function (error, result) {
        if (!_.isEmpty(error)) {
            res.status(error.statusCode);
            res.send(error);
        } else {
            res.send(result);
        }
    });
})

app.get('/campaignsEx', function (req, res) {
    client.listCampaignsEx('', function (error, result) {
        if (!_.isEmpty(error)) {
            res.status(error.statusCode);
            res.send(error);
        } else {
            res.send(result);
        }
    });
})

app.get('/campaigns/:campaignId', function (req, res) {
    var campaignId = req.params['campaignId'];
    client.getCampaign(campaignId, function (error, result) {
        if (!_.isEmpty(error)) {
            res.status(error.statusCode);
            res.send(error);
        } else {
            res.send(result);
        }
    });
})

app.get('/campaigns/archive/:campaignId', function (req, res) {
    var campaignId = req.params['campaignId'];
    client.archiveCampaign(campaignId, function (error, result) {
        if (!_.isEmpty(error)) {
            res.status(error.statusCode);
            res.send(error);
        } else {
            res.send(result);
        }
    });
})
/**================================ */

/**
 * AdGroup MANAGER
 */

app.post('/adGroups', function (req, res) {
    var adGroup = [{
        name: 'Adgroup 2 for campaign 6',
        campaignId: 227788946732087,
        defaultBid: 0.2,
        state: 'enabled'
    },
    {
        name: 'Adgroup 3 for campaign 7',
        campaignId: 228878922766269,
        defaultBid: 0.3,
        state: 'enabled'
    },
    {
        name: 'Adgroup 4 for campaign 8',
        campaignId: 127135937647154,
        defaultBid: 0.5,
        state: 'enabled'
    }];
    client.createAdGroups(adGroup, function (error, result) {
        if (!_.isEmpty(error)) {
            res.status(error.statusCode);
            res.send(error);
        } else {
            res.send(result);
        }
    });
});

app.put('/adGroups', function (req, res) {
    var adGroups = [{
        adGroupId: 249165991644306,
        name: 'Adgroup 2 for campaign 6',
        defaultBid: 0.2,
        state: 'paused'
    }];
    console.log(adGroups);
    client.updateAdGroups(adGroups, function (error, result) {
        if (!_.isEmpty(error)) {
            res.status(error.statusCode);
            res.send(error);
        } else {
            res.send(result);
        }
    });
});

app.get('/adGroups', function (req, res) {
    client.listAdGroups('', function (error, result) {
        if (!_.isEmpty(error)) {
            res.status(error.statusCode);
            res.send(error);
        } else {
            res.send(result);
        }
    });
});

app.get('/adGroupsEx', function (req, res) {
    client.listAdGroupsEx('', function (error, result) {
        if (!_.isEmpty(error)) {
            res.status(error.statusCode);
            res.send(error);
        } else {
            res.send(result);
        }
    });
});

app.get('/adGroups/:adGroupId', function (req, res) {
    var adGroupId = req.params['adGroupId'];
    client.getAdGroup(adGroupId, function (error, result) {
        if (!_.isEmpty(error)) {
            res.status(error.statusCode);
            res.send(error);
        } else {
            res.send(result);
        }
    });
});

app.get('/adGroups/archive/:adGroupId', function (req, res) {
    var adGroupId = req.params['adGroupId'];
    client.archiveCampaign(adGroupId, function (error, result) {
        if (!_.isEmpty(error)) {
            res.status(error.statusCode);
            res.send(error);
        } else {
            res.send(result);
        }
        res.send(result);
    });
});

/**
 * KEYWORD MANAGER
 */
// Cannot create keywords in ad groups belonging to auto targeted campaigns
// DUPLICATE code if keyword was existed!
app.post('/keywords', function (req, res) {
    var keywords = [{
        campaignId: 127135937647154,
        adGroupId: 138644248283076,
        keywordText: 'cat',
        matchType: 'broad',
        bid: 0.2,
        state: 'enabled'
    },
    {
        campaignId: 127135937647154,
        adGroupId: 138644248283076,
        keywordText: 'little',
        matchType: 'phrase',
        bid: 0.02,
        state: 'enabled'
    },
    {
        campaignId: 228878922766269,
        adGroupId: 234570594397144,
        keywordText: 'dog',
        matchType: 'exact',
        bid: 0.03,
        state: 'enabled'
    }];
    client.createBiddableKeywords(keywords, function (error, result) {
        if (!_.isEmpty(error)) {
            res.status(error.statusCode);
            res.send(error);
        } else {
            res.send(result);
        }
    });
});

app.get('/keywords', function (req, res) {
    client.listBiddableKeywords('', function (error, result) {
        if (!_.isEmpty(error)) {
            res.status(error.statusCode);
            res.send(error);
        } else {
            res.send(result);
        }
    });
});

/**
 * ProductAds MANAGER
 */
//  "code": "INVALID_ARGUMENT",
//    "description": "Product ad specified asin for create operation."
app.post('/productAds', function (req, res) {
    var productAds = [
        {
            campaignId: 127135937647154,
            adGroupId: 138644248283076,
            sku: '1displitter',
            asin: 'B01FK6M9V6',
            state: 'enabled'
        }
    ];
    client.createProductAds(productAds, function (error, result) {
        if (!_.isEmpty(error)) {
            res.status(error.statusCode);
            res.send(error);
        } else {
            res.send(result);
        }
    });
});

app.get('/productAds', function (req, res) {
    client.listProductAds('', function (error, result) {
        if (!_.isEmpty(error)) {
            res.status(error.statusCode);
            res.send(error);
        } else {
            res.send(result);
        }
    });
});
/**================================ */

app.listen(PORT, function (err) {
    if (err) {
        console.log(err);
    }

    console.log('Server is running on port ' + PORT);
})