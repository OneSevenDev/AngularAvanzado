export class UsuarioActualizarRequest {
    constructor(
        public idusuario: string,
        public login: string,
        public clave: string,
        public nombrecompleto: string,
        public rutaimagen: string,
        public idtipousuario: string
    ) {
      }
}
export class Usuario {
    constructor(
        public idusuario: string,
        public login: string,
        public clave: string,
        public nombrecompleto: string,
        public rutaimagen: string,
        public idtipousuario: string
    ) {
      }
}
