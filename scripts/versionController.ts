export interface Version {
  major: number;
  minor: number;
  patch: number;

  override?: string;
}

export enum VersionRequiredBump {
  Major,
  Minor,
  Patch,
  None,
}

export class VersionController {
  private version: Version;
  private vrb: VersionRequiredBump;

  public constructor(version: Version) {
    this.version = version;
    this.vrb = VersionRequiredBump.None;
  }

  private bumpTo(v: VersionRequiredBump) {
    if (this.vrb > v) {
      this.vrb = v;
    }
  }

  // Create delete config
  public CDConfig() {
    this.bumpTo(VersionRequiredBump.Minor);
  }

  // Update config
  public UConfig() {
    this.bumpTo(VersionRequiredBump.Patch);
  }

  // Apply
  public apply() {
    switch (this.vrb) {
      case VersionRequiredBump.Major:
        this.version.major++;
        break;
      case VersionRequiredBump.Minor:
        this.version.minor++;
        break;
      case VersionRequiredBump.Patch:
        this.version.patch++;
        break;
    }
  }

  public export() {
    if (this.version.override) {
      return this.version.override;
    }
    return `${this.version.major}.${this.version.minor}.${this.version.patch}`;
  }
}
