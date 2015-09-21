/*Siteapp Data break down*/

var app = require("../app.js");// business logic file
module.exports= function(){
	return  {
    request: {
      mandatory:["sdate","edate"]
    },
    query:{
      select:"select daydate as daydate, advertiser_id as advertiser_id,campaign_id as campaign_id,traffic_bids as traffic_bids,traffic_imps as traffic_imps,traffic_clicks as traffic_clicks,traffic_convs as traffic_convs, ctr as ctr,cvr as cvr,gm as gm,revenue as revenue from advertiser_overview <% if( p.sdate && p.edate ) { %> where daydate between <%= p.escape('sdate') %> and <%= p.escape('edate') %> <% }; if(p.advertiser_id) { %> and advertiser_id=<%= p.escape('advertiser_id') %> <% }; if(p.campaign_id) { %> and campaign_id=<%= p.escape('campaign_id') %> <% } %> group by daydate, campaign_id, advertiser_id  "
     
    }, 
    display:{
      daydate    : {  key : "daydate", header:"Date",format:app.date},
      advertiser_id    : {  key : "advertiser_id", header:"Advertiser"},
      campaign_id    : {  key:"campaign_id", header : "Campaign"},
      traffic_bids  : {  key : "traffic_bids", header :"Bids Won" },
      traffic_imps : {  key : "traffic_imps", header :"Impressions"},
      traffic_clicks  : {  key : "traffic_clicks", header :"Clicks" },
      traffic_convs:  {  key : "traffic_convs", header :"Conversions" },
      ctr:  {  key : "ctr", header :"CTR" ,format:app.round},
      cvr:  {  key : "cvr", header :"CVR" ,format:app.round},
      gm : {  key : "gm", header :"Gross Margin"},
      revenue  : {  key : "revenue", header :"Revenue" ,format:app.round}
    }
  }
};
