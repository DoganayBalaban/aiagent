import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    credentials: [] as Credential[]
}

interface Credential {
    id: number;
    name: string;
    logo: string;
    updated: string;
    created: string;
}

const credentialsSlice = createSlice({
    name:"credentials",
    initialState,
    reducers:{
        addCredential: (state, action: PayloadAction<Credential>)=>{
            state.credentials.push(
                {
                    id: state.credentials.length + 1,
                    name: action.payload.name,
                    logo: action.payload.logo,
                    updated: new Date().toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    }),
                    created: new Date().toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })
                }
            )
        },
        deleteCredential: (state, action: PayloadAction<number>)=>{
            state.credentials = state.credentials.filter((credential)=>credential.id !== action.payload)
        }

    }
})

export const { addCredential, deleteCredential } = credentialsSlice.actions
export default credentialsSlice.reducer
