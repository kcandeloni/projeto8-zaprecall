export default function AddCheckZap ({checkZap: checkZap}, color, name) {
    checkZap.zaps.push({name: name, color: color});
    checkZap.function(checkZap);
}