const sql = require("mssql");

// Configuration for Azure SQL Database
const config = {
    server: "server-name", // Your server name
    database: "Amitdemotest", // Your database name
    authentication: {
        type: "azure-active-directory-default", // Use interactive authentication
        options: {
            userName: "user-email", // Your Azure AD email
        },
    },
    options: {
        encrypt: true, // Use encryption for Azure SQL
        trustServerCertificate: false, // Set to true if using self-signed certificates
    },
};

// Function to connect and query the database
async function connectToAzureSQL() {
    try {
        const pool = await sql.connect(config);
        console.log("Connected to Azure SQL Database with MFA!");

        // Example query
        const result = await pool.request().query("SELECT TOP 10 * FROM Persons");
        console.log("Query Results: ", result.recordset);

        // Close the connection
        await sql.close();
    } catch (err) {
        console.error("Database connection failed! Error: ", err);
    }
}

// Call the function
connectToAzureSQL();
