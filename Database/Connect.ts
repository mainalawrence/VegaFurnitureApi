import sqlConfig from './configaration'
import sql from 'mssql'
export const dbConnection=()=>{
(
    async()=>{
    try {
        
        await sql.connect(sqlConfig).then(con=>{
        if(con.connected)  console.log(`connected to database:${con.connected}`)
        }).catch(err=>console.log(err))

    } catch (error:any) {
        console.log("internale Error :"+error.message);
        
    }

    }
)()
}
