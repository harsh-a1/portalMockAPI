
//exports.DHIS_URL_BASE = "https://uphmis.in/uphmis/";
exports.DHIS_URL_BASE = "http://localhost:8080/dhis";


exports.username = "admin";
exports.password = "H!SPindia2017";
exports.auth = "Basic " + new Buffer(exports.username + ":" + exports.password ).toString("base64");
exports.endpointWhitelist = [
    'organisationUnits',
    'organisationUnitGroups',
    'indicatorGroups',
    'analytics'

]


exports.hausala_urls = {
    acc : "http://hausalasajheedari.in/api/index/get_accred_facilities_district_wise",
    amp : "http://hausalasajheedari.in/api/index/get_empanelled_surgeon_district_wise",
    rei : "http://hausalasajheedari.in/api/index/get_rembersment_district_wise"
}
