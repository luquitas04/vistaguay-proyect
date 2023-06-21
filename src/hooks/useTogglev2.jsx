import {useState} from 'react'

export const useTogglev2 = () => {
    const [isActive, setIsActive] = useState(false)

    const toggle = () => {
        setIsActive(!isActive)
    }

    return {
        toggle,
        isActive
    }
}