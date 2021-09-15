'use strict'

const Proyecto = use('App/Models/proyectos');
class ProyectoController {
    async index({ auth}){
        const user = await auth.getUser();    
        return await user.proyectos().fetch();
    }

    async create({ auth, request }){
        const user = await auth.getUser();
        const { nombre } = request.all();
        const project = new project();
        project.fill({
            nombre
        });
        await user.proyectos().save(project);
        return project;
    }
}
module.exports = ProyectoController
