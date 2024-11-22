'use server'
import { User } from '../../types/user'

export const createUser = (user: User): void => {
    console.log('Creating user:', user)
}

export const updateUser = (user: User): void => {
    console.log('Updating user:', user)
}

export const deleteUser = (user: User): void => {
    console.log('Deleting user:', user)
}

export const joinGame = (user: User): void => {
    console.log('Joining game:', user)
}

