export const imports = `

// UI
export type ActionElement = SapiensModule & {
  view: any;
  name: string;

  init: (viewContainer: any, gameUI: any, hubUI: any, world: any) => any;
};

export type GameElement = SapiensModule & {
  gameUI: any;
  name: string;
  view: any;

  init: (gameUI: any) => any;
  updateGameElement: (gameUI: any) => any;
};

export type ManageElement = SapiensModule & {
  name: string;
  view: any;
  parent: any;
  icon: string;

  init: (contentView: any) => void;
};

export type HammerstoneUIManager = {
  registerActionElement: (actionElement: ActionElement) => void;
  registerGameElement: (gameElement: GameElement) => void;
  registerManageElement: (manageElement: ManageElement) => void;
};

// Shadow
export type HammerstoneShadowing = {
  shadow: (module: SapiensModule) => SapiensModule;
};

// Save State
export type HammerstoneStateParamTable = {
  clientID?: number;
  tribeID?: number;
  serverWorld?: any;
};

export type HammerstoneSaveState = {
  getValue: <T>(
    key: string,
    paramTable: HammerstoneStateParamTable & { default?: T }
  ) => T | undefined;

  setValue: (
    key: string,
    value: any,
    paramTable: HammerstoneStateParamTable
  ) => void;

  getValueClient: <T>(key: string, defaultValue?: T) => T | undefined;

  setValueClient: (key: string, value: any) => void;

  getValueServer: <T>(
    key: string,
    clientID: number,
    defaultValue?: T
  ) => T | undefined;

  setValueServer: (key: string, value: any, clientID: string) => void;

  resolveClientID: (paramTable: HammerstoneStateParamTable) => void;

  getPrivateShared: (paramTable: HammerstoneStateParamTable) => any;
};

// Logging
export type HammerstoneLogging = {
  log: (...objs: any) => void;
  warn: (...objs: any) => void;
  error: (...objs: any) => void;
  schema: (logId: string, ...objs: any) => void;
};

// Hammerstone Input
enum HammerstoneInputGroupsRaw {
  Menu = "menu",
  Game = "game",
  Movement = "movement",
  Building = "building",
  TextEntry = "textEntry",
  MultiSelect = "multiSelect",
  Debug = "debug",
  CinematicCameria = "cinematicCamera",
}

export type HammerstoneInputGroups = HammerstoneInputGroupsRaw | string;

export type HammerstoneInputManager = {
  addMapping: (
    groupName: HammerstoneInputGroups,
    keybindName: string,
    keyCode: number,
    modifiersCode: number
  ) => void;
  addGroup: (groupName: string) => void;
  addKeyChangedCallback: (
    groupName: string,
    keybindName: string,
    callback: (isDown: boolean, isRepeat: boolean) => void
  ) => void;
};

export type SapiensKeyCodes = {
  unknown: 0;
  backspace: 8;
  tab: 9;
  key_return: 13;
  escape: 27;
  space: 32;
  exclaim: 33;
  quotedbl: 34;
  hash: 35;
  dollar: 36;
  percent: 37;
  ampersand: 38;
  quote: 39;
  leftparen: 40;
  rightparen: 41;
  asterisk: 42;
  plus: 43;
  comma: 44;
  minus: 45;
  period: 46;
  slash: 47;
  key_0: 48;
  key_1: 49;
  key_2: 50;
  key_3: 51;
  key_4: 52;
  key_5: 53;
  key_6: 54;
  key_7: 55;
  key_8: 56;
  key_9: 57;
  colon: 58;
  semicolon: 59;
  less: 60;
  equals: 61;
  greater: 62;
  question: 63;
  at: 64;
  leftbracket: 91;
  backslash: 92;
  rightbracket: 93;
  caret: 94;
  underscore: 95;
  backquote: 96;
  a: 97;
  b: 98;
  c: 99;
  d: 100;
  e: 101;
  f: 102;
  g: 103;
  h: 104;
  i: 105;
  j: 106;
  k: 107;
  l: 108;
  m: 109;
  n: 110;
  o: 111;
  p: 112;
  q: 113;
  r: 114;
  s: 115;
  t: 116;
  u: 117;
  v: 118;
  w: 119;
  x: 120;
  y: 121;
  z: 122;
  delete: 127;
  capslock: 1073741881;
  f1: 1073741882;
  f2: 1073741883;
  f3: 1073741884;
  f4: 1073741885;
  f5: 1073741886;
  f6: 1073741887;
  f7: 1073741888;
  f8: 1073741889;
  f9: 1073741890;
  f10: 1073741891;
  f11: 1073741892;
  f12: 1073741893;
  printscreen: 1073741894;
  scrolllock: 1073741895;
  pause: 1073741896;
  insert: 1073741897;
  home: 1073741898;
  pageup: 1073741899;
  key_end: 1073741901;
  pagedown: 1073741902;
  right: 1073741903;
  left: 1073741904;
  down: 1073741905;
  up: 1073741906;
  numlockclear: 1073741907;
  kp_divide: 1073741908;
  kp_multiply: 1073741909;
  kp_minus: 1073741910;
  kp_plus: 1073741911;
  kp_enter: 1073741912;
  kp_1: 1073741913;
  kp_2: 1073741914;
  kp_3: 1073741915;
  kp_4: 1073741916;
  kp_5: 1073741917;
  kp_6: 1073741918;
  kp_7: 1073741919;
  kp_8: 1073741920;
  kp_9: 1073741921;
  kp_0: 1073741922;
  kp_period: 1073741923;
  application: 1073741925;
  power: 1073741926;
  kp_equals: 1073741927;
  f13: 1073741928;
  f14: 1073741929;
  f15: 1073741930;
  f16: 1073741931;
  f17: 1073741932;
  f18: 1073741933;
  f19: 1073741934;
  f20: 1073741935;
  f21: 1073741936;
  f22: 1073741937;
  f23: 1073741938;
  f24: 1073741939;
  execute: 1073741940;
  help: 1073741941;
  menu: 1073741942;
  select: 1073741943;
  stop: 1073741944;
  again: 1073741945;
  undo: 1073741946;
  cut: 1073741947;
  copy: 1073741948;
  paste: 1073741949;
  find: 1073741950;
  mute: 1073741951;
  volumeup: 1073741952;
  volumedown: 1073741953;
  kp_comma: 1073741957;
  kp_equalsas400: 1073741958;
  alterase: 1073741977;
  sysreq: 1073741978;
  cancel: 1073741979;
  clear: 1073741980;
  prior: 1073741981;
  return2: 1073741982;
  separator: 1073741983;
  out: 1073741984;
  oper: 1073741985;
  clearagain: 1073741986;
  crsel: 1073741987;
  exsel: 1073741988;
  kp_00: 1073742000;
  kp_000: 1073742001;
  thousandsseparator: 1073742002;
  decimalseparator: 1073742003;
  currencyunit: 1073742004;
  currencysubunit: 1073742005;
  kp_leftparen: 1073742006;
  kp_rightparen: 1073742007;
  kp_leftbrace: 1073742008;
  kp_rightbrace: 1073742009;
  kp_tab: 1073742010;
  kp_backspace: 1073742011;
  kp_a: 1073742012;
  kp_b: 1073742013;
  kp_c: 1073742014;
  kp_d: 1073742015;
  kp_e: 1073742016;
  kp_f: 1073742017;
  kp_xor: 1073742018;
  kp_power: 1073742019;
  kp_percent: 1073742020;
  kp_less: 1073742021;
  kp_greater: 1073742022;
  kp_ampersand: 1073742023;
  kp_dblampersand: 1073742024;
  kp_verticalbar: 1073742025;
  kp_dblverticalbar: 1073742026;
  kp_colon: 1073742027;
  kp_hash: 1073742028;
  kp_space: 1073742029;
  kp_at: 1073742030;
  kp_exclam: 1073742031;
  kp_memstore: 1073742032;
  kp_memrecall: 1073742033;
  kp_memclear: 1073742034;
  kp_memadd: 1073742035;
  kp_memsubtract: 1073742036;
  kp_memmultiply: 1073742037;
  kp_memdivide: 1073742038;
  kp_plusminus: 1073742039;
  kp_clear: 1073742040;
  kp_clearentry: 1073742041;
  kp_binary: 1073742042;
  kp_octal: 1073742043;
  kp_decimal: 1073742044;
  kp_hexadecimal: 1073742045;
  lctrl: 1073742048;
  lshift: 1073742049;
  lalt: 1073742050;
  lgui: 1073742051;
  rctrl: 1073742052;
  rshift: 1073742053;
  ralt: 1073742054;
  rgui: 1073742055;
  mode: 1073742081;
  audionext: 1073742082;
  audioprev: 1073742083;
  audiostop: 1073742084;
  audioplay: 1073742085;
  audiomute: 1073742086;
  mediaselect: 1073742087;
  www: 1073742088;
  mail: 1073742089;
  calculator: 1073742090;
  computer: 1073742091;
  ac_search: 1073742092;
  ac_home: 1073742093;
  ac_back: 1073742094;
  ac_forward: 1073742095;
  ac_stop: 1073742096;
  ac_refresh: 1073742097;
  ac_bookmarks: 1073742098;
  brightnessdown: 1073742099;
  brightnessup: 1073742100;
  displayswitch: 1073742101;
  kbdillumtoggle: 1073742102;
  kbdillumdown: 1073742103;
  kbdillumup: 1073742104;
  eject: 1073742105;
  sleep: 1073742106;
};

export type SapiensModifiers = {
  none: 0;
  shift: 1;
  ctrl: 2;
  alt: 3;
  cmd: 4;
};

export type SapiensKeyMapping = {
  keyCodes: SapiensKeyCodes;
  modifiers: SapiensModifiers;
};


declare global {
  function mjrequire(string: "hammerstone/logging"): HammerstoneLogging;
  function mjrequire(string: "hammerstone/utils/shadow"): HammerstoneShadowing;
  function mjrequire(string: "hammerstone/ui/uiManager"): HammerstoneUIManager;
  function mjrequire(
    string: "hammerstone/input/inputManager"
  ): HammerstoneInputManager;
  function mjrequire(string: "mainThread/keyMapping"): SapiensKeyMapping; // Courtesy of the InputManager module
  function mjrequire(
    string: "hammerstone/state/saveState"
  ): HammerstoneSaveState;
  function mjrequire(string: string): SapiensModule;

  type SapiensModule = {
    [key: string]: any;
  };
  const mj: {
    log: (...objects: any[]) => void;
    warn: (...objects: any[]) => void;
    error: (...objects: any[]) => void;
    debug: (...objects: any[]) => void;
    get: (object: object, ...string: string[]) => any;
    tostring: (
      obj: any,
      indent?: number,
      addVerboseLoggingInfo?: boolean
    ) => string;
    tableToString: (
      table: object,
      indent?: number,
      addVerboseLoggingInfo?: boolean
    ) => string;
    printTable: (table: object) => void;
    capitalize: (str: string) => string;
    isNan: (value: any) => boolean;
  };
}
`;

export const startingCode = `// Add your imports up here

const myModule: SapiensModule = {};

// Add your code here

export default myModule;`;
