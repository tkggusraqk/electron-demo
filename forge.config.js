const path = require('path');
module.exports =
{
    "make_targets": {
        "win32": [
            "squirrel"
        ],
        "darwin": [
            "zip"
        ],
        "linux": [
            "deb",
            "rpm"
        ]
    },
    "electronPackagerConfig": {
        "packageManager": "npm",
        "asar": true,
        "icon": path.resolve(__dirname, 'src/icons/icon'),
        "overwrite": true
    },
    "electronWinstallerConfig": {
        "name": "zwt"
    },
    "electronInstallerDebian": {},
    "electronInstallerRedhat": {},
    "github_repository": {
        "owner": "",
        "name": ""
    },
    "windowsStoreConfig": {
        "packageName": "",
        "name": "zwt"
    }
}