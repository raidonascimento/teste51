cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.brodysoft.sqlitePlugin/www/SQLitePlugin.js",
        "id": "com.brodysoft.sqlitePlugin.SQLitePlugin",
        "clobbers": [
            "SQLitePlugin"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device/www/device.js",
        "id": "org.apache.cordova.device.device",
        "clobbers": [
            "device"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.brodysoft.sqlitePlugin": "1.0.5",
    "org.apache.cordova.console": "0.2.13",
    "org.apache.cordova.device": "0.3.0"
}
// BOTTOM OF METADATA
});