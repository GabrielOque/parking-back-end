// swagger.js
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Estacionamiento",
      description:
        "API para gestión de empleados y registros de estacionamiento.",
      version: "1.0.0",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [{ bearerAuth: [] }],
    paths: {
      "/api/employee": {
        get: {
          summary: "Obtener detalles del empleado",
          description: "Retorna la información del empleado autenticado.",
          security: [{ bearerAuth: [] }],
          responses: {
            200: {
              description: "Información del empleado",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      employee: {
                        type: "object",
                      },
                    },
                  },
                },
              },
            },
            401: { description: "Acceso no autorizado" },
          },
        },
      },
      "/api/employee": {
        post: {
          summary: "Crear un nuevo empleado",
          description: "Registra un nuevo empleado en la base de datos.",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    name: { type: "string" },
                    email: { type: "string" },
                    password: { type: "string" },
                  },
                },
              },
            },
          },
          responses: {
            200: { description: "Empleado creado exitosamente" },
            400: { description: "Error en la solicitud" },
          },
        },
      },
      "/api/employee/login": {
        post: {
          summary: "Iniciar sesión de empleado",
          description:
            "Inicia sesión para un empleado y retorna un token de autenticación.",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    email: { type: "string" },
                    password: { type: "string" },
                  },
                },
              },
            },
          },
          responses: {
            200: { description: "Inicio de sesión exitoso" },
            400: { description: "Usuario no encontrado" },
            401: { description: "Contraseña inválida" },
          },
        },
      },
      "/api/parking/all": {
        get: {
          summary: "Obtener registros de estacionamiento",
          description:
            "Retorna los registros de estacionamiento activos del empleado autenticado.",
          security: [{ bearerAuth: [] }],
          responses: {
            200: {
              description: "Lista de registros de estacionamiento",
              content: {
                "application/json": {
                  schema: {
                    type: "array",
                    items: { type: "object" },
                  },
                },
              },
            },
            400: { description: "Error en la solicitud" },
          },
        },
      },

      "/api/parking/register": {
        post: {
          summary: "Registrar nuevo vehículo",
          description: "Crea un nuevo registro de estacionamiento.",
          security: [{ bearerAuth: [] }],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    plate: { type: "string" },
                    checkIn: { type: "string", format: "date-time" },
                    checkOut: { type: "string", format: "date-time" },
                    nameVehicle: { type: "string" },
                    owner: { type: "string" },
                    documentNumber: { type: "string" },
                  },
                  required: [
                    "plate",
                    "checkIn",
                    "nameVehicle",
                    "owner",
                    "documentNumber",
                  ],
                },
              },
            },
          },
          responses: {
            201: { description: "Registro creado" },
            400: { description: "Error en la solicitud" },
          },
        },
      },

      "/api/parking/close/{id}": {
        put: {
          summary: "Cerrar registro de estacionamiento",
          description:
            "Actualiza el estado de un registro de estacionamiento a COMPLETED.",
          security: [{ bearerAuth: [] }],
          parameters: [
            {
              in: "path",
              name: "id",
              schema: {
                type: "string",
              },
              required: true,
            },
          ],
          responses: {
            200: { description: "Registro actualizado" },
            404: { description: "Registro no encontrado" },
            400: { description: "Error en la solicitud" },
          },
        },
      },
    },
  },
  apis: [],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export { swaggerUi, swaggerDocs };
