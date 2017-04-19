/**
 * Purpose: Amazon Product Advertising API wrapper
 * Author: Quang Nguyen
 * Date: Apr 2017
 * Note: This is initial code for quick implement. It has not refactored yet! :)
 */

var request = require('request');
var _ = require('lodash');
var configApp = require('./config');

function Client(config) {
    if (!(this instanceof Client)) {
        return new Client(config);
    }

    this.config = config;
    this.apiVersion = configApp.getVersions().apiVersion;
    this.applicationVersion = configApp.getVersions().applicationVersion;
    this.endpoints = configApp.getRegions();
    this.endpoint = setEndpoint(this);
}

/* ====================================== */
/* 1. Campaign Interface */
/* Purpose: Used to create, read, update or delete Campaigns
/* ====================================== */

    Client.prototype.listCampaigns = function (data, cb) {
    var that = this;
    if (that.config.accessToken) {
        that.operation('campaigns', data, 'GET', that.config.accessToken, function(err, result){
            cb(err, result);
        });
    } else {
        if (that.config.refreshToken && !that.config.accessToken) {
         that.getAuthToken(function (accessToken) {
            that.operation('campaigns', data, 'GET', accessToken, function(err, result){
                that.config.accessToken = accessToken;
                cb(err, result);
            });
         });
         }
    }   
}

Client.prototype.listCampaignsEx = function (data, cb) {
    var that = this;
    if (that.config.accessToken) {
        that.operation('campaigns/extended', data, 'GET', that.config.accessToken, function(err, result){
            cb(err, result);
        });
    } else {
        if (that.config.refreshToken && !that.config.accessToken) {
         that.getAuthToken(function (accessToken) {
            that.operation('campaigns/extended', data, 'GET', accessToken, function(err, result){
                that.config.accessToken = accessToken;
                cb(err, result);
            });
         });
         }
    }   
}

Client.prototype.getCampaign = function (campaignId, cb) {
      var that = this;
    if (that.config.accessToken) {
        that.operation(`campaigns/${campaignId}`, '', 'GET', that.config.accessToken, function(err, result){
            cb(err, result);
        });
    } else {
        if (that.config.refreshToken && !that.config.accessToken) {
         that.getAuthToken(function (accessToken) {
            that.operation(`campaigns/${campaignId}`, '', 'GET', accessToken, function(err, result){
                that.config.accessToken = accessToken;
                cb(err, result);
            });
         });
         }
    }   
}

Client.prototype.getCampaignEx = function (campaignId, cb) {
      var that = this;
    if (that.config.accessToken) {
        that.operation(`campaigns/extended/${campaignId}`, '', 'GET', that.config.accessToken, function(err, result){
            cb(err, result);
        });
    } else {
        if (that.config.refreshToken && !that.config.accessToken) {
         that.getAuthToken(function (accessToken) {
            that.operation(`campaigns/extended/${campaignId}`, '', 'GET', accessToken, function(err, result){
                that.config.accessToken = accessToken;
                cb(err, result);
            });
         });
         }
    }   
}

Client.prototype.createCampaigns = function (data, cb) {
    var that = this;
    if (that.config.accessToken) {
        that.operation('campaigns', data, 'POST', that.config.accessToken, function(err, result){
            cb(err, result);
        });
    } else {
        if (that.config.refreshToken && !that.config.accessToken) {
         that.getAuthToken(function (accessToken) {
            that.operation('campaigns', data, 'POST', accessToken, function(err, result){
                that.config.accessToken = accessToken;
                cb(err, result);
            });
         });
         }
    }   
}

Client.prototype.updateCampaigns = function (data, cb) {
    var that = this;
    if (that.config.accessToken) {
        that.operation('campaigns', data, 'PUT', that.config.accessToken, function(err, result){
            cb(err, result);
        });
    } else {
        if (that.config.refreshToken && !that.config.accessToken) {
         that.getAuthToken(function (accessToken) {
            that.operation('campaigns', data, 'PUT', accessToken, function(err, result){
                that.config.accessToken = accessToken;
                cb(err, result);
            });
         });
         }
    }   
}

Client.prototype.archiveCampaign = function (campaignId, cb) {
      var that = this;
    if (that.config.accessToken) {
        that.operation(`campaigns/${campaignId}`, '', 'DELETE', that.config.accessToken, function(err, result){
            cb(err, result);
        });
    } else {
        if (that.config.refreshToken && !that.config.accessToken) {
         that.getAuthToken(function (accessToken) {
            that.operation(`campaigns/${campaignId}`, '', 'DELETE', accessToken, function(err, result){
                that.config.accessToken = accessToken;
                cb(err, result);
            });
         });
         }
    }   
}

/* ====================================== */
/* END - Campaign Interface */
/* ====================================== */



/* ====================================== */
/* 2. Adgroup Interface */
/* Purpose: Used to create, read, update or delete Ad Groups.
/* ====================================== */

Client.prototype.listAdGroups = function (data, cb) {
    var that = this;
    if (that.config.accessToken) {
        that.operation('adGroups', data, 'GET', that.config.accessToken, function(err, result){
            cb(err, result);
        });
    } else {
        if (that.config.refreshToken && !that.config.accessToken) {
         that.getAuthToken(function (accessToken) {
            that.operation('adGroups', data, 'GET', accessToken, function(err, result){
                that.config.accessToken = accessToken;
                cb(err, result);
            });
         });
         }
    }   
}

Client.prototype.listAdGroupsEx = function (data, cb) {
    var that = this;
    if (that.config.accessToken) {
        that.operation('adGroups/extended', data, 'GET', that.config.accessToken, function(err, result){
            cb(err, result);
        });
    } else {
        if (that.config.refreshToken && !that.config.accessToken) {
         that.getAuthToken(function (accessToken) {
            that.operation('adGroups/extended', data, 'GET', accessToken, function(err, result){
                that.config.accessToken = accessToken;
                cb(err, result);
            });
         });
         }
    }   
}

Client.prototype.getAdGroup = function (adGroupId, cb) {
      var that = this;
    if (that.config.accessToken) {
        that.operation(`adGroups/${adGroupId}`, '', 'GET', that.config.accessToken, function(err, result){
            cb(err, result);
        });
    } else {
        if (that.config.refreshToken && !that.config.accessToken) {
         that.getAuthToken(function (accessToken) {
            that.operation(`adGroups/${adGroupId}`, '', 'GET', accessToken, function(err, result){
                that.config.accessToken = accessToken;
                cb(err, result);
            });
         });
         }
    }   
}

Client.prototype.getAdGroupEx = function (adGroupId, cb) {
      var that = this;
    if (that.config.accessToken) {
        that.operation(`adGroups/extended/${adGroupId}`, '', 'GET', that.config.accessToken, function(err, result){
            cb(err, result);
        });
    } else {
        if (that.config.refreshToken && !that.config.accessToken) {
         that.getAuthToken(function (accessToken) {
            that.config.accessToken = accessToken;
            that.operation(`adGroups/extended/${adGroupId}`, '', 'GET', accessToken, function(err, result){
                cb(err, result);
            });
         });
         }
    }   
}

Client.prototype.createAdGroups = function (data, cb) {
    var that = this;
    if (that.config.accessToken) {
        that.operation('adGroups', data, 'POST', that.config.accessToken, function(err, result){
            cb(err, result);
        });
    } else {
        if (that.config.refreshToken && !that.config.accessToken) {
         that.getAuthToken(function (accessToken) {
            that.operation('adGroups', data, 'POST', accessToken, function(err, result){
                that.config.accessToken = accessToken;
                cb(err, result);
            });
         });
         }
    }   
}

Client.prototype.updateAdGroups = function (data, cb) {
    var that = this;
    if (that.config.accessToken) {
        that.operation('adGroups', data, 'PUT', that.config.accessToken, function(err, result){
            cb(err, result);
        });
    } else {
        if (that.config.refreshToken && !that.config.accessToken) {
         that.getAuthToken(function (accessToken) {
            that.operation('adGroups', data, 'PUT', accessToken, function(err, result){
                that.config.accessToken = accessToken;
                cb(err, result);
            });
         });
         }
    }   
}

Client.prototype.archiveAdGroup = function (adGroupId, cb) {
      var that = this;
    if (that.config.accessToken) {
        that.operation(`adGroups/${adGroupId}`, '', 'DELETE', that.config.accessToken, function(err, result){
            cb(err, result);
        });
    } else {
        if (that.config.refreshToken && !that.config.accessToken) {
         that.getAuthToken(function (accessToken) {
            that.operation(`adGroups/${adGroupId}`, '', 'DELETE', accessToken, function(err, result){
                that.config.accessToken = accessToken;
                cb(err, result);
            });
         });
         }
    }   
}
/* ====================================== */
/* END - Adgroup Interface */
/* ====================================== */

/* ====================================== */
/* 3. BiddableKeywords Interface */
/* Purpose: Manage ad group level biddable keywords
/* ====================================== */
Client.prototype.listBiddableKeywords = function (data, cb) {
    var that = this;
    if (that.config.accessToken) {
        that.operation('keywords', data, 'GET', that.config.accessToken, function(err, result){
            cb(err, result);
        });
    } else {
        if (that.config.refreshToken && !that.config.accessToken) {
         that.getAuthToken(function (accessToken) {
            that.operation('keywords', data, 'GET', accessToken, function(err, result){
                that.config.accessToken = accessToken;
                cb(err, result);
            });
         });
         }
    }   
}

Client.prototype.listBiddableKeywordsEx = function (data, cb) {
    var that = this;
    if (that.config.accessToken) {
        that.operation('keywords/extended', data, 'GET', that.config.accessToken, function(err, result){
            cb(err, result);
        });
    } else {
        if (that.config.refreshToken && !that.config.accessToken) {
         that.getAuthToken(function (accessToken) {
            that.operation('keywords/extended', data, 'GET', accessToken, function(err, result){
                that.config.accessToken = accessToken;
                cb(err, result);
            });
         });
         }
    }   
}

Client.prototype.getBiddableKeyword = function (keywordId, cb) {
      var that = this;
    if (that.config.accessToken) {
        that.operation(`keywords/${keywordId}`, '', 'GET', that.config.accessToken, function(err, result){
            cb(err, result);
        });
    } else {
        if (that.config.refreshToken && !that.config.accessToken) {
         that.getAuthToken(function (accessToken) {
            that.operation(`keywords/${keywordId}`, '', 'GET', accessToken, function(err, result){
                that.config.accessToken = accessToken;
                cb(err, result);
            });
         });
         }
    }   
}

Client.prototype.getBiddableKeywordEx = function (keywordId, cb) {
      var that = this;
    if (that.config.accessToken) {
        that.operation(`keywords/extended/${keywordId}`, '', 'GET', that.config.accessToken, function(err, result){
            cb(err, result);
        });
    } else {
        if (that.config.refreshToken && !that.config.accessToken) {
         that.getAuthToken(function (accessToken) {
            that.operation(`keywords/extended/${keywordId}`, '', 'GET', accessToken, function(err, result){
                that.config.accessToken = accessToken;
                cb(err, result);
            });
         });
         }
    }   
}

Client.prototype.createBiddableKeywords = function (data, cb) {
    var that = this;
    if (that.config.accessToken) {
        that.operation('keywords', data, 'POST', that.config.accessToken, function(err, result){
            cb(err, result);
        });
    } else {
        if (that.config.refreshToken && !that.config.accessToken) {
         that.getAuthToken(function (accessToken) {
            that.operation('keywords', data, 'POST', accessToken, function(err, result){
                that.config.accessToken = accessToken;
                cb(err, result);
            });
         });
         }
    }   
}

Client.prototype.updateBiddableKeywords = function (data, cb) {
    var that = this;
    if (that.config.accessToken) {
        that.operation('keywords', data, 'PUT', that.config.accessToken, function(err, result){
            cb(err, result);
        });
    } else {
        if (that.config.refreshToken && !that.config.accessToken) {
         that.getAuthToken(function (accessToken) {
            that.operation('keywords', data, 'PUT', accessToken, function(err, result){
                that.config.accessToken = accessToken;
                cb(err, result);
            });
         });
         }
    }   
}

Client.prototype.archiveBiddableKeywords = function (keywordId, cb) {
      var that = this;
    if (that.config.accessToken) {
        that.operation(`keywords/${keywordId}`, '', 'DELETE', that.config.accessToken, function(err, result){
            cb(err, result);
        });
    } else {
        if (that.config.refreshToken && !that.config.accessToken) {
         that.getAuthToken(function (accessToken) {
            that.operation(`keywords/${keywordId}`, '', 'DELETE', accessToken, function(err, result){
                that.config.accessToken = accessToken;
                cb(err, result);
            });
         });
         }
    }   
}
/* ====================================== */
/* END - Keyword Interface */
/* ====================================== */

/* ====================================== */
/* 4. NegativeKeyword Interface */
/* Purpose: Manage ad group level negative keywords
/* ====================================== */
Client.prototype.listNegativeKeywords = function (data, cb) {
    var that = this;
    if (that.config.accessToken) {
        that.operation('negativeKeywords', data, 'GET', that.config.accessToken, function(err, result){
            cb(err, result);
        });
    } else {
        if (that.config.refreshToken && !that.config.accessToken) {
         that.getAuthToken(function (accessToken) {
            that.operation('negativeKeywords', data, 'GET', accessToken, function(err, result){
                that.config.accessToken = accessToken;
                cb(err, result);
            });
         });
         }
    }   
}

Client.prototype.listNegativeKeywordsEx = function (data, cb) {
    var that = this;
    if (that.config.accessToken) {
        that.operation('negativeKeywords/extended', data, 'GET', that.config.accessToken, function(err, result){
            cb(err, result);
        });
    } else {
        if (that.config.refreshToken && !that.config.accessToken) {
         that.getAuthToken(function (accessToken) {
            that.operation('negativeKeywords/extended', data, 'GET', accessToken, function(err, result){
                that.config.accessToken = accessToken;
                cb(err, result);
            });
         });
         }
    }   
}

Client.prototype.getNegativeKeyword = function (keywordId, cb) {
      var that = this;
    if (that.config.accessToken) {
        that.operation(`negativeKeywords/${keywordId}`, '', 'GET', that.config.accessToken, function(err, result){
            cb(err, result);
        });
    } else {
        if (that.config.refreshToken && !that.config.accessToken) {
         that.getAuthToken(function (accessToken) {
            that.operation(`negativeKeywords/${keywordId}`, '', 'GET', accessToken, function(err, result){
                that.config.accessToken = accessToken;
                cb(err, result);
            });
         });
         }
    }   
}

Client.prototype.getNegativeKeywordEx = function (keywordId, cb) {
      var that = this;
    if (that.config.accessToken) {
        that.operation(`negativeKeywords/extended/${keywordId}`, '', 'GET', that.config.accessToken, function(err, result){
            cb(err, result);
        });
    } else {
        if (that.config.refreshToken && !that.config.accessToken) {
         that.getAuthToken(function (accessToken) {
            that.operation(`negativeKeywords/extended/${keywordId}`, '', 'GET', accessToken, function(err, result){
                that.config.accessToken = accessToken;
                cb(err, result);
            });
         });
         }
    }   
}

Client.prototype.createNegativeKeywords = function (data, cb) {
    var that = this;
    if (that.config.accessToken) {
        that.operation('negativeKeywords', data, 'POST', that.config.accessToken, function(err, result){
            cb(err, result);
        });
    } else {
        if (that.config.refreshToken && !that.config.accessToken) {
         that.getAuthToken(function (accessToken) {
            that.operation('negativeKeywords', data, 'POST', accessToken, function(err, result){
                that.config.accessToken = accessToken;
                cb(err, result);
            });
         });
         }
    }   
}

Client.prototype.updateNegativeKeywords = function (data, cb) {
    var that = this;
    if (that.config.accessToken) {
        that.operation('negativeKeywords', data, 'PUT', that.config.accessToken, function(err, result){
            cb(err, result);
        });
    } else {
        if (that.config.refreshToken && !that.config.accessToken) {
         that.getAuthToken(function (accessToken) {
            that.operation('negativeKeywords', data, 'PUT', accessToken, function(err, result){
                that.config.accessToken = accessToken;
                cb(err, result);
            });
         });
         }
    }   
}

Client.prototype.archiveNegativeKeywords = function (keywordId, cb) {
      var that = this;
    if (that.config.accessToken) {
        that.operation(`negativeKeywords/${keywordId}`, '', 'DELETE', that.config.accessToken, function(err, result){
            cb(err, result);
        });
    } else {
        if (that.config.refreshToken && !that.config.accessToken) {
         that.getAuthToken(function (accessToken) {
            that.operation(`negativeKeywords/${keywordId}`, '', 'DELETE', accessToken, function(err, result){
                that.config.accessToken = accessToken;
                cb(err, result);
            });
         });
         }
    }   
}
/* ====================================== */
/* END - NegativeKeyword Interface */
/* ====================================== */

/* ====================================== */
/* 5. CampaignNegativeKeywords Interface  */
/* Purpose: Manage campaign level negative keywords
/* ====================================== */
Client.prototype.listCampaignNegativeKeywords = function (data, cb) {
    var that = this;
    if (that.config.accessToken) {
        that.operation('campaignNegativeKeywords', data, 'GET', that.config.accessToken, function(err, result){
            cb(err, result);
        });
    } else {
        if (that.config.refreshToken && !that.config.accessToken) {
         that.getAuthToken(function (accessToken) {
            that.operation('campaignNegativeKeywords', data, 'GET', accessToken, function(err, result){
                that.config.accessToken = accessToken;
                cb(err, result);
            });
         });
         }
    }   
}

Client.prototype.listCampaignNegativeKeywordsEx = function (data, cb) {
    var that = this;
    if (that.config.accessToken) {
        that.operation('campaignNegativeKeywords/extended', data, 'GET', that.config.accessToken, function(err, result){
            cb(err, result);
        });
    } else {
        if (that.config.refreshToken && !that.config.accessToken) {
         that.getAuthToken(function (accessToken) {
            that.operation('campaignNegativeKeywords/extended', data, 'GET', accessToken, function(err, result){
                that.config.accessToken = accessToken;
                cb(err, result);
            });
         });
         }
    }   
}

Client.prototype.getCampaignNegativeKeyword= function (keywordId, cb) {
      var that = this;
    if (that.config.accessToken) {
        that.operation(`campaignNegativeKeywords/${keywordId}`, '', 'GET', that.config.accessToken, function(err, result){
            cb(err, result);
        });
    } else {
        if (that.config.refreshToken && !that.config.accessToken) {
         that.getAuthToken(function (accessToken) {
            that.operation(`campaignNegativeKeywords/${keywordId}`, '', 'GET', accessToken, function(err, result){
                that.config.accessToken = accessToken;
                cb(err, result);
            });
         });
         }
    }   
}

Client.prototype.getCampaignNegativeKeywordEx = function (keywordId, cb) {
      var that = this;
    if (that.config.accessToken) {
        that.operation(`campaignNegativeKeywords/extended/${keywordId}`, '', 'GET', that.config.accessToken, function(err, result){
            cb(err, result);
        });
    } else {
        if (that.config.refreshToken && !that.config.accessToken) {
         that.getAuthToken(function (accessToken) {
            that.operation(`campaignNegativeKeywords/extended/${keywordId}`, '', 'GET', accessToken, function(err, result){
                that.config.accessToken = accessToken;
                cb(err, result);
            });
         });
         }
    }   
}

Client.prototype.createCampaignNegativeKeywords = function (data, cb) {
    var that = this;
    if (that.config.accessToken) {
        that.operation('campaignNegativeKeywords', data, 'POST', that.config.accessToken, function(err, result){
            cb(err, result);
        });
    } else {
        if (that.config.refreshToken && !that.config.accessToken) {
         that.getAuthToken(function (accessToken) {
            that.operation('campaignNegativeKeywords', data, 'POST', accessToken, function(err, result){
                that.config.accessToken = accessToken;
                cb(err, result);
            });
         });
         }
    }   
}

Client.prototype.updateCampaignNegativeKeywords = function (data, cb) {
    var that = this;
    if (that.config.accessToken) {
        that.operation('campaignNegativeKeywords', data, 'PUT', that.config.accessToken, function(err, result){
            cb(err, result);
        });
    } else {
        if (that.config.refreshToken && !that.config.accessToken) {
         that.getAuthToken(function (accessToken) {
            that.operation('campaignNegativeKeywords', data, 'PUT', accessToken, function(err, result){
                that.config.accessToken = accessToken;
                cb(err, result);
            });
         });
         }
    }   
}

Client.prototype.archiveCampaignNegativeKeywords = function (keywordId, cb) {
      var that = this;
    if (that.config.accessToken) {
        that.operation(`campaignNegativeKeywords/${keywordId}`, '', 'DELETE', that.config.accessToken, function(err, result){
            cb(err, result);
        });
    } else {
        if (that.config.refreshToken && !that.config.accessToken) {
         that.getAuthToken(function (accessToken) {
            that.operation(`campaignNegativeKeywords/${keywordId}`, '', 'DELETE', accessToken, function(err, result){
                that.config.accessToken = accessToken;
                cb(err, result);
            });
         });
         }
    }   
}
/* ====================================== */
/* END - CampaignNegativeKeywords Interface */
/* ====================================== */

/* ====================================== */
/* 6. ProductAd Interface */
/* Purpose: Used to create, read, update or delete ProductAds for Sponsored Products
/* ====================================== */

Client.prototype.listProductAds = function (data, cb) {
    var that = this;
    if (that.config.accessToken) {
        that.operation('productAds', data, 'GET', that.config.accessToken, function(err, result){
            cb(err, result);
        });
    } else {
        if (that.config.refreshToken && !that.config.accessToken) {
         that.getAuthToken(function (accessToken) {
            that.operation('productAds', data, 'GET', accessToken, function(err, result){
                that.config.accessToken = accessToken;
                cb(err, result);
            });
         });
         }
    }   
}

Client.prototype.listProductAdsEx = function (data, cb) {
    var that = this;
    if (that.config.accessToken) {
        that.operation('productAds/extended', data, 'GET', that.config.accessToken, function(err, result){
            cb(err, result);
        });
    } else {
        if (that.config.refreshToken && !that.config.accessToken) {
         that.getAuthToken(function (accessToken) {
            that.operation('productAds/extended', data, 'GET', accessToken, function(err, result){
                that.config.accessToken = accessToken;
                cb(err, result);
            });
         });
         }
    }   
}

Client.prototype.getProductAd = function (productAdId, cb) {
      var that = this;
    if (that.config.accessToken) {
        that.operation(`productAds/${productAdId}`, '', 'GET', that.config.accessToken, function(err, result){
            cb(err, result);
        });
    } else {
        if (that.config.refreshToken && !that.config.accessToken) {
         that.getAuthToken(function (accessToken) {
            that.operation(`productAds/${productAdId}`, '', 'GET', accessToken, function(err, result){
                that.config.accessToken = accessToken;
                cb(err, result);
            });
         });
         }
    }   
}

Client.prototype.getProductAdEx = function (productAdId, cb) {
      var that = this;
    if (that.config.accessToken) {
        that.operation(`productAds/extended/${productAdId}`, '', 'GET', that.config.accessToken, function(err, result){
            cb(err, result);
        });
    } else {
        if (that.config.refreshToken && !that.config.accessToken) {
         that.getAuthToken(function (accessToken) {
            that.config.accessToken = accessToken;
            that.operation(`productAds/extended/${productAdId}`, '', 'GET', accessToken, function(err, result){
                cb(err, result);
            });
         });
         }
    }   
}

Client.prototype.createProductAds = function (data, cb) {
    var that = this;
    if (that.config.accessToken) {
        that.operation('productAds', data, 'POST', that.config.accessToken, function(err, result){
            cb(err, result);
        });
    } else {
        if (that.config.refreshToken && !that.config.accessToken) {
         that.getAuthToken(function (accessToken) {
            that.operation('productAds', data, 'POST', accessToken, function(err, result){
                that.config.accessToken = accessToken;
                cb(err, result);
            });
         });
         }
    }   
}

Client.prototype.updateProductAds = function (data, cb) {
    var that = this;
    if (that.config.accessToken) {
        that.operation('productAds', data, 'PUT', that.config.accessToken, function(err, result){
            cb(err, result);
        });
    } else {
        if (that.config.refreshToken && !that.config.accessToken) {
         that.getAuthToken(function (accessToken) {
            that.operation('productAds', data, 'PUT', accessToken, function(err, result){
                that.config.accessToken = accessToken;
                cb(err, result);
            });
         });
         }
    }   
}

Client.prototype.archiveProductAd = function (productAdId, cb) {
      var that = this;
    if (that.config.accessToken) {
        that.operation(`productAds/${productAdId}`, '', 'DELETE', that.config.accessToken, function(err, result){
            cb(err, result);
        });
    } else {
        if (that.config.refreshToken && !that.config.accessToken) {
         that.getAuthToken(function (accessToken) {
            that.operation(`productAds/${productAdId}`, '', 'DELETE', accessToken, function(err, result){
                that.config.accessToken = accessToken;
                cb(err, result);
            });
         });
         }
    }   
}
/* ====================================== */
/* END - ProductAd Interface */
/* ====================================== */

Client.prototype.getAuthToken = function (cb) {
    var options = {
        method: 'POST',
        url: `https://${this.tokenUrl}`,
        headers:
        {
            'cache-control': 'no-cache',
            'content-type': 'application/x-www-form-urlencoded'
        },
        form:
        {
            grant_type: 'refresh_token',
            refresh_token: this.config.refreshToken,
            client_id: this.config.clientId,
            client_secret: this.config.clientSecret
        }
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        var result = JSON.parse(body);

        if (result.access_token) {
            cb(JSON.parse(body).access_token);
        } else {
            console.error('--ERROR---: Unable to refresh token!');
        }
    });
};

Client.prototype.operation = function (apiInterface, data, method, accessToken, cb) {
    var that = this;

    var headers = {
        'Authorization': accessToken,
        'Content-Type': 'application/json'
    };

    if (that.config.profileId) {
        headers['Amazon-Advertising-API-Scope'] = that.config.profileId;
    }

    var url = that.endpoint + '/' + apiInterface;
    var options = {
        headers: headers,
    }
    switch (method.toLowerCase()) {
        case 'get':
            if (data != undefined && data !== '') {
                url += '?';
                for (var key in data) {
                    if (data.hasOwnProperty(key)) {
                        url += `${key}=` + data[key] + '&';
                    }
                }
                url = url.slice(0, -1);
            }
            break;
        case 'put':
        case 'post':
        case 'delete':
            if (data) {
                options['body'] = data;
                options['json'] = true;
            }
            break;
        default:
            throw new Error(`Unknown verb ${method}`);
    }

    options.url = url;
    options.method = method;
    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        if (response.statusCode === 401) {
            console.log('Access token is not valid! Need get again!');
            that.getAuthToken(function (accessToken) {
                  that.operation(apiInterface, data, method, accessToken, cb);
            });
        } else {
            var error = {};
            var result = options.json ? body : JSON.parse(body);
            switch (response.statusCode) {
                case 400: 
                    error.statusCode = 400;
                    error.text = 'Bad request - General request error that doesn’t fall into any other category.';
                    break;
                case 401: 
                    error.statusCode = 401;
                    error.text = 'Unauthorized - Request failed because user is not authenticated.';
                    break;
                case 403: 
                    error.statusCode = 403;
                    error.text = 'Forbidden - Request failed because user does not have access to a specified resource.';
                    break;
                case 404: 
                    error.statusCode = 404;
                    error.text = 'Requested resource does not exist or is not visible for the authenticated user.';
                    break;         
                case 422:
                    error.statusCode = 422;
                    error.text = 'Unprocessable entity - Request was understood, but contained invalid parameters.';
                    break;
                case 429:
                    error.statusCode = 429;
                    error.text = 'Too many requests - Request was rate-limited. Retry later.';
                    break;
                case 500:
                    error.statusCode = 500;
                    error.text = 'Internal Error - Something went wrong on the server. Retry later and report an error if unresolved.';
                    break;
                case 207:
                    if (result[0].code !== 'SUCCESS') {
                        error.statusCode = 207;
                        error.text = result[0].description ? result[0].description : `${result[0].code}`;
                        error.errorDetails = result;
                    }
                    break;    
            }
            
            if (!_.isEmpty(error)) {
                if (body.details) {
                    error.details = body.details;
                }        
            }

            cb(error, result);
        }
       
    });
}

function setEndpoint(client) {
    if (client.endpoints.hasOwnProperty(client.config.region)) {
        var region_code = client.config.region;
        if (client.config.sandbox) {
            client.endpoint = `https://${client.endpoints[region_code]['sandbox']}/${client.apiVersion}`;
        } else {
            client.endpoint = `https://${client.endpoints[region_code]['prod']}/${client.apiVersion}`;
        }
        client.tokenUrl = client.endpoints[region_code]['tokenUrl'];
    } else {
        throw new Error('Invalid region');
    }

    return client.endpoint;
};

module.exports = Client;