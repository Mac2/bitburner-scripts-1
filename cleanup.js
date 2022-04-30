let options;
const argsSchema = [
    ['folder', '/Temp/'],    
];

export function autocomplete(data, args) {
	data.flags(argsSchema);
	const lastFlag = args.length > 1 ? args[args.length - 2] : null;
    if (["--folder"].includes(lastFlag))
        return data.scripts;
	return [];
}

/** @param {NS} ns **/
export async function main(ns) {
    options = ns.flags(argsSchema);
    if (options.folder && !options.folder.startsWith('/'))
        options.folder = '/' + options.folder; // Game requires folders to have a leading slash. Add one if it's missing.
    if (options.folder && !options.folder.endsWith('/'))
        options.folder = options.folder + '/';
    
    for (let file of ns.ls('home', options.folder))
        //ns.tprint(`prepare deleting ${file}`);
        ns.rm(file);
}