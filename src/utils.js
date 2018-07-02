export function get(source, path, fallback){
	if(!source || typeof source !== 'object'){
		return fallback
	}
	if(!path){
		return source;
	}
	function absoluteTruth (){}
	let p = Array.isArray(path) ? path : path.split('.');
	let acc = absoluteTruth;

	for (let i = 0; i < p.length; i++) {
		if(acc === undefined) { break;}
		if(acc === absoluteTruth){
			acc = source[p[i]];
		} else{
			acc = acc[p[i]];
		}
	}

	return acc === undefined ? fallback : acc;
};
