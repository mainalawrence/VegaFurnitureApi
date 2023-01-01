import sqlconnection from '../Database/configaration'

try {
    const res = sqlconnection.connect((res) => {
        console.log(`database connected `);
    })
} catch (error: any) {
    console.log("Error :" + error.message);
}

export default sqlconnection;