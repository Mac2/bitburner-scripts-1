/** @param {NS} ns **/
export async function main(ns) {
    let target = ns.args.length > 0 ? ns.args[0] : '(unspecified server)';
    try {
        await ns.installBackdoor();
        ns.toast(`Backdoored ${target}`, 'success');
        //if ( target == 'w0r1d_d43m0n') ns.killall('home')
    }
    catch (err) {
        ns.tprint(`Error while running backdoor (intended for ${target}): ${String(err)}`);
        throw (err);
    }
}