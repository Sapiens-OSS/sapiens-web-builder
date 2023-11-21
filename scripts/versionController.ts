export interface Version {
  major: number;
  minor: number;
  patch: number;

  override?: string;
}

export class VersionController {
  private version: Version;

  public constructor(version: Version) {
    this.version = version;
  }

  public export() {
    if (this.version.override) {
      return this.version.override;
    }
    return `${this.version.major}.${this.version.minor}.${this.version.patch}`;
  }
}
