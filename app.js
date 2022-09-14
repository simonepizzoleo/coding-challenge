"use strict";
var VERSIONING_SYSTEM;
(function (VERSIONING_SYSTEM) {
    VERSIONING_SYSTEM[VERSIONING_SYSTEM["MAJOR"] = 0] = "MAJOR";
    VERSIONING_SYSTEM[VERSIONING_SYSTEM["MINOR"] = 1] = "MINOR";
    VERSIONING_SYSTEM[VERSIONING_SYSTEM["PATCH"] = 2] = "PATCH";
})(VERSIONING_SYSTEM || (VERSIONING_SYSTEM = {}));
class SoftwareVersioning {
    // Constructor
    constructor(startingVersion = [0, 0, 1], backupVersion = startingVersion.slice()) {
        this.startingVersion = startingVersion;
        this.backupVersion = backupVersion;
    }
    // Methods
    updateBackup() {
        this.backupVersion = this.startingVersion.slice();
    }
    release() {
        return this.startingVersion.join('.');
    }
    printUpdatedVersion() {
        console.log('The app is now updated to Version ' + this.release());
    }
    major() {
        this.updateBackup();
        this.startingVersion[VERSIONING_SYSTEM.MAJOR]++;
        this.printUpdatedVersion();
    }
    minor() {
        this.updateBackup();
        this.startingVersion[VERSIONING_SYSTEM.MINOR]++;
        this.startingVersion[VERSIONING_SYSTEM.PATCH] = 0;
        this.printUpdatedVersion();
    }
    patch() {
        this.updateBackup();
        this.startingVersion[VERSIONING_SYSTEM.PATCH]++;
    }
    rollback() {
        this.startingVersion = this.backupVersion;
        console.log(this.backupVersion);
    }
}
// Create a Software with Default Settings
const TYPESCRIPT_SOFTWARE = new SoftwareVersioning();
