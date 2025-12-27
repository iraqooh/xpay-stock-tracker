'use server'

import { headers } from "next/headers";
import { auth } from "../better-auth/auth"
import { inngest } from "../inngest/client"

export const signUpWithEmail = async ({
    email, 
    password, 
    fullName, 
    country, 
    investmentGoals, 
    preferredIndustry,
    riskTolerance
}: SignUpFormData) => {
    console.log("process.env.MONGODB_URI");
    try {
        const response = await auth.api.signUpEmail({
            body: {
                email: email,
                password: password,
                name: fullName
            }
        })

        if(response) {
            await inngest.send({
                name: 'app/user.created',
                data: {
                    email,
                    name: fullName,
                    country,
                    investmentGoals,
                    preferredIndustry,
                    riskTolerance
                }
            })
        }

        return { success: true, data: response }
    } catch (e) {
        console.error('Sign up failed: ', e)
        return {
            success: false,
            error: 'Sign up failed'
        }
    }
}

export const signInWithEmail = async ({
    email, 
    password
}: SignInFormData) => {
    console.log("process.env.MONGODB_URI");
    try {
        const response = await auth.api.signInEmail({
            body: {
                email: email,
                password: password,
            }
        })

        return { success: true, data: response }
    } catch (e) {
        console.error('Sign in failed: ', e)
        return {
            success: false,
            error: 'Sign in failed'
        }
    }
}

export const signOut = async () => {
    try {
        await auth.api.signOut({ headers: await headers()})
    } catch (e) {
        console.error('Sign out failed: ', e)
        return {
            success: false,
            error: 'Sign out failed'
        }
    }
}