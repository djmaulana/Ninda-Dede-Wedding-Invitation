import { Generated, ColumnType } from 'kysely'
import { createKysely } from '@vercel/postgres-kysely'

// define types
type Database = {
    greeting: GreetingTable
}

type GreetingTable = {
    id: Generated<number>
    name: String
    message: String
}

type MetricsType = {
    greetings: String
    messages: String
}

const db = createKysely<Database>()

export async function getMetrics(): Promise<MetricsType> {

    const res = await db
        .selectFrom(['greeting'])
        .select([
            'greeting.name as greetings',
            'greeting.message as messages',
        ])
        .execute()
    
    return res[0]
    }