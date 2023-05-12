function expandObject(doc) {

    let result = { }

    for(let key of Object.keys(doc)) {

        let object = result

        let list = key.split('_')

        let len = list.length
        
        for(let idx = 0; idx < len - 1; idx++) {

            let val = list[idx]

            if(!object[val]) object[val] = {}

            object = object[val]
        }

        object[list[len - 1]] = doc[key]
        
    }   return result
}

function shrinkObject(doc, str = "", result = {}) {

    for(let key of Object.keys(doc)) {

        let newKey = str != "" ? str + "_" + key : key

        if(typeof(doc[key]) == typeof({})) {

            shrinkObject(doc[key], newKey, result)

        } else result[newKey] = doc[key]

    }   return result
}

function rectifyObject(obj) {

    for(let key of Object.keys(obj)) {

        if(typeof(obj[key]) == typeof({})) {
        
            if(obj[key][0]) {
        
                let result = []

                for(let idx of Object.keys(obj[key]))

                    result.push(obj[key][idx])

                obj[key] = result
        
            } else rectifyObject(obj[key])
        }
    }   return obj
}
module.exports = {
    expandObject,
    rectifyObject,
    shrinkObject
}