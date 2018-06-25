export function setItem(key,val){
    localStorage.setItem(key,val)
}

export function getItem(key){
    return localStorage.getItem(key)
}

export function delItem(key,isall){
    return isall?localStorage.clear():localStorage.removeItem(key)
}