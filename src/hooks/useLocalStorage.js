import {useEffect, useState} from 'react'

const PREFIX = 'codepen-'
// adds app name to local host


export default  function useLocalStorage( key, initialValue){
    // key to localStorage
    const prefixedkey = PREFIX + key
    // codpen-html ..etc
    const [value,setValue] = useState(() =>{

        const jsonValue = localStorage.getItem(prefixedkey)
        // getItem retrieves objects from localStorage
        
        if (jsonValue !=null) return JSON.parse(jsonValue)
        // returning value form localStorage if we have any 

        if (typeof initialValue === 'function'){
            return initialValue()
        }
        // if function, then return initialValue in form of function
        else{
            return initialValue
        }
        // else return value as value
    })

    useEffect(()=>{
        localStorage.setItem(prefixedkey, JSON.stringify(value))
        // first arg is 'key' assigned to localStorage (line 8)
        // second arg is value, here we're converting into JSON string
    }, [prefixedkey, value])
    // if prefixedkey/value state changes, the function executes, else if no params


  return [value,setValue]

}

