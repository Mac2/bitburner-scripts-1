import { purchaseables } from './constants.js'

/** @param {NS} ns 
 * the purpose of the program-manager is to buy all the programs
 * from the darkweb we can afford so we don't have to do it manually
 * or write them ourselves. Like tor-manager, this script dies a natural death
 * once all programs are bought. **/
export async function main(ns) {    
    const interval = 2000;

    const keepRunning = ns.args.length > 0 && ns.args[0] == "-c";
    if (!keepRunning)
        ns.print(`program-manager will run once. Run with argument "-c" to run continuously.`)

    let foundMissingProgram = false;
    do {        
        for (const prog of purchaseables) {
            if (!ns.fileExists(prog.name, "home") && ns.purchaseProgram(prog.name))
                ns.toast(`Purchased ${prog.name}`, 'success');
            else if (keepRunning)
                foundMissingProgram = true;
        }
        if (keepRunning && foundMissingProgram)
            await ns.sleep(interval);
    } while (keepRunning && foundMissingProgram);
}