/**
 * Clones a plain object. `deep` is `false` by default.
 */
export default function clonePlainObject(object: any, deep: boolean = false) {
    if (deep) {
        return clonePlainObjectDeep(object);
    }
    const r: any = {};
    for (const k in object) {
        r[k] = object[k];
    }
    return r;
}

function clonePlainObjectDeep(object: any) {
    const r: any = {};
    for (const k in object) {
        const objectK = object[k];
        if (objectK instanceof Array) {
            const newArray = [];
            for (const el of objectK) {
                newArray.push(clonePlainObjectDeep(el));
            }
            r[k] = newArray;
        } else if (typeof objectK === "object") {
            r[k] = clonePlainObjectDeep(objectK);
        } else {
            r[k] = objectK;
        }
    }
    return r;
}