
import app from './auto/auto'
import { schema, invertedConfig } from './config'
import { dependency } from './dep'

app = app.runAutoInit({ schema: schema.autoInitSchema, config: invertedConfig, dependency })

export default app

/*

TODO:

[Large-Scale Email Campaigns - Marketing Purposes System - Auto-Comm] 
System needs to manage and send millions of emails efficiently ; 
Segmented Architecture (Separate Services - handle email creation, sending, tracking), 
Bulk-Email Service (smtp), Queuing System (RabbitMQ - handle sending schedules), 
User Engagement (Data Collection & Warehousing - analyze the effectiveness of different campaigns), 
..

*/
