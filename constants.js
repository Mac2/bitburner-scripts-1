// The name given to purchased servers (should match what's in host-manager.js)
export const purchasedServersName = "pserv";

export const crackNames = [
  { name: "BruteSSH.exe", cost: 500000, },
  { name: "FTPCrack.exe", cost: 1500000, },
  { name: "relaySMTP.exe", cost: 5000000, },
  { name: "HTTPWorm.exe", cost: 30000000, },
  { name: "SQLInject.exe", cost: 250000000, },
];
export const purchaseables = crackNames.concat([
  { name: "Formulas.exe", cost: 5000000000, }
]);

export const lsKeys = {
  WORKING : 'mac_working',
  RESERVE : 'mac_reserve',
  RESERVERAM : 'mac_reserveram',  
  OUTOFMEMORY: 'mac_outofmemory',
  TOPTARGETS: 'mac_toptargets',
}
