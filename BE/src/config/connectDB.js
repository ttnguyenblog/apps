const { Sequelize } = require("sequelize");

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("quanlyphongkham", "qlpk", "admin@123", {
  host: "qlpk.database.windows.net",
  dialect: "mssql",
  port: 1433,
  logging: false,
  dialectOptions: {
    options: {
      encrypt: true, // Nếu cần thiết khi sử dụng kết nối bảo mật (SSL/TLS)
      enableArithAbort: true
    }
  }
});

let connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
module.exports = connectDB;