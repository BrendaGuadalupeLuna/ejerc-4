class ConectarBD{
    constructor(){
        this.conexion=null;
        this.mysql=require("mysql2");
    }
    async conectarMySql(){
        try {
            this.conexion=await this.mysql.createConnection({
                host:'localhost',
                user:'root',
                password:'root',
                database:'Empresa',
                port:8889
            });
            console.log("Conexión creada a MySql");
        
        } catch (error) {
            console.error("Error al conectar con MySql "+error);
        }
    }
    async cerrarConexion(){
        try {
            await this.conexion.end();
            console.log("Desconexión de MySql");
        } catch (error) {
            console.error("Error al desconectar de MySql "+error);
        }
    }
}

async function principal() {
    var conectarbd=new ConectarBD();
    await conectarbd.conectarMySql();
    await conectarbd.cerrarConexion();
}
principal();