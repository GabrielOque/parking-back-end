> [!WARNING]
> Para correr este proyecto local deben agragarse las .env ejemplo en .env.example, para acceso rapido se anexan:

    PORT=4000
    USER=parking
    DB_NAME=parking
    DB_PASSWORD=parking
    SECRET_KEY=secret

> [!NOTE]
> Asegúrese de tener las versiones estables de Node y npm.
> Versiones usadas:
>
> - Node: v20.9.0
> - npm: 10.5.2

> [!NOTE]
> Ejecute `npm install` cuando clone el repositorio para instalar las dependencias. Use `npm run dev` para levantar el proyecto. Recuerde primero crear archivo
> .env despues de instalar las dependencias.

> [!NOTE]
> Credenciales de usuario: [email: employee1@gmail.com, password: 1234]. Las contraseñas están encriptadas en el backend. (accesos front)

> [!WARNING]
> Asegúrese de que la conexión Wi-Fi que tenga al levantar el backend y el frontend no bloquee los puertos, ya que podría causar problemas.

### Tecnologías

> Express, Node, JWT, Mongoose, Render

### Autenticación

La aplicación utiliza autenticación basada en tokens. Si el usuario no está autenticado, no podrá acceder a las funciones de la aplicación. Una vez que el usuario inicie sesión, se generará un token que permite el acceso sin necesidad de ingresar credenciales nuevamente durante un plazo de 1 hora. Después de este tiempo, el token expirará y será necesario volver a iniciar sesión.

### Pasos para usar la aplicación

0. **Crear nuevos Employee**: Si se quieren crear nuevos empleados para administración del parqueadero usar
   http://localhost:4000/api/employee/ (post) esto en loccal para hacerlo en produccion use un cliente rest y ejecute el dominio https://\*\*.com/api/employee
1. **Iniciar sesión**: Utilice las credenciales proporcionadas (email: `employee1@gmail.com`, password: `1234`) para iniciar sesión en la plataforma.
2. **Iniciar sesión**: La api tiene tosos sus endpoints protegidos

### Problemas comunes

- **Problemas de conexión**: Asegúrese de que su conexión a internet no esté bloqueando los puertos necesarios.
- **Errores de autenticación**: Verifique que las credenciales de usuario sean correctas.
- **Falta de disponibilidad**: Si no puede registrar un vehículo, compruebe si hay espacio disponible en el parqueadero.
