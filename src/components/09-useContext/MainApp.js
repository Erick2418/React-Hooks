import React from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const MainApp = () => {
    const user={
        id: 1234,
        name: "Erick",
        email: "Erickjoellimonn@gmail.com"
    }
    return (
        <UserContext.Provider value={user}>
            <AppRouter/>
        </UserContext.Provider>
    )
}
