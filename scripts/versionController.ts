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
    this.vrb = VersionRequiredBump.None;
  }

  public export() {
    return VersionController.export(this.version);
  }

  public static export(version: Version) {
    if (version.override) {
      return version.override;
    }
    return `${version.major}.${version.minor}.${version.patch}`;
  }

  public ephemeralApply(): Version {
    return {
      major:
        this.vrb == VersionRequiredBump.Major
          ? this.version.major + 1
          : this.version.major,
      minor:
        this.vrb == VersionRequiredBump.Minor
          ? this.version.minor + 1
          : this.version.minor,
      patch:
        this.vrb == VersionRequiredBump.Patch
          ? this.version.patch + 1
          : this.version.patch,
    };
  }
}
