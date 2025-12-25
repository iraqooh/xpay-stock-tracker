// import { connectToDatabase } from "../database/mongoose";

// async function main() {
//     try {
//         await connectToDatabase();
//         console.log("Database connection OK!")
//         process.exit(0)
//     } catch (err) {
//         console.error("Error: Database connection failed.")
//         console.error(err)
//         process.exit(1)
//     }
// }

// main()

import { connectToDatabase } from '@/database/mongoose';

export async function GET() {
    try {
        await connectToDatabase();
        return Response.json({
            status: 'ok',
            database: 'connected'
        });
    } catch (error) {
        return Response.json(
            {
                status: 'error',
                message: `Database connection failed: ${error}`
            },
            { status: 500 }
        );
    }
}
