enum VERSIONING_SYSTEM {
    MAJOR,
    MINOR,
    PATCH
}

class SoftwareVersioning {

    // Constructor
    constructor(private startingVersion: number[] = [0, 0, 1], private backupVersion = startingVersion.slice()) {}

    // Methods
    updateBackup() {
        this.backupVersion = this.startingVersion.slice();
    }

    release(): string {
        return this.startingVersion.join('.');
    }

    printUpdatedVersion(): void {
        console.log('The app is now updated to Version ' + this.release());
    }

    major(): void {
        this.updateBackup();
        this.startingVersion[VERSIONING_SYSTEM.MAJOR]++;
        this.printUpdatedVersion();
    }

    minor(): void {
        this.updateBackup();
        this.startingVersion[VERSIONING_SYSTEM.MINOR]++;
        this.startingVersion[VERSIONING_SYSTEM.PATCH] = 0;
        this.printUpdatedVersion();
    }

    patch(): void {
        this.updateBackup();
        this.startingVersion[VERSIONING_SYSTEM.PATCH]++;
    }

    rollback(): void {
        this.startingVersion = this.backupVersion;
        console.log(this.backupVersion);
    }
    
}

// Create a Software with Default Settings
const TYPESCRIPT_SOFTWARE = new SoftwareVersioning();